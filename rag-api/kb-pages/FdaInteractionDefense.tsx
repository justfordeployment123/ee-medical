import React from "react";
import { PageHeader } from "../components/shared/PageHeader";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Link } from "react-router-dom";
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
    "Pre-Sub briefing package (AI-focused)",
    "Mock FDA deficiency letters",
    "Reviewer-style Q&A scripts",
    "Advisory panel defense slides",
    "Response drafting support",
];

export const FdaInteractionDefense: React.FC = () => {
    return (
        <div className="w-full bg-white font-sans flex flex-col min-h-screen">
            <Header />

            <main className="grow">
                <PageHeader
                    title="FDA Interaction & Defense Support"
                    breadcrumb="FDA Interaction Defense"
                />

                <InnerContent>
                    <HeroImage
                        src="https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1400"
                        alt="FDA interaction and defense support regulatory meeting"
                        label="FDA Defense Support"
                    />
                    <Section>
                        <SectionHeading badge="FDA Strategy" title="FDA Defense Support Plan" />
                        <div className="space-y-6">
                            <InfoBox variant="brand">
                                <p className="text-lg italic font-medium text-gray-800">
                                    "We de-risk AI healthcare products by designing regulatory-approvable AI systems and pre-empting FDA review failures."
                                </p>
                            </InfoBox>
                            <p className="text-gray-700 leading-relaxed">
                                We prepare a comprehensive, FDA-ready Interaction & Defense Support Plan for direct internal use across PMA, 510(k), De Novo, IND/IDE, AI/ML SaMD, CDx, NGS, or clinical trial interactions.
                            </p>
                            <p className="text-gray-700 leading-relaxed">
                                <strong className="text-navy-900">Purpose:</strong> Survive Pre-Subs, Interactive Review, and Panels.
                            </p>
                        </div>
                    </Section>

                    <Section>
                        <SectionHeading badge="Deliverables" title="Deliverables & Engagement" />
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                            <div>
                                <h3 className="font-display text-xl font-semibold text-navy-900 mb-6">What You Receive</h3>
                                <FeatureList items={deliverables} />
                            </div>
                            <div className="flex flex-col gap-6 justify-center">
                                <InfoBox variant="light">
                                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Duration</p>
                                    <p className="text-2xl font-extrabold text-navy-900 font-display">As needed</p>
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
