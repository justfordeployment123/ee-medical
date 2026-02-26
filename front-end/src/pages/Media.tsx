import React from "react";
import { PageHeader } from "../components/shared/PageHeader";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { ChevronRight, Search } from "lucide-react";
import { Link } from "react-router-dom";

// Define a type for the blog posts to keep the JSX clean
interface BlogPost {
    id: string;
    title: string;
    excerpt: string;
    link: string;
}

const blogPosts: BlogPost[] = [
    {
        id: "6509",
        title: "FDA NEWS",
        link: "#", // Replace with actual route when ready
        excerpt:
            "FDA NEWS  https://www.accessdata.fda.gov/scripts/cdrh/cfdocs/cfpmn/pmn.cfm 510(k) Premarket Notification – FDA  https://www.drugwatch.com/fda/510k-clearance/ FDA 510(k) Clearance – Dangerous Fast-Track Approval Process  https://www.greenlight.guru/glossary/510k-pma 510k vs PMA | Greenlight Guru  https://www.fda.gov/training-and-continuing-education/cdrh-learn/510k-program-transcript The 510(k) Program – Transcript | FDA  https://www.adctoday.com/faq/some-medical-devices-have-510k-number-what-and-do-adc-devices-have-510k-number Some medical devices have a 510(k) number. What is this and do …  https://www.fda.gov/medical-devices/device-approvals-denials-and-clearances/510k-clearances 510(k) Clearances | FDA  https://www.fda.gov/medical-devices/premarket-submissions/premarket-notification-510k Premarket Notification 510(k) | […]",
    },
    {
        id: "6463",
        title: "In Vitro Diagnostics EUA",
        link: "#",
        excerpt:
            "In Vitro Diagnostics EUA In vitro diagnostic (IVD) devices are tests performed on samples taken from the human body, such as swabs of mucus from inside the nose or back of the throat, or blood taken from a vein or fingerstick. IVDs can detect diseases or other conditions and can be used to monitor a person’s […]",
    },
    {
        id: "6462",
        title: "Coronavirus (COVID-19) Update: FDA prepares for resumption of domestic inspections with new risk assessment system",
        link: "#",
        excerpt:
            "Coronavirus (COVID-19) Update: FDA prepares for resumption of domestic inspections with new risk assessment system The U.S. Food and Drug Administration has been thoughtfully and deliberately determining the safest and most appropriate time to resume prioritized domestic inspections of FDA-regulated facilities and other associated activities since we first announced postponement in March. The White House Guidelines […]",
    },
    {
        id: "6461",
        title: "Adverse Event Reporting for Medical Devices Under Emergency Use Authorization (EUA) or Discussed in COVID-19-Related Guidance Documents",
        link: "#",
        excerpt:
            "Adverse Event Reporting for Medical Devices Under Emergency Use Authorization (EUA) or Discussed in COVID-19-Related Guidance Documents As a result of the Coronavirus Disease 2019 (COVID-19) pandemic and under the authority of section 564 of the Federal Food, Drug, and Cosmetic (FD&C) Act, the FDA has issued numerous Emergency Use Authorizations (EUAs) for medical devices intended to […]",
    },
    {
        id: "6460",
        title: "FDA continues to take steps to fulfill its commitment to strengthen and modernize the 510(k) medical device program",
        link: "#",
        excerpt:
            "FDA continues to take steps to fulfill its commitment to strengthen and modernize the 510(k) medical device program FDA publishes draft guidance documents to provide device-specific performance criteria for the Safety and Performance Based Pathway The U.S. Food and Drug Administration today announced that, as a first step toward implementation of the recently established Safety and […]",
    },
    {
        id: "6458",
        title: "FDA Enforces Policy for Ventilators and Accessories and Other Respiratory Devices During the Coronavirus Disease 2019 (COVID-19) Public Health Emergency",
        link: "#",
        excerpt:
            "FDA Enforces Policy for Ventilators and Accessories and Other Respiratory Devices During the Coronavirus Disease 2019 (COVID-19) Public Health Emergency Enforcement Policy for Ventilators and Accessories and Other Respiratory Devices During the Coronavirus Disease 2019 (COVID-19) Public Health Emergency",
    },
    {
        id: "6457",
        title: "U.S. Agents",
        link: "#",
        excerpt:
            "U.S. Agents Any foreign establishment engaged in the manufacture, preparation, propagation, compounding, or processing of a device imported into the United States must identify a United States agent (U.S. agent) for that establishment. Information about a foreign establishment’s U.S. Agent is submitted electronically using the FDA Unified Registration and Listing System (FURLS system) and is […]",
    },
    {
        id: "6456",
        title: "Serological Test Validation and Education Efforts",
        link: "#",
        excerpt: "Serological Test Validation and Education Efforts Serological Test Validation and Education Efforts",
    },
    {
        id: "6455",
        title: "Federal judge enters temporary injunction against Genesis II Church of Health and Healing, preventing sale of Chlorine Dioxide Products Equivalent to Industrial Bleach to Treat COVID-19",
        link: "#",
        excerpt:
            "Federal judge enters temporary injunction against Genesis II Church of Health and Healing, preventing sale of Chlorine Dioxide Products Equivalent to Industrial Bleach to Treat COVID-19 Federal judge enters temporary injunction against Genesis II Church of Health and Healing, preventing sale of Chlorine Dioxide Products Equivalent to Industrial Bleach to Treat COVID-19",
    },
    {
        id: "6450",
        title: "Device Registration and Listing",
        link: "#",
        excerpt:
            "Device Registration and Listing Owners or operators of places of business (also called establishments or facilities) that are involved in the production and distribution of medical devices intended for use in the United States (U.S.) are required to register annually with the FDA. This process is known as establishment registration (Title 21 CFR Part 807). […]",
    },
];

