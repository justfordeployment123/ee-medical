import React from "react";
import { PageHeader } from "../components/shared/PageHeader";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Link } from "react-router-dom";
import { useContent } from "../hooks/useContent";
import {
    InnerContent,
    SectionHeading,
    SubHeading,
    FeatureList,
    HeroImage,
    Section,
    InfoBox,
    ProcessSteps,
    PageCTA,
} from "../components/shared/InnerPage";

export const CmcServices: React.FC = () => {
    const content = useContent('cmc');
    const hero = content?.hero;
    const process = content?.process;
    const lifecycle = content?.lifecycle;

    // Build steps from admin content
    const steps = [
        {
            title: process?.step1_title || "Kick-off & Strategy",
            description: process?.step1_desc || "",
        },
        {
            title: process?.step2_title || "Documentation Prep",
            description: process?.step2_desc || "",
        },
        {
            title: process?.step3_title || "Document Review",
            description: process?.step3_desc || "",
        },
        {
            title: process?.step4_title || "Responding to Authorities",
            description: process?.step4_desc || "",
        },
    ].filter(s => s.description);

    // Build annual report items
    const annualReportItems = [
        lifecycle?.annual_item1,
        lifecycle?.annual_item2,
        lifecycle?.annual_item3,
        lifecycle?.annual_item4,
        lifecycle?.annual_item5,
        lifecycle?.annual_item6,
        lifecycle?.annual_item7,
    ].filter(Boolean) as string[];

    // Build renewal items
    const renewalItems = [
        lifecycle?.renewal_item1,
        lifecycle?.renewal_item2,
        lifecycle?.renewal_item3,
        lifecycle?.renewal_item4,
        lifecycle?.renewal_item5,
        lifecycle?.renewal_item6,
        lifecycle?.renewal_item7,
    ].filter(Boolean) as string[];

    return (
        <div className="w-full bg-white font-sans flex flex-col min-h-screen">
            <title>CMC Services — Chemistry, Manufacturing & Controls Consulting | E&E Medicals</title>
            <meta name="description" content="CMC consulting services — chemistry, manufacturing, and controls strategy for IND, NDA, ANDA, and BLA submissions. Expert CMC regulatory affairs support for pharmaceutical and biotech companies." />
            <Header />

            <main className="grow">
                <PageHeader title="Chemistry, Manufacturing, and Controls (CMC)" breadcrumb="CMC Services" />

                <InnerContent>
                    {hero?.hero_image && (
                        <HeroImage
                            src={hero.hero_image}
                            alt={hero.hero_image_alt || "Chemistry manufacturing and controls pharmaceutical production"}
                            label={hero.badge_text || "CMC Services"}
                        />
                    )}
                    <Section>
                        <SectionHeading badge={hero?.badge_text || "CMC Services"} title={hero?.title || "CMC Regulatory Affairs"} />
                        <div className="space-y-6">
                            {hero?.intro_text && (
                                <p className="text-gray-700 leading-relaxed">
                                    <strong className="text-navy-900">E&E Medicals</strong> {hero.intro_text}
                                </p>
                            )}
                            {hero?.cta_text && (
                                <InfoBox variant="brand">
                                    <p className="font-medium text-gray-800">
                                        {hero.cta_text}{" "}
                                        <Link to="/contact" className="text-brand-600 hover:underline font-semibold">
                                            Contact us
                                        </Link>
                                        !
                                    </p>
                                </InfoBox>
                            )}
                        </div>
                    </Section>

                    {steps.length > 0 && (
                        <Section>
                            <SectionHeading badge={process?.badge_text || "Process"} title={process?.title || "Our Streamlined CMC Support Process"} />
                            <ProcessSteps steps={steps} />
                        </Section>
                    )}

                    <Section>
                        <SectionHeading badge={lifecycle?.badge_text || "Lifecycle Management"} title={lifecycle?.title || "Lifecycle Management"} />
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                            <div>
                                <SubHeading className="border-b border-gray-200 pb-3 mb-6">
                                    {lifecycle?.annual_heading || "Annual Report Submissions"}
                                </SubHeading>
                                {annualReportItems.length > 0 && <FeatureList items={annualReportItems} />}
                            </div>
                            <div>
                                <SubHeading className="border-b border-gray-200 pb-3 mb-6">
                                    {lifecycle?.renewal_heading || "Renewal Applications"}
                                </SubHeading>
                                {renewalItems.length > 0 && <FeatureList items={renewalItems} />}
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
