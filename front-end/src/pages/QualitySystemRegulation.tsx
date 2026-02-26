import React from "react";
import { PageHeader } from "../components/shared/PageHeader";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

export const QualitySystemRegulation: React.FC = () => {
    return (
        <div className="w-full bg-white font-sans flex flex-col min-h-screen">
            <Header />

            <main className="grow pb-24">
                <PageHeader title="Quality System Regulation (QMSR)" breadcrumb="Quality System Regulation (QMSR)" />

                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 space-y-20">
                    {/* Hero Image */}
                    <div className="w-full">
                        <img
                            src="https://eemedicals.com/wp-content/uploads/2021/11/qsr-min-900x313.jpeg"
                            alt="Quality System Regulation"
                            className="w-full h-auto object-cover rounded-md shadow-sm"
                        />
                    </div>

                    {/* --- SECTION 1: QMSR Overview --- */}
                    <section>
                        <div className="flex items-center mb-8 md:mb-10">
                            <span className="w-10 md:w-12 h-1 bg-blue-500 mr-4 md:mr-6 block shrink-0"></span>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
                                Quality Management System Regulation (QMSR)
                            </h2>
                        </div>

                        <div className="text-gray-700 leading-relaxed text-[15px] md:text-base space-y-8">
                            <p>
                                The Quality Management System Regulation (QMSR) refers to the U.S. The FDA’s new rules for medical device makers (21
                                CFR Part 820) now include the international standard ISO 13485 and replace the old Quality System Regulation (QSR).
                                The QMSR mandates a unified quality system that blends ISO 13485’s global best practices with specific FDA
                                requirements, focusing on ensuring device safety and effectiveness through robust processes such as design controls,
                                supplier management, and post-market surveillance, thereby enabling greater global harmonization.
                            </p>

                            <div>
                                <h3 className="text-xl font-bold text-gray-900 mb-4">Key Aspects of the FDA QMSR</h3>
                                <ul className="space-y-4">
                                    <li className="flex items-start">
                                        <CheckCircle className="text-white fill-blue-500 w-5.5 h-5.5 mr-3 shrink-0 mt-0.5" />
                                        <span>
                                            <strong className="text-gray-900 font-semibold">Integration with ISO 13485:</strong> The FDA largely
                                            adopted ISO 13485:2016 (Medical devices—Quality management systems—Requirements for regulatory purposes),
                                            which serves as the foundation for medical device quality.
                                        </span>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle className="text-white fill-blue-500 w-5.5 h-5.5 mr-3 shrink-0 mt-0.5" />
                                        <span>
                                            <strong className="text-gray-900 font-semibold">Harmonization:</strong> This update aims to align U.S.
                                            standards with those of other countries. regulations with international standards, reducing duplication
                                            for global manufacturers.
                                        </span>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle className="text-white fill-blue-500 w-5.5 h-5.5 mr-3 shrink-0 mt-0.5" />
                                        <span>
                                            <strong className="text-gray-900 font-semibold">Scope:</strong> It covers all aspects of a device’s
                                            lifecycle, from design and production to post-market activities.
                                        </span>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle className="text-white fill-blue-500 w-5.5 h-5.5 mr-3 shrink-0 mt-0.5" />
                                        <span>
                                            <strong className="text-gray-900 font-semibold">Key Requirements:</strong> Includes documented procedures
                                            for quality audits, management review, corrective/preventive actions (CAPA), and robust device master
                                            records (DMRs).
                                        </span>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle className="text-white fill-blue-500 w-5.5 h-5.5 mr-3 shrink-0 mt-0.5" />
                                        <span>
                                            <strong className="text-gray-900 font-semibold">New Authorities:</strong> Grants the FDA increased
                                            inspection authority over records like management reviews and quality audits, which were previously less
                                            detailed in the older QSR.
                                        </span>
                                    </li>
                                </ul>
                            </div>

                            <p>
                                Adherence to the{" "}
                                <a
                                    href="https://en.wikipedia.org/wiki/Food_and_Drug_Administration"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-500 hover:text-blue-600 hover:underline"
                                >
                                    FDA’s
                                </a>{" "}
                                Quality Management System Regulation (QMSR) is the greatest challenge facing medical device and biotech manufacturers.
                                The scope of QMSR is large, and non-compliance is not an option. As a result,{" "}
                                <Link to="/" className="text-blue-500 hover:text-blue-600 hover:underline">
                                    E & E Medicals and Consulting
                                </Link>{" "}
                                help companies meet the needs of those responsible for compliance, regulatory affairs, project planning, design and
                                development, technology transfer, R&D, QA, and manufacturing in a QMSR environment. Our clients have gained a
                                comprehensive understanding of all components of the QMSR, including design controls, process validation, corrective
                                and preventive action plans (CAPA), document control systems, process and design validation, and risk management.
                            </p>
                        </div>
                    </section>
                </div>
            </main>

            <Footer />
        </div>
    );
};
