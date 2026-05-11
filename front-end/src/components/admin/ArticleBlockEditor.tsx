import { useEffect } from 'react';
import { ChevronDown, ChevronUp, Plus, Trash2 } from 'lucide-react';
import type { ContentSection } from '../../data/blogData';

const BLOCK_TYPES: { value: ContentSection['type']; label: string; hint: string }[] = [
  { value: 'p', label: 'Paragraph', hint: 'Regular body text' },
  { value: 'h2', label: 'Heading (large)', hint: 'Section title' },
  { value: 'h3', label: 'Heading (medium)', hint: 'Subsection title' },
  { value: 'ul', label: 'Bullet list', hint: 'One item per line' },
  { value: 'ol', label: 'Numbered list', hint: 'Ordered steps' },
  { value: 'callout', label: 'Callout box', hint: 'Highlighted note' },
  { value: 'cta', label: 'Button / CTA', hint: 'Call-to-action with link' },
];

function defaultBlock(type: ContentSection['type']): ContentSection {
  switch (type) {
    case 'ul':
    case 'ol':
      return { type, items: [''] };
    case 'cta':
      return { type: 'cta', ctaText: 'Get in touch', ctaLink: '/share-your-project' };
    default:
      return { type, text: '' };
  }
}

function transformBlock(block: ContentSection, newType: ContentSection['type']): ContentSection {
  if (newType === block.type) return { ...block };
  if (newType === 'ul' || newType === 'ol') {
    let items: string[];
    if (block.items && block.items.length > 0) {
      items = [...block.items];
    } else if (block.text?.trim()) {
      items = block.text.split(/\n+/).map((s) => s.trim()).filter(Boolean);
    } else {
      items = [''];
    }
    if (items.length === 0) items = [''];
    return { type: newType, items };
  }
  if (newType === 'cta') {
    return {
      type: 'cta',
      ctaText: block.ctaText || block.text?.slice(0, 80) || 'Learn more',
      ctaLink: block.ctaLink || '/share-your-project',
    };
  }
  const text =
    block.text ??
    (block.items?.filter(Boolean).join('\n')) ??
    block.ctaText ??
    '';
  return { type: newType, text };
}

function blockLabel(type: ContentSection['type']): string {
  return BLOCK_TYPES.find((b) => b.value === type)?.label ?? type;
}

