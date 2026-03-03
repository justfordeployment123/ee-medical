import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Shield, Award, CheckCircle } from "lucide-react";

const clientLogos = [
    "FDA", "ISO", "MDSAP", "CE Mark", "EU MDR", "IVDR", "GMP", "ICH",
    "FDA", "ISO", "MDSAP", "CE Mark", "EU MDR", "IVDR", "GMP", "ICH",
];

export const Hero: React.FC = () => {
    return (
        <section className="relative w-full overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0">
                <img
                    src="https://images.unsplash.com/photo-1581093588401-fbb62a02f120?q=80&w=2000&auto=format&fit=crop"
                    alt=""
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Dark Gradient Overlay on image */}
            <div className="absolute inset-0 bg-gradient-to-br from-navy-950/[0.96] via-navy-900/[0.93] to-navy-800/[0.90]" />

            {/* Decorative Elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-brand-500/8 blur-3xl animate-float" />
                <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-brand-600/6 blur-3xl" />
                <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] rounded-full bg-brand-400/4 blur-3xl animate-float delay-300" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full border border-white/[0.03]" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] rounded-full border border-white/[0.04]" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border border-white/[0.03]" />
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage:
                            "radial-gradient(circle, rgba(255,255,255,0.03) 1px, transparent 1px)",
                        backgroundSize: "40px 40px",
                    }}
                />
            </div>

            <div className="relative z-10 max-w-[1400px] mx-auto px-4 md:px-8">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[85vh] py-20 lg:py-24">
                    {/* Left Content */}
                    <div className="flex flex-col justify-center">
                        <div className="animate-fade-in-up">
                            <div className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-brand-500/10 border border-brand-500/20 mb-8 backdrop-blur-sm">
                                <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                                <span className="text-brand-300 text-sm font-semibold tracking-wide">
                                    Trusted by 470+ Companies Worldwide
                                </span>
                            </div>
                        </div>

                        <h1 className="animate-fade-in-up delay-100 font-display text-4xl md:text-5xl lg:text-[3.75rem] font-extrabold text-white leading-[1.08] mb-7 tracking-tight">
                            Navigating FDA
                            <br />
                            <span className="gradient-text">Regulatory Pathways</span>
                            <br />
                            <span className="text-white/90">With Precision</span>
                        </h1>

                        <p className="animate-fade-in-up delay-200 text-lg md:text-xl text-gray-400 leading-relaxed mb-10 max-w-xl">
                            Expert consulting for medical device compliance, quality
                            management systems, and regulatory submissions. Over 32 years
                            positioning clients at the forefront of healthcare innovation.
                        </p>

                        <div className="animate-fade-in-up delay-300 flex flex-wrap gap-4 mb-14">
                            <Link
                                to="/about"
                                className="group inline-flex items-center gap-2.5 px-8 py-4 bg-brand-500 hover:bg-brand-400 text-white font-bold rounded-xl shadow-lg shadow-brand-500/30 hover:shadow-brand-500/50 hover:shadow-xl transition-all duration-300 text-[15px]"
                            >
                                Get Started
                                <ArrowRight
                                    size={17}
                                    className="group-hover:translate-x-1 transition-transform"
                                />
                            </Link>
                            <Link
                                to="/software"
                                className="group inline-flex items-center gap-2.5 px-8 py-4 bg-white/[0.06] hover:bg-white/[0.12] text-white font-bold rounded-xl border border-white/[0.12] hover:border-white/25 transition-all duration-300 backdrop-blur-sm text-[15px]"
                            >
                                Our Software
                            </Link>
                        </div>

                        {/* Trust Badges */}
                        <div className="animate-fade-in-up delay-400 flex flex-wrap gap-x-8 gap-y-3">
                            {[
                                { icon: Shield, label: "FDA Registered" },
                                { icon: Award, label: "ISO Certified" },
                                { icon: CheckCircle, label: "MDSAP Ready" },
                            ].map(({ icon: Icon, label }) => (
                                <div
                                    key={label}
                                    className="flex items-center gap-2.5 text-sm text-gray-500"
                                >
                                    <div className="w-7 h-7 rounded-lg bg-brand-500/10 flex items-center justify-center">
                                        <Icon size={14} className="text-brand-400" />
                                    </div>
                                    <span className="font-medium">{label}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right - Video + Stats */}
                    <div className="flex flex-col gap-5 animate-fade-in-up delay-300">
                        {/* Video Card */}
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-brand-900/40 border border-white/10 group">
                            <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-br from-brand-400/20 via-transparent to-brand-500/20 z-10 pointer-events-none" />
                            <div className="aspect-video bg-navy-900">
                                <iframe
                                    className="absolute top-0 left-0 w-full h-full"
                                    src="https://www.youtube.com/embed/kbdEERk_whw?si=uDSM2b3zH0SnodrS&autoplay=1&mute=1&rel=0"
                                    title="E & E Medicals Introduction"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    referrerPolicy="strict-origin-when-cross-origin"
                                    allowFullScreen
                                />
                            </div>
                        </div>

                        {/* Mini Stats Row */}
                        <div className="grid grid-cols-3 gap-3">
                            {[
                                { value: "266+", label: "510(k) Filed" },
                                { value: "63", label: "Experts" },
                                { value: "213+", label: "ISO Certified" },
                            ].map(({ value, label }, i) => (
                                <div
                                    key={label}
                                    className={`relative rounded-xl p-4 text-center overflow-hidden animate-fade-in-up delay-${(i + 5) * 100}`}
                                >
                                    <div className="absolute inset-0 bg-white/[0.06] backdrop-blur-md border border-white/[0.1] rounded-xl" />
                                    <div className="absolute inset-0 bg-gradient-to-b from-brand-500/5 to-transparent rounded-xl" />
                                    <div className="relative">
                                        <div className="text-2xl font-extrabold text-white font-display">
                                            {value}
                                        </div>
                                        <div className="text-[11px] text-gray-400 font-semibold mt-1 uppercase tracking-wider">
                                            {label}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Client Logos Strip */}
            <div className="relative z-10 border-t border-white/[0.06]">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/[0.02] to-white/[0.04]" />
                <div className="relative max-w-[1400px] mx-auto px-4 md:px-8 py-8">
                    <p className="text-center text-[11px] text-gray-500 uppercase tracking-[0.2em] font-semibold mb-5">
                        Regulatory Standards We Work With
                    </p>
                    <div className="relative overflow-hidden">
                        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-navy-950 to-transparent z-10" />
                        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-navy-950 to-transparent z-10" />
                        <div className="flex gap-6 animate-scroll-logos">
                            {clientLogos.map((logo, i) => (
                                <div
                                    key={i}
                                    className="flex-shrink-0 px-7 py-2.5 rounded-lg bg-white/[0.04] border border-white/[0.08] text-gray-500 text-sm font-bold tracking-widest hover:bg-white/[0.08] hover:text-brand-400 hover:border-brand-400/30 transition-all duration-300 cursor-default"
                                >
                                    {logo}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Wave divider for smooth transition */}
            <div className="absolute bottom-0 left-0 right-0 z-20">
                <svg viewBox="0 0 1440 56" fill="none" preserveAspectRatio="none" className="w-full h-[56px] block">
                    <path d="M0 56V28C180 8 360 44 540 36C720 28 900 8 1080 16C1260 24 1380 44 1440 36V56H0Z" fill="white"/>
                </svg>
            </div>
        </section>
    );
};
