import React from "react";
import { PageHeader } from "../components/shared/PageHeader";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Link } from "react-router-dom";
import {
    InnerContent,
    SectionHeading,
    HeroImage,
    Section,
    InfoBox,
    PageCTA,
} from "../components/shared/InnerPage";

export const CEMarkApproval: React.FC = () => {
    return (
        <div className="w-full bg-white font-sans flex flex-col min-h-screen">
            <Header />

            <main className="grow">
                <PageHeader
                    title="Best CE mark approval for medical devices consultants | An Overviews"
                    breadcrumb="CE Mark Approval"
                />

                <InnerContent>
                    <HeroImage
                        src="https://images.unsplash.com/photo-1551601651-2a8555f1a136?q=80&w=1400"
                        alt="CE mark approval medical device European regulatory compliance"
                        label="CE Mark Certification"
                    />

                    <Section>
                        <SectionHeading badge="CE Mark" title="CE Mark Approval" />
                        <div className="space-y-6 text-gray-700 leading-relaxed text-[15px] md:text-base">
                            <p>
                                The CE marking (known as CE mark) is a mandatory conformance mark on many products placed on the single market in the
                                European Economic Area (EEA). The CE marking certifies that a product has met the requirements of the applicable
                                European Medical device derivative. Like active implantable medical device (AIMD) Directive 90/385/EEC medical device
                                Directive 93/42/EEC its modifications.
                            </p>
                            <InfoBox variant="light">
                                <p className="text-center text-sm italic text-gray-500">
                                    [Image diagram showing the step-by-step CE Mark certification process for Medical Devices under MDR]
                                </p>
                            </InfoBox>
                        </div>
                    </Section>

                    <Section>
                        <SectionHeading badge="Gap Analysis" title="MDR Technical Documentation / Gap Analysis" />
                        <p className="text-gray-700 leading-relaxed text-[15px] md:text-base">
                            Our experts review device design, risk analysis, clinical evaluation, testing reports, post-market surveillance,
                            labeling, other required areas. Gap analysis is to ease the transition in the required areas.
                        </p>
                    </Section>

                    <Section>
                        <SectionHeading badge="MDD to MDR" title="Conversion of MDD to MDR File(s)" />
                        <p className="text-gray-700 leading-relaxed text-[15px] md:text-base">
                            To meet with the New EU Medical Device Regulation (MDR) in which safety, efficacy. Many works with CE MDD need to
                            convert their documentation to assemble the new Medical Device Regulation (MDR). The existing files shall upgraded
                            with quality materials to meet all needs.
                        </p>
                    </Section>

                    <Section>
                        <SectionHeading badge="Clinical Documentation" title="Clinical Documentation - Evaluation Plan & Procedures" />
                        <p className="text-gray-700 leading-relaxed text-[15px] md:text-base">
                            The Clinical Documentation process begins with a clearly designed Evaluation Plan. Which entails the methodological
                            systematic approach to reach adequate reporting. It provides a step-by-step approach to conducting documenting each
                            procedure. In the MDR, Chapter VI, Article 61 critical issues for clinical data. Our experts have developed forms
                            templates for mandatory procedures.
                        </p>
                    </Section>

                    <Section dark>
                        <SectionHeading badge="Why E&E" title="Why choose E & E Medicals and Consulting?" />
                        <div className="space-y-5 text-gray-300 leading-relaxed text-[15px] md:text-base">
                            <p>
                                Our experts and partners who live EU Authorized recognize threats, consider dangers. Carry out all applicable tests to
                                determine the appropriate measures to meet with{" "}
                                <strong className="text-white">CE mark approval</strong>, CE marking, CE certification mark regulations.
                            </p>
                            <p>
                                Our team of medical device consultants helps in transforming existing medical device Files to MDR. The EU necessities
                                may consist of protection, fitness, environmental protection. Many merchandises require CE marking they are within the EU.
                            </p>
                            <div className="pt-4 border-t border-white/10 mt-2">
                                <p className="font-semibold text-white">
                                    For the CE Marking of Full / Half service,{" "}
                                    <Link to="/share-your-project" className="text-brand-400 hover:text-brand-300 hover:underline">
                                        Request for Quote
                                    </Link>
                                    .
                                </p>
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
