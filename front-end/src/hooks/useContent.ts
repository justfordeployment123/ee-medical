import { useEffect, useState } from 'react';

export type SectionContent = Record<string, string>;
export type PageContent = Record<string, SectionContent>;

function uploadsBase(apiBase: string): string {
  const trimmed = (apiBase ?? '').replace(/\/+$/, '');
  return trimmed.endsWith('/api') ? trimmed.slice(0, -4) : trimmed;
}

function normalizeContentUrls(payload: PageContent, base: string): PageContent {
  const normalized: PageContent = {};
  const uploadRoot = uploadsBase(base);

  for (const [sectionKey, section] of Object.entries(payload ?? {})) {
    normalized[sectionKey] = {};
    for (const [fieldKey, value] of Object.entries(section ?? {})) {
      if (typeof value === 'string' && (value.startsWith('/uploads/') || value.startsWith('/api/uploads/'))) {
        normalized[sectionKey][fieldKey] = `${uploadRoot}${value}`;
      } else {
        normalized[sectionKey][fieldKey] = value;
      }
    }
  }

  return normalized;
}

export function useContent(page: string): PageContent | null {
  const [content, setContent] = useState<PageContent | null>(null);

  useEffect(() => {
    const base = import.meta.env.VITE_API_BASE_URL ?? '';
    fetch(`${base}/api/content/${page}`)
      .then((r) => r.json())
      .then((data) => setContent(normalizeContentUrls(data, base)))
      .catch(() => {}); // silently fall back to hardcoded defaults in components
  }, [page]);

  return content;
}
