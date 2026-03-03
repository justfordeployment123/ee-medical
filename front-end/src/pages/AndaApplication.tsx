import React from "react";
import { PageHeader } from "../components/shared/PageHeader";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import {
    InnerContent,
    SectionHeading,
    FeatureList,
    HeroImage,
    Section,
    PageCTA,
} from "../components/shared/InnerPage";

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
    return (
        <div className="w-full bg-white font-sans flex flex-col min-h-screen">
            <Header />

            <main className="grow">
                <PageHeader
                    title="Abbreviated New Drug Application (ANDA) Submissions – Overview"
                    breadcrumb="Abbreviated New Drug Application (ANDA)"
                />

                <InnerContent>
                    <HeroImage
                        src="https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?q=80&w=1400"
                        alt="Abbreviated New Drug Application generic drug manufacturing"
                        label="ANDA Submissions"
                    />
                    <Section>
                        <SectionHeading badge="ANDA" title="Abbreviated New Drug Application (ANDA)" />
                        <div className="space-y-6 text-gray-700 leading-relaxed text-[15px] md:text-base">
                            <p>
                                The Abbreviated New Drug Application (ANDA) is the pharmaceutical industry's entry point for generic medicines to demonstrate their therapeutic equivalence to innovator/branded drugs in terms of quality, safety, and efficacy, making them a more affordable option. US officials are aware of the potential of the generic medicines market, so they push for the growth of generic manufacturers by facilitating the registration of ANDAs through the 505(j) route.
                            </p>
                            <p>
                                Generic drug applications must go through the ANDA application and ANDA Regulatory approval processes. Nonetheless, it is difficult for manufacturers to decipher the guidelines and adhere to specific requirements like product development using a QbD approach, Module 2 in QBR format, and the implementation of the GDUFA program, all of which are mandated by the US FDA as part of ANDA submissions. Manufacturers must include Regulatory Affairs professionals in the initial stages of product development to ensure smoother registration, faster approval, better life cycle management, and an easier ANDA filing process.
                            </p>
                            <p>
                                Regarding timely, low-cost, and RTR (Refuse-to-Receive) compliant submissions and approvals, E&E Medicals is the dependable Regulatory partner you need. An ANDA application reviewed by the US FDA can be sped up with the help of E&E Medicals. E&E Medicals helps you find the fastest and safest way to get your products to market so that you can achieve your business goals by thoroughly understanding the ANDA submission requirements and a comprehensive risk management approach.
                            </p>
                        </div>
                    </Section>

                    <Section dark>
                        <SectionHeading badge="Submissions" title="ANDA Submissions" />
                        <div className="space-y-6">
                            <p className="text-gray-300 leading-relaxed text-[15px] md:text-base">
                                Strategic assistance with ANDA submission roadmaps, ANDA filing process, and ANDA submission-related document generation. The following are some of the things E&E Medicals can do regarding ANDA submissions:
                            </p>
                            <FeatureList items={andaItems} columns={2} />
                        </div>
                    </Section>

                    <PageCTA />
                </InnerContent>
            </main>

            <Footer />
        </div>
    );
};
