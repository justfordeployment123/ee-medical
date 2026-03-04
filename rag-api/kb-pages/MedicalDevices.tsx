import React from "react";
import { PageHeader } from "../components/shared/PageHeader";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Link } from "react-router-dom";
import {
    InnerContent,
    SectionHeading,
    HeroImage,
    Section,
    PageCTA,
} from "../components/shared/InnerPage";

export const MedicalDevices: React.FC = () => {
    return (
        <div className="w-full bg-white font-sans flex flex-col min-h-screen">
            <Header />

            <main className="grow">
                <PageHeader title="Medical Devices" breadcrumb="Medical Devices" />

                <InnerContent>
                    <HeroImage
                        src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?q=80&w=1400"
                        alt="Medical devices quality assurance testing"
                        label="Medical Device Quality"
                    />

                    <Section>
                        <SectionHeading badge="Quality Assurance" title="Medical Devices Quality Assurance" />
                        <div className="space-y-5 text-gray-700 leading-relaxed text-[15px] md:text-base">
                            <p>
                                Most medical device companies understand the risks of developing and mass-producing their products. However, many of these companies are not aware how to combat these risks effectively and efficiently. It is possible to experience the peace of mind that comes with employing a trusted medical device.
                            </p>
                            <p>
                                The{" "}
                                <a href="https://en.wikipedia.org/wiki/Food_and_Drug_Administration" target="_blank" rel="noopener noreferrer" className="text-brand-500 hover:text-brand-600 hover:underline">FDA's</a>{" "}
                                Quality System Regulation (21 CFR Part 820) requires medical device manufacturers to maintain a quality control & assurance system that uses a total quality approach to ensure product safety and effectiveness. The GMP requirements in QSR are harmonized with ISO 9001 and ISO 13485 because they are recognized worldwide as a stamp of quality.
                            </p>
                            <p>
                                <Link to="/" className="text-brand-500 hover:text-brand-600 hover:underline">E & E Medicals</Link>{" "}
                                and Consulting will help to prepare you very well with the ultimate goal of bringing your organization into compliance with FDA requirements. The FDA's Quality System Regulation (21 CFR Part 820) and ISO 13485. We will also assist you in the various forms of implementation needed to meet with standards.
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
