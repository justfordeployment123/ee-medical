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
    "AI-specific Design History File (DHF)",
    "Training/test dataset governance SOPs",
    "Bias, fairness, and representativeness controls",
    "Software V&V framework (AI-specific)",
    "Traceability matrix (requirements → model → clinical claims)",
];

export const AiDesignControls: React.FC = () => {
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
                        src="https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?q=80&w=1400"
                        alt="AI design controls QMSR integration medical device"
                        label="AI Design Controls"
                    />
                    <Section>
                        <SectionHeading badge="AI/ML Compliance" title="QMS Integration for AI/ML" />
                        <div className="space-y-6">
                            <p className="text-gray-700 leading-relaxed">
                                We integrate AI/ML-specific design controls into an existing medical device QMS so that AI-enabled products (including AI SaMD and AI components embedded in hardware systems) are developed, verified and validated, released, and maintained in compliance with FDA 21 CFR 820 (and the QMSR transition principles) and ISO 13485, while remaining scalable for iterative model updates.
                            </p>
                            <p className="text-gray-700 leading-relaxed">
                                <strong className="text-navy-900">Purpose:</strong> Make AI design controls inspection-ready.
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
                                    <p className="text-2xl font-extrabold text-navy-900 font-display">6–10 weeks</p>
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
