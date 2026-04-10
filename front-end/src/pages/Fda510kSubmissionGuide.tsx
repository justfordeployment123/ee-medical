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

export const Fda510kSubmissionGuide: React.FC = () => {
    return (
        <div className="w-full bg-white font-sans flex flex-col min-h-screen">
            <PageMeta
                title="Complete Guide to FDA 510(k) Submission: Process, Requirements & Timeline"
                description="Step-by-step guide to the FDA 510(k) premarket notification process — classification, predicate selection, document preparation, timeline, and clearance tips."
            />
            <Header />

            <main className="grow">
                <PageHeader
                    title="Complete Guide to FDA 510(k) Submission: Process, Requirements & Timeline"
                    breadcrumb="510(k) Submission Guide"
                />

                <InnerContent>
                    {/* Section 1: What is 510(k) */}
                    <section>
                        <SectionHeading
                            badge="FDA 510(k)"
                            title="What Is an FDA 510(k) Submission?"
                            subtitle="A complete walkthrough of the 510(k) premarket notification process for medical device manufacturers and startups entering the U.S. market."
                        />

                        <div className="text-gray-700 leading-relaxed text-[15px] md:text-base space-y-5">
                            <p>
                                The FDA 510(k) is a premarket submission made to the U.S. Food and Drug Administration to demonstrate that a medical device is substantially equivalent to a legally marketed predicate device. Upon clearance, manufacturers receive authorization to market the device in the United States. This pathway applies to most Class II medical devices and some Class I and Class III devices that do not require a full Premarket Approval (PMA).
                            </p>
                            <p>
                                Unlike the PMA process — which requires clinical trial data and extensive scientific review — the 510(k) pathway is comparatively streamlined. However, it still demands rigorous preparation. Incomplete or incorrect submissions are among the leading reasons for FDA refusals to accept (RTA) and additional information (AI) requests, which significantly delay market entry.
                            </p>
                            <p>
                                At E&amp;E Medicals and Consulting, our team has guided hundreds of medical device companies through the 510(k) process — from startups seeking first-time clearance to established manufacturers updating existing devices. This guide outlines everything you need to know.
                            </p>
                        </div>
                    </section>

                    {/* Section 2: Who Needs a 510(k) */}
                    <Section>
                        <SectionHeading
                            badge="Eligibility"
                            title="Who Needs to Submit a 510(k)?"
                        />

                        <div className="text-gray-700 leading-relaxed text-[15px] md:text-base space-y-5 mb-8">
                            <p>
                                Any manufacturer intending to commercially distribute a Class II medical device in the United States must submit a 510(k) — unless the device is specifically exempt from the requirement. Additionally, 510(k) clearance is required when a previously cleared device undergoes modifications that could significantly affect safety or effectiveness.
                            </p>
                            <p>
                                Common scenarios where a 510(k) is required include:
                            </p>
                        </div>

                        <FeatureList
                            columns={2}
                            items={[
                                "New medical devices entering the U.S. market",
                                "Devices with significant design or material changes",
                                "Modified intended use of a cleared device",
                                "New manufacturing processes affecting device performance",
                                "IVD diagnostic devices requiring premarket review",
                                "Software as a Medical Device (SaMD) with new functions",
                                "Combination products with device primary mode of action",
                                "Foreign manufacturers seeking FDA market access",
                            ]}
                        />
                    </Section>

                    {/* Section 3: The 510(k) Process Step by Step */}
                    <Section>
                        <SectionHeading
                            badge="Process"
                            title="510(k) Submission Process: Step by Step"
                        />

                        <div className="space-y-5">
                            <InfoBox variant="brand">
                                <h4 className="text-base font-bold text-navy-900 mb-2">Step 1: Device Classification &amp; Product Code Identification</h4>
                                <p className="text-gray-700 text-[14px] leading-relaxed">
                                    Determine your device's classification (Class I, II, or III) using the FDA's classification database. Identify the correct product code and regulation number — this determines which FDA guidance documents, test standards, and special controls apply to your submission.
                                </p>
                            </InfoBox>

                            <InfoBox variant="brand">
                                <h4 className="text-base font-bold text-navy-900 mb-2">Step 2: Predicate Device Selection</h4>
                                <p className="text-gray-700 text-[14px] leading-relaxed">
                                    Identify a legally marketed predicate device to establish substantial equivalence. The predicate must share the same intended use and have the same or similar technological characteristics. Multiple predicates may be used. This is one of the most critical and strategically important steps in the 510(k) process.
                                </p>
                            </InfoBox>

                            <InfoBox variant="brand">
                                <h4 className="text-base font-bold text-navy-900 mb-2">Step 3: Gap Analysis &amp; Document Checklist</h4>
                                <p className="text-gray-700 text-[14px] leading-relaxed">
                                    Before compiling your submission, conduct a gap analysis to identify missing technical files, test reports, labeling gaps, or regulatory deficiencies. Our consultants prepare a detailed gap analysis report to ensure your submission package is complete before it reaches the FDA.
                                </p>
                            </InfoBox>

                            <InfoBox variant="brand">
                                <h4 className="text-base font-bold text-navy-900 mb-2">Step 4: Performance Testing &amp; Standards Compliance</h4>
                                <p className="text-gray-700 text-[14px] leading-relaxed">
                                    Conduct required performance testing — electrical safety, biocompatibility (ISO 10993), software validation, sterility, shelf-life, or other device-specific tests as identified in FDA guidance. Select accredited laboratories for testing to ensure FDA-recognized results.
                                </p>
                            </InfoBox>

                            <InfoBox variant="brand">
                                <h4 className="text-base font-bold text-navy-900 mb-2">Step 5: Compile the 510(k) Package (21 Sections)</h4>
                                <p className="text-gray-700 text-[14px] leading-relaxed">
                                    Prepare all 21 sections of the Traditional 510(k) submission including device description, substantial equivalence comparison, performance data, labeling, biocompatibility summary, software documentation, and sterilization validation. Each section must meet FDA formatting and content requirements.
                                </p>
                            </InfoBox>

                            <InfoBox variant="brand">
                                <h4 className="text-base font-bold text-navy-900 mb-2">Step 6: FDA Submission &amp; Review</h4>
                                <p className="text-gray-700 text-[14px] leading-relaxed">
                                    Submit your 510(k) electronically via the FDA eSubmitter portal or CDRH Direct program. The FDA conducts an administrative review (Refuse to Accept check) within 15 days, followed by a substantive review. The standard review goal is 90 days for traditional 510(k)s.
                                </p>
                            </InfoBox>

                            <InfoBox variant="brand">
                                <h4 className="text-base font-bold text-navy-900 mb-2">Step 7: Additional Information Requests &amp; Decision</h4>
                                <p className="text-gray-700 text-[14px] leading-relaxed">
                                    The FDA may issue Additional Information (AI) requests during review. Responding promptly and accurately is critical. Upon successful review, the FDA issues a Substantial Equivalence (SE) determination letter — your authorization to market in the U.S.
                                </p>
                            </InfoBox>
                        </div>
                    </Section>

                    {/* Section 4: Timeline */}
                    <Section>
                        <SectionHeading
                            badge="Timeline"
                            title="How Long Does FDA 510(k) Approval Take?"
                        />

                        <div className="text-gray-700 leading-relaxed text-[15px] md:text-base space-y-5 mb-8">
                            <p>
                                The FDA's performance goal for Traditional 510(k) reviews is 90 calendar days from acceptance. However, real-world timelines depend on submission quality, device complexity, and FDA workload. Poorly prepared submissions that receive AI requests can extend the timeline by months.
                            </p>
                        </div>

                        <BulletList
                            columns={2}
                            items={[
                                "FDA Administrative Review (RTA): 15 days from receipt",
                                "Substantive Review Goal: 90 days from acceptance",
                                "Average real-world clearance: 3–6 months",
                                "Complex submissions with AI requests: 6–12+ months",
                                "Abbreviated 510(k) with recognized standards: Can be faster",
                                "Special 510(k) for device modifications: Shorter review",
                            ]}
                        />
                    </Section>

                    {/* Split break */}
                    <SplitSection
                        imageSrc="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1400"
                        imageAlt="FDA 510k submission process medical device"
                        label="510(k) Expertise"
                    >
                        <div>
                            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-brand-50 border border-brand-100 text-brand-600 text-xs font-bold uppercase tracking-wider mb-5">
                                <span className="w-1.5 h-1.5 rounded-full bg-brand-400" />
                                Common 510(k) Mistakes
                            </span>
                            <h2 className="font-display text-2xl font-extrabold text-navy-900 leading-tight mb-4">
                                Why 510(k) Submissions Get Rejected
                            </h2>
                            <p className="text-gray-600 text-sm leading-relaxed mb-4">
                                The most common reasons for FDA refusal or AI requests include: inadequate predicate selection, missing performance testing, incomplete software documentation, labeling deficiencies, and insufficient biocompatibility data.
                            </p>
                            <p className="text-gray-500 text-sm leading-relaxed">
                                Our regulatory consultants perform a rigorous gap analysis before submission — catching deficiencies early and dramatically reducing the risk of rejection or delays.
                            </p>
                        </div>
                    </SplitSection>

                    {/* Section 5: 510(k) Types */}
                    <Section>
                        <SectionHeading
                            badge="Submission Types"
                            title="Types of 510(k) Submissions"
                        />

                        <div className="text-gray-700 leading-relaxed text-[15px] md:text-base space-y-5 mb-6">
                            <p>
                                The FDA recognizes three types of 510(k) submissions. Choosing the right type for your device and situation can significantly impact your timeline and preparation requirements.
                            </p>
                        </div>

                        <FeatureList
                            columns={2}
                            items={[
                                "Traditional 510(k) — full submission for new devices",
                                "Abbreviated 510(k) — uses FDA-recognized consensus standards",
                                "Special 510(k) — for modifications to your own cleared device",
                                "De Novo — for novel low/moderate risk devices without predicates",
                                "PMA — for Class III high-risk devices requiring clinical evidence",
                                "513(g) Request — for classification determination before submission",
                            ]}
                        />
                    </Section>

                    {/* Section 6: Our Services */}
                    <Section>
                        <SectionHeading
                            badge="Our Services"
                            title="How E&amp;E Medicals Supports Your 510(k) Submission"
                        />

                        <div className="text-gray-700 leading-relaxed text-[15px] md:text-base space-y-5 mb-8">
                            <p>
                                E&amp;E Medicals provides end-to-end 510(k) consulting services — from initial classification through FDA clearance. Our regulatory affairs experts have a proven track record with FDA submissions across a wide range of device categories.
                            </p>
                            <p>
                                Learn more about our{" "}
                                <Link to="/fda-510k-application" className="text-brand-600 hover:underline font-medium">
                                    FDA 510(k) application services
                                </Link>{" "}
                                or explore the full{" "}
                                <Link to="/medical-device-fda-approval-process" className="text-brand-600 hover:underline font-medium">
                                    medical device FDA approval process guide
                                </Link>
                                .
                            </p>
                        </div>

                        <BulletList
                            columns={2}
                            items={[
                                "Device classification and product code identification",
                                "Predicate device research and selection strategy",
                                "Gap analysis and submission readiness assessment",
                                "Performance testing planning and lab coordination",
                                "Full 510(k) document preparation (all 21 sections)",
                                "FDA submission via eSubmitter / CDRH Direct",
                                "AI request response drafting and FDA communication",
                                "Post-clearance establishment registration support",
                                "US Agent services for foreign manufacturers",
                                "510(k) cost estimation and fee transfer support",
                            ]}
                        />
                    </Section>

                    {/* Page CTA */}
                    <PageCTA
                        title="Ready to Submit Your 510(k)?"
                        subtitle="Get expert guidance from our FDA regulatory consultants — from classification through clearance."
                        linkLabel="Request a Free Consultation"
                        linkTo="/share-your-project"
                    />
                </InnerContent>
            </main>

            <Footer />
        </div>
    );
};
