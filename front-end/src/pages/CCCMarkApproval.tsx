import React from "react";
import { PageHeader } from "../components/shared/PageHeader";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import {
    InnerContent,
    SectionHeading,
    FeatureList,
    HeroImage,
    Section,
    PageCTA,
} from "../components/shared/InnerPage";

const registrationItems = [
    "Only registration filing without device test reports",
    "Complete registration filings including device test reports",
];

export const CCCMarkApproval: React.FC = () => {
    return (
        <div className="w-full bg-white font-sans flex flex-col min-h-screen">
            <Header />

            <main className="grow">
                <PageHeader
                    title="Is CCC Mark Approval necessary for Medical Devices and IVD?"
                    breadcrumb="CCC Mark Approval"
                />

                <InnerContent>
                    <HeroImage
                        src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=1400"
                        alt="CCC mark approval China compulsory certification medical devices"
                        label="CCC Mark Approval"
                    />

                    <Section>
                        <SectionHeading badge="CCC Mark" title="China Compulsory Certification (CCC)" />
                        <div className="space-y-5 text-gray-700 leading-relaxed text-[15px] md:text-base">
                            <p>
                                The CCC mark is the new compulsory Safety & Quality mark for many products sold on the Chinese market. CCC Mark Approval became effective on May 1, 2002. It is the result of the recent integration of China's two compulsory inspection systems (One to check contents of products for import and export, and the other for quality control) into a single procedure.
                            </p>
                            <p>
                                The new <strong className="text-navy-900">CCC mark approval</strong> replaces the two old marks, namely{" "}
                                <strong className="text-navy-900">CCIB</strong> and <strong className="text-navy-900">CCEE</strong> used in the two old inspection systems.
                            </p>
                            <p>
                                The Challenging process of Medical device registration for the Chinese market makes it necessary to have a partner with Chinese market. Experience and expertise in providing insights into how to manage. And direct you through the regulatory process in China's developing regulatory activities.
                            </p>
                        </div>
                    </Section>

                    <Section>
                        <SectionHeading badge="Registration" title="Registration - Medical Devices and IVD" />
                        <div className="space-y-5 text-gray-700 leading-relaxed text-[15px] md:text-base">
                            <p>
                                The NMPA has consistent guidelines, reporting, and clinical data requirements in reviewing all applications and submissions.
                            </p>
                            <FeatureList items={registrationItems} />
                            <p>
                                China needs inland testing for most Class II and III devices, with very few exceptions. The conditions for testing vary depending on the type of device. E&E medicals and consulting will help you get your medical device and IVD's regulatory approval into the Chinese market. Our experts work directly every day with the NMPA. Organize the submission of regulatory documents, and answer follow-up questions from the NMPA.
                            </p>
                        </div>
                    </Section>

                    <Section dark>
                        <SectionHeading badge="Why E&E" title="Why choose E & E Medicals and Consulting?" />
                        <p className="text-gray-300 leading-relaxed text-[15px] md:text-base">
                            The Challenging process of Medical device registration for the Chinese market. Makes it necessary to have a partner with Chinese market experience and expertise in providing insights into how to manage. And direct you through the regulatory process in China's developing regulatory activities. Carry out all applicable tests to determine the appropriate measures to meet with <strong className="text-white">CCC</strong> certification mark regulations.
                        </p>
                    </Section>

                    <PageCTA />
                </InnerContent>
            </main>

            <Footer />
        </div>
    );
};
