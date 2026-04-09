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
    HeroImage,
    Section,
    InfoBox,
    PageCTA,
} from "../components/shared/InnerPage";

const deliverables = [
    "AI-specific Design History File (DHF)",
    "Training/test dataset governance SOPs",
    "Bias, fairness, and representativeness controls",
    "Software V&V framework (AI-specific)",
    "Traceability matrix (requirements → model → clinical claims)",
];

export const AiDesignControls: React.FC = () => {
    const content = useContent("ai_design_controls");
    const hero = content?.hero;
    const integration = content?.integration;
    const deliverablesSection = content?.deliverables;

    const items = [deliverablesSection?.item1, deliverablesSection?.item2, deliverablesSection?.item3, deliverablesSection?.item4].filter(Boolean) as string[];

    return (
        <div className="w-full bg-white font-sans flex flex-col min-h-screen">
            <Header />

            <main className="grow">
                <PageHeader
                    title="AI Design Controls & QMSR Integration"
                    breadcrumb="AI Design Controls"
                />

                <InnerContent>
                    <HeroImage
                        src={hero?.hero_image || "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?q=80&w=1400"}
                        alt={hero?.hero_image_alt || "AI design controls QMSR integration medical device"}
                        label={hero?.badge_text || "AI Design Controls"}
                    />
                    <Section>
                        <SectionHeading badge={integration?.badge_text || "AI/ML Compliance"} title={integration?.title || "QMS Integration for AI/ML"} />
                        <div className="space-y-6">
                            <p className="text-gray-700 leading-relaxed">{integration?.paragraph1 || "We integrate AI/ML-specific design controls into medical device QMS so products are developed, validated, released, and maintained in compliance with FDA and ISO expectations."}</p>
                            <p className="text-gray-700 leading-relaxed">
                                <strong className="text-navy-900">Purpose:</strong> {integration?.purpose_text || "Make AI design controls inspection-ready."}
                            </p>
                        </div>
                    </Section>

                    <Section>
                        <SectionHeading badge={deliverablesSection?.badge_text || "Deliverables"} title={deliverablesSection?.title || "Deliverables & Engagement"} />
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                            <div>
                                <h3 className="font-display text-xl font-semibold text-navy-900 mb-6">What You Receive</h3>
                                <FeatureList items={items.length ? items : deliverables} />
                            </div>
                            <div className="flex flex-col gap-6 justify-center">
                                <InfoBox variant="light">
                                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">{deliverablesSection?.duration_label || "Duration"}</p>
                                    <p className="text-2xl font-extrabold text-navy-900 font-display">{deliverablesSection?.duration_value || "6–10 weeks"}</p>
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
