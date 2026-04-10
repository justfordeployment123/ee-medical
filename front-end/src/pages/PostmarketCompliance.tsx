import React from "react";
import { PageHeader } from "../components/shared/PageHeader";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { useContent } from "../hooks/useContent";
import {
    InnerContent,
    SectionHeading,
    HeroImage,
    Section,
    PageCTA,
} from "../components/shared/InnerPage";

export const PostmarketCompliance: React.FC = () => {
    const content = useContent('postmarket');
    const hero = content?.hero;
    const pms = content?.pms;
    const why = content?.why;

    return (
        <div className="w-full bg-white font-sans flex flex-col min-h-screen">
            <title>Post-Market Compliance Under EU MDR — Clinical Data & Vigilance | E&E Medicals</title>
            <meta name="description" content="Post-market compliance services under EU MDR/IVDR — PMCF planning, clinical data requirements, periodic safety update reports, and vigilance reporting." />
            <Header />

            <main className="grow">
                <PageHeader
                    title={hero?.subtitle || "Clinical data and postmarket compliance under the MDR"}
                    breadcrumb="Postmarket Compliance"
                />

                <InnerContent>
                    {hero?.hero_image && (
                        <HeroImage
                            src={hero.hero_image}
                            alt={hero.hero_image_alt || "Postmarket compliance clinical data MDR surveillance"}
                            label={hero.badge_text || "Post-Market Surveillance"}
                        />
                    )}

                    <Section>
                        <SectionHeading 
                            badge={pms?.badge_text || "Post-Market Surveillance"} 
                            title={pms?.title || "Regulatory Post Market Surveillance Process"} 
                        />
                        <div className="space-y-5 text-gray-700 leading-relaxed text-[15px] md:text-base">
                            {pms?.paragraph1 && <p>{pms.paragraph1}</p>}
                            {pms?.paragraph2 && <p>{pms.paragraph2}</p>}
                            {pms?.paragraph3 && <p>{pms.paragraph3}</p>}
                        </div>
                    </Section>

                    <Section dark>
                        <SectionHeading 
                            badge={why?.badge_text || "Why E&E"} 
                            title={why?.title || "Why E & E Medicals and Consulting?"} 
                        />
                        <p className="text-gray-300 leading-relaxed text-[15px] md:text-base">
                            {why?.description || "Our post-market surveillance experts help in coordinating investigating customer Postmarket compliance to make an initial reporting decision."}
                        </p>
                    </Section>

                    <PageCTA />
                </InnerContent>
            </main>

            <Footer />
        </div>
    );
};
