import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
    ArrowRight,
    ShieldCheck,
    Briefcase,
    ClipboardCheck,
    Settings,
    Heart,
    Globe,
    FileText,
    Building2,
    MapPin,
    Target,
    Cpu,
    Lightbulb,
    Handshake,
    CheckCircle,
    ShieldAlert,
    Brain,
    Microscope,
    FlaskConical,
    Stethoscope,
    type LucideIcon,
} from "lucide-react";

interface ServiceItem {
    to: string;
    icon: LucideIcon;
    title: string;
    description: string;
}

interface TabCategory {
    id: string;
    label: string;
    icon: LucideIcon;
    description: string;
    imageUrl: string;
    services: ServiceItem[];
}

const categories: TabCategory[] = [
    {
        id: "quality",
        label: "Quality & Compliance",
        icon: ShieldCheck,
        description:
            "Comprehensive quality management and compliance solutions for healthcare organizations and medical device manufacturers.",
        imageUrl: "https://images.unsplash.com/photo-1631549916768-4119b2e5f926?q=80&w=1400&auto=format&fit=crop",
        services: [
            {
                to: "/reliability",
                icon: Handshake,
                title: "Reliability Testing",
                description:
                    "Design reviews to spot compliance obstacles. Our reliability experts create test plans ensuring your device meets real-world expectations.",
            },
            {
                to: "/six-sigma-healthcare",
                icon: Lightbulb,
                title: "Six Sigma Healthcare",
                description:
                    "A unique Six Sigma program designed for the Healthcare industry based on the DMAIC model, fully customized to your challenges.",
            },
            {
                to: "/medical-devices-quality-assurance",
                icon: Briefcase,
                title: "Medical Devices QA",
                description:
                    "Comprehensive quality assurance services for medical device manufacturers ensuring product safety and regulatory compliance.",
            },
            {
                to: "/quality-assurance-audits",
                icon: ClipboardCheck,
                title: "Quality Audits",
                description:
                    "Internal and external audit programs to identify gaps, ensure compliance, and drive continuous quality improvement.",
            },
            {
                to: "/quality-system-regulation-qsr",
                icon: Cpu,
                title: "Quality System Regulation",
                description:
                    "Guidance through electronic establishment registration and medical device listing using the FURLS platform.",
            },
            {
                to: "/quality-management-system-implementation",
                icon: ShieldCheck,
                title: "QMS Implementation",
                description:
                    "Design and implement smart Quality Management Systems that streamline your business demands and FDA approval.",
            },
        ],
    },
    {
        id: "regulatory",
        label: "Regulatory Operations",
        icon: Globe,
        description:
            "End-to-end regulatory affairs support for market approval, device registration, and compliance across global markets.",
        imageUrl: "https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?q=80&w=1400&auto=format&fit=crop",
        services: [
            {
                to: "/ccc-mark-approval",
                icon: Globe,
                title: "CCC Mark Approval",
                description:
                    "Navigate the China Compulsory Certificate (CCC) process for medical devices entering the Chinese market.",
            },
            {
                to: "/ce-mark-approval",
                icon: Globe,
                title: "CE Mark / EU MDR",
                description:
                    "Review of device design, risk analysis, clinical evaluation, testing reports, post-market surveillance, and labeling.",
            },
            {
                to: "/clinical-data-and-postmarket-compliance-under-the-mdr",
                icon: FileText,
                title: "Post-market Compliance",
                description:
                    "Clinical data management and post-market surveillance compliance under the Medical Device Regulation framework.",
            },
            {
                to: "/fda-483-observations-warning-letters-recalls-remediation",
                icon: ShieldAlert,
                title: "FDA 483 / Warning Letters",
                description:
                    "Expert response to FDA 483 Observations and Warning Letters through comprehensive corrective action plans.",
            },
            {
                to: "/pre-ide-process",
                icon: Settings,
                title: "Investigational Device Exemption",
                description:
                    "Pre-IDE submissions and strategy for clinical trials involving investigational medical devices.",
            },
            {
                to: "/fda-510k-application",
                icon: Heart,
                title: "510(k), De Novo, PMA",
                description:
                    "Expert submission of regulatory documents for Class I, II, III medical devices for U.S. and international clients.",
            },
            {
                to: "/fda-establishment-registration",
                icon: Building2,
                title: "Establishment Registration",
                description:
                    "FDA establishment registration and device listing for domestic and foreign medical device manufacturers.",
            },
            {
                to: "/fda-usa-agents-for-foreign-establishments",
                icon: MapPin,
                title: "US Agent Services",
                description:
                    "Representation as US Agent for foreign medical device, IVD, and pharmaceutical companies requiring FDA registration.",
            },
        ],
    },
    {
        id: "drugs",
        label: "Drugs & Biologics",
        icon: FlaskConical,
        description:
            "Regulatory submissions and pharmacovigilance services for pharmaceutical and biologic product development.",
        imageUrl: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?q=80&w=1400&auto=format&fit=crop",
        services: [
            {
                to: "/investigational-new-drug-ind-application",
                icon: FlaskConical,
                title: "IND Application",
                description:
                    "Investigational New Drug application preparation and submission for clinical trial authorization.",
            },
            {
                to: "/new-drug-application-overview",
                icon: Target,
                title: "New Drug Application (NDA)",
                description:
                    "Comprehensive NDA preparation including clinical, nonclinical, and manufacturing data compilation.",
            },
            {
                to: "/abbreviated-new-drug-application-anda-submissions-overview",
                icon: Target,
                title: "ANDA Submissions",
                description:
                    "Abbreviated New Drug Application submissions for generic pharmaceutical products seeking FDA approval.",
            },
            {
                to: "/biologics-license-application-bla-overview",
                icon: Microscope,
                title: "Biologics License (BLA)",
                description:
                    "Biologics License Application preparation for vaccines, blood products, and therapeutic biologics.",
            },
            {
                to: "/dmf",
                icon: FileText,
                title: "Drug Master File (DMF)",
                description:
                    "Drug Master File submissions providing confidential manufacturing and quality information to the FDA.",
            },
            {
                to: "/cmc",
                icon: Stethoscope,
                title: "CMC Services",
                description:
                    "Chemistry, Manufacturing, and Controls documentation for drug substance and drug product regulatory filings.",
            },
        ],
    },
    {
        id: "ai",
        label: "AI-Enabled Regulatory",
        icon: Brain,
        description:
            "Cutting-edge AI/ML regulatory pathways for software as a medical device and intelligent health technologies.",
        imageUrl: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=1400&auto=format&fit=crop",
        services: [
            {
                to: "/ai-samd-pathway",
                icon: Brain,
                title: "AI SaMD Regulatory Pathway",
                description:
                    "Navigate the FDA regulatory pathway for AI/ML-based Software as a Medical Device (SaMD) products.",
            },
            {
                to: "/ai-fda-readiness",
                icon: CheckCircle,
                title: "AI FDA Readiness & Risk Audit",
                description:
                    "Comprehensive readiness assessment and risk audit for AI-enabled medical devices seeking FDA clearance.",
            },
            {
                to: "/pccp-authoring",
                icon: FileText,
                title: "PCCP Authoring",
                description:
                    "Predetermined Change Control Plan authoring for AI/ML medical devices with adaptive algorithms.",
            },
            {
                to: "/ai-design-controls",
                icon: Settings,
                title: "AI Design Controls & QMSR",
                description:
                    "Design controls and Quality Management System Regulation compliance for AI-powered medical devices.",
            },
            {
                to: "/fda-defense",
                icon: ShieldCheck,
                title: "FDA Interaction & Defense",
                description:
                    "Strategic FDA communication, pre-submission meetings, and defense preparation for regulatory decisions.",
            },
        ],
    },
    {
        id: "iso",
        label: "ISO Standards",
        icon: CheckCircle,
        description:
            "International standards implementation and certification support for medical device quality management systems.",
        imageUrl: "https://images.unsplash.com/photo-1581093588401-fbb62a02f120?q=80&w=1400&auto=format&fit=crop",
        services: [
            {
                to: "/iso-13485-medical-quality-system-registration",
                icon: CheckCircle,
                title: "ISO 13485 Quality System",
                description:
                    "End-to-end ISO 13485 compliance processes addressing FDA requirements (21CFR820) for medical devices.",
            },
            {
                to: "/iso-14971-medical-device-risk-management-for-medical-devices",
                icon: ShieldAlert,
                title: "ISO 14971 Risk Management",
                description:
                    "Medical device risk management implementation following ISO 14971 framework and best practices.",
            },
            {
                to: "/quality-management-system-implementation",
                icon: ShieldCheck,
                title: "ISO 9001 Quality Management",
                description:
                    "ISO 9001 quality management system design and implementation for healthcare organizations.",
            },
            {
                to: "/free-iso-13485-2016-gap-analysis-tool",
                icon: Target,
                title: "Free ISO 13485 Gap Analysis",
                description:
                    "Complimentary gap analysis tool to evaluate your current quality system against ISO 13485:2016 requirements.",
            },
        ],
    },
];

