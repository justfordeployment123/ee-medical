import React from "react";
import { PageHeader } from "../components/shared/PageHeader";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

export const FdaInteractionDefense: React.FC = () => {
    return (
        <div className="w-full bg-white font-sans flex flex-col min-h-screen">
            <Header />

            <main className="grow pb-24">
                <PageHeader 
                    title="FDA Interaction & Defense Support" 
                    breadcrumb="FDA Interaction Defense" 
                />

                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 space-y-16">
                    
                    {/* --- SECTION 1: Overview --- */}
                    <section>
                        <div className="flex items-center mb-8 md:mb-10">
                            <span className="w-10 md:w-12 h-1 bg-blue-500 mr-4 md:mr-6 block shrink-0"></span>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">FDA Defense Support Plan</h2>
                        </div>

                        <div className="text-gray-700 leading-relaxed text-[15px] md:text-base space-y-6">
                            <p className="text-xl italic text-gray-900 font-medium mb-6">
                                “We de-risk AI healthcare products by designing regulatory-approvable AI systems and pre-empting FDA review failures.”
                            </p>
                            <p>
                                We prepare a comprehensive, FDA-ready Interaction & Defense Support Plan for direct internal use across PMA, 510(k), De Novo, IND/IDE, AI/ML SaMD, CDx, NGS, or clinical trial interactions.
                            </p>
                            <p className="text-lg pt-2">
                                <strong className="text-gray-900">Purpose:</strong> Survive Pre-Subs, Interactive Review, and Panels.
                            </p>
                        </div>
                    </section>

                    {/* --- SECTION 2: Deliverables --- */}
                    <section className="pt-4">
                        <div className="flex items-center mb-8">
                            <span className="w-8 h-1 bg-blue-500 mr-4 block shrink-0"></span>
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 tracking-tight">
                                Deliverables & Engagement
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                            <div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-6">What You Receive</h3>
                                <ul className="space-y-4 text-gray-700">
                                    {[
                                        "Pre-Sub briefing package (AI-focused)",
                                        "Mock FDA deficiency letters",
                                        "Reviewer-style Q&A scripts",
                                        "Advisory panel defense slides",
                                        "Response drafting support"
                                    ].map((item, idx) => (
                                        <li key={idx} className="flex items-start">
                                            <CheckCircle className="text-blue-500 w-5 h-5 mr-3 shrink-0 mt-0.5" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            
                            <div className="flex flex-col justify-center">
                                <div className="mb-6">
                                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Duration</h3>
                                    <p className="text-gray-700 text-lg">As needed</p>
                                </div>
                                <div className="mt-4">
                                    <p className="font-medium text-gray-900">
                                        For more details, submit your details at{" "}
                                        <Link to="/contact" className="text-blue-600 hover:underline">
                                            our contact form
                                        </Link>.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                </div>
            </main>

            <Footer />
        </div>
    );
};