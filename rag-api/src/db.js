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

// ─── ABOUT PAGE SEED ─────────────────────────────────────────────────────────

// About – Main Content
f('about','main','heading',     'Main Heading',          'text',     'Your trusted partners in Regulatory Compliance & Quality Assurance.', 15);
f('about','main','paragraph1',  'Paragraph 1',           'textarea', 'E&E Medicals & Consulting is a premier regulatory affairs consulting firm dedicated to helping medical device, IVD, and pharmaceutical companies navigate the complex landscape of FDA and international regulations.', 50);
f('about','main','paragraph2',  'Paragraph 2',           'textarea', 'With over 32 years of combined experience, our experts provide strategic guidance, gap analysis, and hands-on implementation support to ensure your products reach the market safely and efficiently.', 50);
f('about','main','check1',      'Checklist Item 1',      'text',     'End-to-end 510(k), PMA, and De Novo submissions.', 15);
f('about','main','check2',      'Checklist Item 2',      'text',     'ISO 13485, ISO 14971, and QMSR implementation.', 15);
f('about','main','check3',      'Checklist Item 3',      'text',     'CE marking, EU MDR/IVDR, and global market access.', 15);
f('about','main','stat1_value', 'Stat 1 Value',          'text',     '32+',  3);
f('about','main','stat1_label', 'Stat 1 Label',          'text',     'Years Experience', 5);
f('about','main','stat2_value', 'Stat 2 Value',          'text',     '470+', 3);
f('about','main','stat2_label', 'Stat 2 Label',          'text',     'Projects Completed', 5);
f('about','main','stat3_value', 'Stat 3 Value',          'text',     '63',   3);
f('about','main','stat3_label', 'Stat 3 Label',          'text',     'Expert Consultants', 5);
f('about','main','cap1_title',  'Capability Card 1 Title','text',    'FDA & Global Compliance', 8);
f('about','main','cap1_text',   'Capability Card 1 Text', 'textarea','Proven track record with FDA, CE marking, and international regulatory bodies across 40+ countries.', 25);
f('about','main','cap2_title',  'Capability Card 2 Title','text',    'Quality Management Systems', 8);
f('about','main','cap2_text',   'Capability Card 2 Text', 'textarea','Customized QMS implementation including ISO 13485, ISO 9001, and QMSR compliance.', 25);
f('about','main','cap3_title',  'Capability Card 3 Title','text',    'Post-Market Surveillance', 8);
f('about','main','cap3_text',   'Capability Card 3 Text', 'textarea','Dedicated support for clinical data management and post-market compliance under MDR/IVDR.', 25);
img('about','main','team_photo','Team / Office Photo','https://images.unsplash.com/photo-1551076805-e1869033e561?q=80&w=1200&auto=format&fit=crop',1200,800,'Medical device regulatory consulting team');

// About – Mission Strip
f('about','mission','mission_title', 'Mission Title',  'text',     'Our Mission', 5);
f('about','mission','mission_text',  'Mission Text',   'textarea', 'To empower healthcare and life sciences companies with expert regulatory guidance, ensuring safe and compliant products reach patients worldwide.', 40);
f('about','mission','vision_title',  'Vision Title',   'text',     'Our Vision',  5);
f('about','mission','vision_text',   'Vision Text',    'textarea', 'To be the most trusted global partner for regulatory affairs, quality systems, and market access in the medical device and pharmaceutical industries.', 40);
f('about','mission','values_title',  'Values Title',   'text',     'Our Values',  5);
f('about','mission','values_text',   'Values Text',    'textarea', 'Integrity, excellence, and client-centricity drive every engagement. We hold ourselves to the highest standards of ethical practice and scientific rigor.', 40);

// ─── CAREERS PAGE SEED ───────────────────────────────────────────────────────

f('careers','intro','badge',       'Top Badge Text',    'text',     'Join Our Team', 5);
f('careers','intro','heading',     'Main Heading',      'text',     'Join Our Mission to Improve Patient Health and Safety', 15);
f('careers','intro','subtitle',    'Subtitle Text',     'textarea', 'E&E Medicals & Consulting is a global regulatory, quality, and AI compliance partner for medical device and life science innovators. Our teams help clients bring safe, effective, and compliant products to patients worldwide.', 50);
f('careers','intro','paragraph1',  'Intro Paragraph',   'textarea', 'At E&E Medicals, you will work alongside experienced regulatory strategists, quality leaders, and AI governance experts. Together, we solve complex problems at the intersection of FDA regulations, EU MDR/IVDR, the EU AI Act, and international standards.', 60);
f('careers','intro','culture_heading',  'Culture Section Heading', 'text', 'How We Work', 8);
f('careers','intro','opps_heading',     'Opportunities Section Heading', 'text', 'Areas of Opportunity', 8);
f('careers','intro','profile_heading',  'Profile Section Heading', 'text', 'Who We Are Looking For', 8);
f('careers','intro','apply_heading',    'How to Apply Heading',    'text', 'How to Apply', 5);
f('careers','intro','cta_heading',      'CTA Heading',             'text', 'Explore a Career at E&E Medicals', 8);
f('careers','intro','cta_text',         'CTA Text',                'textarea', 'We are actively building our team. If you are passionate about improving patient outcomes through better, safer medical technologies, we want to hear from you.', 40);
f('careers','intro','apply_email',      'Application Email',       'text', 'info@eemedicals.com', 5);

// ─── MEDIA PAGE SEED ─────────────────────────────────────────────────────────

f('media','header','section_heading', 'Page Heading',   'text',     'News, Insights & Regulatory Updates', 10);
f('media','header','section_subtext', 'Page Subtext',   'textarea', 'Stay current with the latest in FDA regulatory affairs, medical device compliance, ISO standards, and global market access. Insights from our expert consulting team.', 40);
f('media','header','cta_heading',     'Sidebar CTA Heading', 'text','Need Expert Guidance?', 5);
f('media','header','cta_text',        'Sidebar CTA Text',    'textarea','Our FDA regulatory experts are ready to help with your specific questions and compliance needs.', 30);

// ─── MEDICAL DEVICES PAGE SEED ───────────────────────────────────────────────

f('medical_devices','hero','badge_text',     'Section Badge',       'text',     'Quality Assurance', 5);
f('medical_devices','hero','title',          'Section Title',       'text',     'Medical Devices Quality Assurance', 10);
f('medical_devices','hero','intro_text',     'Intro Paragraph',     'textarea', 'Most medical device companies understand the risks of developing and mass-producing their products. However, many of these companies are not aware how to combat these risks effectively and efficiently. It is possible to experience the peace of mind that comes with employing a trusted medical device.', 80);
f('medical_devices','hero','paragraph2',     'Paragraph 2',         'textarea', 'The FDA\'s Quality System Regulation (21 CFR Part 820) requires medical device manufacturers to maintain a quality control & assurance system that uses a total quality approach to ensure product safety and effectiveness. The GMP requirements in QSR are harmonized with ISO 9001 and ISO 13485 because they are recognized worldwide as a stamp of quality.', 100);
f('medical_devices','hero','paragraph3',     'Paragraph 3',         'textarea', 'E & E Medicals and Consulting will help to prepare you very well with the ultimate goal of bringing your organization into compliance with FDA requirements. The FDA\'s Quality System Regulation (21 CFR Part 820) and ISO 13485. We will also assist you in the various forms of implementation needed to meet with standards.', 100);
img('medical_devices','hero','hero_image','Hero Image','https://images.unsplash.com/photo-1559757148-5c350d0d3c56?q=80&w=1400&auto=format&fit=crop',1400,700,'Medical devices quality assurance testing');

// ─── FDA INTERACTION DEFENSE PAGE SEED ───────────────────────────────────────

f('fda_defense','hero','badge_text',      'Section Badge',        'text',     'FDA Strategy', 5);
f('fda_defense','hero','title',           'Section Title',        'text',     'FDA Defense Support Plan', 10);
f('fda_defense','hero','quote_text',      'Quote Box Text',       'textarea', 'We de-risk AI healthcare products by designing regulatory-approvable AI systems and pre-empting FDA review failures.', 40);
f('fda_defense','hero','description',     'Description Paragraph','textarea', 'We prepare a comprehensive, FDA-ready Interaction & Defense Support Plan for direct internal use across PMA, 510(k), De Novo, IND/IDE, AI/ML SaMD, CDx, NGS, or clinical trial interactions.', 80);
f('fda_defense','hero','purpose_text',    'Purpose Text',         'text',     'Survive Pre-Subs, Interactive Review, and Panels', 10);
img('fda_defense','hero','hero_image','Hero Image','https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1400&auto=format&fit=crop',1400,700,'FDA interaction and defense support regulatory meeting');

