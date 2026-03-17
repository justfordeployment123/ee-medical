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
    return (
        <div className="w-full bg-white font-sans flex flex-col min-h-screen">
            <Header />

            <main className="grow">
                <PageHeader
                    title="Biologics License Application (BLA) – Overview"
                    breadcrumb="Biologics License Application"
                />

                <InnerContent>
                    <HeroImage
                        src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?q=80&w=1400"
                        alt="Biologics License Application cell and gene therapy"
                        label="Biologics License Application"
                    />
                    <Section>
                        <SectionHeading badge="BLA" title="Understanding the BLA Process" />
                        <div className="space-y-5 text-gray-700 leading-relaxed text-[15px] md:text-base">
                            <p>
                                Through the BLA, promising biological medicinal products can be developed and approved to prevent and treat a wide range of serious, chronic diseases and conditions. Biopharma companies are constantly working on new biological products to fill voids in the healthcare industry, but applicants face a difficult decision when deciding on a development strategy for submitting a{" "}
                                <strong className="text-navy-900">Biologics License Application (BLA)</strong> to the US Food and Drug Administration (FDA).
                            </p>
                            <p>
                                Health Authorities have begun implementing risk-based review procedures in response to increasing regulatory enforcement for complex biologics, biosimilars, and advanced therapies like cellular and gene therapy products. Failure to include all required details could result in a{" "}
                                <strong className="text-navy-900">refusal to file (RTF)</strong>.
                            </p>
                            <p>
                                From pre-BLA/BPD meetings to post-approval Lifecycle Management (LCM) activities, E&E Medicals provides full regulatory support to BLA sponsors.
                            </p>
                        </div>
                    </Section>

                    <Section>
                        <SectionHeading badge="Services" title="Our Biologics Regulatory Services" />
                        <div className="space-y-8">
                            <FeatureList items={biologicsServices} columns={2} />
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
                        <SectionHeading badge="Strategic Guidance" title="Strategic Guidance" />
                        <p className="text-gray-700 leading-relaxed text-[15px] md:text-base">
                            We help sponsors navigate the complexities of vaccines, recombinant therapeutic protein products, monoclonal antibody products, and gene therapies. Our team ensures that every Biologics License Application is submitted on time and meets the rigorous standards of modern health authorities.
                        </p>
                    </Section>

                    <PageCTA />
                </InnerContent>
            </main>

            <Footer />
        </div>
    );
};
