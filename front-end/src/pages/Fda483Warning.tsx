import React from "react";
import { PageHeader } from "../components/shared/PageHeader";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

export const Fda483Warning: React.FC = () => {
    return (
        <div className="w-full bg-white font-sans flex flex-col min-h-screen">
            <Header />

            <main className="grow pb-24">
                <PageHeader 
                    title="FDA 483 Warning Letters / Recalls and Remediation" 
                    breadcrumb="FDA 483 Warning Letters" 
                />

                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 space-y-20">
                    
                    {/* Hero Image */}
                    <div className="w-full">
                        <img 
                            src="https://eemedicals.com/wp-content/uploads/2021/11/fda-483-900x313.jpg" 
                            alt="FDA 483 Warning Letter and Recalls" 
                            className="w-full h-auto object-cover rounded-md shadow-sm"
                        />
                    </div>

                    {/* --- SECTION 1: 483 Analysis --- */}
                    <section>
                        <div className="flex items-center mb-8 md:mb-10">
                            <span className="w-10 md:w-12 h-1 bg-blue-500 mr-4 md:mr-6 block shrink-0"></span>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">FDA Audit 483 Observations - US FDA Form 483 and Warning Letter Analysis</h2>
                        </div>

                        <div className="text-gray-700 leading-relaxed text-[15px] md:text-base space-y-6">
                            <p>
                                FDA form 483 is officially known as Notice of Inspectional Observations. Organizations that act in non-conformity or violate GMP regulation/quality system are issued the FDA 483 warning Letter(s) by FDA investigators. Responding to FDA 483 warning Letter(s) deserves caution. An action plan describing the specific timeframe of CAPA and implementation is extremely important. 
                            </p>
                            <p>
                                Medical device or IVD manufacturers will always want to avoid Form 483 or Warning Letter from the US Food and Drug Administration (FDA). Handling and responding to Form 483 is key in preventing a warning letter from the FDA. As part of our services, E & E Medicals and Consulting shall help in responding to FDA 483 Observations and FDA Warning Letter through the following steps:
                            </p>

                            <ul className="space-y-4 pt-4 pb-2">
                                <li className="flex items-start">
                                    <CheckCircle className="text-white fill-blue-500 w-5.5 h-5.5 mr-3 shrink-0 mt-0.5" />
                                    <span>Reviewing the 483 observations or warning letter</span>
                                </li>
                                <li className="flex items-start">
                                    <CheckCircle className="text-white fill-blue-500 w-5.5 h-5.5 mr-3 shrink-0 mt-0.5" />
                                    <span>Analyzing and identifying corrective actions</span>
                                </li>
                                <li className="flex items-start">
                                    <CheckCircle className="text-white fill-blue-500 w-5.5 h-5.5 mr-3 shrink-0 mt-0.5" />
                                    <span>Assisting in planning and implementing corrective actions</span>
                                </li>
                                <li className="flex items-start">
                                    <CheckCircle className="text-white fill-blue-500 w-5.5 h-5.5 mr-3 shrink-0 mt-0.5" />
                                    <span>Writing a professional 483 response within 15 business days</span>
                                </li>
                            </ul>
                        </div>
                    </section>

                    {/* --- SECTION 2: Remediation Strategy --- */}
                    <section>
                        <div className="flex items-center mb-8 md:mb-10 border-t border-gray-100 pt-16">
                            <span className="w-10 md:w-12 h-1 bg-blue-500 mr-4 md:mr-6 block shrink-0"></span>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">FDA Audit 483 Observations - Remediation Strategy</h2>
                        </div>

                        <div className="text-gray-700 leading-relaxed text-[15px] md:text-base space-y-6">
                            <div className="float-right ml-8 mb-6 w-full max-w-sm lg:max-w-md hidden md:block">
                                <img 
                                    src="https://eemedicals.com/wp-content/uploads/2021/11/fda-483-audits-768x268.jpg" 
                                    alt="FDA 483 Warning Letter Remediation" 
                                    className="w-full h-auto object-cover rounded shadow-sm"
                                />
                            </div>
                            
                            <p>
                                A Warning Letter typically discusses a small part of the real quality system deficiencies. Through our FDA Compliance Remediation Program, E & E Medicals and Consulting will help determine the real depth and breadth in product and process deficiencies. This involves performing systematic audits and developing a compliance plan (a remediation program) for achieving quality assurances of FDA GMP within the company. 
                            </p>
                            
                            {/* Mobile only image */}
                            <div className="w-full my-6 md:hidden">
                                <img 
                                    src="https://eemedicals.com/wp-content/uploads/2021/11/fda-483-audits-768x268.jpg" 
                                    alt="FDA 483 Warning Letter Remediation" 
                                    className="w-full h-auto object-cover rounded shadow-sm"
                                />
                            </div>

                            <p>
                                The Plan requires remediation, which includes the renovation of the quality system to meet FDA’s expectation. Our consultants can serve as Project Leads, Subject Matter Experts, Advisors, and Trainers. <Link to="/" className="text-blue-500 hover:text-blue-600 hover:underline">E & E Medicals</Link> and Consulting provide the resources to create the needed strategies, supervise, and manage the remediation.
                            </p>
                            <p>
                                You’ll be working with our Quality, Compliance, and Remediation practice – a practice which assists our clients in solving severe compliance problems. Combining strategic thinking with practicality, our advisory teams and consultants work to develop and execute organizational approaches to address the most regulatory issues of our customers.
                            </p>
                            <div className="clear-both"></div>
                        </div>
                    </section>

                    {/* --- SECTION 3: Product Recalls --- */}
                    <section className="bg-gray-50 p-8 md:p-12 rounded-lg border border-gray-100">
                        <div className="flex items-center mb-6">
                            <span className="w-8 h-1 bg-blue-500 mr-4 block shrink-0"></span>
                            <h2 className="text-2xl font-bold text-gray-900 tracking-tight">Product Recalls and Market Withdrawal</h2>
                        </div>

                        <div className="text-gray-700 leading-relaxed text-[15px] md:text-base space-y-6">
                            <p>
                                Many medical device manufacturers risk product corrections and removals (Recalls). These recalls have an impact on the brand and leave the patients at risk. Poorly managed recall procedures can result in devastating consequences with the FDA. E & E Medicals and Consulting offer a recall consulting service that will resolve your recall problems promptly in the following ways:
                            </p>

                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                                <li className="flex items-start">
                                    <CheckCircle className="text-white fill-blue-500 w-5.5 h-5.5 mr-3 shrink-0 mt-0.5" />
                                    <span>Timely and adequately notifying FDA, distributors, and customers of the recall</span>
                                </li>
                                <li className="flex items-start">
                                    <CheckCircle className="text-white fill-blue-500 w-5.5 h-5.5 mr-3 shrink-0 mt-0.5" />
                                    <span>Develop compliant documentation from opening, tracking and closing the recall</span>
                                </li>
                                <li className="flex items-start">
                                    <CheckCircle className="text-white fill-blue-500 w-5.5 h-5.5 mr-3 shrink-0 mt-0.5" />
                                    <span>Providing updates to FDA regarding the recall</span>
                                </li>
                                <li className="flex items-start">
                                    <CheckCircle className="text-white fill-blue-500 w-5.5 h-5.5 mr-3 shrink-0 mt-0.5" />
                                    <span>Performing effectiveness checks that will lead to recall the closure</span>
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