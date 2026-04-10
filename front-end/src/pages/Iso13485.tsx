import React from "react";
import { PageHeader } from "../components/shared/PageHeader";
import { Header } from "../components/Header";
import { PageMeta } from "../components/shared/PageMeta";
import { Footer } from "../components/Footer";
import { Link } from "react-router-dom";
import { useContent } from "../hooks/useContent";
import {
    InnerContent,
    HeroImage,
    SectionHeading,
    InfoBox,
    PageCTA,
} from "../components/shared/InnerPage";

export const Iso13485: React.FC = () => {
    const content = useContent("iso13485");
    const hero = content?.hero;
    const overview = content?.overview;
    const consultant = content?.consultant;
    const mdsap = content?.mdsap;

    return (
        <div className="w-full bg-white font-sans flex flex-col min-h-screen">
            <PageMeta
                title="ISO 13485 Medical Quality System Registration & Consulting"
                description="ISO 13485 quality management system registration and consulting for medical device manufacturers — certification preparation, audits, and QMS implementation support."
            />
            <Header />

            <main className="grow">
                <PageHeader
                    title="ISO 13485 Medical Quality System Registration for medical devices"
                    breadcrumb="ISO 13485 Medical Quality System Registration"
                />

                <InnerContent>
                    {/* Hero Image */}
                    <HeroImage
                        src={hero?.hero_image || "https://images.unsplash.com/photo-1582750433449-648ed127bb54?q=80&w=1400"}
                        alt={hero?.hero_image_alt || "ISO 13485 medical quality system registration certification"}
                        label={hero?.badge_text || "ISO 13485 QMS"}
                    />

                    {/* --- SECTION 1: ISO 13485 Overview --- */}
                    <section>
                        <SectionHeading
                            badge={overview?.badge_text || "ISO Standards"}
                            title={overview?.title || "ISO 13485 Medical Quality System Registration"}
                        />
                        <div className="text-gray-700 leading-relaxed text-[15px] md:text-base space-y-6">
                            <p>{overview?.paragraph || "ISO 13485 is an international standard adapted to meet medical device industry requirements and addresses most FDA requirements (21 CFR 820)."}</p>
                        </div>
                    </section>

                    {/* --- SECTION 2: Why Appoint E&E --- */}
                    <section>
                        <SectionHeading
                            title={consultant?.title || "Appointing E&E Medicals as ISO Consultant"}
                        />
                        <div className="text-gray-700 leading-relaxed text-[15px] md:text-base space-y-6">
                            <p>{consultant?.paragraph1 || "E & E Medicals and Consulting supports organizations in healthcare that require QMS for ISO 13485 certification."}</p>
                            <p>{consultant?.paragraph2 || "Our consultants provide practical methods to implement ISO 13485-compliant QMS and prepare teams for audit success."}</p>
                        </div>
                    </section>

                    {/* --- SECTION 3: MDSAP --- */}
                    <section>
                        <SectionHeading
                            title={mdsap?.title || "Medical Device Single Audit Program"}
                        />
                        <div className="text-gray-700 leading-relaxed text-[15px] md:text-base space-y-6">
                            <p>{mdsap?.paragraph1 || "The Medical Device Single Audit Program (MDSAP) is based on ISO 13485 principles and supports audit readiness for multiple markets."}</p>

                            <InfoBox variant="brand">
                                <p className="text-gray-800">
                                    {mdsap?.infobox_text || "Your organization can also meet most FDA QSR requirements under 21 CFR 820."}
                                </p>
                            </InfoBox>

                            <p>{mdsap?.paragraph2 || "Medical device manufacturers and developers must meet ISO 13485 certification requirements through compliant quality systems."}</p>

                            <p>{mdsap?.paragraph3 || "E & E Medicals and Consulting assists with training, documentation, implementation, and internal audit services for compliance."}</p>

                            <p className="font-semibold text-gray-900 pt-2">
                                Click here to <Link to="#" className="text-brand-500 hover:text-brand-600 hover:underline">{mdsap?.cta_text || "find out your level of compliance with ISO 13485"}</Link>.
                            </p>
                        </div>
                    </section>

                    {/* Page CTA */}
                    <PageCTA
                        title="Ready to Achieve ISO 13485 Certification?"
                        subtitle="Our expert consultants will guide you through every step of the ISO 13485 registration process."
                        linkLabel="Schedule Free Consultation"
                        linkTo="/share-your-project"
                    />
                </InnerContent>
            </main>

            <Footer />
        </div>
    );
};
