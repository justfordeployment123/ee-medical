import React from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import type { ServiceType } from "../../types";

const servicesData: ServiceType[] = [
    {
        id: "1",
        title: "Reliability",
        description: "Design reviews to spot compliance obstacles. Our reliability experts create test plans ensuring your device meets real-world expectations.",
        link: "/reliability",
        imageUrl: "https://images.unsplash.com/photo-1530497610245-94d3c16cda28?q=80&w=800&auto=format&fit=crop",
    },
    {
        id: "2",
        title: "FDA Application",
        description: "Expert submission of regulatory documents for Class I, II, III medical devices for U.S. and international clients.",
        link: "/fda-510k-application",
        imageUrl: "https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?q=80&w=800&auto=format&fit=crop",
    },
    {
        id: "3",
        title: "Six Sigma Healthcare",
        description: "A unique Six Sigma program designed for the Healthcare industry based on the DMAIC model, fully customized to your challenges.",
        link: "/six-sigma-healthcare",
        imageUrl: "https://images.unsplash.com/photo-1551076805-e1869033e561?q=80&w=800&auto=format&fit=crop",
    },
    {
        id: "4",
        title: "Quality System Regulation",
        description: "Guidance through electronic establishment registration and medical device listing using the FURLS platform.",
        link: "/quality-system-regulation-qsr",
        imageUrl: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?q=80&w=800&auto=format&fit=crop",
    },
    {
        id: "5",
        title: "EU MDR Technical Docs",
        description: "Review of device design, risk analysis, clinical evaluation, testing reports, post-market surveillance, and labeling.",
        link: "/ce-mark-approval",
        imageUrl: "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?q=80&w=800&auto=format&fit=crop",
    },
    {
        id: "6",
        title: "QMS Implementation",
        description: "Design and implement smart Quality Management Systems that streamline your business demands and FDA approval.",
        link: "/quality-management-system-implementation",
        imageUrl: "https://images.unsplash.com/photo-1576671081837-49000212a370?q=80&w=800&auto=format&fit=crop",
    },
    {
        id: "7",
        title: "FDA 483 Observations",
        description: "Expert response to FDA 483 Observations and Warning Letters through comprehensive corrective action plans.",
        link: "/fda-483-observations-warning-letters-recalls-remediation",
        imageUrl: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=800&auto=format&fit=crop",
    },
    {
        id: "8",
        title: "ISO 13485 Medical Quality",
        description: "End-to-end ISO 13485 compliance processes addressing FDA requirements (21CFR820) for medical devices.",
        link: "/iso-13485-medical-quality-system-registration",
        imageUrl: "https://images.unsplash.com/photo-1631549916768-4119b2e5f926?q=80&w=800&auto=format&fit=crop",
    },
    {
        id: "9",
        title: "FDA United States Agent",
        description: "Representation as US Agent for foreign medical device, IVD, and pharmaceutical companies requiring FDA registration.",
        link: "/fda-usa-agents-for-foreign-establishments",
        imageUrl: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=800&auto=format&fit=crop",
    },
];

export const Services: React.FC = () => {
    return (
        <section className="py-24 px-4 md:px-8 bg-slate-50">
            <div className="max-w-[1400px] mx-auto">
                {/* Section Header */}
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-50 border border-brand-100 mb-6">
                        <span className="text-brand-600 text-sm font-semibold">Our Expertise</span>
                    </div>
                    <h2 className="font-display text-3xl md:text-4xl lg:text-[2.75rem] font-extrabold text-navy-900 mb-5">
                        Comprehensive Regulatory{" "}
                        <span className="gradient-text">Services</span>
                    </h2>
                    <p className="text-gray-500 text-lg leading-relaxed">
                        From FDA submissions to ISO implementations, we provide end-to-end regulatory consulting for medical device and pharmaceutical companies worldwide.
                    </p>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
                    {servicesData.map((service, index) => (
                        <Link
                            key={service.id}
                            to={service.link}
                            className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl border border-gray-100 hover:border-brand-200 transition-all duration-500 flex flex-col"
                            style={{ animationDelay: `${index * 80}ms` }}
                        >
                            {/* Image */}
                            <div className="relative w-full aspect-[16/10] overflow-hidden">
                                <img
                                    src={service.imageUrl}
                                    alt={service.title}
                                    className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                <div className="absolute top-3 right-3 w-9 h-9 rounded-full bg-white/90 flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 shadow-lg">
                                    <ArrowRight size={14} className="text-brand-500" />
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6 flex flex-col grow">
                                <h3 className="text-lg font-bold text-navy-900 mb-2 group-hover:text-brand-600 transition-colors duration-300 font-display">
                                    {service.title}
                                </h3>
                                <p className="text-gray-500 text-sm leading-relaxed grow mb-4">
                                    {service.description}
                                </p>
                                <div className="flex items-center gap-1.5 text-brand-500 font-semibold text-sm">
                                    <span>Learn more</span>
                                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};
