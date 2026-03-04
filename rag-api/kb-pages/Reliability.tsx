import React from "react";
import { PageHeader } from "../components/shared/PageHeader";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Link } from "react-router-dom";
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
    return (
        <div className="w-full bg-white font-sans flex flex-col min-h-screen">
            <Header />

            <main className="grow">
                <PageHeader title="Reliability" breadcrumb="Reliability" />

                <InnerContent>
                    <HeroImage
                        src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1400"
                        alt="Medical device reliability testing and engineering"
                        label="Reliability Engineering"
                    />
                    <Section>
                        <SectionHeading badge="Product Design" title="Product Design" />
                        <div className="space-y-8">
                            <div>
                                <SubHeading>Reliability</SubHeading>
                                <p className="text-gray-700 text-sm mb-2">Reliability Engineering, Risk & Productivity</p>
                                <p className="text-gray-700 text-sm mb-2">
                                    The FDA and other regulatory agencies do not regulate "reliability engineering" or "productivity" as standalone disciplines.
                                </p>
                                <p className="text-gray-700 text-sm">
                                    Instead, they expect evidence that devices are reliable, risks are controlled, and processes are effective—and they enforce this through design controls, risk management, CAPA, and production controls.
                                </p>
                            </div>

                            <div>
                                <SubHeading>Reliability Engineering</SubHeading>
                                <InfoBox variant="brand" className="mb-4">
                                    <p className="font-bold text-gray-900 text-sm">
                                        "Can you demonstrate, with objective evidence, that your device will perform safely and effectively over its intended life?"
                                    </p>
                                </InfoBox>
                                <BulletList items={reliabilityEngItems} />
                            </div>

                            <div>
                                <SubHeading>Risk Management</SubHeading>
                                <InfoBox variant="brand" className="mb-4">
                                    <p className="font-bold text-gray-900 text-sm">
                                        "Do you understand your risks, control them effectively, and keep risk files alive after launch?"
                                    </p>
                                </InfoBox>
                                <BulletList items={riskMgmtItems} />
                            </div>

                            <div>
                                <SubHeading>Productivity & Operational Excellence</SubHeading>
                                <InfoBox variant="brand" className="mb-4">
                                    <p className="font-bold text-gray-900 text-sm">
                                        "Are your processes stable, controlled, and capable of producing conforming products consistently?"
                                    </p>
                                </InfoBox>
                                <BulletList items={productivityItems} />
                                <p className="text-gray-700 text-sm mt-4">
                                    E&E Medicals and Consulting will help you conduct design reviews to identify any major issues that could impede compliance testing.
                                </p>
                            </div>
                        </div>
                    </Section>

                    <Section>
                        <SectionHeading badge="Testing" title="Test Plan Development" />
                        <div className="space-y-5 text-gray-700 leading-relaxed text-[15px] md:text-base">
                            <p>
                                To set reliability goals for your product, and make sure it meets that design at the prototype phase, our reliability experts design a test plan for you that ensures your design will last to your expectations in the real world.
                            </p>
                            <p>Our test plan has two objectives:</p>
                            <FeatureList items={testPlanItems} />
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
                        <SectionHeading badge="Analysis" title="MTBF Analysis" />
                        <div className="space-y-6 text-gray-700 leading-relaxed text-[15px] md:text-base">
                            <p>
                                MTBF, or "Mean Time Between Failures" is the average time between failures of a system, and is often considered the "useful life" of the device. The MTBF calculation is done on IT equipment, medical equipment, and Test / Measurement equipment and is most appropriate for electronic systems without any external moving parts.
                            </p>
                            <p>
                                <Link to="/" className="text-brand-500 hover:text-brand-600 hover:underline">
                                    E & E Medicals
                                </Link>{" "}
                                and Consulting will apply Life Data Analysis to help you achieve the following:
                            </p>
                            <FeatureList items={mtbfItems} columns={2} />
                        </div>
                    </Section>

                    <PageCTA />
                </InnerContent>
            </main>

            <Footer />
        </div>
    );
};
