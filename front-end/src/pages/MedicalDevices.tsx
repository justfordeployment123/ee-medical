import React from "react";
import { PageHeader } from "../components/shared/PageHeader";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Link } from "react-router-dom";

export const MedicalDevices: React.FC = () => {
    return (
        <div className="w-full bg-white font-sans flex flex-col min-h-screen">
            {/* Global Navigation */}
            <Header />

            {/* Main Content wrapper */}
            <main className="grow pb-24">
                {/* Page Header */}
                <PageHeader title="Medical Devices" breadcrumb="Medical Devices" />

                {/* Main Content Container */}
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 space-y-20">
                    
                    {/* Hero Image */}
                    <div className="w-full">
                        <img 
                            src="https://eemedicals.com/wp-content/uploads/2021/11/medical-devices-quality-assurance.jpg" 
                            alt="Medical Devices Quality Assurance" 
                            className="w-full h-auto object-cover rounded-md shadow-sm"
                        />
                    </div>

                    {/* --- SECTION 1: Quality Assurance --- */}
                    <section>
                        <div className="flex items-center mb-8 md:mb-10">
                            <span className="w-10 md:w-12 h-1 bg-blue-500 mr-4 md:mr-6 block shrink-0"></span>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">Medical Devices Quality Assurance</h2>
                        </div>

                        <div className="text-gray-700 leading-relaxed text-[15px] md:text-base space-y-6">
                            <p>
                                Most medical device companies understand the risks of developing and mass-producing their products. However, many of these companies are not aware how to combat these risks effectively and efficiently. It is possible to experience the peace of mind that comes with employing a trusted medical device.
                            </p>
                            
                            <p>
                                The <a href="https://en.wikipedia.org/wiki/Food_and_Drug_Administration" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-600 hover:underline">FDA’s</a> Quality System Regulation (21 CFR Part 820) requires medical device manufacturers to maintain a quality control & assurance system that uses a total quality approach to ensure product safety and effectiveness. The GMP requirements in QSR are harmonized with ISO 9001 and ISO 13485 because they are recognized worldwide as a stamp of quality.
                            </p>
                            
                            {/* Diagram for the FDA QSR framework */}
                            <span className="block my-8 w-full max-w-2xl mx-auto text-center">
                                
                            </span>

                            <p>
                                <Link to="/" className="text-blue-500 hover:text-blue-600 hover:underline">E & E Medicals</Link> and Consulting will help to prepare you very well with the ultimate goal of bringing your organization into compliance with FDA requirements. The FDA’s Quality System Regulation (21 CFR Part 820) and ISO 13485. We will also assist you in the various forms of implementation needed to meet with standards.
                            </p>
                        </div>
                    </section>
                </div>
            </main>

            {/* Global Footer */}
            <Footer />
        </div>
    );
};