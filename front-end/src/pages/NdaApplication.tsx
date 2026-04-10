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
export const NdaApplication: React.FC = () => {
    const content = useContent("nda");
    const hero = content?.hero;
    const main = content?.main;
    const expertise = content?.expertise;

    const expertiseList = [expertise?.item1, expertise?.item2, expertise?.item3, expertise?.item4].filter(Boolean) as string[];

    return (
        <div className="w-full bg-white font-sans flex flex-col min-h-screen">
            <title>NDA Application Consulting — New Drug Application FDA Submission | E&E Medicals</title>
            <meta name="description" content="New Drug Application (NDA) consulting — FDA submission strategy, NDA preparation, clinical data review, and regulatory affairs support for pharmaceutical manufacturers." />
            <Header />

            <main className="grow">
                <PageHeader title="New Drug Application – Overview" breadcrumb="New Drug Application (NDA)" />

                <InnerContent>
                    <HeroImage
                        src={hero?.hero_image || "https://images.unsplash.com/photo-1585435557343-3b092031a831?q=80&w=1400"}
                        alt={hero?.hero_image_alt || "New Drug Application pharmaceutical approval"}
                        label={hero?.badge_text || "New Drug Application"}
                    />
                    {/* --- SECTION 1: NDA Overview --- */}
                    <section>
                        <SectionHeading
                            badge={main?.badge_text || "Drug Approvals"}
                            title={main?.title || "New Drug Application (NDA)"}
                        />

                        <div className="text-gray-700 leading-relaxed text-[15px] md:text-base space-y-6">
                            <p>{main?.paragraph1 || "NDA 505(b)(1) and 505(b)(2) pathways support U.S. approval depending on evidence and product profile."}</p>
                            <p>{main?.paragraph2 || "Sponsors need strategic pathway planning and robust submission packages to avoid Refuse-to-File issues."}</p>
                            <p className="font-semibold text-gray-900">{main?.paragraph3 || "E&E Medicals supports sponsors from pre-NDA meetings through post-approval lifecycle activities."}</p>
                        </div>
                    </section>

                    {/* --- SECTION 2: E&E Expertise --- */}
                    <Section dark={false}>
                        <SectionHeading title={expertise?.title || "E&E Medicals Expertise"} />

                        <FeatureList
                            columns={2}
                            items={expertiseList.length ? expertiseList : [
                                "Strategic guidance in zeroing in on the best Regulatory avenue to submit an NDA.",
                                "Professional guidance on gaining expedited agency support (i.e., Fast Track designation, Breakthrough Therapy designation, Accelerated Approval process, and Priority Review designation).",
                                "Help before submitting to the US Food and Drug Administration, including putting together a briefing package and attending a meeting to discuss scientific issues.",
                                "Expertise in both the NDA filing process and the NDA review process, as well as a thorough familiarity with all applicable Federal regulations and submission pathways (505(b)(1), 505(b)(2), and 505(j)).",
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
