import React from "react";
import { PageHeader } from "../components/shared/PageHeader";
import { Header } from "../components/Header";
import { PageMeta } from "../components/shared/PageMeta";
import { Footer } from "../components/Footer";
import { useContent } from "../hooks/useContent";
import {
    InnerContent,
    SectionHeading,
    SubHeading,
    FeatureList,
    HeroImage,
    Section,
    PageCTA,
} from "../components/shared/InnerPage";

const auditTypes = [
    "<strong>Process Audit:</strong> This form of audit examines whether the processes operate within the defined limits. This assesses the method for measuring the compliance within requirements and reliability of the instructions against pre-determined guidelines and standards.",
    "<strong>Product Audit:</strong> An audit that examines a product or service to evaluate its conformance to established requirements such as specifications, performance standards, and customer requirements.",
    "<strong>System Audit:</strong> These are audits conducted on management systems. Verifiable activities relate to examination and evaluation of objective evidence through documentation or observations.",
];

const medicalDeviceStandards = [
    "ISO 13485:2016",
    "US FDA 21 CFR Part 820",
    "European MDD / AIMDD / IVDD",
    "ISO 14971 Risk Management",
    "IEC 60601 Electrical Equipment",
    "Brazil ANVISA",
    "EU MDR / AIMDR / IVDR",
    "Canada CMDR",
    "Australian TGA",
    "Japan MHLW Ordinance 169 Pharmaceutical",
    "US FDA 21 CFR 210 & 211",
    "PIC/S GMP Guide",
    "ICH Q7 GMP Guide for APIs",
    "ICH Q10 Pharmaceutical Quality Systems",
    "PS 9000:2016 Pharmaceutical Packaging",
];

const qualityMgmtStandards = [
    "ISO 9001:2015",
    "ISO 17025 Testing & Calibration",
];

const otherSystems = [
    "ISO 14001:2015 Environmental Health & Safety",
    "OHSAS 18001 & ISO 45001 Occupational Health & Safety",
    "ISO 27001 Information Security",
];

export const Audits: React.FC = () => {
    const content = useContent("audits");
    const hero = content?.hero;
    const intro = content?.intro;
    const types = content?.types;
    const standards = content?.standards;

    const typeItems = [types?.type1, types?.type2, types?.type3].filter(Boolean) as string[];
    const medicalList = [standards?.medical_1, standards?.medical_2, standards?.medical_3, standards?.medical_4, standards?.medical_5].filter(Boolean) as string[];
    const qualityList = [standards?.quality_1, standards?.quality_2].filter(Boolean) as string[];
    const otherList = [standards?.other_1, standards?.other_2, standards?.other_3].filter(Boolean) as string[];

    return (
        <div className="w-full bg-white font-sans flex flex-col min-h-screen">
            <PageMeta
                title="Quality Assurance Audits for Medical Devices — FDA & ISO Compliance"
                description="FDA and ISO quality assurance audit services for medical device manufacturers — pre-audit preparation, internal audits, gap analysis, and corrective action support."
            />
            <Header />

            <main className="grow">
                <PageHeader title="Audits" breadcrumb="Audits" />

                <InnerContent>
                    <HeroImage
                        src={hero?.hero_image || "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1400"}
                        alt={hero?.hero_image_alt || "Quality assurance audits compliance verification"}
                        label={hero?.badge_text || "Quality Assurance Audits"}
                    />

                    <Section>
                        <SectionHeading badge={intro?.badge_text || "Quality Assurance"} title={intro?.title || "Quality Assurance Audits"} />
                        <p className="text-gray-700 leading-relaxed text-[15px] md:text-base">
                            {intro?.paragraph || "To maintain quality systems, routine quality assurance audits are essential to improve process performance and maintain certifications."}{" "}
                            <a href="https://en.wikipedia.org/wiki/Food_and_Drug_Administration" target="_blank" rel="noopener noreferrer" className="text-brand-500 hover:text-brand-600 hover:underline">FDA</a>{" "}
                            enforcement.
                        </p>
                    </Section>

                    <Section>
                        <SectionHeading badge={types?.badge_text || "Audit Types"} title={types?.title || "Three Different Types of Quality Assurance Audits"} />
                        <div className="space-y-6 text-gray-700 leading-relaxed text-[15px] md:text-base">
                            <p>{types?.paragraph1 || "ISO 9001 defines an audit as a systematic, independent, and documented process for obtaining and evaluating evidence."}</p>
                            <p>{types?.paragraph2 || "Quality assurance audits can be performed through Process, Product, and System verification."}</p>
                            <FeatureList items={typeItems.length ? typeItems : auditTypes} />
                            <p>{types?.paragraph3 || "QMS audits evaluate organizations against policies, contractual commitments, and regulatory requirements."}</p>
                        </div>
                    </Section>

                    <Section>
                        <SectionHeading badge={standards?.badge_text || "Standards"} title={standards?.title || "Audit Standards & Frameworks"} />
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                            <div>
                                <SubHeading className="border-b border-gray-200 pb-3 mb-5">{standards?.medical_heading || "Medical Devices"}</SubHeading>
                                <FeatureList items={medicalList.length ? medicalList : medicalDeviceStandards} />
                            </div>
                            <div>
                                <SubHeading className="border-b border-gray-200 pb-3 mb-5">{standards?.quality_heading || "Quality Management"}</SubHeading>
                                <FeatureList items={qualityList.length ? qualityList : qualityMgmtStandards} />
                            </div>
                            <div>
                                <SubHeading className="border-b border-gray-200 pb-3 mb-5">{standards?.other_heading || "Other Systems"}</SubHeading>
                                <FeatureList items={otherList.length ? otherList : otherSystems} />
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
