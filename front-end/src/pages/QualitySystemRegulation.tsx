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
    PageCTA,
} from "../components/shared/InnerPage";

export const QualitySystemRegulation: React.FC = () => {
    const content = useContent('qmsr');
    const hero = content?.hero;
    const contentSection = content?.content;

    // Build key aspects list from admin content
    const keyAspects = [
        contentSection?.aspect1,
        contentSection?.aspect2,
        contentSection?.aspect3,
        contentSection?.aspect4,
        contentSection?.aspect5,
    ].filter(Boolean) as string[];

    return (
        <div className="w-full bg-white font-sans flex flex-col min-h-screen">
            <Header />

            <main className="grow">
                <PageHeader title="Quality System Regulation (QMSR)" breadcrumb="Quality System Regulation (QMSR)" />

                <InnerContent>
                    {hero?.hero_image && (
                        <HeroImage
                            src={hero.hero_image}
                            alt={hero.hero_image_alt || "Quality system regulation QMSR FDA 21 CFR Part 820"}
                            label={hero.badge_text || "Quality System Regulation"}
                        />
                    )}

                    <Section>
                        <SectionHeading 
                            badge={hero?.badge_text || "Quality Management"} 
                            title={hero?.title || "Quality Management System Regulation (QMSR)"} 
                        />
                        <div className="text-gray-700 leading-relaxed text-[15px] md:text-base space-y-8">
                            {hero?.intro_text && <p>{hero.intro_text}</p>}

                            {keyAspects.length > 0 && (
                                <div>
                                    <h3 className="font-display text-xl font-bold text-navy-900 mb-6">
                                        {contentSection?.title || "Key Aspects of the FDA QMSR"}
                                    </h3>
                                    <FeatureList items={keyAspects} />
                                </div>
                            )}

                            {contentSection?.closing_paragraph && (
                                <p>{contentSection.closing_paragraph}</p>
                            )}
                        </div>
                    </Section>

                    <PageCTA />
                </InnerContent>
            </main>

            <Footer />
        </div>
    );
};
