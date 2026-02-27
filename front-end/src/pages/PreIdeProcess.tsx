import React from "react";
import { PageHeader } from "../components/shared/PageHeader";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Link } from "react-router-dom";

export const PreIdeProcess: React.FC = () => {
    return (
        <div className="w-full bg-white font-sans flex flex-col min-h-screen">
            <Header />

            <main className="grow pb-24">
                <PageHeader title="Pre-IDE Process" breadcrumb="Pre-IDE Process" />

                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 space-y-20">
                    {/* Hero Image */}
                    <div className="w-full">
                        <img
                            src="https://eemedicals.com/wp-content/uploads/2021/11/pre-ide-process-900x313.jpg"
                            alt="Pre-IDE Process FDA"
                            className="w-full h-auto object-cover rounded-md shadow-sm"
                        />
                    </div>

                    {/* --- SECTION 1: Pre-IDE Process Overview --- */}
                    <section>
                        <div className="flex items-center mb-8 md:mb-10">
                            <span className="w-10 md:w-12 h-1 bg-blue-500 mr-4 md:mr-6 block shrink-0"></span>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">Pre-IDE Process</h2>
                        </div>

                        <div className="text-gray-700 leading-relaxed text-[15px] md:text-base space-y-6">
                            <p>
                                An IDE is a regulatory submission that permits clinical investigation of devices. This investigation is exempt from
                                some regulatory requirements. The name “Investigational Device Exemption” stems from this description in 21 CFR 812.1:
                            </p>

                            <blockquote className="border-l-4 border-blue-500 pl-6 py-2 my-6 bg-gray-50 text-gray-800 italic rounded-r-lg">
                                “An approved investigational device exemption (IDE) permits a device that otherwise would be required to comply with a
                                performance standard or to have premarket approval to be shipped lawfully for the purpose of conducting investigations
                                of that device.”
                            </blockquote>

                            <p>
                                The purpose of an IDE is to encourage discovery and development of useful medical devices for human use, to the extent
                                consistent with the protection of the public health and safety and with ethical standards, while maintaining optimum
                                freedom for scientific investigators in their pursuit of that purpose.
                            </p>
                            <p>
                                FDA encourages medical device manufacturers to obtain further guidance before the submission of an IDE application.
                                This will be especially beneficial to new sponsors who had no previous contact with the agency or for sponsors
                                proposing to study new technologies or for new uses of existing technologies. Early interaction with the agency should
                                help to increase the sponsor’s understanding of FDA requirements, regulations, and guidance documents. It will allow
                                FDA personnel to familiarize themselves with the new technologies.
                            </p>
                        </div>
                    </section>

                    {/* --- SECTION 2: Pre-IDE Meeting --- */}
                    <section className="bg-[#0a1e3f] text-white p-8 md:p-12 rounded-xl">
                        <div className="flex items-center mb-6">
                            <span className="w-8 h-1 bg-blue-400 mr-4 block shrink-0"></span>
                            <h2 className="text-2xl font-bold tracking-tight">Pre-IDE Meeting</h2>
                        </div>

                        <div className="text-gray-300 leading-relaxed text-[15px] md:text-base space-y-6">
                            <p>
                                Our qualified team of experts will successfully prepare and submit{" "}
                                <a
                                    href="https://www.fda.gov/medical-devices/device-advice-comprehensive-regulatory-assistance/overview-device-regulation"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-300 hover:text-white underline transition-colors"
                                >
                                    FDA
                                </a>{" "}
                                medical device regulatory, well-researched documentation to support your IDE Process application. We will also help
                                schedule a meeting to help you answer all your medical device development questions.
                            </p>

                            <div className="pt-4">
                                <Link
                                    to="/share-your-project"
                                    className="inline-block bg-blue-500 text-white font-bold py-3 px-8 rounded hover:bg-blue-400 transition-colors"
                                >
                                    Request for Quote (RFQ)
                                </Link>
                            </div>
                        </div>
                    </section>
                </div>
            </main>

            <Footer />
        </div>
    );
};
