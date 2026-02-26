import React from "react";
import { PageHeader } from "../components/shared/PageHeader";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

export const Audits: React.FC = () => {
    return (
        <div className="w-full bg-white font-sans flex flex-col min-h-screen">
            <Header />

            <main className="grow pb-24">
                <PageHeader title="Audits" breadcrumb="Audits" />

                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 space-y-20">
                    
                    {/* Hero Image */}
                    <div className="w-full">
                        <img 
                            src="https://eemedicals.com/wp-content/uploads/2021/11/quality-assurance-audit-900x313.jpg" 
                            alt="Quality Assurance Audits" 
                            className="w-full h-auto object-cover rounded-md shadow-sm"
                        />
                    </div>

                    {/* --- SECTION 1: Quality Assurance Audits --- */}
                    <section>
                        <div className="flex items-center mb-8 md:mb-10">
                            <span className="w-10 md:w-12 h-1 bg-blue-500 mr-4 md:mr-6 block shrink-0"></span>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">Quality Assurance Audits</h2>
                        </div>
                        <div className="text-gray-700 leading-relaxed text-[15px] md:text-base">
                            <p>
                                To maintain quality system, it is essential that you carry on routine quality assurance audits to eliminate the reduction in product quality, improve processes, eliminate loss of third party certifications of <a href="https://en.wikipedia.org/wiki/Food_and_Drug_Administration" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-600 hover:underline">FDA</a> enforcement.
                            </p>
                        </div>
                    </section>

                    {/* --- SECTION 2: Three Types of Audits --- */}
                    <section>
                        <div className="flex items-center mb-8 md:mb-10">
                            <span className="w-10 md:w-12 h-1 bg-blue-500 mr-4 md:mr-6 block shrink-0"></span>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">Three Different Types of Quality Assurance Audits</h2>
                        </div>
                        <div className="text-gray-700 leading-relaxed text-[15px] md:text-base space-y-6">
                            <p>
                                <Link to="#" className="text-blue-500 hover:text-blue-600 hover:underline">ISO 9001</Link> defines an audit as a “systematic, independent and documented process for obtaining audit evidence [records, statements of fact or other information which are relevant and verifiable] and evaluating it objectively to determine the extent to which the audit criteria [a set of policies, procedures or requirements] are fulfilled.”
                            </p>
                            <p>
                                Quality assurance audits could be carried out through Process, Product, and Systemic verification.
                            </p>

                            {/* Diagram showing the intersection/differences of the 3 audits */}
                            <span className="block my-6 w-full max-w-2xl text-center">
                                
                            </span>

                            <ul className="space-y-5">
                                <li className="flex items-start">
                                    <CheckCircle className="text-white fill-blue-500 w-5.5 h-5.5 mr-3 shrink-0 mt-0.5" />
                                    <span>
                                        <strong className="text-gray-900 font-semibold">Process Audit:</strong> This form of audit examines whether the processes operate within the defined limits. This assesses the method for measuring the compliance within requirements and reliability of the instructions against pre-determined guidelines and standards.
                                    </span>
                                </li>
                                <li className="flex items-start">
                                    <CheckCircle className="text-white fill-blue-500 w-5.5 h-5.5 mr-3 shrink-0 mt-0.5" />
                                    <span>
                                        <strong className="text-gray-900 font-semibold">Product Audit:</strong> An audit that examines a product or service to evaluate its conformance to established requirements such as specifications, performance standards, and customer requirements.
                                    </span>
                                </li>
                                <li className="flex items-start">
                                    <CheckCircle className="text-white fill-blue-500 w-5.5 h-5.5 mr-3 shrink-0 mt-0.5" />
                                    <span>
                                        <strong className="text-gray-900 font-semibold">System Audit:</strong> These are audits conducted on management systems. Verifiable activities relate to examination and evaluation of objective evidence through documentation or observations.
                                    </span>
                                </li>
                            </ul>

                            <p className="pt-2">
                                QMS audits help to evaluate the quality management program of a company or organization based on its conformance to company policies, contract commitments, and regulatory requirements.
                            </p>
                        </div>
                    </section>

                    {/* Use a Grid to display the remaining standard lists cleanly */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pt-8 border-t border-gray-100">
                        
                        {/* --- SECTION 3: Medical Devices --- */}
                        <section>
                            <div className="flex items-center mb-6">
                                <span className="w-8 h-1 bg-blue-500 mr-4 block shrink-0"></span>
                                <h3 className="text-xl font-bold text-gray-900 tracking-tight">Medical Devices</h3>
                            </div>
                            <ul className="space-y-4 text-[15px] text-gray-700">
                                {[
                                    "ISO 13485:2016",
                                    "US FDA 21 CFR Part 820",
                                    "European MDD / AIMDD / IVDD",
                                    "ISO 14971 Risk Management",
                                    "IEC 60601 Electrical Equipment",
                                    "Brazil ANVISA",
                                    "EU MDR / AIMDR / IVDR",
                                    "Canada CMDR",
                                    "Australian TGA",
                                    "Japan MHLW Ordinance 169 Pharmaceutical",
                                    "US FDA 21 CFR 210 & 211",
                                    "PIC/S GMP Guide",
                                    "ICH Q7 GMP Guide for APIs",
                                    "ICH Q10 Pharmaceutical Quality Systems",
                                    "PS 9000:2016 Pharmaceutical Packaging"
                                ].map((item, index) => (
                                    <li key={index} className="flex items-start">
                                        <CheckCircle className="text-white fill-blue-500 w-5 h-5 mr-3 shrink-0 mt-0.5" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </section>

                        {/* --- SECTION 4: Quality Management --- */}
                        <section>
                            <div className="flex items-center mb-6">
                                <span className="w-8 h-1 bg-blue-500 mr-4 block shrink-0"></span>
                                <h3 className="text-xl font-bold text-gray-900 tracking-tight">Quality Management</h3>
                            </div>
                            <ul className="space-y-4 text-[15px] text-gray-700">
                                {[
                                    "ISO 9001:2015",
                                    "ISO 17025 Testing & Calibration"
                                ].map((item, index) => (
                                    <li key={index} className="flex items-start">
                                        <CheckCircle className="text-white fill-blue-500 w-5 h-5 mr-3 shrink-0 mt-0.5" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </section>

                        {/* --- SECTION 5: Other Management Systems --- */}
                        <section>
                            <div className="flex items-center mb-6">
                                <span className="w-8 h-1 bg-blue-500 mr-4 block shrink-0"></span>
                                <h3 className="text-xl font-bold text-gray-900 tracking-tight">Other Systems</h3>
                            </div>
                            <ul className="space-y-4 text-[15px] text-gray-700">
                                {[
                                    "ISO 14001:2015 Environmental Health & Safety",
                                    "OHSAS 18001 & ISO 45001 Occupational Health & Safety",
                                    "ISO 27001 Information Security"
                                ].map((item, index) => (
                                    <li key={index} className="flex items-start">
                                        <CheckCircle className="text-white fill-blue-500 w-5 h-5 mr-3 shrink-0 mt-0.5" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </section>

                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};