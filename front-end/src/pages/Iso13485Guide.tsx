import React from "react";
import { PageHeader } from "../components/shared/PageHeader";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Link } from "react-router-dom";
import { PageMeta } from "../components/shared/PageMeta";
import {
    InnerContent,
    SectionHeading,
    FeatureList,
    BulletList,
    InfoBox,
    SplitSection,
    Section,
    PageCTA,
} from "../components/shared/InnerPage";

export const Iso13485Guide: React.FC = () => {
    return (
        <div className="w-full bg-white font-sans flex flex-col min-h-screen">
            <PageMeta
                title="ISO 13485 Guide: Requirements, Certification Process & Implementation"
                description="Complete ISO 13485:2016 guide — requirements, certification steps, gap analysis, and how it compares to FDA QSR for medical device manufacturers."
            />
            <Header />

            <main className="grow">
                <PageHeader
                    title="ISO 13485 Guide: Requirements, Certification Process &amp; Implementation"
                    breadcrumb="ISO 13485 Guide"
                />

                <InnerContent>
                    {/* Section 1: What is ISO 13485 */}
                    <section>
                        <SectionHeading
                            badge="ISO 13485"
                            title="What Is ISO 13485? The Global Standard for Medical Device QMS"
                            subtitle="Everything medical device manufacturers need to know about ISO 13485:2016 — requirements, certification, and how it aligns with FDA regulations."
                        />

                        <div className="text-gray-700 leading-relaxed text-[15px] md:text-base space-y-5">
                            <p>
                                ISO 13485 is the internationally recognized standard specifying requirements for a Quality Management System (QMS) in the medical device industry. Published by the International Organization for Standardization (ISO), the standard is designed to help organizations demonstrate their ability to consistently design, develop, produce, and service medical devices that meet customer and applicable regulatory requirements.
                            </p>
                            <p>
                                The current version — ISO 13485:2016 — was updated to better align with regulatory requirements across key markets including the U.S. (FDA), Europe (EU MDR/IVDR), and Canada (MDSAP). It is increasingly used as a framework for regulatory compliance globally. Many notified bodies, regulatory authorities, and procurement organizations now require ISO 13485 certification as a baseline condition for market access.
                            </p>
                            <p>
                                E&amp;E Medicals and Consulting provides ISO 13485 implementation and consulting services to help organizations build compliant QMS frameworks, prepare for certification audits, and maintain ongoing conformance. This guide covers the full scope of the standard.
                            </p>
                        </div>
                    </section>

                    {/* Section 2: Key Requirements */}
                    <Section>
                        <SectionHeading
                            badge="Requirements"
                            title="ISO 13485:2016 — Key Requirements Overview"
                        />

                        <div className="text-gray-700 leading-relaxed text-[15px] md:text-base space-y-5 mb-8">
                            <p>
                                ISO 13485 is structured around eight clauses. Clauses 4–8 contain the specific requirements organizations must implement. Here is a summary of the core requirements:
                            </p>
                        </div>

                        <div className="space-y-4">
                            <InfoBox variant="brand">
                                <h4 className="text-base font-bold text-navy-900 mb-2">Clause 4 — Quality Management System</h4>
                                <p className="text-gray-700 text-[14px] leading-relaxed">
                                    Establishes the QMS scope, documented procedures, and records. Requires organizations to document and control their processes, manage regulatory files, and maintain a comprehensive quality manual.
                                </p>
                            </InfoBox>

                            <InfoBox variant="brand">
                                <h4 className="text-base font-bold text-navy-900 mb-2">Clause 5 — Management Responsibility</h4>
                                <p className="text-gray-700 text-[14px] leading-relaxed">
                                    Top management must demonstrate commitment to the QMS, establish quality policy and objectives, conduct management reviews, and ensure regulatory requirements are understood throughout the organization.
                                </p>
                            </InfoBox>

                            <InfoBox variant="brand">
                                <h4 className="text-base font-bold text-navy-900 mb-2">Clause 6 — Resource Management</h4>
                                <p className="text-gray-700 text-[14px] leading-relaxed">
                                    Covers human resources (competency, training, awareness), infrastructure, and work environment — including cleanroom and contamination control requirements relevant to medical device manufacturing.
                                </p>
                            </InfoBox>

                            <InfoBox variant="brand">
                                <h4 className="text-base font-bold text-navy-900 mb-2">Clause 7 — Product Realization</h4>
                                <p className="text-gray-700 text-[14px] leading-relaxed">
                                    The most detailed clause — covers design and development controls, purchasing controls, production and service provision (including sterile device requirements), device identification and traceability, and customer communication processes.
                                </p>
                            </InfoBox>

                            <InfoBox variant="brand">
                                <h4 className="text-base font-bold text-navy-900 mb-2">Clause 8 — Measurement, Analysis &amp; Improvement</h4>
                                <p className="text-gray-700 text-[14px] leading-relaxed">
                                    Requires monitoring and measurement of processes and products, feedback systems (including complaint handling), internal audits, nonconforming product control, data analysis, and CAPA (Corrective and Preventive Action) processes.
                                </p>
                            </InfoBox>
                        </div>
                    </Section>

                    {/* Section 3: ISO 13485 vs FDA QSR */}
                    <Section>
                        <SectionHeading
                            badge="Comparison"
                            title="ISO 13485 vs FDA QSR (21 CFR Part 820): Key Differences"
                        />

                        <div className="text-gray-700 leading-relaxed text-[15px] md:text-base space-y-5 mb-8">
                            <p>
                                While ISO 13485 and the FDA's Quality System Regulation (21 CFR Part 820) share significant overlap, there are important differences that manufacturers operating in both the U.S. and international markets must understand.
                            </p>
                        </div>

                        <BulletList
                            columns={2}
                            items={[
                                "ISO 13485 is international; FDA QSR applies specifically to U.S. market",
                                "FDA QSR has stronger design control requirements (21 CFR 820.30)",
                                "ISO 13485 emphasizes risk management integration throughout QMS",
                                "FDA QSR requires a formal Quality Plan (21 CFR 820.20)",
                                "ISO 13485 includes specific sterile device requirements (Clause 7.5.5)",
                                "FDA QSR has explicit complaint files requirements (21 CFR 820.198)",
                                "ISO 13485 aligns with MDSAP for multi-country audit efficiency",
                                "FDA now references ISO 13485 in its updated Quality System regulations",
                            ]}
                        />

                        <div className="mt-8 text-gray-700 text-[15px] leading-relaxed">
                            <p>
                                Our{" "}
                                <Link to="/quality-system-regulation-qsr" className="text-brand-600 hover:underline font-medium">
                                    Quality System Regulation (QSR) consulting services
                                </Link>
                                {" "}help manufacturers bridge ISO 13485 with FDA requirements — particularly useful for companies seeking simultaneous U.S. and international market access.
                            </p>
                        </div>
                    </Section>

                    {/* Split break */}
                    <SplitSection
                        imageSrc="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1400"
                        imageAlt="ISO 13485 quality management system medical devices"
                        label="Certification Process"
                    >
                        <div>
                            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-brand-50 border border-brand-100 text-brand-600 text-xs font-bold uppercase tracking-wider mb-5">
                                <span className="w-1.5 h-1.5 rounded-full bg-brand-400" />
                                ISO 13485 Certification
                            </span>
                            <h2 className="font-display text-2xl font-extrabold text-navy-900 leading-tight mb-4">
                                The ISO 13485 Certification Process
                            </h2>
                            <p className="text-gray-600 text-sm leading-relaxed mb-4">
                                Certification is performed by an accredited third-party certification body (CB) through a two-stage audit: Stage 1 (documentation review) and Stage 2 (implementation assessment). Certification is valid for 3 years with annual surveillance audits.
                            </p>
                            <p className="text-gray-500 text-sm leading-relaxed">
                                E&amp;E Medicals guides organizations through every step — from gap analysis and QMS documentation to audit preparation and post-certification maintenance. Use our free{" "}
                                <Link to="/free-iso-13485-2016-gap-analysis-tool" className="text-brand-600 hover:underline">
                                    ISO 13485:2016 Gap Analysis Tool
                                </Link>
                                {" "}to assess your current readiness.
                            </p>
                        </div>
                    </SplitSection>

                    {/* Section 4: Implementation Steps */}
                    <Section>
                        <SectionHeading
                            badge="Implementation"
                            title="How to Implement ISO 13485: Step-by-Step"
                        />

                        <div className="space-y-4">
                            <InfoBox variant="brand">
                                <h4 className="text-base font-bold text-navy-900 mb-2">Step 1: Gap Analysis</h4>
                                <p className="text-gray-700 text-[14px] leading-relaxed">
                                    Assess your current quality management practices against ISO 13485:2016 requirements. Identify gaps in documentation, processes, and records. Our free gap analysis tool provides a structured starting point.
                                </p>
                            </InfoBox>

                            <InfoBox variant="brand">
                                <h4 className="text-base font-bold text-navy-900 mb-2">Step 2: QMS Design &amp; Documentation</h4>
                                <p className="text-gray-700 text-[14px] leading-relaxed">
                                    Develop or update your quality manual, standard operating procedures (SOPs), work instructions, and forms to meet the standard's requirements. Establish document control and records management systems.
                                </p>
                            </InfoBox>

                            <InfoBox variant="brand">
                                <h4 className="text-base font-bold text-navy-900 mb-2">Step 3: Training &amp; Implementation</h4>
                                <p className="text-gray-700 text-[14px] leading-relaxed">
                                    Train staff on new procedures and quality processes. Implement the QMS across all relevant departments. Ensure top management is actively involved in quality objectives and review.
                                </p>
                            </InfoBox>

                            <InfoBox variant="brand">
                                <h4 className="text-base font-bold text-navy-900 mb-2">Step 4: Internal Audit</h4>
                                <p className="text-gray-700 text-[14px] leading-relaxed">
                                    Conduct a full internal audit against ISO 13485 requirements before the certification audit. Identify and close non-conformances. A clean internal audit record demonstrates readiness to the certification body.
                                </p>
                            </InfoBox>

                            <InfoBox variant="brand">
                                <h4 className="text-base font-bold text-navy-900 mb-2">Step 5: Certification Audit &amp; Ongoing Maintenance</h4>
                                <p className="text-gray-700 text-[14px] leading-relaxed">
                                    Complete Stage 1 and Stage 2 audits with your chosen certification body. After certification, maintain the QMS through annual surveillance audits, management reviews, CAPA processes, and continual improvement activities.
                                </p>
                            </InfoBox>
                        </div>
                    </Section>

                    {/* Section 5: Our Services */}
                    <Section>
                        <SectionHeading
                            badge="Our Services"
                            title="ISO 13485 Consulting Services from E&amp;E Medicals"
                        />

                        <div className="text-gray-700 leading-relaxed text-[15px] md:text-base space-y-5 mb-8">
                            <p>
                                E&amp;E Medicals provides comprehensive ISO 13485 consulting — from initial gap analysis through certification and ongoing maintenance. We work with startups building their first QMS and with established manufacturers upgrading to the 2016 version of the standard.
                            </p>
                        </div>

                        <FeatureList
                            columns={2}
                            items={[
                                "ISO 13485:2016 gap analysis and readiness assessment",
                                "Quality manual and SOP development",
                                "Design control documentation (Clause 7.3)",
                                "Risk management integration (ISO 14971 alignment)",
                                "Supplier qualification and purchasing controls",
                                "CAPA system design and implementation",
                                "Internal audit program development",
                                "Certification body selection and audit preparation",
                                "Post-certification surveillance audit support",
                                "ISO 13485 + FDA QSR dual-compliance framework",
                            ]}
                        />
                    </Section>

                    {/* Page CTA */}
                    <PageCTA
                        title="Ready to Achieve ISO 13485 Certification?"
                        subtitle="Our consultants will guide your QMS implementation from gap analysis to certification — efficiently and on schedule."
                        linkLabel="Start Your ISO 13485 Journey"
                        linkTo="/share-your-project"
                    />
                </InnerContent>
            </main>

            <Footer />
        </div>
    );
};
