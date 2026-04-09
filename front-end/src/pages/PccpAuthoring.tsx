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

const deliverables = [
    "SaMD change taxonomy (locked vs adaptive)",
    "Algorithm Change Protocol (ACP)",
    "Model update validation plan",
    "Drift monitoring & acceptance thresholds",
    "FDA-acceptable PCCP narrative",
];

export const PccpAuthoring: React.FC = () => {
    const content = useContent("pccp");
    const hero = content?.hero;
    const framework = content?.framework;
    const deliverablesSection = content?.deliverables;

    const items = [deliverablesSection?.item1, deliverablesSection?.item2, deliverablesSection?.item3, deliverablesSection?.item4].filter(Boolean) as string[];

    return (
        <div className="w-full bg-white font-sans flex flex-col min-h-screen">
            <Header />

            <main className="grow">
                <PageHeader
                    title="Predetermined Change Control Plan (PCCP) Authoring"
                    breadcrumb="PCCP Authoring"
                />

                <InnerContent>
                    <HeroImage
                        src={hero?.hero_image || "https://images.unsplash.com/photo-1555255707-c07966088b7b?q=80&w=1400"}
                        alt={hero?.hero_image_alt || "Predetermined change control plan software development"}
                        label={hero?.badge_text || "PCCP Authoring"}
                    />
                    <Section>
                        <SectionHeading badge={framework?.badge_text || "Regulatory Strategy"} title={framework?.title || "PCCP Framework"} />
                        <div className="space-y-6">
                            <p className="text-gray-700 leading-relaxed">{framework?.paragraph1 || "We prepare a PCCP that defines a structured framework for anticipated post-authorization changes in regulated AI products."}</p>
                            <p className="text-gray-700 leading-relaxed">{framework?.paragraph2 || "The PCCP establishes boundaries, controls, governance, and predefined acceptance criteria for compliant change execution."}</p>
                            <p className="text-gray-700 leading-relaxed">
                                <strong className="text-navy-900">Purpose:</strong> {framework?.purpose_text || "Enable post-approval AI updates without re-submission failure."}
                            </p>
                        </div>
                    </Section>

                    <Section>
                        <SectionHeading badge={deliverablesSection?.badge_text || "Deliverables"} title={deliverablesSection?.title || "Deliverables & Engagement"} />
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                            <div>
                                <h3 className="font-display text-xl font-semibold text-navy-900 mb-6">What You Receive</h3>
                                <FeatureList items={items.length ? items : deliverables} />
                            </div>
                            <div className="flex flex-col gap-6 justify-center">
                                <InfoBox variant="light">
                                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">{deliverablesSection?.duration_label || "Duration"}</p>
                                    <p className="text-2xl font-extrabold text-navy-900 font-display">{deliverablesSection?.duration_value || "4–8 weeks"}</p>
                                </InfoBox>
                                <p className="font-medium text-gray-700">
                                    For more details, submit your details at{" "}
                                    <Link to="/contact" className="text-brand-600 hover:underline font-semibold">
                                        our contact form
                                    </Link>.
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
