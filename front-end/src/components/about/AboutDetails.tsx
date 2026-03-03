import React from "react";
import { Shield, Globe, ArrowUpRight } from "lucide-react";

const blocks = [
    {
        icon: Shield,
        tagline: "Quality & Safety",
        title: "Quality, Reliability and Safety assessments on medical devices.",
        description:
            "We assist and conduct reliability and safety assessments on medical devices for many companies in preparation for FDA approval. Using Reliability Prediction, FMECA (ISO 9000 and ISO 14971), we also offer Product Design Assistance, Test Plan Development, and MTBF Analysis.",
        highlights: [
            "Reliability Prediction & FMECA Analysis",
            "Product Design Assistance",
            "Test Plan Development & MTBF",
            "ISO 9000 & ISO 14971 Compliance",
        ],
        accent: "from-brand-400 to-brand-600",
        bg: "from-brand-50 to-blue-50",
    },
    {
        icon: Globe,
        tagline: "Global Market Access",
        title: "Prepare your medical devices for global markets.",
        description:
            "Selling medical devices requires registration and approval from regulatory agencies in each country where you plan to sell. Product registration requirements vary significantly, which may present challenges for businesses implementing multiple-market strategies.",
        highlights: [
            "Multi-country registration strategy",
            "Pre-market technical submissions",
            "Leveraging existing approvals for faster access",
            "Country-specific compliance mapping",
        ],
        accent: "from-emerald-400 to-teal-600",
        bg: "from-emerald-50 to-teal-50",
    },
];

export const AboutDetails: React.FC = () => {
    return (
        <section className="bg-gray-50 py-20 md:py-28 px-4 md:px-8">
            <div className="max-w-[1400px] mx-auto">
                {/* Section header */}
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-gray-200 mb-5">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-400" />
                        <span className="text-brand-600 text-xs font-bold uppercase tracking-wider">
                            What We Do
                        </span>
                    </div>
                    <h2 className="font-display text-3xl md:text-4xl font-extrabold text-navy-900 leading-tight">
                        Comprehensive regulatory{" "}
                        <span className="gradient-text">expertise</span> for your success.
                    </h2>
                </div>

                {/* Cards */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {blocks.map((block, index) => (
                        <div
                            key={index}
                            className="group relative bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-xl hover:shadow-navy-950/5 transition-all duration-500 hover:-translate-y-1"
                        >
                            {/* Top accent gradient */}
                            <div
                                className={`h-1 bg-gradient-to-r ${block.accent}`}
                            />

                            <div className="p-8 md:p-10">
                                {/* Tag + Icon */}
                                <div className="flex items-center justify-between mb-6">
                                    <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-gradient-to-r ${block.bg} border border-gray-100">
                                        <block.icon
                                            size={14}
                                            className="text-brand-500"
                                        />
                                        <span className="text-navy-800 text-xs font-bold uppercase tracking-wider">
                                            {block.tagline}
                                        </span>
                                    </div>
                                    <div className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center group-hover:bg-brand-50 transition-colors duration-300">
                                        <ArrowUpRight
                                            size={18}
                                            className="text-gray-300 group-hover:text-brand-500 transition-colors duration-300"
                                        />
                                    </div>
                                </div>

                                {/* Title */}
                                <h3 className="font-display text-xl md:text-2xl font-extrabold text-navy-900 leading-snug mb-4">
                                    {block.title}
                                </h3>

                                {/* Description */}
                                <p className="text-gray-500 text-[15px] leading-relaxed mb-6">
                                    {block.description}
                                </p>

                                {/* Highlights grid */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                    {block.highlights.map((item, i) => (
                                        <div
                                            key={i}
                                            className="flex items-center gap-2.5 px-3.5 py-2.5 bg-gray-50 rounded-lg group-hover:bg-brand-50/50 transition-colors duration-300"
                                        >
                                            <div
                                                className={`w-1.5 h-1.5 rounded-full bg-gradient-to-br ${block.accent} shrink-0`}
                                            />
                                            <span className="text-navy-800 text-sm font-medium">
                                                {item}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
