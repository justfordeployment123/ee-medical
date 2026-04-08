import Database from 'better-sqlite3';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Ensure uploads directory exists
export const uploadsDir = path.join(__dirname, '..', 'uploads');
if (!fs.existsSync(uploadsDir)) fs.mkdirSync(uploadsDir, { recursive: true });

const dbPath = path.join(__dirname, '..', 'content.db');
export const db = new Database(dbPath);
db.pragma('journal_mode = WAL');

// ─── Tables ───────────────────────────────────────────────────────────────────
db.exec(`
  CREATE TABLE IF NOT EXISTS content (
    id          INTEGER PRIMARY KEY AUTOINCREMENT,
    page        TEXT    NOT NULL,
    section     TEXT    NOT NULL,
    field_key   TEXT    NOT NULL,
    label       TEXT    NOT NULL DEFAULT '',
    field_type  TEXT    NOT NULL DEFAULT 'text',
    value       TEXT    NOT NULL DEFAULT '',
    word_limit  INTEGER,
    UNIQUE(page, section, field_key)
  );

  CREATE TABLE IF NOT EXISTS images (
    id              INTEGER PRIMARY KEY AUTOINCREMENT,
    page            TEXT    NOT NULL,
    section         TEXT    NOT NULL,
    field_key       TEXT    NOT NULL,
    label           TEXT    NOT NULL DEFAULT '',
    filename        TEXT    DEFAULT NULL,
    url             TEXT    DEFAULT NULL,
    required_width  INTEGER,
    required_height INTEGER,
    alt             TEXT    NOT NULL DEFAULT '',
    UNIQUE(page, section, field_key)
  );
`);

// ─── Seed helpers ─────────────────────────────────────────────────────────────
const insertField = db.prepare(`
  INSERT OR IGNORE INTO content (page, section, field_key, label, field_type, value, word_limit)
  VALUES (?, ?, ?, ?, ?, ?, ?)
`);
const insertImage = db.prepare(`
  INSERT OR IGNORE INTO images (page, section, field_key, label, url, required_width, required_height, alt)
  VALUES (?, ?, ?, ?, ?, ?, ?, ?)
`);

function f(page, section, key, label, type, value, limit) {
  insertField.run(page, section, key, label, type, value, limit ?? null);
}
function img(page, section, key, label, url, w, h, alt) {
  insertImage.run(page, section, key, label, url, w, h, alt ?? '');
}

// ─── HOME PAGE SEED ───────────────────────────────────────────────────────────

// Hero
f('home','hero','badge_text',      'Trust Badge Text',           'text',     'Trusted by Most Healthcare Companies Worldwide', 10);
f('home','hero','h1_line1',        'Heading Line 1',             'text',     'Navigating FDA',            5);
f('home','hero','h1_line2',        'Heading Line 2 (highlight)', 'text',     'Regulatory Pathways',       5);
f('home','hero','h1_line3',        'Heading Line 3',             'text',     'With Precision',            5);
f('home','hero','subtext',         'Hero Paragraph',             'textarea', 'Expert consulting for medical device compliance, quality management systems, and regulatory submissions. Over 32 years positioning clients at the forefront of healthcare innovation.', 40);
f('home','hero','btn1_text',       'Button 1 Text',              'text',     'Get Started',               5);
f('home','hero','btn2_text',       'Button 2 Text (AI)',         'text',     'Check my FDA pathway (AI)', 8);
f('home','hero','btn3_text',       'Button 3 Text',              'text',     'Our Software',              5);
f('home','hero','stat1_value',     'Mini Stat 1 Value',          'text',     '266+',                      3);
f('home','hero','stat1_label',     'Mini Stat 1 Label',          'text',     '510(k) Filed',              5);
f('home','hero','stat2_value',     'Mini Stat 2 Value',          'text',     '63',                        3);
f('home','hero','stat2_label',     'Mini Stat 2 Label',          'text',     'Experts',                   5);
f('home','hero','stat3_value',     'Mini Stat 3 Value',          'text',     '213+',                      3);
f('home','hero','stat3_label',     'Mini Stat 3 Label',          'text',     'ISO Certified',             5);
f('home','hero','badge1',          'Trust Badge 1',              'text',     'FDA Registered',            5);
f('home','hero','badge2',          'Trust Badge 2',              'text',     'ISO Certified',             5);
f('home','hero','badge3',          'Trust Badge 3',              'text',     'MDSAP Ready',               5);
f('home','hero','logos_label',     'Logos Strip Label',          'text',     'Regulatory Standards We Work With', 8);
img('home','hero','bg_image','Hero Background Image','https://images.unsplash.com/photo-1581093588401-fbb62a02f120?q=80&w=2000&auto=format&fit=crop',1920,1080,'Hero background');

