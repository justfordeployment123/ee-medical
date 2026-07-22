import { Router } from 'express';
import multer from 'multer';
import { createHash, randomUUID } from 'crypto';
import path from 'path';
import fs from 'fs';
import sizeOf from 'image-size';
import { uploadsDir, getAdminPageContent, updateField, updateImageRecord, getImageMeta, listAllBlogPostsAdmin, getBlogPostByIdAdmin, createBlogPost, updateBlogPost, deleteBlogPost, listAllReviewsAdmin, createReview, updateReview, deleteReview } from './db.js';

const router = Router();

// ─── Auth ─────────────────────────────────────────────────────────────────────
function makeToken(user, pass) {
  return createHash('sha256').update(`${user}:${pass}`).digest('hex');
}

function auth(req, res, next) {
  const header = req.headers.authorization;
  if (!header || !header.startsWith('Bearer ')) {
    return res.status(401).json({ error: 'Unauthorized' });
  }
  const token = header.slice(7);
  const expected = makeToken(process.env.ADMIN_USER || '', process.env.ADMIN_PASS || '');
  if (token !== expected) return res.status(401).json({ error: 'Unauthorized' });
  next();
}

// ─── Multer ───────────────────────────────────────────────────────────────────
const upload = multer({
  storage: multer.diskStorage({
    destination: uploadsDir,
    filename: (_req, file, cb) => {
      const ext = path.extname(file.originalname).toLowerCase();
      cb(null, `${randomUUID()}${ext}`);
    },
  }),
  fileFilter: (_req, file, cb) => {
    const allowed = ['image/jpeg', 'image/png', 'image/webp', 'image/gif'];
    cb(null, allowed.includes(file.mimetype));
  },
  limits: { fileSize: 15 * 1024 * 1024 }, // 15 MB
});

// ─── Routes ───────────────────────────────────────────────────────────────────

// POST /api/admin/login
router.post('/login', (req, res) => {
  const { user, pass } = req.body || {};
  const adminUser = process.env.ADMIN_USER || '';
  const adminPass = process.env.ADMIN_PASS || '';
  if (!adminUser || !adminPass) {
    return res.status(500).json({ error: 'Admin credentials not configured on server.' });
  }
  if (user === adminUser && pass === adminPass) {
    return res.json({ token: makeToken(user, pass) });
  }
  res.status(401).json({ error: 'Invalid username or password.' });
});

