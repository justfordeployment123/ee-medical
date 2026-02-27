import React from "react";
import { PageHeader } from "../components/shared/PageHeader";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

export const FdaEstablishmentRegistration: React.FC = () => {
    return (
        <div className="w-full bg-white font-sans flex flex-col min-h-screen">
            <Header />

            <main className="grow pb-24">
                <PageHeader title="US FDA Establishment Medical Device | An Overview" breadcrumb="FDA Establishment Registration" />

                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 space-y-20">
                    {/* Hero Image */}
                    <div className="w-full max-w-4xl mx-auto">
                        <img
                            src="https://eemedicals.com/wp-content/uploads/2021/11/fda-registered.png"
                            alt="FDA Establishment Registration"
                            className="w-full h-auto object-cover rounded-md shadow-sm border border-gray-100"
                        />
                    </div>

                    {/* --- SECTION 1: Registration Overview --- */}
                    <section>
                        <div className="flex items-center mb-8 md:mb-10">
                            <span className="w-10 md:w-12 h-1 bg-blue-500 mr-4 md:mr-6 block shrink-0"></span>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">FDA Establishment Registration</h2>
                        </div>

                        <div className="text-gray-700 leading-relaxed text-[15px] md:text-base space-y-6">
                            <p>
                                FDA Establishment that produces and markets medical devices in the United States has to follow a registration process
                                with the FDA called “Establishment registration” within 30 days of commercialization of the medical device. E & E
                                Medicals and Consulting is a US FDA Agent with consultants supporting manufactures & distributors during the online{" "}
                                <strong className="text-gray-900">FDA Establishment Registration</strong> and listing process.
                            </p>
                            <p>
                                The Food and Drug Administration of the United States (US FDA) protects public health by ensuring the safety,
                                efficacy, and security of Food Supply, Drugs, and Biological(s). Hence, business owners and operators (Establishments
                                Registration or Facilities) within the ranks for these industries must REGISTER their facilities with the US FDA.
                            </p>
                            <p>
                                The US FDA process varies dependent on the type of product in the U.S. Registration and listing provide the FDA with
                                the location of medical device establishments and the devices manufactured at those establishments.
                            </p>
                        </div>
                    </section>

                    {/* --- SECTION 2: Medical Device --- */}
                    <section>
                        <div className="flex items-center mb-8 md:mb-10">
                            <span className="w-10 md:w-12 h-1 bg-blue-500 mr-4 md:mr-6 block shrink-0"></span>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
                                Medical Device - Establishment Registration
                            </h2>
                        </div>

                        <div className="text-gray-700 leading-relaxed text-[15px] md:text-base space-y-6">
                            <p>
                                Facility Business owners operators of the medical device industry are involved in the manufacture distribution of
                                medical devices. Intended for use in the United States are required to complete annual Registration. The CFR 807
                                section requires that the listing of those devices. Only those devices exempted from PMA 510k clearance could be
                                direct with the FDA. E & E Medicals Consulting helps to define medical device establishment requirements.
                            </p>
                            <p>
                                Owners or operators of places of business (additionally known as institutions centers) worried about the production
                                and allotment medical devices meant for use within the United States (U.S.) are required to register yearly with the
                                FDA. This manner is known as established order registration. The drug institutions’ registration web page is an e-book
                                of currently registered institutions that manufacture, prepare, propagate, compound, or system drugs within the U.S.
                            </p>
                        </div>
                    </section>

                    {/* --- SECTION 3: Drug & Cosmetic --- */}
                    <section className="bg-gray-50 p-8 md:p-12 rounded-xl border border-gray-200">
                        <div className="flex items-center mb-8">
                            <span className="w-8 h-1 bg-blue-500 mr-4 block shrink-0"></span>
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 tracking-tight">
                                FDA Drug & Cosmetic Establishment Registration
                            </h2>
                        </div>

                        <div className="text-gray-700 leading-relaxed text-[15px] md:text-base space-y-6">
                            <p>E & E Medicals and Consulting provides the following services to pharmaceutical companies.</p>

                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                                {[
                                    "GMP Consultancy for pharmaceuticals",
                                    "Pre-audit inspection",
                                    "Assist in responding to 483 letters",
                                    "Establishment registration",
                                    "Drug listing",
                                ].map((item, idx) => (
                                    <li key={idx} className="flex items-start">
                                        <CheckCircle className="text-white fill-blue-500 w-5.5 h-5.5 mr-3 shrink-0 mt-0.5" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>

                            <div className="pt-6 border-t border-gray-200 mt-6">
                                <p className="font-semibold text-gray-900">
                                    For more details, submit your details at{" "}
                                    <Link to="/share-your-project" className="text-blue-600 hover:underline">
                                        Medical Device Registration
                                    </Link>
                                    .
                                </p>
                            </div>
                        </div>
                    </section>
                </div>
            </main>

            <Footer />
        </div>
    );
};
