import React from "react";
import { PageHeader } from "../components/shared/PageHeader";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Link } from "react-router-dom";
import { useContent } from "../hooks/useContent";
import {
    InnerContent,
    SectionHeading,
    SubHeading,
    FeatureList,
    BulletList,
    Section,
    InfoBox,
    HeroImage,
    SplitSection,
    PageCTA,
} from "../components/shared/InnerPage";

const reliabilityEngItems = [
    "Accelerated Life Testing (ALT)",
    "Weibull & reliability growth modeling",
    "Design for Reliability (DfR)",
    "Field failure & complaint trend analysis",
];

const riskMgmtItems = [
    "ISO 14971 risk files",
    "Risk-based design controls",
    "Post-market risk assessment",
    "FDA response support (483 / Warning Letters)",
];

const productivityItems = [
    "CAPA reduction & effectiveness",
    "Yield improvement & scrap reduction",
    "Supplier risk reduction",
    "Reliability-driven cost reduction",
];

const testPlanItems = [
    "<strong>Repeatability:</strong> The test setup will be easy to capture failures such that any lab can reproduce the setup which will lead to better results",
    "<strong>Survival:</strong> The final production units can stay under the field failure rates you need to survive, grow, and maintain a good reputation.",
];

const mtbfItems = [
    "Tracking a product's reliability and guiding corrective actions through the use of field data",
    "Predicting the number of returns/failures",
    "Reliability specifications",
    "Optimum replacement time determination",
    "Spare parts determination",
    "Reliability goals, setting and meeting them",
    "Supplier reliability issues",
    "Failure behavior assessment and failure mode detection",
    "Warranty time determination",
    "Cost projections for in-warranty failures",
    "Analysis of different failure modes",
    "Reliability bathtub curves",
    "Probabilistic design using stress-strength interference",
    "Examining repairable systems",
    "Comparing designs, suppliers and data sets",
];

