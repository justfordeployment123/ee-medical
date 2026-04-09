import React from "react";
import { PageHeader } from "../components/shared/PageHeader";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Link } from "react-router-dom";
import { useContent } from "../hooks/useContent";
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

const gapAssessmentSubItems = [
    "21 CFR 820 / QMSR",
    "21 CFR 814 / 807",
    "FDA AI/ML SaMD guidance",
    "IMDRF SaMD",
];

const additionalDeliverables = [
    "AI-specific deficiency heatmap",
    "\u201cHigh-probability FDA questions\u201d list",
    "Remediation plan with owners",
];

export const AiFdaReadiness: React.FC = () => {
    const content = useContent("ai_fda_readiness");
    const hero = content?.hero;
    const audit = content?.audit;
    const deliverables = content?.deliverables;

    const deliverableItems = [deliverables?.item1, deliverables?.item2, deliverables?.item3, deliverables?.item4].filter(Boolean) as string[];

    return (
        <div className="w-full bg-white font-sans flex flex-col min-h-screen">
            <Header />

            <main className="grow">
                <PageHeader
                    title="AI FDA Readiness & Deficiency Risk Audit"
                    breadcrumb="FDA Readiness Risk Audit"
                />

                <InnerContent>
                    <HeroImage
                        src={hero?.hero_image || "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1400"}
                        alt={hero?.hero_image_alt || "AI FDA readiness audit neural network medical"}
                        label={hero?.badge_text || "AI FDA Readiness Audit"}
                    />
                    <Section>
                        <SectionHeading badge={audit?.badge_text || "FDA Readiness"} title={audit?.title || "FDA Readiness Audit"} />
                        <div className="space-y-5">
                            <InfoBox variant="brand">
                                <p className="text-lg italic font-medium text-gray-800">
                                    "{audit?.quote_text || "We have an AI model — but we don't know how to make it regulatory-approvable, clinically credible, reimbursable, and scalable."}"
                                </p>
                            </InfoBox>
                            <p className="text-gray-700 leading-relaxed">
                                {audit?.paragraph1 || "We prepare an FDA-ready, AI-specific Readiness & Deficiency Risk Audit package for AI/ML SaMD and AI-enabled software."}
                            </p>
                            <p className="text-gray-700 leading-relaxed">
                                <strong className="text-navy-900">Purpose:</strong> {audit?.purpose_text || "Predict FDA deficiencies before submission."}
                            </p>
                        </div>
                    </Section>

                    <Section>
                        <SectionHeading badge={deliverables?.badge_text || "Deliverables"} title={deliverables?.title || "Deliverables & Engagement"} />
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                            <div>
                                <h3 className="font-display text-xl font-semibold text-navy-900 mb-6">What You Receive</h3>
                                <div className="space-y-5">
                                    <div className="flex items-start gap-3">
                                        <div className="w-5 h-5 rounded-full bg-brand-50 border border-brand-200 flex items-center justify-center shrink-0 mt-0.5">
                                            <div className="w-2 h-2 rounded-full bg-brand-500" />
                                        </div>
                                        <div>
                                            <span className="font-semibold text-navy-900 text-sm">Line-by-line gap assessment vs:</span>
                                            <BulletList items={gapAssessmentSubItems} className="mt-2 ml-2" />
                                        </div>
                                    </div>
                                    <FeatureList items={deliverableItems.length ? deliverableItems : additionalDeliverables} />
                                </div>
                            </div>
                            <div className="flex flex-col gap-6 justify-center">
                                <InfoBox variant="light">
                                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">{deliverables?.duration_label || "Duration"}</p>
                                    <p className="text-2xl font-extrabold text-navy-900 font-display">{deliverables?.duration_value || "3–6 weeks"}</p>
                                </InfoBox>
                                <p className="font-medium text-gray-700">
                                    For more details, submit your details at{" "}
                                    <Link to="/contact" className="text-brand-600 hover:underline font-semibold">
                                        our contact form
                                    </Link>.
                                </p>
                            </div>
                        </div>
                    </Section>

                    <PageCTA />
                </InnerContent>
            </main>

            <Footer />
        </div>
    );
};
