import { useEffect, useMemo, useState } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Calendar, Clock, ArrowLeft, ArrowRight, BookOpen, Loader } from "lucide-react";
import { getBlogPostBySlug, blogPosts as staticBlogPosts } from "../data/blogData";
import { PageMeta } from "../components/shared/PageMeta";
import type { BlogPost as BlogArticle, ContentSection } from "../data/blogData";
import { resolveAssetUrl } from "../utils/resolveAssetUrl";

function apiBase() {
    return (import.meta.env.VITE_API_BASE_URL as string) ?? "";
}

type NavLink = { slug: string; title: string } | null;

type PostPayload = {
    post: BlogArticle;
    prev: NavLink;
    next: NavLink;
    related: BlogArticle[];
};

function staticPayload(slug: string): PostPayload | null {
    const post = getBlogPostBySlug(slug);
    if (!post) return null;
    const currentIndex = staticBlogPosts.findIndex((p) => p.slug === slug);
    const prevRow = currentIndex > 0 ? staticBlogPosts[currentIndex - 1] : null;
    const nextRow = currentIndex < staticBlogPosts.length - 1 ? staticBlogPosts[currentIndex + 1] : null;
    const relatedPosts = staticBlogPosts.filter((p) => p.slug !== slug && p.category === post.category).slice(0, 3);
    const fallbackRelated = staticBlogPosts.filter((p) => p.slug !== slug).slice(0, 3);
    const related = relatedPosts.length > 0 ? relatedPosts : fallbackRelated;
    return {
        post,
        prev: prevRow ? { slug: prevRow.slug, title: prevRow.title } : null,
        next: nextRow ? { slug: nextRow.slug, title: nextRow.title } : null,
        related,
    };
}

const renderSection = (section: ContentSection, index: number) => {
    switch (section.type) {
        case "h2":
            return (
                <h2 key={index} className="font-display text-2xl md:text-3xl font-extrabold text-navy-900 mt-10 mb-4 leading-snug">
                    {section.text}
                </h2>
            );
        case "h3":
            return (
                <h3 key={index} className="font-display text-xl font-bold text-navy-800 mt-7 mb-3">
                    {section.text}
                </h3>
            );
        case "p":
            return (
                <p key={index} className="text-gray-700 leading-[1.75] mb-5 text-[17px]">
                    {section.text}
                </p>
            );
        case "ul":
            return (
                <ul key={index} className="mb-5 space-y-2 pl-2">
                    {section.items?.map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-gray-700 text-[17px] leading-[1.75]">
                            <span className="mt-1.5 w-2 h-2 rounded-full bg-brand-500 shrink-0" />
                            {item}
                        </li>
                    ))}
                </ul>
            );
        case "ol":
            return (
                <ol key={index} className="mb-5 space-y-2 pl-2">
                    {section.items?.map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-gray-700 text-[17px] leading-[1.75]">
                            <span className="mt-0.5 w-6 h-6 rounded-full bg-brand-500/10 text-brand-600 text-xs font-bold flex items-center justify-center shrink-0">
                                {i + 1}
                            </span>
                            {item}
                        </li>
                    ))}
                </ol>
            );
        case "callout":
            return (
                <div key={index} className="my-7 p-6 bg-brand-50 border-l-4 border-brand-500 rounded-r-xl">
                    <p className="text-brand-800 font-semibold text-[15px] leading-relaxed">{section.text}</p>
                </div>
            );
        case "cta":
            return (
                <div key={index} className="my-8 p-6 bg-gradient-to-br from-navy-950 to-navy-800 rounded-2xl text-center">
                    <BookOpen size={28} className="text-brand-200 mx-auto mb-3 drop-shadow-sm" />
                    <p className="text-white font-bold text-lg mb-4 drop-shadow-sm">{section.ctaText}</p>
                    <Link
                        to={section.ctaLink || "/share-your-project"}
                        className="inline-flex items-center gap-2 px-6 py-3 bg-brand-500 hover:bg-brand-400 text-white font-bold rounded-xl text-sm transition-all duration-300 shadow-lg shadow-brand-500/25"
                    >
                        {section.ctaText} <ArrowRight size={14} />
                    </Link>
                </div>
            );
        default:
            return null;
    }
};

