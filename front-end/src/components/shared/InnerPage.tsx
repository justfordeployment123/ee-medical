/**
 * Shared inner-page components used across all service/content pages.
 * Keep all text/images unchanged — only styling is upgraded.
 */
import React from "react";
import { Link } from "react-router-dom";
import { CheckCircle, ArrowRight, type LucideIcon } from "lucide-react";

/* ─── Section Heading ─────────────────────────────────────── */
export const SectionHeading: React.FC<{
    badge?: string;
    title: React.ReactNode;
    subtitle?: string;
    centered?: boolean;
}> = ({ badge, title, subtitle, centered }) => (
    <div className={`mb-10 ${centered ? "text-center" : ""}`}>
        {badge && (
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-brand-50 border border-brand-100 text-brand-600 text-sm font-bold uppercase tracking-wider mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-400" />
                {badge}
            </span>
        )}
        <div className={`flex items-start gap-5 ${centered ? "justify-center" : ""}`}>
            <div className="w-1 h-12 rounded-full bg-gradient-to-b from-brand-400 to-brand-600 shrink-0 mt-1 hidden sm:block" />
            <h2 className="font-display text-2xl md:text-3xl lg:text-[2.1rem] font-extrabold text-navy-900 leading-tight tracking-tight">
                {title}
            </h2>
        </div>
        {subtitle && (
            <p className="text-gray-700 mt-4 leading-relaxed text-base font-medium max-w-3xl">
                {subtitle}
            </p>
        )}
    </div>
);

/* ─── Sub Heading (smaller h3) ────────────────────────────── */
export const SubHeading: React.FC<{ children: React.ReactNode; className?: string }> = ({
    children,
    className = "",
}) => (
    <h3 className={`font-display text-xl font-bold text-navy-900 mb-4 ${className}`}>
        {children}
    </h3>
);

/* ─── Feature List ─────────────────────────────────────────── */
export const FeatureList: React.FC<{
    items: string[];
    columns?: 1 | 2;
    className?: string;
}> = ({ items, columns = 1, className = "" }) => (
    <ul
        className={`${
            columns === 2
                ? "grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3"
                : "space-y-3"
        } ${className}`}
    >
        {items.map((item, i) => (
            <li key={i} className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-brand-50 border border-brand-200 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle size={12} className="text-brand-500" />
                </div>
                <span
                    className="text-gray-800 text-[15px] leading-relaxed font-medium"
                    dangerouslySetInnerHTML={{ __html: item }}
                />
            </li>
        ))}
    </ul>
);

/* ─── Bullet List ──────────────────────────────────────────── */
export const BulletList: React.FC<{
    items: string[];
    columns?: 1 | 2;
    className?: string;
}> = ({ items, columns = 1, className = "" }) => (
    <ul
        className={`${
            columns === 2
                ? "grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2"
                : "space-y-2"
        } ${className}`}
    >
        {items.map((item, i) => (
            <li key={i} className="flex items-start gap-2.5 text-gray-800 text-[15px] font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-500 shrink-0 mt-2" />
                <span dangerouslySetInnerHTML={{ __html: item }} />
            </li>
        ))}
    </ul>
);

/* ─── Info Box (highlight / callout) ──────────────────────── */
export const InfoBox: React.FC<{
    variant?: "light" | "dark" | "brand" | "warning";
    children: React.ReactNode;
    className?: string;
}> = ({ variant = "light", children, className = "" }) => {
    const styles = {
        light: "bg-slate-50 border border-gray-200 text-gray-800 font-medium",
        dark: "bg-navy-900 border border-navy-800 text-white font-medium",
        brand: "bg-brand-50 border-l-4 border-brand-500 text-gray-900 font-medium",
        warning: "bg-amber-50 border-l-4 border-amber-400 text-gray-900 font-medium",
    };
    return (
        <div className={`rounded-xl p-6 md:p-8 ${styles[variant]} ${className}`}>
            {children}
        </div>
    );
};

