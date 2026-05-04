import React from "react";
import { PageHeader } from "../components/shared/PageHeader";
import { Header } from "../components/Header";
import { PageMeta } from "../components/shared/PageMeta";
import { Footer } from "../components/Footer";
import { Link } from "react-router-dom";
import { useContent } from "../hooks/useContent";
import {
    InnerContent,
    SectionHeading,
    HeroImage,
    Section,
    InfoBox,
    PageCTA,
    ResourceLinksGrid,
} from "../components/shared/InnerPage";

export const CEMarkApproval: React.FC = () => {
    const content = useContent("ce_mark");
    const hero = content?.hero;
    const main = content?.main;
    const gap = content?.gap;
    const mdd = content?.mdd;
    const clinical = content?.clinical;
    const why = content?.why;

    return (
        <div className="w-full bg-white font-sans flex flex-col min-h-screen">
            <PageMeta
                title="CE Mark Approval & EU MDR Compliance for Medical Devices"
                description="CE Mark approval and EU MDR/IVDR compliance consulting — technical documentation, notified body support, and European market access for medical device manufacturers."
            />
            <Header />

            <main className="grow">
                <PageHeader
                    title="Best CE mark approval for medical devices consultants | An Overviews"
                    breadcrumb="CE Mark Approval"
                />

                <InnerContent>
                    <HeroImage
                        src={hero?.hero_image || "https://images.unsplash.com/photo-1551601651-2a8555f1a136?q=80&w=1400"}
                        alt={hero?.hero_image_alt || "CE mark approval medical device European regulatory compliance"}
                        label={hero?.badge_text || "CE Mark Certification"}
                    />

                    <Section>
                        <SectionHeading badge={main?.badge_text || "CE Mark"} title={main?.title || "CE Mark Approval"} />
                        <div className="space-y-6 text-gray-700 leading-relaxed text-[15px] md:text-base">
                            <p>{main?.paragraph || "CE marking is a mandatory conformance mark for products in the EEA and certifies compliance with applicable medical device requirements."}</p>
                            <InfoBox variant="light">
                                <p className="text-center text-sm italic text-gray-500">
                                    [{main?.diagram_note || "Image diagram showing the step-by-step CE Mark certification process for Medical Devices under MDR"}]
                                </p>
                            </InfoBox>
                        </div>
                    </Section>

                    <Section>
                        <SectionHeading badge={gap?.badge_text || "Gap Analysis"} title={gap?.title || "MDR Technical Documentation / Gap Analysis"} />
                        <p className="text-gray-700 leading-relaxed text-[15px] md:text-base">
                            {gap?.paragraph || "Our experts review design, risk analysis, clinical evaluation, testing, post-market surveillance, and labeling to ease MDR transition."}
                        </p>
                    </Section>

                    <Section>
                        <SectionHeading badge={mdd?.badge_text || "MDD to MDR"} title={mdd?.title || "Conversion of MDD to MDR File(s)"} />
                        <p className="text-gray-700 leading-relaxed text-[15px] md:text-base">
                            {mdd?.paragraph || "To align with MDR, existing MDD documentation often needs conversion and enhancement with updated quality and safety evidence."}
                        </p>
                    </Section>

                    <Section>
                        <SectionHeading badge={clinical?.badge_text || "Clinical Documentation"} title={clinical?.title || "Clinical Documentation - Evaluation Plan & Procedures"} />
                        <p className="text-gray-700 leading-relaxed text-[15px] md:text-base">
                            {clinical?.paragraph || "Clinical documentation starts with a structured evaluation plan and step-by-step methodology aligned with MDR clinical data requirements."}
                        </p>
                    </Section>

                    <Section dark>
                        <SectionHeading badge={why?.badge_text || "Why E&E"} title={why?.title || "Why choose E & E Medicals and Consulting?"} />
                        <div className="space-y-5 text-gray-300 leading-relaxed text-[15px] md:text-base">
                            <p>{why?.paragraph1 || "Our EU partners determine practical measures and applicable tests to meet CE marking requirements."}</p>
                            <p>{why?.paragraph2 || "We help transform legacy medical device files to MDR with safety, performance, and compliance alignment."}</p>
                            <div className="pt-4 border-t border-white/10 mt-2">
                                <p className="font-semibold text-white">
                                    For the CE Marking of Full / Half service,{" "}
                                    <Link to="/share-your-project" className="text-brand-400 hover:text-brand-300 hover:underline">
                                        {why?.cta_text || "Request for Quote"}
                                    </Link>
                                    .
                                </p>
                            </div>
                        </div>
                    </Section>

                    <Section>
                        <SectionHeading badge="Further Reading" title="EU MDR/IVDR Resources &amp; Industry Sources" subtitle="Recent regulatory updates, reform proposals, and compliance guidance from leading EU medical device regulatory sources." />
                        <ResourceLinksGrid links={[
                            { href: "https://meddeviceguide.com", label: "EU MDR/IVDR Simplification 2026: Proposed Changes, Timeline & What to Expect", source: "MedDeviceGuide" },
                            { href: "https://complifegroup.com", label: "MDR and IVDR Reform: the Commission's Proposal for a Long-Awaited Revision", source: "Complife Group" },
                            { href: "https://health.ec.europa.eu/medical-devices-sector/new-regulations_en", label: "New Regulations — EU Medical Device Regulation (MDR & IVDR)", source: "European Commission" },
                            { href: "https://mdlaw.eu", label: "MDR and IVDR: EU Guidance Documents Updated in April 2026", source: "MDlaw" },
                            { href: "https://mavenprofserv.com", label: "EUDAMED Mandatory 2026: MDR & IVDR Compliance Guide", source: "Maven Profcon Services" },
                            { href: "https://dqs.com", label: "MDR Update: Commission Implementing Decision (EU) 2026/193", source: "DQS" },
                            { href: "https://raps.org", label: "MedCon: Don't Change Course Based on Proposed MDR/IVDR Reforms", source: "RAPS" },
                            { href: "https://arnoldporter.com", label: "The EU Medical Device Shake-Up: What International Companies Should Know", source: "Arnold & Porter" },
                            { href: "https://kalmsconsulting.com", label: "EUDAMED, MDR Transition and EU Regulatory Changes in 2026", source: "Kalms Consulting" },
                            { href: "https://mdxcro.com", label: "MDR and IVDR Targeted Revision: What Changes in 2026?", source: "MDX CRO" },
                            { href: "https://johner-institute.com", label: "MDR 2.0, IVDR 2.0: What the European Commission is Planning", source: "Johner Institute" },
                            { href: "https://simmons-simmons.com", label: "EU Proposes Overhaul of MDR & IVDR", source: "Simmons & Simmons" },
                        ]} />
                    </Section>

                    <PageCTA />
                </InnerContent>
            </main>

            <Footer />
        </div>
    );
};
