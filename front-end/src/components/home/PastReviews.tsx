import React from "react";

interface PastReviewsContent {
  section_heading?: string;
  section_subtext?: string;
}

const reviews = [
    {
        name: "Maria Abba",
        title: "Happy customer",
        quote:
            "Very knowledgeable and professional with excellent customer service. I would do business with them again.",
    },
    {
        name: "IT SPECIALIST",
        title: "Super & Superb",
        quote:
            "They were very knowledgeable about the equipment they supply. They answered all my questions on the care and maintenance. I am enjoying the machine I bought from them. This is an excellent company compared to the one my wife was using before.",
    },
    {
        name: "Ebini Mbi",
        title: "Astounding Service.",
        quote:
            "I am really happy with the service of E&E MEDICALS. To me, E&E MEDICALS was above any other medical supply companies I have dealt with. Dr. Eyong was very helpful and professional. E&E MEDICALS is a place to call and visit for all your medical supplies. Their products are amazing with excellent and superb service. They truely care about helping other. I strongly recommend E&E MEDICALS to everyone.",
    },
    {
        name: "Cynthia T.",
        title: "Speedy FDA 510k Submission Service",
        quote:
            "After working with more than 30 consultants in the medical industry, I discovered that the consultants of E&E Medicals are more experience in FDA regulatory and medical device development. They understand not only the regulatory side of your submission but also the marketing aspects of medical devices. Our 510k submission was speedy, and clearance was achieved within 59 days. They are the best!",
    },
    {
        name: "Anthony Nkokwoh",
        title: "Great customer services",
        quote:
            "You have excellent customer service and high quality products. I enjoyed the way your staff treated me through out the whole process. I will definitely come back for more products.",
    },
];

export const PastReviews: React.FC<{ content?: PastReviewsContent | null }> = ({ content }) => {
    return (
        <section className="py-20 px-4 md:px-8 bg-slate-50 border-t border-slate-200">
            <div className="max-w-[1200px] mx-auto">
                <div className="text-center mb-12">
                    <p className="inline-flex items-center px-4 py-1.5 rounded-full bg-brand-50 text-brand-700 text-xs font-semibold tracking-wide uppercase">
                        Past Reviews
                    </p>
                    <h2 className="mt-4 text-2xl md:text-3xl font-extrabold text-navy-900">
                        {content?.section_heading || 'What Our Customers & Partners Say'}
                    </h2>
                    <p className="mt-3 text-sm md:text-base text-slate-600 max-w-2xl mx-auto">
                        {content?.section_subtext || 'Real experiences from clients who have trusted E & E Medicals and Consulting for medical supplies, regulatory consulting, and FDA submissions.'}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {reviews.map((review, index) => (
                        <article
                            key={index}
                            className="relative h-full rounded-2xl bg-white shadow-sm shadow-slate-200 border border-slate-100 p-6 flex flex-col"
                        >
                            <div className="absolute -top-4 left-6 w-8 h-8 rounded-full bg-brand-500 flex items-center justify-center text-white text-xl">
                                “
                            </div>
                            <div className="mt-4">
                                <h3 className="text-sm font-bold text-brand-700 uppercase tracking-wide">
                                    {review.title}
                                </h3>
                                <p className="mt-3 text-[13px] md:text-sm text-slate-700 leading-relaxed">
                                    {review.quote}
                                </p>
                            </div>
                            <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-slate-700">
                                <span>{review.name}</span>
                                <span className="text-[11px] text-slate-500">Past review</span>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

