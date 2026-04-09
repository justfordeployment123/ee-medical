import React from "react";
import { PageHeader } from "../components/shared/PageHeader";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
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

export const FdaUsAgentForeign: React.FC = () => {
    const content = useContent("fda_us_agent");
    const hero = content?.hero;
    const main = content?.main;
    const services = content?.services;

    const items = [services?.item1, services?.item2, services?.item3].filter(Boolean) as string[];

    return (
        <div className="w-full bg-white font-sans flex flex-col min-h-screen">
            <Header />
            <main className="grow">
                <PageHeader
                    title="FDA United States Agent for Foreign Establishments"
                    breadcrumb="US Agent for Foreign Establishments"
                />
                <InnerContent>
                    <HeroImage
                        src={hero?.hero_image || "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1400"}
                        alt={hero?.hero_image_alt || "FDA United States Agent for Foreign Establishments"}
                        label={hero?.badge_text || "FDA US Agent Services"}
                    />

                    <Section>
                        <SectionHeading
                            badge={main?.badge_text || "Foreign Establishments"}
                            title={main?.title || "US Agent for Foreign Establishments"}
                        />
                        <div className="text-gray-600 leading-relaxed space-y-5">
                            <p>{main?.paragraph1 || "Foreign device and pharmaceutical establishments must appoint a U.S. Agent for specific FDA interactions and submissions."}</p>
                            <p>{main?.paragraph2 || "A U.S. Agent must be U.S.-resident or maintain a U.S. place of business and can represent one foreign establishment."}</p>
                            <p>
                                Information about a foreign establishment's U.S. Agent is submitted electronically the use of the FDA Unified
                                Registration and Listing System (FURLS machine) and is a part of the status quo registration manner. Each overseas
                                establishment can also designate only one U.S. Agent.
                            </p>
                        </div>
                    </Section>

                    <Section dark>
                        <SectionHeading
                            badge={services?.badge_text || "Our Services"}
                            title={services?.title || "How E & E Medicals Supports You"}
                        />
                        <InfoBox variant="dark" className="mb-8">
                            <p className="text-lg font-semibold text-white">
                                {services?.highlight || "We shall function as your FDA US Agent at a reasonable annual fee."}
                            </p>
                        </InfoBox>
                        <FeatureList
                            items={items.length ? items : [
                                "Assist FDA in communications with foreign establishments.",
                                "Assist in scheduling inspections of the foreign establishment's facility.",
                                "Provide a legal US presence and address for regulatory correspondence.",
                            ]}
                        />
                    </Section>

                    <PageCTA
                        title="Appoint E&amp;E Medicals as Your FDA US Agent"
                        subtitle="We provide affordable annual FDA US Agent services for foreign medical device and pharmaceutical companies."
                    />
                </InnerContent>
            </main>
            <Footer />
        </div>
    );
};
