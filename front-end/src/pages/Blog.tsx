import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Calendar, ChevronLeft, ChevronRight, Search } from "lucide-react";
import { useContent } from "../hooks/useContent";
import { blogPosts as staticBlogPosts } from "../data/blogData";
import type { BlogPost } from "../data/blogData";
import { PageMeta } from "../components/shared/PageMeta";
import { resolveAssetUrl } from "../utils/resolveAssetUrl";

function apiBase() {
    return (import.meta.env.VITE_API_BASE_URL as string) ?? "";
}

const CARD_SCROLL = 340;

export const Blog = () => {
    const content = useContent("blog");
    const hero = content?.hero;
    const [searchParams] = useSearchParams();
    const [posts, setPosts] = useState<BlogPost[] | null>(null);
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [searchQuery, setSearchQuery] = useState("");
    const scrollerRef = useRef<HTMLDivElement>(null);
    const [canLeft, setCanLeft] = useState(false);
    const [canRight, setCanRight] = useState(false);

    useEffect(() => {
        const base = apiBase();
        fetch(`${base}/api/blog/posts`)
            .then((r) => (r.ok ? r.json() : Promise.reject()))
            .then((d) => {
                const list = (d.posts || []) as BlogPost[];
                setPosts(list.map((p) => ({ ...p, content: p.content ?? [] })));
            })
            .catch(() => setPosts(staticBlogPosts));
    }, []);

    const displayPosts = posts ?? staticBlogPosts;

    const categories = useMemo(() => {
        const cats = new Set(displayPosts.map((p) => p.category).filter(Boolean));
        return ["All", ...Array.from(cats).sort((a, b) => a.localeCompare(b))];
    }, [displayPosts]);

    useEffect(() => {
        const raw = searchParams.get("category");
        if (!raw) {
            setSelectedCategory("All");
            return;
        }
        const decoded = decodeURIComponent(raw.replace(/\+/g, " "));
        if (categories.includes(decoded)) setSelectedCategory(decoded);
        else setSelectedCategory("All");
    }, [searchParams, categories]);

    const filtered = useMemo(() => {
        return displayPosts.filter((post) => {
            const q =
                searchQuery === "" ||
                post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
            const c = selectedCategory === "All" || post.category === selectedCategory;
            return q && c;
        });
    }, [displayPosts, searchQuery, selectedCategory]);

    const ordered = useMemo(() => {
        const feat = filtered.filter((p) => p.featured);
        const rest = filtered.filter((p) => !p.featured);
        return [...feat, ...rest];
    }, [filtered]);

    const updateScrollState = useCallback(() => {
        const el = scrollerRef.current;
        if (!el) return;
        setCanLeft(el.scrollLeft > 4);
        setCanRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 4);
    }, []);

    useEffect(() => {
        updateScrollState();
        const el = scrollerRef.current;
        if (!el) return;
        const ro = new ResizeObserver(updateScrollState);
        ro.observe(el);
        return () => ro.disconnect();
    }, [ordered, updateScrollState]);

    const scrollRow = (dir: -1 | 1) => {
        const el = scrollerRef.current;
        if (!el) return;
        el.scrollBy({ left: dir * CARD_SCROLL, behavior: "smooth" });
        window.setTimeout(updateScrollState, 350);
    };

    const heroBg = resolveAssetUrl(hero?.hero_bg || "");
    const title = hero?.section_heading || "Regulatory Insights & Blog";
    const subtitle =
        hero?.section_subtext ||
        "Articles and updates on FDA submissions, quality systems, ISO standards, and global market access.";

    return (
        <div className="w-full bg-slate-50 font-sans flex flex-col min-h-screen">
            <PageMeta
                title={`${title} — E&E Medicals`}
                description={typeof subtitle === "string" ? subtitle.slice(0, 160) : ""}
            />
            <Header />

            {/* Hero */}
            <section className="relative w-full min-h-[260px] md:min-h-[320px] flex items-center justify-center overflow-hidden">
                {heroBg ? (
                    <img src={heroBg} alt="" className="absolute inset-0 w-full h-full object-cover" />
                ) : (
                    <div className="absolute inset-0 bg-gradient-to-br from-navy-950 via-navy-900 to-navy-800" />
                )}
                <div className="absolute inset-0 bg-navy-950/75" />
                <div className="relative z-10 max-w-4xl mx-auto px-4 py-14 md:py-20 text-center">
                    <p className="text-brand-100 text-xs font-bold uppercase tracking-[0.2em] mb-3 drop-shadow-sm">E&E Medicals</p>
                    <h1 className="font-display text-3xl md:text-5xl font-extrabold text-white leading-tight drop-shadow-md">{title}</h1>
                    <p className="mt-4 text-base md:text-lg text-slate-100 leading-relaxed max-w-2xl mx-auto drop-shadow-sm">{subtitle}</p>
                </div>
            </section>

            <main className="grow pb-20">
                {/* Categories */}
                <div className="border-b border-gray-200 bg-white">
                    <div className="max-w-[1400px] mx-auto px-4 md:px-8">
                        <div className="flex items-center gap-1 overflow-x-auto scrollbar-hide py-1 border-b border-gray-200">
                            {categories.map((cat) => {
                                const active = selectedCategory === cat;
                                return (
                                    <button
                                        key={cat}
                                        type="button"
                                        onClick={() => setSelectedCategory(cat)}
                                        className={`shrink-0 px-4 py-3 text-sm font-semibold border-b-2 -mb-px transition-colors whitespace-nowrap ${
                                            active
                                                ? "text-brand-600 border-brand-500"
                                                : "text-gray-600 border-transparent hover:text-navy-900 hover:border-gray-300"
                                        }`}
                                    >
                                        {cat}
                                    </button>
                                );
                            })}
                        </div>
                    </div>
                </div>

                <div className="max-w-[1400px] mx-auto px-4 md:px-8 pt-8">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-8">
                        <div className="relative flex-1 max-w-md">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                            <input
                                type="search"
                                placeholder="Search articles…"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500/30 focus:border-brand-400 bg-white"
                            />
                        </div>
                        <p className="text-sm text-gray-500">
                            {ordered.length} article{ordered.length === 1 ? "" : "s"}
                            {selectedCategory !== "All" ? ` · ${selectedCategory}` : ""}
                        </p>
                    </div>

                    {ordered.length === 0 ? (
                        <p className="text-center text-gray-500 py-16">No articles match your filters.</p>
                    ) : (
                        <div className="relative">
                            <button
                                type="button"
                                aria-label="Scroll left"
                                onClick={() => scrollRow(-1)}
                                className={`hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 z-20 -ml-2 h-11 w-11 items-center justify-center rounded-full bg-white shadow-lg border border-gray-200 text-navy-800 hover:bg-brand-50 hover:text-brand-600 transition-all ${
                                    canLeft ? "opacity-100" : "opacity-0 pointer-events-none"
                                }`}
                            >
                                <ChevronLeft size={22} />
                            </button>
                            <button
                                type="button"
                                aria-label="Scroll right"
                                onClick={() => scrollRow(1)}
                                className={`hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 z-20 -mr-2 h-11 w-11 items-center justify-center rounded-full bg-white shadow-lg border border-gray-200 text-navy-800 hover:bg-brand-50 hover:text-brand-600 transition-all ${
                                    canRight ? "opacity-100" : "opacity-0 pointer-events-none"
                                }`}
                            >
                                <ChevronRight size={22} />
                            </button>

                            <div
                                ref={scrollerRef}
                                onScroll={updateScrollState}
                                className="flex gap-5 md:gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide scroll-smooth -mx-1 px-1"
                            >
                                {ordered.map((post) => (
                                    <article
                                        key={post.id}
                                        className="shrink-0 w-[280px] sm:w-[300px] snap-start bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg hover:border-brand-200/80 transition-all duration-300 flex flex-col overflow-hidden"
                                    >
                                        <Link to={`/media/${post.slug}`} className="block aspect-[16/10] bg-gray-100 overflow-hidden">
                                            <img
                                                src={resolveAssetUrl(post.image)}
                                                alt=""
                                                className="w-full h-full object-cover hover:scale-[1.04] transition-transform duration-500"
                                            />
                                        </Link>
                                        <div className="p-5 flex flex-col flex-1">
                                            <div className="flex items-center gap-2 text-[11px] text-gray-400 mb-2">
                                                <Calendar size={11} />
                                                {post.date}
                                            </div>
                                            <h2 className="font-display text-base font-bold text-navy-900 leading-snug line-clamp-2 mb-3">
                                                <Link to={`/media/${post.slug}`} className="hover:text-brand-600 transition-colors">
                                                    {post.title}
                                                </Link>
                                            </h2>
                                            <p className="text-gray-500 text-xs leading-relaxed line-clamp-3 flex-1">{post.excerpt}</p>
                                            <Link
                                                to={`/media/${post.slug}`}
                                                className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-brand-600 hover:text-brand-500 hover:gap-2 transition-all"
                                            >
                                                Continue reading <ChevronRight size={14} />
                                            </Link>
                                        </div>
                                    </article>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </main>

            <Footer />
        </div>
    );
};