f('fda_defense','deliverables','badge_text',    'Section Badge',       'text', 'Deliverables', 5);
f('fda_defense','deliverables','title',         'Section Title',       'text', 'Deliverables & Engagement', 10);
f('fda_defense','deliverables','heading',       'Left Column Heading', 'text', 'What You Receive', 5);
f('fda_defense','deliverables','item1',         'Deliverable 1',       'text', 'Pre-Sub briefing package (AI-focused)', 10);
f('fda_defense','deliverables','item2',         'Deliverable 2',       'text', 'Mock FDA deficiency letters', 10);
f('fda_defense','deliverables','item3',         'Deliverable 3',       'text', 'Reviewer-style Q&A scripts', 10);
f('fda_defense','deliverables','item4',         'Deliverable 4',       'text', 'Advisory panel defense slides', 10);
f('fda_defense','deliverables','item5',         'Deliverable 5',       'text', 'Response drafting support', 10);
f('fda_defense','deliverables','duration_label','Duration Label',       'text', 'Duration', 5);
f('fda_defense','deliverables','duration_value','Duration Value',       'text', 'As needed', 5);
f('fda_defense','deliverables','cta_text',      'CTA Text',            'textarea', 'For more details, submit your details at our contact form.', 20);

// ─── POSTMARKET COMPLIANCE PAGE SEED ──────────────────────────────────────────

f('postmarket','hero','badge_text',      'Section Badge',        'text',     'Post-Market Surveillance', 5);
f('postmarket','hero','title',           'Section Title',        'text',     'Regulatory Post Market Surveillance Process', 10);
f('postmarket','hero','subtitle',        'Subtitle Text',        'text',     'Clinical data and postmarket compliance under the MDR', 10);
img('postmarket','hero','hero_image','Hero Image','https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1400&auto=format&fit=crop',1400,700,'Postmarket compliance clinical data MDR surveillance');

f('postmarket','pms','badge_text',       'Section Badge',        'text',     'Post-Market Surveillance', 5);
f('postmarket','pms','title',            'Section Title',        'text',     'Regulatory Post Market Surveillance Process', 10);
f('postmarket','pms','paragraph1',       'Paragraph 1 (Intro)',   'textarea', 'It is called as medical device post-market surveillance (PMS), a system that provides continuous feedback about a device on the market. In order to high standard of product quality. PMS is a regulatory requirement in major markets like Europe and the United States. Purpose of PostMarket compliance is to ensure that the provisions of medical devices.', 100);
f('postmarket','pms','paragraph2',       'Paragraph 2',          'textarea', 'Legislation are complied with devices are placed on the market put into service. It aims to ensure that compliant devices are removed from the market. Medical device manufacturers, Other firms involved in the distribution of devices. Must follow certain requirements regulations devices are on the market.', 100);
f('postmarket','pms','paragraph3',       'Paragraph 3',          'textarea', 'To acquire this, we need a system of reporting in order that we are able to Gain feedback on our clinical devices. Which include reports of damaging events that involve them – we want publish-market surveillance (PMS). We additionally want to be reporting these events to the applicable regulatory bodies – they want to recognize that.', 100);

f('postmarket','why','badge_text',       'Section Badge',        'text',     'Why E&E', 5);
f('postmarket','why','title',            'Section Title',        'text',     'Why E & E Medicals and Consulting?', 10);
f('postmarket','why','description',      'Description Paragraph','textarea', 'Our post-market surveillance experts help in coordinating investigating customer Postmarket compliance to make an initial reporting decision. Ensure completeness consistency of complaint related documentation. We conduct detailed analysis reporting of post-marketing vigilance surveillance on medical devices in the market.', 100);

// ─── QUALITY SYSTEM REGULATION PAGE SEED ──────────────────────────────────────

f('qmsr','hero','badge_text',    'Section Badge',    'text',     'Quality Management', 5);
f('qmsr','hero','title',         'Section Title',    'text',     'Quality Management System Regulation (QMSR)', 10);
f('qmsr','hero','intro_text',    'Intro Paragraph',  'textarea', 'The Quality Management System Regulation (QMSR) refers to the U.S. The FDA\'s new rules for medical device makers (21 CFR Part 820) now include the international standard ISO 13485 and replace the old Quality System Regulation (QSR). The QMSR mandates a unified quality system that blends ISO 13485\'s global best practices with specific FDA requirements.', 120);
img('qmsr','hero','hero_image','Hero Image','https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=1400&auto=format&fit=crop',1400,700,'Quality system regulation QMSR FDA 21 CFR Part 820');

f('qmsr','content','title',            'Content Section Title',     'text',     'Key Aspects of the FDA QMSR', 10);
f('qmsr','content','aspect1',          'Key Aspect 1',             'text',     'Integration with ISO 13485: FDA largely adopted ISO 13485:2016 setting the foundation', 15);
f('qmsr','content','aspect2',          'Key Aspect 2',             'text',     'Harmonization: Align U.S. and international standards reducing duplication', 15);
f('qmsr','content','aspect3',          'Key Aspect 3',             'text',     'Scope: Covers all device lifecycle aspects from design to post-market', 15);
f('qmsr','content','aspect4',          'Key Aspect 4',             'text',     'Key Requirements: Quality audits, management review, CAPA, DMRs', 15);
f('qmsr','content','aspect5',          'Key Aspect 5',             'text',     'New Authorities: FDA increased inspection authority over key records', 15);
f('qmsr','content','closing_paragraph','Closing Paragraph',        'textarea', 'Adherence to the FDA\'s Quality Management System Regulation (QMSR) is the greatest challenge facing medical device and biotech manufacturers. The scope of QMSR is large, and non-compliance is not an option. As a result, E & E Medicals and Consulting help companies meet the needs of those responsible for compliance, regulatory affairs, project planning, design and development, technology transfer, R&D, QA, and manufacturing in a QMSR environment.', 150);

// ─── CMC SERVICES PAGE SEED ──────────────────────────────────────────────────

f('cmc','hero','badge_text',     'Section Badge',    'text',     'CMC Services', 5);
f('cmc','hero','title',          'Section Title',    'text',     'CMC Regulatory Affairs', 10);
f('cmc','hero','intro_text',     'Intro Paragraph',  'textarea', 'E&E Medicals is a leading player in centralized Chemistry, Manufacturing, and Controls (CMC) lifecycle management for Regulatory submissions. We offer end-to-end services for CMC Regulatory affairs to ensure your products meet stringent health authority standards.', 80);
f('cmc','hero','cta_text',       'CTA Text',         'text',     'Facing CMC Issues? Request a Quote (RFQ) now!', 10);
img('cmc','hero','hero_image','Hero Image','https://images.unsplash.com/photo-1579154204601-01588f351e67?q=80&w=1400&auto=format&fit=crop',1400,700,'Chemistry manufacturing and controls pharmaceutical production');

f('cmc','process','badge_text',  'Section Badge',    'text',     'Process', 5);
f('cmc','process','title',       'Section Title',    'text',     'Our Streamlined CMC Support Process', 10);
f('cmc','process','step1_title', 'Step 1 Title',     'text',     'Kick-off & Strategy', 10);
f('cmc','process','step1_desc',  'Step 1 Description','textarea', 'To kick off our collaboration, we take the time to grasp your requirements and objectives fully. This allows us to determine the most effective means of gathering data for your dossier\'s (CTD) process, create comprehensive schedules.', 80);
f('cmc','process','step2_title', 'Step 2 Title',     'text',     'Documentation Prep', 10);
f('cmc','process','step2_desc',  'Step 2 Description','textarea', 'Our CMC specialists help review and/or draft the files for your IND to ensure alignment with rules. When possible, we use pre-existing accepted text modules to streamline submissions. DMFs for primary packaging materials are also supported.', 80);
f('cmc','process','step3_title', 'Step 3 Title',     'text',     'Document Review', 10);
f('cmc','process','step3_desc',  'Step 3 Description','textarea', 'We review your submission in depth and compile findings into a draft of the appropriate dossier chapters (Module 3). Your SMEs, regulatory affairs professionals, and our CMC experts will review the submission to ensure accurate procedural mapping.', 80);
f('cmc','process','step4_title', 'Step 4 Title',     'text',     'Responding to Authorities', 10);
f('cmc','process','step4_desc',  'Step 4 Description','textarea', 'Our CMC team is here to lend our considerable expertise in responding to requests for additional data from regulatory agencies that may arise due to your IND.', 70);

