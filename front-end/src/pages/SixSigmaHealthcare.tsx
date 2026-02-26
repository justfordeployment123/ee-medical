import React from "react";
import { PageHeader } from "../components/shared/PageHeader"; // Adjust import path as needed
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

export const SixSigmaHealthcare: React.FC = () => {
    return (
        <div className="w-full bg-white font-sans flex flex-col min-h-screen">
            {/* Global Navigation */}
            <Header />

            {/* Main Content wrapper */}
            <main className="grow pb-24">
                {/* Page Header */}
                <PageHeader title="Six Sigma – Healthcare" breadcrumb="Six Sigma – Healthcare" />

                {/* Main Content Container */}
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 space-y-20">
                    
                    {/* Hero Image */}
                    <div className="w-full">
                        <img 
                            src="https://eemedicals.com/wp-content/uploads/2021/11/six-sigma-healthcare-900x313.jpg" 
                            alt="Six Sigma Healthcare Professionals" 
                            className="w-full h-auto object-cover rounded-md shadow-sm"
                        />
                    </div>

                    {/* --- SECTION 1: What is Six Sigma? --- */}
                    <section>
                        <div className="flex items-center mb-8 md:mb-10">
                            <span className="w-10 md:w-12 h-1 bg-blue-500 mr-4 md:mr-6 block shrink-0"></span>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">What is Six Sigma?</h2>
                        </div>

                        <div className="text-gray-700 leading-relaxed text-[15px] md:text-base space-y-4">
                            <p>
                                Six Sigma is a process improvement initiative used to eliminate defects from processes. The goal is to create near perfection through continuous improvement that aligns the “voice of the process” with the “voice of the customer”. No more than 3.4 defects per one million opportunities (DPMO) is the goal of Six Sigma level of quality. 
                            </p>
                            <p>
                                Design for Six Sigma (DFSS) is a separate and emerging business-process management methodology related to traditional Six Sigma. While the tools and order used in Six Sigma require a process to be in place and functioning, DFSS has the objective of determining the customers and business needs, driving those needs into the product solution so created. DFSS is relevant to the complex system/product synthesis phase, especially in the context of unprecedented system development.
                            </p>
                        </div>
                    </section>

                    {/* --- SECTION 2: Why Six Sigma in Healthcare? --- */}
                    <section>
                        <div className="flex items-center mb-8 md:mb-10">
                            <span className="w-10 md:w-12 h-1 bg-blue-500 mr-4 md:mr-6 block shrink-0"></span>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">Why Six Sigma in Healthcare?</h2>
                        </div>

                        <div className="text-gray-700 leading-relaxed text-[15px] md:text-base">
                            <p>
                                The healthcare industry faces challenges in costs, patient protection, liability, and insurance rates. Currently, many hospitals are more mindful of the operating costs as the demands of quality patient care increases. The Six Sigma in healthcare approach can be used as a remedy for improving the quality of healthcare in hospitals and services. In healthcare, the Lean Six Sigma methodologies can be used to reduce defects which could result in medical errors. Medical accidents in the United States have led to over 400,000 deaths worldwide, costing an estimated $112.1 billion annually to the medical industry. Successfully implementing the Lean Six Sigma concepts could reduce accidents or falls in hospitals and nursing homes and drug administration mistakes, reduce the runoff time for test results, reduce the wait times in hospitals and private practitioners. All these improvements lead to high service quality, reduce operating costs, and better customer satisfaction.
                            </p>
                        </div>
                    </section>

                    {/* --- SECTION 3: Why choose E & E Medicals and Consulting? --- */}
                    <section>
                        <div className="flex items-center mb-8 md:mb-10">
                            <span className="w-10 md:w-12 h-1 bg-blue-500 mr-4 md:mr-6 block shrink-0"></span>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">Why choose E & E Medicals and Consulting?</h2>
                        </div>

                        <div className="text-gray-700 leading-relaxed text-[15px] md:text-base">
                            <p className="mb-4">
                                Given the difficulties of implementing Six Sigma in the medical sector, many healthcare facilities continue to use independent Six Sigma consultants to maximize satisfaction for patients.
                            </p>
                            <p className="mb-6">
                                <Link to="/" className="text-blue-500 hover:text-blue-600 hover:underline">
                                    E & E Medicals
                                </Link>{" "}
                                and consulting offer a very unique Six Sigma Healthcare program that is designed for the Healthcare industry. While much of the Lean Six Sigma methodologies are applicable to any process improvement program, there are certain unique qualities of the Healthcare environment that require a full understanding of what providers are currently facing. Six Sigma process is based on the DMAIC model – Define, Measure, Analyze, Improve, and Control. Although the methodology used for each organization is similar, we fully customize each application to meet the challenges of your individual business and disciplines. This results in product designs that consistently meet customer requirements, target costs, target release dates, and manufacturing requirements.
                            </p>
                            
                            <p className="mb-6 font-semibold text-gray-900">We will assist you in:</p>

                            <ul className="space-y-4">
                                {[
                                    "Identifying your core processes and key customers",
                                    "Identifying internal and external customer requirements",
                                    "Measuring your current performance",
                                    "Prioritizing, analyzing, and implementing improvement plans",
                                    "Expanding and integrating the Six Sigma in Healthcare",
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

            {/* Global Footer */}
            <Footer />
        </div>
    );
};