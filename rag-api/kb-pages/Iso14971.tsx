import React from "react";
import { PageHeader } from "../components/shared/PageHeader";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Link } from "react-router-dom";
import {
    InnerContent,
    SectionHeading,
    FeatureList,
    HeroImage,
    Section,
    InfoBox,
    PageCTA,
} from "../components/shared/InnerPage";

const methodologySteps = [
    "Gap assessment",
    "Quality management system upgrade",
    "Training",
    "Internal audit",
    "Certification audit",
];

export const Iso14971: React.FC = () => {
    return (
        <div className="w-full bg-white font-sans flex flex-col min-h-screen">
            <Header />

            <main className="grow">
                <PageHeader
                    title="ISO 14971 medical device risk management for medical devices"
                    breadcrumb="ISO 14971 medical device risk management"
                />

                <InnerContent>
                    <HeroImage
                        src="https://images.unsplash.com/photo-1598520106830-8c45c2035460?q=80&w=1400"
                        alt="ISO 14971 medical device risk management lifecycle"
                        label="ISO 14971 Risk Management"
                    />

                    <Section>
                        <SectionHeading badge="Risk Management" title="ISO 14971 Medical Device Risk Management Expert" />
                        <div className="space-y-6 text-gray-700 leading-relaxed text-[15px] md:text-base">
                            <p>
                                ISO 14971 compliance helps medical device manufacturers introduce safe medical devices into the marketplace by evaluating and controlling the risks associated with a medical device, and by evaluating a device's interactions with other devices.
                            </p>
                            <p>
                                As the only international standard for risk management for medical devices,{" "}
                                <strong className="text-navy-900">ISO 14971 medical device risk management</strong>{" "}
                                expert has become an integral element for satisfying regulatory requirements in most major markets and should be incorporated into the medical device life cycle.
                            </p>
                            <InfoBox variant="light">
                                <p className="text-center text-sm italic text-gray-500">
                                    [Image diagram of the ISO 14971 Risk Management Life Cycle]
                                </p>
                            </InfoBox>
                        </div>
                    </Section>

                    <Section>
                        <SectionHeading badge="Implementation" title="ISO 14971 Medical Devices Risk Management Implementation Service" />
                        <div className="space-y-6 text-gray-700 leading-relaxed text-[15px] md:text-base">
                            <p>
                                <Link to="/" className="text-brand-500 hover:text-brand-600 hover:underline">E & E Medicals</Link>{" "}
                                and Consulting will assist you with ISO 14971 medical device implementation service that follows a 5-step methodology:
                            </p>
                            <FeatureList items={methodologySteps} />
                            <p>
                                This can be integrated into an ISO 13485 certification program, or added to an existing ISO 13485 certification. We will provide and generate all the required documentation to meet the requirements of the standard.
                            </p>
                        </div>
                    </Section>

                    <PageCTA />
                </InnerContent>
            </main>

            <Footer />
        </div>
    );
};
