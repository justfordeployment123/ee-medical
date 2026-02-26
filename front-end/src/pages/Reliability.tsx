import React from "react";
import { PageHeader } from "../components/shared/PageHeader"; // Adjust import path as needed
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

export const Reliability: React.FC = () => {
    return (
        <div className="w-full bg-white font-sans flex flex-col min-h-screen">
            {/* Global Navigation */}
            <Header />

            {/* Main Content wrapper */}
            <main className="grow pb-24">
                {/* Page Header */}
                <PageHeader title="Reliability" breadcrumb="Reliability" />

                {/* Main Content Container */}
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 space-y-24">
                    {/* --- SECTION 1: Product Design --- */}
                    <section>
                        <div className="flex items-center mb-10">
                            <span className="w-10 md:w-12 h-1 bg-blue-500 mr-4 md:mr-6 block shrink-0"></span>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">Product Design</h2>
                        </div>

                        <div className="space-y-8 text-gray-700 leading-relaxed text-[15px] md:text-base">
                            <div>
                                <h3 className="font-bold text-gray-900 mb-4">Reliability</h3>
                                <p className="mb-4">Reliability Engineering, Risk & Productivity</p>
                                <p className="mb-4">
                                    The FDA and other regulatory agencies do not regulate “reliability engineering” or “productivity” as standalone
                                    disciplines.
                                </p>
                                <p>
                                    Instead, they expect evidence that devices are reliable, risks are controlled, and processes are effective—and
                                    they enforce this through design controls, risk management, CAPA, and production controls.
                                </p>
                            </div>

                            <div>
                                <h3 className="font-bold text-gray-900 mb-4">Reliability Engineering</h3>
                                <p className="font-bold text-gray-900 mb-4">
                                    “Can you demonstrate, with objective evidence, that your device will perform safely and effectively over its
                                    intended life?”
                                </p>
                                <ul className="list-disc pl-5 space-y-2 ml-4">
                                    <li>Accelerated Life Testing (ALT)</li>
                                    <li>Weibull & reliability growth modeling</li>
                                    <li>Design for Reliability (DfR)</li>
                                    <li>Field failure & complaint trend analysis</li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="font-bold text-gray-900 mb-4">Risk Management</h3>
                                <p className="font-bold text-gray-900 mb-4">
                                    “Do you understand your risks, control them effectively, and keep risk files alive after launch?”
                                </p>
                                <ul className="list-disc pl-5 space-y-2 ml-4">
                                    <li>ISO 14971 risk files</li>
                                    <li>Risk-based design controls</li>
                                    <li>Post-market risk assessment</li>
                                    <li>FDA response support (483 / Warning Letters)</li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="font-bold text-gray-900 mb-4">Productivity & Operational Excellence</h3>
                                <p className="font-bold text-gray-900 mb-4">
                                    “Are your processes stable, controlled, and capable of producing conforming products consistently?”
                                </p>
                                <ul className="list-disc pl-5 space-y-2 ml-4 mb-6">
                                    <li>CAPA reduction & effectiveness</li>
                                    <li>Yield improvement & scrap reduction</li>
                                    <li>Supplier risk reduction</li>
                                    <li>Reliability-driven cost reduction</li>
                                </ul>
                                <p>
                                    E&E Medicals and Consulting will help you conduct design reviews to identify any major issues that could impede
                                    compliance testing.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* --- SECTION 2: Test Plan Development --- */}
                    <section>
                        <div className="flex items-center mb-10">
                            <span className="w-10 md:w-12 h-1 bg-blue-500 mr-4 md:mr-6 block shrink-0"></span>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">Test Plan Development</h2>
                        </div>

                        <div className="text-gray-700 leading-relaxed text-[15px] md:text-base">
                            <p className="mb-4">
                                To set reliability goals for your product, and make sure it meets that design at the prototype phase, our reliability
                                experts design a test plan for you that ensures your design will last to your expectations in the real world.
                            </p>
                            <p className="mb-6">Our test plan has two objectives:</p>

                            <ul className="space-y-5">
                                <li className="flex items-start">
                                    <CheckCircle className="text-white fill-blue-500 w-5.5 h-5.5 mr-3 shrink-0 mt-0.5" />
                                    <span>
                                        <strong className="text-gray-900 font-semibold">Repeatability:</strong> The test setup will be easy to capture
                                        failures such that any lab can reproduce the setup which will lead to better results
                                    </span>
                                </li>
                                <li className="flex items-start">
                                    <CheckCircle className="text-white fill-blue-500 w-5.5 h-5.5 mr-3 shrink-0 mt-0.5" />
                                    <span>
                                        <strong className="text-gray-900 font-semibold">Survival:</strong> The final production units can stay under
                                        the field failure rates you need to survive, grow, and maintain a good reputation.
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </section>

                    {/* --- SECTION 3: MTBF Analysis --- */}
                    <section>
                        <div className="flex items-center mb-10">
                            <span className="w-10 md:w-12 h-1 bg-blue-500 mr-4 md:mr-6 block shrink-0"></span>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">MTBF Analysis</h2>
                        </div>

                        <div className="text-gray-700 leading-relaxed text-[15px] md:text-base">
                            <p className="mb-4">
                                MTBF, or “Mean Time Between Failures” is the average time between failures of a system, and is often considered the
                                “useful life” of the device. The MTBF calculation is done on IT equipment, medical equipment, and Test / Measurement
                                equipment and is most appropriate for electronic systems without any external moving parts.
                            </p>
                            <p className="mb-8">
                                <Link to="/" className="text-blue-500 hover:text-blue-600 hover:underline">
                                    E & E Medicals
                                </Link>{" "}
                                and Consulting will apply Life Data Analysis to help you achieve the following:
                            </p>

                            <ul className="space-y-4">
                                {[
                                    "Tracking a product's reliability and guiding corrective actions through the use of field data",
                                    "Predicting the number of returns/failures",
                                    "Reliability specifications",
                                    "Optimum replacement time determination",
                                    "Spare parts determination",
                                    "Reliability goals, setting and meeting them",
                                    "Supplier reliability issues",
                                    "Failure behavior assessment and failure mode detection",
                                    "Warranty time determination",
                                    "Cost projections for in-warranty failures",
                                    "Analysis of different failure modes",
                                    "Reliability bathtub curves",
                                    "Probabilistic design using stress-strength interference",
                                    "Examining repairable systems",
                                    "Comparing designs, suppliers and data sets",
                                ].map((item, index) => (
                                    <li key={index} className="flex items-start">
                                        <CheckCircle className="text-white fill-blue-500 w-5.5 h-5.5 mr-3 shrink-0 mt-0.5" />
                                        <span>{item}</span>
                                        {/* Insert visual aid when discussing bathtub curves to improve technical comprehension */}
                                        {item === "Reliability bathtub curves" && <span className="block mt-4 mb-2 w-full max-w-md"></span>}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </section>
                </div>
            </main>

            {/* Global Footer */}
            <Footer />
        </div>
    );
};