export const Reliability: React.FC = () => {
    const content = useContent("reliability");
    const hero = content?.hero;
    const product = content?.product;
    const testPlan = content?.test_plan;
    const mtbf = content?.mtbf;

    const relItems = [
        product?.rel_item1,
        product?.rel_item2,
        product?.rel_item3,
        product?.rel_item4,
    ].filter(Boolean) as string[];

    const riskItems = [
        product?.risk_item1,
        product?.risk_item2,
        product?.risk_item3,
        product?.risk_item4,
    ].filter(Boolean) as string[];

    const prodItems = [
        product?.prod_item1,
        product?.prod_item2,
        product?.prod_item3,
        product?.prod_item4,
    ].filter(Boolean) as string[];

    const objectiveItems = [
        testPlan?.objective1,
        testPlan?.objective2,
    ].filter(Boolean) as string[];

    const mtbfList = [
        mtbf?.item1,
        mtbf?.item2,
        mtbf?.item3,
        mtbf?.item4,
        mtbf?.item5,
        mtbf?.item6,
    ].filter(Boolean) as string[];

    return (
        <div className="w-full bg-white font-sans flex flex-col min-h-screen">
            <title>Reliability Engineering & Medical Device Testing Services | E&E Medicals</title>
            <meta name="description" content="Reliability engineering consulting for medical devices — FMEA, design verification, accelerated life testing, and reliability growth analysis for FDA and ISO compliance." />
            <Header />

            <main className="grow">
                <PageHeader title="Reliability" breadcrumb="Reliability" />

                <InnerContent>
                    <HeroImage
                        src={hero?.hero_image || "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1400"}
                        alt={hero?.hero_image_alt || "Medical device reliability testing and engineering"}
                        label={hero?.badge_text || "Reliability Engineering"}
                    />
                    <Section>
                        <SectionHeading
                            badge={product?.badge_text || "Product Design"}
                            title={product?.title || "Product Design"}
                        />
                        <div className="space-y-8">
                            <div>
                                <SubHeading>{product?.intro_title || "Reliability"}</SubHeading>
                                <p className="text-gray-700 text-sm mb-2">{product?.intro_subtitle || "Reliability Engineering, Risk & Productivity"}</p>
                                <p className="text-gray-700 text-sm mb-2">{product?.intro_p1 || "The FDA and other regulatory agencies do not regulate reliability engineering or productivity as standalone disciplines."}</p>
                                <p className="text-gray-700 text-sm">{product?.intro_p2 || "Instead, they expect evidence that devices are reliable, risks are controlled, and processes are effective."}</p>
                            </div>

                            <div>
                                <SubHeading>Reliability Engineering</SubHeading>
                                <InfoBox variant="brand" className="mb-4">
                                    <p className="font-bold text-gray-900 text-sm">
                                        "{product?.rel_question || "Can you demonstrate, with objective evidence, that your device will perform safely and effectively over its intended life?"}"
                                    </p>
                                </InfoBox>
                                <BulletList items={relItems.length ? relItems : reliabilityEngItems} />
                            </div>

                            <div>
                                <SubHeading>Risk Management</SubHeading>
                                <InfoBox variant="brand" className="mb-4">
                                    <p className="font-bold text-gray-900 text-sm">
                                        "{product?.risk_question || "Do you understand your risks, control them effectively, and keep risk files alive after launch?"}"
                                    </p>
                                </InfoBox>
                                <BulletList items={riskItems.length ? riskItems : riskMgmtItems} />
                            </div>

                            <div>
                                <SubHeading>Productivity & Operational Excellence</SubHeading>
                                <InfoBox variant="brand" className="mb-4">
                                    <p className="font-bold text-gray-900 text-sm">
                                        "{product?.prod_question || "Are your processes stable, controlled, and capable of producing conforming products consistently?"}"
                                    </p>
                                </InfoBox>
                                <BulletList items={prodItems.length ? prodItems : productivityItems} />
                                <p className="text-gray-700 text-sm mt-4">
                                    {product?.closing_text || "E&E Medicals and Consulting will help you conduct design reviews to identify any major issues that could impede compliance testing."}
                                </p>
                            </div>
                        </div>
                    </Section>

                    <Section>
                        <SectionHeading
                            badge={testPlan?.badge_text || "Testing"}
                            title={testPlan?.title || "Test Plan Development"}
                        />
                        <div className="space-y-5 text-gray-700 leading-relaxed text-[15px] md:text-base">
                            <p>{testPlan?.intro_text || "To set reliability goals for your product, our reliability experts design a test plan that ensures your design will last in the real world."}</p>
                            <p>{testPlan?.objective_intro || "Our test plan has two objectives:"}</p>
                            <FeatureList items={objectiveItems.length ? objectiveItems : testPlanItems} />
                        </div>
                    </Section>

                    <SplitSection
                        imageSrc="https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=900"
                        imageAlt="Medical device test plan development engineering"
                        imageRight
                        label="Test Engineering"
                    >
                        <div>
                            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-brand-50 border border-brand-100 text-brand-600 text-xs font-bold uppercase tracking-wider mb-5">
                                <span className="w-1.5 h-1.5 rounded-full bg-brand-400" />
                                Testing
                            </span>
                            <h2 className="font-display text-2xl md:text-3xl font-extrabold text-navy-900 leading-tight mb-4">Develop a Test Plan That Actually Works</h2>
                            <p className="text-gray-600 text-sm leading-relaxed mb-4">
                                Our reliability experts design a test plan that ensures your design will last to your expectations in the real world. A great test plan focuses on two key objectives:
                            </p>
                            <ul className="space-y-3">
                                {["Repeatability — easy to reproduce failures across any lab.", "Survival — final units stay under field failure rates you need."].map((item, i) => (
                                    <li key={i} className="flex items-start gap-2.5 text-gray-700 text-sm">
                                        <span className="w-5 h-5 rounded-full bg-brand-50 border border-brand-200 flex items-center justify-center shrink-0 mt-0.5 text-brand-500 font-bold text-[10px]">{i + 1}</span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </SplitSection>

                    <Section>
                        <SectionHeading
                            badge={mtbf?.badge_text || "Analysis"}
                            title={mtbf?.title || "MTBF Analysis"}
                        />
                        <div className="space-y-6 text-gray-700 leading-relaxed text-[15px] md:text-base">
                            <p>{mtbf?.intro_text || "MTBF is the average time between failures of a system and is often considered the useful life of the device."}</p>
                            <p>
                                <Link to="/" className="text-brand-500 hover:text-brand-600 hover:underline">
                                    E & E Medicals
                                </Link>{" "}
                                and Consulting will apply Life Data Analysis to help you achieve the following:
                            </p>
                            <FeatureList items={mtbfList.length ? mtbfList : mtbfItems} columns={2} />
                        </div>
                    </Section>

                    <PageCTA />
                </InnerContent>
            </main>

            <Footer />
        </div>
    );
};
