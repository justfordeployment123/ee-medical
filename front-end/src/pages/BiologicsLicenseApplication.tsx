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

// meta added below in JSX
const biologicsServices = [
    "Pre-submission and strategic guidance for BLA routes",
    "Coordination of FDA Meetings (Type A, B, C, and BPD)",
    "Regulatory gap analysis and similarity assessments",
    "Compilation and technical review of BLA packages",
    "Requests for Accelerated Review and Fast-track status",
    "RMAT status applications for cell and tissue therapies",
    "Response strategies for Complete Response Letters (CRL)",
    "Post-approval Lifecycle Management (CBE 30s, PASs)",
];

export const BiologicsLicenseApplication: React.FC = () => {
    const content = useContent("bla");
    const hero = content?.hero;
    const main = content?.main;
    const services = content?.services;
    const guidance = content?.guidance;

    const servicesList = [services?.item1, services?.item2, services?.item3, services?.item4].filter(Boolean) as string[];

    return (
        <div className="w-full bg-white font-sans flex flex-col min-h-screen">
            <title>Biologics License Application (BLA) Consulting — FDA Biologics Submissions | E&E Medicals</title>
            <meta name="description" content="Biologics License Application (BLA) consulting — FDA BLA strategy, pre-submission meetings, regulatory gap analysis, and biosimilar pathway support for biologics manufacturers." />
            <Header />

            <main className="grow">
                <PageHeader
                    title="Biologics License Application (BLA) – Overview"
                    breadcrumb="Biologics License Application"
                />

                <InnerContent>
                    <HeroImage
                        src={hero?.hero_image || "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?q=80&w=1400"}
                        alt={hero?.hero_image_alt || "Biologics License Application cell and gene therapy"}
                        label={hero?.badge_text || "Biologics License Application"}
                    />
                    <Section>
                        <SectionHeading badge={main?.badge_text || "BLA"} title={main?.title || "Understanding the BLA Process"} />
                        <div className="space-y-5 text-gray-700 leading-relaxed text-[15px] md:text-base">
                            <p>{main?.paragraph1 || "BLA enables development and approval of biologics for serious disease areas, but requires strong strategic planning."}</p>
                            <p>{main?.paragraph2 || "Risk-based review expectations for advanced therapies require complete, high-quality submissions to avoid RTF."}</p>
                            <p>
                                From pre-BLA/BPD meetings to post-approval Lifecycle Management (LCM) activities, E&E Medicals provides full regulatory support to BLA sponsors.
                            </p>
                        </div>
                    </Section>

                    <Section>
                        <SectionHeading badge={services?.badge_text || "Services"} title={services?.title || "Our Biologics Regulatory Services"} />
                        <div className="space-y-8">
                            <FeatureList items={servicesList.length ? servicesList : biologicsServices} columns={2} />
                            <InfoBox variant="brand">
                                <p className="text-lg text-gray-800 font-medium text-center">
                                    Ready to start your FDA BLA Submission?{" "}
                                    <Link to="/contact" className="text-brand-600 hover:underline font-bold">
                                        Request a Quote (RFQ) Now
                                    </Link>
                                </p>
                            </InfoBox>
                        </div>
                    </Section>

                    <Section>
                        <SectionHeading badge={guidance?.badge_text || "Strategic Guidance"} title={guidance?.title || "Strategic Guidance"} />
                        <p className="text-gray-700 leading-relaxed text-[15px] md:text-base">
                            {guidance?.paragraph || "We help sponsors navigate complex biologics and advanced therapies with submission-ready regulatory strategy."}
                        </p>
                    </Section>

                    <PageCTA />
                </InnerContent>
            </main>

            <Footer />
        </div>
    );
};
