import React from "react";
import { PageHeader } from "../components/shared/PageHeader";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Link } from "react-router-dom";
import {
    InnerContent,
    SectionHeading,
    SubHeading,
    FeatureList,
    BulletList,
    InfoBox,
    ProcessSteps,
    ServiceCard,
    PageCTA,
    HeroImage,
    Section,
} from "../components/shared/InnerPage";

export const Software: React.FC = () => {
    return (
        <div className="w-full bg-white font-sans flex flex-col min-h-screen">
            <Header />

            <main className="grow pb-24">
                <PageHeader title="Solutions and Services" breadcrumb="Healthcare Software Development" />

                <InnerContent>

                    {/* ─── SECTION 1: Main Introduction ─────────────────────── */}
                    <Section>
                        <SectionHeading
                            badge="Healthcare Software"
                            title="Healthcare Software Development"
                            subtitle="Secure, scalable applications that integrate seamlessly with hospital networks, laboratories, research platforms, and enterprise systems."
                        />

                        <div className="text-gray-700 leading-relaxed text-[15px] md:text-base space-y-5 mb-8">
                            <p>
                                <strong className="text-gray-900">E&E Medicals</strong> designs and delivers custom healthcare software tailored to the workflows of clinicians and administrators. From EHR/EMR systems and telemedicine platforms to medical device software and CRM solutions, we build secure, scalable applications that integrate seamlessly with hospital networks, laboratories, research platforms, and enterprise systems. Our solutions leverage interoperability standards such as <strong className="text-gray-900">FHIR</strong> and <strong className="text-gray-900">HL7</strong>, ensuring smooth data exchange and regulatory alignment.
                            </p>
                            <p>
                                We collaborate with hospitals, long-term care providers, diagnostic centers, pharmaceutical companies, and digital health startups to align technology with clinical operations, reduce friction, and safeguard patient data. Our development approach prioritizes:
                            </p>
                        </div>

                        <FeatureList
                            className="mb-10"
                            items={[
                                "<strong class='text-gray-900 font-semibold'>Interoperability</strong>",
                                "<strong class='text-gray-900 font-semibold'>Regulatory compliance</strong>",
                                "<strong class='text-gray-900 font-semibold'>Measurable outcomes:</strong> faster workflows, fewer errors, and improved patient engagement",
                            ]}
                        />

                        <HeroImage
                            src="https://eemedicals.com/wp-content/uploads/2026/01/Page-A-1024x512.png"
                            alt="Healthcare Software Development Market Forecast"
                            height="h-70 md:h-[500px]"
                            fit="contain"
                        />

                        <div className="mt-10 space-y-6">
                            <SubHeading className="mt-2">Applications We Develop</SubHeading>
                            <p className="text-gray-700 text-[15px] leading-relaxed">
                                E&E Medicals builds healthcare software that supports both administrative and patient-facing functions. Our solutions are customized to match the unique workflows of medical practices and integrate with diverse IT ecosystems, including:
                            </p>

                            <BulletList
                                columns={2}
                                items={[
                                    "Hospitals",
                                    "Diagnostic and research centers",
                                    "Long-term care facilities",
                                    "Pharmaceutical firms",
                                    "Medical device manufacturers",
                                ]}
                            />

                            <p className="font-bold text-gray-900 pt-2">Key application types:</p>
                            <BulletList
                                columns={2}
                                items={[
                                    "Electronic Health Record (EHR) and Electronic Medical Record (EMR) systems",
                                    "Standalone healthcare mobile apps",
                                    "CRM platforms (custom or off-the-shelf)",
                                    "Hospital management software",
                                    "Software for medical devices",
                                    "Telemedicine applications",
                                ]}
                            />
                        </div>
                    </Section>

                    {/* ─── SECTION 2: Services & Expertise ─────────────────── */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        {/* Left — Our Services */}
                        <div>
                            <SubHeading>Our Services</SubHeading>
                            <p className="text-gray-600 text-[14px] mb-6">
                                We support full-cycle healthcare software development or assist at any stage of your project.
                            </p>
                            <ProcessSteps
                                steps={[
                                    {
                                        title: "Consulting",
                                        description:
                                            "We define optimal solutions tailored to your needs, recommend compatible platforms, develop adoption plans, and guide implementation.",
                                    },
                                    {
                                        title: "Implementation",
                                        description:
                                            "We deliver platform-based or fully customized healthcare software aligned with your workflows and business goals.",
                                    },
                                    {
                                        title: "Integration",
                                        description:
                                            "We connect standalone applications to enable secure data sharing and workflow automation. Our integration services ensure interoperability across administrative, clinical, and third-party systems using custom or pre-built APIs.",
                                    },
                                    {
                                        title: "Support & Maintenance",
                                        description:
                                            "We provide ongoing support to maintain software performance, security, and cost-efficiency. Services include audits, 24/7 monitoring, and timely upgrades.",
                                    },
                                    {
                                        title: "Legacy Software Upgrades",
                                        description:
                                            "We modernize outdated systems through enhancements, extensions, or complete rebuilding, improving security, reliability, and user experience.",
                                    },
                                ]}
                            />
                        </div>

                        {/* Right — Emerging Technologies */}
                        <div className="space-y-4">
                            <SubHeading>Expertise in Emerging Technologies</SubHeading>
                            <ServiceCard
                                title="Augmented & Virtual Reality (AR/VR)"
                                description="We integrate AR/VR into healthcare solutions to enhance diagnostics, surgical precision, and medical education. Our team develops immersive, device-independent experiences with realistic interfaces and intuitive interactivity."
                            />
                            <ServiceCard
                                title="Agentic Automation & RPA"
                                description="We implement robotic process automation (RPA) with agentic AI to automate routine and complex workflows. Using platforms like UiPath and Microsoft Power Automate, we deploy bots for tasks such as patient inquiries, form completion, alerts, and document management."
                            />
                            <ServiceCard
                                title="Artificial Intelligence & Machine Learning"
                                description="We embed AI/ML into healthcare software to support diagnostics, personalize treatment, accelerate research, and optimize operations."
                            />
                            <ServiceCard
                                title="Medical Image Analysis"
                                description="Our imaging solutions support multiple modalities, improve diagnostic accuracy, and reduce unnecessary procedures."
                            />
                        </div>
                    </div>

                    {/* ─── SECTION 3: Why Choose Us & FAQ ──────────────────── */}
                    <Section dark>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                            {/* Why Choose */}
                            <div>
                                <SubHeading className="text-white">Why Choose E&E Medicals</SubHeading>
                                <FeatureList
                                    items={[
                                        "<strong class='text-brand-300'>Custom Functionality:</strong> <span class='text-gray-300'>Only essential modules, intuitive interfaces, and seamless integrations</span>",
                                        "<strong class='text-brand-300'>Interoperability:</strong> <span class='text-gray-300'>Secure, fast data exchange across systems</span>",
                                        "<strong class='text-brand-300'>Patient Satisfaction:</strong> <span class='text-gray-300'>Better data, faster decisions, and improved collaboration</span>",
                                        "<strong class='text-brand-300'>Enhanced Workflows:</strong> <span class='text-gray-300'>Reduced paperwork and optimized resource allocation</span>",
                                        "<strong class='text-brand-300'>Regulatory Compliance:</strong> <span class='text-gray-300'>Adherence to ISO/IEC 27701:2019, HIPAA, GDPR, and other standards</span>",
                                    ]}
                                />
                            </div>

                            {/* FAQ */}
                            <div className="space-y-6">
                                <SubHeading className="text-white">FAQ</SubHeading>

                                <InfoBox variant="brand">
                                    <h4 className="font-bold text-gray-900 mb-3">What does it cost to develop a custom healthcare app?</h4>
                                    <ul className="list-disc pl-5 space-y-1 text-gray-700 text-sm">
                                        <li>Small apps: $50k–$100k</li>
                                        <li>Mid-size projects: $150k–$400k</li>
                                        <li>Enterprise platforms: $500k+</li>
                                    </ul>
                                    <p className="text-gray-500 text-xs mt-3 italic">We provide tailored estimates after a brief scoping call.</p>
                                </InfoBox>

                                <InfoBox variant="brand">
                                    <h4 className="font-bold text-gray-900 mb-3">How long does development take?</h4>
                                    <ul className="list-disc pl-5 space-y-1 text-gray-700 text-sm">
                                        <li>MVP: 8–12 weeks</li>
                                        <li>Multi-module systems: 4–9 months</li>
                                        <li>Enterprise deployments: 9+ months</li>
                                    </ul>
                                    <p className="text-gray-500 text-xs mt-3 italic">Timelines vary based on features, integrations, and regulatory needs.</p>
                                </InfoBox>

                                <div className="pt-2">
                                    <Link
                                        to="/share-your-project"
                                        className="inline-block bg-brand-500 text-white font-bold py-3 px-8 rounded-xl hover:bg-brand-400 transition-colors"
                                    >
                                        Start Your Project
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </Section>

                    {/* ─── SECTION 4: Standalone Healthcare Mobile Apps ────── */}
                    <Section>
                        <SectionHeading
                            badge="Mobile Applications"
                            title="Standalone healthcare mobile apps"
                            subtitle="We design, validate, and deploy each of these mobile and digital health capabilities while ensuring regulatory compliance, quality systems, and international market readiness."
                        />

                        <div className="text-gray-700 leading-relaxed text-[15px] space-y-6 mb-8">
                            <p>
                                We build patient, provider, and admin apps or mobile ports of existing systems, embedding quality management and regulatory documentation from the start. We emphasize QMSR and ISO 13485-aligned development and design controls to support medical device classification and submissions.
                            </p>
                        </div>

                        <SubHeading>Concise guide and decision points</SubHeading>
                        <BulletList
                            className="mb-10"
                            items={[
                                "<strong class='text-gray-900'>Key considerations:</strong> target user (patient, provider, admin), regulatory pathways, data flows (EHR, devices), security and privacy (HIPAA), and interoperability standards (HL7 FHIR).",
                                "<strong class='text-gray-900'>Clarifying questions to decide scope:</strong> Who are primary users? Which markets are targeted? Is hardware (wearable/RPM) involved? Is full EHR integration required?",
                                "<strong class='text-gray-900'>Decision points:</strong> prioritize compliance-first design; choose native vs cross-platform mobile stack; decide on on-device vs cloud processing for PHI.",
                            ]}
                        />

                        <HeroImage
                            src="https://eemedicals.com/wp-content/uploads/2026/01/page-C.png"
                            alt="Standalone App Pathways"
                            height="h-64 md:h-[400px]"
                        />

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
                            <ServiceCard
                                title="Remote patient monitoring"
                                description="For RPM, E&E Medicals integrates sensors and wearables with secure data pipelines, validates device performance, and prepares regulatory artifacts (e.g., 510(k) or technical documentation) when devices meet medical device definitions. We ensure traceability from requirements to verification."
                            />
                            <ServiceCard
                                title="Collaboration with medical teams"
                                description="E&E Medicals implements role-based access, clinical workflows, and audit trails so multidisciplinary teams can collaborate securely. We map clinical processes to software requirements and support clinical validation and usability testing."
                            />
                            <ServiceCard
                                title="Access to Electronic Health Records (EHR)"
                                description="E&E Medicals enables standards-based EHR integration (HL7, FHIR) and advises on data governance, consent, and interoperability testing. We also prepare documentation for post-market surveillance tied to EHR data."
                            />
                            <ServiceCard
                                title="Electronic prescribing"
                                description="We implement e-prescribing modules that comply with national pharmacy regulations, secure transmission, and audit logging. We validate workflows for prescriber authentication and medication safety checks."
                            />
                        </div>
                    </Section>

                    {/* ─── SECTION 5: CRM Software ──────────────────────────── */}
                    <Section>
                        <SectionHeading
                            badge="CRM"
                            title="CRM Software (Platform‑Based or Customized)"
                            subtitle="Healthcare CRM solutions enable medical organizations to securely manage patient information, streamline sales and marketing operations, and enhance collaboration across clinical and administrative teams."
                        />

                        <div className="text-gray-700 leading-relaxed text-[15px] space-y-5 mb-8">
                            <p>
                                Healthcare CRM solutions enable medical organizations to securely manage patient information, streamline sales and marketing operations, and enhance collaboration across clinical and administrative teams. By centralizing data and automating engagement workflows, CRM improves patient acquisition, retention, and overall experience.
                            </p>
                            <p>
                                E&E Medicals supports healthcare organizations of all sizes in implementing, optimizing, modernizing, and maintaining CRM platforms tailored to their operational needs, security requirements, and regional regulatory frameworks.
                            </p>
                        </div>

                        <HeroImage
                            src="https://eemedicals.com/wp-content/uploads/2026/01/page-D.png"
                            alt="CRM Statistics"
                            height="h-64 md:h-[380px]"
                        />

                        <SubHeading className="mt-10">Key Features of Medical CRM Software</SubHeading>

                        <div className="space-y-5 mt-4">
                            <InfoBox variant="brand">
                                <h4 className="font-bold text-gray-900 text-base mb-2">1. Patient Data Management</h4>
                                <p className="text-gray-700 text-sm leading-relaxed">
                                    Healthcare CRMs securely consolidate patient demographics, insurance details, billing information, and appointment histories. Authorized staff can access and update records from any location, ensuring accuracy and continuity of care. This reduces repetitive form‑filling, minimizes administrative burden, and supports more personalized clinical interactions.
                                </p>
                            </InfoBox>
                            <InfoBox variant="brand">
                                <h4 className="font-bold text-gray-900 text-base mb-2">2. Marketing Campaign Management</h4>
                                <p className="text-gray-700 text-sm leading-relaxed">
                                    CRM platforms equip marketing teams with tools for segmentation, demographic targeting, and campaign automation. They support the design, launch, and monitoring of multi-channel campaigns while enabling sales teams to track leads, prioritize opportunities, and manage interactions. Integrated web forms automatically capture patient and lead data, reducing manual entry and improving data quality.
                                </p>
                            </InfoBox>
                            <InfoBox variant="brand">
                                <h4 className="font-bold text-gray-900 text-base mb-2">3. Analytics &amp; Forecasting</h4>
                                <p className="text-gray-700 text-sm leading-relaxed">
                                    Healthcare CRMs provide robust analytics to evaluate sales performance, marketing effectiveness, and patient engagement trends. Organizations can identify factors influencing conversions, assess campaign ROI, uncover communication patterns linked to higher satisfaction, and monitor key operational metrics. Dashboards offer real‑time visibility into leads, opportunities, and patient interactions, improving transparency and cross‑team coordination.
                                </p>
                            </InfoBox>
                        </div>
                    </Section>

                    {/* ─── SECTION 6: HMS & Medical Devices ────────────────── */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

                        {/* HMS */}
                        <Section>
                            <SectionHeading
                                badge="HMS"
                                title="Hospital Management Software (HMS)"
                            />
                            <p className="text-gray-700 text-[15px] leading-relaxed mb-6">
                                E &amp; E Medicals provides <strong className="text-gray-900">Hospital Management Software (HMS)</strong> solutions designed to support administrative, operational, and financial workflows within healthcare organizations. Our software platforms enable medical practices and hospitals to manage non-clinical processes efficiently while maintaining compliance with applicable healthcare data protection and quality management requirements.
                            </p>

                            <HeroImage
                                src="https://eemedicals.com/wp-content/uploads/2026/01/page-E.png"
                                alt="HMS UI"
                                height="h-48 md:h-56"
                            />

                            <SubHeading className="mt-8">Core Functional Modules</SubHeading>
                            <FeatureList
                                items={[
                                    "Patient administrative data and document management",
                                    "Supply chain and procurement tracking",
                                    "Financial management and accounting support",
                                    "Medical billing and revenue cycle operations",
                                    "Ward, bed, and capacity management",
                                ]}
                            />
                        </Section>

                        {/* Medical Devices Software */}
                        <Section>
                            <SectionHeading
                                badge="Medical Devices"
                                title="Software for medical devices"
                            />
                            <p className="text-gray-700 text-[15px] leading-relaxed mb-6">
                                E &amp; E Medicals develops software intended to support the operation, monitoring, and management of medical devices, including software as a medical device (SaMD) where applicable. Solutions are designed to support diagnostic, monitoring, or therapeutic workflows in accordance with defined intended use, applicable regulatory requirements, and healthcare quality management system practices.
                            </p>

                            <HeroImage
                                src="https://eemedicals.com/wp-content/uploads/2026/01/page-F.png"
                                alt="Device UI"
                                height="h-48 md:h-56"
                            />

                            <SubHeading className="mt-8">Types of Software-Supported Devices</SubHeading>
                            <FeatureList
                                columns={2}
                                items={[
                                    "Smart carts",
                                    "Baby care devices",
                                    "Medical imaging systems",
                                    "Inhalation devices",
                                    "Voice-enabled interfaces",
                                    "Smart watches",
                                    "Fitness tracking devices",
                                    "Insulin delivery systems",
                                ]}
                            />
                        </Section>

                    </div>

                    {/* ─── SECTION 7: Telemedicine ──────────────────────────── */}
                    <Section>
                        <SectionHeading
                            badge="Telemedicine"
                            title="Telemedicine Software Applications"
                            subtitle="Our specialists create telemedicine software that allows healthcare providers to offer remote medical consultations, examinations, diagnostics, and online education and training for medical staff."
                        />

                        <p className="text-gray-700 text-[15px] leading-relaxed mb-8">
                            We offer telemedicine solutions that give patients on-demand remote access to healthcare while helping medical facilities manage resources efficiently and grow their service coverage.
                        </p>

                        <HeroImage
                            src="https://eemedicals.com/wp-content/uploads/2026/01/page-G.png"
                            alt="Telemedicine Interface"
                            height="h-64 md:h-[400px]"
                        />

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
                            <ServiceCard
                                title="Communication"
                                description="High-quality video/audio · Appointment scheduling · Electronic prescriptions · Secure chats · Virtual waiting rooms"
                            />
                            <ServiceCard
                                title="Condition management"
                                description="24/7 health monitoring · Alerts and notifications · AI consulting chatbots · Data-driven diagnostics"
                            />
                            <ServiceCard
                                title="Data management"
                                description="Session records storage · Continuous health log updates · Easy CRM and EHR data access · Secure data backups"
                            />
                        </div>
                    </Section>

                    {/* ─── Page CTA ─────────────────────────────────────────── */}
                    <PageCTA
                        title="Ready to Build Your Healthcare Software?"
                        subtitle="Let our specialists design and deliver a solution tailored to your clinical and operational needs."
                        linkLabel="Start Your Project"
                        linkTo="/share-your-project"
                    />

                </InnerContent>
            </main>

            <Footer />
        </div>
    );
};
