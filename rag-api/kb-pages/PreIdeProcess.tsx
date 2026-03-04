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
    InfoBox,
    PageCTA,
} from "../components/shared/InnerPage";

export const PreIdeProcess: React.FC = () => {
    return (
        <div className="w-full bg-white font-sans flex flex-col min-h-screen">
            <Header />
            <main className="grow">
                <PageHeader title="Pre-IDE Process" breadcrumb="Pre-IDE Process" />
                <InnerContent>
                    <HeroImage
                        src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=1400"
                        alt="Pre-IDE investigational device exemption process"
                        label="Pre-IDE Process"
                    />

                    <Section>
                        <SectionHeading
                            badge="Investigational Device"
                            title="Pre-IDE Process"
                        />
                        <div className="text-gray-600 leading-relaxed space-y-5">
                            <p>
                                An IDE is a regulatory submission that permits clinical investigation of devices. This investigation is exempt from
                                some regulatory requirements. The name "Investigational Device Exemption" stems from this description in 21 CFR 812.1:
                            </p>
                            <InfoBox variant="brand">
                                <p className="italic text-gray-800">
                                    "An approved investigational device exemption (IDE) permits a device that otherwise would be required to comply with a
                                    performance standard or to have premarket approval to be shipped lawfully for the purpose of conducting investigations
                                    of that device."
                                </p>
                            </InfoBox>
                            <p>
                                The purpose of an IDE is to encourage discovery and development of useful medical devices for human use, to the extent
                                consistent with the protection of the public health and safety and with ethical standards, while maintaining optimum
                                freedom for scientific investigators in their pursuit of that purpose.
                            </p>
                            <p>
                                FDA encourages medical device manufacturers to obtain further guidance before the submission of an IDE application.
                                This will be especially beneficial to new sponsors who had no previous contact with the agency or for sponsors
                                proposing to study new technologies or for new uses of existing technologies. Early interaction with the agency should
                                help to increase the sponsor's understanding of FDA requirements, regulations, and guidance documents. It will allow
                                FDA personnel to familiarize themselves with the new technologies.
                            </p>
                        </div>
                    </Section>

                    <Section dark>
                        <SectionHeading
                            badge="Pre-IDE Meeting"
                            title="Pre-IDE Meeting"
                        />
                        <div className="text-gray-300 leading-relaxed space-y-5">
                            <p>
                                Our qualified team of experts will successfully prepare and submit{" "}
                                <a
                                    href="https://www.fda.gov/medical-devices/device-advice-comprehensive-regulatory-assistance/overview-device-regulation"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-brand-400 hover:text-white underline transition-colors"
                                >
                                    FDA
                                </a>{" "}
                                medical device regulatory, well-researched documentation to support your IDE Process application. We will also help
                                schedule a meeting to help you answer all your medical device development questions.
                            </p>
                            <div className="pt-2">
                                <Link
                                    to="/share-your-project"
                                    className="inline-flex items-center gap-2 px-7 py-3.5 bg-brand-500 hover:bg-brand-400 text-white font-bold rounded-xl shadow-lg shadow-brand-500/25 transition-all duration-300"
                                >
                                    Request for Quote (RFQ)
                                </Link>
                            </div>
                        </div>
                    </Section>

                    <PageCTA
                        title="Start Your IDE Application Today"
                        subtitle="Our experts will prepare and submit well-researched FDA documentation to support your IDE process application."
                    />
                </InnerContent>
            </main>
            <Footer />
        </div>
    );
};
