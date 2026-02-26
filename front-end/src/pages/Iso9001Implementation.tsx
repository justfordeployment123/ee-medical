import React from "react";
import { PageHeader } from "../components/shared/PageHeader";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

export const Iso9001Implementation: React.FC = () => {
    return (
        <div className="w-full bg-white font-sans flex flex-col min-h-screen">
            <Header />

            <main className="grow pb-24">
                <PageHeader
                    title="ISO 9001 Quality Management System Implementation"
                    breadcrumb="ISO 9001 Quality Management System Implementation"
                />

                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 space-y-20">
                    {/* Hero Image */}
                    <div className="w-full">
                        <img
                            src="https://eemedicals.com/wp-content/uploads/2021/11/quality-management-system-qms-implementation-900x313.jpeg"
                            alt="ISO 9001 Quality Management System Implementation"
                            className="w-full h-auto object-cover rounded-md shadow-sm"
                        />
                    </div>

                    {/* --- SECTION 1: Implementation Overview --- */}
                    <section>
                        <div className="flex items-center mb-8 md:mb-10">
                            <span className="w-10 md:w-12 h-1 bg-blue-500 mr-4 md:mr-6 block shrink-0"></span>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
                                ISO 9001 Quality Management System (QMS) Implementation
                            </h2>
                        </div>

                        <div className="text-gray-700 leading-relaxed text-[15px] md:text-base space-y-6">
                            <p>
                                E & E Medicals and Consulting’s quality management experts have been developing and implementing quality systems
                                including ISO 9001 quality management system in companies attempting their first products approved by the FDA. We help
                                in designing smart QMS that streamline business demands and increase practical time usage on quality management. E & E
                                Medicals and Consulting shall implement a complete 21 CFR 820 and ISO 13485:2016 quality management system. Depending
                                on the available resources, implementation could be paper-based or electronic-based.
                            </p>

                            <p className="font-semibold text-gray-900">
                                We shall help in developing Standard Operating Procedures (SOP) and documentation:
                            </p>

                            {/* SOP List Grid */}
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 pt-2">
                                {[
                                    "Production and Process Control",
                                    "Management Review",
                                    "Quality Manual",
                                    "Design, Purchasing, Document Control",
                                    "Device Master and Device History Records",
                                    "Internal Audits",
                                    "Complaint Handling",
                                    "Corrective and Preventive Actions (CAPA)",
                                    "Risk Management",
                                    "Storage and Distribution",
                                    "Personnel and Training",
                                ].map((item, index) => (
                                    <li key={index} className="flex items-start">
                                        <CheckCircle className="text-white fill-blue-500 w-5.5 h-5.5 mr-3 shrink-0 mt-0.5" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </section>

                    {/* --- SECTION 2: Why E&E Medicals --- */}
                    <section>
                        <div className="flex items-center mb-8 md:mb-10">
                            <span className="w-10 md:w-12 h-1 bg-blue-500 mr-4 md:mr-6 block shrink-0"></span>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">Why E & E Medicals and Consulting?</h2>
                        </div>

                        <div className="text-gray-700 leading-relaxed text-[15px] md:text-base space-y-6">
                            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg mb-8">
                                <p className="text-xl font-medium text-gray-900">
                                    We work with small companies and startups in achieving ISO Certification in a simple, affordable, and speedy
                                    process.
                                </p>
                            </div>

                            <p>
                                Our consultants help small businesses achieve ISO 9001 quality management system (QMS) certification and provide all
                                training tools that are necessary to sustain their certification. We walk companies through each stages of the ISO
                                certification process. We contribute immensely in developing quality manuals, process documentation, management
                                reviews, internal audits and training tools for our clients to be ISO 9001: 2015 certified. Understanding that ISO
                                9001 is the bases used as the quality management standard, we insist that most small businesses implement this system
                                so that continuous improvement within business processes and compliance can be met. The certification can be completed
                                within an adequate amount of time in just four simple phases, namely: Planning, Implementation, Review, and
                                Certification.
                            </p>

                            <p>ISO 9001 is achievable by small businesses with our expert consultants and our online training portal.</p>

                            <p className="font-semibold text-gray-900 pt-4">
                                Click here to{" "}
                                <Link to="#" className="text-blue-500 hover:text-blue-600 hover:underline">
                                    find out your level of compliance with ISO 9001
                                </Link>
                                .
                            </p>

                            <ul className="space-y-4 pt-2">
                                {[
                                    "Achieve ISO Certification with a dedicated, expert consultant guiding you from start to finish",
                                    "Available for multiple standards (ISO 9001, ISO 13485, ISO 14971)",
                                    "Online training and support options are available",
                                ].map((item, index) => (
                                    <li key={index} className="flex items-start">
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
