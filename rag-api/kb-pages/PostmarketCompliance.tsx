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

export const PostmarketCompliance: React.FC = () => {
    return (
        <div className="w-full bg-white font-sans flex flex-col min-h-screen">
            <Header />

            <main className="grow">
                <PageHeader
                    title="Clinical data and postmarket compliance under the MDR"
                    breadcrumb="Postmarket Compliance"
                />

                <InnerContent>
                    <HeroImage
                        src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1400"
                        alt="Postmarket compliance clinical data MDR surveillance"
                        label="Post-Market Surveillance"
                    />

                    <Section>
                        <SectionHeading badge="Post-Market Surveillance" title="Regulatory Post Market Surveillance Process" />
                        <div className="space-y-5 text-gray-700 leading-relaxed text-[15px] md:text-base">
                            <p>
                                It is called as medical device post-market surveillance (PMS), a system that provides continuous feedback about a device on the market. In order to high standard of product quality. PMS is a regulatory requirement in major markets like Europe and the United States. Purpose of{" "}
                                <strong className="text-navy-900">PostMarket compliance</strong> is to ensure that the provisions of medical devices. Legislation are complied with devices are placed on the market put into service. It aims to ensure that compliant devices are removed from the market. Medical device manufacturers, Other firms involved in the distribution of devices. Must follow certain requirements regulations devices are on the market.
                            </p>
                            <p>
                                To acquire this, we need a system of reporting in order that we are able to Gain feedback on our clinical devices. Which include reports of damaging events that involve them – we want publish-market surveillance (PMS). We additionally want to be reporting these events to the applicable regulatory bodies – they want to recognize that. We are taking the requisite steps to continuously enhance our commercial enterprise production practices to keep away from recurrent problems with our devices.
                            </p>
                            <p>
                                Post-marketplace surveillance become mentioned in 2005 through the now-defunct Global Harmonization Task Force (GHTF). A voluntary group of representatives from medical device regulatory corporations the regulated enterprise. A record become produced through GHTF which defined the unique obligations wanted for post-marketplace surveillance within the industry. Discussed how the requirements for every mission could be harmonized throughout regulatory environments. This file became later updated with the aid of the International{" "}
                                <Link to="/" className="text-brand-500 hover:text-brand-600 hover:underline">Medical Device Regulators</Link>{" "}
                                Forum (IMDRF) to problematic reporting suggestions for unfavorable activities.
                            </p>
                        </div>
                    </Section>

                    <Section dark>
                        <SectionHeading badge="Why E&E" title="Why E & E Medicals and Consulting?" />
                        <p className="text-gray-300 leading-relaxed text-[15px] md:text-base">
                            Our post-market surveillance experts help in coordinating investigating customer Postmarket compliance to make an initial reporting decision. Ensure completeness consistency of complaint related documentation. We conduct detailed analysis reporting of post-marketing vigilance surveillance on medical devices in the market.
                        </p>
                    </Section>

                    <PageCTA />
                </InnerContent>
            </main>

            <Footer />
        </div>
    );
};
