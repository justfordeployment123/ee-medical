import React from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Calendar, Tag, Clock, ArrowLeft, ArrowRight, ChevronRight, BookOpen, User } from "lucide-react";
import { getBlogPostBySlug, blogPosts } from "../data/blogData";
import { PageMeta } from "../components/shared/PageMeta";
import type { ContentSection } from "../data/blogData";

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
                <p key={index} className="text-gray-600 leading-relaxed mb-5 text-[16px]">
                    {section.text}
                </p>
            );
        case "ul":
            return (
                <ul key={index} className="mb-5 space-y-2 pl-2">
                    {section.items?.map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-gray-600 text-[16px] leading-relaxed">
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
                        <li key={i} className="flex items-start gap-3 text-gray-600 text-[16px] leading-relaxed">
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
                    <BookOpen size={28} className="text-brand-400 mx-auto mb-3" />
                    <p className="text-white font-bold text-lg mb-4">{section.ctaText}</p>
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

export const BlogPost: React.FC = () => {
    const { slug } = useParams<{ slug: string }>();
    const post = slug ? getBlogPostBySlug(slug) : undefined;

    if (!post) {
        return <Navigate to="/media" replace />;
    }

    const currentIndex = blogPosts.findIndex((p) => p.slug === slug);
    const prevPost = currentIndex > 0 ? blogPosts[currentIndex - 1] : null;
    const nextPost = currentIndex < blogPosts.length - 1 ? blogPosts[currentIndex + 1] : null;
    const relatedPosts = blogPosts.filter((p) => p.slug !== slug && p.category === post.category).slice(0, 3);
    const fallbackRelated = blogPosts.filter((p) => p.slug !== slug).slice(0, 3);

    return (
        <div className="w-full bg-slate-50 font-sans flex flex-col min-h-screen">
            <PageMeta
                title={post.title}
                description={post.excerpt.slice(0, 160)}
            />
            <Header />

            {/* Hero Banner */}
            <div className="relative w-full h-72 md:h-96 overflow-hidden">
                <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-950/50 to-navy-950/20" />
                <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-12 max-w-4xl mx-auto w-full left-0 right-0">
                    {/* Breadcrumb */}
                    <div className="inline-flex items-center gap-1.5 text-sm font-semibold mb-4">
                        <Link to="/" className="text-white/70 hover:text-brand-300 transition-colors">Home</Link>
                        <ChevronRight size={14} className="text-white/50" />
                        <Link to="/media" className="text-white/70 hover:text-brand-300 transition-colors">Media</Link>
                        <ChevronRight size={14} className="text-white/50" />
                        <span className="text-brand-300 truncate max-w-[200px]">{post.category}</span>
                    </div>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-brand-500 text-white text-xs font-bold uppercase tracking-wider w-fit mb-3">
                        <Tag size={10} /> {post.category}
                    </span>
                    <h1 className="font-display text-2xl md:text-4xl font-extrabold text-white leading-tight">
                        {post.title}
                    </h1>
                </div>
            </div>

            <main className="grow pb-24">
                <div className="max-w-[1200px] mx-auto px-4 md:px-8 pt-10">
                    <div className="flex flex-col lg:flex-row gap-12">

                        {/* Article Content */}
                        <article className="lg:w-2/3">
                            {/* Meta bar */}
                            <div className="flex flex-wrap items-center gap-5 text-sm text-gray-400 mb-8 pb-6 border-b border-gray-200">
                                <span className="flex items-center gap-1.5">
                                    <User size={14} className="text-brand-500" /> {post.author}
                                </span>
                                <span className="flex items-center gap-1.5">
                                    <Calendar size={14} className="text-brand-500" /> {post.date}
                                </span>
                                <span className="flex items-center gap-1.5">
                                    <Clock size={14} className="text-brand-500" /> {post.readTime}
                                </span>
                            </div>

                            {/* Lead paragraph */}
                            <p className="text-gray-700 text-lg leading-relaxed mb-6 font-medium border-l-4 border-brand-500 pl-4">
                                {post.excerpt}
                            </p>

                            {/* Body */}
                            <div className="prose-content">
                                {post.content.map((section, i) => renderSection(section, i))}
                            </div>

                            {/* Post Navigation */}
                            <div className="flex flex-col sm:flex-row gap-4 mt-12 pt-8 border-t border-gray-200">
                                {prevPost && (
                                    <Link
                                        to={`/media/${prevPost.slug}`}
                                        className="flex-1 group flex items-start gap-3 p-4 bg-white rounded-xl border border-gray-100 hover:border-brand-200 hover:shadow-md transition-all"
                                    >
                                        <ArrowLeft size={16} className="text-brand-500 mt-1 shrink-0 group-hover:-translate-x-1 transition-transform" />
                                        <div>
                                            <p className="text-xs text-gray-400 mb-1">Previous Article</p>
                                            <p className="text-sm font-bold text-navy-800 line-clamp-2 group-hover:text-brand-600 transition-colors">{prevPost.title}</p>
                                        </div>
                                    </Link>
                                )}
                                {nextPost && (
                                    <Link
                                        to={`/media/${nextPost.slug}`}
                                        className="flex-1 group flex items-start gap-3 p-4 bg-white rounded-xl border border-gray-100 hover:border-brand-200 hover:shadow-md transition-all text-right justify-end"
                                    >
                                        <div>
                                            <p className="text-xs text-gray-400 mb-1">Next Article</p>
                                            <p className="text-sm font-bold text-navy-800 line-clamp-2 group-hover:text-brand-600 transition-colors">{nextPost.title}</p>
                                        </div>
                                        <ArrowRight size={16} className="text-brand-500 mt-1 shrink-0 group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                )}
                            </div>
                        </article>

                        {/* Sidebar */}
                        <aside className="lg:w-1/3 space-y-8">
                            {/* Back to Media */}
                            <Link
                                to="/media"
                                className="flex items-center gap-2 text-brand-600 font-bold text-sm hover:gap-3 transition-all"
                            >
                                <ArrowLeft size={16} /> Back to All Articles
                            </Link>

                            {/* About Author Widget */}
                            <div className="bg-white border border-gray-100 rounded-2xl p-6">
                                <h3 className="font-display text-base font-bold text-navy-900 pb-4 mb-4 border-b border-gray-100 relative">
                                    About the Author
                                    <span className="absolute left-0 bottom-0 w-8 h-0.5 bg-brand-500 rounded-full" />
                                </h3>
                                <div className="flex items-center gap-3 mb-3">
                                    <div className="w-12 h-12 rounded-xl bg-brand-500/10 flex items-center justify-center shrink-0">
                                        <User size={20} className="text-brand-500" />
                                    </div>
                                    <div>
                                        <p className="font-bold text-navy-800 text-sm">{post.author}</p>
                                        <p className="text-xs text-gray-400">FDA Regulatory Experts</p>
                                    </div>
                                </div>
                                <p className="text-gray-500 text-xs leading-relaxed">
                                    E&E Medicals brings over 32 years of experience in FDA regulatory affairs, medical device compliance, and quality management systems.
                                </p>
                            </div>

                            {/* Related Articles */}
                            <div className="bg-white border border-gray-100 rounded-2xl p-6">
                                <h3 className="font-display text-base font-bold text-navy-900 pb-4 mb-5 border-b border-gray-100 relative">
                                    Related Articles
                                    <span className="absolute left-0 bottom-0 w-8 h-0.5 bg-brand-500 rounded-full" />
                                </h3>
                                <ul className="space-y-4">
                                    {(relatedPosts.length > 0 ? relatedPosts : fallbackRelated).map((related) => (
                                        <li key={related.id} className="flex gap-3 group">
                                            <div className="w-14 h-14 rounded-lg overflow-hidden shrink-0">
                                                <img
                                                    src={related.image}
                                                    alt={related.title}
                                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform"
                                                />
                                            </div>
                                            <div className="min-w-0">
                                                <Link
                                                    to={`/media/${related.slug}`}
                                                    className="text-navy-800 font-semibold text-xs hover:text-brand-600 transition-colors block mb-1 leading-snug line-clamp-2"
                                                >
                                                    {related.title}
                                                </Link>
                                                <span className="text-[11px] text-gray-400 flex items-center gap-1">
                                                    <Calendar size={9} /> {related.date}
                                                </span>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* CTA Widget */}
                            <div className="relative rounded-2xl overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-br from-navy-950 to-navy-800" />
                                <div
                                    className="absolute inset-0"
                                    style={{
                                        backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.03) 1px, transparent 1px)",
                                        backgroundSize: "20px 20px",
                                    }}
                                />
                                <div className="relative p-6 text-center">
                                    <div className="w-12 h-12 rounded-xl bg-brand-500/20 flex items-center justify-center mx-auto mb-4">
                                        <BookOpen size={20} className="text-brand-400" />
                                    </div>
                                    <h3 className="font-display text-base font-bold text-white mb-2">Need Expert Guidance?</h3>
                                    <p className="text-gray-400 text-xs mb-5 leading-relaxed">
                                        Schedule a free consultation with our FDA regulatory experts.
                                    </p>
                                    <a
                                        href="mailto:info@eemedicals.com"
                                        className="inline-flex items-center gap-2 px-5 py-2.5 bg-brand-500 hover:bg-brand-400 text-white font-bold rounded-xl text-xs transition-all duration-300 shadow-lg shadow-brand-500/25"
                                    >
                                        Contact Us <ArrowRight size={12} />
                                    </a>
                                </div>
                            </div>

                            {/* Categories */}
                            <div className="bg-white border border-gray-100 rounded-2xl p-6">
                                <h3 className="font-display text-base font-bold text-navy-900 pb-4 mb-5 border-b border-gray-100 relative">
                                    Categories
                                    <span className="absolute left-0 bottom-0 w-8 h-0.5 bg-brand-500 rounded-full" />
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {["FDA Regulatory", "IVD & Diagnostics", "Compliance", "FDA News", "US Agent Services", "Public Health"].map((cat) => (
                                        <Link
                                            key={cat}
                                            to="/media"
                                            className="px-3 py-1.5 rounded-full text-xs font-bold bg-slate-100 text-gray-600 hover:bg-brand-500 hover:text-white transition-all"
                                        >
                                            {cat}
                                        </Link>
                                    ))}
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