f('cmc','lifecycle','title',                       'Lifecycle Section Title',     'text',     'Lifecycle Management', 10);
f('cmc','lifecycle','annual_heading',              'Annual Reports Heading',      'text',     'Annual Report Submissions', 10);
f('cmc','lifecycle','annual_item1',                'Annual Report Item 1',        'text',     'Tracking of Annual Report scheduler due dates', 15);
f('cmc','lifecycle','annual_item2',                'Annual Report Item 2',        'text',     'Provide CMC Regulatory strategy', 15);
f('cmc','lifecycle','annual_item3',                'Annual Report Item 3',        'text',     'Regulatory assessment of supporting documents', 15);
f('cmc','lifecycle','annual_item4',                'Annual Report Item 4',        'text',     'Request for additional documents/justification', 15);
f('cmc','lifecycle','annual_item5',                'Annual Report Item 5',        'text',     'Authoring of the Annual Report package', 15);
f('cmc','lifecycle','annual_item6',                'Annual Report Item 6',        'text',     'Finalization and submission in eCTD format', 15);
f('cmc','lifecycle','annual_item7',                'Annual Report Item 7',        'text',     'Database updates with submission details', 15);
f('cmc','lifecycle','renewal_heading',             'Renewal Applications Heading','text',     'Renewal Applications', 10);
f('cmc','lifecycle','renewal_item1',               'Renewal Item 1',              'text',     'Tracking of renewal application scheduler', 15);
f('cmc','lifecycle','renewal_item2',               'Renewal Item 2',              'text',     'Provide strategy for required docs and timelines', 15);
f('cmc','lifecycle','renewal_item3',               'Renewal Item 3',              'text',     'Initiation requests to manufacturer for CMC documentation', 15);
f('cmc','lifecycle','renewal_item4',               'Renewal Item 4',              'text',     'Regulatory assessment for submission', 15);
f('cmc','lifecycle','renewal_item5',               'Renewal Item 5',              'text',     'Request for additional justification if needed', 15);
f('cmc','lifecycle','renewal_item6',               'Renewal Item 6',              'text',     'Authoring of renewal package per country-specific requirements', 15);
f('cmc','lifecycle','renewal_item7',               'Renewal Item 7',              'text',     'Update database with application status', 15);

// ─── RELIABILITY PAGE SEED ───────────────────────────────────────────────────

img('reliability','hero','hero_image','Hero Image','https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1400&auto=format&fit=crop',1400,700,'Medical device reliability testing and engineering');
f('reliability','hero','badge_text','Hero Badge','text','Reliability Engineering',5);

f('reliability','product','badge_text','Section Badge','text','Product Design',5);
f('reliability','product','title','Section Title','text','Product Design',8);
f('reliability','product','intro_title','Intro Title','text','Reliability',5);
f('reliability','product','intro_subtitle','Intro Subtitle','text','Reliability Engineering, Risk & Productivity',8);
f('reliability','product','intro_p1','Intro Paragraph 1','textarea','The FDA and other regulatory agencies do not regulate reliability engineering or productivity as standalone disciplines.',40);
f('reliability','product','intro_p2','Intro Paragraph 2','textarea','Instead, they expect evidence that devices are reliable, risks are controlled, and processes are effective through design controls, risk management, CAPA, and production controls.',40);
f('reliability','product','rel_question','Reliability Question','textarea','Can you demonstrate, with objective evidence, that your device will perform safely and effectively over its intended life?',30);
f('reliability','product','risk_question','Risk Question','textarea','Do you understand your risks, control them effectively, and keep risk files alive after launch?',30);
f('reliability','product','prod_question','Productivity Question','textarea','Are your processes stable, controlled, and capable of producing conforming products consistently?',30);
f('reliability','product','rel_item1','Reliability Item 1','text','Accelerated Life Testing (ALT)',8);
f('reliability','product','rel_item2','Reliability Item 2','text','Weibull & reliability growth modeling',8);
f('reliability','product','rel_item3','Reliability Item 3','text','Design for Reliability (DfR)',8);
f('reliability','product','rel_item4','Reliability Item 4','text','Field failure & complaint trend analysis',8);
f('reliability','product','risk_item1','Risk Item 1','text','ISO 14971 risk files',8);
f('reliability','product','risk_item2','Risk Item 2','text','Risk-based design controls',8);
f('reliability','product','risk_item3','Risk Item 3','text','Post-market risk assessment',8);
f('reliability','product','risk_item4','Risk Item 4','text','FDA response support (483 / Warning Letters)',8);
f('reliability','product','prod_item1','Productivity Item 1','text','CAPA reduction & effectiveness',8);
f('reliability','product','prod_item2','Productivity Item 2','text','Yield improvement & scrap reduction',8);
f('reliability','product','prod_item3','Productivity Item 3','text','Supplier risk reduction',8);
f('reliability','product','prod_item4','Productivity Item 4','text','Reliability-driven cost reduction',8);
f('reliability','product','closing_text','Closing Text','textarea','E&E Medicals and Consulting will help you conduct design reviews to identify major issues that could impede compliance testing.',35);

f('reliability','test_plan','badge_text','Section Badge','text','Testing',5);
f('reliability','test_plan','title','Section Title','text','Test Plan Development',8);
f('reliability','test_plan','intro_text','Intro Text','textarea','Our reliability experts design a test plan that ensures your design will last to your expectations in the real world.',30);
f('reliability','test_plan','objective_intro','Objectives Intro','text','Our test plan has two objectives:',10);
f('reliability','test_plan','objective1','Objective 1','text','Repeatability: easy to reproduce failures across labs.',10);
f('reliability','test_plan','objective2','Objective 2','text','Survival: final units stay under field failure rates.',10);

f('reliability','mtbf','badge_text','Section Badge','text','Analysis',5);
f('reliability','mtbf','title','Section Title','text','MTBF Analysis',8);
f('reliability','mtbf','intro_text','Intro Text','textarea','MTBF is the average time between failures of a system and is often considered the useful life of the device.',35);
f('reliability','mtbf','item1','MTBF Item 1','text','Tracking product reliability and corrective actions from field data',12);
f('reliability','mtbf','item2','MTBF Item 2','text','Predicting number of returns/failures',12);
f('reliability','mtbf','item3','MTBF Item 3','text','Reliability specifications and goals',12);
f('reliability','mtbf','item4','MTBF Item 4','text','Optimum replacement time determination',12);
f('reliability','mtbf','item5','MTBF Item 5','text','Spare parts determination',12);
f('reliability','mtbf','item6','MTBF Item 6','text','Failure behavior assessment and failure mode detection',12);

// ─── SIX SIGMA HEALTHCARE PAGE SEED ─────────────────────────────────────────

img('six_sigma','hero','hero_image','Hero Image','https://images.unsplash.com/photo-1559757175-5700dde675bc?q=80&w=1400&auto=format&fit=crop',1400,700,'Six Sigma healthcare process improvement quality');
f('six_sigma','hero','badge_text','Hero Badge','text','Six Sigma Healthcare',5);

f('six_sigma','sigma','badge_text','Section Badge','text','Six Sigma',5);
f('six_sigma','sigma','title','Section Title','text','What is Six Sigma?',8);
f('six_sigma','sigma','paragraph1','Paragraph 1','textarea','Six Sigma is a process improvement initiative used to eliminate defects and create near perfection through continuous improvement.',45);
f('six_sigma','sigma','paragraph2','Paragraph 2','textarea','Design for Six Sigma (DFSS) is related to traditional Six Sigma and helps turn customer and business needs into robust product solutions.',45);

f('six_sigma','healthcare','badge_text','Section Badge','text','Healthcare',5);
f('six_sigma','healthcare','title','Section Title','text','Why Six Sigma in Healthcare?',8);
f('six_sigma','healthcare','paragraph','Main Paragraph','textarea','Lean Six Sigma in healthcare reduces defects that can lead to medical errors, lowers costs, reduces wait times, and improves patient outcomes and satisfaction.',80);

f('six_sigma','why','badge_text','Section Badge','text','Why E&E',5);
f('six_sigma','why','title','Section Title','text','Why choose E & E Medicals and Consulting?',10);
f('six_sigma','why','paragraph1','Paragraph 1','textarea','Given the difficulty of implementing Six Sigma in healthcare, many facilities use independent consultants to maximize patient outcomes.',40);
f('six_sigma','why','paragraph2','Paragraph 2','textarea','E&E offers a tailored Six Sigma Healthcare program customized to your organization and disciplines using DMAIC methodology.',50);
f('six_sigma','why','assist_intro','Assist Intro','text','We will assist you in:',8);
f('six_sigma','why','assist1','Assist Item 1','text','Identifying your core processes and key customers',10);
f('six_sigma','why','assist2','Assist Item 2','text','Identifying internal and external customer requirements',10);
f('six_sigma','why','assist3','Assist Item 3','text','Measuring your current performance',10);
f('six_sigma','why','assist4','Assist Item 4','text','Prioritizing, analyzing, and implementing improvement plans',10);
f('six_sigma','why','assist5','Assist Item 5','text','Expanding and integrating Six Sigma in Healthcare',10);

// ─── AUDITS PAGE SEED ────────────────────────────────────────────────────────

img('audits','hero','hero_image','Hero Image','https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1400&auto=format&fit=crop',1400,700,'Quality assurance audits compliance verification');
f('audits','hero','badge_text','Hero Badge','text','Quality Assurance Audits',5);

f('audits','intro','badge_text','Section Badge','text','Quality Assurance',5);
f('audits','intro','title','Section Title','text','Quality Assurance Audits',8);
f('audits','intro','paragraph','Intro Paragraph','textarea','Routine quality assurance audits help maintain quality systems, reduce product quality issues, and preserve certifications and regulatory compliance.',45);

