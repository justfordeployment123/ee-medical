import { useCallback, useEffect, useState, useRef, type ChangeEvent } from 'react';
import { Plus, Trash2, Save, Loader, AlertCircle, CheckCircle, ExternalLink, LogOut, ChevronLeft, Upload, ImageIcon } from 'lucide-react';
import type { BlogPost as BlogArticle, ContentSection } from '../../data/blogData';
import { ArticleBlockEditor } from './ArticleBlockEditor';
import { resolveAssetUrl, validateHttpImageUrl } from '../../utils/resolveAssetUrl';

function apiBase() {
  return (import.meta.env.VITE_API_BASE_URL as string) ?? '';
}

function getToken() {
  return localStorage.getItem('adminToken') ?? '';
}

type BlogSummary = Omit<BlogArticle, 'content'> & { content?: ContentSection[] };

const emptyContent: ContentSection[] = [{ type: 'p', text: '' }];

const defaultForm = (): Partial<BlogArticle> & { slugInput: string } => ({
  slugInput: '',
  title: '',
  excerpt: '',
  image: '',
  category: 'FDA Regulatory',
  author: 'E&E Medicals Regulatory Team',
  readTime: '5 min read',
  date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
  metaDescription: '',
  featured: false,
  published: true,
  content: [...emptyContent],
});