// Why Choose Us
f('home','why','section_heading',  'Section Heading',      'text',     'A Trusted Partner in Healthcare Regulation', 10);
f('home','why','section_subtext',  'Section Subtext',      'textarea', 'We combine deep regulatory expertise with a consultative approach to help you achieve market access faster and with confidence.', 30);
f('home','why','block1_tagline',   'Block 1 Tagline',      'text',     'Our Expertise',  5);
f('home','why','block1_title',     'Block 1 Title',        'text',     '32+ Years of FDA Regulatory Excellence', 10);
f('home','why','block1_desc',      'Block 1 Description',  'textarea', 'With over three decades of experience navigating complex FDA regulatory pathways, we bring unmatched expertise to every project. Our team has successfully guided hundreds of medical device and pharmaceutical companies through the approval process.', 60);
f('home','why','block1_point1',    'Block 1 Bullet 1',     'text',     '266+ successful 510(k) submissions filed', 15);
f('home','why','block1_point2',    'Block 1 Bullet 2',     'text',     'Expert team of 63 FDA regulatory professionals', 15);
f('home','why','block1_point3',    'Block 1 Bullet 3',     'text',     'Proven track record across Class I, II & III devices', 15);
f('home','why','block1_point4',    'Block 1 Bullet 4',     'text',     'Strategic regulatory intelligence and pathway analysis', 15);
f('home','why','block1_link',      'Block 1 Link Text',    'text',     'About our experience', 5);
f('home','why','block1_stat_val',  'Block 1 Stat Value',   'text',     '266+', 3);
f('home','why','block1_stat_lbl',  'Block 1 Stat Label',   'text',     '510(k) Filed', 5);
f('home','why','block2_tagline',   'Block 2 Tagline',      'text',     'Global Reach',  5);
f('home','why','block2_title',     'Block 2 Title',        'text',     'Compliance Partners Across the Globe', 10);
f('home','why','block2_desc',      'Block 2 Description',  'textarea', 'Well-established partnerships across the EU, Asia, and USA. Our customers consider us not just consultants, but strategic outsourcing partners who understand regional regulatory requirements.', 60);
f('home','why','block2_point1',    'Block 2 Bullet 1',     'text',     'Active partnerships across EU, Asia & North America', 15);
f('home','why','block2_point2',    'Block 2 Bullet 2',     'text',     'CE Mark, EU MDR, and international compliance expertise', 15);
f('home','why','block2_point3',    'Block 2 Bullet 3',     'text',     '213+ ISO 13485 implementations worldwide', 15);
f('home','why','block2_point4',    'Block 2 Bullet 4',     'text',     'Multi-language regulatory document support', 15);
f('home','why','block2_link',      'Block 2 Link Text',    'text',     'Explore global services', 5);
f('home','why','block2_stat_val',  'Block 2 Stat Value',   'text',     '213+', 3);
f('home','why','block2_stat_lbl',  'Block 2 Stat Label',   'text',     'ISO Implementations', 5);
img('home','why','block1_image','Block 1 Image','https://images.unsplash.com/photo-1530497610245-94d3c16cda28?q=80&w=1400&auto=format&fit=crop',800,600,'32+ Years of FDA Regulatory Excellence');
img('home','why','block2_image','Block 2 Image','https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?q=80&w=1400&auto=format&fit=crop',800,600,'Compliance Partners Across the Globe');