export const ServicesTabs: React.FC = () => {
    const [activeTab, setActiveTab] = useState("quality");

    const activeCategory = categories.find((c) => c.id === activeTab)!;

    return (
        <section className="py-24 px-4 md:px-8 bg-white">
            <div className="max-w-[1400px] mx-auto">
                {/* Section Header */}
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-50 border border-brand-100 mb-6">
                        <span className="text-brand-600 text-sm font-semibold">
                            Our Solutions
                        </span>
                    </div>
                    <h2 className="font-display text-3xl md:text-4xl lg:text-[2.75rem] font-extrabold text-navy-900 mb-5">
                        Comprehensive Healthcare{" "}
                        <span className="gradient-text">Solutions</span>
                    </h2>
                    <p className="text-gray-500 text-lg leading-relaxed">
                        From FDA submissions to ISO implementations, explore our
                        full range of regulatory consulting services organized by
                        specialty.
                    </p>
                </div>

                {/* Tabs + Content Layout */}
                <div className="grid lg:grid-cols-[280px_1fr] gap-8">
                    {/* Left: Tab Navigation */}
                    <div className="flex lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0 scrollbar-hide">
                        {categories.map((cat) => {
                            const isActive = activeTab === cat.id;
                            return (
                                <button
                                    key={cat.id}
                                    onClick={() => setActiveTab(cat.id)}
                                    className={`flex items-center gap-3 px-5 py-4 rounded-xl text-left text-sm font-semibold transition-all duration-300 whitespace-nowrap lg:whitespace-normal min-w-fit lg:min-w-0 ${
                                        isActive
                                            ? "bg-brand-500 text-white shadow-lg shadow-brand-500/25"
                                            : "bg-slate-50 text-gray-600 hover:bg-slate-100 hover:text-navy-900"
                                    }`}
                                >
                                    <div
                                        className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 transition-all duration-300 ${
                                            isActive
                                                ? "bg-white/20"
                                                : "bg-white"
                                        }`}
                                    >
                                        <cat.icon
                                            size={18}
                                            className={
                                                isActive
                                                    ? "text-white"
                                                    : "text-brand-500"
                                            }
                                        />
                                    </div>
                                    <div className="flex flex-col">
                                        <span>{cat.label}</span>
                                        <span
                                            className={`text-[11px] font-normal hidden lg:block ${
                                                isActive
                                                    ? "text-white/70"
                                                    : "text-gray-400"
                                            }`}
                                        >
                                            {cat.services.length} services
                                        </span>
                                    </div>
                                </button>
                            );
                        })}
                    </div>

                    {/* Right: Content Area */}
                    <div>
                        {/* Category Featured Image */}
                        <div key={`img-${activeTab}`} className="relative rounded-xl overflow-hidden mb-6 group animate-fade-in h-[130px] max-h-[130px]">
                            <img
                                src={activeCategory.imageUrl}
                                alt={activeCategory.label}
                                className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-[1.02]"
                            />
                            <div className="absolute inset-0 bg-gradient-to-r from-navy-950/80 via-navy-900/60 to-transparent" />
                            <div className="absolute inset-0 flex flex-col justify-center px-8">
                                <h3 className="font-display text-2xl font-extrabold text-white mb-2">
                                    {activeCategory.label}
                                </h3>
                                <p className="text-gray-300 text-sm leading-relaxed max-w-lg">
                                    {activeCategory.description}
                                </p>
                            </div>
                        </div>

                        {/* Service Cards Grid */}
                        <div
                            key={activeTab}
                            className="grid grid-cols-1 md:grid-cols-2 gap-4 animate-fade-in"
                        >
                            {activeCategory.services.map((service, index) => (
                                <Link
                                    key={service.to}
                                    to={service.to}
                                    className="group flex gap-5 p-5 rounded-xl bg-slate-50 hover:bg-white border border-transparent hover:border-brand-200 hover:shadow-lg hover:shadow-brand-500/5 transition-all duration-400"
                                    style={{
                                        animationDelay: `${index * 50}ms`,
                                    }}
                                >
                                    {/* Number + Icon */}
                                    <div className="shrink-0">
                                        <div className="w-12 h-12 rounded-xl bg-white group-hover:bg-brand-500 border border-gray-200 group-hover:border-brand-500 flex items-center justify-center transition-all duration-400 shadow-sm group-hover:shadow-lg group-hover:shadow-brand-500/20">
                                            <service.icon
                                                size={20}
                                                className="text-brand-500 group-hover:text-white transition-colors duration-400"
                                            />
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="flex-1 min-w-0">
                                        <div className="flex items-center gap-2 mb-1.5">
                                            <h4 className="font-bold text-navy-900 group-hover:text-brand-600 transition-colors duration-300 font-display text-[15px]">
                                                {service.title}
                                            </h4>
                                            <ArrowRight
                                                size={14}
                                                className="text-brand-400 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 shrink-0"
                                            />
                                        </div>
                                        <p className="text-gray-500 text-[13px] leading-relaxed line-clamp-2">
                                            {service.description}
                                        </p>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
