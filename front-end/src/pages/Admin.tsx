import React, { useRef, useState, useEffect, useCallback } from 'react';
import { LogOut, Save, Upload, Image as ImageIcon, ChevronRight, CheckCircle, AlertCircle, Loader, Globe, Search, X } from 'lucide-react';

// ─── Types ────────────────────────────────────────────────────────────────────
interface Field {
  id: number;
  page: string;
  section: string;
  field_key: string;
  label: string;
  field_type: 'text' | 'textarea';
  value: string;
  word_limit: number | null;
}

interface ImageField {
  id: number;
  page: string;
  section: string;
  field_key: string;
  label: string;
  filename: string | null;
  url: string | null;
  required_width: number;
  required_height: number;
  alt: string;
}

interface AdminData {
  fields: Field[];
  images: ImageField[];
}

interface PageConfig {
  key: string;
  label: string;
  sections: { key: string; label: string }[];
}

interface AdminNavItem {
  label: string;
  pageKey?: string;
  disabled?: boolean;
}

interface AdminNavGroup {
  label: string;
  items?: AdminNavItem[];
  categories?: { label: string; items: AdminNavItem[] }[];
}

// ─── Page / Section Config ────────────────────────────────────────────────────
const PAGE_CONFIGS: PageConfig[] = [
  {
    key: 'home',
    label: 'Home Page',
    sections: [
      { key: 'hero',    label: 'Hero Section' },
      { key: 'why',     label: 'Why Choose Us' },
      { key: 'stats',   label: 'Stats & Numbers' },
      { key: 'faq',     label: 'FAQ' },
      { key: 'reviews', label: 'Customer Reviews' },
      { key: 'cta',     label: 'CTA Banner' },
    ],
  },
  {
    key: 'about',
    label: 'About Page',
    sections: [
      { key: 'main',    label: 'Main Content & Photo' },
      { key: 'mission', label: 'Mission, Vision & Values' },
    ],
  },
  {
    key: 'careers',
    label: 'Careers Page',
    sections: [
      { key: 'intro', label: 'Introduction & CTA' },
    ],
  },
  {
    key: 'media',
    label: 'Media / Blog',
    sections: [
      { key: 'header', label: 'Page Header & Sidebar' },
    ],
  },
  {
    key: 'global',
    label: 'Global Settings',
    sections: [
      { key: 'contact', label: 'Contact Info (Header & Footer)' },
    ],
  },
  // ─── TIER 1: Core Service Pages ───────────────────────────────────────────
  {
    key: 'medical_devices',
    label: 'Medical Devices',
    sections: [
      { key: 'hero',    label: 'Hero Section' },
    ],
  },
  {
    key: 'fda_defense',
    label: 'FDA Interaction & Defense',
    sections: [
      { key: 'hero',         label: 'Hero Section' },
      { key: 'deliverables', label: 'Deliverables & Engagement' },
    ],
  },
  {
    key: 'postmarket',
    label: 'Postmarket Compliance',
    sections: [
      { key: 'hero',  label: 'Hero Section' },
      { key: 'pms',   label: 'PMS Process' },
      { key: 'why',   label: 'Why E&E' },
    ],
  },
  {
    key: 'qmsr',
    label: 'Quality System Regulation',
    sections: [
      { key: 'hero',    label: 'Hero Section' },
      { key: 'content', label: 'QMSR Content' },
    ],
  },
  {
    key: 'cmc',
    label: 'CMC Services',
    sections: [
      { key: 'hero',      label: 'Hero Section' },
      { key: 'process',   label: 'CMC Process' },
      { key: 'lifecycle', label: 'Lifecycle Management' },
    ],
  },
  {
    key: 'reliability',
    label: 'Reliability',
    sections: [
      { key: 'hero', label: 'Hero Section' },
      { key: 'product', label: 'Product Design' },
      { key: 'test_plan', label: 'Test Plan Development' },
      { key: 'mtbf', label: 'MTBF Analysis' },
    ],
  },
  {
    key: 'six_sigma',
    label: 'Six Sigma - Healthcare',
    sections: [
      { key: 'hero', label: 'Hero Section' },
      { key: 'sigma', label: 'What is Six Sigma?' },
      { key: 'healthcare', label: 'Why Six Sigma in Healthcare?' },
      { key: 'why', label: 'Why Choose E&E' },
    ],
  },
  {
    key: 'audits',
    label: 'Audits',
    sections: [
      { key: 'hero', label: 'Hero Section' },
      { key: 'intro', label: 'Quality Assurance Overview' },
      { key: 'types', label: 'Audit Types' },
      { key: 'standards', label: 'Standards & Frameworks' },
    ],
  },
  {
    key: 'iso9001_impl',
    label: 'ISO 9001 Quality Management',
    sections: [
      { key: 'hero', label: 'Hero Section' },
      { key: 'implementation', label: 'Implementation Content' },
      { key: 'why', label: 'Why E&E' },
    ],
  },
  {
    key: 'iso13485',
    label: 'ISO 13485 Quality System',
    sections: [
      { key: 'hero', label: 'Hero Section' },
      { key: 'overview', label: 'ISO 13485 Overview' },
      { key: 'consultant', label: 'Why Appoint E&E' },
      { key: 'mdsap', label: 'MDSAP Content' },
    ],
  },
  {
    key: 'iso14971',
    label: 'ISO 14971 Risk Management',
    sections: [
      { key: 'hero', label: 'Hero Section' },
      { key: 'expert', label: 'Risk Management Expert' },
      { key: 'implementation', label: 'Implementation Service' },
    ],
  },
  {
    key: 'iso13485_gap',
    label: 'Free ISO 13485 Gap Analysis',
    sections: [
      { key: 'header', label: 'Page Header' },
    ],
  },
  {
    key: 'ccc_mark',
    label: 'CCC Mark Approval',
    sections: [
      { key: 'hero', label: 'Hero Section' },
      { key: 'main', label: 'CCC Overview' },
      { key: 'registration', label: 'Registration' },
      { key: 'why', label: 'Why E&E' },
    ],
  },
  {
    key: 'ce_mark',
    label: 'CE Mark Approval',
    sections: [
      { key: 'hero', label: 'Hero Section' },
      { key: 'main', label: 'CE Overview' },
      { key: 'gap', label: 'MDR Gap Analysis' },
      { key: 'mdd', label: 'MDD to MDR' },
      { key: 'clinical', label: 'Clinical Documentation' },
      { key: 'why', label: 'Why E&E' },
    ],
  },
  {
    key: 'fda_483',
    label: 'FDA 483 / Warning Letters',
    sections: [
      { key: 'hero', label: 'Hero Section' },
      { key: 'audit', label: '483 Analysis' },
      { key: 'remediation', label: 'Remediation Strategy' },
      { key: 'recalls', label: 'Product Recalls' },
    ],
  },
  {
    key: 'pre_ide',
    label: 'Investigational Device Exemption (IDE)',
    sections: [
      { key: 'hero', label: 'Hero Section' },
      { key: 'main', label: 'Pre-IDE Process' },
      { key: 'meeting', label: 'Pre-IDE Meeting' },
    ],
  },
  {
    key: 'fda_510k',
    label: '510(k), De Novo, PMA',
    sections: [
      { key: 'hero', label: 'Hero Section' },
      { key: 'overview', label: 'FDA Applications Overview' },
      { key: 'notifications', label: '510(k) Notifications' },
      { key: 'strategy', label: 'Submission Strategy' },
      { key: 'drugs', label: 'Drugs Section' },
    ],
  },
  {
    key: 'fda_establishment',
    label: 'Establishment Registration',
    sections: [
      { key: 'hero', label: 'Hero Section' },
      { key: 'main', label: 'FDA Registration' },
      { key: 'medical', label: 'Medical Device Registration' },
      { key: 'drug', label: 'Drug & Cosmetic Registration' },
    ],
  },
  {
    key: 'fda_us_agent',
    label: 'US Agent for Foreign Establishments',
    sections: [
      { key: 'hero', label: 'Hero Section' },
      { key: 'main', label: 'US Agent Overview' },
      { key: 'services', label: 'Our Services' },
    ],
  },
  {
    key: 'ind',
    label: 'IND Application',
    sections: [
      { key: 'hero', label: 'Hero Section' },
      { key: 'main', label: 'IND Overview' },
      { key: 'expertise', label: 'E&E Expertise' },
    ],
  },
  {
    key: 'nda',
    label: 'New Drug Application (NDA)',
    sections: [
      { key: 'hero', label: 'Hero Section' },
      { key: 'main', label: 'NDA Overview' },
      { key: 'expertise', label: 'E&E Expertise' },
    ],
  },
  {
    key: 'anda',
    label: 'ANDA Submissions',
    sections: [
      { key: 'hero', label: 'Hero Section' },
      { key: 'main', label: 'ANDA Overview' },
      { key: 'submissions', label: 'ANDA Submissions' },
    ],
  },
  {
    key: 'bla',
    label: 'Biologics License (BLA)',
    sections: [
      { key: 'hero', label: 'Hero Section' },
      { key: 'main', label: 'BLA Overview' },
      { key: 'services', label: 'Biologics Services' },
      { key: 'guidance', label: 'Strategic Guidance' },
    ],
  },
  {
    key: 'dmf',
    label: 'Drug Master File (DMF)',
    sections: [
      { key: 'hero', label: 'Hero Section' },
      { key: 'main', label: 'DMF Overview' },
      { key: 'strategy', label: 'Submission Strategy' },
      { key: 'capabilities', label: 'Core Capabilities' },
    ],
  },
  {
    key: 'ai_reg_strategy',
    label: 'AI Regulatory Strategy',
    sections: [
      { key: 'hero', label: 'Hero Section' },
      { key: 'intro', label: 'Global AI Strategy' },
      { key: 'services', label: 'Regulatory Services' },
      { key: 'lists', label: 'Key Outcomes & Risks' },
    ],
  },
  {
    key: 'ai_samd',
    label: 'AI SaMD Regulatory Pathway',
    sections: [
      { key: 'hero', label: 'Hero Section' },
      { key: 'strategy', label: 'Global Pathway Strategy' },
      { key: 'deliverables', label: 'Deliverables & Engagement' },
    ],
  },
  {
    key: 'ai_fda_readiness',
    label: 'AI FDA Readiness & Risk Audit',
    sections: [
      { key: 'hero', label: 'Hero Section' },
      { key: 'audit', label: 'FDA Readiness Audit' },
      { key: 'deliverables', label: 'Deliverables & Engagement' },
    ],
  },
  {
    key: 'pccp',
    label: 'PCCP Authoring',
    sections: [
      { key: 'hero', label: 'Hero Section' },
      { key: 'framework', label: 'PCCP Framework' },
      { key: 'deliverables', label: 'Deliverables & Engagement' },
    ],
  },
  {
    key: 'ai_design_controls',
    label: 'AI Design Controls & QMSR',
    sections: [
      { key: 'hero', label: 'Hero Section' },
      { key: 'integration', label: 'QMS Integration' },
      { key: 'deliverables', label: 'Deliverables & Engagement' },
    ],
  },
  {
    key: 'software',
    label: 'Healthcare Software Development',
    sections: [
      { key: 'hero', label: 'Hero & Introduction' },
      { key: 'telemedicine', label: 'Telemedicine Section' },
      { key: 'cta', label: 'Call To Action' },
    ],
  },
  {
    key: 'share_project',
    label: 'Share Your Project',
    sections: [
      { key: 'header', label: 'Page Header' },
      { key: 'intro', label: 'Left Intro Content' },
      { key: 'form', label: 'Form Labels & Messages' },
    ],
  },
];

