import React from "react";
import { Link } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";

interface PageHeaderProps {
    title: string;
    breadcrumb: string;
}

export const PageHeader: React.FC<PageHeaderProps> = ({ title, breadcrumb }) => {
    return (
        <div className="relative w-full py-28 md:py-36 overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-navy-950 via-navy-900 to-navy-800" />

            {/* Grid pattern */}
            <div
                className="absolute inset-0 opacity-40"
                style={{
                    backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.04) 1px, transparent 1px)",
                    backgroundSize: "36px 36px",
                }}
            />

            {/* Decorative orbs */}
            <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-brand-500/8 blur-3xl" />
            <div className="absolute -bottom-32 -left-32 w-[400px] h-[400px] rounded-full bg-brand-600/8 blur-3xl" />
            <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[300px] h-[300px] rounded-full bg-brand-400/5 blur-3xl" />

            {/* Concentric rings */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full border border-white/[0.025]" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full border border-white/[0.035]" />

            {/* Content */}
            <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
                {/* Breadcrumb */}
                <div className="animate-fade-in-up inline-flex items-center gap-1.5 text-sm font-medium bg-white/[0.06] border border-white/[0.1] rounded-full px-4 py-2 mb-6">
                    <Link to="/" className="flex items-center gap-1 text-gray-400 hover:text-brand-400 transition-colors">
                        <Home size={13} />
                        <span>Home</span>
                    </Link>
                    <ChevronRight size={13} className="text-gray-600" />
                    <span className="text-brand-400 font-semibold">{breadcrumb}</span>
                </div>

                {/* Title */}
                <h1 className="animate-fade-in-up delay-100 font-display text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight tracking-tight">
                    {title}
                </h1>

                {/* Accent line */}
                <div className="animate-fade-in-up delay-200 flex items-center justify-center gap-2 mt-6">
                    <div className="w-12 h-0.5 rounded-full bg-brand-500/40" />
                    <div className="w-3 h-3 rounded-full bg-brand-500/60" />
                    <div className="w-20 h-0.5 rounded-full bg-gradient-to-r from-brand-500 to-brand-300" />
                    <div className="w-3 h-3 rounded-full bg-brand-500/60" />
                    <div className="w-12 h-0.5 rounded-full bg-brand-500/40" />
                </div>
            </div>

            {/* Bottom wave */}
            <div className="absolute bottom-0 left-0 right-0">
                <svg viewBox="0 0 1440 56" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
                    <path
                        d="M0 56L80 49C160 42 320 28 480 21C640 14 800 14 960 19.3C1120 25 1280 37 1360 43.3L1440 49V56H0Z"
                        fill="white"
                    />
                </svg>
            </div>
        </div>
    );
};
