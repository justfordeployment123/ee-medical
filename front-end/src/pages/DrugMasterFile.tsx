import React from "react";
import { PageHeader } from "../components/shared/PageHeader";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

export const DrugMasterFile: React.FC = () => {
    return (
        <div className="w-full bg-white font-sans flex flex-col min-h-screen">
            <Header />

            <main className="grow pb-24">
                <PageHeader title="Drug Master File (DMF) Submissions" breadcrumb="DMF Submissions" />

                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 space-y-20">
                    {/* --- SECTION 1: Overview --- */}
                    <section>
                        <div className="flex items-center mb-8 md:mb-10">
                            <span className="w-10 md:w-12 h-1 bg-blue-500 mr-4 md:mr-6 block shrink-0"></span>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">FDA DMF Overview</h2>
                        </div>

                        <div className="text-gray-700 leading-relaxed text-[15px] md:text-base space-y-6">
                            <p>
                                The US Food and Drug Administration (FDA) neither requires nor discourages the submission of Drug Master Files (DMFs).
                                Manufacturers and DMF holders must submit separate DMFs for drug substances, excipients, and packaging materials to
                                ensure patient privacy.
                            </p>
                            <p>
                                DMF holders are responsible for ensuring that their DMF satisfies all FDA requirements, including those pertaining to
                                the Generic Drug User Fee Act (GDUFA) II and the Initial Completeness Assessment (ICA). The DMF application must be
                                approved so that the DMF holder can issue a Letter of Access for access to other applications, such as an IND, NDA, or
                                ANDA.
                            </p>
                            <p>
                                The Regulatory team at <strong className="text-gray-900">E&E Medicals</strong> is highly qualified and dedicated to
                                their work in submitting FDA Drug Master Files (DMFs). Our staff has experience submitting and managing DMFs to the US
                                FDA for various drug components, including drug substances, excipients, and packaging materials.
                            </p>
                        </div>
                    </section>

                    {/* --- SECTION 2: Submission Strategy & Scope --- */}
                    <section className=" p-8 md:p-12 rounded-xl">
                        <div className="flex items-center mb-8">
                            <span className="w-8 h-1 bg-blue-500 mr-4 block shrink-0"></span>
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 tracking-tight">Submission Strategy & Expertise</h2>
                        </div>
                        <p className="text-gray-700 mb-8">
                            We provide submission strategy for various Drug Master Files to regulators, including but not limited to:
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                            {[
                                "Type II: Drug substance and intermediate",
                                "Type III: Packaging materials",
                                "Type IV: Excipient, colorant, flavor, or essence",
                                "Raw material identification & assessment",
                                "Active pharmaceutical ingredient (API) synthetic methods",
                                "Impurity limit specifications for APIs & precursors",
                                "Genotoxic and elemental impurities acceptable levels",
                                "Quality by Design (QbD) review assistance",
                                "Stability, process validation, and forced degradation studies",
                                "Production batch log reviews",
                                "Drug Substance GDUFA and ICA DMF Preparation",
                                "GDUFA fee requirements guidance",
                                "eCTD publication of US DMFs",
                                "Amendments and annual reports strategy",
                            ].map((item, idx) => (
                                <div key={idx} className="flex items-start">
                                    <CheckCircle className="text-white fill-blue-500 w-5 h-5 mr-3 shrink-0 mt-0.5" />
                                    <span className="text-gray-700 text-sm md:text-base">{item}</span>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* --- SECTION 3: Core DMF Services --- */}
                    <section>
                        <div className="flex items-center mb-8 md:mb-10">
                            <span className="w-10 md:w-12 h-1 bg-blue-500 mr-4 md:mr-6 block shrink-0"></span>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">Core Filing Capabilities</h2>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {["DMF Filing Expertise", "Creation of DMF Templates", "Full DMF Preparation", "API Submission & eCTD Publishing"].map(
                                (feature, idx) => (
                                    <div
                                        key={idx}
                                        className="bg-white border border-gray-100 shadow-sm p-6 rounded-lg text-center hover:shadow-md transition-shadow"
                                    >
                                        <h4 className="font-semibold text-gray-900">{feature}</h4>
                                    </div>
                                ),
                            )}
                        </div>

                        <div className="mt-12 text-center">
                            <p className="font-medium text-gray-900">
                                Need help with your DMF?{" "}
                                <Link to="/contact" className="text-blue-600 hover:underline">
                                    Request a Quote (RFQ)
                                </Link>
                            </p>
                        </div>
                    </section>
                </div>
            </main>

            <Footer />
        </div>
    );
};
