import React from "react";
import { PageHeader } from "../components/shared/PageHeader";
import { Header } from "../components/Header";
import { PageMeta } from "../components/shared/PageMeta";
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

const registrationItems = [
    "Only registration filing without device test reports",
    "Complete registration filings including device test reports",
];

export const CCCMarkApproval: React.FC = () => {
    const content = useContent("ccc_mark");
    const hero = content?.hero;
    const main = content?.main;
    const registration = content?.registration;
    const why = content?.why;

    const regItems = [registration?.item1, registration?.item2].filter(Boolean) as string[];

    return (
        <div className="w-full bg-white font-sans flex flex-col min-h-screen">
            <PageMeta
                title="CCC Mark Approval — China Compulsory Certification for Medical Devices"
                description="CCC Mark certification consulting for medical devices entering the Chinese market — China Compulsory Certification requirements, testing, and application support."
            />
            <Header />

            <main className="grow">
                <PageHeader
                    title="Is CCC Mark Approval necessary for Medical Devices and IVD?"
                    breadcrumb="CCC Mark Approval"
                />

                <InnerContent>
                    <HeroImage
                        src={hero?.hero_image || "https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=1400"}
                        alt={hero?.hero_image_alt || "CCC mark approval China compulsory certification medical devices"}
                        label={hero?.badge_text || "CCC Mark Approval"}
                    />

                    <Section>
                        <SectionHeading badge={main?.badge_text || "CCC Mark"} title={main?.title || "China Compulsory Certification (CCC)"} />
                        <div className="space-y-5 text-gray-700 leading-relaxed text-[15px] md:text-base">
                            <p>{main?.paragraph1 || "The CCC mark is a compulsory safety and quality mark for products sold in China."}</p>
                            <p>{main?.paragraph2 || "The CCC mark replaced older systems and unified quality and import-export inspection procedures."}</p>
                            <p>
                                The Challenging process of Medical device registration for the Chinese market makes it necessary to have a partner with Chinese market. Experience and expertise in providing insights into how to manage. And direct you through the regulatory process in China's developing regulatory activities.
                            </p>
                        </div>
                    </Section>

                    <Section>
                        <SectionHeading badge={registration?.badge_text || "Registration"} title={registration?.title || "Registration - Medical Devices and IVD"} />
                        <div className="space-y-5 text-gray-700 leading-relaxed text-[15px] md:text-base">
                            <p>{registration?.paragraph1 || "The NMPA has consistent guidelines, reporting, and clinical data requirements in reviewing applications."}</p>
                            <FeatureList items={regItems.length ? regItems : registrationItems} />
                            <p>{registration?.paragraph2 || "E&E helps with inland testing strategy, regulatory documentation, and follow-up responses with NMPA."}</p>
                        </div>
                    </Section>

                    <Section dark>
                        <SectionHeading badge={why?.badge_text || "Why E&E"} title={why?.title || "Why choose E & E Medicals and Consulting?"} />
                        <p className="text-gray-300 leading-relaxed text-[15px] md:text-base">
                            {why?.paragraph || "The Chinese registration process requires practical local-market expertise. Our team directs your pathway and testing to meet CCC requirements."}
                        </p>
                    </Section>

                    <PageCTA />
                </InnerContent>
            </main>

            <Footer />
        </div>
    );
};
