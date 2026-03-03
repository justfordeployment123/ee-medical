import React from "react";
import { Briefcase, Users, Award, ShieldCheck, BadgeCheck } from "lucide-react";
import type { StatType } from "../../types";

const statsData: StatType[] = [
    { id: "1", value: "470+", label: "Successful Projects", icon: Briefcase },
    { id: "2", value: "63", label: "FDA Regulatory Experts", icon: Users },
    { id: "3", value: "266+", label: "FDA 510(k) Submissions", icon: Award },
    { id: "4", value: "213+", label: "ISO 13485 Implementations", icon: ShieldCheck },
];

const certifications = [
    "FDA Registered", "ISO 13485", "ISO 14971", "MDSAP",
    "EU MDR", "CE Mark", "GMP Compliant", "ICH Guidelines",
];

export const Stats: React.FC = () => {
    return (
        <section className="relative py-24 px-4 md:px-8 overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0">
                <img
                    src="https://images.unsplash.com/photo-1551076805-e1869033e561?q=80&w=2000&auto=format&fit=crop"
                    alt=""
                    className="w-full h-full object-cover"
                />
            </div>
            {/* Dark Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-navy-950/[0.95] via-navy-900/[0.92] to-navy-800/[0.90]" />
            <div
                className="absolute inset-0"
                style={{
                    backgroundImage:
                        "radial-gradient(circle, rgba(255,255,255,0.03) 1px, transparent 1px)",
                    backgroundSize: "32px 32px",
                }}
            />
            <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-brand-500/6 blur-3xl" />
            <div className="absolute -bottom-32 -left-32 w-[400px] h-[400px] rounded-full bg-brand-600/6 blur-3xl" />

            <div className="max-w-[1400px] mx-auto relative z-10">
                {/* Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.06] border border-white/[0.1] mb-6">
                        <span className="text-brand-400 text-sm font-semibold">
                            By the Numbers
                        </span>
                    </div>
                    <h2 className="font-display text-3xl md:text-4xl lg:text-[2.75rem] font-extrabold text-white mb-5">
                        Over <span className="gradient-text">32 Years</span> of
                        Experience
                    </h2>
                    <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
                        Well-established partners across the EU, Asia, and USA.
                        Our customers consider us not just consultants, but
                        strategic outsourcing partners.
                    </p>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
                    {statsData.map((stat) => (
                        <div
                            key={stat.id}
                            className="relative group text-center p-8 rounded-2xl overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-white/[0.04] border border-white/[0.08] rounded-2xl group-hover:bg-white/[0.08] group-hover:border-white/[0.15] transition-all duration-500" />
                            <div className="absolute inset-0 bg-gradient-to-b from-brand-500/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            <div className="relative">
                                <div className="w-14 h-14 rounded-2xl bg-brand-500/10 flex items-center justify-center mx-auto mb-5 group-hover:bg-brand-500/20 group-hover:scale-110 transition-all duration-500">
                                    <stat.icon
                                        size={24}
                                        className="text-brand-400"
                                    />
                                </div>
                                <div className="text-4xl md:text-5xl font-extrabold text-white mb-2 font-display tracking-tight">
                                    {stat.value}
                                </div>
                                <div className="text-xs font-semibold uppercase tracking-wider text-gray-500 group-hover:text-brand-300 transition-colors">
                                    {stat.label}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Trust Certification Strip */}
                <div className="mt-16 pt-12 border-t border-white/[0.08]">
                    <div className="flex items-center justify-center gap-2 mb-6">
                        <BadgeCheck size={14} className="text-brand-400" />
                        <p className="text-center text-[11px] text-gray-500 uppercase tracking-[0.2em] font-semibold">
                            Certifications & Standards We Support
                        </p>
                    </div>
                    <div className="flex flex-wrap justify-center gap-3">
                        {certifications.map((cert) => (
                            <div
                                key={cert}
                                className="px-5 py-2.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-gray-400 text-xs font-semibold tracking-wide hover:bg-white/[0.08] hover:text-brand-300 hover:border-brand-400/30 transition-all duration-300 cursor-default"
                            >
                                {cert}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
