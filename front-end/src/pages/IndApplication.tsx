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
    SplitSection,
    Section,
    InfoBox,
    PageCTA,
} from "../components/shared/InnerPage";

const obstacles = [
    "Determine which regulations must be met to submit an IND application (e.g., Phase I, II, III).",
    "GMP/GLP compliance.",
    "Expert scientific understanding of the product to manage regulatory concerns (e.g., New Chemical Entities, Biologics, Radioactive Labelled Drugs, etc.).",
    "Clinical hold management and developing effective preventative measures.",
    "Filing an Investigational New Drug Application (IND) should run concurrently with planning all other coordination involved in conducting a clinical trial.",
    "Maintaining regulatory and federal compliance for an active IND (CMC amendments/protocol changes, safety reporting, annual reporting, etc.) and managing ongoing CMC changes/protocol changes.",
];

const expertiseItems = [
    "Strategic guidance in determining the best regulatory strategy for a proposed clinical program(s) and Investigational New Drug (IND) application.",
    "Type A, Type B, and Type C meetings, as well as Biosimilar Biological Product Development (BPD) meetings, and all required regulatory support.",
    "Application for Fast Track Designation or Orphan Drug Designation.",
    "Clinical hold issues can be avoided by thoroughly comparing IND drug development data to current Federal Regulatory requirements for human testing (critical & major).",
    "During the IND process, we identified data deficiencies and clinical hold issues and needed expert advice on how to mitigate these issues in accordance with regulatory guidelines.",
    "Future Marketing Authorization Applications will benefit greatly from your in-depth familiarity with the NDA/BLA submission requirements and data correlations from the IND.",
    "Initial IND submission, IND amendments, safety reporting, and IND annual reports submission in the eCTD format for various medicinal products preparation, technical review, and submission of CMC, non-clinical, and clinical packages (new chemical entities, vaccines, biosimilars, and other biological products like tissue and gene therapy products, etc.).",
    "IND submission templates in the eCTD format.",
    "Original INDs and subsequent submissions are published and submitted via eCTD (IND annual reports, amendments, etc.).",
    "Planning, execution, and timely submission of a regulatory response to questions or data requests from the Food and Drug Administration in the United States.",
    "Help with the IND Approval Process and IND Deactivation / Activation and Consulting Services.",
    "US agent services.",
];

export const IndApplication: React.FC = () => {
    return (
        <div className="w-full bg-white font-sans flex flex-col min-h-screen">
            <Header />

            <main className="grow">
                <PageHeader
                    title="Investigational New Drug (IND) Application"
                    breadcrumb="Investigational New Drug (IND) Application"
                />

                <InnerContent>
                    <HeroImage
                        src="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?q=80&w=1400"
                        alt="Pharmaceutical research and IND application"
                        label="IND Application"
                    />
                    <Section>
                        <SectionHeading badge="IND" title="Investigational New Drug (IND) Application" />
                        <div className="space-y-6 text-gray-700 leading-relaxed text-[15px] md:text-base">
                            <p>
                                To transport or distribute a drug across the United States for use in a clinical program, the sponsor must first submit an Investigational New Drug Application (INDA) to the US Food and Drug Administration (FDA) and receive agency acceptance.
                            </p>
                            <p>
                                The US Food and Drug Administration (
                                <a href="https://en.wikipedia.org/wiki/Food_and_Drug_Administration" target="_blank" rel="noopener noreferrer" className="text-brand-500 hover:text-brand-600 hover:underline">FDA</a>
                                ) may place a clinical hold (full or partial clinical hold) on an IND if the sponsor fails to provide sufficient information to assure product quality, safety, and scientific evidence on the proposed efficacy profile.
                            </p>
                            <div>
                                <h4 className="font-display font-bold text-navy-900 mb-4">
                                    The following are some of the obstacles encountered during the IND filing and IND approval process with the US FDA:
                                </h4>
                                <FeatureList items={obstacles} />
                            </div>
                            <InfoBox variant="brand">
                                <p className="font-semibold text-gray-800 text-lg">
                                    For IND and ANDA FDA Submissions/Applications,{" "}
                                    <Link to="/share-your-project" className="text-brand-600 hover:underline font-bold">
                                        Request for Quote (RFQ)
                                    </Link>{" "}
                                    now!
                                </p>
                            </InfoBox>
                        </div>
                    </Section>

                    <SplitSection
                        imageSrc="https://images.unsplash.com/photo-1576671081837-49000212a370?q=80&w=900"
                        imageAlt="Clinical trial IND submission pharmaceutical research"
                        imageRight
                        label="IND Strategy"
                    >
                        <div>
                            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-brand-50 border border-brand-100 text-brand-600 text-xs font-bold uppercase tracking-wider mb-5">
                                <span className="w-1.5 h-1.5 rounded-full bg-brand-400" />
                                Why E&amp;E Medicals
                            </span>
                            <h2 className="font-display text-2xl font-extrabold text-navy-900 leading-tight mb-4">Navigate IND Complexities with Confidence</h2>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                Our experienced regulatory affairs team has deep knowledge of IND submissions across all drug types including new chemical entities, biologics, and gene therapies. We help sponsors avoid clinical holds and accelerate approval timelines.
                            </p>
                        </div>
                    </SplitSection>

                    <Section dark>
                        <SectionHeading badge="Expertise" title="IND Submissions - E&E Medicals Expertise" />
                        <FeatureList items={expertiseItems} columns={2} />
                    </Section>

                    <PageCTA />
                </InnerContent>
            </main>

            <Footer />
        </div>
    );
};
