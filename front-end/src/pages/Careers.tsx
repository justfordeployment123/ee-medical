import React from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { PageHeader } from "../components/shared/PageHeader";
import {
    InnerContent,
    SectionHeading,
    Section,
    InfoBox,
    BulletList,
    FeatureList,
    PageCTA,
    StatStrip,
} from "../components/shared/InnerPage";
import { useContent } from "../hooks/useContent";

const culturePillars = [
    "High-performance, <strong>client-centered consulting</strong> grounded in scientific and regulatory rigor.",
    "Integrity in every engagement – from evidence strategy to interactions with FDA, Notified Bodies, and investors.",
    "Innovation in <strong>AI-enabled regulatory strategy</strong>, MDR/IVDR implementation, and lifecycle quality systems.",
];

const whyJoin = [
    "Work on <strong>AI-enabled medical technologies</strong> and complex regulatory challenges that directly impact patient safety.",
    "Partner with <strong>global MedTech innovators</strong> across the US, Europe, and emerging markets.",
    "Learn directly from senior FDA, EU MDR, and AI Act experts on live client projects.",
    "Flexible, globally distributed teams with opportunities for remote and hybrid work depending on role.",
    "Structured professional development plans, mentoring, and support for certifications (e.g., RAC, CQE, ISO lead auditor).",
];

const careerPaths = [
    "Regulatory Affairs (FDA, EU MDR/IVDR, global submissions).",
    "AI / Software as a Medical Device (SaMD) regulatory strategy and documentation.",
    "Quality & Compliance (QMS design, audits, CAPA, inspection readiness).",
    "Clinical & Post-market (clinical evaluation, PMCF/PMPF, vigilance, real-world evidence).",
    "Business Operations (project management, proposals, marketing, client success).",
];

const hiringProfile = [
    "You are motivated by <strong>improving patient outcomes</strong> through safer, better medical technologies.",
    "You enjoy translating complex regulations into <strong>clear, pragmatic plans</strong> for clients.",
    "You are comfortable working in <strong>cross-functional, global teams</strong> with ambitious timelines.",
    "You communicate clearly – in writing and verbally – with technical and non-technical stakeholders.",
];

const applicationSteps = [
    { title: "Share Your CV & Interest", description: "Send your CV and a short note explaining your areas of interest (e.g., AI SaMD, MDR Technical Documentation, QMS, clinical evaluation) to info@eemedicals.com." },
    { title: "Conversation With Our Team", description: "If there is a potential fit, we schedule an introductory discussion to learn more about your background, interests, and availability." },
    { title: "Technical & Case Discussions", description: "You may be invited to walk through prior project examples or short case scenarios that reflect the type of work we do for clients." },
    { title: "Mutual Fit & Offer", description: "For successful candidates, we align on role, level, and onboarding plan so you can contribute quickly to client-facing work." },
];

export const Careers: React.FC = () => {
    const content = useContent('careers');
    const intro = content?.intro;

    return (
        <div className="min-h-screen flex flex-col font-sans bg-white">
            <Header />

            <main className="grow">
                <PageHeader title="Careers" breadcrumb="Careers" />

                <InnerContent>
                    <Section>
                        <SectionHeading
                            badge={intro?.badge || "Join Our Team"}
                            title={intro?.heading || "Join Our Mission to Improve Patient Health and Safety"}
                            subtitle={intro?.subtitle || "E&E Medicals & Consulting is a global regulatory, quality, and AI compliance partner for medical device and life science innovators. Our teams help clients bring safe, effective, and compliant products to patients worldwide."}
                        />
                        <div className="space-y-6 text-gray-700 leading-relaxed">
                            <p>
                                {intro?.paragraph1 || "At E&E Medicals, you will work alongside experienced regulatory strategists, quality leaders, and AI governance experts. Together, we solve complex problems at the intersection of FDA regulations, EU MDR/IVDR, the EU AI Act, and international standards."}
                            </p>
                            <InfoBox variant="brand">
                                <p className="text-sm md:text-base">
                                    We are building a <strong className="text-navy-900">high-performance, high-integrity consulting team</strong> that is trusted by clients and investors for
                                    AI-enabled and traditional medical technologies.
                                </p>
                            </InfoBox>
                        </div>
                    </Section>

                    <StatStrip
                        stats={[
                            { value: "Global", label: "Clients & Engagements" },
                            { value: "AI & MDR", label: "Regulatory Focus Areas" },
                            { value: "Hybrid", label: "Remote & Onsite Work" },
                            { value: "Growth", label: "Career Development Mindset" },
                        ]}
                    />

                    <Section>
                        <SectionHeading
                            badge="Culture"
                            title={intro?.culture_heading || "How We Work"}
                        />
                        <FeatureList items={culturePillars} columns={2} />
                    </Section>

                    <Section>
                        <SectionHeading
                            badge="Opportunities"
                            title={intro?.opps_heading || "Why Build Your Career at E&E?"}
                        />
                        <FeatureList items={whyJoin} columns={2} />
                    </Section>

                    <Section>
                        <SectionHeading
                            badge="Career Paths"
                            title="Where You Can Contribute"
                        />
                        <BulletList items={careerPaths} columns={2} />
                    </Section>

                    <Section>
                        <SectionHeading
                            badge="Who Thrives Here"
                            title={intro?.profile_heading || "What We Look For"}
                        />
                        <BulletList items={hiringProfile} />
                    </Section>

                    <Section>
                        <SectionHeading
                            badge={intro?.apply_heading || "How to Apply"}
                            title="Our Hiring Approach"
                            subtitle="We review every application carefully. Even when we do not have a posted opening that matches your profile, we welcome strong candidates for future project-based or part-time collaboration."
                        />
                        <div className="space-y-5">
                            <BulletList
                                items={applicationSteps.map(
                                    (step) => `<strong>${step.title}.</strong> ${step.description}`
                                )}
                            />
                            <InfoBox variant="light" className="mt-4">
                                <p className="text-sm md:text-base">
                                    To be considered for upcoming roles, send your CV and a brief summary of your AI, regulatory, or quality experience to{" "}
                                    <a href={`mailto:${intro?.apply_email || 'info@eemedicals.com'}`} className="text-brand-600 font-semibold underline-offset-2 hover:underline">
                                        {intro?.apply_email || 'info@eemedicals.com'}
                                    </a>
                                    .
                                </p>
                            </InfoBox>
                        </div>
                    </Section>

                    <PageCTA
                        title={intro?.cta_heading || "Ready to Explore a Career with E&E Medicals?"}
                        subtitle={intro?.cta_text || "Share your CV and interests with our team, and we’ll contact you when there is a strong match with open roles or consulting engagements."}
                        linkLabel="Email Your CV"
                        email={intro?.apply_email || "info@eemedicals.com"}
                    />
                </InnerContent>
            </main>

            <Footer />
        </div>
    );
};

