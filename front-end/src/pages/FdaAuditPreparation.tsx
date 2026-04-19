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
} from "../components/shared/InnerPage";

const auditTypes = [
    "<strong>FDA Pre-Announcement Inspections:</strong> Routine surveillance inspections for registered establishments — we ensure your facility, records, and personnel are fully prepared.",
    "<strong>FDA For-Cause Inspections:</strong> Triggered by complaints, adverse events, or prior 483 observations — we help you address root causes and present a credible remediation posture.",
    "<strong>Pre-Approval Inspections (PAI):</strong> Required before FDA approves a 510(k), PMA, or NDA — we validate your QMS and manufacturing processes meet approval standards.",
    "<strong>ISO 13485 Certification Audits:</strong> Third-party Notified Body or certification body audits — we conduct pre-audit mock audits and close documentation gaps.",
    "<strong>EU MDR Notified Body Audits:</strong> Technical documentation review, QMS assessment, and annex audit preparation for EU market access.",
    "<strong>Supplier & MDSAP Audits:</strong> Preparation for Medical Device Single Audit Program (MDSAP) and supplier qualification audits.",
];

const preparationActivities = [
    "Comprehensive mock FDA inspection with written debrief and findings report",
    "Document readiness review — SOPs, batch records, CAPA files, DHFs, and DMRs",
    "Employee interview coaching and inspection etiquette training",
    "Back room management and document retrieval protocol setup",
    "CAPA closure verification and corrective action evidence packaging",
    "Establishment registration and device listing accuracy verification",
    "Review of previous 483 responses and verification of commitments met",
    "Facility walkthrough and production area compliance review",
];

const commonFindings = [
    "Inadequate CAPA systems — root cause analysis not documented or actions not verified",
    "Design control deficiencies — incomplete DHF, missing design verification/validation records",
    "Complaint handling gaps — MDR reportability decisions not documented",
    "Supplier controls — approved vendor list not current, no supplier audits conducted",
    "Training records — personnel qualifications not documented for current procedures",
    "Calibration and preventive maintenance — equipment records incomplete or overdue",
];

export const FdaAuditPreparation: React.FC = () => {
    const content = useContent('fda_audit_prep');
    const header = content?.header;
    const intro = content?.intro;
    const cta = content?.cta;

    return (
        <div className="w-full bg-white font-sans flex flex-col min-h-screen">
            <PageMeta
                title="FDA Audit Preparation Services for Medical Device Manufacturers"
                description="FDA audit preparation consulting — mock FDA inspections, document readiness reviews, CAPA verification, and inspection coaching for medical device manufacturers facing FDA or ISO audits."
            />
            <Header />

            <main className="grow">
                <PageHeader
                    title="FDA Audit Preparation"
                    breadcrumb="FDA Audit Preparation"
                />

                <InnerContent>
                    <Section>
                        <SectionHeading
                            badge={header?.badge_text || "Inspection Readiness"}
                            title={header?.title || "FDA Audit Preparation & Inspection Readiness"}
                            subtitle={header?.subtitle || "Be ready before the investigator arrives. E&E Medicals prepares medical device manufacturers for FDA inspections, ISO audits, and Notified Body reviews with structured mock inspections and gap remediation."}
                        />
                        <div className="space-y-5 text-gray-700 leading-relaxed">
                            <p>{intro?.paragraph1 || "An FDA inspection can happen with as little as 24–48 hours notice. Companies that are not in a constant state of inspection readiness risk 483 observations, warning letters, and in serious cases, import alerts or consent decrees. E&E Medicals helps you stay ready — not just for the next inspection, but as an ongoing operating standard."}</p>
                            <InfoBox variant="brand">
                                <p className="text-sm md:text-base">
                                    Our team includes consultants with direct FDA inspector experience and decades of guiding companies through <strong className="text-navy-900">successful FDA inspections with zero 483 observations</strong>.
                                </p>
                            </InfoBox>
                            <p>{intro?.paragraph2 || "Whether you have received a notice of inspection, are preparing for a Pre-Approval Inspection (PAI), or simply want to stress-test your QMS before an auditor arrives, we provide the structured preparation that significantly improves inspection outcomes."}</p>
                        </div>
                    </Section>

                    <Section>
                        <SectionHeading
                            badge="Audit Types"
                            title="Inspections & Audits We Prepare You For"
                        />
                        <FeatureList items={auditTypes} columns={2} />
                    </Section>

                    <Section>
                        <SectionHeading
                            badge="Preparation Activities"
                            title="What Our Audit Preparation Includes"
                        />
                        <BulletList items={preparationActivities} columns={2} />
                    </Section>

                    <Section>
                        <SectionHeading
                            badge="Common FDA Findings"
                            title="Top Areas Investigators Scrutinize"
                            subtitle="These are the most frequently cited areas in FDA 483 observations. Our preparation program specifically targets each of these to ensure you have no surprises."
                        />
                        <FeatureList items={commonFindings} columns={2} />
                        <div className="mt-8">
                            <InfoBox variant="light">
                                <p className="text-sm md:text-base text-gray-700">
                                    Received a 483 observation or warning letter already?{" "}
                                    <Link to="/fda-483-observations-warning-letters-recalls-remediation" className="text-brand-600 font-semibold hover:underline">
                                        See our 483 & Warning Letter Remediation services →
                                    </Link>
                                </p>
                            </InfoBox>
                        </div>
                    </Section>

                    <Section>
                        <SectionHeading
                            badge="Related Services"
                            title="You May Also Need"
                        />
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                            {[
                                { to: "/fda-compliance-consulting", label: "FDA Compliance Consulting" },
                                { to: "/quality-assurance-audits", label: "Quality Assurance Audits" },
                                { to: "/fda-483-observations-warning-letters-recalls-remediation", label: "FDA 483 & Warning Letter Response" },
                                { to: "/quality-system-regulation-qsr", label: "QSR / 21 CFR Part 820" },
                                { to: "/fda-defense", label: "FDA Interaction & Defense" },
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
                        title={cta?.title || "Don't Wait for the Investigator to Knock"}
                        subtitle={cta?.subtitle || "Contact E&E Medicals today to schedule a mock FDA inspection or inspection readiness assessment. Early preparation is always your best defense."}
                    />
                </InnerContent>
            </main>

            <Footer />
        </div>
    );
};
