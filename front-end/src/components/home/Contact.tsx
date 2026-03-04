import React from "react";
import { MapPin, Mail, Phone, Clock, Send } from "lucide-react";

export const Contact: React.FC = () => {
    return (
        <section className="py-24 px-4 md:px-8 bg-white">
            <div className="max-w-[1400px] mx-auto">
                {/* Section Header */}
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-50 border border-brand-100 mb-6">
                        <span className="text-brand-600 text-sm font-semibold">
                            Get In Touch
                        </span>
                    </div>
                    <h2 className="font-display text-3xl md:text-4xl lg:text-[2.75rem] font-extrabold text-navy-900 mb-5">
                        We'd <span className="gradient-text">Love</span> to Hear
                        From You
                    </h2>
                    <p className="text-gray-500 text-lg leading-relaxed">
                        Have questions about regulatory compliance? Our team of
                        experts is ready to help.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
                    {/* Contact Cards */}
                    <div className="lg:col-span-2 flex flex-col gap-3">
                        {/* Office Image */}
                        <div className="relative rounded-2xl overflow-hidden group mb-1">
                            <img
                                src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=1400&auto=format&fit=crop"
                                alt="E&E Medicals Office Atlanta"
                                className="w-full h-[200px] object-cover object-center transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-navy-900/30 to-transparent" />
                            <div className="absolute bottom-4 left-5">
                                <p className="text-white font-display font-bold text-sm">Atlanta, Georgia</p>
                                <p className="text-gray-300 text-xs">Global Headquarters</p>
                            </div>
                        </div>
                        {[
                            {
                                icon: MapPin,
                                title: "Our Office",
                                lines: [
                                    "400 Galleria Pkwy Suite 1500",
                                    "Atlanta, GA 30339",
                                ],
                            },
                            {
                                icon: Mail,
                                title: "Email Us",
                                lines: ["info@eemedicals.com"],
                                isLink: true,
                            },
                            {
                                icon: Phone,
                                title: "Call Us",
                                lines: [
                                    "+1-678-385-6106",
                                    "+1-678-815-9233",
                                ],
                            },
                            {
                                icon: Clock,
                                title: "Business Hours",
                                lines: [
                                    "Mon - Fri: 9am - 6pm (EST)",
                                    "Sat, Sun: Closed",
                                ],
                            },
                        ].map(({ icon: Icon, title, lines, isLink }) => (
                            <div
                                key={title}
                                className="flex items-start gap-4 p-5 rounded-xl bg-slate-50 border border-gray-100 hover:border-brand-200 hover:shadow-md hover:shadow-brand-500/5 transition-all duration-300 group"
                            >
                                <div className="w-11 h-11 rounded-xl bg-brand-50 border border-brand-100 flex items-center justify-center shrink-0 group-hover:bg-brand-500 group-hover:border-brand-500 transition-all duration-400">
                                    <Icon
                                        size={18}
                                        className="text-brand-500 group-hover:text-white transition-colors duration-400"
                                    />
                                </div>
                                <div>
                                    <h3 className="text-sm font-bold text-navy-900 mb-1">
                                        {title}
                                    </h3>
                                    {lines.map((line, i) =>
                                        isLink ? (
                                            <a
                                                key={i}
                                                href={`mailto:${line}`}
                                                className="block text-sm text-brand-500 hover:text-brand-600 font-medium transition-colors"
                                            >
                                                {line}
                                            </a>
                                        ) : (
                                            <p
                                                key={i}
                                                className="text-sm text-gray-500"
                                            >
                                                {line}
                                            </p>
                                        )
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Contact Form */}
                    <div className="lg:col-span-3">
                        <div className="bg-white rounded-2xl shadow-xl shadow-black/[0.04] border border-gray-100 p-8 md:p-10">
                            <h3 className="font-display text-xl font-bold text-navy-900 mb-1.5">
                                Send us a message
                            </h3>
                            <p className="text-sm text-gray-400 mb-8">
                                Fill out the form below and we'll get back to you
                                within 24 hours.
                            </p>

                            <form className="space-y-5">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                    <div>
                                        <label className="block text-xs font-semibold text-navy-800 uppercase tracking-wider mb-2">
                                            First Name
                                        </label>
                                        <input
                                            type="text"
                                            placeholder="John"
                                            className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 transition-all duration-200 text-sm"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-semibold text-navy-800 uppercase tracking-wider mb-2">
                                            Last Name
                                        </label>
                                        <input
                                            type="text"
                                            placeholder="Doe"
                                            className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 transition-all duration-200 text-sm"
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                    <div>
                                        <label className="block text-xs font-semibold text-navy-800 uppercase tracking-wider mb-2">
                                            Email
                                        </label>
                                        <input
                                            type="email"
                                            placeholder="john@company.com"
                                            className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 transition-all duration-200 text-sm"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-semibold text-navy-800 uppercase tracking-wider mb-2">
                                            Phone
                                        </label>
                                        <input
                                            type="tel"
                                            placeholder="+1 (555) 000-0000"
                                            className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 transition-all duration-200 text-sm"
                                            required
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-xs font-semibold text-navy-800 uppercase tracking-wider mb-2">
                                        Message
                                    </label>
                                    <textarea
                                        placeholder="Tell us about your project or regulatory needs..."
                                        rows={5}
                                        className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 transition-all duration-200 text-sm resize-none"
                                        required
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="w-full inline-flex items-center justify-center gap-2.5 bg-brand-500 hover:bg-brand-400 text-white font-bold py-4 rounded-xl shadow-lg shadow-brand-500/25 hover:shadow-brand-500/40 hover:shadow-xl transition-all duration-300 text-sm group"
                                >
                                    Send Message
                                    <Send
                                        size={15}
                                        className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                                    />
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
