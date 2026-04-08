import React, { useRef, useState, useEffect, useCallback } from 'react';
import { LogOut, Save, Upload, Image as ImageIcon, ChevronRight, CheckCircle, AlertCircle, Loader } from 'lucide-react';

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

// ─── Constants ────────────────────────────────────────────────────────────────
const PAGE = 'home';

const SECTIONS: { key: string; label: string }[] = [
  { key: 'hero',    label: 'Hero Section' },
  { key: 'why',     label: 'Why Choose Us' },
  { key: 'stats',   label: 'Stats & Numbers' },
  { key: 'faq',     label: 'FAQ' },
  { key: 'reviews', label: 'Customer Reviews' },
  { key: 'cta',     label: 'CTA Banner' },
];

// ─── Helpers ──────────────────────────────────────────────────────────────────
function wordCount(text: string): number {
  return text.trim() === '' ? 0 : text.trim().split(/\s+/).length;
}

function apiBase() {
  return (import.meta.env.VITE_API_BASE_URL as string) ?? '';
}

function uploadsBase() {
  const base = apiBase().replace(/\/+$/, '');
  return base.endsWith('/api') ? base.slice(0, -4) : base;
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
    img.filename ? `${uploadsBase()}/uploads/${img.filename}` : img.url
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
      const url = `${uploadsBase()}${data.url}`;
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

  // Reset local state when section changes
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
  const [activeSection, setActiveSection] = useState('hero');
  const [data, setData] = useState<AdminData | null>(null);
  const [loading, setLoading] = useState(true);
  const [fetchErr, setFetchErr] = useState('');

  const fetchData = useCallback(async () => {
    setLoading(true);
    setFetchErr('');
    try {
      const res = await fetch(`${apiBase()}/api/admin/page/${PAGE}`, {
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

  useEffect(() => { fetchData(); }, [fetchData]);

  const activeSectionLabel = SECTIONS.find((s) => s.key === activeSection)?.label ?? '';

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col">
      {/* Top Bar */}
      <header className="bg-white border-b border-gray-200 px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
            <span className="text-white text-sm font-bold">A</span>
          </div>
          <div>
            <h1 className="text-sm font-bold text-gray-900">E&E Medicals Admin</h1>
            <p className="text-xs text-gray-500">Home Page Content</p>
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
        {/* Sidebar */}
        <aside className="w-56 bg-white border-r border-gray-200 flex flex-col py-4 shrink-0">
          <p className="px-4 text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Sections</p>
          <nav className="flex-1">
            {SECTIONS.map((s) => (
              <button
                key={s.key}
                onClick={() => setActiveSection(s.key)}
                className={`w-full text-left px-4 py-2.5 text-sm font-medium flex items-center justify-between transition-colors ${
                  activeSection === s.key
                    ? 'bg-blue-50 text-blue-700 border-r-2 border-blue-600'
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                {s.label}
                {activeSection === s.key && <ChevronRight size={14} />}
              </button>
            ))}
          </nav>
          <div className="px-4 pt-4 border-t border-gray-100">
            <p className="text-xs text-gray-400 leading-relaxed">
              Changes are saved per section. Images must match the required dimensions exactly.
            </p>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto p-6">
          <div className="max-w-3xl mx-auto">
            <div className="mb-6">
              <h2 className="text-lg font-bold text-gray-900">{activeSectionLabel}</h2>
              <p className="text-sm text-gray-500 mt-1">Edit the text and images for this section, then click Save Section.</p>
            </div>

            {loading && (
              <div className="flex items-center gap-3 text-gray-500 py-12 justify-center">
                <Loader size={20} className="animate-spin" />
                Loading content...
              </div>
            )}

            {fetchErr && (
              <div className="flex items-center gap-2 text-red-600 bg-red-50 p-4 rounded-xl">
                <AlertCircle size={18} />
                {fetchErr}
                <button onClick={fetchData} className="ml-auto text-sm underline">Retry</button>
              </div>
            )}

            {!loading && !fetchErr && data && (
              <SectionEditor key={activeSection} sectionKey={activeSection} data={data} />
            )}
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
