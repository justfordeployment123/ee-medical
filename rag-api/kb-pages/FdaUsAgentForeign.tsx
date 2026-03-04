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
    InfoBox,
    PageCTA,
} from "../components/shared/InnerPage";

export const FdaUsAgentForeign: React.FC = () => {
    return (
        <div className="w-full bg-white font-sans flex flex-col min-h-screen">
            <Header />
            <main className="grow">
                <PageHeader
                    title="FDA United States Agent for Foreign Establishments"
                    breadcrumb="US Agent for Foreign Establishments"
                />
                <InnerContent>
                    <HeroImage
                        src="https://images.unsplash.com/photo-1524508762098-b9f2e10aace5?q=80&w=1400"
                        alt="FDA United States Agent for Foreign Establishments"
                        label="FDA US Agent Services"
                    />

                    <Section>
                        <SectionHeading
                            badge="Foreign Establishments"
                            title="US Agent for Foreign Establishments"
                        />
                        <div className="text-gray-600 leading-relaxed space-y-5">
                            <p>
                                In adverse events under the Medical Device Reporting regulation (21 CFR Part 803) or submitting 510(k) Premarket
                                Notifications (21 CFR Part 807, Subpart E), the United States Food and Drug Administration (FDA) requires all medical
                                devices, IVD, and pharmaceutical companies not located (foreign facility) in the United States to appoint a registered
                                FDA US Agent.
                            </p>
                            <p>
                                An appointed <strong className="text-navy-900">FDA United States Agent</strong> must be a resident of the United
                                States OR maintain a place of business in the US. Each foreign establishment may designate only one U.S. agent. The
                                foreign establishment should provide the name, address, telephone and fax numbers, and e-mail address of the U.S.
                                agent.
                            </p>
                            <p>
                                Information about a foreign establishment's U.S. Agent is submitted electronically the use of the FDA Unified
                                Registration and Listing System (FURLS machine) and is a part of the status quo registration manner. Each overseas
                                establishment can also designate only one U.S. Agent.
                            </p>
                        </div>
                    </Section>

                    <Section dark>
                        <SectionHeading
                            badge="Our Services"
                            title="How E &amp; E Medicals Supports You"
                        />
                        <InfoBox variant="dark" className="mb-8">
                            <p className="text-lg font-semibold text-white">
                                We shall function as your FDA US Agent at a reasonable annual fee.
                            </p>
                        </InfoBox>
                        <FeatureList
                            items={[
                                "Assist FDA in communications with foreign establishments.",
                                "Assist in scheduling inspections of the foreign establishment's facility.",
                                "Provide a legal US presence and address for regulatory correspondence.",
                            ]}
                        />
                    </Section>

                    <PageCTA
                        title="Appoint E&amp;E Medicals as Your FDA US Agent"
                        subtitle="We provide affordable annual FDA US Agent services for foreign medical device and pharmaceutical companies."
                    />
                </InnerContent>
            </main>
            <Footer />
        </div>
    );
};
