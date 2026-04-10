import React from "react";
import { PageHeader } from "../components/shared/PageHeader";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Link } from "react-router-dom";
import { PageMeta } from "../components/shared/PageMeta";
import {
    InnerContent,
    SectionHeading,
    FeatureList,
    BulletList,
    InfoBox,
    SplitSection,
    Section,
    PageCTA,
} from "../components/shared/InnerPage";

export const SamdFdaRegulations: React.FC = () => {
    return (
        <div className="w-full bg-white font-sans flex flex-col min-h-screen">
            <PageMeta
                title="SaMD FDA Regulations: Complete Guide to Software as a Medical Device Approval"
                description="Complete guide to FDA regulations for Software as a Medical Device — classification, 510(k)/De Novo pathways, AI/ML validation, IEC 62304, and PCCP requirements."
            />
            <Header />

            <main className="grow">
                <PageHeader
                    title="SaMD FDA Regulations: Complete Guide to Software as a Medical Device Approval"
                    breadcrumb="SaMD FDA Regulations"
                />

                <InnerContent>
                    {/* Section 1: What is SaMD */}
                    <section>
                        <SectionHeading
                            badge="SaMD"
                            title="What Is Software as a Medical Device (SaMD)?"
                            subtitle="A comprehensive guide to FDA regulations for Software as a Medical Device — including classification, approval pathways, AI/ML requirements, and validation standards."
                        />

                        <div className="text-gray-700 leading-relaxed text-[15px] md:text-base space-y-5">
                            <p>
                                Software as a Medical Device (SaMD) is software intended to be used for one or more medical purposes that performs these purposes without being part of a hardware medical device. The term was introduced by the International Medical Device Regulators Forum (IMDRF) and is now widely used by the FDA to describe software that qualifies as a medical device under the Federal Food, Drug, and Cosmetic Act.
                            </p>
                            <p>
                                Examples of SaMD include: software that analyzes medical images to detect cancer, software that interprets ECG data to diagnose arrhythmia, clinical decision support software that recommends drug dosing, and AI algorithms that classify pathology slides. The rapid growth of AI in healthcare has made SaMD one of the most strategically important and actively evolving areas of FDA medical device regulation.
                            </p>
                            <p>
                                Understanding FDA SaMD regulations is critical for software developers, digital health companies, and medical device manufacturers integrating AI into their products. E&amp;E Medicals provides specialized SaMD regulatory consulting with deep expertise in FDA digital health frameworks.
                            </p>
                        </div>
                    </section>

                    {/* Section 2: FDA SaMD Framework */}
                    <Section>
                        <SectionHeading
                            badge="FDA Framework"
                            title="FDA's Regulatory Framework for SaMD"
                        />

                        <div className="text-gray-700 leading-relaxed text-[15px] md:text-base space-y-5 mb-8">
                            <p>
                                The FDA regulates SaMD based on its intended use and risk level, applying a risk-based framework that considers the state of the healthcare situation or condition the software is intended to address, and the significance of the information provided by the SaMD to the healthcare decision.
                            </p>
                        </div>

                        <div className="space-y-4">
                            <InfoBox variant="brand">
                                <h4 className="text-base font-bold text-navy-900 mb-2">21st Century Cures Act — Software Function Exclusions</h4>
                                <p className="text-gray-700 text-[14px] leading-relaxed">
                                    The 21st Century Cures Act (2016) excluded certain software functions from FDA device regulation — including administrative software, certain clinical decision support software, and wellness applications. Understanding these exclusions is the starting point for any SaMD regulatory strategy.
                                </p>
                            </InfoBox>

                            <InfoBox variant="brand">
                                <h4 className="text-base font-bold text-navy-900 mb-2">FDA Digital Health Center of Excellence (DHCoE)</h4>
                                <p className="text-gray-700 text-[14px] leading-relaxed">
                                    The FDA established the Digital Health Center of Excellence to provide expertise and resources for digital health technologies, including SaMD, AI/ML devices, and wearables. The DHCoE coordinates FDA's approach to digital health policy and Pre-Submission interactions.
                                </p>
                            </InfoBox>

                            <InfoBox variant="brand">
                                <h4 className="text-base font-bold text-navy-900 mb-2">IMDRF SaMD Risk Classification Framework</h4>
                                <p className="text-gray-700 text-[14px] leading-relaxed">
                                    The IMDRF framework classifies SaMD based on the significance of information provided (treat/diagnose vs. inform) and the state of the healthcare situation (critical vs. serious vs. non-serious). The FDA has adopted this framework as part of its risk-based regulatory approach to SaMD.
                                </p>
                            </InfoBox>

                            <InfoBox variant="brand">
                                <h4 className="text-base font-bold text-navy-900 mb-2">FDA Software Policy Guidance Documents</h4>
                                <p className="text-gray-700 text-[14px] leading-relaxed">
                                    Key FDA guidance documents for SaMD include: Policy for Device Software Functions and Mobile Medical Applications, Clinical Decision Support Software guidance, and the AI/ML-Based Software as a Medical Device Action Plan. Manufacturers must comply with the applicable guidance for their specific software function.
                                </p>
                            </InfoBox>
                        </div>
                    </Section>

                    {/* Section 3: AI/ML SaMD */}
                    <Section>
                        <SectionHeading
                            badge="AI/ML"
                            title="FDA Regulations for AI and Machine Learning Medical Devices"
                        />

                        <div className="text-gray-700 leading-relaxed text-[15px] md:text-base space-y-5 mb-8">
                            <p>
                                AI and machine learning-based SaMD present a unique regulatory challenge: adaptive algorithms that continuously learn and change their behavior may not fit traditional pre/post-market approval frameworks designed for static devices. The FDA has proposed a Total Product Life Cycle (TPLC) approach to AI/ML SaMD regulation that accounts for algorithm adaptation over time.
                            </p>
                        </div>

                        <BulletList
                            columns={2}
                            items={[
                                "AI/ML model transparency and explainability requirements",
                                "Training, validation, and testing dataset requirements",
                                "Algorithm change protocol and PCCP framework",
                                "Clinical validation of AI diagnostic performance",
                                "Bias and equity considerations in AI device submissions",
                                "Real-world performance monitoring post-approval",
                                "Cybersecurity requirements for AI-connected devices",
                                "Human factors validation for AI-assisted clinical tools",
                            ]}
                        />

                        <div className="mt-8 text-gray-700 text-[15px] leading-relaxed">
                            <p>
                                Our{" "}
                                <Link to="/ai-samd-pathway" className="text-brand-600 hover:underline font-medium">SaMD regulatory pathway services</Link>
                                {" "}and{" "}
                                <Link to="/pccp-authoring" className="text-brand-600 hover:underline font-medium">PCCP authoring services</Link>
                                {" "}provide specialized support for AI/ML device programs.
                            </p>
                        </div>
                    </Section>

                    {/* Split break */}
                    <SplitSection
                        imageSrc="https://images.unsplash.com/photo-1677442135703-1787eea5ce01?q=80&w=1400"
                        imageAlt="AI machine learning FDA medical device SaMD"
                        label="SaMD Pathways"
                    >
                        <div>
                            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-brand-50 border border-brand-100 text-brand-600 text-xs font-bold uppercase tracking-wider mb-5">
                                <span className="w-1.5 h-1.5 rounded-full bg-brand-400" />
                                Approval Pathways
                            </span>
                            <h2 className="font-display text-2xl font-extrabold text-navy-900 leading-tight mb-4">
                                SaMD FDA Approval Pathways
                            </h2>
                            <p className="text-gray-600 text-sm leading-relaxed mb-4">
                                SaMD typically follows the same FDA pathways as other medical devices: 510(k) for moderate-risk software with a predicate, De Novo for novel low-to-moderate risk software, and PMA for high-risk diagnostic algorithms. However, the evidence requirements differ significantly from hardware devices.
                            </p>
                            <p className="text-gray-500 text-sm leading-relaxed">
                                The FDA Breakthrough Devices Program also offers an accelerated pathway for SaMD that provides more effective treatment or diagnosis of serious conditions — a strategic option for innovative AI diagnostic tools.
                            </p>
                        </div>
                    </SplitSection>

                    {/* Section 4: IEC 62304 */}
                    <Section>
                        <SectionHeading
                            badge="Standards"
                            title="IEC 62304: Software Lifecycle Requirements for SaMD"
                        />

                        <div className="text-gray-700 leading-relaxed text-[15px] md:text-base space-y-5 mb-8">
                            <p>
                                IEC 62304 is the international standard specifying lifecycle requirements for medical device software. The FDA references IEC 62304 in its software guidance and considers compliance with this standard as part of a complete SaMD submission. The standard classifies software safety into three classes (A, B, C) based on potential harm from software failure.
                            </p>
                        </div>

                        <FeatureList
                            columns={2}
                            items={[
                                "Software development planning documentation",
                                "Software requirements specification (SRS)",
                                "Software architectural design and detailed design",
                                "Software unit implementation and verification",
                                "Software integration and integration testing",
                                "System testing against software requirements",
                                "Software release and version control",
                                "Software problem resolution and change management",
                            ]}
                        />
                    </Section>

                    {/* Section 5: Validation */}
                    <Section>
                        <SectionHeading
                            badge="Validation"
                            title="AI Validation Requirements for FDA SaMD Submission"
                        />

                        <div className="text-gray-700 leading-relaxed text-[15px] md:text-base space-y-5 mb-8">
                            <p>
                                Validating AI/ML-based SaMD for an FDA submission requires demonstrating that the algorithm performs as intended across the intended patient population, clinical setting, and use conditions. The FDA expects rigorous analytical and clinical validation evidence — the specifics of which depend on the device's intended use and risk classification.
                            </p>
                        </div>

                        <BulletList
                            columns={2}
                            items={[
                                "Dataset representativeness and diversity requirements",
                                "Independent test set validation (locked algorithm)",
                                "Statistical performance metrics (sensitivity, specificity, AUC)",
                                "Subgroup analysis for demographic equity",
                                "Reader study design for AI-assisted diagnostic tools",
                                "Usability testing for clinician-facing AI interfaces",
                                "Real-world performance evaluation protocols",
                                "Algorithm transparency and explainability documentation",
                            ]}
                        />
                    </Section>

                    {/* Section 6: Our Services */}
                    <Section>
                        <SectionHeading
                            badge="Our Services"
                            title="SaMD Regulatory Consulting from E&amp;E Medicals"
                        />

                        <div className="text-gray-700 leading-relaxed text-[15px] md:text-base space-y-5 mb-8">
                            <p>
                                E&amp;E Medicals provides specialized SaMD and AI medical device regulatory consulting. Our team has expertise in FDA digital health frameworks, IEC 62304, AI/ML validation requirements, and the rapidly evolving PCCP and algorithm change control landscape.
                            </p>
                        </div>

                        <FeatureList
                            columns={2}
                            items={[
                                "SaMD classification and regulatory pathway determination",
                                "Pre-Submission (Q-Sub) meeting preparation for SaMD",
                                "IEC 62304 software lifecycle documentation",
                                "AI/ML validation strategy and study design",
                                "Predetermined Change Control Plan (PCCP) authoring",
                                "Clinical evaluation planning for AI diagnostic software",
                                "510(k), De Novo, PMA submissions for SaMD",
                                "Cybersecurity documentation (FDA premarket guidance)",
                                "EU MDR/IVDR SaMD regulatory strategy",
                                "AI regulatory strategy for startup digital health companies",
                            ]}
                        />
                    </Section>

                    {/* Page CTA */}
                    <PageCTA
                        title="Navigate FDA SaMD Regulations with Confidence"
                        subtitle="Our AI and digital health regulatory experts will guide your SaMD program from concept through FDA clearance or approval."
                        linkLabel="Get SaMD Regulatory Support"
                        linkTo="/share-your-project"
                    />
                </InnerContent>
            </main>

            <Footer />
        </div>
    );
};
