import React from "react";
import { Users } from "lucide-react";

interface TeamPhotoContent {
    heading?: string;
    subheading?: string;
    team_photo?: string;
    team_photo_alt?: string;
}

export const TeamPhoto: React.FC<{ content?: TeamPhotoContent | null }> = ({ content }) => {
    const photo = content?.team_photo;

    return (
        <section className="py-20 md:py-28 px-4 md:px-8 bg-gray-50">
            <div className="max-w-[1400px] mx-auto">
                {/* Header */}
                <div className="text-center max-w-2xl mx-auto mb-12">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-50 border border-brand-100 mb-5">
                        <Users size={13} className="text-brand-500" />
                        <span className="text-brand-600 text-xs font-bold uppercase tracking-wider">
                            Our Team
                        </span>
                    </div>
                    <h2 className="font-display text-3xl md:text-4xl font-extrabold text-navy-900 leading-tight">
                        {content?.heading || "Meet the Experts Behind Your Success"}
                    </h2>
                    {content?.subheading && (
                        <p className="text-gray-500 text-lg leading-relaxed mt-4">
                            {content.subheading}
                        </p>
                    )}
                </div>

                {/* Photo */}
                <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-navy-950/10 border border-gray-100">
                    {photo ? (
                        <img
                            src={photo}
                            alt={content?.team_photo_alt || "E&E Medicals team"}
                            className="w-full max-h-[600px] object-cover object-center"
                        />
                    ) : (
                        <div className="w-full h-72 md:h-[420px] bg-gradient-to-br from-gray-100 to-gray-200 flex flex-col items-center justify-center gap-3">
                            <div className="w-20 h-20 rounded-2xl bg-white/80 flex items-center justify-center shadow-sm">
                                <Users size={40} className="text-gray-300" />
                            </div>
                            <p className="text-gray-400 font-semibold text-sm">
                                Team photo — upload via Admin panel
                            </p>
                        </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-950/15 via-transparent to-transparent pointer-events-none" />
                </div>
            </div>
        </section>
    );
};
