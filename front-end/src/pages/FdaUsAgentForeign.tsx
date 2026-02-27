import React from "react";
import { PageHeader } from "../components/shared/PageHeader";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { CheckCircle } from "lucide-react";

export const FdaUsAgentForeign: React.FC = () => {
    return (
        <div className="w-full bg-white font-sans flex flex-col min-h-screen">
            <Header />

            <main className="grow pb-24">
                <PageHeader title="FDA United States Agent for Foreign Establishments" breadcrumb="US Agent for Foreign Establishments" />

                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 space-y-20">
                    {/* Hero Image */}
                    <div className="w-full max-w-4xl mx-auto">
                        <img
                            src="https://eemedicals.com/wp-content/uploads/2021/11/usa-600x316.png"
                            alt="FDA United States Agent"
                            className="w-full h-auto object-cover rounded-md shadow-sm border border-gray-100"
                        />
                    </div>

                    {/* --- SECTION 1: Overview --- */}
                    <section>
                        <div className="flex items-center mb-8 md:mb-10">
                            <span className="w-10 md:w-12 h-1 bg-blue-500 mr-4 md:mr-6 block shrink-0"></span>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">US Agent for Foreign Establishments</h2>
                        </div>

                        <div className="text-gray-700 leading-relaxed text-[15px] md:text-base space-y-6">
                            <p>
                                In adverse events under the Medical Device Reporting regulation (21 CFR Part 803) or submitting 510(k) Premarket
                                Notifications (21 CFR Part 807, Subpart E), the United States Food and Drug Administration (FDA) requires all medical
                                devices, IVD, and pharmaceutical companies not located (foreign facility) in the United States to appoint a registered
                                FDA US Agent.
                            </p>
                            <p>
                                An appointed <strong className="text-gray-900">FDA United States Agent</strong> must be a resident of the United
                                States OR maintain a place of business in the US. Each foreign establishment may designate only one U.S. agent. The
                                foreign establishment should provide the name, address, telephone and fax numbers, and e-mail address of the U.S.
                                agent.
                            </p>
                            <p>
                                Information about a foreign establishment’s U.S. Agent is submitted electronically the use of the FDA Unified
                                Registration and Listing System (FURLS machine) and is a part of the status quo registration manner. Each overseas
                                establishment can also designate only one U.S. Agent.
                            </p>
                        </div>
                    </section>

                    {/* --- SECTION 2: Our Role --- */}
                    <section className="bg-gray-50 p-8 md:p-12 rounded-xl border border-gray-200">
                        <div className="flex items-center mb-8">
                            <span className="w-8 h-1 bg-blue-500 mr-4 block shrink-0"></span>
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 tracking-tight">How E & E Medicals Supports You</h2>
                        </div>

                        <div className="text-gray-700 leading-relaxed text-[15px] md:text-base space-y-6">
                            <div className="bg-blue-600 text-white p-6 rounded-lg mb-8 shadow-md">
                                <p className="text-lg font-semibold">We shall function as your FDA US Agent at a reasonable annual fee.</p>
                            </div>

                            <ul className="space-y-4">
                                <li className="flex items-start">
                                    <CheckCircle className="text-white fill-blue-500 w-5.5 h-5.5 mr-3 shrink-0 mt-0.5" />
                                    <span>Assist FDA in communications with foreign establishments.</span>
                                </li>
                                <li className="flex items-start">
                                    <CheckCircle className="text-white fill-blue-500 w-5.5 h-5.5 mr-3 shrink-0 mt-0.5" />
                                    <span>Assist in scheduling inspections of the foreign establishment's facility.</span>
                                </li>
                                <li className="flex items-start">
                                    <CheckCircle className="text-white fill-blue-500 w-5.5 h-5.5 mr-3 shrink-0 mt-0.5" />
                                    <span>Provide a legal US presence and address for regulatory correspondence.</span>
                                </li>
                            </ul>
                        </div>
                    </section>
                </div>
            </main>

            <Footer />
        </div>
    );
};
