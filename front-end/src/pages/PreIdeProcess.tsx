import React from "react";
import { PageHeader } from "../components/shared/PageHeader";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Link } from "react-router-dom";
import { useContent } from "../hooks/useContent";
import {
    InnerContent,
    SectionHeading,
    HeroImage,
    Section,
    InfoBox,
    PageCTA,
} from "../components/shared/InnerPage";

export const PreIdeProcess: React.FC = () => {
    const content = useContent("pre_ide");
    const hero = content?.hero;
    const main = content?.main;
    const meeting = content?.meeting;

    return (
        <div className="w-full bg-white font-sans flex flex-col min-h-screen">
            <title>Pre-IDE Process & Investigational Device Exemption Application | E&E Medicals</title>
            <meta name="description" content="Pre-IDE and IDE process consulting — investigational device exemption application support, FDA pre-submission meetings, and clinical trial approval for significant risk devices." />
            <Header />
            <main className="grow">
                <PageHeader title="Pre-IDE Process" breadcrumb="Pre-IDE Process" />
                <InnerContent>
                    <HeroImage
                        src={hero?.hero_image || "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=1400"}
                        alt={hero?.hero_image_alt || "Pre-IDE investigational device exemption process"}
                        label={hero?.badge_text || "Pre-IDE Process"}
                    />

                    <Section>
                        <SectionHeading
                            badge={main?.badge_text || "Investigational Device"}
                            title={main?.title || "Pre-IDE Process"}
                        />
                        <div className="text-gray-600 leading-relaxed space-y-5">
                            <p>{main?.paragraph1 || "An IDE is a regulatory submission that permits clinical investigation of devices under specific exemptions."}</p>
                            <InfoBox variant="brand">
                                <p className="italic text-gray-800">
                                    "{main?.quote_text || "An approved IDE permits lawful shipment of a device for investigation purposes."}"
                                </p>
                            </InfoBox>
                            <p>{main?.paragraph2 || "The purpose of IDE is to encourage useful device development while protecting public health and ethics."}</p>
                            <p>{main?.paragraph3 || "Early FDA interaction helps sponsors understand requirements and supports studies using new technologies."}</p>
                        </div>
                    </Section>

                    <Section dark>
                        <SectionHeading
                            badge={meeting?.badge_text || "Pre-IDE Meeting"}
                            title={meeting?.title || "Pre-IDE Meeting"}
                        />
                        <div className="text-gray-300 leading-relaxed space-y-5">
                            <p>{meeting?.paragraph || "Our experts prepare and submit well-researched regulatory documentation and support your FDA meeting preparation."}</p>
                            <div className="pt-2">
                                <Link
                                    to="/share-your-project"
                                    className="inline-flex items-center gap-2 px-7 py-3.5 bg-brand-500 hover:bg-brand-400 text-white font-bold rounded-xl shadow-lg shadow-brand-500/25 transition-all duration-300"
                                >
                                    {meeting?.cta_text || "Request for Quote (RFQ)"}
                                </Link>
                            </div>
                        </div>
                    </Section>

                    <PageCTA
                        title="Start Your IDE Application Today"
                        subtitle="Our experts will prepare and submit well-researched FDA documentation to support your IDE process application."
                    />
                </InnerContent>
            </main>
            <Footer />
        </div>
    );
};
