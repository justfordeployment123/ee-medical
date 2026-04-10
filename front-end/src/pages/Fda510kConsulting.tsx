import React from "react";
import { PageHeader } from "../components/shared/PageHeader";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Link } from "react-router-dom";
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
import { PageMeta } from "../components/shared/PageMeta";

export const Fda510kConsulting: React.FC = () => {
    return (
        <div className="w-full bg-white font-sans flex flex-col min-h-screen">
            <PageMeta
                title="FDA 510(k) Consulting Services for Medical Device Manufacturers"
                description="Expert FDA 510(k) consulting — from classification and predicate selection through document preparation, FDA submission, and clearance. 32+ years of experience."
            />
            <Header />

            <main className="grow">
                <PageHeader
                    title="FDA 510(k) Consulting Services for Medical Device Manufacturers"
                    breadcrumb="FDA 510(k) Consulting"
                />

                <InnerContent>
                    {/* Section 1: Overview */}
                    <section>
                        <SectionHeading
                            badge="510(k) Consulting"
                            title="Expert FDA 510(k) Consulting — From Classification to Clearance"
                            subtitle="E&E Medicals provides end-to-end 510(k) consulting services that maximize your clearance success rate and minimize time to market."
                        />

                        <div className="text-gray-700 leading-relaxed text-[15px] md:text-base space-y-5">
                            <p>
                                Navigating the FDA 510(k) premarket notification process requires deep expertise in regulatory strategy, device classification, predicate selection, and technical documentation. A single misstep — from choosing the wrong predicate to submitting an incomplete performance testing summary — can result in Refuse to Accept (RTA) determinations or Additional Information (AI) requests that add months to your timeline and tens of thousands of dollars to your costs.
                            </p>
                            <p>
                                E&amp;E Medicals and Consulting has been supporting medical device manufacturers through FDA 510(k) submissions for over 32 years. Our consultants have managed submissions across a wide range of device categories — from IVD diagnostics and orthopedic implants to digital health software and imaging systems. We provide full-service 510(k) consulting from strategy through clearance.
                            </p>
                            <p>
                                Whether you are a startup seeking your first 510(k) clearance or an established manufacturer managing a product modification, we bring the regulatory expertise, FDA relationship knowledge, and submission experience to get your device cleared efficiently.
                            </p>
                        </div>
                    </section>

                    {/* Section 2: Services */}
                    <Section>
                        <SectionHeading
                            badge="Our Services"
                            title="Our FDA 510(k) Consulting Services"
                        />

                        <div className="space-y-4">
                            <InfoBox variant="brand">
                                <h4 className="text-base font-bold text-navy-900 mb-2">510(k) Regulatory Strategy &amp; Pathway Assessment</h4>
                                <p className="text-gray-700 text-[14px] leading-relaxed">
                                    Before investing in technical testing and documentation, we assess your device, define the optimal 510(k) strategy, identify the best predicate devices, and confirm the appropriate submission type (Traditional, Abbreviated, or Special 510(k)). Early strategy prevents costly surprises later.
                                </p>
                            </InfoBox>

                            <InfoBox variant="brand">
                                <h4 className="text-base font-bold text-navy-900 mb-2">Gap Analysis &amp; Submission Readiness Review</h4>
                                <p className="text-gray-700 text-[14px] leading-relaxed">
                                    We conduct a thorough pre-submission gap analysis to identify missing technical data, testing gaps, labeling deficiencies, or documentation issues before the FDA sees them. Our detailed gap analysis report gives you a clear action plan for achieving submission readiness.
                                </p>
                            </InfoBox>

                            <InfoBox variant="brand">
                                <h4 className="text-base font-bold text-navy-900 mb-2">510(k) Document Preparation (All 21 Sections)</h4>
                                <p className="text-gray-700 text-[14px] leading-relaxed">
                                    Our consultants prepare the complete 510(k) submission package — all 21 required sections including device description, substantial equivalence comparison, performance testing summaries, biocompatibility data, software documentation, labeling, and sterilization validation as applicable.
                                </p>
                            </InfoBox>

                            <InfoBox variant="brand">
                                <h4 className="text-base font-bold text-navy-900 mb-2">FDA Submission &amp; Review Management</h4>
                                <p className="text-gray-700 text-[14px] leading-relaxed">
                                    We handle the entire FDA submission process — preparing the eCopy, coordinating fee payments, and submitting through CDRH Direct or eSubmitter. We actively monitor submission status and manage all FDA correspondence on your behalf throughout the review process.
                                </p>
                            </InfoBox>

                            <InfoBox variant="brand">
                                <h4 className="text-base font-bold text-navy-900 mb-2">AI Request Response &amp; FDA Interaction Support</h4>
                                <p className="text-gray-700 text-[14px] leading-relaxed">
                                    When the FDA issues Additional Information (AI) requests, response quality and speed are critical. Our consultants draft precise, evidence-based responses that address FDA concerns effectively — reducing the likelihood of follow-up requests and keeping your review on track.
                                </p>
                            </InfoBox>

                            <InfoBox variant="brand">
                                <h4 className="text-base font-bold text-navy-900 mb-2">US Agent Services for Foreign Manufacturers</h4>
                                <p className="text-gray-700 text-[14px] leading-relaxed">
                                    Foreign medical device manufacturers require a US Agent to act as the official FDA contact for regulatory correspondence. E&amp;E Medicals provides US Agent services for 510(k) submissions and ongoing FDA communications for international clients.
                                </p>
                            </InfoBox>
                        </div>
                    </Section>

                    {/* Section 3: Who We Help */}
                    <Section>
                        <SectionHeading
                            badge="Who We Help"
                            title="Who Benefits from Our 510(k) Consulting Services?"
                        />

                        <FeatureList
                            columns={2}
                            items={[
                                "Medical device startups seeking first 510(k) clearance",
                                "Established manufacturers modifying cleared devices",
                                "Foreign manufacturers entering the U.S. market",
                                "Contract manufacturers needing regulatory support",
                                "IVD and diagnostic device companies",
                                "Digital health and SaMD developers",
                                "Orthopedic, cardiovascular, and surgical device OEMs",
                                "Companies with stalled or rejected 510(k) submissions",
                            ]}
                        />
                    </Section>

                    {/* Split break */}
                    <SplitSection
                        imageSrc="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1400"
                        imageAlt="FDA 510k consulting services medical device"
                        label="Our Track Record"
                    >
                        <div>
                            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-brand-50 border border-brand-100 text-brand-600 text-xs font-bold uppercase tracking-wider mb-5">
                                <span className="w-1.5 h-1.5 rounded-full bg-brand-400" />
                                32+ Years of Experience
                            </span>
                            <h2 className="font-display text-2xl font-extrabold text-navy-900 leading-tight mb-4">
                                Why Choose E&amp;E Medicals for Your 510(k)?
                            </h2>
                            <p className="text-gray-600 text-sm leading-relaxed mb-4">
                                Our consultants bring over three decades of FDA regulatory experience, direct relationships with CDRH reviewers, and a track record of successful 510(k) clearances across dozens of device categories.
                            </p>
                            <p className="text-gray-500 text-sm leading-relaxed">
                                We approach every 510(k) project with the same rigor: thorough predicate research, meticulous documentation, and proactive FDA communication — giving your device the strongest possible foundation for clearance.
                            </p>
                        </div>
                    </SplitSection>

                    {/* Section 4: Process */}
                    <Section>
                        <SectionHeading
                            badge="Our Process"
                            title="Our 510(k) Consulting Process: Two Stages to Clearance"
                        />

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <InfoBox variant="brand">
                                <h4 className="text-base font-bold text-navy-900 mb-3">Stage 1: Assessment &amp; Gap Analysis</h4>
                                <BulletList
                                    items={[
                                        "Device classification and product code identification",
                                        "Predicate device research and selection",
                                        "Applicable standards and testing identification",
                                        "Detailed gap analysis report",
                                        "Submission roadmap and timeline",
                                        "Cost estimation for testing and preparation",
                                    ]}
                                />
                            </InfoBox>

                            <InfoBox variant="brand">
                                <h4 className="text-base font-bold text-navy-900 mb-3">Stage 2: Document Preparation &amp; Submission</h4>
                                <BulletList
                                    items={[
                                        "Full 510(k) package preparation (all 21 sections)",
                                        "Labeling review and compliance check",
                                        "Performance testing coordination and review",
                                        "FDA eSubmission and fee coordination",
                                        "Active management during FDA review",
                                        "AI request response and clearance follow-up",
                                    ]}
                                />
                            </InfoBox>
                        </div>
                    </Section>

                    {/* Section 5: Related Resources */}
                    <Section>
                        <SectionHeading
                            badge="Related Resources"
                            title="Helpful 510(k) Resources"
                        />

                        <div className="text-gray-700 leading-relaxed text-[15px] md:text-base space-y-4">
                            <p>
                                Before starting your 510(k) project, explore these related resources from E&amp;E Medicals:
                            </p>
                            <BulletList
                                items={[
                                    "Complete 510(k) Submission Guide — step-by-step process overview",
                                    "Medical Device FDA Approval Process — full pathway comparison",
                                    "FDA Establishment Registration — required after clearance",
                                    "FDA QMS Requirements — 21 CFR Part 820 compliance",
                                    "Medical Device Regulatory Strategy — planning your market entry",
                                ]}
                            />
                            <div className="pt-4 space-y-2">
                                <p>
                                    <Link to="/fda-510k-submission-guide" className="text-brand-600 hover:underline font-medium">Read the Complete 510(k) Submission Guide →</Link>
                                </p>
                                <p>
                                    <Link to="/medical-device-fda-approval-process" className="text-brand-600 hover:underline font-medium">Explore the Full FDA Approval Process →</Link>
                                </p>
                                <p>
                                    <Link to="/fda-establishment-registration" className="text-brand-600 hover:underline font-medium">Learn About FDA Establishment Registration →</Link>
                                </p>
                            </div>
                        </div>
                    </Section>

                    {/* Page CTA */}
                    <PageCTA
                        title="Start Your 510(k) Submission Today"
                        subtitle="Our FDA 510(k) consultants are ready to assess your device and build a clearance strategy that works. Contact us for a free consultation."
                        linkLabel="Request a Free 510(k) Consultation"
                        linkTo="/share-your-project"
                    />
                </InnerContent>
            </main>

            <Footer />
        </div>
    );
};
