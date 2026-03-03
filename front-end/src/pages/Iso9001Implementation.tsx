import React from "react";
import { PageHeader } from "../components/shared/PageHeader";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Link } from "react-router-dom";
import {
    InnerContent,
    SectionHeading,
    FeatureList,
    HeroImage,
    Section,
    InfoBox,
    PageCTA,
} from "../components/shared/InnerPage";

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
    return (
        <div className="w-full bg-white font-sans flex flex-col min-h-screen">
            <Header />

            <main className="grow">
                <PageHeader
                    title="ISO 9001 Quality Management System Implementation"
                    breadcrumb="ISO 9001 Quality Management System Implementation"
                />

                <InnerContent>
                    <HeroImage
                        src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1400"
                        alt="ISO 9001 quality management system implementation team"
                        label="ISO 9001 Implementation"
                    />

                    <Section>
                        <SectionHeading badge="ISO 9001" title="ISO 9001 Quality Management System (QMS) Implementation" />
                        <div className="space-y-6 text-gray-700 leading-relaxed text-[15px] md:text-base">
                            <p>
                                E & E Medicals and Consulting's quality management experts have been developing and implementing quality systems
                                including ISO 9001 quality management system in companies attempting their first products approved by the FDA. We help
                                in designing smart QMS that streamline business demands and increase practical time usage on quality management. E & E
                                Medicals and Consulting shall implement a complete 21 CFR 820 and ISO 13485:2016 quality management system. Depending
                                on the available resources, implementation could be paper-based or electronic-based.
                            </p>
                            <p className="font-semibold text-navy-900">
                                We shall help in developing Standard Operating Procedures (SOP) and documentation:
                            </p>
                            <FeatureList items={sopItems} columns={2} />
                        </div>
                    </Section>

                    <Section>
                        <SectionHeading badge="Why E&E" title="Why E & E Medicals and Consulting?" />
                        <div className="space-y-6 text-gray-700 leading-relaxed text-[15px] md:text-base">
                            <InfoBox variant="brand">
                                <p className="text-xl font-medium text-gray-900">
                                    We work with small companies and startups in achieving ISO Certification in a simple, affordable, and speedy process.
                                </p>
                            </InfoBox>
                            <p>
                                Our consultants help small businesses achieve ISO 9001 quality management system (QMS) certification and provide all
                                training tools that are necessary to sustain their certification. We walk companies through each stages of the ISO
                                certification process. We contribute immensely in developing quality manuals, process documentation, management
                                reviews, internal audits and training tools for our clients to be ISO 9001: 2015 certified. Understanding that ISO
                                9001 is the bases used as the quality management standard, we insist that most small businesses implement this system
                                so that continuous improvement within business processes and compliance can be met. The certification can be completed
                                within an adequate amount of time in just four simple phases, namely: Planning, Implementation, Review, and
                                Certification.
                            </p>
                            <p>ISO 9001 is achievable by small businesses with our expert consultants and our online training portal.</p>
                            <p className="font-semibold text-navy-900 pt-2">
                                Click here to{" "}
                                <Link to="#" className="text-brand-500 hover:text-brand-600 hover:underline">
                                    find out your level of compliance with ISO 9001
                                </Link>
                                .
                            </p>
                            <FeatureList items={whyItems} />
                        </div>
                    </Section>

                    <PageCTA />
                </InnerContent>
            </main>

            <Footer />
        </div>
    );
};