f('audits','types','badge_text','Section Badge','text','Audit Types',5);
f('audits','types','title','Section Title','text','Three Different Types of Quality Assurance Audits',10);
f('audits','types','paragraph1','Paragraph 1','textarea','ISO 9001 defines an audit as a systematic, independent, and documented process for obtaining and evaluating evidence objectively.',45);
f('audits','types','paragraph2','Paragraph 2','textarea','Quality assurance audits are carried out through Process, Product, and System verification.',30);
f('audits','types','type1','Type 1','text','Process Audit: checks process controls and compliance to defined standards.',15);
f('audits','types','type2','Type 2','text','Product Audit: evaluates product or service conformance to requirements.',15);
f('audits','types','type3','Type 3','text','System Audit: evaluates management systems using objective evidence.',15);
f('audits','types','paragraph3','Paragraph 3','textarea','QMS audits evaluate an organization against policies, contracts, and regulatory requirements.',30);

f('audits','standards','badge_text','Section Badge','text','Standards',5);
f('audits','standards','title','Section Title','text','Audit Standards & Frameworks',8);
f('audits','standards','medical_heading','Medical Devices Heading','text','Medical Devices',5);
f('audits','standards','quality_heading','Quality Management Heading','text','Quality Management',5);
f('audits','standards','other_heading','Other Systems Heading','text','Other Systems',5);
f('audits','standards','medical_1','Medical Standard 1','text','ISO 13485:2016',8);
f('audits','standards','medical_2','Medical Standard 2','text','US FDA 21 CFR Part 820',8);
f('audits','standards','medical_3','Medical Standard 3','text','EU MDR / AIMDR / IVDR',8);
f('audits','standards','medical_4','Medical Standard 4','text','ISO 14971 Risk Management',8);
f('audits','standards','medical_5','Medical Standard 5','text','IEC 60601 Electrical Equipment',8);
f('audits','standards','quality_1','Quality Standard 1','text','ISO 9001:2015',8);
f('audits','standards','quality_2','Quality Standard 2','text','ISO 17025 Testing & Calibration',8);
f('audits','standards','other_1','Other Standard 1','text','ISO 14001:2015 Environmental Health & Safety',10);
f('audits','standards','other_2','Other Standard 2','text','OHSAS 18001 / ISO 45001 Occupational Health & Safety',10);
f('audits','standards','other_3','Other Standard 3','text','ISO 27001 Information Security',8);

// ─── ISO 9001 IMPLEMENTATION PAGE SEED ───────────────────────────────────────

img('iso9001_impl','hero','hero_image','Hero Image','https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1400&auto=format&fit=crop',1400,700,'ISO 9001 quality management system implementation team');
f('iso9001_impl','hero','badge_text','Hero Badge','text','ISO 9001 Implementation',5);

f('iso9001_impl','implementation','badge_text','Section Badge','text','ISO 9001',5);
f('iso9001_impl','implementation','title','Section Title','text','ISO 9001 Quality Management System (QMS) Implementation',12);
f('iso9001_impl','implementation','paragraph','Main Paragraph','textarea','Our quality experts implement practical ISO 9001 systems aligned with FDA and ISO requirements, using paper-based or electronic workflows based on your resources.',70);
f('iso9001_impl','implementation','sop_intro','SOP Intro','text','We help develop SOPs and documentation:',10);
f('iso9001_impl','implementation','sop1','SOP Item 1','text','Production and Process Control',10);
f('iso9001_impl','implementation','sop2','SOP Item 2','text','Management Review',10);
f('iso9001_impl','implementation','sop3','SOP Item 3','text','Quality Manual',10);
f('iso9001_impl','implementation','sop4','SOP Item 4','text','Design, Purchasing, Document Control',10);
f('iso9001_impl','implementation','sop5','SOP Item 5','text','Device Master and Device History Records',10);
f('iso9001_impl','implementation','sop6','SOP Item 6','text','Internal Audits',10);

f('iso9001_impl','why','badge_text','Section Badge','text','Why E&E',5);
f('iso9001_impl','why','title','Section Title','text','Why E & E Medicals and Consulting?',10);
f('iso9001_impl','why','highlight','Highlight Text','textarea','We help small companies and startups achieve ISO certification through a simple, affordable, and speedy process.',35);
f('iso9001_impl','why','paragraph','Main Paragraph','textarea','We guide teams through planning, implementation, review, and certification, including training tools for sustained compliance.',50);
f('iso9001_impl','why','cta_text','CTA Text','text','Find out your level of compliance with ISO 9001',12);
f('iso9001_impl','why','item1','Why Item 1','text','Dedicated consultant from start to finish',10);
f('iso9001_impl','why','item2','Why Item 2','text','Support across ISO 9001, ISO 13485, and ISO 14971',12);
f('iso9001_impl','why','item3','Why Item 3','text','Online training and support options available',10);

// ─── ISO 13485 PAGE SEED ─────────────────────────────────────────────────────

img('iso13485','hero','hero_image','Hero Image','https://images.unsplash.com/photo-1582750433449-648ed127bb54?q=80&w=1400&auto=format&fit=crop',1400,700,'ISO 13485 medical quality system registration certification');
f('iso13485','hero','badge_text','Hero Badge','text','ISO 13485 QMS',5);

f('iso13485','overview','badge_text','Section Badge','text','ISO Standards',5);
f('iso13485','overview','title','Section Title','text','ISO 13485 Medical Quality System Registration',10);
f('iso13485','overview','paragraph','Overview Paragraph','textarea','ISO 13485 is an international standard for medical device quality systems and addresses most FDA requirements while focusing on device safety and efficacy.',55);

f('iso13485','consultant','title','Section Title','text','Appointing E&E Medicals as ISO Consultant',10);
f('iso13485','consultant','paragraph1','Paragraph 1','textarea','E&E supports small, medium, and large healthcare companies involved in production, packaging, and distribution needing QMS for ISO 13485 certification.',45);
f('iso13485','consultant','paragraph2','Paragraph 2','textarea','Our consultants implement ISO 13485-compliant QMS and prepare teams for regulatory and certification audits.',40);

f('iso13485','mdsap','title','Section Title','text','Medical Device Single Audit Program',8);
f('iso13485','mdsap','paragraph1','Paragraph 1','textarea','MDSAP is based on ISO 13485 and can support audit readiness for Canada, USA, Japan, Australia, and Brazil.',40);
f('iso13485','mdsap','infobox_text','Info Box Text','textarea','Your organization can also meet most FDA QSR requirements under 21 CFR 820.',30);
f('iso13485','mdsap','paragraph2','Paragraph 2','textarea','Manufacturers and software developers must meet ISO 13485 requirements to receive certification from accredited third parties.',40);
f('iso13485','mdsap','paragraph3','Paragraph 3','textarea','We assist with training, documentation, implementation, internal audit, and related services for EN ISO 13485 compliance.',40);
f('iso13485','mdsap','cta_text','CTA Text','text','Find out your level of compliance with ISO 13485',12);

// ─── ISO 14971 PAGE SEED ─────────────────────────────────────────────────────

img('iso14971','hero','hero_image','Hero Image','https://images.unsplash.com/photo-1598520106830-8c45c2035460?q=80&w=1400&auto=format&fit=crop',1400,700,'ISO 14971 medical device risk management lifecycle');
f('iso14971','hero','badge_text','Hero Badge','text','ISO 14971 Risk Management',5);

f('iso14971','expert','badge_text','Section Badge','text','Risk Management',5);
f('iso14971','expert','title','Section Title','text','ISO 14971 Medical Device Risk Management Expert',10);
f('iso14971','expert','paragraph1','Paragraph 1','textarea','ISO 14971 helps manufacturers evaluate and control medical device risks and interactions with other devices.',40);
f('iso14971','expert','paragraph2','Paragraph 2','textarea','As the primary international standard for medical device risk management, ISO 14971 is integral for major market approvals.',40);
f('iso14971','expert','diagram_note','Diagram Note','text','Image diagram of the ISO 14971 Risk Management Life Cycle',15);

f('iso14971','implementation','badge_text','Section Badge','text','Implementation',5);
f('iso14971','implementation','title','Section Title','text','ISO 14971 Medical Devices Risk Management Implementation Service',12);
f('iso14971','implementation','intro_text','Intro Text','textarea','E&E Medicals assists with ISO 14971 implementation through a structured 5-step methodology.',30);
f('iso14971','implementation','step1','Step 1','text','Gap assessment',8);
f('iso14971','implementation','step2','Step 2','text','Quality management system upgrade',8);
f('iso14971','implementation','step3','Step 3','text','Training',8);
f('iso14971','implementation','step4','Step 4','text','Internal audit',8);
f('iso14971','implementation','step5','Step 5','text','Certification audit',8);
f('iso14971','implementation','closing_text','Closing Text','textarea','This service can be integrated with ISO 13485 programs and includes required documentation for compliance.',35);

// ─── ISO 13485 GAP ANALYSIS PAGE SEED ────────────────────────────────────────

f('iso13485_gap','header','title','Page Title','text','Free ISO 13485:2016 Gap Analysis Tool',12);
f('iso13485_gap','header','breadcrumb','Breadcrumb','text','Free ISO 13485:2016 Gap Analysis Tool',12);