export function ArticleBlockEditor({
  blocks,
  onChange,
}: {
  blocks: ContentSection[];
  onChange: (next: ContentSection[]) => void;
}) {
  useEffect(() => {
    if (blocks.length === 0) {
      onChange([defaultBlock('p')]);
    }
  }, [blocks.length, onChange]);

  const safeBlocks = blocks.length > 0 ? blocks : [defaultBlock('p')];

  const setAt = (index: number, block: ContentSection) => {
    const next = [...safeBlocks];
    next[index] = block;
    onChange(next);
  };

  const removeAt = (index: number) => {
    if (safeBlocks.length <= 1) {
      onChange([defaultBlock('p')]);
      return;
    }
    onChange(safeBlocks.filter((_, i) => i !== index));
  };

  const move = (index: number, dir: -1 | 1) => {
    const j = index + dir;
    if (j < 0 || j >= safeBlocks.length) return;
    const next = [...safeBlocks];
    [next[index], next[j]] = [next[j], next[index]];
    onChange(next);
  };

  const addBlock = (type: ContentSection['type']) => {
    onChange([...safeBlocks, defaultBlock(type)]);
  };

  return (
    <div className="space-y-3">
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-2">
        <div>
          <span className="text-sm font-semibold text-gray-800">Article body</span>
          <p className="text-xs text-gray-500 mt-0.5">
            Build your article with simple blocks. Use the arrows to reorder.
          </p>
        </div>
      </div>

      <div className="space-y-3">
        {safeBlocks.map((block, index) => (
          <div
            key={index}
            className="rounded-xl border border-gray-200 bg-white shadow-sm overflow-hidden"
          >
            <div className="flex flex-wrap items-center gap-2 px-3 py-2 bg-gray-50 border-b border-gray-100">
              <span className="text-[11px] font-bold uppercase tracking-wide text-gray-500 shrink-0">
                {index + 1}. {blockLabel(block.type)}
              </span>
              <select
                aria-label="Block type"
                className="text-xs border border-gray-200 rounded-lg px-2 py-1.5 bg-white text-gray-800 max-w-[160px]"
                value={block.type}
                onChange={(e) => {
                  const t = e.target.value as ContentSection['type'];
                  setAt(index, transformBlock(block, t));
                }}
              >
                {BLOCK_TYPES.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
              <div className="flex-1" />
              <button
                type="button"
                className="p-1.5 rounded-lg text-gray-500 hover:bg-gray-200 hover:text-gray-800 disabled:opacity-30"
                disabled={index === 0}
                onClick={() => move(index, -1)}
                title="Move up"
              >
                <ChevronUp size={18} />
              </button>
              <button
                type="button"
                className="p-1.5 rounded-lg text-gray-500 hover:bg-gray-200 hover:text-gray-800 disabled:opacity-30"
                disabled={index === safeBlocks.length - 1}
                onClick={() => move(index, 1)}
                title="Move down"
              >
                <ChevronDown size={18} />
              </button>
              <button
                type="button"
                className="p-1.5 rounded-lg text-red-500 hover:bg-red-50"
                onClick={() => removeAt(index)}
                title="Remove block"
              >
                <Trash2 size={16} />
              </button>
            </div>

            <div className="p-3">
              {(block.type === 'p' || block.type === 'h2' || block.type === 'h3' || block.type === 'callout') && (
                <textarea
                  className="w-full text-sm border border-gray-200 rounded-lg px-3 py-2 text-gray-800 focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-y min-h-[88px]"
                  rows={block.type === 'h2' || block.type === 'h3' ? 2 : 5}
                  placeholder={
                    block.type === 'callout'
                      ? 'Important highlighted message…'
                      : block.type === 'h2'
                        ? 'Section heading…'
                        : block.type === 'h3'
                          ? 'Subheading…'
                          : 'Write your paragraph…'
                  }
                  value={block.text ?? ''}
                  onChange={(e) => setAt(index, { ...block, text: e.target.value })}
                />
              )}

              {(block.type === 'ul' || block.type === 'ol') && (
                <div className="space-y-2">
                  {(block.items && block.items.length > 0 ? block.items : ['']).map((item, li) => (
                    <div key={`${index}-${li}`} className="flex gap-2">
                      <span className="shrink-0 w-6 text-center text-xs text-gray-400 pt-2 font-mono">
                        {block.type === 'ol' ? `${li + 1}.` : '•'}
                      </span>
                      <input
                        className="flex-1 text-sm border border-gray-200 rounded-lg px-3 py-2"
                        placeholder="List item"
                        value={item}
                        onChange={(e) => {
                          const items = [...(block.items || [''])];
                          items[li] = e.target.value;
                          setAt(index, { ...block, type: block.type, items });
                        }}
                      />
                      <button
                        type="button"
                        className="shrink-0 px-2 text-gray-400 hover:text-red-600 text-xs"
                        onClick={() => {
                          const items = [...(block.items || [''])].filter((_, i) => i !== li);
                          setAt(index, { ...block, type: block.type, items: items.length ? items : [''] });
                        }}
                      >
                        Remove
                      </button>
                    </div>
                  ))}
                  <button
                    type="button"
                    className="text-xs font-semibold text-blue-600 hover:text-blue-800"
                    onClick={() => {
                      const items = [...(block.items || []), ''];
                      setAt(index, { ...block, type: block.type, items });
                    }}
                  >
                    + Add list item
                  </button>
                </div>
              )}

              {block.type === 'cta' && (
                <div className="space-y-3">
                  <label className="block">
                    <span className="text-xs font-medium text-gray-600">Button text</span>
                    <input
                      className="mt-1 w-full text-sm border border-gray-200 rounded-lg px-3 py-2"
                      placeholder="e.g. Contact us"
                      value={block.ctaText ?? ''}
                      onChange={(e) => setAt(index, { ...block, ctaText: e.target.value })}
                    />
                  </label>
                  <label className="block">
                    <span className="text-xs font-medium text-gray-600">Link (page path)</span>
                    <input
                      className="mt-1 w-full text-sm border border-gray-200 rounded-lg px-3 py-2 font-mono"
                      placeholder="/share-your-project"
                      value={block.ctaLink ?? ''}
                      onChange={(e) => setAt(index, { ...block, ctaLink: e.target.value })}
                    />
                  </label>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-wrap gap-2 pt-1">
        <span className="text-xs text-gray-500 w-full sm:w-auto sm:inline sm:mr-1 py-1">Add:</span>
        {BLOCK_TYPES.map((opt) => (
          <button
            key={opt.value}
            type="button"
            onClick={() => addBlock(opt.value)}
            className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-semibold bg-white border border-gray-200 text-gray-700 hover:border-blue-300 hover:bg-blue-50 hover:text-blue-800 transition-colors"
            title={opt.hint}
          >
            <Plus size={14} />
            {opt.label}
          </button>
        ))}
      </div>
    </div>
  );
}
