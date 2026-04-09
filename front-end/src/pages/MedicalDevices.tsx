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

export const MedicalDevices: React.FC = () => {
    const content = useContent('medical_devices');
    const hero = content?.hero;

    return (
        <div className="w-full bg-white font-sans flex flex-col min-h-screen">
            <Header />

            <main className="grow">
                <PageHeader title="Medical Devices" breadcrumb="Medical Devices" />

                <InnerContent>
                    {hero?.hero_image && (
                        <HeroImage
                            src={hero.hero_image}
                            alt={hero.hero_image_alt || "Medical devices quality assurance testing"}
                            label={hero.badge_text || "Quality Assurance"}
                        />
                    )}

                    <Section>
                        <SectionHeading 
                            badge={hero?.badge_text || "Quality Assurance"} 
                            title={hero?.title || "Medical Devices Quality Assurance"} 
                        />
                        <div className="space-y-5 text-gray-700 leading-relaxed text-[15px] md:text-base">
                            {hero?.intro_text && <p>{hero.intro_text}</p>}
                            {hero?.paragraph2 && <p>{hero.paragraph2}</p>}
                            {hero?.paragraph3 && <p>{hero.paragraph3}</p>}
                        </div>
                    </Section>

                    <PageCTA />
                </InnerContent>
            </main>

            <Footer />
        </div>
    );
};