// ─── REGULATORY OPERATIONS PAGE SEED ─────────────────────────────────────────

// CCC Mark Approval
img('ccc_mark','hero','hero_image','Hero Image','https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=1400&auto=format&fit=crop',1400,700,'CCC mark approval China compulsory certification medical devices');
f('ccc_mark','hero','badge_text','Hero Badge','text','CCC Mark Approval',5);
f('ccc_mark','main','badge_text','Section Badge','text','CCC Mark',5);
f('ccc_mark','main','title','Section Title','text','China Compulsory Certification (CCC)',10);
f('ccc_mark','main','paragraph1','Paragraph 1','textarea','The CCC mark is a compulsory safety and quality mark for products sold in China and became effective in 2002 after integrating two prior inspection systems.',50);
f('ccc_mark','main','paragraph2','Paragraph 2','textarea','CCC replaced older CCIB and CCEE marks and unified quality and import-export inspection procedures.',35);
f('ccc_mark','registration','badge_text','Section Badge','text','Registration',5);
f('ccc_mark','registration','title','Section Title','text','Registration - Medical Devices and IVD',10);
f('ccc_mark','registration','paragraph1','Paragraph 1','textarea','NMPA has consistent guidelines, reporting, and clinical data requirements for submissions.',25);
f('ccc_mark','registration','item1','Registration Item 1','text','Only registration filing without device test reports',10);
f('ccc_mark','registration','item2','Registration Item 2','text','Complete registration filings including device test reports',10);
f('ccc_mark','registration','paragraph2','Paragraph 2','textarea','E&E supports inland testing, document organization, and responses to follow-up NMPA questions.',30);
f('ccc_mark','why','badge_text','Section Badge','text','Why E&E',5);
f('ccc_mark','why','title','Section Title','text','Why choose E & E Medicals and Consulting?',10);
f('ccc_mark','why','paragraph','Main Paragraph','textarea','Our team provides China-market expertise, testing support, and end-to-end guidance for CCC compliance.',30);

// CE Mark Approval
img('ce_mark','hero','hero_image','Hero Image','https://images.unsplash.com/photo-1551601651-2a8555f1a136?q=80&w=1400&auto=format&fit=crop',1400,700,'CE mark approval medical device European regulatory compliance');
f('ce_mark','hero','badge_text','Hero Badge','text','CE Mark Certification',5);
f('ce_mark','main','badge_text','Section Badge','text','CE Mark',5);
f('ce_mark','main','title','Section Title','text','CE Mark Approval',8);
f('ce_mark','main','paragraph','Main Paragraph','textarea','CE marking is mandatory for many products placed in the EEA and certifies conformance to applicable European medical device directives and MDR requirements.',45);
f('ce_mark','main','diagram_note','Diagram Note','text','Image diagram showing CE Mark certification process under MDR',12);
f('ce_mark','gap','badge_text','Section Badge','text','Gap Analysis',5);
f('ce_mark','gap','title','Section Title','text','MDR Technical Documentation / Gap Analysis',10);
f('ce_mark','gap','paragraph','Main Paragraph','textarea','We review design, risk analysis, clinical evaluation, testing, post-market surveillance, labeling, and required MDR documents.',35);
f('ce_mark','mdd','badge_text','Section Badge','text','MDD to MDR',5);
f('ce_mark','mdd','title','Section Title','text','Conversion of MDD to MDR File(s)',8);
f('ce_mark','mdd','paragraph','Main Paragraph','textarea','We upgrade legacy MDD files into MDR-aligned technical documentation with quality and safety evidence.',30);
f('ce_mark','clinical','badge_text','Section Badge','text','Clinical Documentation',5);
f('ce_mark','clinical','title','Section Title','text','Clinical Documentation - Evaluation Plan & Procedures',12);
f('ce_mark','clinical','paragraph','Main Paragraph','textarea','Our team builds structured clinical evaluation plans and MDR-compliant templates for required procedures and reports.',35);
f('ce_mark','why','badge_text','Section Badge','text','Why E&E',5);
f('ce_mark','why','title','Section Title','text','Why choose E & E Medicals and Consulting?',10);
f('ce_mark','why','paragraph1','Paragraph 1','textarea','Our EU experts perform applicable tests and determine practical pathways for CE conformity and certification.',30);
f('ce_mark','why','paragraph2','Paragraph 2','textarea','We help transform existing files to MDR while addressing safety, performance, and environmental requirements.',30);
f('ce_mark','why','cta_text','CTA Text','text','Request for Quote',8);

// Post-market / FDA 483 / Pre-IDE / 510k / Establishment / US Agent
img('fda_483','hero','hero_image','Hero Image','https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=1400&auto=format&fit=crop',1400,700,'FDA 483 Warning Letter regulatory compliance review');
f('fda_483','hero','badge_text','Hero Badge','text','FDA 483 Compliance',5);
f('fda_483','audit','badge_text','Section Badge','text','FDA Compliance',5);
f('fda_483','audit','title','Section Title','text','FDA 483 and Warning Letter Analysis',10);
f('fda_483','audit','paragraph1','Paragraph 1','textarea','Form 483 is a notice of inspectional observations and requires timely CAPA-based response plans.',30);
f('fda_483','audit','paragraph2','Paragraph 2','textarea','We help manufacturers respond to FDA 483 observations and warning letters through structured actions.',30);
f('fda_483','audit','item1','Action 1','text','Reviewing 483 observations or warning letter',10);
f('fda_483','audit','item2','Action 2','text','Analyzing and identifying corrective actions',10);
f('fda_483','audit','item3','Action 3','text','Planning and implementing corrective actions',10);
f('fda_483','audit','item4','Action 4','text','Writing professional response within 15 business days',10);
f('fda_483','remediation','badge_text','Section Badge','text','Remediation',5);
f('fda_483','remediation','title','Section Title','text','Remediation Strategy',8);
f('fda_483','remediation','paragraph','Main Paragraph','textarea','Our remediation program identifies depth and breadth of deficiencies and executes practical compliance plans.',35);
f('fda_483','recalls','badge_text','Section Badge','text','Product Recalls',5);
f('fda_483','recalls','title','Section Title','text','Product Recalls and Market Withdrawal',10);
f('fda_483','recalls','paragraph','Main Paragraph','textarea','We support compliant recall communications, documentation, FDA updates, and effectiveness checks.',30);

img('pre_ide','hero','hero_image','Hero Image','https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=1400&auto=format&fit=crop',1400,700,'Pre-IDE investigational device exemption process');
f('pre_ide','hero','badge_text','Hero Badge','text','Pre-IDE Process',5);
f('pre_ide','main','badge_text','Section Badge','text','Investigational Device',5);
f('pre_ide','main','title','Section Title','text','Pre-IDE Process',8);
f('pre_ide','main','paragraph1','Paragraph 1','textarea','An IDE permits clinical investigation of devices while exempting some regulatory requirements under 21 CFR 812.',35);
f('pre_ide','main','quote_text','Quote Text','textarea','An approved IDE permits lawful shipment of devices for the purpose of investigations.',20);
f('pre_ide','main','paragraph2','Paragraph 2','textarea','The purpose of IDE is to encourage useful device development while protecting public health and ethics.',30);
f('pre_ide','main','paragraph3','Paragraph 3','textarea','Early FDA interaction increases sponsor understanding of requirements and supports new technologies.',30);
f('pre_ide','meeting','badge_text','Section Badge','text','Pre-IDE Meeting',5);
f('pre_ide','meeting','title','Section Title','text','Pre-IDE Meeting',8);
f('pre_ide','meeting','paragraph','Main Paragraph','textarea','Our experts prepare robust documentation and schedule meetings to answer key development questions.',30);
f('pre_ide','meeting','cta_text','CTA Text','text','Request for Quote (RFQ)',8);

img('fda_510k','hero','hero_image','Hero Image','https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1400&auto=format&fit=crop',1400,700,'FDA Applications 510k PMA De Novo medical device approval');
f('fda_510k','hero','badge_text','Hero Badge','text','FDA 510(k) Applications',5);
f('fda_510k','overview','badge_text','Section Badge','text','FDA Applications',5);
f('fda_510k','overview','title','Section Title','text','FDA Applications',8);
f('fda_510k','overview','paragraph1','Paragraph 1','textarea','Section 510(k) requires manufacturers to notify FDA before marketing devices in the U.S. so classification and pathway can be determined.',40);
f('fda_510k','overview','paragraph2','Paragraph 2','textarea','Devices substantially equivalent to predicates use 510(k), while significantly different devices may require PMA or De Novo routes.',40);
f('fda_510k','overview','paragraph3','Paragraph 3','textarea','E&E supports class I, II, and III application preparation and regulatory strategy at all development stages.',35);
f('fda_510k','notifications','badge_text','Section Badge','text','510(k)',5);
f('fda_510k','notifications','title','Section Title','text','510(k) Premarket Notifications',10);
f('fda_510k','notifications','paragraph','Main Paragraph','textarea','We identify class, predicate, testing, and submission requirements and guide preparation through FDA clearance.',35);
f('fda_510k','strategy','badge_text','Section Badge','text','Strategy',5);
f('fda_510k','strategy','title','Section Title','text','Our US FDA 510(k) Submissions Strategy',10);
f('fda_510k','strategy','paragraph','Main Paragraph','textarea','Our two-stage strategy starts with gap analysis and proceeds to full document compilation and submission.',30);
f('fda_510k','drugs','badge_text','Section Badge','text','Drugs',5);
f('fda_510k','drugs','title','Section Title','text','Drugs',5);
f('fda_510k','drugs','paragraph','Main Paragraph','textarea','We also support IND, ANDA, NDA, and DMF application strategy and FDA interactions for pharmaceuticals.',30);