// Stats
f('home','stats','badge_text',   'Badge Text',       'text',     'By the Numbers', 5);
f('home','stats','heading',      'Section Heading',  'text',     'Over 32 Years of Experience', 8);
f('home','stats','subtext',      'Section Subtext',  'textarea', 'Well-established partners across the EU, Asia, and USA. Our customers consider us not just consultants, but strategic outsourcing partners.', 40);
f('home','stats','stat1_value',  'Stat 1 Value',     'text',     '470+',  3);
f('home','stats','stat1_label',  'Stat 1 Label',     'text',     'Successful Projects', 5);
f('home','stats','stat2_value',  'Stat 2 Value',     'text',     '63',    3);
f('home','stats','stat2_label',  'Stat 2 Label',     'text',     'FDA Regulatory Experts', 5);
f('home','stats','stat3_value',  'Stat 3 Value',     'text',     '266+',  3);
f('home','stats','stat3_label',  'Stat 3 Label',     'text',     'FDA 510(k) Submissions', 5);
f('home','stats','stat4_value',  'Stat 4 Value',     'text',     '213+',  3);
f('home','stats','stat4_label',  'Stat 4 Label',     'text',     'ISO 13485 Implementations', 5);
img('home','stats','bg_image','Stats Background Image','https://images.unsplash.com/photo-1551076805-e1869033e561?q=80&w=2000&auto=format&fit=crop',1920,1080,'Stats background');

// FAQ
f('home','faq','section_heading', 'Section Heading',    'text',     'Frequently Asked Questions', 8);
f('home','faq','section_subtext', 'Section Subtext',    'textarea', 'Get answers to common questions about our regulatory consulting services and processes.', 20);
f('home','faq','panel_heading',   'Side Panel Heading', 'text',     'Have More Questions?', 5);
f('home','faq','panel_text',      'Side Panel Text',    'textarea', 'Our team of 63 FDA regulatory experts is ready to answer your specific questions and guide you through the process.', 30);
f('home','faq','q1','FAQ 1 Question','text',    'What types of medical devices do you provide regulatory consulting for?', 20);
f('home','faq','a1','FAQ 1 Answer',  'textarea','We provide regulatory consulting for all classes of medical devices — Class I, II, and III — including in vitro diagnostics (IVDs), combination products, and AI/ML-based Software as a Medical Device (SaMD). Our expertise covers 510(k), De Novo, PMA, IDE, and international submissions including CE Mark and EU MDR.', 100);
f('home','faq','q2','FAQ 2 Question','text',    'How long does the FDA 510(k) submission process typically take?', 20);
f('home','faq','a2','FAQ 2 Answer',  'textarea','The FDA 510(k) review process typically takes 3-6 months from submission to clearance. However, preparation time varies based on device complexity. With our streamlined approach and 266+ successful submissions, we help optimize timelines by ensuring complete, high-quality submissions from the start.', 100);
f('home','faq','q3','FAQ 3 Question','text',    'Do you offer services for pharmaceutical and biologic products?', 20);
f('home','faq','a3','FAQ 3 Answer',  'textarea','Yes, we offer comprehensive regulatory services for pharmaceuticals and biologics including IND applications, NDA/ANDA submissions, Biologics License Applications (BLA), Drug Master Files (DMF), and CMC documentation. Our team supports the full product lifecycle from development through post-market compliance.', 100);
f('home','faq','q4','FAQ 4 Question','text',    'Can you help with AI and machine learning medical device regulations?', 20);
f('home','faq','a4','FAQ 4 Answer',  'textarea',"Absolutely. We specialize in AI/ML regulatory pathways including FDA's framework for AI-enabled SaMD, Predetermined Change Control Plans (PCCP), AI-specific design controls, and QMSR compliance. Our team stays current with FDA's evolving guidance on artificial intelligence in medical devices.", 100);
f('home','faq','q5','FAQ 5 Question','text',    'What is included in your ISO 13485 implementation service?', 20);
f('home','faq','a5','FAQ 5 Answer',  'textarea',"Our ISO 13485 implementation includes gap analysis, quality management system design, documentation development, process mapping, internal auditor training, management review setup, and certification audit preparation. We've completed 213+ implementations and provide ongoing support to maintain compliance.", 100);
f('home','faq','q6','FAQ 6 Question','text',    'Do you provide international regulatory support beyond the US?', 20);
f('home','faq','a6','FAQ 6 Answer',  'textarea','Yes, we have established partnerships across the EU, Asia, and North America. Our international services include CE Mark / EU MDR compliance, CCC Mark approval for China, MDSAP certification, and multi-market regulatory strategy. We support companies seeking simultaneous market access across multiple regions.', 100);
img('home','faq','side_image','FAQ Side Image','https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1400&auto=format&fit=crop',700,900,'Medical device regulatory consulting');

