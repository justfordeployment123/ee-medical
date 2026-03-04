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
    "SaMD change taxonomy (locked vs adaptive)",
    "Algorithm Change Protocol (ACP)",
    "Model update validation plan",
    "Drift monitoring & acceptance thresholds",
    "FDA-acceptable PCCP narrative",
];

export const PccpAuthoring: React.FC = () => {
    return (
        <div className="w-full bg-white font-sans flex flex-col min-h-screen">
            <Header />

            <main className="grow">
                <PageHeader
                    title="Predetermined Change Control Plan (PCCP) Authoring"
                    breadcrumb="PCCP Authoring"
                />

                <InnerContent>
                    <HeroImage
                        src="https://images.unsplash.com/photo-1555255707-c07966088b7b?q=80&w=1400"
                        alt="Predetermined change control plan software development"
                        label="PCCP Authoring"
                    />
                    <Section>
                        <SectionHeading badge="Regulatory Strategy" title="PCCP Framework" />
                        <div className="space-y-6">
                            <p className="text-gray-700 leading-relaxed">
                                We prepare a Predetermined Change Control Plan (PCCP) that defines a structured, prospective framework for managing anticipated changes to a regulated product, process, or system following regulatory authorization. The purpose of this PCCP is to ensure predefined changes are implemented in a controlled, transparent, and compliant manner without compromising product quality, safety, or effectiveness, while maintaining regulatory compliance and oversight.
                            </p>
                            <p className="text-gray-700 leading-relaxed">
                                The PCCP establishes boundaries, controls, and governance mechanisms to execute, verify, document, and approve changes. Changes executed under this PCCP are limited to those explicitly defined herein and are subject to risk-based assessment and predefined acceptance criteria.
                            </p>
                            <p className="text-gray-700 leading-relaxed">
                                <strong className="text-navy-900">Purpose:</strong> Enable post-approval AI updates without re-submission failure.
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
                                    <p className="text-2xl font-extrabold text-navy-900 font-display">4–8 weeks</p>
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