img('fda_establishment','hero','hero_image','Hero Image','https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1400&auto=format&fit=crop',1400,700,'FDA Establishment Registration compliance process');
f('fda_establishment','hero','badge_text','Hero Badge','text','FDA Establishment Registration',5);
f('fda_establishment','main','badge_text','Section Badge','text','FDA Registration',5);
f('fda_establishment','main','title','Section Title','text','FDA Establishment Registration',8);
f('fda_establishment','main','paragraph1','Paragraph 1','textarea','Medical device establishments must register with FDA within 30 days of commercialization.',30);
f('fda_establishment','main','paragraph2','Paragraph 2','textarea','FDA registration supports safety, efficacy, and security oversight across regulated products.',30);
f('fda_establishment','medical','badge_text','Section Badge','text','Medical Devices',5);
f('fda_establishment','medical','title','Section Title','text','Medical Device — Establishment Registration',10);
f('fda_establishment','medical','paragraph','Main Paragraph','textarea','We define annual registration and listing obligations and support establishment and device listing workflows.',30);
f('fda_establishment','drug','badge_text','Section Badge','text','Drug & Cosmetic',5);
f('fda_establishment','drug','title','Section Title','text','FDA Drug & Cosmetic Establishment Registration',10);
f('fda_establishment','drug','paragraph','Main Paragraph','textarea','Our services include GMP consultancy, pre-audit inspections, 483 response support, registration, and listing.',35);
f('fda_establishment','drug','item1','Service 1','text','GMP Consultancy for pharmaceuticals',8);
f('fda_establishment','drug','item2','Service 2','text','Pre-audit inspection',8);
f('fda_establishment','drug','item3','Service 3','text','Assist in responding to 483 letters',8);
f('fda_establishment','drug','item4','Service 4','text','Establishment registration and listing',8);

img('fda_us_agent','hero','hero_image','Hero Image','https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1400&auto=format&fit=crop',1400,700,'FDA United States Agent for Foreign Establishments');
f('fda_us_agent','hero','badge_text','Hero Badge','text','FDA US Agent Services',5);
f('fda_us_agent','main','badge_text','Section Badge','text','Foreign Establishments',5);
f('fda_us_agent','main','title','Section Title','text','US Agent for Foreign Establishments',10);
f('fda_us_agent','main','paragraph1','Paragraph 1','textarea','Foreign medical device, IVD, and pharmaceutical establishments must appoint a U.S. Agent for specific FDA interactions.',35);
f('fda_us_agent','main','paragraph2','Paragraph 2','textarea','A U.S. Agent must be U.S.-resident or maintain a U.S. place of business and can represent one foreign establishment at a time.',35);
f('fda_us_agent','services','badge_text','Section Badge','text','Our Services',5);
f('fda_us_agent','services','title','Section Title','text','How E & E Medicals Supports You',10);
f('fda_us_agent','services','highlight','Highlight Text','text','We function as your FDA US Agent at a reasonable annual fee.',15);
f('fda_us_agent','services','item1','Service 1','text','Assist FDA communications with foreign establishments',10);
f('fda_us_agent','services','item2','Service 2','text','Assist in scheduling facility inspections',10);
f('fda_us_agent','services','item3','Service 3','text','Provide legal U.S. presence for correspondence',10);

// Drug / Biologics pages
img('ind','hero','hero_image','Hero Image','https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?q=80&w=1400&auto=format&fit=crop',1400,700,'Pharmaceutical research and IND application');
f('ind','hero','badge_text','Hero Badge','text','IND Application',5);
f('ind','main','badge_text','Section Badge','text','IND',5);
f('ind','main','title','Section Title','text','Investigational New Drug (IND) Application',10);
f('ind','main','paragraph1','Paragraph 1','textarea','Sponsors must submit IND to FDA and receive acceptance before distributing investigational drugs for clinical use.',35);
f('ind','main','paragraph2','Paragraph 2','textarea','FDA may impose clinical hold if quality, safety, or efficacy evidence is insufficient.',30);
f('ind','main','obstacle1','Obstacle 1','text','Determine regulations for Phase I/II/III programs',10);
f('ind','main','obstacle2','Obstacle 2','text','GMP/GLP compliance requirements',10);
f('ind','main','obstacle3','Obstacle 3','text','Clinical hold prevention and mitigation',10);
f('ind','main','obstacle4','Obstacle 4','text','Active IND lifecycle reporting and amendments',10);
f('ind','expertise','badge_text','Section Badge','text','Expertise',5);
f('ind','expertise','title','Section Title','text','IND Submissions - E&E Medicals Expertise',10);
f('ind','expertise','item1','Expertise 1','text','Regulatory strategy for IND programs',10);
f('ind','expertise','item2','Expertise 2','text','Type A/B/C and BPD meeting support',10);
f('ind','expertise','item3','Expertise 3','text','Fast Track and Orphan designation support',10);
f('ind','expertise','item4','Expertise 4','text','eCTD preparation and submission support',10);

img('nda','hero','hero_image','Hero Image','https://images.unsplash.com/photo-1585435557343-3b092031a831?q=80&w=1400&auto=format&fit=crop',1400,700,'New Drug Application pharmaceutical approval');
f('nda','hero','badge_text','Hero Badge','text','New Drug Application',5);
f('nda','main','badge_text','Section Badge','text','Drug Approvals',5);
f('nda','main','title','Section Title','text','New Drug Application (NDA)',10);
f('nda','main','paragraph1','Paragraph 1','textarea','NDA 505(b)(1) and 505(b)(2) pathways are used for U.S. new drug approvals based on different evidence models.',35);
f('nda','main','paragraph2','Paragraph 2','textarea','Sponsors often need strategic support to avoid refusal to file and choose the right submission approach.',30);
f('nda','main','paragraph3','Paragraph 3','textarea','E&E supports pre-NDA through annual report activities across the entire NDA lifecycle.',30);
f('nda','expertise','title','Section Title','text','E&E Medicals Expertise',8);
f('nda','expertise','item1','Expertise 1','text','Best-fit regulatory pathway strategy',10);
f('nda','expertise','item2','Expertise 2','text','Expedited program and designation support',10);
f('nda','expertise','item3','Expertise 3','text','eCTD package preparation and publishing',10);
f('nda','expertise','item4','Expertise 4','text','CRL management and lifecycle support',10);

img('anda','hero','hero_image','Hero Image','https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?q=80&w=1400&auto=format&fit=crop',1400,700,'Abbreviated New Drug Application generic drug manufacturing');
f('anda','hero','badge_text','Hero Badge','text','ANDA Submissions',5);
f('anda','main','badge_text','Section Badge','text','ANDA',5);
f('anda','main','title','Section Title','text','Abbreviated New Drug Application (ANDA)',10);
f('anda','main','paragraph1','Paragraph 1','textarea','ANDA is the pathway for generic medicines to demonstrate therapeutic equivalence to reference drugs.',35);
f('anda','main','paragraph2','Paragraph 2','textarea','Regulatory planning early in development helps reduce RTR risk and speed approvals.',30);
f('anda','submissions','badge_text','Section Badge','text','Submissions',5);
f('anda','submissions','title','Section Title','text','ANDA Submissions',8);
f('anda','submissions','paragraph','Main Paragraph','textarea','We provide strategic guidance, source-data assessment, eCTD preparation, and FDA communications throughout ANDA review.',35);
f('anda','submissions','item1','Support 1','text','Product development and CMC regulatory consultation',10);
f('anda','submissions','item2','Support 2','text','Gap analysis and RTR/GDUFA risk mitigation',10);
f('anda','submissions','item3','Support 3','text','High-quality ANDA package publication in eCTD',10);
f('anda','submissions','item4','Support 4','text','IR/DRL/CRL response planning',10);

