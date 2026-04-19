import React from "react";
import { PageHeader } from "../components/shared/PageHeader";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Link } from "react-router-dom";
import { PageMeta } from "../components/shared/PageMeta";
import { useContent } from "../hooks/useContent";
import {
    InnerContent,
    SectionHeading,
    FeatureList,
    BulletList,
    Section,
    InfoBox,
    PageCTA,
    StatStrip,
} from "../components/shared/InnerPage";

const complianceServices = [
    "<strong>FDA 21 CFR Part 820 (QSR/QMSR):</strong> Design controls, production and process controls, CAPA, complaint handling, and records management aligned to current FDA expectations.",
    "<strong>ISO 13485:2016 Compliance:</strong> Gap assessments, QMS documentation, internal audit support, and management review facilitation to meet certification requirements.",
    "<strong>EU MDR / IVDR Compliance:</strong> Technical documentation review, post-market surveillance planning, clinical evaluation support, and Notified Body interaction.",
    "<strong>21 CFR Part 11 Electronic Records:</strong> Validation of electronic records and signatures systems to meet FDA software compliance requirements.",
    "<strong>Supplier & Vendor Compliance:</strong> Supplier qualification programs, approved vendor lists, and ongoing supplier audit and monitoring frameworks.",
    "<strong>Labeling & UDI Compliance:</strong> FDA labeling review, UDI implementation, and GUDID registration support for medical devices.",
];

const regulatoryFrameworks = [
    "FDA 21 CFR Part 820 — Quality System Regulation (QSR) / QMSR",
    "FDA 21 CFR Part 11 — Electronic Records and Signatures",
    "ISO 13485:2016 — Medical Device Quality Management Systems",
    "EU MDR 2017/745 & IVDR 2017/746",
    "ISO 14971:2019 — Risk Management for Medical Devices",
    "IEC 62304 — Software Lifecycle for Medical Devices",
    "21 CFR Parts 210 & 211 — Pharmaceutical GMPs",
    "MDSAP — Medical Device Single Audit Program",
];

const approachSteps = [
    "<strong>Current State Assessment:</strong> We review your existing QMS, procedures, and compliance posture against applicable regulations and identify gaps.",
    "<strong>Gap Analysis Report:</strong> A detailed findings report prioritizing issues by risk level with clear remediation recommendations.",
    "<strong>Remediation Planning:</strong> We build a structured corrective action plan with timelines, owners, and measurable milestones.",
    "<strong>Documentation & Implementation:</strong> Our team drafts, revises, or restructures SOPs, work instructions, forms, and records to close compliance gaps.",
    "<strong>Training & Change Management:</strong> Staff training on updated procedures and regulatory requirements to ensure sustained compliance.",
    "<strong>Ongoing Monitoring:</strong> Periodic compliance reviews, internal audit programs, and management review support to maintain readiness.",
];

export const FdaComplianceConsulting: React.FC = () => {
    const content = useContent('fda_compliance');
    const header = content?.header;
    const intro = content?.intro;
    const cta = content?.cta;

    return (
        <div className="w-full bg-white font-sans flex flex-col min-h-screen">
            <PageMeta
                title="FDA Compliance Consulting for Medical Device Manufacturers"
                description="FDA compliance consulting — 21 CFR Part 820, ISO 13485, EU MDR, and QMS gap assessments for medical device manufacturers. Expert regulatory compliance support from E&E Medicals."
            />
            <Header />

            <main className="grow">
                <PageHeader
                    title="FDA Compliance Consulting"
                    breadcrumb="FDA Compliance Consulting"
                />

                <InnerContent>
                    <Section>
                        <SectionHeading
                            badge={header?.badge_text || "Regulatory Compliance"}
                            title={header?.title || "FDA Compliance Consulting for Medical Device Companies"}
                            subtitle={header?.subtitle || "E&E Medicals helps medical device manufacturers build, remediate, and sustain FDA-compliant quality systems — from initial gap assessment through full regulatory readiness."}
                        />
                        <div className="space-y-5 text-gray-700 leading-relaxed">
                            <p>{intro?.paragraph1 || "Navigating FDA compliance requirements is complex and constantly evolving. Whether you are preparing for your first FDA inspection, responding to a 483 observation, or rebuilding a QMS after a warning letter, E&E Medicals provides the regulatory expertise to get you back on track quickly and efficiently."}</p>
                            <InfoBox variant="brand">
                                <p className="text-sm md:text-base">
                                    Our consultants have direct experience with <strong className="text-navy-900">FDA inspections, CAPA remediation, and QMS restructuring</strong> across Class I, II, and III medical device manufacturers worldwide.
                                </p>
                            </InfoBox>
                            <p>{intro?.paragraph2 || "We work as an extension of your team — assessing your current compliance posture, identifying gaps against 21 CFR Part 820, ISO 13485, or EU MDR requirements, and implementing sustainable corrective actions that stand up to regulatory scrutiny."}</p>
                        </div>
                    </Section>

                    <StatStrip
                        stats={[
                            { value: "266+", label: "510(k) Submissions Filed" },
                            { value: "213+", label: "ISO 13485 Implementations" },
                            { value: "32+", label: "Years of FDA Experience" },
                            { value: "Global", label: "US, EU & International Clients" },
                        ]}
                    />

                    <Section>
                        <SectionHeading
                            badge="Our Services"
                            title="FDA Compliance Services We Provide"
                        />
                        <FeatureList items={complianceServices} columns={2} />
                    </Section>

                    <Section>
                        <SectionHeading
                            badge="Regulatory Frameworks"
                            title="Regulations & Standards We Cover"
                        />
                        <BulletList items={regulatoryFrameworks} columns={2} />
                    </Section>

                    <Section>
                        <SectionHeading
                            badge="Our Approach"
                            title="How We Deliver Compliance"
                            subtitle="A structured, risk-based methodology that addresses your most critical compliance gaps first and builds long-term regulatory resilience."
                        />
                        <FeatureList items={approachSteps} columns={2} />
                    </Section>

                    <Section>
                        <SectionHeading
                            badge="Related Services"
                            title="You May Also Need"
                        />
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                            {[
                                { to: "/fda-audit-preparation", label: "FDA Audit Preparation" },
                                { to: "/quality-assurance-audits", label: "Quality Assurance Audits" },
                                { to: "/quality-system-regulation-qsr", label: "QSR / 21 CFR Part 820" },
                                { to: "/fda-483-observations-warning-letters-recalls-remediation", label: "FDA 483 & Warning Letter Response" },
                                { to: "/iso-13485-medical-quality-system-registration", label: "ISO 13485 Registration" },
                                { to: "/fda-qms-requirements", label: "FDA QMS Requirements Guide" },
                            ].map(({ to, label }) => (
                                <Link
                                    key={to}
                                    to={to}
                                    className="block px-5 py-4 rounded-xl border border-gray-200 hover:border-brand-400 hover:bg-brand-50 text-gray-700 hover:text-brand-700 font-medium text-sm transition-all duration-200"
                                >
                                    {label} →
                                </Link>
                            ))}
                        </div>
                    </Section>

                    <PageCTA
                        title={cta?.title || "Ready to Strengthen Your FDA Compliance Program?"}
                        subtitle={cta?.subtitle || "Contact our team for a free initial consultation. We'll assess your current compliance posture and recommend the right path forward."}
                    />
                </InnerContent>
            </main>

            <Footer />
        </div>
    );
};
