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
    FeatureList,
    HeroImage,
    Section,
    PageCTA,
} from "../components/shared/InnerPage";

export const Fda483Warning: React.FC = () => {
    const content = useContent("fda_483");
    const hero = content?.hero;
    const audit = content?.audit;
    const remediation = content?.remediation;
    const recalls = content?.recalls;

    const actionItems = [audit?.item1, audit?.item2, audit?.item3, audit?.item4].filter(Boolean) as string[];

    return (
        <div className="w-full bg-white font-sans flex flex-col min-h-screen">
            <PageMeta
                title="FDA 483 Observations, Warning Letters & Recalls Remediation"
                description="Expert FDA 483 observation and Warning Letter response services — CAPA development, remediation planning, and FDA re-inspection preparation for medical device manufacturers."
            />
            <Header />
            <main className="grow">
                <PageHeader
                    title="FDA 483 Warning Letters / Recalls and Remediation"
                    breadcrumb="FDA 483 Warning Letters"
                />
                <InnerContent>
                    <HeroImage
                        src={hero?.hero_image || "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=1400"}
                        alt={hero?.hero_image_alt || "FDA 483 Warning Letter regulatory compliance review"}
                        label={hero?.badge_text || "FDA 483 Compliance"}
                    />

                    <Section>
                        <SectionHeading
                            badge={audit?.badge_text || "FDA Compliance"}
                            title={audit?.title || "FDA Audit 483 Observations — US FDA Form 483 and Warning Letter Analysis"}
                        />
                        <div className="text-gray-600 leading-relaxed space-y-5 mb-8">
                            <p>{audit?.paragraph1 || "FDA Form 483 is a notice of inspectional observations and requires caution with CAPA-based response timelines."}</p>
                            <p>{audit?.paragraph2 || "Our team helps manufacturers respond to Form 483 and warning letters through structured corrective actions."}</p>
                        </div>
                        <FeatureList
                            items={actionItems.length ? actionItems : [
                                "Reviewing the 483 observations or warning letter",
                                "Analyzing and identifying corrective actions",
                                "Assisting in planning and implementing corrective actions",
                                "Writing a professional 483 response within 15 business days",
                            ]}
                        />
                    </Section>

                    <Section>
                        <SectionHeading
                            badge={remediation?.badge_text || "Remediation"}
                            title={remediation?.title || "FDA Audit 483 Observations — Remediation Strategy"}
                        />
                        <HeroImage
                            src="https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1400"
                            alt="FDA 483 audit remediation strategy team"
                            height="h-56 md:h-72"
                            label="Remediation Strategy"
                        />
                        <div className="text-gray-600 leading-relaxed space-y-5 mt-8">
                            <p>{remediation?.paragraph || "Our FDA compliance remediation program identifies depth and breadth of quality deficiencies and develops practical correction plans."}</p>
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
                            badge={recalls?.badge_text || "Product Recalls"}
                            title={recalls?.title || "Product Recalls and Market Withdrawal"}
                        />
                        <p className="text-gray-600 leading-relaxed mb-8">
                            {recalls?.paragraph || "Many manufacturers face recalls that impact brands and patient safety. We provide structured recall consulting to resolve recall issues quickly and compliantly."}
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
