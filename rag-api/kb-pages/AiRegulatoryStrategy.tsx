import React from "react";
import { PageHeader } from "../components/shared/PageHeader";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import {
    InnerContent,
    SectionHeading,
    FeatureList,
    BulletList,
    HeroImage,
    Section,
    InfoBox,
    PageCTA,
} from "../components/shared/InnerPage";
import heroImage from "../assets/hero.jpeg";
import aiImage from "../assets/AI.jpeg";

const whatMakesUsDifferent = [
    "Most regulatory firms treat AI like traditional software. We don\u2019t.",
    "Integrated view of <strong>FDA AI/ML expectations</strong> (PCCP, lifecycle controls).",
    "Harmonized <strong>EU MDR clinical and technical documentation</strong> with AI-specific files.",
    "<strong>EU AI Act high-risk system</strong> requirements mapped into your QMS.",
    "Alignment across <strong>ISO 13485, ISO 14971, IEC 62304</strong> for AI-enabled devices.",
    "<strong>Result:</strong> Faster approvals. Fewer deficiencies. Stronger investor confidence.",
];

const lifecycleGovernance = [
    "End-to-end <strong>AI lifecycle governance framework</strong> tied into your QMS.",
    "Model <strong>drift monitoring</strong> plans with measurable performance thresholds.",
    "Post-market <strong>AI performance dashboards</strong> for regulators, clinicians, and executives.",
    "Integrated change control under <strong>PCCP</strong> and the <strong>EU AI Act</strong>.",
];

const whoWeServe = [
    "AI imaging companies building diagnostic and workflow tools.",
    "Digital diagnostics developers seeking global market access.",
    "Remote monitoring platforms combining devices, sensors, and AI analytics.",
    "Venture capital and private equity portfolios with AI MedTech assets.",
    "Global MedTech scale-ups expanding into the US and EU.",
];

const whyInvestorsChoose = [
    "Reduced regulatory rework and late-stage deficiencies.",
    "Accelerated market access across the US and Europe.",
    "Increased portfolio valuation through <strong>regulatory de-risking</strong>.",
    "Pre-exit and pre-diligence compliance readiness for buyers and regulators.",
];

const commonPitfalls = [
    "Poor or incomplete <strong>dataset documentation</strong> (provenance, labeling, curation).",
    "Lack of clarity on <strong>human oversight</strong> and human-in-the-loop controls.",
    "No post-market <strong>AI drift monitoring</strong> or retraining criteria.",
    "Inadequate <strong>bias, fairness, and representativeness</strong> testing evidence.",
    "No defined <strong>update governance framework</strong> linking PCCP and AI Act obligations.",
];

