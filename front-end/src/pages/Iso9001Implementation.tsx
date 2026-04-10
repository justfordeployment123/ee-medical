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
const sopItems = [
    "Production and Process Control",
    "Management Review",
    "Quality Manual",
    "Design, Purchasing, Document Control",
    "Device Master and Device History Records",
    "Internal Audits",
    "Complaint Handling",
    "Corrective and Preventive Actions (CAPA)",
    "Risk Management",
    "Storage and Distribution",
    "Personnel and Training",
];

const whyItems = [
    "Achieve ISO Certification with a dedicated, expert consultant guiding you from start to finish",
    "Available for multiple standards (ISO 9001, ISO 13485, ISO 14971)",
    "Online training and support options are available",
];

export const Iso9001Implementation: React.FC = () => {
    const content = useContent("iso9001_impl");
    const hero = content?.hero;
    const implementation = content?.implementation;
    const why = content?.why;

    const sopList = [
        implementation?.sop1,
        implementation?.sop2,
        implementation?.sop3,
        implementation?.sop4,
        implementation?.sop5,
        implementation?.sop6,
    ].filter(Boolean) as string[];

    const whyList = [
        why?.item1,
        why?.item2,
        why?.item3,
    ].filter(Boolean) as string[];

    return (
        <div className="w-full bg-white font-sans flex flex-col min-h-screen">
            <title>ISO 9001 Implementation & Certification Consulting for Healthcare | E&E Medicals</title>
            <meta name="description" content="ISO 9001:2015 implementation and certification consulting — quality management system design, gap analysis, documentation, and audit preparation for medical and healthcare organizations." />
            <Header />

            <main className="grow">
                <PageHeader
                    title="ISO 9001 Quality Management System Implementation"
                    breadcrumb="ISO 9001 Quality Management System Implementation"
                />

                <InnerContent>
                    <HeroImage
                        src={hero?.hero_image || "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1400"}
                        alt={hero?.hero_image_alt || "ISO 9001 quality management system implementation team"}
                        label={hero?.badge_text || "ISO 9001 Implementation"}
                    />

                    <Section>
                        <SectionHeading
                            badge={implementation?.badge_text || "ISO 9001"}
                            title={implementation?.title || "ISO 9001 Quality Management System (QMS) Implementation"}
                        />
                        <div className="space-y-6 text-gray-700 leading-relaxed text-[15px] md:text-base">
                            <p>{implementation?.paragraph || "E & E Medicals and Consulting's quality experts develop and implement practical QMS solutions aligned with FDA and ISO requirements."}</p>
                            <p className="font-semibold text-navy-900">
                                {implementation?.sop_intro || "We help in developing Standard Operating Procedures (SOP) and documentation:"}
                            </p>
                            <FeatureList items={sopList.length ? sopList : sopItems} columns={2} />
                        </div>
                    </Section>

                    <Section>
                        <SectionHeading badge={why?.badge_text || "Why E&E"} title={why?.title || "Why E & E Medicals and Consulting?"} />
                        <div className="space-y-6 text-gray-700 leading-relaxed text-[15px] md:text-base">
                            <InfoBox variant="brand">
                                <p className="text-xl font-medium text-gray-900">
                                    {why?.highlight || "We work with small companies and startups in achieving ISO Certification in a simple, affordable, and speedy process."}
                                </p>
                            </InfoBox>
                            <p>{why?.paragraph || "Our consultants guide organizations through planning, implementation, review, and certification with practical training and documentation support."}</p>
                            <p>ISO 9001 is achievable by small businesses with our expert consultants and our online training portal.</p>
                            <p className="font-semibold text-navy-900 pt-2">
                                Click here to{" "}
                                <Link to="#" className="text-brand-500 hover:text-brand-600 hover:underline">
                                    {why?.cta_text || "find out your level of compliance with ISO 9001"}
                                </Link>
                                .
                            </p>
                            <FeatureList items={whyList.length ? whyList : whyItems} />
                        </div>
                    </Section>

                    <PageCTA />
                </InnerContent>
            </main>

            <Footer />
        </div>
    );
};
