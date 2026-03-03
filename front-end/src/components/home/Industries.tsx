import React from "react";
import { Link } from "react-router-dom";
import {
    Heart,
    Pill,
    Microscope,
    Smartphone,
    FlaskConical,
    Brain,
    ArrowRight,
} from "lucide-react";

const industries = [
    {
        icon: Heart,
        title: "Medical Devices",
        description: "Class I, II & III device regulatory submissions, quality systems, and post-market compliance.",
        link: "/fda-510k-application",
        color: "from-rose-500 to-pink-600",
        imageUrl: "https://images.unsplash.com/photo-1530497610245-94d3c16cda28?q=80&w=1200&auto=format&fit=crop",
    },
    {
        icon: Pill,
        title: "Pharmaceuticals",
        description: "IND, NDA, ANDA, and DMF submissions with CMC documentation support for drug products.",
        link: "/new-drug-application-overview",
        color: "from-violet-500 to-purple-600",
        imageUrl: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?q=80&w=1200&auto=format&fit=crop",
    },
    {
        icon: FlaskConical,
        title: "Biotechnology",
        description: "Biologics license applications, biosimilar pathways, and advanced therapy regulatory strategy.",
        link: "/biologics-license-application-bla-overview",
        color: "from-emerald-500 to-teal-600",
        imageUrl: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?q=80&w=1200&auto=format&fit=crop",
    },
    {
        icon: Smartphone,
        title: "Digital Health",
        description: "Software as a Medical Device (SaMD), mobile health apps, and digital therapeutics clearance.",
        link: "/ai-samd-pathway",
        color: "from-brand-500 to-cyan-600",
        imageUrl: "https://images.unsplash.com/photo-1576671081837-49000212a370?q=80&w=1200&auto=format&fit=crop",
    },
    {
        icon: Microscope,
        title: "In Vitro Diagnostics",
        description: "IVD regulatory strategy, 510(k) and De Novo submissions, and IVDR compliance for EU markets.",
        link: "/fda-510k-application",
        color: "from-amber-500 to-orange-600",
        imageUrl: "https://images.unsplash.com/photo-1579154204601-01588f351e67?q=80&w=1200&auto=format&fit=crop",
    },
    {
        icon: Brain,
        title: "AI / Machine Learning",
        description: "AI-enabled medical device pathways, PCCP authoring, and predetermined change control plans.",
        link: "/ai-samd-pathway",
        color: "from-brand-500 to-brand-700",
        imageUrl: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=1200&auto=format&fit=crop",
    },
];

export const Industries: React.FC = () => {
    return (
        <section className="relative py-24 px-4 md:px-8 overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0">
                <img
                    src="https://images.unsplash.com/photo-1581093588401-fbb62a02f120?q=80&w=2000&auto=format&fit=crop"
                    alt=""
                    className="w-full h-full object-cover"
                />
            </div>
            {/* Light Overlay */}
            <div className="absolute inset-0 bg-white/[0.94]" />

            <div className="max-w-[1400px] mx-auto relative z-10">
                {/* Section Header */}
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-50 border border-brand-100 mb-6">
                        <span className="text-brand-600 text-sm font-semibold">
                            Industries
                        </span>
                    </div>
                    <h2 className="font-display text-3xl md:text-4xl lg:text-[2.75rem] font-extrabold text-navy-900 mb-5">
                        Industries We{" "}
                        <span className="gradient-text">Serve</span>
                    </h2>
                    <p className="text-gray-500 text-lg leading-relaxed">
                        Specialized regulatory expertise across the full spectrum of
                        healthcare and life sciences sectors.
                    </p>
                </div>

                {/* Industry Cards with Images */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {industries.map((industry, index) => (
                        <Link
                            key={index}
                            to={industry.link}
                            className="group relative rounded-2xl overflow-hidden h-[280px] shadow-lg hover:shadow-2xl transition-all duration-500"
                        >
                            {/* Background Image */}
                            <img
                                src={industry.imageUrl}
                                alt={industry.title}
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            {/* Gradient Overlay */}
                            <div className={`absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-900/50 to-transparent group-hover:from-navy-950/95 transition-all duration-500`} />
                            {/* Color accent on hover */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${industry.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />

                            {/* Content */}
                            <div className="absolute inset-0 flex flex-col justify-end p-7">
                                <div className="flex items-center gap-3 mb-3">
                                    <div className="w-11 h-11 rounded-xl bg-white/15 backdrop-blur-sm border border-white/20 flex items-center justify-center group-hover:bg-white/25 transition-all duration-500">
                                        <industry.icon
                                            size={20}
                                            className="text-white"
                                        />
                                    </div>
                                    <h3 className="font-display text-lg font-bold text-white flex items-center gap-2">
                                        {industry.title}
                                        <ArrowRight
                                            size={15}
                                            className="text-white/50 group-hover:text-white group-hover:translate-x-1 transition-all duration-300"
                                        />
                                    </h3>
                                </div>
                                <p className="text-gray-300 text-sm leading-relaxed opacity-0 group-hover:opacity-100 translate-y-3 group-hover:translate-y-0 transition-all duration-500">
                                    {industry.description}
                                </p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};
