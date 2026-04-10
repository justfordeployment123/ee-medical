import React from "react";
import { PageHeader } from "../components/shared/PageHeader";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { useContent } from "../hooks/useContent";
import {
    InnerContent,
    SectionHeading,
    FeatureList,
    HeroImage,
    Section,
    PageCTA,
} from "../components/shared/InnerPage";

// meta added below in JSX
const andaItems = [
    "Regulatory consultation during product development and manufacturing for RLD/Reference Standard selection, API/in-process control/finished product specification review, process validation protocol/report generation, stability study generation, IIG database compliance generation, Q1/Q2 compliance generation for parenteral, optics, and ophthalmic, and batch size guidance.",
    "Advice on minimizing potential risks when submitting an ANDA and any necessary preparation work.",
    "Pre-submission discussions with the FDA and guidance through the submission process with control correspondence before submission.",
    "Pre-submission paperwork like finding the right facility and requesting DUNS/FEI/ANDA Application numbers.",
    "The checklist for submitting an ANDA document is shared.",
    "Source data generation followed by a gap analysis and regulatory assessment to determine regulatory sufficiency.",
    "Advice on how to make up for the lack of required paperwork to comply with the Refuse to Receive (RTR) and the GDUFA.",
    "Prescription drug listing, facility listing, and renewals all require an SPL submission.",
    "Preparation, publication, and submission of a high-quality ANDA package in eCTD format through the FDA Electronic Submissions Gateway.",
    "Discussions and updates with the US Food and Drug Administration regarding ANDA regulatory approval.",
    "Help in handling urgent RTR (Refuse-to-Receive) problems.",
    "ANDA approval process regulatory planning and response planning for IRs, DRLs, and CRLs.",
];

export const AndaApplication: React.FC = () => {
    const content = useContent("anda");
    const hero = content?.hero;
    const main = content?.main;
    const submissions = content?.submissions;

    const submissionItems = [submissions?.item1, submissions?.item2, submissions?.item3, submissions?.item4].filter(Boolean) as string[];

    return (
        <div className="w-full bg-white font-sans flex flex-col min-h-screen">
            <title>ANDA Application Consulting — Abbreviated New Drug Application Support | E&E Medicals</title>
            <meta name="description" content="Abbreviated New Drug Application (ANDA) consulting — generic drug regulatory strategy, bioequivalence study guidance, ANDA submission preparation, and FDA correspondence support." />
            <Header />

            <main className="grow">
                <PageHeader
                    title="Abbreviated New Drug Application (ANDA) Submissions – Overview"
                    breadcrumb="Abbreviated New Drug Application (ANDA)"
                />

                <InnerContent>
                    <HeroImage
                        src={hero?.hero_image || "https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?q=80&w=1400"}
                        alt={hero?.hero_image_alt || "Abbreviated New Drug Application generic drug manufacturing"}
                        label={hero?.badge_text || "ANDA Submissions"}
                    />
                    <Section>
                        <SectionHeading badge={main?.badge_text || "ANDA"} title={main?.title || "Abbreviated New Drug Application (ANDA)"} />
                        <div className="space-y-6 text-gray-700 leading-relaxed text-[15px] md:text-base">
                            <p>{main?.paragraph1 || "ANDA is the pathway for generic medicines to demonstrate therapeutic equivalence and enter the market."}</p>
                            <p>{main?.paragraph2 || "Early regulatory strategy helps manufacturers meet QbD, GDUFA, and filing requirements with fewer review delays."}</p>
                        </div>
                    </Section>

                    <Section dark>
                        <SectionHeading badge={submissions?.badge_text || "Submissions"} title={submissions?.title || "ANDA Submissions"} />
                        <div className="space-y-6">
                            <p className="text-gray-300 leading-relaxed text-[15px] md:text-base">
                                {submissions?.paragraph || "Strategic assistance with ANDA roadmaps, filing process, and submission document readiness."}
                            </p>
                            <FeatureList items={submissionItems.length ? submissionItems : andaItems} columns={2} />
                        </div>
                    </Section>

                    <PageCTA />
                </InnerContent>
            </main>

            <Footer />
        </div>
    );
};
