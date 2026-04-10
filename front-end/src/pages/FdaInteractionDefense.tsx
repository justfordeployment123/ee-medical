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

export const FdaInteractionDefense: React.FC = () => {
    const content = useContent('fda_defense');
    const hero = content?.hero;
    const deliverables = content?.deliverables;

    // Build deliverables list from admin content
    const deliverablesList = [
        deliverables?.item1,
        deliverables?.item2,
        deliverables?.item3,
        deliverables?.item4,
        deliverables?.item5,
    ].filter(Boolean) as string[];

    return (
        <div className="w-full bg-white font-sans flex flex-col min-h-screen">
            <title>FDA Interaction & Defense Services for Medical Device Manufacturers | E&E Medicals</title>
            <meta name="description" content="FDA interaction and defense consulting — pre-submission meeting preparation, inspection response strategy, and regulatory defense for medical device manufacturers." />
            <Header />

            <main className="grow">
                <PageHeader
                    title="FDA Interaction & Defense Support"
                    breadcrumb="FDA Interaction Defense"
                />

                <InnerContent>
                    {hero?.hero_image && (
                        <HeroImage
                            src={hero.hero_image}
                            alt={hero.hero_image_alt || "FDA interaction and defense support regulatory meeting"}
                            label={hero.badge_text || "FDA Defense Support"}
                        />
                    )}
                    <Section>
                        <SectionHeading 
                            badge={hero?.badge_text || "FDA Strategy"} 
                            title={hero?.title || "FDA Defense Support Plan"} 
                        />
                        <div className="space-y-6">
                            {hero?.quote_text && (
                                <InfoBox variant="brand">
                                    <p className="text-lg italic font-medium text-gray-800">
                                        "{hero.quote_text}"
                                    </p>
                                </InfoBox>
                            )}
                            {hero?.description && (
                                <p className="text-gray-700 leading-relaxed">
                                    {hero.description}
                                </p>
                            )}
                            {hero?.purpose_text && (
                                <p className="text-gray-700 leading-relaxed">
                                    <strong className="text-navy-900">Purpose:</strong> {hero.purpose_text}
                                </p>
                            )}
                        </div>
                    </Section>

                    <Section>
                        <SectionHeading 
                            badge={deliverables?.badge_text || "Deliverables"} 
                            title={deliverables?.title || "Deliverables & Engagement"} 
                        />
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                            <div>
                                <h3 className="font-display text-xl font-semibold text-navy-900 mb-6">
                                    {deliverables?.heading || "What You Receive"}
                                </h3>
                                {deliverablesList.length > 0 && <FeatureList items={deliverablesList} />}
                            </div>
                            <div className="flex flex-col gap-6 justify-center">
                                <InfoBox variant="light">
                                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">
                                        {deliverables?.duration_label || "Duration"}
                                    </p>
                                    <p className="text-2xl font-extrabold text-navy-900 font-display">
                                        {deliverables?.duration_value || "As needed"}
                                    </p>
                                </InfoBox>
                                {deliverables?.cta_text && (
                                    <p className="font-medium text-gray-700">
                                        {deliverables.cta_text}{" "}
                                        <Link to="/contact" className="text-brand-600 hover:underline font-semibold">
                                            our contact form
                                        </Link>
                                        .
                                    </p>
                                )}
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
