import React from "react";
import { PageHeader } from "../components/shared/PageHeader";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Link } from "react-router-dom";

export const PostmarketCompliance: React.FC = () => {
    return (
        <div className="w-full bg-white font-sans flex flex-col min-h-screen">
            <Header />

            <main className="grow pb-24">
                <PageHeader 
                    title="Clinical data and postmarket compliance under the MDR" 
                    breadcrumb="Postmarket Compliance" 
                />

                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 space-y-20">
                    
                    {/* Hero Image */}
                    <div className="w-full">
                        <img 
                            src="https://eemedicals.com/wp-content/uploads/2021/11/postmarket-compliance-900x313.jpg" 
                            alt="Postmarket Compliance under MDR" 
                            className="w-full h-auto object-cover rounded-md shadow-sm"
                        />
                    </div>

                    {/* --- SECTION 1: Regulatory PMS Process --- */}
                    <section>
                        <div className="flex items-center mb-8 md:mb-10">
                            <span className="w-10 md:w-12 h-1 bg-blue-500 mr-4 md:mr-6 block shrink-0"></span>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">Regulatory Post Market Surveillance Process</h2>
                        </div>

                        <div className="text-gray-700 leading-relaxed text-[15px] md:text-base space-y-6">
                            <p>
                                It is called as medical device post-market surveillance (PMS), a system that provides continuous feedback about a device on the market. In order to high standard of product quality. PMS is a regulatory requirement in major markets like Europe and the United States. Purpose of <strong className="text-gray-900">PostMarket compliance</strong> is to ensure that the provisions of medical devices. Legislation are complied with devices are placed on the market put into service. It aims to ensure that compliant devices are removed from the market. Medical device manufacturers, Other firms involved in the distribution of devices. Must follow certain requirements regulations devices are on the market.
                            </p>
                            
                            <p>
                                To acquire this, we need a system of reporting in order that we are able to Gain feedback on our clinical devices. Which include reports of damaging events that involve them – we want publish-market surveillance (PMS). We additionally want to be reporting these events to the applicable regulatory bodies – they want to recognize that. We are taking the requisite steps to continuously enhance our commercial enterprise production practices to keep away from recurrent problems with our devices.
                            </p>
                            
                            <p>
                                Post-marketplace surveillance become mentioned in 2005 through the now-defunct Global Harmonization Task Force (GHTF). A voluntary group of representatives from medical device regulatory corporations the regulated enterprise. A record become produced through GHTF which defined the unique obligations wanted for post-marketplace surveillance within the industry. Discussed how the requirements for every mission could be harmonized throughout regulatory environments. This file became later updated with the aid of the International <Link to="/" className="text-blue-500 hover:text-blue-600 hover:underline">Medical Device Regulators</Link> Forum (IMDRF) to problematic reporting suggestions for unfavorable activities.
                            </p>
                        </div>
                    </section>

                    {/* --- SECTION 2: Why Choose E&E --- */}
                    <section className="bg-gray-50 p-8 md:p-12 rounded-lg border border-gray-100">
                        <div className="flex items-center mb-6">
                            <span className="w-8 h-1 bg-blue-500 mr-4 block shrink-0"></span>
                            <h2 className="text-2xl font-bold text-gray-900 tracking-tight">Why E & E Medicals and Consulting?</h2>
                        </div>

                        <div className="text-gray-700 leading-relaxed text-[15px] md:text-base">
                            <p>
                                Our post-market surveillance experts help in coordinating investigating customer Postmarket compliance to make an initial reporting decision. Ensure completeness consistency of complaint related documentation. We conduct detailed analysis reporting of post-marketing vigilance surveillance on medical devices in the market.
                            </p>
                        </div>
                    </section>

                </div>
            </main>

            <Footer />
        </div>
    );
};