export const BlogPost = () => {
    const { slug } = useParams<{ slug: string }>();
    const [payload, setPayload] = useState<PostPayload | null>(null);
    const [loading, setLoading] = useState(true);
    const [notFound, setNotFound] = useState(false);
    const [listPosts, setListPosts] = useState<BlogArticle[]>([]);

    useEffect(() => {
        const base = apiBase();
        fetch(`${base}/api/blog/posts`)
            .then((r) => (r.ok ? r.json() : Promise.reject()))
            .then((d) => {
                const list = (d.posts || []) as BlogArticle[];
                setListPosts(list.map((p) => ({ ...p, content: p.content ?? [] })));
            })
            .catch(() =>
                setListPosts(staticBlogPosts.map((p) => ({ ...p, content: p.content ?? [] }))),
            );
    }, []);

    useEffect(() => {
        if (!slug) {
            setNotFound(true);
            setLoading(false);
            return;
        }
        const base = apiBase();
        fetch(`${base}/api/blog/post/${encodeURIComponent(slug)}`)
            .then((r) => {
                if (r.status === 404) throw new Error("404");
                if (!r.ok) throw new Error("bad");
                return r.json();
            })
            .then((data: PostPayload) => {
                setPayload({
                    post: { ...data.post, content: data.post.content ?? [] },
                    prev: data.prev ?? null,
                    next: data.next ?? null,
                    related: (data.related || []).map((r) => ({ ...r, content: r.content ?? [] })),
                });
                setNotFound(false);
            })
            .catch(() => {
                const fallback = staticPayload(slug);
                if (fallback) {
                    setPayload(fallback);
                    setNotFound(false);
                } else {
                    setNotFound(true);
                }
            })
            .finally(() => setLoading(false));
    }, [slug]);

    const sidebarCategories = useMemo(() => {
        const src = listPosts.length > 0 ? listPosts : staticBlogPosts;
        const cats = new Set(src.map((p) => p.category).filter(Boolean));
        return Array.from(cats).sort((a, b) => a.localeCompare(b));
    }, [listPosts]);

    const postsExceptCurrent = useMemo(() => {
        if (!slug) return [];
        const src = listPosts.length > 0 ? listPosts : staticBlogPosts;
        return src.filter((p) => p.slug !== slug);
    }, [listPosts, slug]);

    if (loading) {
        return (
            <div className="min-h-screen bg-white flex items-center justify-center gap-3 text-gray-500">
                <Loader className="animate-spin" size={22} />
                <span className="text-sm font-medium">Loading article…</span>
            </div>
        );
    }

    if (notFound || !payload) {
        return <Navigate to="/blog" replace />;
    }

    const { post, prev, next, related } = payload;
    const displayRecent = (postsExceptCurrent.length > 0 ? postsExceptCurrent : related).slice(0, 6);

    return (
        <div className="w-full bg-white font-sans flex flex-col min-h-screen">
            <PageMeta title={post.title} description={(post.metaDescription || post.excerpt).slice(0, 160)} />
            <Header />

            <main className="grow bg-white pb-20">
                <div className="max-w-6xl mx-auto px-4 md:px-8 pt-8 md:pt-12">
                    <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_280px] xl:grid-cols-[minmax(0,1fr)_300px] gap-10 xl:gap-14 lg:items-start">
                        <article className="min-w-0 order-1">
                            <Link
                                to="/blog"
                                className="inline-flex items-center gap-2 text-sm font-semibold text-brand-600 hover:text-brand-500 mb-6 transition-colors"
                            >
                                <ArrowLeft size={18} className="shrink-0" aria-hidden />
                                All posts
                            </Link>

                            <h1 className="font-display text-3xl md:text-[2.125rem] font-extrabold text-brand-600 leading-tight tracking-tight">
                                {post.title}
                            </h1>

                            <p className="mt-4 text-sm text-gray-500 flex flex-wrap items-center gap-x-2 gap-y-1">
                                <span className="inline-flex items-center gap-1.5">
                                    <Calendar size={14} className="text-gray-400 shrink-0" aria-hidden />
                                    {post.date}
                                </span>
                                <span className="text-gray-300 select-none" aria-hidden>
                                    |
                                </span>
                                <span>{post.category}</span>
                                {post.readTime ? (
                                    <>
                                        <span className="text-gray-300 select-none" aria-hidden>
                                            |
                                        </span>
                                        <span className="inline-flex items-center gap-1">
                                            <Clock size={14} className="text-gray-400 shrink-0" aria-hidden />
                                            {post.readTime}
                                        </span>
                                    </>
                                ) : null}
                            </p>

                            <div className="mt-8 rounded-xl overflow-hidden border border-gray-100 bg-gray-50 shadow-sm">
                                <img
                                    src={resolveAssetUrl(post.image)}
                                    alt=""
                                    className="w-full h-auto object-cover max-h-[min(560px,70vh)]"
                                />
                            </div>

                            {post.excerpt ? (
                                <p className="mt-8 text-gray-800 text-lg leading-relaxed font-medium">{post.excerpt}</p>
                            ) : null}

                            <div className="mt-6 prose-content max-w-none">
                                {(post.content || []).map((section, i) => renderSection(section, i))}
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4 mt-12 pt-8 border-t border-gray-200">
                                {prev && (
                                    <Link
                                        to={`/media/${prev.slug}`}
                                        className="flex-1 group flex items-start gap-3 p-4 bg-slate-50 rounded-xl border border-gray-100 hover:border-brand-200 hover:shadow-md transition-all"
                                    >
                                        <ArrowLeft
                                            size={16}
                                            className="text-brand-500 mt-1 shrink-0 group-hover:-translate-x-1 transition-transform"
                                        />
                                        <div>
                                            <p className="text-xs text-gray-400 mb-1">Previous article</p>
                                            <p className="text-sm font-bold text-navy-800 line-clamp-2 group-hover:text-brand-600 transition-colors">
                                                {prev.title}
                                            </p>
                                        </div>
                                    </Link>
                                )}
                                {next && (
                                    <Link
                                        to={`/media/${next.slug}`}
                                        className="flex-1 group flex items-start gap-3 p-4 bg-slate-50 rounded-xl border border-gray-100 hover:border-brand-200 hover:shadow-md transition-all text-right sm:justify-end sm:flex-row-reverse"
                                    >
                                        <ArrowRight
                                            size={16}
                                            className="text-brand-500 mt-1 shrink-0 group-hover:translate-x-1 transition-transform"
                                        />
                                        <div>
                                            <p className="text-xs text-gray-400 mb-1">Next article</p>
                                            <p className="text-sm font-bold text-navy-800 line-clamp-2 group-hover:text-brand-600 transition-colors">
                                                {next.title}
                                            </p>
                                        </div>
                                    </Link>
                                )}
                            </div>
                        </article>

                        <aside className="order-2 lg:sticky lg:top-28 space-y-10 shrink-0 pb-8 lg:pb-0 border-b border-gray-100 lg:border-0">
                            <nav aria-label="Blog categories">
                                <h2 className="text-base font-bold text-navy-900 mb-4">Categories</h2>
                                <ul className="space-y-2.5">
                                    <li>
                                        <Link to="/blog" className="text-sm text-gray-600 hover:text-brand-600 transition-colors">
                                            All posts
                                        </Link>
                                    </li>
                                    {sidebarCategories.map((cat) => (
                                        <li key={cat}>
                                            <Link
                                                to={`/blog?category=${encodeURIComponent(cat)}`}
                                                className={`text-sm transition-colors ${
                                                    post.category === cat
                                                        ? "text-brand-600 font-semibold"
                                                        : "text-gray-600 hover:text-brand-600"
                                                }`}
                                            >
                                                {cat}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </nav>

                            <section aria-labelledby="recent-posts-heading">
                                <h2 id="recent-posts-heading" className="text-base font-bold text-navy-900 mb-4">
                                    Recent posts
                                </h2>
                                {displayRecent.length === 0 ? (
                                    <p className="text-sm text-gray-500">No other posts yet.</p>
                                ) : (
                                    <ul className="space-y-5">
                                        {displayRecent.map((rp) => (
                                            <li key={rp.id}>
                                                <Link to={`/media/${rp.slug}`} className="flex gap-3 group">
                                                    <div className="w-16 h-16 rounded-lg overflow-hidden bg-gray-100 shrink-0 border border-gray-100">
                                                        <img
                                                            src={resolveAssetUrl(rp.image)}
                                                            alt=""
                                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                                        />
                                                    </div>
                                                    <div className="min-w-0 py-0.5">
                                                        <p className="text-sm font-semibold text-navy-900 leading-snug line-clamp-2 group-hover:text-brand-600 transition-colors">
                                                            {rp.title}
                                                        </p>
                                                        <p className="text-xs text-gray-400 mt-1">{rp.date}</p>
                                                    </div>
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </section>

                            <div className="relative rounded-2xl overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-br from-navy-950 to-navy-800" />
                                <div
                                    className="absolute inset-0 opacity-60"
                                    style={{
                                        backgroundImage:
                                            "radial-gradient(circle, rgba(255,255,255,0.04) 1px, transparent 1px)",
                                        backgroundSize: "20px 20px",
                                    }}
                                />
                                <div className="relative p-5 text-center">
                                    <div className="w-11 h-11 rounded-xl bg-brand-500/25 flex items-center justify-center mx-auto mb-3 ring-1 ring-white/10">
                                        <BookOpen size={18} className="text-brand-100" />
                                    </div>
                                    <h3 className="font-display text-sm font-bold text-white mb-1.5 drop-shadow-sm">Need expert guidance?</h3>
                                    <p className="text-slate-200 text-sm mb-4 leading-relaxed">
                                        Schedule a consultation with our regulatory team.
                                    </p>
                                    <a
                                        href="mailto:info@eemedicals.com"
                                        className="inline-flex items-center gap-2 px-4 py-2 bg-brand-500 hover:bg-brand-400 text-white font-bold rounded-xl text-xs transition-all duration-300 shadow-lg shadow-brand-500/25"
                                    >
                                        Contact us <ArrowRight size={12} />
                                    </a>
                                </div>
                            </div>
                        </aside>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};