/* ─── Process Steps ────────────────────────────────────────── */
export const ProcessSteps: React.FC<{
    steps: { title: string; description: string }[];
}> = ({ steps }) => (
    <div className="space-y-6">
        {steps.map((step, i) => (
            <div key={i} className="flex gap-5">
                <div className="flex flex-col items-center gap-2">
                    <div className="w-10 h-10 rounded-xl bg-brand-500 text-white flex items-center justify-center font-bold text-sm font-display shrink-0">
                        {String(i + 1).padStart(2, "0")}
                    </div>
                    {i < steps.length - 1 && (
                        <div className="w-0.5 flex-1 bg-gradient-to-b from-brand-500/40 to-brand-200/20 min-h-[24px]" />
                    )}
                </div>
                <div className="pb-6">
                    <h4 className="font-bold text-navy-900 text-[15px] mb-1.5">
                        {step.title}
                    </h4>
                    <p className="text-gray-800 text-base leading-relaxed font-medium">
                        {step.description}
                    </p>
                </div>
            </div>
        ))}
    </div>
);

/* ─── Service Card ─────────────────────────────────────────── */
export const ServiceCard: React.FC<{
    icon?: LucideIcon;
    title: string;
    description: string;
    to?: string;
}> = ({ icon: Icon, title, description, to }) => {
    const inner = (
        <div className="group bg-white border border-gray-100 hover:border-brand-200 rounded-2xl p-6 hover:shadow-xl hover:shadow-brand-500/5 transition-all duration-400">
            {Icon && (
                <div className="w-12 h-12 rounded-xl bg-brand-50 group-hover:bg-brand-500 flex items-center justify-center mb-4 transition-all duration-400">
                    <Icon
                        size={22}
                        className="text-brand-500 group-hover:text-white transition-colors duration-400"
                    />
                </div>
            )}
            <h4 className="font-display font-bold text-navy-900 mb-2 text-[15px] group-hover:text-brand-600 transition-colors">
                {title}
            </h4>
            <p className="text-gray-700 text-base leading-relaxed font-medium">{description}</p>
        </div>
    );
    return to ? (
        <Link to={to}>{inner}</Link>
    ) : (
        inner
    );
};

/* ─── Stat Strip ───────────────────────────────────────────── */
export const StatStrip: React.FC<{
    stats: { value: string; label: string }[];
}> = ({ stats }) => (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 my-12">
        {stats.map((s, i) => (
            <div
                key={i}
                className="text-center p-6 rounded-2xl bg-gradient-to-br from-navy-950 to-navy-900 border border-white/5"
            >
                <div className="text-3xl font-extrabold text-white font-display mb-1">
                    {s.value}
                </div>
                <div className="text-sm text-gray-300 font-bold uppercase tracking-wider">
                    {s.label}
                </div>
            </div>
        ))}
    </div>
);

/* ─── Page CTA ─────────────────────────────────────────────── */
export const PageCTA: React.FC<{
    title?: string;
    subtitle?: string;
    linkLabel?: string;
    linkTo?: string;
    email?: string;
}> = ({
    title = "Ready to Get Started?",
    subtitle = "Schedule a free consultation with our regulatory experts today.",
    linkLabel = "Schedule Free Consultation",
    linkTo,
    email = "info@eemedicals.com",
}) => (
    <div className="relative overflow-hidden rounded-2xl mt-16 mb-4">
        <div className="absolute inset-0 bg-gradient-to-br from-navy-950 via-navy-900 to-navy-800" />
        <div
            className="absolute inset-0 opacity-20"
            style={{
                backgroundImage:
                    "radial-gradient(circle, rgba(26,143,209,0.08) 1px, transparent 1px)",
                backgroundSize: "24px 24px",
            }}
        />
        <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-brand-500/5 blur-3xl" />
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6 p-8 md:p-12">
            <div>
                <h3 className="font-display text-xl md:text-2xl font-extrabold text-white mb-2">
                    {title}
                </h3>
                <p className="text-gray-200 text-base font-medium">{subtitle}</p>
            </div>
            <div className="flex flex-wrap gap-3 shrink-0">
                {linkTo ? (
                    <Link
                        to={linkTo}
                        className="inline-flex items-center gap-2 px-6 py-3 bg-brand-500 hover:bg-brand-400 text-white font-bold rounded-xl transition-all duration-300 text-sm shadow-lg shadow-brand-500/25 whitespace-nowrap"
                    >
                        {linkLabel}
                        <ArrowRight size={15} />
                    </Link>
                ) : (
                    <a
                        href={`mailto:${email}`}
                        className="inline-flex items-center gap-2 px-6 py-3 bg-brand-500 hover:bg-brand-400 text-white font-bold rounded-xl transition-all duration-300 text-sm shadow-lg shadow-brand-500/25 whitespace-nowrap"
                    >
                        {linkLabel}
                        <ArrowRight size={15} />
                    </a>
                )}
                <a
                    href="tel:+16788159233"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-white/[0.06] text-white font-bold rounded-xl border border-white/[0.12] hover:bg-white/[0.12] transition-all duration-300 text-base whitespace-nowrap"
                >
                    Call +1 (678) 815-9233
                </a>
            </div>
        </div>
    </div>
);

