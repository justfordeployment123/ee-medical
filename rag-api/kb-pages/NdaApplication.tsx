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

export const NdaApplication: React.FC = () => {
    return (
        <div className="w-full bg-white font-sans flex flex-col min-h-screen">
            <Header />

            <main className="grow">
                <PageHeader title="New Drug Application – Overview" breadcrumb="New Drug Application (NDA)" />

                <InnerContent>
                    <HeroImage
                        src="https://images.unsplash.com/photo-1585435557343-3b092031a831?q=80&w=1400"
                        alt="New Drug Application pharmaceutical approval"
                        label="New Drug Application"
                    />
                    {/* --- SECTION 1: NDA Overview --- */}
                    <section>
                        <SectionHeading
                            badge="Drug Approvals"
                            title="New Drug Application (NDA)"
                        />

                        <div className="text-gray-700 leading-relaxed text-[15px] md:text-base space-y-6">
                            <p>
                                The United States Food and Drug Administration (FDA) approves pharmaceutical drugs for human use through the New Drug
                                Application (NDA) 505(b)(1) and 505(b)(2) application process (US FDA). There are two routes for new drug approval
                                established by law in the United States: the 505(b)(1) NDA pathway and the 505(b)(2) NDA pathway.
                            </p>
                            <p>
                                For new drugs containing active ingredients that have not yet been approved, the 505(b)(1) NDA pathway is used to gain
                                approval. All relevant safety and efficacy data should be included in an NDA application submitted via this route.
                                Applications submitted under the 505(b)(2) NDA Regulatory pathway are subject to additional requirements, including
                                the submission of full reports of safety and effectiveness investigations and the use of data from studies that the
                                applicant did not conduct and for which the applicant did not obtain a right of reference. For drugs that have already
                                been evaluated and approved by the FDA as part of other NDAs, the 505(b)(2) New Drug Application route is used for
                                applications with changes in dosage form, change in strength, and change in route of administration.
                            </p>
                            <p>
                                Most sponsors struggle to figure out how to navigate the FDA's rules, which regulatory pathway to take for their drug
                                development case, and what regulatory strategy to employ when submitting an NDA. The sponsor of an NDA must include
                                all information required by Federal Regulations. Suppose the sponsor does not provide sufficient data. In that case,
                                the US Food and Drug Administration (FDA) may Refuse to File (RTF) the NDA, making further development impossible
                                unless the sponsor provides data to satisfy FDA's requirements. Sponsors can save time and money (in the form of the
                                agency fee) by simply being familiar with the NDA filing process and the guidance outlining the reasons for RTF of a
                                New Drug Application.
                            </p>
                            <p className="font-semibold text-gray-900">
                                From the initial pre-NDA meetings through the submission of annual reports and beyond, E&E Medicals provides
                                comprehensive Regulatory support to the sponsors throughout the entire NDA process.
                            </p>
                        </div>
                    </section>

                    {/* --- SECTION 2: E&E Expertise --- */}
                    <Section dark={false}>
                        <SectionHeading title="E&E Medicals Expertise" />

                        <FeatureList
                            columns={2}
                            items={[
                                "Strategic guidance in zeroing in on the best Regulatory avenue to submit an NDA.",
                                "Professional guidance on gaining expedited agency support (i.e., Fast Track designation, Breakthrough Therapy designation, Accelerated Approval process, and Priority Review designation).",
                                "Help before submitting to the US Food and Drug Administration, including putting together a briefing package and attending a meeting to discuss scientific issues.",
                                "Expertise in both the NDA filing process and the NDA review process, as well as a thorough familiarity with all applicable Federal regulations and submission pathways (505(b)(1), 505(b)(2), and 505(j)).",
                                "Provide sponsors with a risk mitigation plan for the identified Regulatory gaps through a gap analysis of developmental data/source data compared to the requirements for submitting an NDA.",
                                "Application packages for both 505(b)(1) and 505(b)(2) NDAs must be compiled, reviewed technically, published, and submitted in the eCTD format through the FDA Electronic Submissions Gateway.",
                                "Sample NDAs complete with all the necessary technical data for eCTD filing.",
                                "Planning, execution, and timely submission of a regulatory response to questions or data requests from the US Food and Drug Administration.",
                                "Regulatory guidance for all activities involving the FDA prior to, during, and after the NDA submission process.",
                                "Administration of the NDA's Post-Approval Phase (supplements, CBE 30, CBE, annual reports, etc.).",
                                "NDA Complete Response Letters (CRLs) management includes strategy and submission support.",
                            ]}
                        />
                    </Section>

                    <PageCTA />
                </InnerContent>
            </main>

            <Footer />
        </div>
    );
};