const ADMIN_NAV_GROUPS: AdminNavGroup[] = [
  {
    label: 'Core Pages',
    items: [
      { label: 'Home Page', pageKey: 'home' },
      { label: 'About Page', pageKey: 'about' },
      { label: 'Careers Page', pageKey: 'careers' },
      { label: 'Media / Blog', pageKey: 'media' },
      { label: 'Healthcare Software Development', pageKey: 'software' },
      { label: 'Share Your Project', pageKey: 'share_project' },
      { label: 'Global Settings', pageKey: 'global' },
    ],
  },
  {
    label: 'Quality & Compliance',
    categories: [
      {
        label: 'Healthcare',
        items: [
          { label: 'Reliability', pageKey: 'reliability' },
          { label: 'Six Sigma - Healthcare', pageKey: 'six_sigma' },
        ],
      },
      {
        label: 'Quality Assurance',
        items: [
          { label: 'Medical Devices', pageKey: 'medical_devices' },
          { label: 'Audits', pageKey: 'audits' },
          { label: 'Quality Management System Regulation', pageKey: 'qmsr' },
          { label: 'QMS Implementation', pageKey: 'iso9001_impl' },
        ],
      },
      {
        label: 'ISO Standards',
        items: [
          { label: 'ISO 13485 Quality System', pageKey: 'iso13485' },
          { label: 'ISO 14971 Risk Management', pageKey: 'iso14971' },
          { label: 'ISO 9001 Quality Management', pageKey: 'iso9001_impl' },
          { label: 'Free ISO 13485 Gap Analysis', pageKey: 'iso13485_gap' },
          { label: 'Free ISO 9001:2015 Gap Analysis', pageKey: 'iso9001_impl' },
        ],
      },
    ],
  },
  {
    label: 'Regulatory Operations',
    categories: [
      {
        label: 'Mark Approval & Compliance',
        items: [
          { label: 'CCC Mark Approval', pageKey: 'ccc_mark' },
          { label: 'CE Mark Approval', pageKey: 'ce_mark' },
          { label: 'EU MDR/IVDR Technical Docs', pageKey: 'ce_mark' },
          { label: 'Post-market Compliance', pageKey: 'postmarket' },
          { label: 'FDA 483 / Warning Letters', pageKey: 'fda_483' },
        ],
      },
      {
        label: 'Medical Device & Diagnostics',
        items: [
          { label: 'Investigational Device Exemption (IDE)', pageKey: 'pre_ide' },
          { label: '510(k), De Novo, PMA', pageKey: 'fda_510k' },
          { label: 'Establishment Registration', pageKey: 'fda_establishment' },
          { label: 'US Agent for Foreign Establishments', pageKey: 'fda_us_agent' },
        ],
      },
      {
        label: 'Drugs / Biologics / Pharmacovigilance',
        items: [
          { label: 'IND Application', pageKey: 'ind' },
          { label: 'New Drug Application (NDA)', pageKey: 'nda' },
          { label: 'ANDA Submissions', pageKey: 'anda' },
          { label: 'Biologics License (BLA)', pageKey: 'bla' },
          { label: 'Drug Master File (DMF)', pageKey: 'dmf' },
          { label: 'CMC Services', pageKey: 'cmc' },
        ],
      },
    ],
  },
  {
    label: 'AI-Enabled Regulatory',
    items: [
      { label: 'AI Regulatory Strategy', pageKey: 'ai_reg_strategy' },
      { label: 'AI SaMD Regulatory Pathway', pageKey: 'ai_samd' },
      { label: 'AI FDA Readiness & Risk Audit', pageKey: 'ai_fda_readiness' },
      { label: 'PCCP Authoring', pageKey: 'pccp' },
      { label: 'AI Design Controls & QMSR', pageKey: 'ai_design_controls' },
      { label: 'FDA Interaction & Defense', pageKey: 'fda_defense' },
    ],
  },
];

