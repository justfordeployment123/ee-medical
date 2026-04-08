import { Router } from 'express';
import multer from 'multer';
import { createHash, randomUUID } from 'crypto';
import path from 'path';
import fs from 'fs';
import sizeOf from 'image-size';
import { uploadsDir, getAdminPageContent, updateField, updateImageRecord, getImageMeta } from './db.js';

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

export default router;
