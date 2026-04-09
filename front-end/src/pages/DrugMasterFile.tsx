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
    const content = useContent("dmf");
    const hero = content?.hero;
    const main = content?.main;
    const strategy = content?.strategy;
    const capabilities = content?.capabilities;

    const strategyList = [strategy?.item1, strategy?.item2, strategy?.item3].filter(Boolean) as string[];
    const capabilityCards = [capabilities?.cap1, capabilities?.cap2, capabilities?.cap3, capabilities?.cap4].filter(Boolean) as string[];

    return (
        <div className="w-full bg-white font-sans flex flex-col min-h-screen">
            <Header />

            <main className="grow">
                <PageHeader title="Drug Master File (DMF) Submissions" breadcrumb="DMF Submissions" />

                <InnerContent>
                    <HeroImage
                        src={hero?.hero_image || "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?q=80&w=1400"}
                        alt={hero?.hero_image_alt || "Drug Master File pharmaceutical chemistry lab"}
                        label={hero?.badge_text || "Drug Master File"}
                    />
                    <Section>
                        <SectionHeading badge={main?.badge_text || "DMF"} title={main?.title || "FDA DMF Overview"} />
                        <div className="space-y-5 text-gray-700 leading-relaxed text-[15px] md:text-base">
                            <p>{main?.paragraph1 || "FDA neither requires nor discourages DMF submissions, but they are widely used for substances, excipients, and packaging materials."}</p>
                            <p>{main?.paragraph2 || "DMF holders must satisfy GDUFA and completeness expectations to enable letters of access for other applications."}</p>
                            <p>
                                The Regulatory team at <strong className="text-navy-900">E&E Medicals</strong> is highly qualified and dedicated to
                                their work in submitting FDA Drug Master Files (DMFs). Our staff has experience submitting and managing DMFs to the US
                                FDA for various drug components, including drug substances, excipients, and packaging materials.
                            </p>
                        </div>
                    </Section>

                    <Section>
                        <SectionHeading badge={strategy?.badge_text || "Strategy"} title={strategy?.title || "Submission Strategy & Expertise"} />
                        <div className="space-y-6">
                            <p className="text-gray-700 leading-relaxed text-[15px] md:text-base">
                                We provide submission strategy for various Drug Master Files to regulators, including but not limited to:
                            </p>
                            <FeatureList items={strategyList.length ? strategyList : dmfItems} columns={2} />
                        </div>
                    </Section>

                    <Section>
                        <SectionHeading badge={capabilities?.badge_text || "Capabilities"} title={capabilities?.title || "Core Filing Capabilities"} />
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                            {(capabilityCards.length ? capabilityCards : coreCapabilities).map((feature, idx) => (
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
