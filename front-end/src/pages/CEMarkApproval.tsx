import React from "react";
import { PageHeader } from "../components/shared/PageHeader";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Link } from "react-router-dom";

export const CEMarkApproval: React.FC = () => {
    return (
        <div className="w-full bg-white font-sans flex flex-col min-h-screen">
            <Header />

            <main className="grow pb-24">
                <PageHeader title="Best CE mark approval for medical devices consultants | An Overviews" breadcrumb="CE Mark Approval" />

                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 space-y-20">
                    {/* Hero Image */}
                    <div className="w-full max-w-3xl mx-auto">
                        <img
                            src="https://eemedicals.com/wp-content/uploads/2021/11/europe-flag-600x450.png"
                            alt="CE Mark Approval Europe"
                            className="w-full h-auto object-cover rounded-md shadow-sm"
                        />
                    </div>

                    {/* --- SECTION 1: CE Mark Overview --- */}
                    <section>
                        <div className="flex items-center mb-8 md:mb-10">
                            <span className="w-10 md:w-12 h-1 bg-blue-500 mr-4 md:mr-6 block shrink-0"></span>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">CE Mark Approval</h2>
                        </div>

                        <div className="text-gray-700 leading-relaxed text-[15px] md:text-base space-y-6">
                            <p>
                                The CE marking (known as CE mark) is a mandatory conformance mark on many products placed on the single market in the
                                European Economic Area (EEA). The CE marking certifies that a product has met the requirements of the applicable
                                European Medical device derivative. Like active implantable medical device (AIMD) Directive 90/385/EEC medical device
                                Directive 93/42/EEC its modifications.
                            </p>

                            {/* Visual Aid Placeholder to help users understand the CE pathway */}
                            <span className="block my-10 w-full max-w-2xl mx-auto text-center italic text-sm text-gray-500">
                                [Image diagram showing the step-by-step CE Mark certification process for Medical Devices under MDR]
                            </span>
                        </div>
                    </section>

                    {/* --- SECTION 2: Gap Analysis --- */}
                    <section>
                        <div className="flex items-center mb-8 md:mb-10">
                            <span className="w-10 md:w-12 h-1 bg-blue-500 mr-4 md:mr-6 block shrink-0"></span>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
                                MDR Technical Documentation / Gap Analysis
                            </h2>
                        </div>

                        <div className="text-gray-700 leading-relaxed text-[15px] md:text-base">
                            <p>
                                Our experts review device design, risk analysis, clinical evaluation, testing reports, post-market surveillance,
                                labeling, other required areas. Gap analysis is to ease the transition in the required areas.
                            </p>
                        </div>
                    </section>

                    {/* --- SECTION 3: MDD to MDR Conversion --- */}
                    <section>
                        <div className="flex items-center mb-8 md:mb-10">
                            <span className="w-10 md:w-12 h-1 bg-blue-500 mr-4 md:mr-6 block shrink-0"></span>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">Conversion of MDD to MDR File(s)</h2>
                        </div>

                        <div className="text-gray-700 leading-relaxed text-[15px] md:text-base">
                            <p>
                                To meet with the New EU Medical Device Regulation (MDR) in which safety, efficacy. Many works with CE MDD need to
                                convert their documentation to assemble the new Medical Device Regulation (MDR). The existing files shall upgraded
                                with quality materials to meet all needs.
                            </p>
                        </div>
                    </section>

                    {/* --- SECTION 4: Clinical Documentation --- */}
                    <section>
                        <div className="flex items-center mb-8 md:mb-10">
                            <span className="w-10 md:w-12 h-1 bg-blue-500 mr-4 md:mr-6 block shrink-0"></span>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
                                Clinical Documentation - Evaluation Plan & Procedures
                            </h2>
                        </div>

                        <div className="text-gray-700 leading-relaxed text-[15px] md:text-base">
                            <p>
                                The Clinical Documentation process begins with a clearly designed Evaluation Plan. Which entails the methodological
                                systematic approach to reach adequate reporting. It provides a step-by-step approach to conducting documenting each
                                procedure. In the MDR, Chapter VI, Article 61 critical issues for clinical data. Our experts have developed forms
                                templates for mandatory procedures.
                            </p>
                        </div>
                    </section>

                    {/* --- SECTION 5: Why E&E --- */}
                    <section className="bg-gray-50 p-8 md:p-12 rounded-lg border border-gray-100">
                        <div className="flex items-center mb-6">
                            <span className="w-8 h-1 bg-blue-500 mr-4 block shrink-0"></span>
                            <h2 className="text-2xl font-bold text-gray-900 tracking-tight">Why choose E & E Medicals and Consulting?</h2>
                        </div>

                        <div className="text-gray-700 leading-relaxed text-[15px] md:text-base space-y-6">
                            <p>
                                Our experts and partners who live EU Authorized recognize threats, consider dangers. Carry out all applicable tests to
                                determine the appropriate measures to meet with <strong className="text-gray-900">CE mark approval</strong>, CE
                                marking, CE certification mark regulations.
                            </p>
                            <p>
                                Our team of medical device consultants helps in transforming existing medical device Files to MDR. The EU necessities
                                may consist of protection, fitness, environmental protection. Many merchandises require CE marking they are within the
                                EU.
                            </p>

                            <div className="pt-6 border-t border-gray-200 mt-6">
                                <p className="font-semibold text-gray-900">
                                    For the CE Marking of Full / Half service,{" "}
                                    <Link to="/share-your-project" className="text-blue-600 hover:underline">
                                        Request for Quote
                                    </Link>
                                    .
                                </p>
                            </div>
                        </div>
                    </section>
                </div>
            </main>

            <Footer />
        </div>
    );
};