// Reviews
f('home','reviews','section_heading', 'Section Heading', 'text',     'What Our Customers & Partners Say', 10);
f('home','reviews','section_subtext', 'Section Subtext', 'textarea', 'Real experiences from clients who have trusted E & E Medicals and Consulting for medical supplies, regulatory consulting, and FDA submissions.', 30);
f('home','reviews','r1_name',  'Review 1 Name',  'text',     'Maria Abba', 5);
f('home','reviews','r1_title', 'Review 1 Title', 'text',     'Happy customer', 5);
f('home','reviews','r1_quote', 'Review 1 Quote', 'textarea', 'Very knowledgeable and professional with excellent customer service. I would do business with them again.', 60);
f('home','reviews','r2_name',  'Review 2 Name',  'text',     'IT SPECIALIST', 5);
f('home','reviews','r2_title', 'Review 2 Title', 'text',     'Super & Superb', 5);
f('home','reviews','r2_quote', 'Review 2 Quote', 'textarea', 'They were very knowledgeable about the equipment they supply. They answered all my questions on the care and maintenance. I am enjoying the machine I bought from them. This is an excellent company compared to the one my wife was using before.', 60);
f('home','reviews','r3_name',  'Review 3 Name',  'text',     'Ebini Mbi', 5);
f('home','reviews','r3_title', 'Review 3 Title', 'text',     'Astounding Service.', 5);
f('home','reviews','r3_quote', 'Review 3 Quote', 'textarea', 'I am really happy with the service of E&E MEDICALS. To me, E&E MEDICALS was above any other medical supply companies I have dealt with. Dr. Eyong was very helpful and professional. E&E MEDICALS is a place to call and visit for all your medical supplies. Their products are amazing with excellent and superb service. They truely care about helping other. I strongly recommend E&E MEDICALS to everyone.', 60);
f('home','reviews','r4_name',  'Review 4 Name',  'text',     'Cynthia T.', 5);
f('home','reviews','r4_title', 'Review 4 Title', 'text',     'Speedy FDA 510k Submission Service', 8);
f('home','reviews','r4_quote', 'Review 4 Quote', 'textarea', 'After working with more than 30 consultants in the medical industry, I discovered that the consultants of E&E Medicals are more experience in FDA regulatory and medical device development. They understand not only the regulatory side of your submission but also the marketing aspects of medical devices. Our 510k submission was speedy, and clearance was achieved within 59 days. They are the best!', 60);
f('home','reviews','r5_name',  'Review 5 Name',  'text',     'Anthony Nkokwoh', 5);
f('home','reviews','r5_title', 'Review 5 Title', 'text',     'Great customer services', 5);
f('home','reviews','r5_quote', 'Review 5 Quote', 'textarea', 'You have excellent customer service and high quality products. I enjoyed the way your staff treated me through out the whole process. I will definitely come back for more products.', 60);

