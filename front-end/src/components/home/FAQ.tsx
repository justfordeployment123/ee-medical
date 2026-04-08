import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

interface FAQContent {
  section_heading?: string;
  section_subtext?: string;
  panel_heading?: string;
  panel_text?: string;
    side_image?: string;
    side_image_alt?: string;
}

const faqData = [
    {
        question: "What types of medical devices do you provide regulatory consulting for?",
        answer: "We provide regulatory consulting for all classes of medical devices — Class I, II, and III — including in vitro diagnostics (IVDs), combination products, and AI/ML-based Software as a Medical Device (SaMD). Our expertise covers 510(k), De Novo, PMA, IDE, and international submissions including CE Mark and EU MDR.",
    },
    {
        question: "How long does the FDA 510(k) submission process typically take?",
        answer: "The FDA 510(k) review process typically takes 3-6 months from submission to clearance. However, preparation time varies based on device complexity. With our streamlined approach and 266+ successful submissions, we help optimize timelines by ensuring complete, high-quality submissions from the start.",
    },
    {
        question: "Do you offer services for pharmaceutical and biologic products?",
        answer: "Yes, we offer comprehensive regulatory services for pharmaceuticals and biologics including IND applications, NDA/ANDA submissions, Biologics License Applications (BLA), Drug Master Files (DMF), and CMC documentation. Our team supports the full product lifecycle from development through post-market compliance.",
    },
    {
        question: "Can you help with AI and machine learning medical device regulations?",
        answer: "Absolutely. We specialize in AI/ML regulatory pathways including FDA's framework for AI-enabled SaMD, Predetermined Change Control Plans (PCCP), AI-specific design controls, and QMSR compliance. Our team stays current with FDA's evolving guidance on artificial intelligence in medical devices.",
    },
    {
        question: "What is included in your ISO 13485 implementation service?",
        answer: "Our ISO 13485 implementation includes gap analysis, quality management system design, documentation development, process mapping, internal auditor training, management review setup, and certification audit preparation. We've completed 213+ implementations and provide ongoing support to maintain compliance.",
    },
    {
        question: "Do you provide international regulatory support beyond the US?",
        answer: "Yes, we have established partnerships across the EU, Asia, and North America. Our international services include CE Mark / EU MDR compliance, CCC Mark approval for China, MDSAP certification, and multi-market regulatory strategy. We support companies seeking simultaneous market access across multiple regions.",
    },
];

export const FAQ: React.FC<{ content?: FAQContent | null }> = ({ content }) => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="py-24 px-4 md:px-8 bg-slate-50">
            <div className="max-w-[1400px] mx-auto">
                <div className="grid lg:grid-cols-2 gap-16 items-start">
                    {/* Left: Image + Info */}
                    <div className="hidden lg:block sticky top-24">
                        <div className="relative rounded-2xl overflow-hidden group">
                            <img
                                src={content?.side_image || "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1400&auto=format&fit=crop"}
                                alt={content?.side_image_alt || "Medical device regulatory consulting"}
                                className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-navy-950/30 to-transparent" />
                            <div className="absolute bottom-0 left-0 right-0 p-8">
                                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 mb-4 backdrop-blur-sm">
                                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                                    <span className="text-white/90 text-xs font-semibold">Expert Support</span>
                                </div>
                                <h3 className="font-display text-2xl font-extrabold text-white mb-2">
                                    {content?.panel_heading || 'Have More Questions?'}
                                </h3>
                                <p className="text-gray-300 text-sm leading-relaxed mb-5">
                                    {content?.panel_text || 'Our team of 63 FDA regulatory experts is ready to answer your specific questions and guide you through the process.'}
                                </p>
                                <a
                                    href="mailto:info@eemedicals.com"
                                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-brand-500 hover:bg-brand-400 text-white font-semibold rounded-xl text-sm transition-all duration-300"
                                >
                                    Contact Our Experts
                                </a>
                            </div>
                        </div>
                        {/* Decorative */}
                        <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-2xl bg-brand-500/8 -z-10 border border-brand-200/30" />
                    </div>

                    {/* Right: FAQ Content */}
                    <div>
                        {/* Section Header */}
                        <div className="mb-10">
                            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-50 border border-brand-100 mb-6">
                                <span className="text-brand-600 text-sm font-semibold">
                                    FAQ
                                </span>
                            </div>
                            <h2 className="font-display text-3xl md:text-4xl lg:text-[2.75rem] font-extrabold text-navy-900 mb-5">
                                {content?.section_heading || 'Frequently Asked'} Questions
                            </h2>
                            <p className="text-gray-500 text-lg leading-relaxed">
                                {content?.section_subtext || 'Get answers to common questions about our regulatory consulting services and processes.'}
                            </p>
                        </div>

                {/* Accordion */}
                <div className="flex flex-col gap-3">
                    {faqData.map((item, index) => {
                        const isOpen = openIndex === index;
                        return (
                            <div
                                key={index}
                                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                                    isOpen
                                        ? "border-brand-200 bg-white shadow-lg shadow-brand-500/5"
                                        : "border-gray-200 bg-white hover:border-gray-300 hover:shadow-sm"
                                }`}
                            >
                                <button
                                    onClick={() =>
                                        setOpenIndex(isOpen ? null : index)
                                    }
                                    className="w-full flex items-center gap-4 px-6 py-5 text-left"
                                >
                                    {/* Number */}
                                    <span
                                        className={`text-xs font-bold w-7 h-7 rounded-lg flex items-center justify-center shrink-0 transition-all duration-300 ${
                                            isOpen
                                                ? "bg-brand-500 text-white"
                                                : "bg-slate-100 text-gray-400"
                                        }`}
                                    >
                                        {String(index + 1).padStart(2, "0")}
                                    </span>

                                    <span
                                        className={`flex-1 font-semibold text-[15px] transition-colors ${
                                            isOpen
                                                ? "text-brand-600"
                                                : "text-navy-900"
                                        }`}
                                    >
                                        {item.question}
                                    </span>

                                    <div
                                        className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${
                                            isOpen
                                                ? "bg-brand-500 text-white"
                                                : "bg-slate-100 text-gray-400"
                                        }`}
                                    >
                                        {isOpen ? (
                                            <Minus size={14} />
                                        ) : (
                                            <Plus size={14} />
                                        )}
                                    </div>
                                </button>
                                <div
                                    className={`overflow-hidden transition-all duration-300 ${
                                        isOpen
                                            ? "max-h-[300px] opacity-100"
                                            : "max-h-0 opacity-0"
                                    }`}
                                >
                                    <div className="px-6 pb-6 pl-[4.25rem]">
                                        <p className="text-gray-500 leading-relaxed text-[14px]">
                                            {item.answer}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
