import React from "react";

export const AboutDetails: React.FC = () => {
    return (
        <section className="bg-gray-50 py-24 px-4 md:px-8">
            <div className="max-w-7xl mx-auto flex flex-col gap-20">
                {/* Top Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
                    {/* Left Side: Line and Heading */}
                    <div className="flex items-start gap-6">
                        <div className="w-12 h-1 bg-blue-600 mt-4 shrink-0"></div>
                        <h2 className="text-3xl md:text-4xl font-bold text-black leading-snug">
                            We do Quality, Reliability and Safety assessments on medical devices.
                        </h2>
                    </div>

                    {/* Right Side: Paragraph */}
                    <div>
                        <p className="text-gray-600 text-lg leading-relaxed">
                            We assist and conduct reliability and safety assessment on medical devices for many companies in preparation for FDA
                            approval. Using Reliability Prediction, FMECA (ISO 9000 and ISO 14971), we also offer – Product Design Assistance, Test
                            Plan Development, and MTBF Analysis. Our services have been instrumental in making Medical devices safer and more
                            reliable.
                        </p>
                    </div>
                </div>

                {/* Lower Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
                    {/* Left Side: Line and Heading */}
                    <div className="flex items-start gap-6">
                        <div className="w-12 h-1 bg-blue-600 mt-4 shrink-0"></div>
                        <h2 className="text-3xl md:text-4xl font-bold text-black leading-snug">
                            We prepare you to sell your medical devices and supplies.
                        </h2>
                    </div>

                    {/* Right Side: Paragraph */}
                    <div>
                        <p className="text-gray-600 text-lg leading-relaxed">
                            In the first place, selling your medical devices requires you to obtain registration and approval from regulatory agencies
                            in each country where you plan to sell your device. Product registration requirements may vary significantly from country
                            to country, which may present challenges for businesses implementing multiple-market strategies. Depending on where you
                            plan to sell your device(s), successful registration can entail significant effort to meet the pre-market technical and
                            clinical submission criteria or to exploit your current listings and approvals to gain faster access to new markets.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};
