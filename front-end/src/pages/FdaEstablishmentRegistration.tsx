import React from "react";
import { PageHeader } from "../components/shared/PageHeader";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Link } from "react-router-dom";
import { useContent } from "../hooks/useContent";
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
    const content = useContent("fda_establishment");
    const hero = content?.hero;
    const main = content?.main;
    const medical = content?.medical;
    const drug = content?.drug;

    const drugItems = [drug?.item1, drug?.item2, drug?.item3, drug?.item4].filter(Boolean) as string[];

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
                        src={hero?.hero_image || "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1400"}
                        alt={hero?.hero_image_alt || "FDA Establishment Registration compliance process"}
                        label={hero?.badge_text || "FDA Establishment Registration"}
                    />

                    <Section>
                        <SectionHeading
                            badge={main?.badge_text || "FDA Registration"}
                            title={main?.title || "FDA Establishment Registration"}
                        />
                        <div className="text-gray-600 leading-relaxed space-y-5">
                            <p>{main?.paragraph1 || "Establishments marketing medical devices in the U.S. must complete FDA registration and listing within required timelines."}</p>
                            <p>{main?.paragraph2 || "US FDA protects public health by ensuring safety, efficacy, and security for regulated products, requiring facility registration."}</p>
                            <p>
                                The US FDA process varies dependent on the type of product in the U.S. Registration and listing provide the FDA with
                                the location of medical device establishments and the devices manufactured at those establishments.
                            </p>
                        </div>
                    </Section>

                    <Section>
                        <SectionHeading
                            badge={medical?.badge_text || "Medical Devices"}
                            title={medical?.title || "Medical Device — Establishment Registration"}
                        />
                        <div className="text-gray-600 leading-relaxed space-y-5">
                            <p>{medical?.paragraph || "Medical device business operators involved in manufacture and distribution for U.S. use must complete annual registration and device listing obligations."}</p>
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
                            badge={drug?.badge_text || "Drug & Cosmetic"}
                            title={drug?.title || "FDA Drug & Cosmetic Establishment Registration"}
                        />
                        <p className="text-gray-600 leading-relaxed mb-8">
                            {drug?.paragraph || "E & E Medicals and Consulting provides the following services to pharmaceutical companies."}
                        </p>
                        <FeatureList
                            items={drugItems.length ? drugItems : [
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
