import React from "react";
import { Link } from "react-router-dom";
import {
    CheckCircle,
    ArrowRight,
    Award,
    Users,
    Briefcase,
    ShieldCheck,
    Target,
    Globe,
} from "lucide-react";

interface AboutMainContent {
  heading?: string;
  paragraph1?: string;
  paragraph2?: string;
  check1?: string;
  check2?: string;
  check3?: string;
  stat1_value?: string;
  stat1_label?: string;
  stat2_value?: string;
  stat2_label?: string;
  stat3_value?: string;
  stat3_label?: string;
  cap1_title?: string;
  cap1_text?: string;
  cap2_title?: string;
  cap2_text?: string;
  cap3_title?: string;
  cap3_text?: string;
  team_photo?: string;
  team_photo_alt?: string;
}

export const AboutContent: React.FC<{ content?: AboutMainContent | null }> = ({ content }) => {
    const stats = [
        { icon: Award,    value: content?.stat1_value || '32+',  label: content?.stat1_label || 'Years Experience' },
        { icon: Briefcase,value: content?.stat2_value || '470+', label: content?.stat2_label || 'Projects Completed' },
        { icon: Users,    value: content?.stat3_value || '63',   label: content?.stat3_label || 'Expert Consultants' },
    ];

    const capabilities = [
        {
            icon: ShieldCheck,
            title: content?.cap1_title || 'FDA & Global Compliance',
            text: content?.cap1_text || 'Proven track record with FDA, CE marking, and international regulatory bodies across 40+ countries.',
        },
        {
            icon: Target,
            title: content?.cap2_title || 'Quality Management Systems',
            text: content?.cap2_text || 'Customized QMS implementation including ISO 13485, ISO 9001, and QMSR compliance.',
        },
        {
            icon: Globe,
            title: content?.cap3_title || 'Post-Market Surveillance',
            text: content?.cap3_text || 'Dedicated support for clinical data management and post-market compliance under MDR/IVDR.',
        },
    ];

    const checkItems = [
        content?.check1 || 'End-to-end 510(k), PMA, and De Novo submissions.',
        content?.check2 || 'ISO 13485, ISO 14971, and QMSR implementation.',
        content?.check3 || 'CE marking, EU MDR/IVDR, and global market access.',
    ];

    return (
        <section className="py-20 md:py-28 px-4 md:px-8 bg-white">
            <div className="max-w-[1400px] mx-auto">
                {/* Top: Image + Intro */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    {/* Left: Image with overlay stats */}
                    <div className="relative">
                        {/* Background accent */}
                        <div className="absolute -inset-3 bg-gradient-to-br from-brand-100/60 to-brand-50/30 rounded-3xl -z-10" />

                        <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-navy-950/10">
                            <img
                                src={content?.team_photo || "https://images.unsplash.com/photo-1551076805-e1869033e561?q=80&w=1200&auto=format&fit=crop"}
                                alt={content?.team_photo_alt || "Medical device regulatory consulting team"}
                                className="w-full h-auto object-cover object-center"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-navy-950/30 via-transparent to-transparent" />
                        </div>

                        {/* Floating stats bar */}
                        <div className="absolute -bottom-8 left-4 right-4 md:left-6 md:right-6 bg-white rounded-2xl shadow-xl shadow-navy-950/8 border border-gray-100/80 p-4 md:p-5">
                            <div className="grid grid-cols-3 divide-x divide-gray-100">
                                {stats.map(({ icon: Icon, value, label }) => (
                                    <div key={label} className="text-center px-2">
                                        <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-brand-50 to-brand-100 flex items-center justify-center mx-auto mb-2">
                                            <Icon size={16} className="text-brand-500" />
                                        </div>
                                        <div className="text-xl md:text-2xl font-extrabold text-navy-900 font-display leading-none">
                                            {value}
                                        </div>
                                        <div className="text-[10px] md:text-[11px] text-gray-500 font-semibold uppercase tracking-wide mt-0.5">
                                            {label}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right: Content */}
                    <div className="lg:pl-4 pt-8 lg:pt-0">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-50 border border-brand-100 mb-6">
                            <span className="w-1.5 h-1.5 rounded-full bg-brand-400 animate-pulse" />
                            <span className="text-brand-600 text-xs font-bold uppercase tracking-wider">
                                About Us
                            </span>
                        </div>

                        <h2 className="font-display text-3xl md:text-4xl lg:text-[2.75rem] font-extrabold text-navy-900 mb-6 leading-[1.15]">
                            {content?.heading || (
                                <>Your trusted partners in{" "}<span className="gradient-text">Regulatory Compliance</span>{" "}& Quality Assurance.</>
                            )}
                        </h2>

                        <p className="text-gray-600 text-lg leading-relaxed mb-5">
                            {content?.paragraph1 || 'E&E Medicals & Consulting is a premier regulatory affairs consulting firm dedicated to helping medical device, IVD, and pharmaceutical companies navigate the complex landscape of FDA and international regulations.'}
                        </p>

                        <p className="text-gray-500 leading-relaxed text-[15px] mb-8">
                            {content?.paragraph2 || 'With over 32 years of combined experience, our experts provide strategic guidance, gap analysis, and hands-on implementation support to ensure your products reach the market safely and efficiently.'}
                        </p>

                        {/* Checkmark list */}
                        <ul className="space-y-3.5 mb-10">
                            {checkItems.map((item, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <div className="w-5 h-5 rounded-full bg-green-50 border border-green-200 flex items-center justify-center shrink-0 mt-0.5">
                                        <CheckCircle size={12} className="text-green-500" />
                                    </div>
                                    <span className="text-gray-700 font-medium text-[15px]">
                                        {item}
                                    </span>
                                </li>
                            ))}
                        </ul>

                        <Link
                            to="/about"
                            className="group inline-flex items-center gap-2.5 px-7 py-3.5 bg-navy-900 hover:bg-navy-800 text-white font-bold rounded-xl shadow-lg shadow-navy-950/15 hover:shadow-navy-950/25 transition-all duration-300 hover:-translate-y-0.5"
                        >
                            Discover More
                            <ArrowRight
                                size={16}
                                className="group-hover:translate-x-1 transition-transform"
                            />
                        </Link>
                    </div>
                </div>

                {/* Bottom: Capability Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-24 lg:mt-28">
                    {capabilities.map(({ icon: Icon, title, text }, i) => (
                        <div
                            key={i}
                            className="group relative bg-white border border-gray-100 rounded-2xl p-7 hover:shadow-xl hover:shadow-navy-950/5 hover:border-brand-100 transition-all duration-300 hover:-translate-y-1"
                        >
                            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-50 to-brand-100 flex items-center justify-center mb-5 group-hover:from-brand-100 group-hover:to-brand-200 transition-colors duration-300">
                                <Icon size={22} className="text-brand-500" />
                            </div>
                            <h3 className="font-display text-lg font-bold text-navy-900 mb-2.5">
                                {title}
                            </h3>
                            <p className="text-gray-500 text-sm leading-relaxed">{text}</p>
                            <div className="absolute bottom-0 left-7 right-7 h-0.5 bg-gradient-to-r from-brand-400 to-brand-500 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