img('bla','hero','hero_image','Hero Image','https://images.unsplash.com/photo-1559757148-5c350d0d3c56?q=80&w=1400&auto=format&fit=crop',1400,700,'Biologics License Application cell and gene therapy');
f('bla','hero','badge_text','Hero Badge','text','Biologics License Application',5);
f('bla','main','badge_text','Section Badge','text','BLA',5);
f('bla','main','title','Section Title','text','Understanding the BLA Process',8);
f('bla','main','paragraph1','Paragraph 1','textarea','BLA enables approval of biologics for serious conditions but requires robust development strategy and evidence.',35);
f('bla','main','paragraph2','Paragraph 2','textarea','Risk-based review procedures demand complete submissions to avoid refusal to file.',30);
f('bla','services','badge_text','Section Badge','text','Services',5);
f('bla','services','title','Section Title','text','Our Biologics Regulatory Services',8);
f('bla','services','item1','Service 1','text','Pre-submission and BLA route guidance',10);
f('bla','services','item2','Service 2','text','Type A/B/C and BPD meeting coordination',10);
f('bla','services','item3','Service 3','text','BLA compilation and technical review',10);
f('bla','services','item4','Service 4','text','CRL and lifecycle management support',10);
f('bla','guidance','badge_text','Section Badge','text','Strategic Guidance',5);
f('bla','guidance','title','Section Title','text','Strategic Guidance',5);
f('bla','guidance','paragraph','Main Paragraph','textarea','We support sponsors across biologics, biosimilars, and advanced therapies with submission-ready regulatory strategy.',30);

img('dmf','hero','hero_image','Hero Image','https://images.unsplash.com/photo-1471864190281-a93a3070b6de?q=80&w=1400&auto=format&fit=crop',1400,700,'Drug Master File pharmaceutical chemistry lab');
f('dmf','hero','badge_text','Hero Badge','text','Drug Master File',5);
f('dmf','main','badge_text','Section Badge','text','DMF',5);
f('dmf','main','title','Section Title','text','FDA DMF Overview',8);
f('dmf','main','paragraph1','Paragraph 1','textarea','FDA does not require DMF submissions but accepts them for drug substances, excipients, and packaging materials.',35);
f('dmf','main','paragraph2','Paragraph 2','textarea','DMF holders must satisfy GDUFA and completeness requirements to support letters of access for IND/NDA/ANDA.',35);
f('dmf','strategy','badge_text','Section Badge','text','Strategy',5);
f('dmf','strategy','title','Section Title','text','Submission Strategy & Expertise',8);
f('dmf','strategy','item1','Strategy 1','text','Type II, III, and IV DMF strategy',10);
f('dmf','strategy','item2','Strategy 2','text','API methods, impurities, and validation data',10);
f('dmf','strategy','item3','Strategy 3','text','eCTD publication and annual report planning',10);
f('dmf','capabilities','badge_text','Section Badge','text','Capabilities',5);
f('dmf','capabilities','title','Section Title','text','Core Filing Capabilities',8);
f('dmf','capabilities','cap1','Capability 1','text','DMF Filing Expertise',8);
f('dmf','capabilities','cap2','Capability 2','text','Creation of DMF Templates',8);
f('dmf','capabilities','cap3','Capability 3','text','Full DMF Preparation',8);
f('dmf','capabilities','cap4','Capability 4','text','API Submission & eCTD Publishing',8);

// ─── AI-ENABLED REGULATORY PAGE SEED ─────────────────────────────────────────

// AI Regulatory Strategy
img('ai_reg_strategy','hero','hero_image','Hero Image','https://images.unsplash.com/photo-1677442135703-1787eea5ce01?q=80&w=1400&auto=format&fit=crop',1400,700,'AI regulatory strategy in digital healthcare');
f('ai_reg_strategy','hero','badge_text','Hero Badge','text','AI-Enabled Regulatory Strategy',6);
f('ai_reg_strategy','intro','badge_text','Section Badge','text','AI-Enabled Regulatory',5);
f('ai_reg_strategy','intro','title','Section Title','text','Global Regulatory Intelligence for AI-Enabled Medical Technologies',12);
f('ai_reg_strategy','intro','paragraph1','Paragraph 1','textarea','E&E Medicals is a global regulatory intelligence partner for AI-enabled medical technologies across FDA, EU MDR, and EU AI Act frameworks.',40);
f('ai_reg_strategy','intro','paragraph2','Paragraph 2','textarea','Our global AI compliance framework accelerates approvals, reduces friction, and improves investor confidence.',30);
f('ai_reg_strategy','services','badge_text','Section Badge','text','Regulatory Services',5);
f('ai_reg_strategy','services','title','Section Title','text','Regulatory Services for AI Medical Devices Sold in the US or Europe',14);
f('ai_reg_strategy','services','paragraph','Main Paragraph','textarea','We coordinate compliance across EU AI Act, EU MDR/IVDR, and FDA AI/ML expectations to enable global scale without duplicated regulatory work.',45);
f('ai_reg_strategy','lists','different1','Differentiator 1','text','Most regulatory firms treat AI like traditional software. We do not.',12);
f('ai_reg_strategy','lists','different2','Differentiator 2','text','Integrated FDA AI/ML expectations including PCCP and lifecycle controls',12);
f('ai_reg_strategy','lists','different3','Differentiator 3','text','Harmonized EU MDR technical documentation with AI-specific files',12);
f('ai_reg_strategy','lists','pitfall1','Common Pitfall 1','text','Poor or incomplete dataset documentation',10);
f('ai_reg_strategy','lists','pitfall2','Common Pitfall 2','text','No post-market AI drift monitoring criteria',10);
f('ai_reg_strategy','lists','pitfall3','Common Pitfall 3','text','Insufficient bias and representativeness testing evidence',12);

// AI SaMD Pathway
img('ai_samd','hero','hero_image','Hero Image','https://images.unsplash.com/photo-1677442135703-1787eea5ce01?q=80&w=1400&auto=format&fit=crop',1400,700,'AI SaMD regulatory pathway');
f('ai_samd','hero','badge_text','Hero Badge','text','AI SaMD Regulatory Pathway',6);
f('ai_samd','strategy','badge_text','Section Badge','text','AI Strategy',5);
f('ai_samd','strategy','title','Section Title','text','Global Regulatory Strategy',8);
f('ai_samd','strategy','paragraph1','Paragraph 1','textarea','We define global AI SaMD regulatory pathways from early development through post-market lifecycle management.',35);
f('ai_samd','strategy','purpose_text','Purpose Text','text','Prevent wrong pathway selection (fatal error).',10);
f('ai_samd','strategy','item1','Intended Item 1','text','Establish the right classification and submission pathway',10);
f('ai_samd','strategy','item2','Intended Item 2','text','Align with FDA, IMDRF, and international expectations',10);
f('ai_samd','strategy','item3','Intended Item 3','text','Enable scalable updates through PCCP',10);
f('ai_samd','deliverables','badge_text','Section Badge','text','Deliverables',5);
f('ai_samd','deliverables','title','Section Title','text','Deliverables & Engagement',8);
f('ai_samd','deliverables','heading','Heading','text','What You Receive',5);
f('ai_samd','deliverables','item1','Deliverable 1','text','Intended Use and claims risk calibration',10);
f('ai_samd','deliverables','item2','Deliverable 2','text','FDA pathway decision: 510(k) vs De Novo vs PMA',12);
f('ai_samd','deliverables','item3','Deliverable 3','text','Regulatory timeline and evidence roadmap',10);
f('ai_samd','deliverables','duration_label','Duration Label','text','Duration',5);
f('ai_samd','deliverables','duration_value','Duration Value','text','2–4 weeks',5);

// AI FDA Readiness
img('ai_fda_readiness','hero','hero_image','Hero Image','https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1400&auto=format&fit=crop',1400,700,'AI FDA readiness audit neural network medical');
f('ai_fda_readiness','hero','badge_text','Hero Badge','text','AI FDA Readiness Audit',6);
f('ai_fda_readiness','audit','badge_text','Section Badge','text','FDA Readiness',5);
f('ai_fda_readiness','audit','title','Section Title','text','FDA Readiness Audit',8);
f('ai_fda_readiness','audit','quote_text','Quote Text','textarea','We have an AI model but need it to be regulatory-approvable and scalable.',25);
f('ai_fda_readiness','audit','paragraph1','Paragraph 1','textarea','We prepare an FDA-ready AI-specific readiness and deficiency risk audit package for AI/ML SaMD and AI-enabled software.',40);
f('ai_fda_readiness','audit','purpose_text','Purpose Text','text','Predict FDA deficiencies before submission.',8);
f('ai_fda_readiness','deliverables','badge_text','Section Badge','text','Deliverables',5);
f('ai_fda_readiness','deliverables','title','Section Title','text','Deliverables & Engagement',8);
f('ai_fda_readiness','deliverables','item1','Deliverable 1','text','Line-by-line gap assessment vs 21 CFR 820/QMSR',12);
f('ai_fda_readiness','deliverables','item2','Deliverable 2','text','AI-specific deficiency heatmap',8);
f('ai_fda_readiness','deliverables','item3','Deliverable 3','text','High-probability FDA questions list',10);
f('ai_fda_readiness','deliverables','item4','Deliverable 4','text','Remediation plan with owners',8);
f('ai_fda_readiness','deliverables','duration_label','Duration Label','text','Duration',5);
f('ai_fda_readiness','deliverables','duration_value','Duration Value','text','3–6 weeks',5);

