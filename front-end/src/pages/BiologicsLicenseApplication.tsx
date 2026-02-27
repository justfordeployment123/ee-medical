import React from "react";
import { PageHeader } from "../components/shared/PageHeader";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

export const BiologicsLicenseApplication: React.FC = () => {
    return (
        <div className="w-full bg-white font-sans flex flex-col min-h-screen">
            <Header />

            <main className="grow pb-24">
                <PageHeader 
                    title="Biologics License Application (BLA) – Overview" 
                    breadcrumb="Biologics License Application" 
                />

                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 space-y-20">
                    
                    {/* --- SECTION 1: Overview & Challenges --- */}
                    <section>
                        <div className="flex items-center mb-8 md:mb-10">
                            <span className="w-10 md:w-12 h-1 bg-blue-500 mr-4 md:mr-6 block shrink-0"></span>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">Understanding the BLA Process</h2>
                        </div>

                        <div className="text-gray-700 leading-relaxed text-[15px] md:text-base space-y-6">
                            <p>
                                Through the BLA, promising biological medicinal products can be developed and approved to prevent and treat a wide range of serious, chronic diseases and conditions. Biopharma companies are constantly working on new biological products to fill voids in the healthcare industry, but applicants face a difficult decision when deciding on a development strategy for submitting a <strong className="text-gray-900">Biologics License Application (BLA)</strong> to the US Food and Drug Administration (FDA).
                            </p>
                            <p>
                                Health Authorities have begun implementing risk-based review procedures in response to increasing regulatory enforcement for complex biologics, biosimilars, and advanced therapies like cellular and gene therapy products. Failure to include all required details could result in a <strong className="text-gray-900">refusal to file (RTF)</strong>.
                            </p>
                            <p>
                                From pre-BLA/BPD meetings to post-approval Lifecycle Management (LCM) activities, E&E Medicals provides full regulatory support to BLA sponsors.
                            </p>
                        </div>
                    </section>

                    {/* --- SECTION 2: Comprehensive BLA Services --- */}
                    <section className="bg-gray-50 p-8 md:p-12 rounded-xl border border-gray-200">
                        <div className="flex items-center mb-8">
                            <span className="w-8 h-1 bg-blue-500 mr-4 block shrink-0"></span>
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 tracking-tight">
                                Our Biologics Regulatory Services
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <ul className="space-y-4">
                                {[
                                    "Pre-submission and strategic guidance for BLA routes",
                                    "Coordination of FDA Meetings (Type A, B, C, and BPD)",
                                    "Regulatory gap analysis and similarity assessments",
                                    "Compilation and technical review of BLA packages",
                                ].map((item, idx) => (
                                    <li key={idx} className="flex items-start">
                                        <CheckCircle className="text-white fill-blue-500 w-5.5 h-5.5 mr-3 shrink-0 mt-0.5" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <ul className="space-y-4">
                                {[
                                    "Requests for Accelerated Review and Fast-track status",
                                    "RMAT status applications for cell and tissue therapies",
                                    "Response strategies for Complete Response Letters (CRL)",
                                    "Post-approval Lifecycle Management (CBE 30s, PASs)",
                                ].map((item, idx) => (
                                    <li key={idx} className="flex items-start">
                                        <CheckCircle className="text-white fill-blue-500 w-5.5 h-5.5 mr-3 shrink-0 mt-0.5" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="mt-12 p-6 bg-white rounded-lg border border-blue-100 shadow-sm text-center">
                            <p className="text-lg text-gray-800 font-medium">
                                Ready to start your FDA BLA Submission?{" "}
                                <Link to="/contact" className="text-blue-600 hover:underline font-bold">
                                    Request a Quote (RFQ) Now
                                </Link>
                            </p>
                        </div>
                    </section>

                    {/* --- SECTION 3: Strategic Support --- */}
                    <section>
                        <div className="flex items-center mb-8 md:mb-10">
                            <span className="w-10 md:w-12 h-1 bg-blue-500 mr-4 md:mr-6 block shrink-0"></span>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">Strategic Guidance</h2>
                        </div>
                        <div className="text-gray-700 leading-relaxed text-[15px] md:text-base">
                            <p>
                                We help sponsors navigate the complexities of vaccines, recombinant therapeutic protein products, monoclonal antibody products, and gene therapies. Our team ensures that every Biologics License Application is submitted on time and meets the rigorous standards of modern health authorities.
                            </p>
                        </div>
                        
                    </section>
                </div>
            </main>

            <Footer />
        </div>
    );
};