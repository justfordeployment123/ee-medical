import React from "react";
import { PageHeader } from "../components/shared/PageHeader";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { CheckCircle } from "lucide-react";

export const AndaApplication: React.FC = () => {
    return (
        <div className="w-full bg-white font-sans flex flex-col min-h-screen">
            <Header />

            <main className="grow pb-24">
                <PageHeader 
                    title="Abbreviated New Drug Application (ANDA) Submissions – Overview" 
                    breadcrumb="Abbreviated New Drug Application (ANDA)" 
                />

                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 space-y-20">
                    
                    {/* --- SECTION 1: ANDA Overview --- */}
                    <section>
                        <div className="flex items-center mb-8 md:mb-10">
                            <span className="w-10 md:w-12 h-1 bg-blue-500 mr-4 md:mr-6 block shrink-0"></span>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">Abbreviated New Drug Application (ANDA)</h2>
                        </div>

                        <div className="text-gray-700 leading-relaxed text-[15px] md:text-base space-y-6">
                            <p>
                                The Abbreviated New Drug Application (ANDA) is the pharmaceutical industry’s entry point for generic medicines to demonstrate their therapeutic equivalence to innovator/branded drugs in terms of quality, safety, and efficacy, making them a more affordable option. US officials are aware of the potential of the generic medicines market, so they push for the growth of generic manufacturers by facilitating the registration of ANDAs through the 505(j) route.
                            </p>
                            
                            <p>
                                Generic drug applications must go through the ANDA application and ANDA Regulatory approval processes. Nonetheless, it is difficult for manufacturers to decipher the guidelines and adhere to specific requirements like product development using a QbD approach, Module 2 in QBR format, and the implementation of the GDUFA program, all of which are mandated by the US FDA as part of ANDA submissions. Manufacturers must include Regulatory Affairs professionals in the initial stages of product development to ensure smoother registration, faster approval, better life cycle management, and an easier ANDA filing process.
                            </p>

                            <span className="block my-10 w-full max-w-2xl mx-auto text-center italic text-sm text-gray-500">
                                
                            </span>

                            <p>
                                Regarding timely, low-cost, and RTR (Refuse-to-Receive) compliant submissions and approvals, E&E Medicals is the dependable Regulatory partner you need. An ANDA application reviewed by the US FDA can be sped up with the help of E&E Medicals. E&E Medicals helps you find the fastest and safest way to get your products to market so that you can achieve your business goals by thoroughly understanding the ANDA submission requirements and a comprehensive risk management approach.
                            </p>
                        </div>
                    </section>

                    {/* --- SECTION 2: ANDA Submissions Expertise --- */}
                    <section className="bg-gray-50 text-gray-900 p-8 md:p-12 rounded-xl">
                        <div className="flex items-center mb-6">
                            <span className="w-8 h-1 bg-blue-400 mr-4 block shrink-0"></span>
                            <h2 className="text-2xl md:text-3xl font-bold tracking-tight">ANDA Submissions</h2>
                        </div>

                        <div className="text-gray-700 leading-relaxed text-[15px] md:text-base space-y-6">
                            <p>
                                Strategic assistance with ANDA submission roadmaps, ANDA filing process, and ANDA submission-related document generation. The following are some of the things E&E Medicals can do regarding ANDA submissions:
                            </p>

                            <ul className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-6 pt-4">
                                {[
                                    "Regulatory consultation during product development and manufacturing for RLD/Reference Standard selection, API/in-process control/finished product specification review, process validation protocol/report generation, stability study generation, IIG database compliance generation, Q1/Q2 compliance generation for parenteral, optics, and ophthalmic, and batch size guidance.",
                                    "Advice on minimizing potential risks when submitting an ANDA and any necessary preparation work.",
                                    "Pre-submission discussions with the FDA and guidance through the submission process with control correspondence before submission.",
                                    "Pre-submission paperwork like finding the right facility and requesting DUNS/FEI/ANDA Application numbers.",
                                    "The checklist for submitting an ANDA document is shared.",
                                    "Source data generation followed by a gap analysis and regulatory assessment to determine regulatory sufficiency.",
                                    "Advice on how to make up for the lack of required paperwork to comply with the Refuse to Receive (RTR) and the GDUFA.",
                                    "Prescription drug listing, facility listing, and renewals all require an SPL submission.",
                                    "Preparation, publication, and submission of a high-quality ANDA package in eCTD format through the FDA Electronic Submissions Gateway.",
                                    "Discussions and updates with the US Food and Drug Administration regarding ANDA regulatory approval.",
                                    "Help in handling urgent RTR (Refuse-to-Receive) problems.",
                                    "ANDA approval process regulatory planning and response planning for IRs, DRLs, and CRLs."
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