// GET /api/admin/page/:page — all fields + images for admin UI
router.get('/page/:page', auth, (req, res) => {
  try {
    const data = getAdminPageContent(req.params.page);
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// PUT /api/admin/content — save a single text field
router.put('/content', auth, (req, res) => {
  const { page, section, field_key, value } = req.body || {};
  if (!page || !section || !field_key || value === undefined) {
    return res.status(400).json({ error: 'Missing page, section, field_key, or value.' });
  }
  try {
    updateField(page, section, field_key, value);
    res.json({ ok: true });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST /api/admin/image/:page/:section/:key — upload image
router.post('/image/:page/:section/:key', auth, upload.single('image'), (req, res) => {
  if (!req.file) return res.status(400).json({ error: 'No image file received. Allowed: jpeg, png, webp, gif.' });

  const { page, section, key } = req.params;
  const alt = (req.body.alt || '').trim();
  const filePath = req.file.path;

  try {
    const meta = getImageMeta(page, section, key);
    if (!meta) {
      fs.unlinkSync(filePath);
      return res.status(404).json({ error: 'Unknown image slot.' });
    }

    // Validate dimensions
    const dims = sizeOf(fs.readFileSync(filePath));
    if (dims.width !== meta.required_width || dims.height !== meta.required_height) {
      fs.unlinkSync(filePath);
      return res.status(400).json({
        error: `Wrong dimensions. Required: ${meta.required_width}×${meta.required_height}px. Your image: ${dims.width}×${dims.height}px. Please resize and try again.`,
      });
    }

    updateImageRecord(page, section, key, req.file.filename, alt);
    res.json({ ok: true, url: `/api/uploads/${req.file.filename}` });
  } catch (err) {
    if (fs.existsSync(filePath)) fs.unlinkSync(filePath);
    res.status(500).json({ error: err.message });
  }
});

// POST /api/admin/blog/cover — blog hero (no fixed slot; relaxed size limits)
router.post('/blog/cover', auth, upload.single('image'), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: 'No image file. Allowed: JPEG, PNG, WebP, GIF (max 15 MB).' });
  }
  const filePath = req.file.path;
  try {
    const dims = sizeOf(fs.readFileSync(filePath));
    const maxW = 4096;
    const maxH = 4096;
    const minW = 200;
    const minH = 200;
    if (!dims.width || !dims.height) {
      fs.unlinkSync(filePath);
      return res.status(400).json({ error: 'Could not read image dimensions.' });
    }
    if (dims.width > maxW || dims.height > maxH) {
      fs.unlinkSync(filePath);
      return res.status(400).json({
        error: `Image too large. Maximum ${maxW}×${maxH}px. Your file: ${dims.width}×${dims.height}px.`,
      });
    }
    if (dims.width < minW || dims.height < minH) {
      fs.unlinkSync(filePath);
      return res.status(400).json({
        error: `Image too small for a clear cover. Use at least ${minW}×${minH}px. Your file: ${dims.width}×${dims.height}px.`,
      });
    }
    const path = `/api/uploads/${req.file.filename}`;
    res.json({ ok: true, path, url: path });
  } catch (err) {
    if (fs.existsSync(filePath)) fs.unlinkSync(filePath);
    res.status(500).json({ error: err.message });
  }
});

// ─── Blog posts (CMS) ─────────────────────────────────────────────────────────
router.get('/blog', auth, (_req, res) => {
  try {
    res.json({ posts: listAllBlogPostsAdmin() });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get('/blog/:id', auth, (req, res) => {
  try {
    const id = Number(req.params.id);
    if (!Number.isFinite(id)) return res.status(400).json({ error: 'Invalid id' });
    const post = getBlogPostByIdAdmin(id);
    if (!post) return res.status(404).json({ error: 'Not found' });
    res.json(post);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.post('/blog', auth, (req, res) => {
  try {
    const post = createBlogPost(req.body || {});
    res.json(post);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.put('/blog/:id', auth, (req, res) => {
  try {
    const id = Number(req.params.id);
    if (!Number.isFinite(id)) return res.status(400).json({ error: 'Invalid id' });
    const post = updateBlogPost(id, req.body || {});
    res.json(post);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.delete('/blog/:id', auth, (req, res) => {
  try {
    const id = Number(req.params.id);
    if (!Number.isFinite(id)) return res.status(400).json({ error: 'Invalid id' });
    deleteBlogPost(id);
    res.json({ ok: true });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// ─── Reviews (admin CRUD) ─────────────────────────────────────────────────────
router.get('/reviews', auth, (_req, res) => {
  try { res.json({ reviews: listAllReviewsAdmin() }); }
  catch (err) { res.status(500).json({ error: err.message }); }
});

router.post('/reviews', auth, (req, res) => {
  try {
    const r = createReview(req.body || {});
    res.json(r);
  } catch (err) { res.status(400).json({ error: err.message }); }
});

router.put('/reviews/:id', auth, (req, res) => {
  try {
    const id = Number(req.params.id);
    if (!Number.isFinite(id)) return res.status(400).json({ error: 'Invalid id' });
    const r = updateReview(id, req.body || {});
    res.json(r);
  } catch (err) { res.status(400).json({ error: err.message }); }
});

router.delete('/reviews/:id', auth, (req, res) => {
  try {
    const id = Number(req.params.id);
    if (!Number.isFinite(id)) return res.status(400).json({ error: 'Invalid id' });
    deleteReview(id);
    res.json({ ok: true });
  } catch (err) { res.status(400).json({ error: err.message }); }
});

export default router;
