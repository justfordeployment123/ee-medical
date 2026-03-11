import React from "react";
import { ArrowRight, Phone, Quote, Star } from "lucide-react";

const testimonials = [
    {
        quote: "E&E Medicals guided us through the entire 510(k) process with expertise and precision. Their deep FDA knowledge saved us months of delays.",
        role: "VP of Regulatory Affairs",
        company: "Fortune 500 Medical Device Company",
        initials: "RA",
    },
    {
        quote: "Their ISO 13485 implementation was seamless. The team's hands-on approach and attention to detail made what could have been overwhelming feel manageable.",
        role: "Director of Quality",
        company: "Global IVD Manufacturer",
        initials: "DQ",
    },
    {
        quote: "Outstanding support with our EU MDR transition. E&E Medicals' global regulatory knowledge is unmatched in the industry.",
        role: "Chief Compliance Officer",
        company: "European MedTech Company",
        initials: "CC",
    },
];

export const CTABanner: React.FC = () => {
    return (
        <section className="relative py-24 px-4 md:px-8 overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0">
                <img
                    src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=2000&auto=format&fit=crop"
                    alt=""
                    className="w-full h-full object-cover"
                />
            </div>
            {/* Dark Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-navy-950/[0.95] via-navy-900/[0.92] to-navy-800/[0.90]" />
            <div
                className="absolute inset-0 opacity-30"
                style={{
                    backgroundImage:
                        "radial-gradient(circle, rgba(26,143,209,0.08) 1px, transparent 1px)",
                    backgroundSize: "28px 28px",
                }}
            />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full bg-brand-500/8 blur-3xl" />
            <div className="absolute bottom-0 right-0 w-[300px] h-[300px] rounded-full bg-brand-400/5 blur-3xl" />

            <div className="max-w-[1400px] mx-auto relative z-10">
                <div className="text-center max-w-[900px] mx-auto">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.06] border border-white/[0.1] mb-8 backdrop-blur-sm">
                        <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                        <span className="text-brand-300 text-sm font-semibold">
                            Free Consultation Available
                        </span>
                    </div>

                    <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-6 leading-tight tracking-tight">
                        Ready to Navigate Your
                        <br />
                        <span className="gradient-text">Regulatory Pathway?</span>
                    </h2>
                    <p className="text-white/90 text-lg mb-12 max-w-xl mx-auto leading-relaxed">
                        Schedule a free consultation with our FDA regulatory experts
                        and take the first step toward market approval.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <a
                            href="mailto:info@eemedicals.com"
                            className="group inline-flex items-center gap-2.5 px-8 py-4 bg-brand-500 hover:bg-brand-400 text-white font-bold rounded-xl shadow-lg shadow-brand-500/30 hover:shadow-brand-500/50 hover:shadow-xl transition-all duration-300"
                        >
                            Schedule Free Consultation
                            <ArrowRight
                                size={16}
                                className="group-hover:translate-x-1 transition-transform"
                            />
                        </a>
                        <a
                            href="tel:+16783856106"
                            className="inline-flex items-center gap-2.5 px-8 py-4 bg-white/[0.06] text-white font-bold rounded-xl border border-white/[0.12] hover:bg-white/[0.12] hover:border-white/25 backdrop-blur-sm transition-all duration-300"
                        >
                            <Phone size={16} />
                            Call (678) 385-6106
                        </a>
                    </div>
                </div>

                {/* Testimonials Strip */}
                    <div className="mt-16 pt-12 border-t border-white/[0.08]">
                    <div className="flex items-center justify-center gap-1.5 mb-8">
                        {[...Array(5)].map((_, i) => (
                            <Star key={i} size={14} className="text-amber-400 fill-amber-400" />
                        ))}
                        <span className="text-white/90 text-xs font-semibold ml-2 tracking-wide">
                            Trusted by Most Healthcare Companies Worldwide
                        </span>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                        {testimonials.map((t, i) => (
                            <div
                                key={i}
                                className="relative rounded-2xl p-6 overflow-hidden group"
                            >
                                <div className="absolute inset-0 bg-white/[0.04] border border-white/[0.08] rounded-2xl group-hover:bg-white/[0.07] group-hover:border-white/[0.14] transition-all duration-500" />
                                <div className="relative">
                                    <Quote size={16} className="text-brand-400/60 mb-3" />
                                    <p className="text-white/95 text-[13px] leading-relaxed mb-5 italic">
                                        "{t.quote}"
                                    </p>
                                    <div className="flex items-center gap-3">
                                        <div className="w-9 h-9 rounded-full bg-gradient-to-br from-brand-400 to-brand-600 flex items-center justify-center">
                                            <span className="text-white text-[10px] font-bold">{t.initials}</span>
                                        </div>
                                        <div>
                                            <p className="text-white text-xs font-semibold">{t.role}</p>
                                            <p className="text-white/80 text-[11px]">{t.company}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
