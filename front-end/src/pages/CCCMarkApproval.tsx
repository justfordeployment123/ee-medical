import React from "react";
import { PageHeader } from "../components/shared/PageHeader";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { CheckCircle } from "lucide-react";

export const CCCMarkApproval: React.FC = () => {
    return (
        <div className="w-full bg-white font-sans flex flex-col min-h-screen">
            <Header />

            <main className="grow pb-24">
                <PageHeader 
                    title="Is CCC Mark Approval necessary for Medical Devices and IVD?" 
                    breadcrumb="CCC Mark Approval" 
                />

                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 space-y-20">
                    
                    {/* Hero Image */}
                    <div className="w-full max-w-4xl mx-auto">
                        <img 
                            src="https://eemedicals.com/wp-content/uploads/2021/11/ccc-mark-approval.jpg" 
                            alt="CCC Mark Approval for China" 
                            className="w-full h-auto object-cover rounded-md shadow-sm"
                        />
                    </div>

                    {/* --- SECTION 1: What is CCC --- */}
                    <section>
                        <div className="flex items-center mb-8 md:mb-10">
                            <span className="w-10 md:w-12 h-1 bg-blue-500 mr-4 md:mr-6 block shrink-0"></span>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">China Compulsory Certification (CCC)</h2>
                        </div>

                        <div className="text-gray-700 leading-relaxed text-[15px] md:text-base space-y-6">
                            <p>
                                The CCC mark is the new compulsory Safety & Quality mark for many products sold on the Chinese market. CCC Mark Approval became effective on May 1, 2002. It is the result of the recent integration of China’s two compulsory inspection systems (One to check contents of products for import and export, and the other for quality control) into a single procedure.
                            </p>
                            <p>
                                The new <strong className="text-gray-900">CCC mark approval</strong> replaces the two old marks, namely <strong className="text-gray-900">CCIB</strong> and <strong className="text-gray-900">CCEE</strong> used in the two old inspection systems.
                            </p>
                            <p>
                                The Challenging process of Medical device registration for the Chinese market makes it necessary to have a partner with Chinese market. Experience and expertise in providing insights into how to manage. And direct you through the regulatory process in China’s developing regulatory activities.
                            </p>
                        </div>
                    </section>

                    {/* --- SECTION 2: Registration --- */}
                    <section>
                        <div className="flex items-center mb-8 md:mb-10">
                            <span className="w-10 md:w-12 h-1 bg-blue-500 mr-4 md:mr-6 block shrink-0"></span>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">Registration - Medical Devices and IVD</h2>
                        </div>

                        <div className="text-gray-700 leading-relaxed text-[15px] md:text-base space-y-6">
                            <p>
                                The NMPA has consistent guidelines, reporting, and clinical data requirements in reviewing all applications and submissions.
                            </p>

                            <ul className="space-y-4 pt-2 pb-4">
                                <li className="flex items-start">
                                    <CheckCircle className="text-white fill-blue-500 w-5.5 h-5.5 mr-3 shrink-0 mt-0.5" />
                                    <span>Only registration filing without device test reports</span>
                                </li>
                                <li className="flex items-start">
                                    <CheckCircle className="text-white fill-blue-500 w-5.5 h-5.5 mr-3 shrink-0 mt-0.5" />
                                    <span>Complete registration filings including device test reports</span>
                                </li>
                            </ul>

                            <p>
                                China needs inland testing for most Class II and III devices, with very few exceptions. The conditions for testing vary depending on the type of device. E&E medicals and consulting will help you get your medical device and IVD’s regulatory approval into the Chinese market. Our experts work directly every day with the NMPA. Organize the submission of regulatory documents, and answer follow-up questions from the NMPA.
                            </p>
                        </div>
                    </section>

                    {/* --- SECTION 3: Why Choose E&E --- */}
                    <section className="bg-gray-50 p-8 md:p-12 rounded-lg border border-gray-100">
                        <div className="flex items-center mb-6">
                            <span className="w-8 h-1 bg-blue-500 mr-4 block shrink-0"></span>
                            <h2 className="text-2xl font-bold text-gray-900 tracking-tight">Why choose E & E Medicals and Consulting?</h2>
                        </div>

                        <div className="text-gray-700 leading-relaxed text-[15px] md:text-base">
                            <p>
                                The Challenging process of Medical device registration for the Chinese market. Makes it necessary to have a partner with Chinese market experience and expertise in providing insights into how to manage. And direct you through the regulatory process in China’s developing regulatory activities. Carry out all applicable tests to determine the appropriate measures to meet with <strong className="text-gray-900">CCC</strong> certification mark regulations.
                            </p>
                        </div>
                    </section>

                </div>
            </main>

            <Footer />
        </div>
    );
};