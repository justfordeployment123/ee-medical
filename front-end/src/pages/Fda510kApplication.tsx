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
    InfoBox,
    HeroImage,
    SplitSection,
    Section,
    PageCTA,
} from "../components/shared/InnerPage";

export const Fda510kApplication: React.FC = () => {
    const content = useContent("fda_510k");
    const hero = content?.hero;
    const overview = content?.overview;
    const notifications = content?.notifications;
    const strategy = content?.strategy;
    const drugs = content?.drugs;

    return (
        <div className="w-full bg-white font-sans flex flex-col min-h-screen">
            <Header />

            <main className="grow">
                <PageHeader
                    title="How to Get FDA approval and clearance to FDA 510(k), PMA, De Novo for Medical Devices"
                    breadcrumb="FDA Applications"
                />

                <InnerContent>
                    {/* Hero Image */}
                    <HeroImage
                        src={hero?.hero_image || "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1400"}
                        alt={hero?.hero_image_alt || "FDA Applications 510k PMA De Novo medical device approval"}
                        label={hero?.badge_text || "FDA 510(k) Applications"}
                    />

                    {/* --- SECTION 1: FDA Applications Overview --- */}
                    <section>
                        <SectionHeading
                            badge={overview?.badge_text || "FDA Applications"}
                            title={overview?.title || "FDA Applications"}
                        />

                        <div className="text-gray-700 leading-relaxed text-[15px] md:text-base space-y-6">
                            <p>{overview?.paragraph1 || "Section 510(k) requires manufacturers to notify FDA before marketing a device in the U.S. and allows classification/pathway determination."}</p>

                            <p>{overview?.paragraph2 || "Devices substantially equivalent to predicates usually follow 510(k), while significantly different devices may require PMA or De Novo."}</p>

                            <p>{overview?.paragraph3 || "Novel devices without predicates may use De Novo to seek reclassification and avoid full PMA when appropriate."}</p>

                            <p className="font-semibold text-gray-900">
                                E &amp; E Medicals and Consulting helps during the process of submitting applications for class I, II, III medical devices at any stages of the product development. Our team of qualified experts will successfully prepare and submit FDA medical device regulatory documents for the U.S and international clients. These applications include:
                            </p>
                        </div>

                        <div className="mt-8">
                            <FeatureList
                                columns={2}
                                items={[
                                    "510(k) Premarket Notifications",
                                    "Premarket Approval Applications (PMAs)",
                                    "De Novo Request (Application)",
                                    "513(g) Requests for Classification",
                                    "Investigational Device Exemption Applications (IDEs)",
                                    "Investigational New Drug Applications (INDs)",
                                ]}
                            />
                        </div>
                    </section>

                    {/* --- SECTION 2: 510(k) Premarket Notifications --- */}
                    <Section>
                        <SectionHeading
                            badge={notifications?.badge_text || "510(k)"}
                            title={notifications?.title || "510(k) Premarket Notifications"}
                        />

                        <div className="text-gray-700 leading-relaxed text-[15px] md:text-base space-y-6">
                            <p>{notifications?.paragraph || "E & E Medicals and Consulting provides answers to key classification and 510(k) process questions."}</p>
                            <ol className="list-decimal pl-6 space-y-2 font-medium text-gray-900 mb-6">
                                <li>Which classifications (Class I, II, and III) do we require an FDA 510(k)?</li>
                                <li>How many stages consist of the 510(k) application process?</li>
                            </ol>

                            <p>
                                A class I, II, and III device intended for human use, for which a Premarket Approval FDA application (PMA) is not required, must submit a 510(k) to FDA unless the device is exempt from 510(k) requirements of the Federal Food, Drug, and Cosmetic Act (the FD&amp;C Act) and does not exceed the limitations of exemptions in .9 of the device classification regulation chapters (e.g., 21 CFR 862.9, 21 CFR 864.9).
                            </p>
                            <p>
                                Technically, under the 510(k) process, the FDA does not "approve" medical devices and IVDs; the FDA issues a "clearance" or "Approval" for sale in the United States. Normally, the FDA shall be subject to a provision of 510(k), should manufacturers intend to sell the Class II Medical Devices and some required Class I and III devices or IVDs on the US market. A pre-market 510(k) approval is also required for already approved medical devices (Predicate) if the manufacturer(s) modifies the technology or changed the intent of device usage in a way that significantly affects patient safety or device performance.
                            </p>

                            <h4 className="text-xl font-bold text-[#106297] pt-6 pb-2">Our services includes:</h4>
                        </div>

                        <div className="mt-4">
                            <BulletList
                                columns={2}
                                items={[
                                    "Identification of device class, product code and regulation number",
                                    "Identification of predicate device",
                                    "Identification of test standards",
                                    "Identification of 510k test requirements",
                                    "Identification testing or certification lab",
                                    "Medical device label review",
                                    "Preparation of 510k documents",
                                    "Submission of 510k documents to FDA",
                                    "Provide US Agent service for 510 k",
                                    "Communicate to FDA on behalf of our client",
                                    "Prepare clarifications to questions from FDA",
                                    "Assistance in transfer of 510k review fees to FDA",
                                    "Notify the new 510 k number",
                                    "Assistance in Establishment registration with FDA",
                                    "Assistance in Device Listing with FDA",
                                ]}
                            />
                        </div>
                    </Section>

                    {/* --- SECTION 3: Submissions Strategy --- */}
                    <section>
                        <SectionHeading
                            badge={strategy?.badge_text || "Strategy"}
                            title={strategy?.title || "Our US FDA 510(k) Submissions Strategy"}
                        />

                        <div className="text-gray-700 leading-relaxed text-[15px] md:text-base space-y-6 mb-8">
                            <p>{strategy?.paragraph || "We follow a two-stage approach (gap analysis then submission) to reduce risk and improve clearance outcomes."}</p>
                            <p>
                                For the FDA 510(k) Full / Half service, provide your{" "}
                                <Link to="/share-your-project" className="text-brand-600 hover:underline font-medium">
                                    details here
                                </Link>
                                .
                            </p>
                        </div>

                        <div className="space-y-6">
                            {/* Stage 1 */}
                            <InfoBox variant="brand">
                                <h4 className="text-lg font-bold text-navy-900 mb-4 border-b border-brand-200 pb-2">
                                    Stage 1: Rigorous Application Requirements Evaluation / Gap Analysis
                                </h4>
                                <p className="text-gray-700 text-[15px] mb-4">
                                    The proposed use and design of a device helps us identify the appropriate FDA product code and regulation number that can indicate FDA device-specific guidance and standards.
                                </p>
                                <ol className="list-decimal pl-5 space-y-2 text-gray-700 text-[14px]">
                                    <li>To determine whether your device meets the criteria of substantive equivalence for your product, we evaluate similar devices (predictive devices) with FDA 510(k) clearances.</li>
                                    <li>A list of the documentation and information required for the FDA 510(k) submission is provided for each specific product.</li>
                                    <li>To determine its suitability for 510(k) FDA submission, a regulatory consultant will review the details and prepare a detailed gap analysis report, which includes any incomplete or missing information for a full 510(k) submission.</li>
                                    <li>We shall help you close the identified gaps and provide other valuable information.</li>
                                </ol>
                            </InfoBox>

                            {/* Stage 2 */}
                            <InfoBox variant="brand">
                                <h4 className="text-lg font-bold text-navy-900 mb-4 border-b border-brand-200 pb-2">
                                    Stage 2: Application Documents Compilation and FDA 510(k) Submission
                                </h4>
                                <p className="text-gray-700 text-[15px] mb-4">
                                    E &amp; E Medicals and Consulting will prepare final 510(k) presentation when all the required documents and information have been received. We're going to:
                                </p>
                                <ol className="list-decimal pl-5 space-y-2 text-gray-700 text-[14px]">
                                    <li>Prepare a technical comparison of your medical device to the predicate device(s).</li>
                                    <li>Prepare all 21 sections of the FDA 510(k) application.</li>
                                    <li>Submit the hard copy and eCopy of the 510(k) to the CDRH division within the FDA and be the correspondent for further communications with the FDA.</li>
                                    <li>Coordinate payment of FDA 510(k) submission fees on your behalf.</li>
                                    <li>Send a hard copy and an eCopy of 510(k) to the CDRH division.</li>
                                    <li>Arrange all submission fee payments to the FDA.</li>
                                    <li>Contact you immediately on all FDA information received after the 510(k) filing and support them, if necessary, to answer any additional requests for information.</li>
                                </ol>
                            </InfoBox>
                        </div>
                    </section>

                    {/* Split image break */}
                    <SplitSection
                        imageSrc="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1400"
                        imageAlt="FDA regulatory strategy and submissions"
                        label="Expert Guidance"
                    >
                        <div>
                            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-brand-50 border border-brand-100 text-brand-600 text-xs font-bold uppercase tracking-wider mb-5">
                                <span className="w-1.5 h-1.5 rounded-full bg-brand-400" />
                                Why E&amp;E Medicals
                            </span>
                            <h2 className="font-display text-2xl font-extrabold text-navy-900 leading-tight mb-4">A Two-Stage Approach to 510(k) Success</h2>
                            <p className="text-gray-600 text-sm leading-relaxed mb-4">
                                Our proven strategy reduces the risk of rejection and streamlines the submission process. We begin with a rigorous gap analysis, then compile and submit a complete 510(k) package on your behalf.
                            </p>
                            <p className="text-gray-500 text-sm leading-relaxed">
                                With strong FDA relationships and decades of device classification expertise, E&amp;E Medicals gives your submission the best possible chance of clearance.
                            </p>
                        </div>
                    </SplitSection>

                    {/* --- SECTION 4: Drugs --- */}
                    <section>
                        <SectionHeading
                            badge={drugs?.badge_text || "Drugs"}
                            title={drugs?.title || "Drugs"}
                        />

                        <div className="text-gray-700 leading-relaxed text-[15px] md:text-base space-y-6">
                            <p>{drugs?.paragraph || "Our pharmaceutical consultants support IND, ANDA, NDA, and DMF strategy to increase first-cycle submission quality."}</p>
                        </div>

                        <div className="mt-6">
                            <FeatureList
                                columns={2}
                                items={[
                                    "IND application (Investigational New Drug)",
                                    "ANDA application (Abbreviated New Drug Application)",
                                    "NDA application 505 (b)(2) (New Drug Application)",
                                    "DMF application (Drug Master File)",
                                ]}
                            />
                        </div>

                        <div className="text-gray-700 leading-relaxed text-[15px] md:text-base space-y-6 mt-8">
                            <p>
                                In comparison to other pharmaceutical consultancies, our experienced accredited regulators have a strong relationship with FDA officials. Let your application be completed by our professional staff or direct you through the FDA application process. The FDA does not only need the safety and efficacy of pre-clinical and clinical data from many pharmaceutical research firms but also investigates the production processes to make sure cGMP standards are met.
                            </p>
                            <p>
                                Our FDA drug consultants will assist you with a well-developed plan for your product application strategy. E &amp; E Medicals and Consulting offers our pharmaceutical customers the following services:
                            </p>
                        </div>

                        <div className="mt-6">
                            <FeatureList
                                columns={2}
                                items={[
                                    "Pre-IND meeting",
                                    "FDA communications at different stages",
                                    "Orphan drug designation",
                                    "Clinical trials coordination",
                                    "513(g) Request for Information",
                                    "ANDA suitability petitions",
                                    "Technical documents review",
                                ]}
                            />
                        </div>

                        <div className="pt-8 pb-4">
                            <p className="font-semibold text-lg text-gray-900">
                                For IND and ANDA FDA Submissions/Applications,{" "}
                                <Link to="/share-your-project" className="text-brand-600 hover:underline">
                                    Request for Quote (RFQ)
                                </Link>{" "}
                                now!
                            </p>
                        </div>
                    </section>

                    {/* Page CTA */}
                    <PageCTA
                        title="Ready to Start Your FDA Application?"
                        subtitle="Our regulatory experts will guide you through every step of the FDA approval process."
                        linkLabel="Request for Quote (RFQ)"
                        linkTo="/share-your-project"
                    />
                </InnerContent>
            </main>

            <Footer />
        </div>
    );
};
