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

export const MedicalDeviceRegulatoryStrategy: React.FC = () => {
    return (
        <div className="w-full bg-white font-sans flex flex-col min-h-screen">
            <PageMeta
                title="Medical Device Regulatory Strategy: From Concept to Market"
                description="Build a winning medical device regulatory strategy — pathway selection, clinical evidence planning, risk management, global market access, and AI/SaMD strategy."
            />
            <Header />

            <main className="grow">
                <PageHeader
                    title="Medical Device Regulatory Strategy: From Concept to Market"
                    breadcrumb="Regulatory Strategy"
                />

                <InnerContent>
                    {/* Section 1: Overview */}
                    <section>
                        <SectionHeading
                            badge="Regulatory Strategy"
                            title="What Is a Medical Device Regulatory Strategy — and Why Does It Matter?"
                            subtitle="A well-designed regulatory strategy can cut years off your time to market, reduce costs, and prevent the costly mistakes that derail device programs."
                        />

                        <div className="text-gray-700 leading-relaxed text-[15px] md:text-base space-y-5">
                            <p>
                                A medical device regulatory strategy is a roadmap that defines how a manufacturer will achieve and maintain market authorization for a medical device — across one or multiple global markets. It encompasses device classification, pathway selection, clinical and technical evidence requirements, quality system readiness, and post-market obligations.
                            </p>
                            <p>
                                Companies that develop a regulatory strategy early — ideally at the concept phase — significantly reduce their risk of regulatory surprises, failed submissions, and costly design changes late in development. Those who engage regulatory expertise only at submission often discover that their technical files, testing plans, or product designs do not meet regulatory requirements, requiring expensive rework.
                            </p>
                            <p>
                                E&amp;E Medicals and Consulting provides regulatory strategy services for startups launching their first device and for established manufacturers expanding into new markets or developing next-generation products. Our approach integrates regulatory planning into your product development lifecycle from day one.
                            </p>
                        </div>
                    </section>

                    {/* Section 2: Key Elements */}
                    <Section>
                        <SectionHeading
                            badge="Strategy Components"
                            title="Key Elements of a Medical Device Regulatory Strategy"
                        />

                        <div className="space-y-4">
                            <InfoBox variant="brand">
                                <h4 className="text-base font-bold text-navy-900 mb-2">1. Device Classification &amp; Intended Use Definition</h4>
                                <p className="text-gray-700 text-[14px] leading-relaxed">
                                    Precisely defining the intended use and indications for use is the foundation of any regulatory strategy. Classification determines which pathway applies, which standards are relevant, and what level of clinical evidence is required. Ambiguous intended use statements are a common source of regulatory problems.
                                </p>
                            </InfoBox>

                            <InfoBox variant="brand">
                                <h4 className="text-base font-bold text-navy-900 mb-2">2. Regulatory Pathway Selection (510k, PMA, De Novo, CE Mark)</h4>
                                <p className="text-gray-700 text-[14px] leading-relaxed">
                                    Selecting the optimal pathway requires analyzing device classification, predicate availability, risk profile, clinical evidence, and target markets. A strategic pathway decision — such as choosing between 510(k) and De Novo — can mean a difference of years in time to market.
                                </p>
                            </InfoBox>

                            <InfoBox variant="brand">
                                <h4 className="text-base font-bold text-navy-900 mb-2">3. Market Prioritization (U.S., EU, Canada, etc.)</h4>
                                <p className="text-gray-700 text-[14px] leading-relaxed">
                                    Different markets have different regulatory requirements, timelines, and costs. A global regulatory strategy helps manufacturers sequence market entries efficiently — often starting with markets where the pathway is most favorable given the device's evidence base.
                                </p>
                            </InfoBox>

                            <InfoBox variant="brand">
                                <h4 className="text-base font-bold text-navy-900 mb-2">4. Clinical &amp; Non-Clinical Evidence Planning</h4>
                                <p className="text-gray-700 text-[14px] leading-relaxed">
                                    Determining what clinical data, performance testing, and biocompatibility assessments are required — and planning to generate this evidence efficiently — is critical. Regulatory strategy informs study design, lab selection, and testing timelines to avoid last-minute evidence gaps.
                                </p>
                            </InfoBox>

                            <InfoBox variant="brand">
                                <h4 className="text-base font-bold text-navy-900 mb-2">5. Quality System Readiness</h4>
                                <p className="text-gray-700 text-[14px] leading-relaxed">
                                    A compliant quality management system must be in place before regulatory submission. Your regulatory strategy must account for QMS implementation timelines — particularly for startups building their QMS from scratch. See our{" "}
                                    <Link to="/fda-qms-requirements" className="text-brand-600 hover:underline">FDA QMS requirements guide</Link>{" "}for details.
                                </p>
                            </InfoBox>

                            <InfoBox variant="brand">
                                <h4 className="text-base font-bold text-navy-900 mb-2">6. Risk Management Integration (ISO 14971)</h4>
                                <p className="text-gray-700 text-[14px] leading-relaxed">
                                    Risk management under ISO 14971 is a regulatory requirement for both FDA and international submissions. A strong risk management file demonstrates systematic hazard identification, risk control, and residual risk evaluation — and underpins clinical evaluation and design control activities.
                                </p>
                            </InfoBox>
                        </div>
                    </Section>

                    {/* Section 3: Startups vs Established */}
                    <Section>
                        <SectionHeading
                            badge="Who We Help"
                            title="Regulatory Strategy for Startups vs. Established Manufacturers"
                        />

                        <div className="text-gray-700 leading-relaxed text-[15px] md:text-base space-y-5 mb-8">
                            <p>
                                The regulatory strategy challenges differ significantly between first-time device developers and established manufacturers. Our consulting approach is tailored to your specific situation.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <InfoBox variant="brand">
                                <h4 className="text-base font-bold text-navy-900 mb-3">For Medical Device Startups</h4>
                                <BulletList
                                    items={[
                                        "Early-stage classification and pathway assessment",
                                        "Investor-ready regulatory roadmap",
                                        "QMS implementation from the ground up",
                                        "Pre-Submission (Q-Sub) FDA meeting support",
                                        "Clinical study design guidance",
                                        "Budget and timeline planning for regulatory milestones",
                                    ]}
                                />
                            </InfoBox>

                            <InfoBox variant="brand">
                                <h4 className="text-base font-bold text-navy-900 mb-3">For Established Manufacturers</h4>
                                <BulletList
                                    items={[
                                        "Product line expansion regulatory assessment",
                                        "Device modification 510(k) change analysis",
                                        "International market entry strategy",
                                        "Post-market surveillance strategy",
                                        "Legacy device regulatory file remediation",
                                        "Merger/acquisition regulatory due diligence",
                                    ]}
                                />
                            </InfoBox>
                        </div>
                    </Section>

                    {/* Split break */}
                    <SplitSection
                        imageSrc="https://images.unsplash.com/photo-1551601651-2a8555f1a136?q=80&w=1400"
                        imageAlt="Medical device regulatory strategy consulting"
                        label="Global Strategy"
                    >
                        <div>
                            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-brand-50 border border-brand-100 text-brand-600 text-xs font-bold uppercase tracking-wider mb-5">
                                <span className="w-1.5 h-1.5 rounded-full bg-brand-400" />
                                Global Market Access
                            </span>
                            <h2 className="font-display text-2xl font-extrabold text-navy-900 leading-tight mb-4">
                                FDA vs CE Mark: Dual-Market Strategy
                            </h2>
                            <p className="text-gray-600 text-sm leading-relaxed mb-4">
                                Many manufacturers need FDA clearance and EU CE marking simultaneously. A coordinated dual-market strategy leverages overlapping evidence requirements, reduces redundant testing, and sequences submissions for maximum efficiency.
                            </p>
                            <p className="text-gray-500 text-sm leading-relaxed">
                                Our team is experienced in both FDA and EU MDR/IVDR requirements — helping manufacturers build a single technical file that supports multiple regulatory submissions.
                            </p>
                        </div>
                    </SplitSection>

                    {/* Section 4: AI/SaMD Strategy */}
                    <Section>
                        <SectionHeading
                            badge="AI &amp; SaMD"
                            title="Regulatory Strategy for AI Medical Devices and SaMD"
                        />

                        <div className="text-gray-700 leading-relaxed text-[15px] md:text-base space-y-5 mb-8">
                            <p>
                                Software as a Medical Device (SaMD) and AI-powered medical technologies present unique regulatory challenges that require specialized strategy. The FDA has published an AI/ML-based SaMD action plan and a proposed regulatory framework for Predetermined Change Control Plans (PCCP) — both of which significantly affect how AI device programs must be structured.
                            </p>
                            <p>
                                Early engagement with FDA through Pre-Submission meetings is particularly important for AI/SaMD developers, as the regulatory landscape continues to evolve rapidly.
                            </p>
                        </div>

                        <BulletList
                            columns={2}
                            items={[
                                "SaMD classification and IEC 62304 software lifecycle",
                                "AI/ML model validation strategy for FDA submission",
                                "Predetermined Change Control Plan (PCCP) authoring",
                                "Clinical evaluation for AI diagnostic tools",
                                "Cybersecurity requirements for connected devices",
                                "De Novo pathway for novel AI devices",
                                "Post-market performance monitoring for adaptive AI",
                                "EU AI Act considerations for medical AI devices",
                            ]}
                        />

                        <div className="mt-8 text-gray-700 text-[15px] leading-relaxed">
                            <p>
                                Explore our dedicated{" "}
                                <Link to="/ai-samd-pathway" className="text-brand-600 hover:underline font-medium">SaMD regulatory pathway services</Link>
                                {" "}and{" "}
                                <Link to="/ai-fda-readiness" className="text-brand-600 hover:underline font-medium">AI FDA readiness consulting</Link>
                                {" "}for in-depth support.
                            </p>
                        </div>
                    </Section>

                    {/* Section 5: Our Services */}
                    <Section>
                        <SectionHeading
                            badge="Our Services"
                            title="Regulatory Strategy Services from E&amp;E Medicals"
                        />

                        <FeatureList
                            columns={2}
                            items={[
                                "Regulatory strategy development and roadmapping",
                                "Device classification and pathway selection",
                                "Pre-Submission (Q-Sub) meeting preparation",
                                "Clinical evidence and testing planning",
                                "Risk management strategy (ISO 14971)",
                                "Global market access planning (FDA, EU, Canada)",
                                "AI/SaMD regulatory strategy and PCCP authoring",
                                "Regulatory due diligence for M&A transactions",
                                "Regulatory affairs training for device teams",
                                "Ongoing regulatory strategy advisory services",
                            ]}
                        />
                    </Section>

                    {/* Page CTA */}
                    <PageCTA
                        title="Build Your Regulatory Strategy Today"
                        subtitle="Work with our expert consultants to create a clear regulatory roadmap — from concept to U.S. and global market access."
                        linkLabel="Schedule a Regulatory Strategy Session"
                        linkTo="/share-your-project"
                    />
                </InnerContent>
            </main>

            <Footer />
        </div>
    );
};
