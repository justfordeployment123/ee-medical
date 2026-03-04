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

const dmfItems = [
    "Type II: Drug substance and intermediate",
    "Type III: Packaging materials",
    "Type IV: Excipient, colorant, flavor, or essence",
    "Raw material identification & assessment",
    "Active pharmaceutical ingredient (API) synthetic methods",
    "Impurity limit specifications for APIs & precursors",
    "Genotoxic and elemental impurities acceptable levels",
    "Quality by Design (QbD) review assistance",
    "Stability, process validation, and forced degradation studies",
    "Production batch log reviews",
    "Drug Substance GDUFA and ICA DMF Preparation",
    "GDUFA fee requirements guidance",
    "eCTD publication of US DMFs",
    "Amendments and annual reports strategy",
];

const coreCapabilities = [
    "DMF Filing Expertise",
    "Creation of DMF Templates",
    "Full DMF Preparation",
    "API Submission & eCTD Publishing",
];

export const DrugMasterFile: React.FC = () => {
    return (
        <div className="w-full bg-white font-sans flex flex-col min-h-screen">
            <Header />

            <main className="grow">
                <PageHeader title="Drug Master File (DMF) Submissions" breadcrumb="DMF Submissions" />

                <InnerContent>
                    <HeroImage
                        src="https://images.unsplash.com/photo-1471864190281-a93a3070b6de?q=80&w=1400"
                        alt="Drug Master File pharmaceutical chemistry lab"
                        label="Drug Master File"
                    />
                    <Section>
                        <SectionHeading badge="DMF" title="FDA DMF Overview" />
                        <div className="space-y-5 text-gray-700 leading-relaxed text-[15px] md:text-base">
                            <p>
                                The US Food and Drug Administration (FDA) neither requires nor discourages the submission of Drug Master Files (DMFs).
                                Manufacturers and DMF holders must submit separate DMFs for drug substances, excipients, and packaging materials to
                                ensure patient privacy.
                            </p>
                            <p>
                                DMF holders are responsible for ensuring that their DMF satisfies all FDA requirements, including those pertaining to
                                the Generic Drug User Fee Act (GDUFA) II and the Initial Completeness Assessment (ICA). The DMF application must be
                                approved so that the DMF holder can issue a Letter of Access for access to other applications, such as an IND, NDA, or
                                ANDA.
                            </p>
                            <p>
                                The Regulatory team at <strong className="text-navy-900">E&E Medicals</strong> is highly qualified and dedicated to
                                their work in submitting FDA Drug Master Files (DMFs). Our staff has experience submitting and managing DMFs to the US
                                FDA for various drug components, including drug substances, excipients, and packaging materials.
                            </p>
                        </div>
                    </Section>

                    <Section>
                        <SectionHeading badge="Strategy" title="Submission Strategy & Expertise" />
                        <div className="space-y-6">
                            <p className="text-gray-700 leading-relaxed text-[15px] md:text-base">
                                We provide submission strategy for various Drug Master Files to regulators, including but not limited to:
                            </p>
                            <FeatureList items={dmfItems} columns={2} />
                        </div>
                    </Section>

                    <Section>
                        <SectionHeading badge="Capabilities" title="Core Filing Capabilities" />
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                            {coreCapabilities.map((feature, idx) => (
                                <div
                                    key={idx}
                                    className="bg-brand-50 border border-brand-100 p-6 rounded-2xl text-center hover:border-brand-300 hover:bg-brand-100 transition-all duration-300"
                                >
                                    <h4 className="font-display font-bold text-navy-900 text-sm">{feature}</h4>
                                </div>
                            ))}
                        </div>
                        <InfoBox variant="brand" className="mt-8">
                            <p className="font-medium text-center text-gray-800">
                                Need help with your DMF?{" "}
                                <Link to="/contact" className="text-brand-600 hover:underline font-semibold">
                                    Request a Quote (RFQ)
                                </Link>
                            </p>
                        </InfoBox>
                    </Section>

                    <PageCTA />
                </InnerContent>
            </main>

            <Footer />
        </div>
    );
};
