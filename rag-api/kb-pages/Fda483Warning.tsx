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

export const Fda483Warning: React.FC = () => {
    return (
        <div className="w-full bg-white font-sans flex flex-col min-h-screen">
            <Header />
            <main className="grow">
                <PageHeader
                    title="FDA 483 Warning Letters / Recalls and Remediation"
                    breadcrumb="FDA 483 Warning Letters"
                />
                <InnerContent>
                    <HeroImage
                        src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=1400"
                        alt="FDA 483 Warning Letter regulatory compliance review"
                        label="FDA 483 Compliance"
                    />

                    <Section>
                        <SectionHeading
                            badge="FDA Compliance"
                            title="FDA Audit 483 Observations — US FDA Form 483 and Warning Letter Analysis"
                        />
                        <div className="text-gray-600 leading-relaxed space-y-5 mb-8">
                            <p>
                                FDA form 483 is officially known as Notice of Inspectional Observations. Organizations that act in non-conformity or violate GMP regulation/quality system are issued the FDA 483 warning Letter(s) by FDA investigators. Responding to FDA 483 warning Letter(s) deserves caution. An action plan describing the specific timeframe of CAPA and implementation is extremely important.
                            </p>
                            <p>
                                Medical device or IVD manufacturers will always want to avoid Form 483 or Warning Letter from the US Food and Drug Administration (FDA). Handling and responding to Form 483 is key in preventing a warning letter from the FDA. As part of our services, E &amp; E Medicals and Consulting shall help in responding to FDA 483 Observations and FDA Warning Letter through the following steps:
                            </p>
                        </div>
                        <FeatureList
                            items={[
                                "Reviewing the 483 observations or warning letter",
                                "Analyzing and identifying corrective actions",
                                "Assisting in planning and implementing corrective actions",
                                "Writing a professional 483 response within 15 business days",
                            ]}
                        />
                    </Section>

                    <Section>
                        <SectionHeading
                            badge="Remediation"
                            title="FDA Audit 483 Observations — Remediation Strategy"
                        />
                        <HeroImage
                            src="https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1400"
                            alt="FDA 483 audit remediation strategy team"
                            height="h-56 md:h-72"
                            label="Remediation Strategy"
                        />
                        <div className="text-gray-600 leading-relaxed space-y-5 mt-8">
                            <p>
                                A Warning Letter typically discusses a small part of the real quality system deficiencies. Through our FDA Compliance Remediation Program, E &amp; E Medicals and Consulting will help determine the real depth and breadth in product and process deficiencies. This involves performing systematic audits and developing a compliance plan (a remediation program) for achieving quality assurances of FDA GMP within the company.
                            </p>
                            <p>
                                The Plan requires remediation, which includes the renovation of the quality system to meet FDA's expectation. Our consultants can serve as Project Leads, Subject Matter Experts, Advisors, and Trainers.{" "}
                                <Link to="/" className="text-brand-600 hover:text-brand-500 font-medium">E &amp; E Medicals</Link>{" "}
                                and Consulting provide the resources to create the needed strategies, supervise, and manage the remediation.
                            </p>
                            <p>
                                You'll be working with our Quality, Compliance, and Remediation practice – a practice which assists our clients in solving severe compliance problems. Combining strategic thinking with practicality, our advisory teams and consultants work to develop and execute organizational approaches to address the most regulatory issues of our customers.
                            </p>
                        </div>
                    </Section>

                    <Section dark={false}>
                        <SectionHeading
                            badge="Product Recalls"
                            title="Product Recalls and Market Withdrawal"
                        />
                        <p className="text-gray-600 leading-relaxed mb-8">
                            Many medical device manufacturers risk product corrections and removals (Recalls). These recalls have an impact on the brand and leave the patients at risk. Poorly managed recall procedures can result in devastating consequences with the FDA. E &amp; E Medicals and Consulting offer a recall consulting service that will resolve your recall problems promptly in the following ways:
                        </p>
                        <FeatureList
                            items={[
                                "Timely and adequately notifying FDA, distributors, and customers of the recall",
                                "Develop compliant documentation from opening, tracking and closing the recall",
                                "Providing updates to FDA regarding the recall",
                                "Performing effectiveness checks that will lead to recall the closure",
                            ]}
                            columns={2}
                        />
                    </Section>

                    <PageCTA
                        title="Need Help Responding to FDA 483 Observations?"
                        subtitle="Our experts will help you craft a professional response and develop a remediation strategy."
                    />
                </InnerContent>
            </main>
            <Footer />
        </div>
    );
};
