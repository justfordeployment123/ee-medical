import React from "react";
import { PageHeader } from "../components/shared/PageHeader";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Link } from "react-router-dom";
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

const steps = [
    {
        title: "Kick-off & Strategy",
        description:
            "To kick off our collaboration, we take the time to grasp your requirements and objectives fully. This allows us to determine the most effective means of gathering data for your dossier's (CTD) process, create comprehensive schedules, and share effectiveness from the start.",
    },
    {
        title: "Documentation Prep",
        description:
            "Our CMC specialists help review and/or draft the files for your IND to ensure alignment with rules. When possible, we use pre-existing accepted text modules to streamline submissions. DMFs for primary packaging materials are also supported.",
    },
    {
        title: "Document Review",
        description:
            "We review your submission in depth and compile findings into a draft of the appropriate dossier chapters (Module 3). Your SMEs, regulatory affairs professionals, and our CMC experts will review the submission to ensure accurate procedural mapping.",
    },
    {
        title: "Responding to Authorities",
        description:
            "Our CMC team is here to lend our considerable expertise in responding to requests for additional data from regulatory agencies that may arise due to your IND.",
    },
];

const annualReportItems = [
    "Tracking of Annual Report scheduler due dates",
    "Provide CMC Regulatory strategy",
    "Regulatory assessment of supporting documents",
    "Request for additional documents/justification",
    "Authoring of the Annual Report package",
    "Finalization and submission in eCTD format",
    "Database updates with submission details",
];

const renewalItems = [
    "Tracking of renewal application scheduler",
    "Provide strategy for required docs and timelines",
    "Initiation requests to manufacturer for CMC documentation",
    "Regulatory assessment for submission",
    "Request for additional justification if needed",
    "Authoring of renewal package per country-specific requirements",
    "Update database with application status",
];

export const CmcServices: React.FC = () => {
    return (
        <div className="w-full bg-white font-sans flex flex-col min-h-screen">
            <Header />

            <main className="grow">
                <PageHeader title="Chemistry, Manufacturing, and Controls (CMC)" breadcrumb="CMC Services" />

                <InnerContent>
                    <HeroImage
                        src="https://images.unsplash.com/photo-1579154204601-01588f351e67?q=80&w=1400"
                        alt="Chemistry manufacturing and controls pharmaceutical production"
                        label="CMC Services"
                    />
                    <Section>
                        <SectionHeading badge="CMC Services" title="CMC Regulatory Affairs" />
                        <div className="space-y-6">
                            <p className="text-gray-700 leading-relaxed">
                                <strong className="text-navy-900">E&E Medicals</strong> is a leading player in centralized Chemistry, Manufacturing,
                                and Controls (CMC) lifecycle management for Regulatory submissions. We offer end-to-end services for CMC Regulatory
                                affairs to ensure your products meet stringent health authority standards.
                            </p>
                            <InfoBox variant="brand">
                                <p className="font-medium text-gray-800">
                                    Facing CMC Issues?{" "}
                                    <Link to="/contact" className="text-brand-600 hover:underline font-semibold">
                                        Request a Quote (RFQ) now!
                                    </Link>
                                </p>
                            </InfoBox>
                        </div>
                    </Section>

                    <Section>
                        <SectionHeading badge="Process" title="Our Streamlined CMC Support Process" />
                        <ProcessSteps steps={steps} />
                    </Section>

                    <Section>
                        <SectionHeading badge="Lifecycle Management" title="Lifecycle Management" />
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                            <div>
                                <SubHeading className="border-b border-gray-200 pb-3 mb-6">Annual Report Submissions</SubHeading>
                                <FeatureList items={annualReportItems} />
                            </div>
                            <div>
                                <SubHeading className="border-b border-gray-200 pb-3 mb-6">Renewal Applications</SubHeading>
                                <FeatureList items={renewalItems} />
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
