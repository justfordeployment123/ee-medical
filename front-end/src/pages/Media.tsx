import React, { useState } from "react";
import { PageHeader } from "../components/shared/PageHeader";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { ChevronRight, Search, Calendar, Tag, ArrowRight, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";
import { useContent } from "../hooks/useContent";
import { blogPosts, categories } from "../data/blogData";
import { PageMeta } from "../components/shared/PageMeta";

export const Media: React.FC = () => {
    const content = useContent('media');
    const header = content?.header;
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("All");

    const filteredPosts = blogPosts.filter((post) => {
        const matchesSearch =
            searchQuery === "" ||
            post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });

    const featured = filteredPosts.find((p) => p.featured);
    const rest = filteredPosts.filter((p) => !p.featured || selectedCategory !== "All" || searchQuery !== "");

    return (
        <div className="w-full bg-slate-50 font-sans flex flex-col min-h-screen">
            <PageMeta
                title="Media & News — FDA Regulatory Insights"
                description="Latest insights on FDA regulatory affairs, medical device compliance, ISO standards, and global market access from E&E Medicals' expert consulting team."
            />
            <Header />

            <main className="grow pb-24">
                <PageHeader title={header?.section_heading || "Media & News"} breadcrumb="Media" />

                <div className="max-w-[900px] mx-auto px-4 md:px-8 pt-10 text-center">
                    <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                        {header?.section_subtext || "Stay current with the latest in FDA regulatory affairs, medical device compliance, ISO standards, and global market access. Insights from our expert consulting team."}
                    </p>
                </div>

                <div className="max-w-[1400px] mx-auto px-4 md:px-8 pt-16 pb-12">
                    {/* Category Filter */}
                    <div className="flex flex-wrap gap-2 mb-10">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setSelectedCategory(cat)}
                                className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-200 ${
                                    selectedCategory === cat
                                        ? "bg-brand-500 text-white shadow-lg shadow-brand-500/25"
                                        : "bg-white text-gray-500 border border-gray-200 hover:border-brand-300 hover:text-brand-600"
                                }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    <div className="flex flex-col lg:flex-row gap-12">
                        {/* Main Content */}
                        <div className="lg:w-2/3">
                            {/* Featured Post */}
                            {featured && selectedCategory === "All" && searchQuery === "" && (
                                <Link to={`/media/${featured.slug}`} className="block mb-10 group">
                                    <div className="relative rounded-2xl overflow-hidden shadow-xl shadow-black/10 border border-gray-100 bg-white">
                                        <div className="relative h-64 md:h-80 overflow-hidden">
                                            <img
                                                src={featured.image}
                                                alt={featured.title}
                                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-navy-950/20 to-transparent" />
                                            <div className="absolute top-4 left-4">
                                                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-brand-500 text-white text-xs font-bold uppercase tracking-wider">
                                                    <BookOpen size={11} /> Featured
                                                </span>
                                            </div>
                                            <div className="absolute bottom-0 left-0 right-0 p-6">
                                                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/15 backdrop-blur-sm text-white text-[11px] font-semibold uppercase tracking-wider mb-3">
                                                    <Tag size={10} /> {featured.category}
                                                </span>
                                                <h2 className="font-display text-xl md:text-2xl font-extrabold text-white leading-snug line-clamp-2">
                                                    {featured.title}
                                                </h2>
                                            </div>
                                        </div>
                                        <div className="p-6">
                                            <div className="flex items-center gap-4 text-xs text-gray-400 mb-3">
                                                <span className="flex items-center gap-1"><Calendar size={11} /> {featured.date}</span>
                                                <span>{featured.readTime}</span>
                                            </div>
                                            <p className="text-gray-500 text-sm leading-relaxed line-clamp-2 mb-4">{featured.excerpt}</p>
                                            <div className="inline-flex items-center gap-1.5 text-brand-600 font-bold text-sm group-hover:gap-3 transition-all">
                                                Read Full Article <ArrowRight size={14} />
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            )}

                            {/* Post Grid */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                {rest.map((post) => (
                                    <Link key={post.id} to={`/media/${post.slug}`} className="group block bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:shadow-black/8 border border-gray-100 hover:border-brand-200 transition-all duration-400">
                                        {/* Image */}
                                        <div className="relative h-44 overflow-hidden">
                                            <img
                                                src={post.image}
                                                alt={post.title}
                                                className="w-full h-full object-cover transition-transform duration-600 group-hover:scale-[1.06]"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-navy-950/40 to-transparent" />
                                            <div className="absolute top-3 left-3">
                                                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-brand-500/90 backdrop-blur-sm text-white text-[10px] font-bold uppercase tracking-wider">
                                                    <Tag size={9} /> {post.category}
                                                </span>
                                            </div>
                                        </div>
                                        {/* Content */}
                                        <div className="p-5">
                                            <div className="flex items-center gap-3 text-[11px] text-gray-400 mb-2.5">
                                                <span className="flex items-center gap-1"><Calendar size={10} /> {post.date}</span>
                                                <span>{post.readTime}</span>
                                            </div>
                                            <h3 className="font-display text-[15px] font-bold text-navy-900 mb-2.5 line-clamp-2 leading-snug group-hover:text-brand-600 transition-colors">
                                                {post.title}
                                            </h3>
                                            <p className="text-gray-400 text-xs leading-relaxed line-clamp-2 mb-4">{post.excerpt}</p>
                                            <div className="inline-flex items-center gap-1 text-brand-500 font-bold text-xs group-hover:gap-2 transition-all">
                                                Read More <ChevronRight size={12} />
                                            </div>
                                        </div>
                                    </Link>
                                ))}
                            </div>

                            {filteredPosts.length === 0 && (
                                <div className="text-center py-16 text-gray-400">
                                    <Search size={40} className="mx-auto mb-4 opacity-30" />
                                    <p className="font-semibold">No articles found matching your search.</p>
                                </div>
                            )}

                            {/* Pagination */}
                            <div className="flex items-center gap-2 pt-10">
                                {[1, 2, 3].map((n) => (
                                    <Link
                                        key={n}
                                        to="#"
                                        className={`w-10 h-10 flex items-center justify-center font-bold rounded-xl text-sm transition-all ${
                                            n === 1
                                                ? "bg-brand-500 text-white shadow-lg shadow-brand-500/25"
                                                : "bg-white text-gray-600 border border-gray-200 hover:border-brand-300 hover:text-brand-600"
                                        }`}
                                    >
                                        {n}
                                    </Link>
                                ))}
                                <Link to="#" className="w-10 h-10 flex items-center justify-center bg-white text-gray-600 border border-gray-200 hover:border-brand-300 hover:text-brand-600 rounded-xl transition-all">
                                    <ChevronRight size={16} />
                                </Link>
                            </div>
                        </div>

                        {/* Sidebar */}
                        <aside className="lg:w-1/3 space-y-8">
                            {/* Search Widget */}
                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder="Search articles..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="w-full bg-white border border-gray-200 py-3.5 pl-4 pr-12 focus:outline-none focus:border-brand-400 focus:ring-2 focus:ring-brand-500/20 rounded-xl text-sm transition-all"
                                />
                                <button className="absolute right-0 top-0 h-full px-4 text-gray-400 hover:text-brand-600 transition-colors">
                                    <Search size={17} />
                                </button>
                            </div>

                            {/* Featured Image Widget */}
                            <div className="relative rounded-2xl overflow-hidden shadow-lg h-44">
                                <img
                                    src="https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=800"
                                    alt="FDA Medical Device News"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 to-navy-950/30 flex items-end p-5">
                                    <div>
                                        <p className="text-brand-400 text-xs font-bold uppercase tracking-wider mb-1">Stay Updated</p>
                                        <p className="text-white font-bold text-sm">Latest FDA & Regulatory News</p>
                                    </div>
                                </div>
                            </div>

                            {/* Recent News Widget */}
                            <div className="bg-white border border-gray-100 rounded-2xl p-6">
                                <h3 className="font-display text-base font-bold text-navy-900 pb-4 mb-5 border-b border-gray-100 relative">
                                    Recent News
                                    <span className="absolute left-0 bottom-0 w-8 h-0.5 bg-brand-500 rounded-full" />
                                </h3>
                                <ul className="space-y-4">
                                    {blogPosts.slice(0, 4).map((post) => (
                                        <li key={post.id} className="flex gap-3 group">
                                            <div className="w-14 h-14 rounded-lg overflow-hidden shrink-0">
                                                <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform" />
                                            </div>
                                            <div className="min-w-0">
                                                <Link to={`/media/${post.slug}`} className="text-navy-800 font-semibold text-xs hover:text-brand-600 transition-colors block mb-1 leading-snug line-clamp-2">
                                                    {post.title}
                                                </Link>
                                                <span className="text-[11px] text-gray-400 flex items-center gap-1">
                                                    <Calendar size={9} /> {post.date}
                                                </span>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Archives Widget */}
                            <div className="bg-white border border-gray-100 rounded-2xl p-6">
                                <h3 className="font-display text-base font-bold text-navy-900 pb-4 mb-5 border-b border-gray-100 relative">
                                    Archives
                                    <span className="absolute left-0 bottom-0 w-8 h-0.5 bg-brand-500 rounded-full" />
                                </h3>
                                <ul className="space-y-1">
                                    {[
                                        { label: "March 2021", count: 1 },
                                        { label: "September 2020", count: 1 },
                                        { label: "July 2020", count: 1 },
                                        { label: "June 2020", count: 1 },
                                        { label: "April 2020", count: 24 },
                                        { label: "April 2010", count: 1 },
                                    ].map((item) => (
                                        <li key={item.label}>
                                            <Link
                                                to="#"
                                                className="flex justify-between items-center text-gray-600 text-sm hover:text-brand-600 transition-colors py-2.5 border-b border-dashed border-gray-100 last:border-0"
                                            >
                                                <span className="flex items-center gap-1.5">
                                                    <ChevronRight size={12} className="text-brand-400" />
                                                    {item.label}
                                                </span>
                                                <span className="text-[11px] bg-brand-50 text-brand-600 px-2 py-0.5 rounded-full font-bold">{item.count}</span>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* CTA Widget */}
                            <div className="relative rounded-2xl overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-br from-navy-950 to-navy-800" />
                                <div className="absolute inset-0" style={{
                                    backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.03) 1px, transparent 1px)",
                                    backgroundSize: "20px 20px"
                                }} />
                                <div className="relative p-6 text-center">
                                    <div className="w-12 h-12 rounded-xl bg-brand-500/20 flex items-center justify-center mx-auto mb-4">
                                        <BookOpen size={20} className="text-brand-400" />
                                    </div>
                                    <h3 className="font-display text-base font-bold text-white mb-2">{header?.cta_heading || 'Need Expert Guidance?'}</h3>
                                    <p className="text-gray-400 text-xs mb-5 leading-relaxed">{header?.cta_text || 'Schedule a free consultation with our FDA regulatory experts.'}</p>
                                    <a
                                        href="mailto:info@eemedicals.com"
                                        className="inline-flex items-center gap-2 px-5 py-2.5 bg-brand-500 hover:bg-brand-400 text-white font-bold rounded-xl text-xs transition-all duration-300 shadow-lg shadow-brand-500/25"
                                    >
                                        Contact Us <ArrowRight size={12} />
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
