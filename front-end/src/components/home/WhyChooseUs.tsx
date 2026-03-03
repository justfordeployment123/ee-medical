import React from "react";
import { CheckCircle, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const blocks = [
    {
        imageUrl:
            "https://images.unsplash.com/photo-1530497610245-94d3c16cda28?q=80&w=1400&auto=format&fit=crop",
        tagline: "Our Expertise",
        title: "32+ Years of FDA Regulatory Excellence",
        description:
            "With over three decades of experience navigating complex FDA regulatory pathways, we bring unmatched expertise to every project. Our team has successfully guided hundreds of medical device and pharmaceutical companies through the approval process.",
        points: [
            "266+ successful 510(k) submissions filed",
            "Expert team of 63 FDA regulatory professionals",
            "Proven track record across Class I, II & III devices",
            "Strategic regulatory intelligence and pathway analysis",
        ],
        linkTo: "/about",
        linkText: "About our experience",
        reverse: false,
    },
    {
        imageUrl:
            "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?q=80&w=1400&auto=format&fit=crop",
        tagline: "Global Reach",
        title: "Compliance Partners Across the Globe",
        description:
            "Well-established partnerships across the EU, Asia, and USA. Our customers consider us not just consultants, but strategic outsourcing partners who understand regional regulatory requirements.",
        points: [
            "Active partnerships across EU, Asia & North America",
            "CE Mark, EU MDR, and international compliance expertise",
            "213+ ISO 13485 implementations worldwide",
            "Multi-language regulatory document support",
        ],
        linkTo: "/ce-mark-approval",
        linkText: "Explore global services",
        reverse: true,
    },
];

export const WhyChooseUs: React.FC = () => {
    return (
        <section className="py-24 px-4 md:px-8 bg-slate-50 relative overflow-hidden">
            {/* Subtle background decoration */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-brand-100/30 blur-3xl -translate-y-1/2" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-brand-50/50 blur-3xl translate-y-1/2" />

            <div className="max-w-[1400px] mx-auto relative z-10">
                {/* Section Header */}
                <div className="text-center mb-20 max-w-3xl mx-auto">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-50 border border-brand-100 mb-6">
                        <span className="text-brand-600 text-sm font-semibold">
                            Why Choose Us
                        </span>
                    </div>
                    <h2 className="font-display text-3xl md:text-4xl lg:text-[2.75rem] font-extrabold text-navy-900 mb-5">
                        A Trusted Partner in{" "}
                        <span className="gradient-text">Healthcare Regulation</span>
                    </h2>
                    <p className="text-gray-500 text-lg leading-relaxed">
                        We combine deep regulatory expertise with a consultative approach
                        to help you achieve market access faster and with confidence.
                    </p>
                </div>

                {/* Halved Content Blocks */}
                <div className="flex flex-col gap-28">
                    {blocks.map((block, index) => (
                        <div
                            key={index}
                            className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center"
                        >
                            {/* Image */}
                            <div
                                className={`relative group ${
                                    block.reverse ? "lg:order-2" : ""
                                }`}
                            >
                                <div className="relative rounded-2xl overflow-hidden">
                                    {/* Gradient border effect */}
                                    <div className="absolute -inset-[1px] bg-gradient-to-br from-brand-400/40 via-brand-200/20 to-brand-500/40 rounded-2xl" />
                                    <div className="relative rounded-2xl overflow-hidden">
                                        <img
                                            src={block.imageUrl}
                                            alt={block.title}
                                            className="w-full aspect-[4/3] object-cover object-center transition-transform duration-700 group-hover:scale-105"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-navy-950/50 via-navy-950/10 to-transparent" />
                                    </div>
                                </div>
                                {/* Decorative elements */}
                                <div className="absolute -bottom-5 -right-5 w-28 h-28 rounded-2xl bg-brand-500/8 -z-10 border border-brand-200/30" />
                                <div className="absolute -top-5 -left-5 w-20 h-20 rounded-2xl bg-brand-500/5 -z-10 border border-brand-100/40" />
                                {/* Floating stat badge */}
                                <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm rounded-xl px-5 py-3 shadow-xl shadow-black/10 border border-white/80">
                                    <div className="text-2xl font-extrabold text-navy-900 font-display">
                                        {index === 0 ? "266+" : "213+"}
                                    </div>
                                    <div className="text-xs text-gray-500 font-semibold">
                                        {index === 0
                                            ? "510(k) Filed"
                                            : "ISO Implementations"}
                                    </div>
                                </div>
                            </div>

                            {/* Content */}
                            <div className={block.reverse ? "lg:order-1" : ""}>
                                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-500/10 border border-brand-500/20 mb-5">
                                    <div className="w-1.5 h-1.5 rounded-full bg-brand-400" />
                                    <span className="text-brand-600 text-xs font-bold uppercase tracking-wider">
                                        {block.tagline}
                                    </span>
                                </div>
                                <h3 className="font-display text-2xl md:text-[2rem] font-extrabold text-navy-900 mb-5 leading-tight">
                                    {block.title}
                                </h3>
                                <p className="text-gray-500 leading-relaxed mb-8 text-[15px]">
                                    {block.description}
                                </p>
                                <ul className="space-y-4 mb-10">
                                    {block.points.map((point, i) => (
                                        <li
                                            key={i}
                                            className="flex items-start gap-3"
                                        >
                                            <div className="w-6 h-6 rounded-full bg-brand-50 border border-brand-200 flex items-center justify-center shrink-0 mt-0.5">
                                                <CheckCircle
                                                    size={14}
                                                    className="text-brand-500"
                                                />
                                            </div>
                                            <span className="text-sm font-medium text-gray-700">
                                                {point}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                                <Link
                                    to={block.linkTo}
                                    className="inline-flex items-center gap-2.5 px-6 py-3 bg-navy-900 hover:bg-navy-800 text-white font-semibold rounded-xl transition-all duration-300 group/link text-sm shadow-lg shadow-navy-900/20"
                                >
                                    {block.linkText}
                                    <ArrowRight
                                        size={15}
                                        className="group-hover/link:translate-x-1 transition-transform"
                                    />
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
