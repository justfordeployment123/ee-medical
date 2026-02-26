import React from "react";
import { PageHeader } from "../components/shared/PageHeader";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

export const Software: React.FC = () => {
    return (
        <div className="w-full bg-white font-sans flex flex-col min-h-screen">
            <Header />

            <main className="grow pb-24">
                <PageHeader title="Consulting Packages" breadcrumb="Healthcare Software Development" />

                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 space-y-24">
                    
                    {/* --- SECTION 1: Main Introduction --- */}
                    <section>
                        <div className="flex items-center mb-8 md:mb-10">
                            <span className="w-10 md:w-12 h-1 bg-blue-500 mr-4 md:mr-6 block shrink-0"></span>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">Healthcare Software Development</h2>
                        </div>

                        <div className="text-gray-700 leading-relaxed text-[15px] md:text-base space-y-6">
                            <p>
                                <strong className="text-gray-900">E&E Medicals</strong> designs and delivers custom healthcare software tailored to the workflows of clinicians and administrators. From EHR/EMR systems and telemedicine platforms to medical device software and CRM solutions, we build secure, scalable applications that integrate seamlessly with hospital networks, laboratories, research platforms, and enterprise systems. Our solutions leverage interoperability standards such as <strong className="text-gray-900">FHIR</strong> and <strong className="text-gray-900">HL7</strong>, ensuring smooth data exchange and regulatory alignment.
                            </p>
                            <p>
                                We collaborate with hospitals, long-term care providers, diagnostic centers, pharmaceutical companies, and digital health startups to align technology with clinical operations, reduce friction, and safeguard patient data. Our development approach prioritizes:
                            </p>
                            
                            <ul className="space-y-3">
                                <li className="flex items-start">
                                    <CheckCircle className="text-white fill-blue-500 w-5.5 h-5.5 mr-3 shrink-0 mt-0.5" />
                                    <span><strong className="text-gray-900 font-semibold">Interoperability</strong></span>
                                </li>
                                <li className="flex items-start">
                                    <CheckCircle className="text-white fill-blue-500 w-5.5 h-5.5 mr-3 shrink-0 mt-0.5" />
                                    <span><strong className="text-gray-900 font-semibold">Regulatory compliance</strong></span>
                                </li>
                                <li className="flex items-start">
                                    <CheckCircle className="text-white fill-blue-500 w-5.5 h-5.5 mr-3 shrink-0 mt-0.5" />
                                    <span><strong className="text-gray-900 font-semibold">Measurable outcomes:</strong> faster workflows, fewer errors, and improved patient engagement</span>
                                </li>
                            </ul>

                            {/* Representative Image from HTML */}
                            <div className="my-10 w-full rounded-lg overflow-hidden shadow-sm">
                                <img 
                                    src="https://eemedicals.com/wp-content/uploads/2026/01/Page-A-1024x512.png" 
                                    alt="Healthcare IT integration" 
                                    className="w-full h-auto object-cover"
                                />
                            </div>

                            <h3 className="text-2xl font-bold text-gray-900 pt-4">Applications We Develop</h3>
                            <p>
                                E&E Medicals builds healthcare software that supports both administrative and patient-facing functions. Our solutions are customized to match the unique workflows of medical practices and integrate with diverse IT ecosystems, including:
                            </p>
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-3 pt-2">
                                {["Hospitals", "Diagnostic and research centers", "Long-term care facilities", "Pharmaceutical firms", "Medical device manufacturers"].map((item, idx) => (
                                    <li key={idx} className="flex items-start">
                                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mr-3 mt-2 shrink-0"></span>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>

                            <h4 className="font-bold text-gray-900 pt-4">Key application types:</h4>
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-3 pt-2 pb-6 border-b border-gray-100">
                                {["Electronic Health Record (EHR) and Electronic Medical Record (EMR) systems", "Standalone healthcare mobile apps", "CRM platforms (custom or off-the-shelf)", "Hospital management software", "Software for medical devices", "Telemedicine applications"].map((item, idx) => (
                                    <li key={idx} className="flex items-start">
                                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mr-3 mt-2 shrink-0"></span>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </section>

                    {/* --- SECTION 2: Our Services & Expertise --- */}
                    <section className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Services</h3>
                            <p className="text-gray-700 mb-6">We support full-cycle healthcare software development or assist at any stage of your project.</p>
                            <div className="space-y-6 text-gray-700">
                                <div>
                                    <h4 className="font-bold text-gray-900">Consulting</h4>
                                    <p>We define optimal solutions tailored to your needs, recommend compatible platforms, develop adoption plans, and guide implementation.</p>
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-900">Implementation</h4>
                                    <p>We deliver platform-based or fully customized healthcare software aligned with your workflows and business goals.</p>
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-900">Integration</h4>
                                    <p>We connect standalone applications to enable secure data sharing and workflow automation. Our integration services ensure interoperability across administrative, clinical, and third-party systems using custom or pre-built APIs.</p>
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-900">Support & Maintenance</h4>
                                    <p>We provide ongoing support to maintain software performance, security, and cost-efficiency. Services include audits, 24/7 monitoring, and timely upgrades.</p>
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-900">Legacy Software Upgrades</h4>
                                    <p>We modernize outdated systems through enhancements, extensions, or complete rebuilding, improving security, reliability, and user experience.</p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">Expertise in Emerging Technologies</h3>
                            <div className="space-y-6 text-gray-700">
                                <div className="bg-gray-50 p-5 rounded border border-gray-100">
                                    <h4 className="font-bold text-gray-900">Augmented & Virtual Reality (AR/VR)</h4>
                                    <p className="mt-2">We integrate AR/VR into healthcare solutions to enhance diagnostics, surgical precision, and medical education. Our team develops immersive, device-independent experiences with realistic interfaces and intuitive interactivity.</p>
                                </div>
                                <div className="bg-gray-50 p-5 rounded border border-gray-100">
                                    <h4 className="font-bold text-gray-900">Agentic Automation & RPA</h4>
                                    <p className="mt-2">We implement robotic process automation (RPA) with agentic AI to automate routine and complex workflows. Using platforms like UiPath and Microsoft Power Automate, we deploy bots for tasks such as patient inquiries, form completion, alerts, and document management.</p>
                                </div>
                                <div className="bg-gray-50 p-5 rounded border border-gray-100">
                                    <h4 className="font-bold text-gray-900">Artificial Intelligence & Machine Learning</h4>
                                    <p className="mt-2">We embed AI/ML into healthcare software to support diagnostics, personalize treatment, accelerate research, and optimize operations.</p>
                                </div>
                                <div className="bg-gray-50 p-5 rounded border border-gray-100">
                                    <h4 className="font-bold text-gray-900">Medical Image Analysis</h4>
                                    <p className="mt-2">Our imaging solutions support multiple modalities, improve diagnostic accuracy, and reduce unnecessary procedures.</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* --- SECTION 3: Why Choose Us & FAQ --- */}
                    <section className="bg-[#0a1e3f] text-white rounded-lg p-8 md:p-12 shadow-lg">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                            <div>
                                <h3 className="text-2xl font-bold mb-6">Why Choose E&E Medicals</h3>
                                <ul className="space-y-4">
                                    {[
                                        { title: "Custom Functionality", desc: "Only essential modules, intuitive interfaces, and seamless integrations" },
                                        { title: "Interoperability", desc: "Secure, fast data exchange across systems" },
                                        { title: "Patient Satisfaction", desc: "Better data, faster decisions, and improved collaboration" },
                                        { title: "Enhanced Workflows", desc: "Reduced paperwork and optimized resource allocation" },
                                        { title: "Regulatory Compliance", desc: "Adherence to ISO/IEC 27701:2019, HIPAA, GDPR, and other standards" }
                                    ].map((item, idx) => (
                                        <li key={idx} className="flex items-start">
                                            <CheckCircle className="text-white fill-blue-400 w-5.5 h-5.5 mr-3 shrink-0 mt-0.5" />
                                            <span><strong className="font-semibold text-blue-300">{item.title}:</strong> {item.desc}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            
                            <div>
                                <h3 className="text-2xl font-bold mb-6">FAQ</h3>
                                <div className="space-y-6">
                                    <div>
                                        <h4 className="font-bold text-blue-300 mb-2">What does it cost to develop a custom healthcare app?</h4>
                                        <ul className="list-disc pl-5 space-y-1 text-gray-200">
                                            <li>Small apps: $50k–$100k</li>
                                            <li>Mid-size projects: $150k–$400k</li>
                                            <li>Enterprise platforms: $500k+</li>
                                        </ul>
                                        <p className="text-gray-300 text-sm mt-2 italic">We provide tailored estimates after a brief scoping call.</p>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-blue-300 mb-2">How long does development take?</h4>
                                        <ul className="list-disc pl-5 space-y-1 text-gray-200">
                                            <li>MVP: 8–12 weeks</li>
                                            <li>Multi-module systems: 4–9 months</li>
                                            <li>Enterprise deployments: 9+ months</li>
                                        </ul>
                                        <p className="text-gray-300 text-sm mt-2 italic">Timelines vary based on features, integrations, and regulatory needs.</p>
                                    </div>
                                </div>
                                <div className="mt-8 pt-6 border-t border-blue-800/50">
                                    <Link to="/share-your-project" className="inline-block bg-blue-500 text-white font-bold py-3 px-8 rounded hover:bg-blue-400 transition-colors">
                                        Start Your Project
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* --- SECTION 4: Standalone healthcare mobile apps --- */}
                    <section>
                        <div className="flex items-center mb-8 md:mb-10">
                            <span className="w-10 md:w-12 h-1 bg-blue-500 mr-4 md:mr-6 block shrink-0"></span>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">Standalone healthcare mobile apps</h2>
                        </div>
                        <div className="text-gray-700 leading-relaxed text-[15px] md:text-base space-y-6">
                            <p>
                                We design, validate, and deploy each of these mobile and digital health capabilities while ensuring regulatory compliance, quality systems, and international market readiness. We build patient, provider, and admin apps or mobile ports of existing systems, embedding quality management and regulatory documentation from the start. We emphasize QMSR and ISO 13485-aligned development and design controls to support medical device classification and submissions.
                            </p>
                            
                            <h4 className="font-bold text-gray-900 pt-4">Concise guide and decision points</h4>
                            <ul className="space-y-3">
                                <li className="flex items-start">
                                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mr-3 mt-2 shrink-0"></span>
                                    <span><strong className="text-gray-900">Key considerations:</strong> target user (patient, provider, admin), regulatory pathways, data flows (EHR, devices), security and privacy (HIPAA), and interoperability standards (HL7 FHIR).</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mr-3 mt-2 shrink-0"></span>
                                    <span><strong className="text-gray-900">Clarifying questions to decide scope:</strong> Who are primary users? Which markets are targeted? Is hardware (wearable/RPM) involved? Is full EHR integration required?</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mr-3 mt-2 shrink-0"></span>
                                    <span><strong className="text-gray-900">Decision points:</strong> prioritize compliance-first design; choose native vs cross-platform mobile stack; decide on on-device vs cloud processing for PHI.</span>
                                </li>
                            </ul>

                            <div className="my-8 w-full rounded-lg overflow-hidden shadow-sm">
                                <img src="https://eemedicals.com/wp-content/uploads/2026/01/page-C.png" alt="Standalone App Pathways" className="w-full h-auto object-cover"/>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
                                <div>
                                    <h4 className="font-bold text-gray-900">Remote patient monitoring</h4>
                                    <p className="mt-2">For RPM, E&E Medicals integrates sensors and wearables with secure data pipelines, validates device performance, and prepares regulatory artifacts (e.g., 510(k) or technical documentation) when devices meet medical device definitions. We ensure traceability from requirements to verification.</p>
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-900">Collaboration with medical teams</h4>
                                    <p className="mt-2">E&E Medicals implements role-based access, clinical workflows, and audit trails so multidisciplinary teams can collaborate securely. We map clinical processes to software requirements and support clinical validation and usability testing.</p>
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-900">Access to Electronic Health Records (EHR)</h4>
                                    <p className="mt-2">E&E Medicals enables standards-based EHR integration (HL7, FHIR) and advises on data governance, consent, and interoperability testing. We also prepare documentation for post-market surveillance tied to EHR data.</p>
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-900">Electronic prescribing</h4>
                                    <p className="mt-2">We implement e-prescribing modules that comply with national pharmacy regulations, secure transmission, and audit logging. We validate workflows for prescriber authentication and medication safety checks.</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* --- SECTION 5: CRM Software --- */}
                    <section>
                        <div className="flex items-center mb-8 md:mb-10 border-t border-gray-100 pt-16">
                            <span className="w-10 md:w-12 h-1 bg-blue-500 mr-4 md:mr-6 block shrink-0"></span>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">CRM Software (Platform‑Based or Customized)</h2>
                        </div>
                        <div className="text-gray-700 leading-relaxed text-[15px] md:text-base space-y-6">
                            <p>
                                Healthcare CRM solutions enable medical organizations to securely manage patient information, streamline sales and marketing operations, and enhance collaboration across clinical and administrative teams. By centralizing data and automating engagement workflows, CRM improves patient acquisition, retention, and overall experience.
                            </p>
                            <p>
                                E&E Medicals supports healthcare organizations of all sizes in implementing, optimizing, modernizing, and maintaining CRM platforms tailored to their operational needs, security requirements, and regional regulatory frameworks.
                            </p>

                            <div className="my-8 w-full rounded-lg overflow-hidden shadow-sm">
                                <img src="https://eemedicals.com/wp-content/uploads/2026/01/page-D.png" alt="CRM Statistics" className="w-full h-auto object-cover"/>
                            </div>

                            <h3 className="text-xl font-bold text-gray-900 pt-4">Key Features of Medical CRM Software</h3>
                            <div className="space-y-6 pt-2 border-l-4 border-blue-100 pl-6">
                                <div>
                                    <h4 className="font-bold text-gray-900 text-lg">1. Patient Data Management</h4>
                                    <p className="mt-2">Healthcare CRMs securely consolidate patient demographics, insurance details, billing information, and appointment histories. Authorized staff can access and update records from any location, ensuring accuracy and continuity of care. This reduces repetitive form‑filling, minimizes administrative burden, and supports more personalized clinical interactions.</p>
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-900 text-lg">2. Marketing Campaign Management</h4>
                                    <p className="mt-2">CRM platforms equip marketing teams with tools for segmentation, demographic targeting, and campaign automation. They support the design, launch, and monitoring of multi-channel campaigns while enabling sales teams to track leads, prioritize opportunities, and manage interactions. Integrated web forms automatically capture patient and lead data, reducing manual entry and improving data quality.</p>
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-900 text-lg">3. Analytics & Forecasting</h4>
                                    <p className="mt-2">Healthcare CRMs provide robust analytics to evaluate sales performance, marketing effectiveness, and patient engagement trends. Organizations can identify factors influencing conversions, assess campaign ROI, uncover communication patterns linked to higher satisfaction, and monitor key operational metrics. Dashboards offer real‑time visibility into leads, opportunities, and patient interactions, improving transparency and cross‑team coordination.</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* --- SECTION 6: HMS & Medical Devices Software --- */}
                    <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 border-t border-gray-100 pt-16">
                        
                        {/* HMS Side */}
                        <div>
                            <div className="flex items-center mb-6">
                                <span className="w-8 h-1 bg-blue-500 mr-4 block shrink-0"></span>
                                <h2 className="text-2xl font-bold text-gray-900 tracking-tight">Hospital Management Software (HMS)</h2>
                            </div>
                            <div className="text-gray-700 text-[15px] space-y-4">
                                <p>
                                    E & E Medicals provides <strong className="text-gray-900">Hospital Management Software (HMS)</strong> solutions designed to support administrative, operational, and financial workflows within healthcare organizations. Our software platforms enable medical practices and hospitals to manage non-clinical processes efficiently while maintaining compliance with applicable healthcare data protection and quality management requirements.
                                </p>
                                <img src="https://eemedicals.com/wp-content/uploads/2026/01/page-E.png" alt="HMS UI" className="w-full h-48 object-cover rounded shadow-sm my-4" />
                                <h4 className="font-bold text-gray-900">Core Functional Modules</h4>
                                <ul className="grid grid-cols-1 gap-y-2">
                                    {[
                                        "Patient administrative data and document management",
                                        "Supply chain and procurement tracking",
                                        "Financial management and accounting support",
                                        "Medical billing and revenue cycle operations",
                                        "Ward, bed, and capacity management"
                                    ].map((item, idx) => (
                                        <li key={idx} className="flex items-start">
                                            <CheckCircle className="text-white fill-blue-500 w-4.5 h-4.5 mr-2 shrink-0 mt-0.5" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Medical Devices Software Side */}
                        <div>
                            <div className="flex items-center mb-6">
                                <span className="w-8 h-1 bg-blue-500 mr-4 block shrink-0"></span>
                                <h2 className="text-2xl font-bold text-gray-900 tracking-tight">Software for medical devices</h2>
                            </div>
                            <div className="text-gray-700 text-[15px] space-y-4">
                                <p>
                                    E & E Medicals develops software intended to support the operation, monitoring, and management of medical devices, including software as a medical device (SaMD) where applicable. Solutions are designed to support diagnostic, monitoring, or therapeutic workflows in accordance with defined intended use, applicable regulatory requirements, and healthcare quality management system practices.
                                </p>
                                <img src="https://eemedicals.com/wp-content/uploads/2026/01/page-F.png" alt="Device UI" className="w-full h-48 object-cover rounded shadow-sm my-4" />
                                
                                {/* Triggering a Diagram for visual clarity on device ecosystems */}
                                <span className="block my-2 w-full text-center italic text-sm">
                                    
                                </span>

                                <h4 className="font-bold text-gray-900 mt-6">Types of Software-Supported Devices</h4>
                                <ul className="grid grid-cols-2 gap-y-2">
                                    {[
                                        "Smart carts", "Baby care devices",
                                        "Medical imaging systems", "Inhalation devices",
                                        "Voice-enabled interfaces", "Smart watches",
                                        "Fitness tracking devices", "Insulin delivery systems"
                                    ].map((item, idx) => (
                                        <li key={idx} className="flex items-start">
                                            <CheckCircle className="text-white fill-blue-500 w-4.5 h-4.5 mr-2 shrink-0 mt-0.5" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                    </section>

                    {/* --- SECTION 7: Telemedicine --- */}
                    <section className="bg-blue-50 rounded-xl p-8 md:p-12 mt-16 border border-blue-100">
                        <div className="flex items-center mb-8 md:mb-10">
                            <span className="w-10 md:w-12 h-1 bg-blue-600 mr-4 md:mr-6 block shrink-0"></span>
                            <h2 className="text-3xl md:text-4xl font-bold text-[#0a1e3f] tracking-tight">Telemedicine Software Applications</h2>
                        </div>
                        
                        <div className="text-gray-800 leading-relaxed text-[15px] md:text-base space-y-6">
                            <p>
                                Our specialists create telemedicine software that allows healthcare providers to offer remote medical consultations, examinations, diagnostics, and online education and training for medical staff. We offer telemedicine solutions that give patients on-demand remote access to healthcare while helping medical facilities manage resources efficiently and grow their service coverage.
                            </p>
                            
                            <img src="https://eemedicals.com/wp-content/uploads/2026/01/page-G.png" alt="Telemedicine Interface" className="w-full h-auto object-cover rounded-lg shadow-md my-8" />

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-4">
                                <div className="bg-white p-6 rounded shadow-sm">
                                    <h4 className="font-bold text-[#0a1e3f] text-lg mb-3 border-b pb-2">Communication</h4>
                                    <ul className="space-y-2 text-sm">
                                        <li>• High-quality video/audio</li>
                                        <li>• Appointment scheduling</li>
                                        <li>• Electronic prescriptions</li>
                                        <li>• Secure chats</li>
                                        <li>• Virtual waiting rooms</li>
                                    </ul>
                                </div>
                                <div className="bg-white p-6 rounded shadow-sm">
                                    <h4 className="font-bold text-[#0a1e3f] text-lg mb-3 border-b pb-2">Condition management</h4>
                                    <ul className="space-y-2 text-sm">
                                        <li>• 24/7 health monitoring</li>
                                        <li>• Alerts and notifications</li>
                                        <li>• AI consulting chatbots</li>
                                        <li>• Data-driven diagnostics</li>
                                    </ul>
                                </div>
                                <div className="bg-white p-6 rounded shadow-sm">
                                    <h4 className="font-bold text-[#0a1e3f] text-lg mb-3 border-b pb-2">Data management</h4>
                                    <ul className="space-y-2 text-sm">
                                        <li>• Session records storage</li>
                                        <li>• Continuous health log updates</li>
                                        <li>• Easy CRM and EHR data access</li>
                                        <li>• Secure data backups</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </section>

                </div>
            </main>

            <Footer />
        </div>
    );
};