// ─── Helpers ──────────────────────────────────────────────────────────────────
function wordCount(text: string): number {
  return text.trim() === '' ? 0 : text.trim().split(/\s+/).length;
}

function apiBase() {
  return (import.meta.env.VITE_API_BASE_URL as string) ?? '';
}

function getToken() {
  return localStorage.getItem('adminToken') ?? '';
}

// ─── Login Screen ─────────────────────────────────────────────────────────────
function LoginScreen({ onLogin }: { onLogin: (token: string) => void }) {
  const [user, setUser] = useState('');
  const [pass, setPass] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const res = await fetch(`${apiBase()}/api/admin/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ user, pass }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Login failed');
      localStorage.setItem('adminToken', data.token);
      onLogin(data.token);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'Login failed');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center px-4">
      <div className="w-full max-w-sm bg-white rounded-2xl shadow-xl p-8">
        <div className="text-center mb-8">
          <div className="w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <span className="text-white text-2xl font-bold">A</span>
          </div>
          <h1 className="text-xl font-bold text-gray-900">E&E Medicals Admin</h1>
          <p className="text-sm text-gray-500 mt-1">Sign in to manage site content</p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Username</label>
            <input
              type="text"
              value={user}
              onChange={(e) => setUser(e.target.value)}
              required
              autoFocus
              className="w-full px-3 py-2.5 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="admin"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <input
              type="password"
              value={pass}
              onChange={(e) => setPass(e.target.value)}
              required
              className="w-full px-3 py-2.5 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="••••••••"
            />
          </div>
          {error && (
            <div className="flex items-center gap-2 text-red-600 text-sm bg-red-50 p-3 rounded-lg">
              <AlertCircle size={16} />
              {error}
            </div>
          )}
          <button
            type="submit"
            disabled={loading}
            className="w-full py-2.5 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-semibold rounded-xl text-sm transition-colors flex items-center justify-center gap-2"
          >
            {loading ? <Loader size={16} className="animate-spin" /> : null}
            {loading ? 'Signing in...' : 'Sign In'}
          </button>
        </form>
      </div>
    </div>
  );
}

// ─── Word Counter Badge ───────────────────────────────────────────────────────
function WordCounter({ text, limit }: { text: string; limit: number | null }) {
  if (!limit) return null;
  const count = wordCount(text);
  const over = count > limit;
  return (
    <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${over ? 'bg-red-100 text-red-600' : 'bg-gray-100 text-gray-500'}`}>
      {count}/{limit} words
    </span>
  );
}

