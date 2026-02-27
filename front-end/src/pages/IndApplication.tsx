import React from "react";
import { PageHeader } from "../components/shared/PageHeader";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

export const IndApplication: React.FC = () => {
    return (
        <div className="w-full bg-white font-sans flex flex-col min-h-screen">
            <Header />

            <main className="grow pb-24">
                <PageHeader 
                    title="Investigational New Drug (IND) Application" 
                    breadcrumb="Investigational New Drug (IND) Application" 
                />

                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 space-y-20">
                    
                    {/* Hero Image (No image provided in HTML, but keeping structure consistent if one is added later) */}

                    {/* --- SECTION 1: IND Overview --- */}
                    <section>
                        <div className="flex items-center mb-8 md:mb-10">
                            <span className="w-10 md:w-12 h-1 bg-blue-500 mr-4 md:mr-6 block shrink-0"></span>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">Investigational New Drug (IND) Application</h2>
                        </div>

                        <div className="text-gray-700 leading-relaxed text-[15px] md:text-base space-y-6">
                            <p>
                                To transport or distribute a drug across the United States for use in a clinical program, the sponsor must first submit an Investigational New Drug Application (INDA) to the US Food and Drug Administration (FDA) and receive agency acceptance.
                            </p>
                            <p>
                                The US Food and Drug Administration (<a href="https://en.wikipedia.org/wiki/Food_and_Drug_Administration" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-600 hover:underline">FDA</a>) may place a clinical hold (full or partial clinical hold) on an IND if the sponsor fails to provide sufficient information to assure product quality, safety, and scientific evidence on the proposed efficacy profile. 
                            </p>
                            
                            <h4 className="font-bold text-gray-900 pt-6 pb-2">The following are some of the obstacles encountered during the IND filing and IND approval process with the US FDA:</h4>
                            
                            <ul className="space-y-4 pt-2">
                                {[
                                    "Determine which regulations must be met to submit an IND application (e.g., Phase I, II, III).",
                                    "GMP/GLP compliance.",
                                    "Expert scientific understanding of the product to manage regulatory concerns (e.g., New Chemical Entities, Biologics, Radioactive Labelled Drugs, etc.).",
                                    "Clinical hold management and developing effective preventative measures.",
                                    "Filing an Investigational New Drug Application (IND) should run concurrently with planning all other coordination involved in conducting a clinical trial.",
                                    "Maintaining regulatory and federal compliance for an active IND (CMC amendments/protocol changes, safety reporting, annual reporting, etc.) and managing ongoing CMC changes/protocol changes."
                                ].map((item, idx) => (
                                    <li key={idx} className="flex items-start">
                                        <CheckCircle className="text-white fill-blue-500 w-5.5 h-5.5 mr-3 shrink-0 mt-0.5" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>

                            <div className="pt-6 border-t border-gray-100 mt-8">
                                <p className="font-semibold text-gray-900 text-lg">
                                    For IND and ANDA FDA Submissions/Applications, <Link to="/share-your-project" className="text-blue-600 hover:underline">Request for Quote (RFQ)</Link> now!
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* --- SECTION 2: E&E Expertise --- */}
                    <section className="bg-gray-50 p-8 md:p-12 rounded-xl border border-gray-200">
                        <div className="flex items-center mb-6">
                            <span className="w-8 h-1 bg-blue-500 mr-4 block shrink-0"></span>
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 tracking-tight">IND Submissions - E&E Medicals Expertise</h2>
                        </div>

                        <div className="text-gray-700 leading-relaxed text-[15px] md:text-base space-y-6">
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                                {[
                                    "Strategic guidance in determining the best regulatory strategy for a proposed clinical program(s) and Investigational New Drug (IND) application.",
                                    "Type A, Type B, and Type C meetings, as well as Biosimilar Biological Product Development (BPD) meetings, and all required regulatory support.",
                                    "Application for Fast Track Designation or Orphan Drug Designation.",
                                    "Clinical hold issues can be avoided by thoroughly comparing IND drug development data to current Federal Regulatory requirements for human testing (critical & major).",
                                    "During the IND process, we identified data deficiencies and clinical hold issues and needed expert advice on how to mitigate these issues in accordance with regulatory guidelines.",
                                    "Future Marketing Authorization Applications will benefit greatly from your in-depth familiarity with the NDA/BLA submission requirements and data correlations from the IND.",
                                    "Initial IND submission, IND amendments, safety reporting, and IND annual reports submission in the eCTD format for various medicinal products preparation, technical review, and submission of CMC, non-clinical, and clinical packages (new chemical entities, vaccines, biosimilars, and other biological products like tissue and gene therapy products, etc.).",
                                    "IND submission templates in the eCTD format.",
                                    "Original INDs and subsequent submissions are published and submitted via eCTD (IND annual reports, amendments, etc.).",
                                    "Planning, execution, and timely submission of a regulatory response to questions or data requests from the Food and Drug Administration in the United States.",
                                    "Help with the IND Approval Process and IND Deactivation / Activation and Consulting Services.",
                                    "US agent services."
                                ].map((item, idx) => (
                                    <li key={idx} className="flex items-start">
                                        <CheckCircle className="text-white fill-blue-500 w-5.5 h-5.5 mr-3 shrink-0 mt-0.5" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </section>

                </div>
            </main>

            <Footer />
        </div>
    );
};