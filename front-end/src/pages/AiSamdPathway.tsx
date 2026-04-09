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
    BulletList,
    HeroImage,
    Section,
    InfoBox,
    PageCTA,
} from "../components/shared/InnerPage";

const intendedItems = [
    "Establish the appropriate regulatory classification and submission pathway",
    "Align development activities with FDA, IMDRF, and international expectations",
    "De-risk regulatory review by anticipating the FDA reviewer's focus areas",
    "Enable scalable model updates through a Predetermined Change Control Plan (PCCP)",
];

const deliverables = [
    "Intended Use & claims risk calibration",
    "FDA pathway decision (510(k) vs De Novo vs PMA)",
    "AI risk classification",
    "Regulatory timeline & evidence roadmap",
    "Competitor predicate/reference mapping",
];

export const AiSamdPathway: React.FC = () => {
    const content = useContent("ai_samd");
    const hero = content?.hero;
    const strategy = content?.strategy;
    const deliverablesSection = content?.deliverables;

    const intendedList = [strategy?.item1, strategy?.item2, strategy?.item3].filter(Boolean) as string[];
    const deliverablesList = [deliverablesSection?.item1, deliverablesSection?.item2, deliverablesSection?.item3].filter(Boolean) as string[];

    return (
        <div className="w-full bg-white font-sans flex flex-col min-h-screen">
            <Header />

            <main className="grow">
                <PageHeader
                    title="AI SaMD Regulatory Pathway Strategy"
                    breadcrumb="AI SaMD Pathway Strategy"
                />

                <InnerContent>
                    <HeroImage
                        src={hero?.hero_image || "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?q=80&w=1400"}
                        alt={hero?.hero_image_alt || "AI artificial intelligence medical device regulatory pathway"}
                        label={hero?.badge_text || "AI SaMD Regulatory Pathway"}
                    />
                    <Section>
                        <SectionHeading badge={strategy?.badge_text || "AI Strategy"} title={strategy?.title || "Global Regulatory Strategy"} />
                        <div className="space-y-6">
                            <p className="text-gray-700 leading-relaxed">{strategy?.paragraph1 || "We prepare a strategy that defines the global regulatory pathway for AI/ML-enabled SaMD from development through post-market lifecycle."}</p>
                            <div>
                                <h3 className="font-display text-lg font-bold text-navy-900 mb-4">It is intended to:</h3>
                                <FeatureList items={intendedList.length ? intendedList : intendedItems} />
                            </div>
                            <p className="text-gray-700 leading-relaxed">
                                <strong className="text-navy-900">Purpose:</strong> {strategy?.purpose_text || "Prevent wrong pathway selection (fatal error)."}
                            </p>
                        </div>
                    </Section>

                    <Section>
                        <SectionHeading badge={deliverablesSection?.badge_text || "Deliverables"} title={deliverablesSection?.title || "Deliverables & Engagement"} />
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                            <div>
                                <h3 className="font-display text-xl font-semibold text-navy-900 mb-6">{deliverablesSection?.heading || "What You Receive"}</h3>
                                <BulletList items={deliverablesList.length ? deliverablesList : deliverables} />
                            </div>
                            <div className="flex flex-col gap-6 justify-center">
                                <InfoBox variant="light">
                                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">{deliverablesSection?.duration_label || "Duration"}</p>
                                    <p className="text-2xl font-extrabold text-navy-900 font-display">{deliverablesSection?.duration_value || "2–4 weeks"}</p>
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