export const AiRegulatoryStrategy: React.FC = () => {
    return (
        <div className="w-full bg-white font-sans flex flex-col min-h-screen">
            <Header />

            <main className="grow">
                <PageHeader
                    title="AI Regulatory Strategy for the Next Generation of Medical Innovation"
                    breadcrumb="AI Regulatory Strategy"
                />

                <InnerContent>
                    <HeroImage
                        src={heroImage}
                        alt="AI regulatory strategy in digital healthcare"
                        label="AI-Enabled Regulatory Strategy"
                    />

                    <Section>
                        <SectionHeading
                            badge="AI-Enabled Regulatory"
                            title="Global Regulatory Intelligence for AI-Enabled Medical Technologies"
                        />
                        <div className="space-y-5 text-gray-800 leading-relaxed">
                            <p>
                                E&amp;E Medicals &amp; Consulting is a{" "}
                                <strong className="text-navy-900">global regulatory intelligence partner</strong> for AI-enabled medical technologies.
                                We align <strong className="text-navy-900">FDA</strong>, <strong className="text-navy-900">EU MDR</strong>, and the{" "}
                                <strong className="text-navy-900">EU AI Act</strong> into a single, execution-ready compliance strategy so that AI can
                                move from prototype to market with confidence.
                            </p>
                            <p>
                                Our <strong className="text-navy-900">global AI Compliance Framework</strong> accelerates approvals, reduces regulatory
                                friction, and strengthens investor confidence across portfolio companies.
                            </p>
                            <p className="font-medium text-navy-900">
                                Serving AI imaging, digital diagnostics, remote monitoring platforms, and global MedTech innovators.
                            </p>
                        </div>
                    </Section>

                    <Section>
                        {/* Image on top - compact height, no black empty space */}
                        <div className="relative rounded-xl overflow-hidden mb-10 h-[220px] md:h-[260px] max-h-[260px] bg-slate-100 flex items-center justify-center">
                            <img
                                src={aiImage}
                                alt="AI imaging, digital diagnostics, and remote monitoring platforms"
                                className="w-full h-full object-contain object-center"
                            />
                            <div className="absolute bottom-4 left-4">
                                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-brand-500/90 backdrop-blur-sm text-white text-sm font-bold uppercase tracking-wider shadow-lg">
                                    AI Imaging, Diagnostics & Remote Monitoring
                                </span>
                            </div>
                        </div>

                        <SectionHeading
                            badge="Regulatory Services"
                            title="Regulatory Services for AI Medical Devices Sold in the US or Europe"
                        />
                        <div className="space-y-8 text-gray-800 leading-relaxed">
                            <p>
                                If your medical device includes <strong className="text-navy-900">AI-enabled software</strong>, E&amp;E Medicals helps you
                                coordinate compliance across the European AI Act, EU MDR/IVDR, and US FDA expectations so you can scale globally without
                                rebuilding your regulatory strategy for each market.
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-3">
                                    <h3 className="font-display text-lg font-bold text-navy-900">
                                        European AI Act Requirements Service
                                    </h3>
                                    <p>
                                        The <strong className="text-navy-900">European AI Act</strong> introduces strict requirements for AI systems used
                                        in medical devices. Many devices already covered by the MDR and IVDR are now classified as{" "}
                                        <strong className="text-navy-900">high-risk AI systems</strong> and must undergo conformity assessment by Notified
                                        Bodies authorized to review AI-integrated devices.
                                    </p>
                                    <p>
                                        We help you <strong className="text-navy-900">classify your AI system</strong> according to AI Act risk categories,
                                        design proportionate <strong className="text-navy-900">risk management plans</strong>, and implement AI-specific{" "}
                                        <strong className="text-navy-900">QMS, vigilance, and cybersecurity controls</strong>. We also coordinate compliance
                                        between MDR/IVDR and the AI Act to avoid confusion, duplicate effort, and inconsistent documentation.
                                    </p>
                                </div>

                                <div className="space-y-3">
                                    <h3 className="font-display text-lg font-bold text-navy-900">
                                        US FDA AI Requirements Service
                                    </h3>
                                    <p>
                                        For the US market, we align your AI-enabled device with <strong className="text-navy-900">FDA\u2019s evolving AI/ML guidance</strong>.
                                        We develop an <strong className="text-navy-900">FDA pre-submission plan</strong> so you can engage early with reviewers
                                        and confirm expectations before investing in expensive evidence packages.
                                    </p>
                                    <p>
                                        Our team supports the design and submission of <strong className="text-navy-900">Predetermined Change Control Plans (PCCP)</strong>,
                                        so model updates remain compliant over time. We also help define post-market plans for{" "}
                                        <strong className="text-navy-900">real-world evidence, Good Machine Learning Practice (GMLP)</strong>, and lifecycle
                                        monitoring of AI performance.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Section>

                    <Section>
                        <SectionHeading
                            badge="Why E&E"
                            title="What Makes Us Different"
                        />
                        <div className="space-y-6">
                            <InfoBox variant="brand">
                                <p className="leading-relaxed">
                                    Most regulatory firms treat AI like traditional software. We don&apos;t. Our work assumes{" "}
                                    <strong className="text-navy-900">continuous learning, model updates, and data drift</strong> from day one.
                                </p>
                            </InfoBox>
                            <FeatureList items={whatMakesUsDifferent} columns={2} />
                        </div>
                    </Section>

                    <Section>
                        <SectionHeading
                            badge="Lifecycle Governance"
                            title="Lifecycle AI Governance"
                        />
                        <FeatureList items={lifecycleGovernance} columns={2} />
                    </Section>

                    <Section>
                        <SectionHeading
                            badge="Who We Serve"
                            title="Who We Serve"
                        />
                        <BulletList items={whoWeServe} columns={2} />
                    </Section>

                    <Section>
                        <SectionHeading
                            badge="Investor Outcomes"
                            title="Why Investors Choose E&amp;E"
                        />
                        <FeatureList items={whyInvestorsChoose} columns={2} />
                    </Section>

                    <Section>
                        <SectionHeading
                            badge="Avoidable Risks"
                            title="Common Compliance Pitfalls"
                        />
                        <InfoBox variant="warning">
                            <BulletList items={commonPitfalls} />
                        </InfoBox>
                    </Section>

                    <PageCTA />
                </InnerContent>
            </main>

            <Footer />
        </div>
    );
};

