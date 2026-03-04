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
    return (
        <div className="w-full bg-white font-sans flex flex-col min-h-screen">
            <Header />

            <main className="grow">
                <PageHeader title="Six Sigma – Healthcare" breadcrumb="Six Sigma – Healthcare" />

                <InnerContent>
                    <HeroImage
                        src="https://images.unsplash.com/photo-1559757175-5700dde675bc?q=80&w=1400"
                        alt="Six Sigma healthcare process improvement quality"
                        label="Six Sigma Healthcare"
                    />

                    <Section>
                        <SectionHeading badge="Six Sigma" title="What is Six Sigma?" />
                        <div className="space-y-4 text-gray-700 leading-relaxed text-[15px] md:text-base">
                            <p>
                                Six Sigma is a process improvement initiative used to eliminate defects from processes. The goal is to create near perfection through continuous improvement that aligns the "voice of the process" with the "voice of the customer". No more than 3.4 defects per one million opportunities (DPMO) is the goal of Six Sigma level of quality.
                            </p>
                            <p>
                                Design for Six Sigma (DFSS) is a separate and emerging business-process management methodology related to traditional Six Sigma. While the tools and order used in Six Sigma require a process to be in place and functioning, DFSS has the objective of determining the customers and business needs, driving those needs into the product solution so created. DFSS is relevant to the complex system/product synthesis phase, especially in the context of unprecedented system development.
                            </p>
                        </div>
                    </Section>

                    <Section>
                        <SectionHeading badge="Healthcare" title="Why Six Sigma in Healthcare?" />
                        <p className="text-gray-700 leading-relaxed text-[15px] md:text-base">
                            The healthcare industry faces challenges in costs, patient protection, liability, and insurance rates. Currently, many hospitals are more mindful of the operating costs as the demands of quality patient care increases. The Six Sigma in healthcare approach can be used as a remedy for improving the quality of healthcare in hospitals and services. In healthcare, the Lean Six Sigma methodologies can be used to reduce defects which could result in medical errors. Medical accidents in the United States have led to over 400,000 deaths worldwide, costing an estimated $112.1 billion annually to the medical industry. Successfully implementing the Lean Six Sigma concepts could reduce accidents or falls in hospitals and nursing homes and drug administration mistakes, reduce the runoff time for test results, reduce the wait times in hospitals and private practitioners. All these improvements lead to high service quality, reduce operating costs, and better customer satisfaction.
                        </p>
                    </Section>

                    <Section dark>
                        <SectionHeading badge="Why E&E" title="Why choose E & E Medicals and Consulting?" />
                        <div className="space-y-5 text-gray-300 leading-relaxed text-[15px] md:text-base">
                            <p>
                                Given the difficulties of implementing Six Sigma in the medical sector, many healthcare facilities continue to use independent Six Sigma consultants to maximize satisfaction for patients.
                            </p>
                            <p>
                                <Link to="/" className="text-brand-400 hover:text-brand-300 hover:underline">
                                    E & E Medicals
                                </Link>{" "}
                                and consulting offer a very unique Six Sigma Healthcare program that is designed for the Healthcare industry. While much of the Lean Six Sigma methodologies are applicable to any process improvement program, there are certain unique qualities of the Healthcare environment that require a full understanding of what providers are currently facing. Six Sigma process is based on the DMAIC model – Define, Measure, Analyze, Improve, and Control. Although the methodology used for each organization is similar, we fully customize each application to meet the challenges of your individual business and disciplines. This results in product designs that consistently meet customer requirements, target costs, target release dates, and manufacturing requirements.
                            </p>
                            <p className="font-semibold text-white">We will assist you in:</p>
                            <FeatureList items={assistItems} />
                        </div>
                    </Section>

                    <PageCTA />
                </InnerContent>
            </main>

            <Footer />
        </div>
    );
};
