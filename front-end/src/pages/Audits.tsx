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
    return (
        <div className="w-full bg-white font-sans flex flex-col min-h-screen">
            <Header />

            <main className="grow">
                <PageHeader title="Audits" breadcrumb="Audits" />

                <InnerContent>
                    <HeroImage
                        src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1400"
                        alt="Quality assurance audits compliance verification"
                        label="Quality Assurance Audits"
                    />

                    <Section>
                        <SectionHeading badge="Quality Assurance" title="Quality Assurance Audits" />
                        <p className="text-gray-700 leading-relaxed text-[15px] md:text-base">
                            To maintain quality system, it is essential that you carry on routine quality assurance audits to eliminate the reduction in product quality, improve processes, eliminate loss of third party certifications of{" "}
                            <a href="https://en.wikipedia.org/wiki/Food_and_Drug_Administration" target="_blank" rel="noopener noreferrer" className="text-brand-500 hover:text-brand-600 hover:underline">FDA</a>{" "}
                            enforcement.
                        </p>
                    </Section>

                    <Section>
                        <SectionHeading badge="Audit Types" title="Three Different Types of Quality Assurance Audits" />
                        <div className="space-y-6 text-gray-700 leading-relaxed text-[15px] md:text-base">
                            <p>
                                <Link to="#" className="text-brand-500 hover:text-brand-600 hover:underline">ISO 9001</Link> defines an audit as a "systematic, independent and documented process for obtaining audit evidence [records, statements of fact or other information which are relevant and verifiable] and evaluating it objectively to determine the extent to which the audit criteria [a set of policies, procedures or requirements] are fulfilled."
                            </p>
                            <p>
                                Quality assurance audits could be carried out through Process, Product, and Systemic verification.
                            </p>
                            <FeatureList items={auditTypes} />
                            <p>
                                QMS audits help to evaluate the quality management program of a company or organization based on its conformance to company policies, contract commitments, and regulatory requirements.
                            </p>
                        </div>
                    </Section>

                    <Section>
                        <SectionHeading badge="Standards" title="Audit Standards & Frameworks" />
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                            <div>
                                <SubHeading className="border-b border-gray-200 pb-3 mb-5">Medical Devices</SubHeading>
                                <FeatureList items={medicalDeviceStandards} />
                            </div>
                            <div>
                                <SubHeading className="border-b border-gray-200 pb-3 mb-5">Quality Management</SubHeading>
                                <FeatureList items={qualityMgmtStandards} />
                            </div>
                            <div>
                                <SubHeading className="border-b border-gray-200 pb-3 mb-5">Other Systems</SubHeading>
                                <FeatureList items={otherSystems} />
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