// PCCP Authoring
img('pccp','hero','hero_image','Hero Image','https://images.unsplash.com/photo-1555255707-c07966088b7b?q=80&w=1400&auto=format&fit=crop',1400,700,'Predetermined change control plan software development');
f('pccp','hero','badge_text','Hero Badge','text','PCCP Authoring',5);
f('pccp','framework','badge_text','Section Badge','text','Regulatory Strategy',5);
f('pccp','framework','title','Section Title','text','PCCP Framework',6);
f('pccp','framework','paragraph1','Paragraph 1','textarea','We author a structured PCCP framework for anticipated post-authorization product and model changes under defined controls.',40);
f('pccp','framework','paragraph2','Paragraph 2','textarea','PCCP sets boundaries, risk-based criteria, governance, and evidence requirements for compliant change execution.',35);
f('pccp','framework','purpose_text','Purpose Text','text','Enable post-approval AI updates without re-submission failure.',10);
f('pccp','deliverables','badge_text','Section Badge','text','Deliverables',5);
f('pccp','deliverables','title','Section Title','text','Deliverables & Engagement',8);
f('pccp','deliverables','item1','Deliverable 1','text','SaMD change taxonomy (locked vs adaptive)',10);
f('pccp','deliverables','item2','Deliverable 2','text','Algorithm Change Protocol (ACP)',8);
f('pccp','deliverables','item3','Deliverable 3','text','Model update validation plan',8);
f('pccp','deliverables','item4','Deliverable 4','text','Drift monitoring and acceptance thresholds',10);
f('pccp','deliverables','duration_label','Duration Label','text','Duration',5);
f('pccp','deliverables','duration_value','Duration Value','text','4–8 weeks',5);

// AI Design Controls
img('ai_design_controls','hero','hero_image','Hero Image','https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?q=80&w=1400&auto=format&fit=crop',1400,700,'AI design controls QMSR integration medical device');
f('ai_design_controls','hero','badge_text','Hero Badge','text','AI Design Controls',5);
f('ai_design_controls','integration','badge_text','Section Badge','text','AI/ML Compliance',5);
f('ai_design_controls','integration','title','Section Title','text','QMS Integration for AI/ML',8);
f('ai_design_controls','integration','paragraph1','Paragraph 1','textarea','We integrate AI/ML-specific design controls into medical device QMS to support compliant development, verification, and release.',40);
f('ai_design_controls','integration','purpose_text','Purpose Text','text','Make AI design controls inspection-ready.',8);
f('ai_design_controls','deliverables','badge_text','Section Badge','text','Deliverables',5);
f('ai_design_controls','deliverables','title','Section Title','text','Deliverables & Engagement',8);
f('ai_design_controls','deliverables','item1','Deliverable 1','text','AI-specific Design History File (DHF)',10);
f('ai_design_controls','deliverables','item2','Deliverable 2','text','Dataset governance SOPs',8);
f('ai_design_controls','deliverables','item3','Deliverable 3','text','Bias and representativeness controls',10);
f('ai_design_controls','deliverables','item4','Deliverable 4','text','Traceability matrix from requirements to claims',12);
f('ai_design_controls','deliverables','duration_label','Duration Label','text','Duration',5);
f('ai_design_controls','deliverables','duration_value','Duration Value','text','6–10 weeks',5);

// Healthcare Software Development
img('software','hero','hero_image','Hero Image','https://images.unsplash.com/photo-1581093588401-fbb62a02f120?q=80&w=2000&auto=format&fit=crop',2000,1000,'Healthcare software development market forecast');
f('software','hero','page_title','Page Header Title','text','Solutions and Services',6);
f('software','hero','breadcrumb','Page Header Breadcrumb','text','Healthcare Software Development',6);
f('software','hero','badge_text','Section Badge','text','Healthcare Software',5);
f('software','hero','title','Section Title','text','Healthcare Software Development',6);
f('software','hero','subtitle','Section Subtitle','textarea','Secure, scalable applications that integrate seamlessly with hospital networks, laboratories, research platforms, and enterprise systems.',30);
f('software','hero','paragraph1','Intro Paragraph 1','textarea','E&E Medicals designs and delivers custom healthcare software tailored to clinician and administrator workflows. From EHR/EMR and telemedicine to medical device software and CRM solutions, we build secure and scalable systems aligned with interoperability standards such as HL7 and FHIR.',55);
f('software','hero','paragraph2','Intro Paragraph 2','textarea','We collaborate with hospitals, long-term care providers, diagnostic centers, pharmaceutical companies, and digital health startups to reduce operational friction and protect patient data.',35);
f('software','hero','app_heading','Applications Heading','text','Applications We Develop',6);
f('software','hero','app_paragraph','Applications Paragraph','textarea','Our healthcare software supports both administrative and patient-facing operations and integrates with diverse IT ecosystems.',25);

img('software','telemedicine','hero_image','Telemedicine Image','https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2000&auto=format&fit=crop',2000,1000,'Telemedicine interface');
f('software','telemedicine','badge_text','Section Badge','text','Telemedicine',4);
f('software','telemedicine','title','Section Title','text','Telemedicine Software Applications',6);
f('software','telemedicine','subtitle','Section Subtitle','textarea','Our specialists create telemedicine software that enables remote consultations, examinations, diagnostics, and medical staff training.',25);
f('software','telemedicine','paragraph','Section Paragraph','textarea','We deliver telemedicine platforms that give patients on-demand remote access while helping healthcare facilities optimize resources and expand service coverage.',25);

f('software','cta','title','CTA Title','text','Ready to Build Your Healthcare Software?',8);
f('software','cta','subtitle','CTA Subtitle','textarea','Let our specialists design and deliver a solution tailored to your clinical and operational needs.',22);
f('software','cta','button_text','CTA Button Text','text','Start Your Project',5);

// Share Your Project
f('share_project','header','title','Page Header Title','text','Share Your Project',5);
f('share_project','header','breadcrumb','Page Header Breadcrumb','text','Enquiry Form',4);
f('share_project','intro','heading','Intro Heading','text','Ready to Start Your Product Development Project or Regulatory Submission?',12);
f('share_project','intro','paragraph1','Intro Paragraph 1','textarea','Drive successful product development projects and regulatory submissions for medical, life science, and industrial technologies. Without the right engineering or design expertise, technology businesses can face costly delays and compliance gaps.',40);
f('share_project','intro','paragraph2','Intro Paragraph 2','textarea','Share your project details below and our team will get back to you to discuss how we can support your regulatory and quality goals.',30);
f('share_project','intro','note_text','Intro Form Note','text','Enquiry Form - Share Your Project',8);

f('share_project','form','form_title','Form Title','text','Enquiry Form',4);
f('share_project','form','form_subtitle','Form Subtitle','text','Tell us about your project. We\'ll respond within 24 hours.',12);
f('share_project','form','label_first_name','First Name Label','text','First Name',3);
f('share_project','form','label_last_name','Last Name Label','text','Last Name',3);
f('share_project','form','label_email','Email Label','text','Email',3);
f('share_project','form','label_purpose','Purpose Label','text','Purpose',3);
f('share_project','form','label_phone','Phone Label','text','Phone',3);
f('share_project','form','label_message','Message Label','text','Project Details / Message',6);
f('share_project','form','placeholder_first_name','First Name Placeholder','text','John',2);
f('share_project','form','placeholder_last_name','Last Name Placeholder','text','Doe',2);
f('share_project','form','placeholder_email','Email Placeholder','text','john@company.com',3);
f('share_project','form','placeholder_phone','Phone Placeholder','text','+1 (555) 000-0000',5);
f('share_project','form','placeholder_message','Message Placeholder','textarea','Tell us about your project, device, or regulatory needs...',20);
f('share_project','form','purpose_options','Purpose Options (one per line)','textarea','Please Select\nFDA 510(k) / De Novo / PMA\nEU MDR / IVDR / CE Mark\nQuality Management System (QMS)\nAI/ML Medical Device\nDrug / Biologics Submission\nClinical Evaluation\nOther Regulatory Support',50);
f('share_project','form','submit_text','Submit Button Text','text','Submit Enquiry',4);

// ─── GLOBAL SETTINGS SEED ────────────────────────────────────────────────────

f('global','contact','phone1',   'Phone Number 1',  'text', '+1 (678) 815-9233', 5);
f('global','contact','phone2',   'Phone Number 2',  'text', '+1 (678) 385-6106', 5);
f('global','contact','phone3',   'Phone Number 3',  'text', '+1 (678) 336-8945', 5);
f('global','contact','email',    'Email Address',   'text', 'info@eemedicals.com', 5);
f('global','contact','address',  'Office Address',  'text', '400 Galleria Pkwy Suite 1500, Atlanta, GA 30339', 15);
f('global','contact','hours',    'Business Hours',  'text', 'Mon - Fri: 9am - 6pm EST', 10);

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
    out[r.section][r.field_key] = r.filename ? `/uploads/${r.filename}` : (r.url || null);
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