export function AdminBlogPanel({
  onLogout,
  onBackToCms,
}: {
  onLogout: () => void;
  onBackToCms: () => void;
}) {
  const [rows, setRows] = useState<BlogSummary[]>([]);
  const [loading, setLoading] = useState(true);
  const [listErr, setListErr] = useState('');
  const [selectedId, setSelectedId] = useState<number | 'new' | null>(null);
  const [form, setForm] = useState(defaultForm());
  const [saveMsg, setSaveMsg] = useState('');
  const [saveErr, setSaveErr] = useState('');
  const [saving, setSaving] = useState(false);
  const [coverHint, setCoverHint] = useState<string | null>(null);
  const [coverUploading, setCoverUploading] = useState(false);
  const [coverUploadErr, setCoverUploadErr] = useState('');
  const coverFileRef = useRef<HTMLInputElement>(null);

  const updateContent = useCallback((next: ContentSection[]) => {
    setForm((f) => ({ ...f, content: next }));
  }, []);

  const loadList = useCallback(async () => {
    setListErr('');
    try {
      const res = await fetch(`${apiBase()}/api/admin/blog`, {
        headers: { Authorization: `Bearer ${getToken()}` },
      });
      if (res.status === 401) {
        localStorage.removeItem('adminToken');
        onLogout();
        return;
      }
      if (!res.ok) throw new Error('Failed to load posts');
      const data = await res.json();
      setRows(data.posts || []);
    } catch (e: unknown) {
      setListErr(e instanceof Error ? e.message : 'Failed to load');
    } finally {
      setLoading(false);
    }
  }, [onLogout]);

  useEffect(() => {
    loadList();
  }, [loadList]);

  const openNew = () => {
    setSelectedId('new');
    const d = defaultForm();
    setForm(d);
    setSaveMsg('');
    setSaveErr('');
    setCoverHint(null);
    setCoverUploadErr('');
  };

  const openEdit = async (id: number) => {
    setSaveMsg('');
    setSaveErr('');
    setCoverHint(null);
    setCoverUploadErr('');
    setSelectedId(id);
    try {
      const res = await fetch(`${apiBase()}/api/admin/blog/${id}`, {
        headers: { Authorization: `Bearer ${getToken()}` },
      });
      if (res.status === 401) {
        localStorage.removeItem('adminToken');
        onLogout();
        return;
      }
      if (!res.ok) throw new Error('Failed to load post');
      const p: BlogArticle = await res.json();
      const contentClone: ContentSection[] = Array.isArray(p.content)
        ? JSON.parse(JSON.stringify(p.content))
        : [...emptyContent];
      setForm({
        slugInput: p.slug,
        title: p.title,
        excerpt: p.excerpt,
        image: p.image,
        category: p.category,
        author: p.author,
        readTime: p.readTime,
        date: p.date,
        metaDescription: p.metaDescription,
        featured: !!p.featured,
        published: p.published !== false,
        content: contentClone,
      });
    } catch (e: unknown) {
      setSaveErr(e instanceof Error ? e.message : 'Load failed');
    }
  };

  const slugFromTitle = () => {
    const s = form.title
      ?.trim()
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-|-$/g, '');
    setForm((f) => ({ ...f, slugInput: s || '' }));
  };

  const coverPreviewSrc = resolveAssetUrl(form.image);

  const onCoverUrlBlur = () => {
    const err = validateHttpImageUrl(form.image ?? '');
    setCoverHint(err);
  };

  const onCoverUpload = async (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setCoverUploading(true);
    setCoverUploadErr('');
    setCoverHint(null);
    const fd = new FormData();
    fd.append('image', file);
    try {
      const res = await fetch(`${apiBase()}/api/admin/blog/cover`, {
        method: 'POST',
        headers: { Authorization: `Bearer ${getToken()}` },
        body: fd,
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Upload failed');
      const path = data.path || data.url;
      if (!path) throw new Error('No path returned');
      setForm((f) => ({ ...f, image: path }));
    } catch (err: unknown) {
      setCoverUploadErr(err instanceof Error ? err.message : 'Upload failed');
    } finally {
      setCoverUploading(false);
      e.target.value = '';
    }
  };

  const handleSave = async () => {
    setSaving(true);
    setSaveMsg('');
    setSaveErr('');
    const content = form.content?.length ? form.content : emptyContent;

    const body = {
      slug: selectedId === 'new' ? form.slugInput : form.slugInput,
      title: form.title,
      excerpt: form.excerpt,
      image: form.image,
      category: form.category,
      author: form.author,
      readTime: form.readTime,
      displayDate: form.date,
      metaDescription: form.metaDescription,
      featured: !!form.featured,
      published: form.published !== false,
      content,
    };

    try {
      const url =
        selectedId === 'new'
          ? `${apiBase()}/api/admin/blog`
          : `${apiBase()}/api/admin/blog/${selectedId}`;
      const res = await fetch(url, {
        method: selectedId === 'new' ? 'POST' : 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${getToken()}`,
        },
        body: JSON.stringify(body),
      });
      if (res.status === 401) {
        localStorage.removeItem('adminToken');
        onLogout();
        return;
      }
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Save failed');
      setSaveMsg('Saved');
      await loadList();
      if (selectedId === 'new' && data.id) {
        setSelectedId(Number(data.id));
        setForm((f) => ({ ...f, slugInput: data.slug }));
      }
      setTimeout(() => setSaveMsg(''), 2500);
    } catch (e: unknown) {
      setSaveErr(e instanceof Error ? e.message : 'Save failed');
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async () => {
    if (selectedId === 'new' || selectedId === null) return;
    if (!window.confirm('Delete this article permanently?')) return;
    try {
      const res = await fetch(`${apiBase()}/api/admin/blog/${selectedId}`, {
        method: 'DELETE',
        headers: { Authorization: `Bearer ${getToken()}` },
      });
      if (res.status === 401) {
        localStorage.removeItem('adminToken');
        onLogout();
        return;
      }
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Delete failed');
      setSelectedId(null);
      setForm(defaultForm());
      await loadList();
    } catch (e: unknown) {
      setSaveErr(e instanceof Error ? e.message : 'Delete failed');
    }
  };

  return (
    <div className="h-screen bg-slate-100 flex flex-col overflow-hidden">
      <header className="bg-white border-b border-gray-200 px-6 py-3 flex items-center justify-between shrink-0">
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={onBackToCms}
            className="flex items-center gap-1.5 text-sm font-medium text-gray-600 hover:text-blue-600"
          >
            <ChevronLeft size={16} />
            Site pages
          </button>
          <span className="text-gray-200">|</span>
          <div>
            <h1 className="text-sm font-bold text-gray-900">Blog articles</h1>
            <p className="text-xs text-gray-500">Shown on the Media page</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <a
            href="/media"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 px-3 py-1.5 text-sm text-brand-600 hover:bg-brand-50 rounded-lg font-medium"
          >
            <ExternalLink size={14} /> View blog
          </a>
          <button
            type="button"
            onClick={() => {
              localStorage.removeItem('adminToken');
              onLogout();
            }}
            className="flex items-center gap-2 px-3 py-1.5 text-gray-600 hover:text-red-600 hover:bg-red-50 rounded-lg text-sm font-medium"
          >
            <LogOut size={15} />
            Logout
          </button>
        </div>
      </header>

      <div className="flex flex-1 min-h-0">
        <aside className="w-72 bg-white border-r border-gray-200 flex flex-col shrink-0">
          <div className="p-3 border-b border-gray-100">
            <button
              type="button"
              onClick={openNew}
              className="w-full flex items-center justify-center gap-2 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-xl"
            >
              <Plus size={16} /> New article
            </button>
          </div>
          <div className="flex-1 overflow-y-auto p-2">
            {loading && (
              <p className="text-xs text-gray-400 px-2 py-4 flex items-center gap-2">
                <Loader size={14} className="animate-spin" /> Loading…
              </p>
            )}
            {listErr && <p className="text-xs text-red-600 px-2">{listErr}</p>}
            {!loading &&
              rows.map((r) => (
                <button
                  key={r.id}
                  type="button"
                  onClick={() => openEdit(Number(r.id))}
                  className={`w-full text-left px-3 py-2.5 rounded-lg text-sm mb-1 transition-colors ${
                    selectedId === Number(r.id) ? 'bg-blue-50 text-blue-800 font-semibold' : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  <span className="line-clamp-2">{r.title}</span>
                  <span className="block text-[11px] text-gray-400 mt-0.5 font-normal">
                    {r.published === false ? 'Draft · ' : ''}
                    {r.slug}
                  </span>
                </button>
              ))}
          </div>
        </aside>

        <main className="flex-1 overflow-y-auto p-6">
          {selectedId === null && (
            <p className="text-gray-500 text-sm max-w-md">Select an article to edit, or create a new one.</p>
          )}
          {(selectedId === 'new' || typeof selectedId === 'number') && (
            <div className="max-w-3xl space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <label className="block col-span-2">
                  <span className="text-xs font-semibold text-gray-600">Title</span>
                  <input
                    className="mt-1 w-full border border-gray-200 rounded-lg px-3 py-2 text-sm"
                    value={form.title}
                    onChange={(e) => setForm((f) => ({ ...f, title: e.target.value }))}
                  />
                </label>
                <label className="block col-span-2 sm:col-span-1">
                  <span className="text-xs font-semibold text-gray-600">URL slug</span>
                  <div className="flex gap-2 mt-1">
                    <input
                      className="flex-1 border border-gray-200 rounded-lg px-3 py-2 text-sm"
                      value={form.slugInput}
                      onChange={(e) => setForm((f) => ({ ...f, slugInput: e.target.value }))}
                      placeholder="my-article-slug"
                    />
                    <button
                      type="button"
                      onClick={slugFromTitle}
                      className="shrink-0 px-3 py-2 text-xs font-semibold bg-gray-100 rounded-lg hover:bg-gray-200"
                    >
                      From title
                    </button>
                  </div>
                </label>
                <label className="block">
                  <span className="text-xs font-semibold text-gray-600">Category</span>
                  <input
                    className="mt-1 w-full border border-gray-200 rounded-lg px-3 py-2 text-sm"
                    value={form.category}
                    onChange={(e) => setForm((f) => ({ ...f, category: e.target.value }))}
                  />
                </label>
                <label className="block col-span-2">
                  <span className="text-xs font-semibold text-gray-600">Cover image</span>
                  <p className="text-[11px] text-gray-500 mt-0.5 mb-2">
                    Landscape works best (e.g. 1200×630 or larger). JPG, PNG, or WebP · max 15 MB · stored files must be at least 200×200px.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <div className="sm:w-52 shrink-0">
                      <div className="aspect-[16/10] rounded-xl border border-gray-200 bg-gray-100 overflow-hidden flex items-center justify-center">
                        {coverPreviewSrc ? (
                          <img
                            src={coverPreviewSrc}
                            alt="Cover preview"
                            className="w-full h-full object-cover"
                            onError={() => setCoverHint('Preview failed — check the URL or try uploading again')}
                          />
                        ) : (
                          <ImageIcon className="text-gray-300" size={40} />
                        )}
                      </div>
                    </div>
                    <div className="flex-1 space-y-2 min-w-0">
                      <input
                        className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm"
                        value={form.image}
                        onChange={(e) => {
                          setForm((f) => ({ ...f, image: e.target.value }));
                          setCoverHint(null);
                          setCoverUploadErr('');
                        }}
                        onBlur={onCoverUrlBlur}
                        placeholder="https://… or leave blank and upload"
                      />
                      <div className="flex flex-wrap items-center gap-2">
                        <button
                          type="button"
                          disabled={coverUploading}
                          onClick={() => coverFileRef.current?.click()}
                          className="inline-flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-semibold bg-blue-600 text-white hover:bg-blue-700 disabled:bg-blue-400"
                        >
                          {coverUploading ? <Loader size={14} className="animate-spin" /> : <Upload size={14} />}
                          {coverUploading ? 'Uploading…' : 'Upload image'}
                        </button>
                        <input
                          ref={coverFileRef}
                          type="file"
                          accept="image/jpeg,image/png,image/webp,image/gif"
                          className="hidden"
                          onChange={onCoverUpload}
                        />
                        {form.image?.startsWith('/api/uploads/') && (
                          <span className="text-[11px] text-green-600 font-medium">Using uploaded file</span>
                        )}
                      </div>
                      {coverHint && (
                        <p className="text-xs text-amber-700 bg-amber-50 border border-amber-100 rounded-lg px-2 py-1.5">{coverHint}</p>
                      )}
                      {coverUploadErr && (
                        <p className="text-xs text-red-600 bg-red-50 border border-red-100 rounded-lg px-2 py-1.5">{coverUploadErr}</p>
                      )}
                    </div>
                  </div>
                </label>
                <label className="block col-span-2">
                  <span className="text-xs font-semibold text-gray-600">Excerpt</span>
                  <textarea
                    className="mt-1 w-full border border-gray-200 rounded-lg px-3 py-2 text-sm min-h-[72px]"
                    value={form.excerpt}
                    onChange={(e) => setForm((f) => ({ ...f, excerpt: e.target.value }))}
                  />
                </label>
                <label className="block">
                  <span className="text-xs font-semibold text-gray-600">Author</span>
                  <input
                    className="mt-1 w-full border border-gray-200 rounded-lg px-3 py-2 text-sm"
                    value={form.author}
                    onChange={(e) => setForm((f) => ({ ...f, author: e.target.value }))}
                  />
                </label>
                <label className="block">
                  <span className="text-xs font-semibold text-gray-600">Read time</span>
                  <input
                    className="mt-1 w-full border border-gray-200 rounded-lg px-3 py-2 text-sm"
                    value={form.readTime}
                    onChange={(e) => setForm((f) => ({ ...f, readTime: e.target.value }))}
                  />
                </label>
                <label className="block">
                  <span className="text-xs font-semibold text-gray-600">Display date</span>
                  <input
                    className="mt-1 w-full border border-gray-200 rounded-lg px-3 py-2 text-sm"
                    value={form.date}
                    onChange={(e) => setForm((f) => ({ ...f, date: e.target.value }))}
                  />
                </label>
                <label className="block col-span-2">
                  <span className="text-xs font-semibold text-gray-600">Meta description (SEO)</span>
                  <textarea
                    className="mt-1 w-full border border-gray-200 rounded-lg px-3 py-2 text-sm"
                    value={form.metaDescription}
                    onChange={(e) => setForm((f) => ({ ...f, metaDescription: e.target.value }))}
                    rows={2}
                  />
                </label>
                <label className="flex items-center gap-2 col-span-2">
                  <input
                    type="checkbox"
                    checked={!!form.featured}
                    onChange={(e) => setForm((f) => ({ ...f, featured: e.target.checked }))}
                  />
                  <span className="text-sm text-gray-700">Featured (large card on Media page)</span>
                </label>
                <label className="flex items-center gap-2 col-span-2">
                  <input
                    type="checkbox"
                    checked={form.published !== false}
                    onChange={(e) => setForm((f) => ({ ...f, published: e.target.checked }))}
                  />
                  <span className="text-sm text-gray-700">Published (visible on public site)</span>
                </label>
              </div>

              <div className="border-t border-gray-200 pt-6 mt-2">
                <ArticleBlockEditor blocks={form.content ?? emptyContent} onChange={updateContent} />
              </div>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  type="button"
                  disabled={saving}
                  onClick={handleSave}
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white text-sm font-semibold rounded-xl"
                >
                  {saving ? <Loader size={15} className="animate-spin" /> : <Save size={15} />}
                  {selectedId === 'new' ? 'Create article' : 'Save changes'}
                </button>
                {typeof selectedId === 'number' && (
                  <button
                    type="button"
                    onClick={handleDelete}
                    className="inline-flex items-center gap-2 px-4 py-2.5 border border-red-200 text-red-700 text-sm font-semibold rounded-xl hover:bg-red-50"
                  >
                    <Trash2 size={15} /> Delete
                  </button>
                )}
                {saveMsg && (
                  <span className="flex items-center gap-1 text-green-600 text-sm">
                    <CheckCircle size={15} /> {saveMsg}
                  </span>
                )}
                {saveErr && (
                  <span className="flex items-center gap-1 text-red-600 text-sm">
                    <AlertCircle size={15} /> {saveErr}
                  </span>
                )}
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
