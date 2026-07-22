import React, { useEffect, useState } from "react";

interface PastReviewsContent {
  section_heading?: string;
  section_subtext?: string;
}

interface Review {
  id: number;
  name: string;
  title: string;
  quote: string;
  rating: number;
}

export const PastReviews: React.FC<{ content?: PastReviewsContent | null }> = ({ content }) => {
    const [reviews, setReviews] = useState<Review[]>([]);

    useEffect(() => {
        fetch("/api/reviews")
            .then((r) => r.json())
            .then((data) => { if (Array.isArray(data.reviews)) setReviews(data.reviews); })
            .catch(() => {/* silently ignore — section stays empty */});
    }, []);

    if (reviews.length === 0) return null;

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
                    {reviews.map((review) => (
                        <article
                            key={review.id}
                            className="relative h-full rounded-2xl bg-white shadow-sm shadow-slate-200 border border-slate-100 p-6 flex flex-col"
                        >
                            <div className="absolute -top-4 left-6 w-8 h-8 rounded-full bg-brand-500 flex items-center justify-center text-white text-xl">
                                "
                            </div>
                            <div className="mt-4">
                                {review.title && (
                                    <h3 className="text-sm font-bold text-brand-700 uppercase tracking-wide">
                                        {review.title}
                                    </h3>
                                )}
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
