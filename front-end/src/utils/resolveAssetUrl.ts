/** Turn API upload paths into absolute URLs when the app uses VITE_API_BASE_URL. */
export function resolveAssetUrl(pathOrUrl: string | undefined | null): string {
  if (!pathOrUrl?.trim()) return '';
  const s = pathOrUrl.trim();
  if (s.startsWith('http://') || s.startsWith('https://') || s.startsWith('data:')) return s;
  const base = ((import.meta.env.VITE_API_BASE_URL as string) ?? '').replace(/\/+$/, '');
  const root = base.endsWith('/api') ? base.slice(0, -4) : base;
  if (s.startsWith('/api/uploads/') || s.startsWith('/uploads/')) {
    return root ? `${root}${s}` : s;
  }
  if (s.startsWith('/') && root) return `${root}${s}`;
  return s;
}

export function validateHttpImageUrl(input: string): string | null {
  const t = input.trim();
  if (!t) return null;
  if (t.startsWith('/api/uploads/') || t.startsWith('/uploads/')) return null;
  try {
    const u = new URL(t);
    if (u.protocol !== 'http:' && u.protocol !== 'https:') return 'Use a link that starts with http:// or https://';
    return null;
  } catch {
    return 'Enter a valid web address, or upload an image instead';
  }
}
