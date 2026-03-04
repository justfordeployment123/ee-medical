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
    PageCTA,
} from "../components/shared/InnerPage";

const keyAspects = [
    "<strong>Integration with ISO 13485:</strong> The FDA largely adopted ISO 13485:2016 (Medical devices—Quality management systems—Requirements for regulatory purposes), which serves as the foundation for medical device quality.",
    "<strong>Harmonization:</strong> This update aims to align U.S. standards with those of other countries. regulations with international standards, reducing duplication for global manufacturers.",
    "<strong>Scope:</strong> It covers all aspects of a device's lifecycle, from design and production to post-market activities.",
    "<strong>Key Requirements:</strong> Includes documented procedures for quality audits, management review, corrective/preventive actions (CAPA), and robust device master records (DMRs).",
    "<strong>New Authorities:</strong> Grants the FDA increased inspection authority over records like management reviews and quality audits, which were previously less detailed in the older QSR.",
];

export const QualitySystemRegulation: React.FC = () => {
    return (
        <div className="w-full bg-white font-sans flex flex-col min-h-screen">
            <Header />

            <main className="grow">
                <PageHeader title="Quality System Regulation (QMSR)" breadcrumb="Quality System Regulation (QMSR)" />

                <InnerContent>
                    <HeroImage
                        src="https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=1400"
                        alt="Quality system regulation QMSR FDA 21 CFR Part 820"
                        label="Quality System Regulation"
                    />

                    <Section>
                        <SectionHeading badge="Quality Management" title="Quality Management System Regulation (QMSR)" />
                        <div className="text-gray-700 leading-relaxed text-[15px] md:text-base space-y-8">
                            <p>
                                The Quality Management System Regulation (QMSR) refers to the U.S. The FDA's new rules for medical device makers (21
                                CFR Part 820) now include the international standard ISO 13485 and replace the old Quality System Regulation (QSR).
                                The QMSR mandates a unified quality system that blends ISO 13485's global best practices with specific FDA
                                requirements, focusing on ensuring device safety and effectiveness through robust processes such as design controls,
                                supplier management, and post-market surveillance, thereby enabling greater global harmonization.
                            </p>

                            <div>
                                <h3 className="font-display text-xl font-bold text-navy-900 mb-6">Key Aspects of the FDA QMSR</h3>
                                <FeatureList items={keyAspects} />
                            </div>

                            <p>
                                Adherence to the{" "}
                                <a
                                    href="https://en.wikipedia.org/wiki/Food_and_Drug_Administration"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-brand-500 hover:text-brand-600 hover:underline"
                                >
                                    FDA's
                                </a>{" "}
                                Quality Management System Regulation (QMSR) is the greatest challenge facing medical device and biotech manufacturers.
                                The scope of QMSR is large, and non-compliance is not an option. As a result,{" "}
                                <Link to="/" className="text-brand-500 hover:text-brand-600 hover:underline">
                                    E & E Medicals and Consulting
                                </Link>{" "}
                                help companies meet the needs of those responsible for compliance, regulatory affairs, project planning, design and
                                development, technology transfer, R&D, QA, and manufacturing in a QMSR environment. Our clients have gained a
                                comprehensive understanding of all components of the QMSR, including design controls, process validation, corrective
                                and preventive action plans (CAPA), document control systems, process and design validation, and risk management.
                            </p>
                        </div>
                    </Section>

                    <PageCTA />
                </InnerContent>
            </main>

            <Footer />
        </div>
    );
};
