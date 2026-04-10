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

const methodologySteps = [
    "Gap assessment",
    "Quality management system upgrade",
    "Training",
    "Internal audit",
    "Certification audit",
];

export const Iso14971: React.FC = () => {
    const content = useContent("iso14971");
    const hero = content?.hero;
    const expert = content?.expert;
    const implementation = content?.implementation;

    const steps = [
        implementation?.step1,
        implementation?.step2,
        implementation?.step3,
        implementation?.step4,
        implementation?.step5,
    ].filter(Boolean) as string[];

    return (
        <div className="w-full bg-white font-sans flex flex-col min-h-screen">
            <title>ISO 14971 Risk Management for Medical Devices — Compliance Consulting | E&E Medicals</title>
            <meta name="description" content="ISO 14971 risk management consulting for medical devices — risk analysis, risk evaluation, risk control, and residual risk assessment to meet FDA and EU MDR requirements." />
            <Header />

            <main className="grow">
                <PageHeader
                    title="ISO 14971 medical device risk management for medical devices"
                    breadcrumb="ISO 14971 medical device risk management"
                />

                <InnerContent>
                    <HeroImage
                        src={hero?.hero_image || "https://images.unsplash.com/photo-1598520106830-8c45c2035460?q=80&w=1400"}
                        alt={hero?.hero_image_alt || "ISO 14971 medical device risk management lifecycle"}
                        label={hero?.badge_text || "ISO 14971 Risk Management"}
                    />

                    <Section>
                        <SectionHeading badge={expert?.badge_text || "Risk Management"} title={expert?.title || "ISO 14971 Medical Device Risk Management Expert"} />
                        <div className="space-y-6 text-gray-700 leading-relaxed text-[15px] md:text-base">
                            <p>{expert?.paragraph1 || "ISO 14971 compliance helps manufacturers evaluate and control risks associated with medical devices."}</p>
                            <p>{expert?.paragraph2 || "ISO 14971 is an integral international standard for satisfying risk-related requirements in major regulatory markets."}</p>
                            <InfoBox variant="light">
                                <p className="text-center text-sm italic text-gray-500">
                                    [{expert?.diagram_note || "Image diagram of the ISO 14971 Risk Management Life Cycle"}]
                                </p>
                            </InfoBox>
                        </div>
                    </Section>

                    <Section>
                        <SectionHeading badge={implementation?.badge_text || "Implementation"} title={implementation?.title || "ISO 14971 Medical Devices Risk Management Implementation Service"} />
                        <div className="space-y-6 text-gray-700 leading-relaxed text-[15px] md:text-base">
                            <p>
                                <Link to="/" className="text-brand-500 hover:text-brand-600 hover:underline">E & E Medicals</Link>{" "}
                                and Consulting {implementation?.intro_text || "will assist you with ISO 14971 implementation using a 5-step methodology:"}
                            </p>
                            <FeatureList items={steps.length ? steps : methodologySteps} />
                            <p>{implementation?.closing_text || "This can be integrated into an ISO 13485 certification program with all required documentation provided."}</p>
                        </div>
                    </Section>

                    <PageCTA />
                </InnerContent>
            </main>

            <Footer />
        </div>
    );
};
