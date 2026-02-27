import React from "react";
import { PageHeader } from "../components/shared/PageHeader";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

export const CmcServices: React.FC = () => {
    return (
        <div className="w-full bg-white font-sans flex flex-col min-h-screen">
            <Header />

            <main className="grow pb-24">
                <PageHeader title="Chemistry, Manufacturing, and Controls (CMC)" breadcrumb="CMC Services" />

                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 space-y-20">
                    {/* --- SECTION 1: Overview --- */}
                    <section>
                        <div className="flex items-center mb-8 md:mb-10">
                            <span className="w-10 md:w-12 h-1 bg-blue-500 mr-4 md:mr-6 block shrink-0"></span>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">CMC Regulatory Affairs</h2>
                        </div>

                        <div className="text-gray-700 leading-relaxed text-[15px] md:text-base space-y-6">
                            <p>
                                <strong className="text-gray-900">E&E Medicals</strong> is a leading player in centralized Chemistry, Manufacturing,
                                and Controls (CMC) lifecycle management for Regulatory submissions. We offer end-to-end services for CMC Regulatory
                                affairs to ensure your products meet stringent health authority standards.
                            </p>

                            <div className="inline-block rounded-lg  mt-4">
                                <p className="font-medium text-gray-900">
                                    Facing CMC Issues?{" "}
                                    <Link to="/contact" className="text-blue-600 hover:underline">
                                        Request a Quote (RFQ) now!
                                    </Link>
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* --- SECTION 2: 4-Step Process --- */}
                    <section className=" p-8 md:p-12 rounded-xl ">
                        <div className="flex items-center mb-8">
                            <span className="w-8 h-1 bg-blue-500 mr-4 block shrink-0"></span>
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 tracking-tight">Our Streamlined CMC Support Process</h2>
                        </div>

                        <div className="space-y-8">
                            <div className="flex flex-col md:flex-row gap-4">
                                <div className="md:w-32 font-bold text-blue-600 text-xl shrink-0 flex items-center">
                                    <CheckCircle className="text-white fill-blue-500 w-5 h-5 mr-3 shrink-0 mt-0.5" />
                                    Step 1
                                </div>
                                <div className="text-gray-700 text-sm md:text-base">
                                    <strong className="text-gray-900 block mb-1">Kick-off & Strategy</strong>
                                    To kick off our collaboration, we take the time to grasp your requirements and objectives fully. This allows us to
                                    determine the most effective means of gathering data for your dossier's (CTD) process, create comprehensive
                                    schedules, and share effectiveness from the start.
                                </div>
                            </div>

                            <div className="flex flex-col md:flex-row gap-4">
                                <div className="md:w-32 font-bold text-blue-600 text-xl shrink-0 flex items-center">
                                    <CheckCircle className="text-white fill-blue-500 w-5 h-5 mr-3 shrink-0 mt-0.5" />
                                    Step 2
                                </div>
                                <div className="text-gray-700 text-sm md:text-base">
                                    <strong className="text-gray-900 block mb-1">Documentation Prep</strong>
                                    Our CMC specialists help review and/or draft the files for your IND to ensure alignment with rules. When possible,
                                    we use pre-existing accepted text modules to streamline submissions. DMFs for primary packaging materials are also
                                    supported.
                                </div>
                            </div>

                            <div className="flex flex-col md:flex-row gap-4">
                                <div className="md:w-32 font-bold text-blue-600 text-xl shrink-0 flex items-center">
                                    <CheckCircle className="text-white fill-blue-500 w-5 h-5 mr-3 shrink-0 mt-0.5" />
                                    Step 3
                                </div>
                                <div className="text-gray-700 text-sm md:text-base">
                                    <strong className="text-gray-900 block mb-1">Document Review</strong>
                                    We review your submission in depth and compile findings into a draft of the appropriate dossier chapters (Module
                                    3). Your SMEs, regulatory affairs professionals, and our CMC experts will review the submission to ensure accurate
                                    procedural mapping.
                                </div>
                            </div>

                            <div className="flex flex-col md:flex-row gap-4">
                                <div className="md:w-32 font-bold text-blue-600 text-xl shrink-0 flex items-center  ">
                                    <CheckCircle className="text-white fill-blue-500 w-5 h-5 mr-3 shrink-0 mt-0.5" />
                                    Step 4
                                </div>
                                <div className="text-gray-700 text-sm md:text-base">
                                    <strong className="text-gray-900 block mb-1">Responding to Authorities</strong>
                                    Our CMC team is here to lend our considerable expertise in responding to requests for additional data from
                                    regulatory agencies that may arise due to your IND.
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* --- SECTION 3: Lifecycle Management --- */}
                    <section>
                        <div className="flex items-center mb-8 md:mb-10">
                            <span className="w-10 md:w-12 h-1 bg-blue-500 mr-4 md:mr-6 block shrink-0"></span>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">Lifecycle Management</h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                            {/* Annual Reports */}
                            <div>
                                <h3 className="text-xl font-bold text-gray-900 mb-6 border-b pb-2">Annual Report Submissions</h3>
                                <ul className="space-y-4">
                                    {[
                                        "Tracking of Annual Report scheduler due dates",
                                        "Provide CMC Regulatory strategy",
                                        "Regulatory assessment of supporting documents",
                                        "Request for additional documents/justification",
                                        "Authoring of the Annual Report package",
                                        "Finalization and submission in eCTD format",
                                        "Database updates with submission details",
                                    ].map((item, idx) => (
                                        <li key={idx} className="flex items-start">
                                            <CheckCircle className="text-white fill-blue-500 w-5 h-5 mr-3 shrink-0 mt-0.5" />
                                            <span className="text-gray-700 text-sm">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Renewals */}
                            <div>
                                <h3 className="text-xl font-bold text-gray-900 mb-6 border-b pb-2">Renewal Applications</h3>
                                <ul className="space-y-4">
                                    {[
                                        "Tracking of renewal application scheduler",
                                        "Provide strategy for required docs and timelines",
                                        "Initiation requests to manufacturer for CMC documentation",
                                        "Regulatory assessment for submission",
                                        "Request for additional justification if needed",
                                        "Authoring of renewal package per country-specific requirements",
                                        "Update database with application status",
                                    ].map((item, idx) => (
                                        <li key={idx} className="flex items-start">
                                            <CheckCircle className="text-white fill-blue-500 w-5 h-5 mr-3 shrink-0 mt-0.5" />
                                            <span className="text-gray-700 text-sm">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </section>
                </div>
            </main>

            <Footer />
        </div>
    );
};