// ─── Image Slot ───────────────────────────────────────────────────────────────
function ImageSlot({ img, onUploaded }: { img: ImageField; onUploaded: (key: string, url: string) => void }) {
  const fileRef = useRef<HTMLInputElement>(null);
  const [preview, setPreview] = useState<string | null>(
    img.filename ? `${apiBase()}/uploads/${img.filename}` : img.url
  );
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  async function handleFile(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploading(true);
    setError('');
    setSuccess('');
    const fd = new FormData();
    fd.append('image', file);
    fd.append('alt', img.alt);
    try {
      const res = await fetch(`${apiBase()}/api/admin/image/${img.page}/${img.section}/${img.field_key}`, {
        method: 'POST',
        headers: { Authorization: `Bearer ${getToken()}` },
        body: fd,
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error);
      const url = `${apiBase()}${data.url}`;
      setPreview(url);
      setSuccess('Image updated successfully');
      onUploaded(img.field_key, url);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'Upload failed');
    } finally {
      setUploading(false);
      e.target.value = '';
    }
  }

  return (
    <div className="border border-gray-200 rounded-xl p-4 bg-gray-50">
      <div className="flex items-center justify-between mb-3">
        <div>
          <p className="text-sm font-semibold text-gray-800">{img.label}</p>
          <p className="text-xs text-gray-500 mt-0.5">
            Required size: <span className="font-semibold text-gray-700">{img.required_width}×{img.required_height}px</span>
            {' · '}Max 15MB · JPG, PNG, WebP
          </p>
        </div>
        <button
          onClick={() => fileRef.current?.click()}
          disabled={uploading}
          className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white text-sm font-semibold rounded-lg transition-colors"
        >
          {uploading ? <Loader size={14} className="animate-spin" /> : <Upload size={14} />}
          {uploading ? 'Uploading...' : 'Change Image'}
        </button>
        <input ref={fileRef} type="file" accept="image/*" onChange={handleFile} className="hidden" />
      </div>

      {preview ? (
        <img
          src={preview}
          alt={img.alt || img.label}
          className="w-full max-h-48 object-cover rounded-lg border border-gray-200"
        />
      ) : (
        <div className="w-full h-32 bg-gray-200 rounded-lg flex items-center justify-center">
          <ImageIcon size={32} className="text-gray-400" />
        </div>
      )}

      {error && (
        <div className="mt-2 flex items-start gap-2 text-red-600 text-xs bg-red-50 p-2.5 rounded-lg">
          <AlertCircle size={14} className="mt-0.5 shrink-0" />
          {error}
        </div>
      )}
      {success && (
        <div className="mt-2 flex items-center gap-2 text-green-600 text-xs bg-green-50 p-2.5 rounded-lg">
          <CheckCircle size={14} />
          {success}
        </div>
      )}
    </div>
  );
}

