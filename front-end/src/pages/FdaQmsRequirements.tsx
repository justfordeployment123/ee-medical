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

export const FdaQmsRequirements: React.FC = () => {
    return (
        <div className="w-full bg-white font-sans flex flex-col min-h-screen">
            <PageMeta
                title="FDA QMS Requirements for Medical Devices: 21 CFR Part 820 Explained"
                description="Complete guide to FDA Quality System Regulation (21 CFR Part 820) — who must comply, key requirements, CAPA, design controls, and how to prepare for FDA inspections."
            />
            <Header />

            <main className="grow">
                <PageHeader
                    title="FDA QMS Requirements for Medical Devices: 21 CFR Part 820 Explained"
                    breadcrumb="FDA QMS Requirements"
                />

                <InnerContent>
                    {/* Section 1: Overview */}
                    <section>
                        <SectionHeading
                            badge="FDA QMS"
                            title="What Are the FDA QMS Requirements for Medical Devices?"
                            subtitle="A complete guide to FDA Quality System Regulation (21 CFR Part 820) — what it requires, who it applies to, and how to achieve and maintain compliance."
                        />

                        <div className="text-gray-700 leading-relaxed text-[15px] md:text-base space-y-5">
                            <p>
                                The FDA's Quality System Regulation (QSR), codified in 21 CFR Part 820, establishes the minimum quality system requirements for the design, manufacture, packaging, labeling, storage, installation, and servicing of medical devices intended for sale in the United States. Compliance with the QSR is mandatory for all medical device manufacturers — including importers, contract manufacturers, and repackagers — and is enforced through regular FDA inspections.
                            </p>
                            <p>
                                In 2024, the FDA finalized its Quality Management System Regulation (QMSR) update, aligning 21 CFR Part 820 more closely with ISO 13485:2016. This alignment reduces regulatory burden for manufacturers who are already ISO 13485 certified, while strengthening the quality system requirements applicable to all U.S. medical device manufacturers.
                            </p>
                            <p>
                                E&amp;E Medicals and Consulting helps medical device manufacturers build, implement, and maintain FDA-compliant quality systems. This guide explains what the FDA QMS requirements entail, how they apply to your organization, and what a compliant quality system looks like in practice.
                            </p>
                        </div>
                    </section>

                    {/* Section 2: Who Must Comply */}
                    <Section>
                        <SectionHeading
                            badge="Applicability"
                            title="Who Must Comply with 21 CFR Part 820?"
                        />

                        <div className="text-gray-700 leading-relaxed text-[15px] md:text-base space-y-5 mb-8">
                            <p>
                                The QSR applies to any organization involved in the manufacture of finished medical devices or components for sale in the U.S. This includes domestic manufacturers, foreign manufacturers distributing to the U.S. market, and contract manufacturers performing device manufacturing operations.
                            </p>
                        </div>

                        <FeatureList
                            columns={2}
                            items={[
                                "Domestic medical device manufacturers",
                                "Foreign manufacturers exporting to the United States",
                                "Contract manufacturers of medical device components",
                                "Repackagers and relabelers of medical devices",
                                "Specification developers (who design but don't manufacture)",
                                "Importers of finished medical devices",
                                "Sterilization service providers for medical devices",
                                "Software developers of Software as a Medical Device (SaMD)",
                            ]}
                        />
                    </Section>

                    {/* Section 3: Key Requirements */}
                    <Section>
                        <SectionHeading
                            badge="Key Requirements"
                            title="Core FDA QMS Requirements Under 21 CFR Part 820"
                        />

                        <div className="space-y-4">
                            <InfoBox variant="brand">
                                <h4 className="text-base font-bold text-navy-900 mb-2">820.20 — Management Responsibility</h4>
                                <p className="text-gray-700 text-[14px] leading-relaxed">
                                    Requires management to establish and maintain an adequate quality system. Includes quality policy, organizational structure with defined responsibilities, and management review processes. A designated management representative must be appointed.
                                </p>
                            </InfoBox>

                            <InfoBox variant="brand">
                                <h4 className="text-base font-bold text-navy-900 mb-2">820.30 — Design Controls</h4>
                                <p className="text-gray-700 text-[14px] leading-relaxed">
                                    One of the most frequently cited requirements during FDA inspections. Requires formal design planning, design input/output documentation, design reviews, verification, validation, and transfer processes. Design history files (DHF) must be maintained for each type of device.
                                </p>
                            </InfoBox>

                            <InfoBox variant="brand">
                                <h4 className="text-base font-bold text-navy-900 mb-2">820.50 — Purchasing Controls</h4>
                                <p className="text-gray-700 text-[14px] leading-relaxed">
                                    Requires procedures for evaluating and selecting suppliers, contractors, and consultants based on their ability to meet requirements. Approved supplier lists, supplier qualification records, and purchasing agreements must be maintained.
                                </p>
                            </InfoBox>

                            <InfoBox variant="brand">
                                <h4 className="text-base font-bold text-navy-900 mb-2">820.70 — Production and Process Controls</h4>
                                <p className="text-gray-700 text-[14px] leading-relaxed">
                                    Covers manufacturing process development, process validation, environmental controls, personnel hygiene, contamination control, buildings, equipment maintenance, and manufacturing materials management.
                                </p>
                            </InfoBox>

                            <InfoBox variant="brand">
                                <h4 className="text-base font-bold text-navy-900 mb-2">820.80 — Receiving, In-Process, and Finished Device Acceptance</h4>
                                <p className="text-gray-700 text-[14px] leading-relaxed">
                                    Requires documented procedures for accepting or rejecting incoming components, in-process products, and finished devices. Acceptance criteria must be established and records maintained.
                                </p>
                            </InfoBox>

                            <InfoBox variant="brand">
                                <h4 className="text-base font-bold text-navy-900 mb-2">820.100 — Corrective and Preventive Action (CAPA)</h4>
                                <p className="text-gray-700 text-[14px] leading-relaxed">
                                    Perhaps the most critical subsystem — requires identifying and correcting nonconformances, investigating root causes, implementing corrective actions, and preventing recurrence. CAPA records are heavily scrutinized during FDA inspections and 483 observations.
                                </p>
                            </InfoBox>

                            <InfoBox variant="brand">
                                <h4 className="text-base font-bold text-navy-900 mb-2">820.198 — Complaint Files</h4>
                                <p className="text-gray-700 text-[14px] leading-relaxed">
                                    Requires a formal complaint handling system with documented procedures for receiving, reviewing, and evaluating complaints. All complaints that represent reportable events under MDR regulations must be reviewed and assessed.
                                </p>
                            </InfoBox>
                        </div>
                    </Section>

                    {/* Split break */}
                    <SplitSection
                        imageSrc="https://images.unsplash.com/photo-1504439468489-c8920d796a29?q=80&w=1400"
                        imageAlt="FDA QMS quality management system medical device"
                        label="FDA Inspections"
                    >
                        <div>
                            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-brand-50 border border-brand-100 text-brand-600 text-xs font-bold uppercase tracking-wider mb-5">
                                <span className="w-1.5 h-1.5 rounded-full bg-brand-400" />
                                FDA 483 Observations
                            </span>
                            <h2 className="font-display text-2xl font-extrabold text-navy-900 leading-tight mb-4">
                                Most Common FDA QMS Violations
                            </h2>
                            <p className="text-gray-600 text-sm leading-relaxed mb-4">
                                The FDA's most frequently cited QSR violations include: inadequate CAPA processes, design control deficiencies, complaint handling failures, and insufficient process validation. These observations can escalate to Warning Letters and enforcement action.
                            </p>
                            <p className="text-gray-500 text-sm leading-relaxed">
                                Our{" "}
                                <Link to="/fda-483-observations-warning-letters-recalls-remediation" className="text-brand-600 hover:underline">
                                    FDA 483 and Warning Letter remediation services
                                </Link>
                                {" "}help manufacturers respond effectively and restore FDA confidence.
                            </p>
                        </div>
                    </SplitSection>

                    {/* Section 4: CAPA Deep Dive */}
                    <Section>
                        <SectionHeading
                            badge="CAPA"
                            title="CAPA System: The Heart of Your FDA QMS"
                        />

                        <div className="text-gray-700 leading-relaxed text-[15px] md:text-base space-y-5 mb-8">
                            <p>
                                The Corrective and Preventive Action (CAPA) system is the most scrutinized element of any FDA quality system inspection. A robust CAPA process must include systematic data analysis, thorough root cause investigation, defined corrective actions, effectiveness verification, and documented closure. Weak CAPA systems are the leading source of FDA 483 observations and Warning Letters.
                            </p>
                        </div>

                        <BulletList
                            columns={2}
                            items={[
                                "Data sources: complaints, audits, nonconformances, MDR",
                                "Root cause analysis methods (5-Why, Fishbone, FMEA)",
                                "Corrective action planning and implementation timelines",
                                "Preventive action to eliminate potential nonconformances",
                                "Effectiveness verification with objective evidence",
                                "CAPA record documentation and traceability",
                                "Management review of CAPA trends and metrics",
                                "Integration with design controls and risk management",
                            ]}
                        />
                    </Section>

                    {/* Section 5: Our Services */}
                    <Section>
                        <SectionHeading
                            badge="Our Services"
                            title="FDA QMS Consulting Services from E&amp;E Medicals"
                        />

                        <div className="text-gray-700 leading-relaxed text-[15px] md:text-base space-y-5 mb-8">
                            <p>
                                E&amp;E Medicals provides complete FDA QMS consulting services — from initial compliance assessment to full QMS implementation, FDA audit preparation, and 483 response support. Our consultants bring hands-on experience with FDA inspections across multiple device categories.
                            </p>
                            <p>
                                We also help manufacturers align their QSR compliance with{" "}
                                <Link to="/iso-13485-guide" className="text-brand-600 hover:underline font-medium">
                                    ISO 13485:2016 requirements
                                </Link>
                                {" "}for efficient dual-market compliance.
                            </p>
                        </div>

                        <FeatureList
                            columns={2}
                            items={[
                                "QMS gap analysis against 21 CFR Part 820",
                                "Quality manual and SOP development",
                                "Design control system implementation (820.30)",
                                "CAPA system design and training",
                                "Complaint handling system setup (820.198)",
                                "Process validation and equipment qualification",
                                "Internal audit program development",
                                "FDA inspection readiness preparation",
                                "483 observation and Warning Letter response",
                                "ISO 13485 + FDA QSR dual compliance programs",
                            ]}
                        />
                    </Section>

                    {/* Page CTA */}
                    <PageCTA
                        title="Build a FDA-Compliant Quality System"
                        subtitle="Our regulatory experts will assess your current QMS and implement the systems you need to pass FDA inspections with confidence."
                        linkLabel="Request a QMS Assessment"
                        linkTo="/share-your-project"
                    />
                </InnerContent>
            </main>

            <Footer />
        </div>
    );
};