/* ─── Hero Image ───────────────────────────────────────────── */
export const HeroImage: React.FC<{
    src: string;
    alt: string;
    height?: string;
    label?: string;
    /** 'cover' fills and may crop; 'contain' shows full image without cropping */
    fit?: "cover" | "contain";
}> = ({ src, alt, height = "h-72 md:h-[460px]", label, fit = "cover" }) => (
    <div className={`relative w-full rounded-2xl overflow-hidden shadow-2xl shadow-black/15 border border-gray-100/60 ${height} group flex items-center justify-center ${fit === "contain" ? "bg-slate-100" : ""}`}>
        <img
            src={src}
            alt={alt}
            className={`w-full h-full transition-transform duration-700 group-hover:scale-[1.02] ${fit === "contain" ? "object-contain" : "object-cover group-hover:scale-[1.03]"}`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950/55 via-navy-950/10 to-transparent" />
        {label && (
            <div className="absolute bottom-5 left-5">
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-500/90 backdrop-blur-sm text-white text-xs font-bold uppercase tracking-wider shadow-lg">
                    <span className="w-1.5 h-1.5 rounded-full bg-white/80 animate-pulse" />
                    {label}
                </span>
            </div>
        )}
    </div>
);

/* ─── Split Section (image + content side by side) ────────── */
export const SplitSection: React.FC<{
    imageSrc: string;
    imageAlt: string;
    imageRight?: boolean;
    label?: string;
    dark?: boolean;
    children: React.ReactNode;
    minImageHeight?: string;
    /** 'cover' crops to fill; 'contain' shows the full picture */
    imageFit?: "cover" | "contain";
}> = ({ imageSrc, imageAlt, imageRight = false, label, dark, children, minImageHeight = "min-h-[280px] lg:min-h-[380px]", imageFit = "cover" }) => (
    <div className={`rounded-2xl overflow-hidden border ${dark ? "bg-navy-900 border-navy-800" : "bg-slate-50 border-gray-100"}`}>
        <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className={`relative overflow-hidden ${minImageHeight} group ${imageRight ? "lg:order-2" : "lg:order-1"} ${imageFit === "contain" ? "bg-navy-950" : ""}`}>
                <img
                    src={imageSrc}
                    alt={imageAlt}
                    className={`absolute inset-0 w-full h-full transition-transform duration-700 ${imageFit === "contain" ? "object-contain object-center group-hover:scale-[1.02]" : "object-cover group-hover:scale-[1.04]"}`}
                />
                <div className="absolute inset-0 bg-gradient-to-br from-navy-950/20 to-navy-950/5 pointer-events-none" />
                {label && (
                    <div className="absolute bottom-4 left-4">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-brand-500/90 backdrop-blur-sm text-white text-sm font-bold uppercase tracking-wider shadow-lg">
                            {label}
                        </span>
                    </div>
                )}
            </div>
            <div className={`p-8 md:p-10 lg:p-12 flex flex-col justify-center ${imageRight ? "lg:order-1" : "lg:order-2"}`}>
                {children}
            </div>
        </div>
    </div>
);

/* ─── Section (alternating bg) ────────────────────────────── */
export const Section: React.FC<{
    children: React.ReactNode;
    dark?: boolean;
    className?: string;
}> = ({ children, dark, className = "" }) => (
    <section
        className={`rounded-2xl p-8 md:p-12 ${
            dark
                ? "bg-navy-900 border border-navy-800"
                : "bg-slate-50 border border-gray-100"
        } ${className}`}
    >
        {children}
    </section>
);

/* ─── Inner page content wrapper ──────────────────────────── */
export const InnerContent: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <div className="max-w-[1100px] mx-auto px-4 md:px-8 pt-16 pb-28 space-y-16">
        {children}
    </div>
);
