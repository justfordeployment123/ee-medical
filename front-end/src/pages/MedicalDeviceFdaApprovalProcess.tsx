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
    InfoBox,
    SplitSection,
    Section,
    PageCTA,
    ResourceLinksGrid,
} from "../components/shared/InnerPage";

export const MedicalDeviceFdaApprovalProcess: React.FC = () => {
    const content = useContent('fda_approval_process');
    const header = content?.header;
    const intro = content?.intro;
    const split = content?.split;
    const cta = content?.cta;

    return (
        <div className="w-full bg-white font-sans flex flex-col min-h-screen">
            <PageMeta
                title="Medical Device FDA Approval Process: A Complete Guide for Manufacturers"
                description="Understand the full FDA medical device approval process — 510(k), PMA, De Novo, device classification, and post-market requirements explained for manufacturers."
            />
            <Header />

            <main className="grow">
                <PageHeader
                    title="Medical Device FDA Approval Process: A Complete Guide for Manufacturers"
                    breadcrumb="FDA Approval Process"
                />

                <InnerContent>
                    {/* Section 1: Overview */}
                    <section>
                        <SectionHeading
                            badge={header?.badge_text || "FDA Approval"}
                            title={header?.title || "Understanding the Medical Device FDA Approval Process"}
                            subtitle={header?.subtitle || "A structured overview of how medical devices are regulated, classified, and approved or cleared for sale in the United States."}
                        />

                        <div className="text-gray-700 leading-relaxed text-[15px] md:text-base space-y-5">
                            <p>{intro?.paragraph1 || "Bringing a medical device to market in the United States requires navigating the FDA's regulatory framework — a multi-step process governed by the Federal Food, Drug, and Cosmetic Act (FD&C Act) and enforced by the Center for Devices and Radiological Health (CDRH)."}</p>
                            <p>{intro?.paragraph2 || "The FDA does not use a single, universal approval process for all devices. Instead, the pathway depends on the device's classification (Class I, II, or III), its risk profile, and whether a substantially equivalent predicate device already exists in the market."}</p>
                            <p>{intro?.paragraph3 || "E&E Medicals and Consulting has supported medical device manufacturers across all device classes and categories through the FDA regulatory process. This guide provides a complete overview of each pathway, what to expect, and how to prepare."}</p>
                        </div>
                    </section>

                    {/* Section 2: Device Classification */}
                    <Section>
                        <SectionHeading
                            badge="Classification"
                            title="Step 1 — Medical Device Classification (Class I, II, III)"
                        />

                        <div className="text-gray-700 leading-relaxed text-[15px] md:text-base space-y-5 mb-8">
                            <p>
                                The FDA classifies medical devices into three categories based on the risk they pose to patients and users. Classification determines which regulatory controls apply and which premarket pathway the device must follow.
                            </p>
                        </div>

                        <div className="space-y-4">
                            <InfoBox variant="brand">
                                <h4 className="text-base font-bold text-navy-900 mb-2">Class I — Low Risk</h4>
                                <p className="text-gray-700 text-[14px] leading-relaxed">
                                    Subject to general controls only. Most Class I devices are exempt from premarket notification. Examples: bandages, examination gloves, hand-held surgical instruments. Approximately 47% of all devices fall into Class I.
                                </p>
                            </InfoBox>

                            <InfoBox variant="brand">
                                <h4 className="text-base font-bold text-navy-900 mb-2">Class II — Moderate Risk</h4>
                                <p className="text-gray-700 text-[14px] leading-relaxed">
                                    Subject to general and special controls. Most require a 510(k) premarket notification to demonstrate substantial equivalence to a predicate device. Examples: X-ray systems, infusion pumps, powered wheelchairs, IVD diagnostics. Approximately 43% of devices are Class II.
                                </p>
                            </InfoBox>

                            <InfoBox variant="brand">
                                <h4 className="text-base font-bold text-navy-900 mb-2">Class III — High Risk</h4>
                                <p className="text-gray-700 text-[14px] leading-relaxed">
                                    Subject to general controls and Premarket Approval (PMA). Require clinical evidence of safety and effectiveness. Examples: implantable cardiac pacemakers, deep brain stimulators, replacement heart valves. Approximately 10% of devices are Class III.
                                </p>
                            </InfoBox>
                        </div>
                    </Section>

                    {/* Section 3: Regulatory Pathways */}
                    <Section>
                        <SectionHeading
                            badge="Pathways"
                            title="FDA Regulatory Pathways: 510(k), PMA, De Novo &amp; More"
                        />

                        <div className="text-gray-700 leading-relaxed text-[15px] md:text-base space-y-5 mb-8">
                            <p>
                                Once your device is classified, the appropriate FDA pathway becomes clear. Here is a breakdown of the primary premarket regulatory pathways:
                            </p>
                        </div>

                        <div className="space-y-4">
                            <InfoBox variant="brand">
                                <h4 className="text-base font-bold text-navy-900 mb-2">510(k) Premarket Notification</h4>
                                <p className="text-gray-700 text-[14px] leading-relaxed">
                                    The most common pathway for Class II devices. Requires demonstrating substantial equivalence to a legally marketed predicate. Does not require clinical trials in most cases. FDA review goal: 90 days. Learn more in our{" "}
                                    <Link to="/fda-510k-submission-guide" className="text-brand-600 hover:underline">complete 510(k) submission guide</Link>.
                                </p>
                            </InfoBox>

                            <InfoBox variant="brand">
                                <h4 className="text-base font-bold text-navy-900 mb-2">Premarket Approval (PMA)</h4>
                                <p className="text-gray-700 text-[14px] leading-relaxed">
                                    Required for Class III devices. The most rigorous FDA review — requires valid scientific evidence (including clinical trials) demonstrating safety and effectiveness. PMA review takes 180 days by statute, but the total process typically spans 1–3 years including pre-submission preparation.
                                </p>
                            </InfoBox>

                            <InfoBox variant="brand">
                                <h4 className="text-base font-bold text-navy-900 mb-2">De Novo Classification</h4>
                                <p className="text-gray-700 text-[14px] leading-relaxed">
                                    For novel, low-to-moderate risk devices without an appropriate predicate. Allows reclassification from Class III to Class I or II, establishing the device as a predicate for future submissions. An increasingly used pathway for innovative medical technologies.
                                </p>
                            </InfoBox>

                            <InfoBox variant="brand">
                                <h4 className="text-base font-bold text-navy-900 mb-2">Humanitarian Device Exemption (HDE)</h4>
                                <p className="text-gray-700 text-[14px] leading-relaxed">
                                    For devices treating or diagnosing diseases affecting fewer than 8,000 patients per year in the U.S. Similar to PMA but without the effectiveness requirement. Must be approved by an Institutional Review Board (IRB) for use.
                                </p>
                            </InfoBox>

                            <InfoBox variant="brand">
                                <h4 className="text-base font-bold text-navy-900 mb-2">Investigational Device Exemption (IDE)</h4>
                                <p className="text-gray-700 text-[14px] leading-relaxed">
                                    Allows investigational devices to be used in clinical studies to collect safety and effectiveness data in support of a PMA or De Novo submission. Required for significant risk device studies.
                                </p>
                            </InfoBox>
                        </div>
                    </Section>

                    {/* Split break */}
                    <SplitSection
                        imageSrc={split?.split_image || "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?q=80&w=1400"}
                        imageAlt={split?.split_image_alt || "Medical device FDA approval regulatory process"}
                        label="FDA Regulatory Strategy"
                    >
                        <div>
                            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-brand-50 border border-brand-100 text-brand-600 text-xs font-bold uppercase tracking-wider mb-5">
                                <span className="w-1.5 h-1.5 rounded-full bg-brand-400" />
                                {split?.badge_text || "Pre-Submission Strategy"}
                            </span>
                            <h2 className="font-display text-2xl font-extrabold text-navy-900 leading-tight mb-4">
                                {split?.title || "Pre-Submission Meetings with FDA"}
                            </h2>
                            <p className="text-gray-600 text-sm leading-relaxed mb-4">
                                {split?.paragraph1 || "Before formally submitting, manufacturers can request a Pre-Submission (Q-Sub) meeting with the FDA to get feedback on proposed regulatory strategies, study designs, and testing protocols — significantly reducing risk of rejection."}
                            </p>
                            <p className="text-gray-500 text-sm leading-relaxed">
                                {split?.paragraph2 || "E&E Medicals can prepare your Pre-Sub package, identify the right questions to ask FDA, and accompany you through the interaction to maximize the value of the meeting."}
                            </p>
                        </div>
                    </SplitSection>

                    {/* Section 4: Post-Market Requirements */}
                    <Section>
                        <SectionHeading
                            badge="Post-Market"
                            title="Post-Market Requirements After FDA Clearance or Approval"
                        />

                        <div className="text-gray-700 leading-relaxed text-[15px] md:text-base space-y-5 mb-8">
                            <p>
                                FDA clearance or approval is not the end of the regulatory journey — it is the beginning. All cleared or approved devices must comply with ongoing post-market requirements enforced by the FDA's Quality System Regulation (21 CFR Part 820) and Medical Device Reporting (MDR) regulations.
                            </p>
                        </div>

                        <BulletList
                            columns={2}
                            items={[
                                "FDA Establishment Registration (annual renewal required)",
                                "Medical Device Listing with FDA",
                                "Quality System Regulation (21 CFR Part 820) compliance",
                                "Medical Device Reporting (MDR) for adverse events",
                                "Corrections and removals reporting (21 CFR Part 806)",
                                "Unique Device Identification (UDI) labeling",
                                "Post-Market Surveillance (PMS) activities",
                                "Complaint handling and CAPA system maintenance",
                            ]}
                        />

                        <div className="mt-8 text-gray-700 text-[15px] leading-relaxed">
                            <p>
                                Our team supports{" "}
                                <Link to="/fda-establishment-registration" className="text-brand-600 hover:underline font-medium">
                                    FDA establishment registration
                                </Link>
                                {" "}and ongoing compliance under the{" "}
                                <Link to="/quality-system-regulation-qsr" className="text-brand-600 hover:underline font-medium">
                                    Quality System Regulation (QSR)
                                </Link>
                                {" "}to keep your device on the U.S. market without disruption.
                            </p>
                        </div>
                    </Section>

                    {/* Section 5: Our Services */}
                    <Section>
                        <SectionHeading
                            badge="Our Services"
                            title="How E&amp;E Medicals Guides You Through the FDA Process"
                        />

                        <div className="text-gray-700 leading-relaxed text-[15px] md:text-base space-y-5 mb-8">
                            <p>
                                With over 32 years of FDA regulatory experience, E&amp;E Medicals provides comprehensive support across every stage of the medical device FDA approval process — from initial classification through post-market compliance. Whether you are a startup launching your first device or an established manufacturer expanding your product line, we bring the expertise to navigate the process efficiently.
                            </p>
                        </div>

                        <FeatureList
                            columns={2}
                            items={[
                                "Device classification and regulatory pathway determination",
                                "Pre-Submission (Q-Sub) meeting preparation",
                                "510(k), PMA, De Novo submission preparation",
                                "FDA response and AI request management",
                                "Quality system implementation (21 CFR Part 820)",
                                "Establishment registration and device listing",
                                "US Agent services for foreign establishments",
                                "Post-market compliance and MDR support",
                                "FDA audit preparation and defense",
                                "ISO 13485 certification coordination",
                            ]}
                        />
                    </Section>

                    {/* Section: External Resources */}
                    <Section>
                        <SectionHeading
                            badge="Further Reading"
                            title="External Resources &amp; Industry Sources"
                            subtitle="Curated references on FDA approval pathways, device classification, and regulatory updates from leading industry publications and the FDA."
                        />
                        <ResourceLinksGrid links={[
                            { href: "https://intuitionlabs.io", label: "FDA 510(k) Explained: Medical Device Premarket Notification", source: "IntuitionLabs" },
                            { href: "https://www.fda.gov/medical-devices/device-approvals-clearances-and-other-actions/device-approvals-clearances-and-other-actions", label: "Device Approvals and Clearances", source: "U.S. FDA" },
                            { href: "https://quantiva.io", label: "FDA Pathways for SaMD: 510(k) vs De Novo vs PMA", source: "Quantiva" },
                            { href: "https://bioaccess.com", label: "510k Vs PMA Vs De Novo Pathway Key Differences", source: "bioaccess®" },
                            { href: "https://omcmedical.com", label: "Do You Need a 510(k) or De Novo? Choosing the Right FDA Pathway", source: "OMC Medical" },
                            { href: "https://thefdagroup.com", label: "PMA vs. 510(k): Everything You Need to Know (2026)", source: "The FDA Group" },
                            { href: "https://pharmiweb.com", label: "Understanding Medical Device Regulatory Pathways — 510(k), PMA, De Novo", source: "PharmIweb" },
                            { href: "https://educolifesciences.com", label: "FDA De Novo vs 510k vs PMA Comparison", source: "Educo Life Sciences" },
                            { href: "https://pureglobal.ai", label: "FDA News Today: Medical Device Regulatory Updates 2026", source: "Pure Global" },
                            { href: "https://eleapsoftware.com", label: "FDA Cleared vs Approved: The Complete 2026 Regulatory Guide", source: "Eleap Software" },
                            { href: "https://www.prnewswire.com", label: "All FDA Approval News and Press Releases", source: "PR Newswire" },
                            { href: "https://www.fda.gov/medical-devices/premarket-submissions-selecting-and-preparing-correct-submission/de-novo-classification-request", label: "De Novo Classification Request", source: "U.S. FDA" },
                            { href: "https://www.fda.gov/medical-devices/how-study-and-market-your-device/breakthrough-devices-program", label: "Breakthrough Devices Program", source: "U.S. FDA" },
                        ]} />
                    </Section>

                    {/* Page CTA */}
                    <PageCTA
                        title={cta?.title || "Need Help Navigating the FDA Approval Process?"}
                        subtitle={cta?.subtitle || "Our regulatory experts will assess your device and recommend the fastest, most cost-effective path to U.S. market clearance."}
                        linkLabel="Schedule a Free Regulatory Assessment"
                        linkTo="/share-your-project"
                    />
                </InnerContent>
            </main>

            <Footer />
        </div>
    );
};
