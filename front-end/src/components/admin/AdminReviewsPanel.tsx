import React, { useState, useEffect, useCallback } from 'react';
import { Plus, Pencil, Trash2, Eye, EyeOff, Save, Loader, AlertCircle, CheckCircle, LogOut, Star } from 'lucide-react';

interface Review {
  id: number;
  name: string;
  title: string;
  quote: string;
  rating: number;
  published: number;
  sort_order: number;
}

function apiBase() {
  return (import.meta.env.VITE_API_BASE_URL as string) ?? '';
}
function getToken() {
  return localStorage.getItem('adminToken') ?? '';
}

const BLANK: Omit<Review, 'id' | 'sort_order' | 'created_at'> = {
  name: '', title: '', quote: '', rating: 5, published: 1,
};

function StarPicker({ value, onChange }: { value: number; onChange: (n: number) => void }) {
  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((n) => (
        <button key={n} type="button" onClick={() => onChange(n)}>
          <Star size={20} className={n <= value ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'} />
        </button>
      ))}
    </div>
  );
}

function ReviewForm({
  initial,
  onSave,
  onCancel,
}: {
  initial: Omit<Review, 'id' | 'sort_order'>;
  onSave: (data: Omit<Review, 'id' | 'sort_order'>) => Promise<void>;
  onCancel: () => void;
}) {
  const [form, setForm] = useState(initial);
  const [saving, setSaving] = useState(false);
  const [err, setErr] = useState('');

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.name.trim() || !form.quote.trim()) {
      setErr('Name and Quote are required.');
      return;
    }
    setSaving(true);
    setErr('');
    try {
      await onSave(form);
    } catch (e: unknown) {
      setErr(e instanceof Error ? e.message : 'Save failed');
    } finally {
      setSaving(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="bg-blue-50 border border-blue-200 rounded-xl p-5 space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-bold text-gray-700 mb-1">Name <span className="text-red-500">*</span></label>
          <input
            value={form.name}
            onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
            placeholder="Reviewer name"
            className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block text-xs font-bold text-gray-700 mb-1">Title / Role</label>
          <input
            value={form.title}
            onChange={(e) => setForm((f) => ({ ...f, title: e.target.value }))}
            placeholder="e.g. Happy customer"
            className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      <div>
        <label className="block text-xs font-bold text-gray-700 mb-1">Quote <span className="text-red-500">*</span></label>
        <textarea
          value={form.quote}
          onChange={(e) => setForm((f) => ({ ...f, quote: e.target.value }))}
          rows={4}
          placeholder="Review text…"
          className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 resize-y"
        />
      </div>

      <div className="flex items-center gap-8 flex-wrap">
        <div>
          <label className="block text-xs font-bold text-gray-700 mb-1.5">Rating</label>
          <StarPicker value={form.rating} onChange={(n) => setForm((f) => ({ ...f, rating: n }))} />
        </div>
        <div>
          <label className="block text-xs font-bold text-gray-700 mb-1.5">Visibility</label>
          <button
            type="button"
            onClick={() => setForm((f) => ({ ...f, published: f.published ? 0 : 1 }))}
            className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm font-medium border transition-colors ${
              form.published
                ? 'bg-green-50 border-green-300 text-green-700'
                : 'bg-gray-50 border-gray-300 text-gray-500'
            }`}
          >
            {form.published ? <><Eye size={14} /> Published</> : <><EyeOff size={14} /> Hidden</>}
          </button>
        </div>
      </div>

      {err && (
        <div className="flex items-center gap-2 text-red-600 text-sm bg-red-50 p-3 rounded-lg">
          <AlertCircle size={14} /> {err}
        </div>
      )}

      <div className="flex gap-3 pt-1">
        <button
          type="submit"
          disabled={saving}
          className="flex items-center gap-2 px-5 py-2 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-semibold rounded-lg text-sm transition-colors"
        >
          {saving ? <Loader size={14} className="animate-spin" /> : <Save size={14} />}
          {saving ? 'Saving…' : 'Save Review'}
        </button>
        <button
          type="button"
          onClick={onCancel}
          className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg text-sm font-medium transition-colors"
        >
          Cancel
        </button>
      </div>
    </form>
  );
}

interface Props {
  onLogout: () => void;
  onBackToCms: () => void;
}

export function AdminReviewsPanel({ onLogout, onBackToCms }: Props) {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  const [fetchErr, setFetchErr] = useState('');
  const [editingId, setEditingId] = useState<number | null>(null);
  const [adding, setAdding] = useState(false);
  const [toastMsg, setToastMsg] = useState('');
  const [toastErr, setToastErr] = useState('');
  const [confirmDelete, setConfirmDelete] = useState<number | null>(null);

  const showToast = (msg: string, isErr = false) => {
    if (isErr) { setToastErr(msg); setTimeout(() => setToastErr(''), 4000); }
    else { setToastMsg(msg); setTimeout(() => setToastMsg(''), 3000); }
  };

  const load = useCallback(async () => {
    setLoading(true);
    setFetchErr('');
    try {
      const res = await fetch(`${apiBase()}/api/admin/reviews`, {
        headers: { Authorization: `Bearer ${getToken()}` },
      });
      if (res.status === 401) { localStorage.removeItem('adminToken'); onLogout(); return; }
      if (!res.ok) throw new Error('Failed to load reviews');
      const data = await res.json();
      setReviews(data.reviews ?? []);
    } catch (e: unknown) {
      setFetchErr(e instanceof Error ? e.message : 'Failed to load');
    } finally {
      setLoading(false);
    }
  }, [onLogout]);

  useEffect(() => { load(); }, [load]);

  async function handleCreate(form: Omit<Review, 'id' | 'sort_order'>) {
    const res = await fetch(`${apiBase()}/api/admin/reviews`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${getToken()}` },
      body: JSON.stringify(form),
    });
    const data = await res.json();
    if (!res.ok) throw new Error(data.error || 'Create failed');
    setAdding(false);
    showToast('Review added.');
    load();
  }

  async function handleUpdate(id: number, form: Omit<Review, 'id' | 'sort_order'>) {
    const res = await fetch(`${apiBase()}/api/admin/reviews/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${getToken()}` },
      body: JSON.stringify(form),
    });
    const data = await res.json();
    if (!res.ok) throw new Error(data.error || 'Update failed');
    setEditingId(null);
    showToast('Review saved.');
    load();
  }

  async function handleTogglePublished(review: Review) {
    const res = await fetch(`${apiBase()}/api/admin/reviews/${review.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${getToken()}` },
      body: JSON.stringify({ published: review.published ? 0 : 1 }),
    });
    if (!res.ok) { showToast('Failed to update visibility.', true); return; }
    showToast(review.published ? 'Review hidden.' : 'Review published.');
    load();
  }

  async function handleDelete(id: number) {
    const res = await fetch(`${apiBase()}/api/admin/reviews/${id}`, {
      method: 'DELETE',
      headers: { Authorization: `Bearer ${getToken()}` },
    });
    if (!res.ok) { showToast('Failed to delete review.', true); return; }
    setConfirmDelete(null);
    showToast('Review deleted.');
    load();
  }

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
            <p className="text-xs text-gray-500">Customer Reviews</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={onBackToCms}
            className="px-3 py-1.5 text-gray-600 hover:bg-gray-100 rounded-lg text-sm font-medium transition-colors"
          >
            ← Back to CMS
          </button>
          <button
            onClick={() => { localStorage.removeItem('adminToken'); onLogout(); }}
            className="flex items-center gap-2 px-3 py-1.5 text-gray-600 hover:text-red-600 hover:bg-red-50 rounded-lg text-sm font-medium transition-colors"
          >
            <LogOut size={15} /> Logout
          </button>
        </div>
      </header>

      <div className="flex-1 overflow-y-auto p-6">
        <div className="max-w-3xl mx-auto space-y-5">

          {/* Header row */}
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-lg font-bold text-gray-900">Customer Reviews</h2>
              <p className="text-sm text-gray-500 mt-0.5">{reviews.length} review{reviews.length !== 1 ? 's' : ''} total · {reviews.filter(r => r.published).length} published</p>
            </div>
            <button
              onClick={() => { setAdding(true); setEditingId(null); }}
              disabled={adding}
              className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-semibold rounded-xl text-sm transition-colors"
            >
              <Plus size={15} /> Add Review
            </button>
          </div>

          {/* Toasts */}
          {toastMsg && (
            <div className="flex items-center gap-2 text-green-700 bg-green-50 border border-green-200 px-4 py-3 rounded-xl text-sm font-medium">
              <CheckCircle size={15} /> {toastMsg}
            </div>
          )}
          {toastErr && (
            <div className="flex items-center gap-2 text-red-600 bg-red-50 border border-red-200 px-4 py-3 rounded-xl text-sm font-medium">
              <AlertCircle size={15} /> {toastErr}
            </div>
          )}

          {/* Add form */}
          {adding && (
            <ReviewForm
              initial={{ ...BLANK }}
              onSave={handleCreate}
              onCancel={() => setAdding(false)}
            />
          )}

          {/* Loading */}
          {loading && (
            <div className="flex items-center gap-3 text-gray-500 py-12 justify-center">
              <Loader size={20} className="animate-spin" /> Loading reviews…
            </div>
          )}

          {fetchErr && (
            <div className="flex items-center gap-2 text-red-600 bg-red-50 p-4 rounded-xl">
              <AlertCircle size={18} /> {fetchErr}
              <button onClick={load} className="ml-auto text-sm underline">Retry</button>
            </div>
          )}

          {/* Reviews list */}
          {!loading && !fetchErr && reviews.map((review) => (
            <div key={review.id} className="bg-white border border-gray-200 rounded-xl overflow-hidden">
              {editingId === review.id ? (
                <div className="p-4">
                  <ReviewForm
                    initial={{ name: review.name, title: review.title, quote: review.quote, rating: review.rating, published: review.published }}
                    onSave={(form) => handleUpdate(review.id, form)}
                    onCancel={() => setEditingId(null)}
                  />
                </div>
              ) : (
                <div className="p-4">
                  <div className="flex items-start gap-3">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="font-semibold text-gray-900 text-sm">{review.name}</span>
                        {review.title && <span className="text-xs text-gray-500">· {review.title}</span>}
                        <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${review.published ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-500'}`}>
                          {review.published ? 'Published' : 'Hidden'}
                        </span>
                      </div>
                      <div className="flex mt-0.5 mb-2">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star key={i} size={12} className={i < review.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-200'} />
                        ))}
                      </div>
                      <p className="text-sm text-gray-600 leading-relaxed line-clamp-3">{review.quote}</p>
                    </div>
                    <div className="flex items-center gap-1 shrink-0 ml-2">
                      <button
                        onClick={() => handleTogglePublished(review)}
                        title={review.published ? 'Hide' : 'Publish'}
                        className="p-1.5 rounded-lg text-gray-400 hover:text-blue-600 hover:bg-blue-50 transition-colors"
                      >
                        {review.published ? <EyeOff size={15} /> : <Eye size={15} />}
                      </button>
                      <button
                        onClick={() => { setEditingId(review.id); setAdding(false); }}
                        title="Edit"
                        className="p-1.5 rounded-lg text-gray-400 hover:text-blue-600 hover:bg-blue-50 transition-colors"
                      >
                        <Pencil size={15} />
                      </button>
                      <button
                        onClick={() => setConfirmDelete(review.id)}
                        title="Delete"
                        className="p-1.5 rounded-lg text-gray-400 hover:text-red-600 hover:bg-red-50 transition-colors"
                      >
                        <Trash2 size={15} />
                      </button>
                    </div>
                  </div>

                  {/* Delete confirm */}
                  {confirmDelete === review.id && (
                    <div className="mt-3 pt-3 border-t border-gray-100 flex items-center gap-3">
                      <span className="text-sm text-gray-700">Delete this review?</span>
                      <button
                        onClick={() => handleDelete(review.id)}
                        className="px-3 py-1 bg-red-600 hover:bg-red-700 text-white text-sm font-semibold rounded-lg transition-colors"
                      >
                        Yes, delete
                      </button>
                      <button
                        onClick={() => setConfirmDelete(null)}
                        className="px-3 py-1 text-gray-600 hover:bg-gray-100 text-sm font-medium rounded-lg transition-colors"
                      >
                        Cancel
                      </button>
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}

          {!loading && !fetchErr && reviews.length === 0 && !adding && (
            <div className="text-center py-16 text-gray-400">
              <Star size={32} className="mx-auto mb-3 text-gray-200" />
              <p className="text-sm font-medium">No reviews yet.</p>
              <p className="text-xs mt-1">Click "Add Review" to create the first one.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