// CTA Banner
f('home','cta','badge_text',     'Badge Text',              'text',     'Free Consultation Available', 5);
f('home','cta','heading_line1',  'Heading Line 1',          'text',     'Ready to Navigate Your', 8);
f('home','cta','heading_line2',  'Heading Line 2 (highlight)','text',   'Regulatory Pathway?', 5);
f('home','cta','subtext',        'Subtext Paragraph',       'textarea', 'Schedule a free consultation with our FDA regulatory experts and take the first step toward market approval.', 30);
f('home','cta','btn1_text',      'Button 1 Text',           'text',     'Schedule Free Consultation', 5);
f('home','cta','btn2_text',      'Button 2 Text (phone)',   'text',     'Call (678) 385-6106', 5);
f('home','cta','t1_quote',       'Testimonial 1 Quote',     'textarea', "E&E Medicals guided us through the entire 510(k) process with expertise and precision. Their deep FDA knowledge saved us months of delays.", 60);
f('home','cta','t1_role',        'Testimonial 1 Role',      'text',     'VP of Regulatory Affairs', 8);
f('home','cta','t1_company',     'Testimonial 1 Company',   'text',     'Fortune 500 Medical Device Company', 8);
f('home','cta','t2_quote',       'Testimonial 2 Quote',     'textarea', "Their ISO 13485 implementation was seamless. The team's hands-on approach and attention to detail made what could have been overwhelming feel manageable.", 60);
f('home','cta','t2_role',        'Testimonial 2 Role',      'text',     'Director of Quality', 8);
f('home','cta','t2_company',     'Testimonial 2 Company',   'text',     'Global IVD Manufacturer', 8);
f('home','cta','t3_quote',       'Testimonial 3 Quote',     'textarea', "Outstanding support with our EU MDR transition. E&E Medicals' global regulatory knowledge is unmatched in the industry.", 60);
f('home','cta','t3_role',        'Testimonial 3 Role',      'text',     'Chief Compliance Officer', 8);
f('home','cta','t3_company',     'Testimonial 3 Company',   'text',     'European MedTech Company', 8);
img('home','cta','bg_image','CTA Background Image','https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=2000&auto=format&fit=crop',1920,1080,'CTA background');

// ─── Query helpers ────────────────────────────────────────────────────────────

/** Public: returns { section: { field_key: value } } */
export function getPageContent(page) {
  const fields = db.prepare('SELECT section, field_key, value FROM content WHERE page = ?').all(page);
  const images = db.prepare('SELECT section, field_key, filename, url, alt FROM images WHERE page = ?').all(page);

  const out = {};
  for (const r of fields) {
    if (!out[r.section]) out[r.section] = {};
    out[r.section][r.field_key] = r.value;
  }
  for (const r of images) {
    if (!out[r.section]) out[r.section] = {};
    out[r.section][r.field_key] = r.filename ? `/api/uploads/${r.filename}` : (r.url || null);
    out[r.section][`${r.field_key}_alt`] = r.alt;
  }
  return out;
}

/** Admin: returns raw rows for editing UI */
export function getAdminPageContent(page) {
  const fields = db.prepare('SELECT * FROM content WHERE page = ? ORDER BY section, id').all(page);
  const images = db.prepare('SELECT * FROM images WHERE page = ? ORDER BY section, id').all(page);
  return { fields, images };
}

export function updateField(page, section, field_key, value) {
  db.prepare('UPDATE content SET value = ? WHERE page = ? AND section = ? AND field_key = ?')
    .run(value, page, section, field_key);
}

export function updateImageRecord(page, section, field_key, filename, alt) {
  db.prepare('UPDATE images SET filename = ?, url = NULL, alt = ? WHERE page = ? AND section = ? AND field_key = ?')
    .run(filename, alt, page, section, field_key);
}

export function getImageMeta(page, section, field_key) {
  return db.prepare('SELECT * FROM images WHERE page = ? AND section = ? AND field_key = ?')
    .get(page, section, field_key);
}
