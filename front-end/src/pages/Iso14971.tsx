import React from "react";
import { PageHeader } from "../components/shared/PageHeader";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Link } from "react-router-dom";

export const Iso14971: React.FC = () => {
    return (
        <div className="w-full bg-white font-sans flex flex-col min-h-screen">
            <Header />

            <main className="grow pb-24">
                <PageHeader 
                    title="ISO 14971 medical device risk management for medical devices" 
                    breadcrumb="ISO 14971 medical device risk management" 
                />

                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 space-y-20">
                    
                    {/* Hero Image */}
                    <div className="w-full">
                        <img 
                            src="https://eemedicals.com/wp-content/uploads/2021/11/qsr-min-900x313.jpeg" 
                            alt="ISO 14971 Risk Management" 
                            className="w-full h-auto object-cover rounded-md shadow-sm"
                        />
                    </div>

                    {/* --- SECTION 1: ISO 14971 Overview --- */}
                    <section>
                        <div className="flex items-center mb-8 md:mb-10">
                            <span className="w-10 md:w-12 h-1 bg-blue-500 mr-4 md:mr-6 block shrink-0"></span>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">ISO 14971 Medical Device Risk Management Expert</h2>
                        </div>

                        <div className="text-gray-700 leading-relaxed text-[15px] md:text-base space-y-6">
                            <p>
                                ISO 14971 compliance helps medical device manufacturers introduce safe medical devices into the marketplace by evaluating and controlling the risks associated with a medical device, and by evaluating a device’s interactions with other devices. 
                            </p>
                            <p>
                                As the only international standard for risk management for medical devices, <strong className="text-gray-900">ISO 14971 medical device risk management</strong> expert has become an integral element for satisfying regulatory requirements in most major markets and should be incorporated into the medical device life cycle.
                            </p>
                            
                            {/* Visual Aid Placeholder */}
                            <span className="block my-8 w-full max-w-2xl mx-auto text-center">
                                [Image diagram of the ISO 14971 Risk Management Life Cycle]
                            </span>
                        </div>
                    </section>

                    {/* --- SECTION 2: Implementation Service --- */}
                    <section>
                        <div className="flex items-center mb-8 md:mb-10">
                            <span className="w-10 md:w-12 h-1 bg-blue-500 mr-4 md:mr-6 block shrink-0"></span>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">ISO 14971 Medical Devices Risk Management Implementation Service</h2>
                        </div>

                        <div className="text-gray-700 leading-relaxed text-[15px] md:text-base space-y-6">
                            <p>
                                <Link to="/" className="text-blue-500 hover:text-blue-600 hover:underline">E & E Medicals</Link> and Consulting will assist you with ISO 14971 medical device implementation service that follows a 5-step methodology:
                            </p>

                            {/* Using a styled numbered list for the 5-step methodology to make it stand out */}
                            <ol className="list-decimal pl-6 space-y-3 font-medium text-gray-900 mb-6">
                                <li>Gap assessment</li>
                                <li>Quality management system upgrade</li>
                                <li>Training</li>
                                <li>Internal audit</li>
                                <li>Certification audit</li>
                            </ol>

                            <p>
                                This can be integrated into an ISO 13485 certification program, or added to an existing ISO 13485 certification. We will provide and generate all the required documentation to meet the requirements of the standard.
                            </p>
                        </div>
                    </section>

                </div>
            </main>

            <Footer />
        </div>
    );
};