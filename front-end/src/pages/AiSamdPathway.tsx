import React from "react";
import { PageHeader } from "../components/shared/PageHeader";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

export const AiSamdPathway: React.FC = () => {
    return (
        <div className="w-full bg-white font-sans flex flex-col min-h-screen">
            <Header />

            <main className="grow pb-24">
                <PageHeader 
                    title="AI SaMD Regulatory Pathway Strategy" 
                    breadcrumb="AI SaMD Pathway Strategy" 
                />

                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 space-y-16">
                    
                    {/* --- SECTION 1: Overview --- */}
                    <section>
                        <div className="flex items-center mb-8 md:mb-10">
                            <span className="w-10 md:w-12 h-1 bg-blue-500 mr-4 md:mr-6 block shrink-0"></span>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">Global Regulatory Strategy</h2>
                        </div>

                        <div className="text-gray-700 leading-relaxed text-[15px] md:text-base space-y-6">
                            <p>
                                We prepare a strategy that defines the <strong>global regulatory pathway</strong> for an Artificial Intelligence / Machine Learning–enabled Software as a Medical Device (AI SaMD), from early development through post-market lifecycle management. 
                            </p>
                            
                            
                            <h3 className="text-xl font-bold text-gray-900 pt-4">It is intended to:</h3>
                            <ul className="space-y-3">
                                {[
                                    "Establish the appropriate regulatory classification and submission pathway",
                                    "Align development activities with FDA, IMDRF, and international expectations",
                                    "De-risk regulatory review by anticipating the FDA reviewer’s focus areas",
                                    "Enable scalable model updates through a Predetermined Change Control Plan (PCCP)"
                                ].map((item, idx) => (
                                    <li key={idx} className="flex items-start">
                                        <CheckCircle className="text-blue-500 w-5 h-5 mr-3 shrink-0 mt-0.5" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>

                            <div className="pt-4">
                                <p className="text-lg">
                                    <strong className="text-gray-900">Purpose:</strong> Prevent wrong pathway selection (fatal error).
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* --- SECTION 2: Deliverables & Timeline --- */}
                    <section className="pt-8">
                        <div className="flex items-center mb-8">
                            <span className="w-8 h-1 bg-blue-500 mr-4 block shrink-0"></span>
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 tracking-tight">
                                Deliverables & Engagement
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                            <div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-6">What You Receive</h3>
                                <ul className="space-y-4">
                                    {[
                                        "Intended Use & claims risk calibration",
                                        "FDA pathway decision (510(k) vs De Novo vs PMA)",
                                        "AI risk classification",
                                        "Regulatory timeline & evidence roadmap",
                                        "Competitor predicate/reference mapping"
                                    ].map((item, idx) => (
                                        <li key={idx} className="flex items-center text-gray-700">
                                            <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 shrink-0"></span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            
                            <div className="flex flex-col justify-center">
                                <div className="mb-6">
                                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Duration</h3>
                                    <p className="text-gray-700 text-lg">2–4 weeks</p>
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