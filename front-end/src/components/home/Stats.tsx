import React from "react";
import { Briefcase, Users, Award, ShieldCheck } from "lucide-react";
import type { StatType } from "../../types";

const statsData: StatType[] = [
    { id: "1", value: "470+", label: "Successful Projects", icon: Briefcase },
    { id: "2", value: "63", label: "FDA Regulatory Experts", icon: Users },
    { id: "3", value: "266+", label: "FDA 510(k) Submissions", icon: Award },
    { id: "4", value: "213+", label: "ISO 13485 Implementations", icon: ShieldCheck },
];

export const Stats: React.FC = () => {
    return (
        <section className="py-20 px-4 md:px-8 bg-blue-900 text-white relative">
            {/* Background Image Placeholder */}
            <div className="absolute inset-0 bg-blue-950 opacity-80 z-0"></div>

            <div className="max-w-7xl mx-auto relative z-10 text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">We have over 32 years experience</h2>
                <div className="w-24 h-1 bg-blue-500 mx-auto mb-6"></div>
                <p className="text-lg text-blue-100 max-w-3xl mx-auto">
                    We have well-established partners in the EU, Asia, and USA. Our customers not only consider us as consultants but also as
                    outsourcing partners.
                </p>
            </div>

            <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {statsData.map((stat) => (
                    <div key={stat.id} className="flex flex-col items-center p-6 text-center">
                        <stat.icon size={48} className="text-blue-400 mb-4" />
                        <span className="text-4xl font-extrabold mb-2">{stat.value}</span>
                        <span className="text-sm font-semibold uppercase tracking-wider text-blue-200">{stat.label}</span>
                    </div>
                ))}
            </div>
        </section>
    );
};