// ─── Section Editor ───────────────────────────────────────────────────────────
function SectionEditor({ sectionKey, data }: { sectionKey: string; data: AdminData }) {
  const sectionFields = data.fields.filter((f) => f.section === sectionKey);
  const sectionImages = data.images.filter((img) => img.section === sectionKey);

  const [values, setValues] = useState<Record<string, string>>(() => {
    const init: Record<string, string> = {};
    sectionFields.forEach((f) => { init[f.field_key] = f.value; });
    return init;
  });
  const [saving, setSaving] = useState(false);
  const [saveMsg, setSaveMsg] = useState('');
  const [saveErr, setSaveErr] = useState('');

  useEffect(() => {
    const init: Record<string, string> = {};
    sectionFields.forEach((f) => { init[f.field_key] = f.value; });
    setValues(init);
    setSaveMsg('');
    setSaveErr('');
  }, [sectionKey]); // eslint-disable-line react-hooks/exhaustive-deps

  async function saveAll() {
    setSaving(true);
    setSaveMsg('');
    setSaveErr('');
    try {
      const promises = sectionFields.map((f) =>
        fetch(`${apiBase()}/api/admin/content`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${getToken()}`,
          },
          body: JSON.stringify({
            page: f.page,
            section: f.section,
            field_key: f.field_key,
            value: values[f.field_key] ?? f.value,
          }),
        }).then((r) => { if (!r.ok) throw new Error(`Failed to save ${f.label}`); })
      );
      await Promise.all(promises);
      setSaveMsg('All changes saved!');
      setTimeout(() => setSaveMsg(''), 3000);
    } catch (err: unknown) {
      setSaveErr(err instanceof Error ? err.message : 'Save failed');
    } finally {
      setSaving(false);
    }
  }

  if (sectionFields.length === 0 && sectionImages.length === 0) {
    return <p className="text-gray-400 text-sm">No editable fields in this section.</p>;
  }

  return (
    <div className="space-y-5">
      {/* Text / Textarea fields */}
      {sectionFields.map((field) => (
        <div key={field.field_key} className="bg-white border border-gray-200 rounded-xl p-4">
          <div className="flex items-center justify-between mb-2">
            <label className="text-sm font-semibold text-gray-800">{field.label}</label>
            <WordCounter text={values[field.field_key] ?? ''} limit={field.word_limit} />
          </div>
          {field.field_type === 'textarea' ? (
            <textarea
              value={values[field.field_key] ?? ''}
              onChange={(e) => setValues((v) => ({ ...v, [field.field_key]: e.target.value }))}
              rows={4}
              className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-y leading-relaxed"
            />
          ) : (
            <input
              type="text"
              value={values[field.field_key] ?? ''}
              onChange={(e) => setValues((v) => ({ ...v, [field.field_key]: e.target.value }))}
              className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          )}
        </div>
      ))}

      {/* Image fields */}
      {sectionImages.length > 0 && (
        <div className="space-y-4">
          <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider">Images</h3>
          {sectionImages.map((img) => (
            <ImageSlot
              key={img.field_key}
              img={img}
              onUploaded={(_key, _url) => {/* preview handled inside ImageSlot */}}
            />
          ))}
        </div>
      )}

      {/* Save button */}
      {sectionFields.length > 0 && (
        <div className="flex items-center gap-4 pt-2">
          <button
            onClick={saveAll}
            disabled={saving}
            className="flex items-center gap-2 px-6 py-2.5 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-semibold rounded-xl text-sm transition-colors"
          >
            {saving ? <Loader size={15} className="animate-spin" /> : <Save size={15} />}
            {saving ? 'Saving...' : 'Save Section'}
          </button>
          {saveMsg && (
            <span className="flex items-center gap-1.5 text-green-600 text-sm font-medium">
              <CheckCircle size={15} /> {saveMsg}
            </span>
          )}
          {saveErr && (
            <span className="flex items-center gap-1.5 text-red-600 text-sm font-medium">
              <AlertCircle size={15} /> {saveErr}
            </span>
          )}
        </div>
      )}
    </div>
  );
}

// ─── Main Admin Dashboard ─────────────────────────────────────────────────────
function AdminDashboard({ onLogout }: { onLogout: () => void }) {
  const [activePage, setActivePage] = useState('home');
  const [activeSection, setActiveSection] = useState('hero');
  const [data, setData] = useState<AdminData | null>(null);
  const [loading, setLoading] = useState(true);
  const [fetchErr, setFetchErr] = useState('');
  const [pageSearch, setPageSearch] = useState('');

  const currentPageConfig = PAGE_CONFIGS.find((p) => p.key === activePage) ?? PAGE_CONFIGS[0];

  const fetchData = useCallback(async (page: string) => {
    setLoading(true);
    setFetchErr('');
    setData(null);
    try {
      const res = await fetch(`${apiBase()}/api/admin/page/${page}`, {
        headers: { Authorization: `Bearer ${getToken()}` },
      });
      if (res.status === 401) {
        localStorage.removeItem('adminToken');
        onLogout();
        return;
      }
      if (!res.ok) throw new Error('Failed to load content');
      setData(await res.json());
    } catch (err: unknown) {
      setFetchErr(err instanceof Error ? err.message : 'Failed to load content');
    } finally {
      setLoading(false);
    }
  }, [onLogout]);

  useEffect(() => { fetchData(activePage); }, [activePage, fetchData]);

  function handlePageChange(pageKey: string) {
    const page = PAGE_CONFIGS.find((p) => p.key === pageKey) ?? PAGE_CONFIGS[0];
    setActivePage(pageKey);
    setActiveSection(page.sections[0]?.key ?? '');
    setPageSearch('');
  }

  const activeSectionLabel = currentPageConfig.sections.find((s) => s.key === activeSection)?.label ?? '';

  // Filter nav groups by search query
  const searchQuery = pageSearch.trim().toLowerCase();
  const filteredNavGroups = searchQuery
    ? ADMIN_NAV_GROUPS.map((group) => {
        const filteredItems = group.items?.filter((item) =>
          item.label.toLowerCase().includes(searchQuery)
        );
        const filteredCategories = group.categories?.map((cat) => ({
          ...cat,
          items: cat.items.filter((item) => item.label.toLowerCase().includes(searchQuery)),
        })).filter((cat) => cat.items.length > 0);

        if ((filteredItems?.length ?? 0) === 0 && (filteredCategories?.length ?? 0) === 0) return null;
        return { ...group, items: filteredItems, categories: filteredCategories };
      }).filter(Boolean) as typeof ADMIN_NAV_GROUPS
    : ADMIN_NAV_GROUPS;

  return (
    <div className="h-screen bg-slate-100 flex flex-col overflow-hidden">
      {/* Top Bar */}
      <header className="bg-white border-b border-gray-200 px-6 py-3 flex items-center justify-between shrink-0">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center shrink-0">
            <span className="text-white text-sm font-bold">A</span>
          </div>
          <div>
            <h1 className="text-sm font-bold text-gray-900">E&E Medicals Admin</h1>
            <p className="text-xs text-gray-500 flex items-center gap-1">
              <span>{currentPageConfig.label}</span>
              {activeSectionLabel && (
                <>
                  <ChevronRight size={11} className="text-gray-300" />
                  <span className="text-blue-600">{activeSectionLabel}</span>
                </>
              )}
            </p>
          </div>
        </div>
        <button
          onClick={() => { localStorage.removeItem('adminToken'); onLogout(); }}
          className="flex items-center gap-2 px-3 py-1.5 text-gray-600 hover:text-red-600 hover:bg-red-50 rounded-lg text-sm font-medium transition-colors"
        >
          <LogOut size={15} />
          Logout
        </button>
      </header>

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar — pages only, independent scroll */}
        <aside className="w-64 bg-white border-r border-gray-200 flex flex-col shrink-0 overflow-hidden">

          {/* Search box */}
          <div className="px-3 py-3 border-b border-gray-100 shrink-0">
            <div className="relative">
              <Search size={14} className="absolute left-2.5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
              <input
                type="text"
                placeholder="Search pages…"
                value={pageSearch}
                onChange={(e) => setPageSearch(e.target.value)}
                className="w-full pl-8 pr-7 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-50"
              />
              {pageSearch && (
                <button
                  onClick={() => setPageSearch('')}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  <X size={13} />
                </button>
              )}
            </div>
          </div>

          {/* Page nav — scrollable independently */}
          <nav className="flex-1 overflow-y-auto py-2">
            {filteredNavGroups.length === 0 && (
              <p className="px-4 py-6 text-xs text-gray-400 text-center">No pages match "{pageSearch}"</p>
            )}
            {filteredNavGroups.map((group) => (
              <div key={group.label} className="mb-1 last:mb-0">
                <p className="px-4 py-1.5 text-[10px] font-bold text-gray-400 uppercase tracking-wider">{group.label}</p>

                {group.items?.map((item) => {
                  const isActive = item.pageKey ? activePage === item.pageKey : false;
                  return (
                    <button
                      key={`${group.label}-${item.label}`}
                      onClick={() => item.pageKey && handlePageChange(item.pageKey)}
                      disabled={!item.pageKey || item.disabled}
                      className={`w-full text-left px-4 py-2 text-sm font-medium flex items-center gap-2 transition-colors ${
                        isActive
                          ? 'bg-blue-50 text-blue-700 border-r-2 border-blue-600'
                          : item.pageKey && !item.disabled
                            ? 'text-gray-600 hover:bg-gray-50'
                            : 'text-gray-400 cursor-not-allowed'
                      }`}
                    >
                      <Globe size={13} className={isActive ? 'text-blue-500' : 'text-gray-400'} />
                      <span className="truncate">{item.label}</span>
                      {item.disabled && <span className="ml-auto text-[10px] uppercase tracking-wider shrink-0">Soon</span>}
                    </button>
                  );
                })}

                {group.categories?.map((category) => (
                  <div key={`${group.label}-${category.label}`} className="mt-0.5">
                    <p className="px-4 py-1 text-[10px] font-semibold text-gray-400 uppercase tracking-wider">{category.label}</p>
                    {category.items.map((item) => {
                      const isActive = item.pageKey ? activePage === item.pageKey : false;
                      return (
                        <button
                          key={`${group.label}-${category.label}-${item.label}`}
                          onClick={() => item.pageKey && handlePageChange(item.pageKey)}
                          disabled={!item.pageKey || item.disabled}
                          className={`w-full text-left pl-7 pr-4 py-2 text-sm font-medium flex items-center gap-2 transition-colors ${
                            isActive
                              ? 'bg-blue-50 text-blue-700 border-r-2 border-blue-600'
                              : item.pageKey && !item.disabled
                                ? 'text-gray-600 hover:bg-gray-50'
                                : 'text-gray-400 cursor-not-allowed'
                          }`}
                        >
                          <Globe size={12} className={isActive ? 'text-blue-500' : 'text-gray-400'} />
                          <span className="truncate">{item.label}</span>
                          {item.disabled && <span className="ml-auto text-[10px] uppercase tracking-wider shrink-0">Soon</span>}
                        </button>
                      );
                    })}
                  </div>
                ))}
              </div>
            ))}
          </nav>

          <div className="px-4 py-3 border-t border-gray-100 shrink-0">
            <p className="text-xs text-gray-400 leading-relaxed">
              Images must match the required dimensions.
            </p>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto flex flex-col min-w-0">

          {/* Section Tabs — always at the top, never scrolls away */}
          <div className="bg-white border-b border-gray-200 px-6 shrink-0">
            <div className="flex gap-1 overflow-x-auto scrollbar-hide">
              {currentPageConfig.sections.map((s) => (
                <button
                  key={s.key}
                  onClick={() => setActiveSection(s.key)}
                  className={`px-4 py-3 text-sm font-medium whitespace-nowrap border-b-2 transition-colors ${
                    activeSection === s.key
                      ? 'border-blue-600 text-blue-700'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  {s.label}
                </button>
              ))}
            </div>
          </div>

          {/* Content area */}
          <div className="flex-1 p-6 overflow-y-auto">
            <div className="max-w-3xl mx-auto">
              <div className="mb-5">
                <h2 className="text-lg font-bold text-gray-900">{activeSectionLabel}</h2>
                <p className="text-sm text-gray-500 mt-0.5">
                  Edit the content for this section, then click Save Section.
                  {currentPageConfig.key === 'global' && (
                    <span className="ml-1 text-blue-600 font-medium">Changes here update the Header and Footer across every page.</span>
                  )}
                </p>
              </div>

              {loading && (
                <div className="flex items-center gap-3 text-gray-500 py-12 justify-center">
                  <Loader size={20} className="animate-spin" />
                  Loading content…
                </div>
              )}

              {fetchErr && (
                <div className="flex items-center gap-2 text-red-600 bg-red-50 p-4 rounded-xl">
                  <AlertCircle size={18} />
                  {fetchErr}
                  <button onClick={() => fetchData(activePage)} className="ml-auto text-sm underline">Retry</button>
                </div>
              )}

              {!loading && !fetchErr && data && (
                <SectionEditor key={`${activePage}-${activeSection}`} sectionKey={activeSection} data={data} />
              )}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

// ─── Root Export ──────────────────────────────────────────────────────────────
export const Admin: React.FC = () => {
  const [token, setToken] = useState(localStorage.getItem('adminToken'));

  if (!token) {
    return <LoginScreen onLogin={(t) => setToken(t)} />;
  }
  return <AdminDashboard onLogout={() => setToken(null)} />;
};
