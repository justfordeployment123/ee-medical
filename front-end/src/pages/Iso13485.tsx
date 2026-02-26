import React from "react";
import { PageHeader } from "../components/shared/PageHeader";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Link } from "react-router-dom";

export const Iso13485: React.FC = () => {
    return (
        <div className="w-full bg-white font-sans flex flex-col min-h-screen">
            <Header />

            <main className="grow pb-24">
                <PageHeader 
                    title="ISO 13485 Medical Quality System Registration for medical devices" 
                    breadcrumb="ISO 13485 Medical Quality System Registration" 
                />

                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 space-y-20">
                    
                    {/* Hero Image */}
                    <div className="w-full">
                        <img 
                            src="https://eemedicals.com/wp-content/uploads/2021/11/iso-13485-900x313.jpg" 
                            alt="ISO 13485 Medical Quality System Registration" 
                            className="w-full h-auto object-cover rounded-md shadow-sm"
                        />
                    </div>

                    {/* --- SECTION 1: ISO 13485 Overview --- */}
                    <section>
                        <div className="flex items-center mb-8 md:mb-10">
                            <span className="w-10 md:w-12 h-1 bg-blue-500 mr-4 md:mr-6 block shrink-0"></span>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">ISO 13485 Medical Quality System Registration</h2>
                        </div>

                        <div className="text-gray-700 leading-relaxed text-[15px] md:text-base space-y-6">
                            <p>
                                ISO 13485 medical quality system registration is an international standard adapted to meet the medical device industry’s requirements, and it addresses most FDA requirements (21CFR820). The main difference between ISO 9001 and ISO 13485 is that ISO 13485 is more focused on ensuring medical devices safety and efficacy rather than enhancing customer satisfaction and continual improvement.
                            </p>
                        </div>
                    </section>

                    {/* --- SECTION 2: Why Appoint E&E --- */}
                    <section>
                        <div className="flex items-center mb-8 md:mb-10">
                            <span className="w-10 md:w-12 h-1 bg-blue-500 mr-4 md:mr-6 block shrink-0"></span>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">Appointing E&E Medicals as ISO Consultant</h2>
                        </div>

                        <div className="text-gray-700 leading-relaxed text-[15px] md:text-base space-y-6">
                            <p>
                                E & E Medicals and Consulting practices are based on assisting small, medium and large companies in the healthcare industry. All facilities that engage in the production, packaging and distribution of medical products need QMS for ISO 13485 certification.
                            </p>
                            <p>
                                Achieving this objective needs your team to work with a competent ISO 13485 consultant. Our consultants provide detailed techniques on standards intent as ISO 13485 compliant Quality Management System (QMS) is implemented while creating confidence in end users, government, statutory and regulatory agencies with answers to all questions from Regulatory and Certification body auditors.
                            </p>
                        </div>
                    </section>

                    {/* --- SECTION 3: MDSAP --- */}
                    <section>
                        <div className="flex items-center mb-8 md:mb-10">
                            <span className="w-10 md:w-12 h-1 bg-blue-500 mr-4 md:mr-6 block shrink-0"></span>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">Medical Device Single Audit Program</h2>
                        </div>

                        <div className="text-gray-700 leading-relaxed text-[15px] md:text-base space-y-6">
                            <p>
                                The Medical Device Single Audit Program, commonly called MDSAP, is based on the principles of <strong className="text-gray-900">ISO 13485 medical quality system registration</strong> which remain a part of the audit requirements. Within the framework of the MDSAP, the quality management system of organizations can be audited for potentially five different markets (Canada, USA, Japan, Australia, and Brazil). It is important to know that, at a minimum, the provisions of ISO 13485 will be included in the audit criteria along with the relevant regulations for you to market your products in these countries.
                            </p>
                            
                            <div className="bg-gray-50 border-l-4 border-blue-500 p-6 rounded-r-lg my-8">
                                <p className="text-gray-800">
                                    Your organization will also meet most of the FDA requirements to have a Quality System in compliance with the QSRs set forth by 21CFR820.
                                </p>
                            </div>

                            <p>
                                All Medical Device finished products and component manufactures, including Software and Medical Device Developers, have to meet ISO 13485 Certification requirements. ISO 13485 Certificate will be issued by an accredited third-party if you comply with the Medical Device Quality Management System.
                            </p>
                            
                            <p>
                                E & E Medicals and Consulting will assist in the training, documentation, implementation, internal audit, and other related services to ensure full compliance with the EN ISO 13485 medical quality system registration standard.
                            </p>

                            <p className="font-semibold text-gray-900 pt-6">
                                Click here to <Link to="#" className="text-blue-500 hover:text-blue-600 hover:underline">find out your level of compliance with ISO 13485</Link>.
                            </p>
                        </div>
                    </section>

                </div>
            </main>

            <Footer />
        </div>
    );
};