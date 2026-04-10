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
    PageCTA,
} from "../components/shared/InnerPage";

const assistItems = [
    "Identifying your core processes and key customers",
    "Identifying internal and external customer requirements",
    "Measuring your current performance",
    "Prioritizing, analyzing, and implementing improvement plans",
    "Expanding and integrating the Six Sigma in Healthcare",
];

export const SixSigmaHealthcare: React.FC = () => {
    const content = useContent("six_sigma");
    const hero = content?.hero;
    const sigma = content?.sigma;
    const healthcare = content?.healthcare;
    const why = content?.why;

    const assistList = [
        why?.assist1,
        why?.assist2,
        why?.assist3,
        why?.assist4,
        why?.assist5,
    ].filter(Boolean) as string[];

    return (
        <div className="w-full bg-white font-sans flex flex-col min-h-screen">
            <title>Six Sigma Healthcare Consulting — Process Improvement for Medical Devices | E&E Medicals</title>
            <meta name="description" content="Six Sigma and Lean consulting for healthcare and medical device manufacturers — process improvement, DMAIC methodology, and quality system optimization." />
            <Header />

            <main className="grow">
                <PageHeader title="Six Sigma – Healthcare" breadcrumb="Six Sigma – Healthcare" />

                <InnerContent>
                    <HeroImage
                        src={hero?.hero_image || "https://images.unsplash.com/photo-1559757175-5700dde675bc?q=80&w=1400"}
                        alt={hero?.hero_image_alt || "Six Sigma healthcare process improvement quality"}
                        label={hero?.badge_text || "Six Sigma Healthcare"}
                    />

                    <Section>
                        <SectionHeading badge={sigma?.badge_text || "Six Sigma"} title={sigma?.title || "What is Six Sigma?"} />
                        <div className="space-y-4 text-gray-700 leading-relaxed text-[15px] md:text-base">
                            <p>{sigma?.paragraph1 || "Six Sigma is a process improvement initiative used to eliminate defects from processes."}</p>
                            <p>{sigma?.paragraph2 || "Design for Six Sigma (DFSS) is an emerging methodology related to traditional Six Sigma."}</p>
                        </div>
                    </Section>

                    <Section>
                        <SectionHeading badge={healthcare?.badge_text || "Healthcare"} title={healthcare?.title || "Why Six Sigma in Healthcare?"} />
                        <p className="text-gray-700 leading-relaxed text-[15px] md:text-base">
                            {healthcare?.paragraph || "The healthcare industry faces challenges in cost, safety, and quality. Lean Six Sigma can reduce defects, wait times, and operating costs while improving patient outcomes."}
                        </p>
                    </Section>

                    <Section dark>
                        <SectionHeading badge={why?.badge_text || "Why E&E"} title={why?.title || "Why choose E & E Medicals and Consulting?"} />
                        <div className="space-y-5 text-gray-300 leading-relaxed text-[15px] md:text-base">
                            <p>{why?.paragraph1 || "Given the challenges of implementing Six Sigma in healthcare, many facilities continue to use independent consultants."}</p>
                            <p>
                                <Link to="/" className="text-brand-400 hover:text-brand-300 hover:underline">
                                    E & E Medicals
                                </Link>{" "}
                                and consulting {why?.paragraph2 || "offer a customized Six Sigma Healthcare program based on DMAIC to match your business challenges and disciplines."}
                            </p>
                            <p className="font-semibold text-white">{why?.assist_intro || "We will assist you in:"}</p>
                            <FeatureList items={assistList.length ? assistList : assistItems} />
                        </div>
                    </Section>

                    <PageCTA />
                </InnerContent>
            </main>

            <Footer />
        </div>
    );
};