export const Media: React.FC = () => {
    return (
        <div className="w-full bg-gray-50 font-sans flex flex-col min-h-screen">
            <Header />

            <main className="grow pb-24">
                <PageHeader title="Media" breadcrumb="Media" />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
                    <div className="flex flex-col lg:flex-row gap-12">
                        {/* --- MAIN CONTENT AREA (Left Side) --- */}
                        <div className="lg:w-2/3 space-y-10">
                            {blogPosts.map((post) => (
                                <article
                                    key={post.id}
                                    className="bg-white p-8 md:p-10 shadow-sm border border-gray-100 rounded-lg hover:shadow-md transition-shadow"
                                >
                                    <h2 className="text-2xl font-bold text-gray-900 mb-4 hover:text-blue-600 transition-colors">
                                        <Link to={post.link}>{post.title}</Link>
                                    </h2>
                                    <p className="text-gray-600 mb-6 line-clamp-4 leading-relaxed">{post.excerpt}</p>
                                    <Link
                                        to={post.link}
                                        className="inline-flex items-center text-sm font-bold text-[#0a1e3f] hover:text-blue-600 transition-colors"
                                    >
                                        <ChevronRight size={16} className="mr-1" />
                                        Read More
                                    </Link>
                                </article>
                            ))}

                            {/* Pagination (Static representation based on your HTML) */}
                            <div className="flex items-center space-x-2 pt-8">
                                <span className="w-10 h-10 flex items-center justify-center bg-blue-600 text-white font-bold rounded">1</span>
                                <Link
                                    to="#"
                                    className="w-10 h-10 flex items-center justify-center bg-white text-gray-600 font-bold rounded border hover:bg-gray-50 transition-colors"
                                >
                                    2
                                </Link>
                                <Link
                                    to="#"
                                    className="w-10 h-10 flex items-center justify-center bg-white text-gray-600 font-bold rounded border hover:bg-gray-50 transition-colors"
                                >
                                    3
                                </Link>
                                <Link
                                    to="#"
                                    className="w-10 h-10 flex items-center justify-center bg-white text-gray-600 font-bold rounded border hover:bg-gray-50 transition-colors"
                                >
                                    <ChevronRight size={20} />
                                </Link>
                            </div>
                        </div>

                        {/* --- SIDEBAR (Right Side) --- */}
                        <aside className="lg:w-1/3 space-y-12">
                            {/* Search Widget */}
                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder="Search..."
                                    className="w-full bg-white border border-gray-200 py-4 pl-4 pr-12 focus:outline-none focus:border-blue-500 rounded"
                                />
                                <button className="absolute right-0 top-0 h-full px-4 text-gray-400 hover:text-blue-600 transition-colors">
                                    <Search size={20} />
                                </button>
                            </div>

                            {/* Recent News Widget */}
                            <div>
                                <h3 className="text-xl font-bold text-gray-900 border-b-2 border-gray-100 pb-4 mb-6 relative">
                                    Recent News
                                    <span className="absolute left-0 bottom-0 w-12 h-0.5 bg-blue-600"></span>
                                </h3>
                                <ul className="space-y-6">
                                    <li>
                                        <Link to="#" className="text-gray-800 font-bold hover:text-blue-600 transition-colors block mb-1">
                                            FDA NEWS
                                        </Link>
                                        <span className="text-sm text-gray-500">March 30, 2021</span>
                                    </li>
                                    <li>
                                        <Link to="#" className="text-gray-800 font-bold hover:text-blue-600 transition-colors block mb-1">
                                            In Vitro Diagnostics EUA
                                        </Link>
                                        <span className="text-sm text-gray-500">September 21, 2020</span>
                                    </li>
                                    <li>
                                        <Link
                                            to="#"
                                            className="text-gray-800 font-bold hover:text-blue-600 transition-colors block mb-1 leading-snug"
                                        >
                                            Coronavirus (COVID-19) Update: FDA prepares for resumption of domestic inspections with new risk
                                            assessment system
                                        </Link>
                                        <span className="text-sm text-gray-500">July 10, 2020</span>
                                    </li>
                                </ul>
                            </div>

                            {/* Archives Widget */}
                            <div>
                                <h3 className="text-xl font-bold text-gray-900 border-b-2 border-gray-100 pb-4 mb-6 relative">
                                    Archives
                                    <span className="absolute left-0 bottom-0 w-12 h-0.5 bg-blue-600"></span>
                                </h3>
                                <ul className="space-y-3">
                                    <li>
                                        <Link
                                            to="#"
                                            className="flex justify-between items-center text-gray-700 hover:text-blue-600 transition-colors py-2 border-b border-gray-100 border-dashed"
                                        >
                                            <span className="flex items-center">
                                                <ChevronRight size={14} className="mr-2 text-gray-400" /> March 2021
                                            </span>
                                            <span className="text-xs bg-gray-100 text-gray-500 px-2 py-1 rounded">1</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to="#"
                                            className="flex justify-between items-center text-gray-700 hover:text-blue-600 transition-colors py-2 border-b border-gray-100 border-dashed"
                                        >
                                            <span className="flex items-center">
                                                <ChevronRight size={14} className="mr-2 text-gray-400" /> September 2020
                                            </span>
                                            <span className="text-xs bg-gray-100 text-gray-500 px-2 py-1 rounded">1</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to="#"
                                            className="flex justify-between items-center text-gray-700 hover:text-blue-600 transition-colors py-2 border-b border-gray-100 border-dashed"
                                        >
                                            <span className="flex items-center">
                                                <ChevronRight size={14} className="mr-2 text-gray-400" /> July 2020
                                            </span>
                                            <span className="text-xs bg-gray-100 text-gray-500 px-2 py-1 rounded">1</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to="#"
                                            className="flex justify-between items-center text-gray-700 hover:text-blue-600 transition-colors py-2 border-b border-gray-100 border-dashed"
                                        >
                                            <span className="flex items-center">
                                                <ChevronRight size={14} className="mr-2 text-gray-400" /> June 2020
                                            </span>
                                            <span className="text-xs bg-gray-100 text-gray-500 px-2 py-1 rounded">1</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to="#"
                                            className="flex justify-between items-center text-gray-700 hover:text-blue-600 transition-colors py-2 border-b border-gray-100 border-dashed"
                                        >
                                            <span className="flex items-center">
                                                <ChevronRight size={14} className="mr-2 text-gray-400" /> April 2020
                                            </span>
                                            <span className="text-xs bg-gray-100 text-gray-500 px-2 py-1 rounded">24</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to="#"
                                            className="flex justify-between items-center text-gray-700 hover:text-blue-600 transition-colors py-2"
                                        >
                                            <span className="flex items-center">
                                                <ChevronRight size={14} className="mr-2 text-gray-400" /> April 2010
                                            </span>
                                            <span className="text-xs bg-gray-100 text-gray-500 px-2 py-1 rounded">1</span>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </aside>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};
