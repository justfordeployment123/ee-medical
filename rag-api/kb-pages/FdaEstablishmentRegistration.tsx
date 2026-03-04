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

export const FdaEstablishmentRegistration: React.FC = () => {
    return (
        <div className="w-full bg-white font-sans flex flex-col min-h-screen">
            <Header />
            <main className="grow">
                <PageHeader
                    title="US FDA Establishment Medical Device | An Overview"
                    breadcrumb="FDA Establishment Registration"
                />
                <InnerContent>
                    <HeroImage
                        src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1400"
                        alt="FDA Establishment Registration compliance process"
                        label="FDA Establishment Registration"
                    />

                    <Section>
                        <SectionHeading
                            badge="FDA Registration"
                            title="FDA Establishment Registration"
                        />
                        <div className="text-gray-600 leading-relaxed space-y-5">
                            <p>
                                FDA Establishment that produces and markets medical devices in the United States has to follow a registration process
                                with the FDA called "Establishment registration" within 30 days of commercialization of the medical device. E &amp; E
                                Medicals and Consulting is a US FDA Agent with consultants supporting manufactures &amp; distributors during the online{" "}
                                <strong className="text-navy-900">FDA Establishment Registration</strong> and listing process.
                            </p>
                            <p>
                                The Food and Drug Administration of the United States (US FDA) protects public health by ensuring the safety,
                                efficacy, and security of Food Supply, Drugs, and Biological(s). Hence, business owners and operators (Establishments
                                Registration or Facilities) within the ranks for these industries must REGISTER their facilities with the US FDA.
                            </p>
                            <p>
                                The US FDA process varies dependent on the type of product in the U.S. Registration and listing provide the FDA with
                                the location of medical device establishments and the devices manufactured at those establishments.
                            </p>
                        </div>
                    </Section>

                    <Section>
                        <SectionHeading
                            badge="Medical Devices"
                            title="Medical Device — Establishment Registration"
                        />
                        <div className="text-gray-600 leading-relaxed space-y-5">
                            <p>
                                Facility Business owners operators of the medical device industry are involved in the manufacture distribution of
                                medical devices. Intended for use in the United States are required to complete annual Registration. The CFR 807
                                section requires that the listing of those devices. Only those devices exempted from PMA 510k clearance could be
                                direct with the FDA. E &amp; E Medicals Consulting helps to define medical device establishment requirements.
                            </p>
                            <p>
                                Owners or operators of places of business (additionally known as institutions centers) worried about the production
                                and allotment medical devices meant for use within the United States (U.S.) are required to register yearly with the
                                FDA. This manner is known as established order registration. The drug institutions' registration web page is an e-book
                                of currently registered institutions that manufacture, prepare, propagate, compound, or system drugs within the U.S.
                            </p>
                        </div>
                    </Section>

                    <Section dark={false}>
                        <SectionHeading
                            badge="Drug & Cosmetic"
                            title="FDA Drug &amp; Cosmetic Establishment Registration"
                        />
                        <p className="text-gray-600 leading-relaxed mb-8">
                            E &amp; E Medicals and Consulting provides the following services to pharmaceutical companies.
                        </p>
                        <FeatureList
                            items={[
                                "GMP Consultancy for pharmaceuticals",
                                "Pre-audit inspection",
                                "Assist in responding to 483 letters",
                                "Establishment registration",
                                "Drug listing",
                            ]}
                        />
                        <InfoBox variant="brand" className="mt-8">
                            <p className="font-semibold text-gray-900">
                                For more details, submit your details at{" "}
                                <Link to="/share-your-project" className="text-brand-600 hover:text-brand-500 underline">
                                    Medical Device Registration
                                </Link>
                                .
                            </p>
                        </InfoBox>
                    </Section>

                    <PageCTA
                        title="Register Your Establishment with FDA"
                        subtitle="Our US FDA Agent consultants will guide you through the entire registration and listing process."
                    />
                </InnerContent>
            </main>
            <Footer />
        </div>
    );
};
