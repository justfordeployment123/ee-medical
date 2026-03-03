import React from "react";
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock, Facebook, Twitter, Linkedin, Youtube, ArrowRight } from "lucide-react";
import EandELogo from "../assets/EandE-logo.png";

export const Footer: React.FC = () => {
    return (
        <footer className="relative overflow-hidden">
            {/* Top Wave */}
            <div className="bg-white">
                <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
                    <path d="M0 0L60 8C120 16 240 32 360 36C480 40 600 32 720 28C840 24 960 24 1080 28C1200 32 1320 40 1380 44L1440 48V60H1380C1320 60 1200 60 1080 60C960 60 840 60 720 60C600 60 480 60 360 60C240 60 120 60 60 60H0Z" fill="#050e1d"/>
                </svg>
            </div>

            <div className="bg-gradient-to-b from-navy-950 to-navy-900">
                <div className="max-w-[1400px] mx-auto px-4 md:px-8 pt-16 pb-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">
                        {/* Brand Column */}
                        <div className="lg:col-span-1">
                            <Link to="/" className="block mb-6">
                                <img
                                    src={EandELogo}
                                    alt="E & E Medicals"
                                    className="h-14 w-auto object-contain rounded-md"
                                />
                            </Link>
                            <p className="text-gray-400 text-sm leading-relaxed mb-6">
                                Expert FDA regulatory consulting, quality management, and medical device compliance services with over 32 years of industry experience.
                            </p>
                            <div className="flex gap-2">
                                {[Facebook, Twitter, Linkedin, Youtube].map((Icon, i) => (
                                    <a key={i} href="#" className="w-9 h-9 rounded-lg bg-white/5 hover:bg-brand-500 flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300">
                                        <Icon size={16} />
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Quick Links */}
                        <div>
                            <h3 className="text-white text-sm font-bold uppercase tracking-wider mb-6 flex items-center gap-2">
                                <span className="w-5 h-0.5 bg-brand-500 rounded-full" />
                                Quick Links
                            </h3>
                            <ul className="space-y-3">
                                {[
                                    { to: "/about", label: "About Us" },
                                    { to: "/fda-510k-application", label: "FDA 510(k)" },
                                    { to: "/iso-13485-medical-quality-system-registration", label: "ISO 13485" },
                                    { to: "/ce-mark-approval", label: "CE Mark Approval" },
                                    { to: "/software", label: "Software Development" },
                                    { to: "/media", label: "Media & Blog" },
                                ].map(({ to, label }) => (
                                    <li key={to}>
                                        <Link to={to} className="text-gray-400 hover:text-brand-400 text-sm transition-colors duration-200 flex items-center gap-2 group">
                                            <ArrowRight size={12} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
                                            <span className="group-hover:translate-x-0.5 transition-transform">{label}</span>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Services */}
                        <div>
                            <h3 className="text-white text-sm font-bold uppercase tracking-wider mb-6 flex items-center gap-2">
                                <span className="w-5 h-0.5 bg-brand-500 rounded-full" />
                                Services
                            </h3>
                            <ul className="space-y-3">
                                {[
                                    { to: "/reliability", label: "Reliability Testing" },
                                    { to: "/quality-assurance-audits", label: "Quality Audits" },
                                    { to: "/quality-management-system-implementation", label: "QMS Implementation" },
                                    { to: "/ai-samd-pathway", label: "AI SaMD Pathway" },
                                    { to: "/fda-establishment-registration", label: "FDA Registration" },
                                    { to: "/investigational-new-drug-ind-application", label: "IND Applications" },
                                ].map(({ to, label }) => (
                                    <li key={to}>
                                        <Link to={to} className="text-gray-400 hover:text-brand-400 text-sm transition-colors duration-200 flex items-center gap-2 group">
                                            <ArrowRight size={12} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
                                            <span className="group-hover:translate-x-0.5 transition-transform">{label}</span>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Contact Info */}
                        <div>
                            <h3 className="text-white text-sm font-bold uppercase tracking-wider mb-6 flex items-center gap-2">
                                <span className="w-5 h-0.5 bg-brand-500 rounded-full" />
                                Contact Us
                            </h3>
                            <ul className="space-y-4">
                                {[
                                    { icon: MapPin, text: "400 Galleria Pkwy Suite 1500, Atlanta, GA 30339" },
                                    { icon: Phone, text: "+1-678-385-6106" },
                                    { icon: Mail, text: "info@eemedicals.com", isLink: true },
                                    { icon: Clock, text: "Mon - Fri: 9am - 6pm EST" },
                                ].map(({ icon: Icon, text, isLink }, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center shrink-0 mt-0.5">
                                            <Icon size={14} className="text-brand-400" />
                                        </div>
                                        {isLink ? (
                                            <a href={`mailto:${text}`} className="text-sm text-brand-400 hover:text-brand-300 transition-colors">{text}</a>
                                        ) : (
                                            <span className="text-sm text-gray-400">{text}</span>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Bottom Bar */}
                    <div className="pt-8 border-t border-white/5 space-y-5">
                        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                            <div className="flex items-center gap-5 text-xs text-gray-500">
                                <div className="flex items-center gap-1.5">
                                    <Clock size={12} className="text-brand-400" />
                                    <span>Mon - Fri: 9:00 AM - 6:00 PM EST</span>
                                </div>
                                <div className="w-px h-3 bg-white/10 hidden md:block" />
                                <a href="mailto:info@eemedicals.com" className="flex items-center gap-1.5 hover:text-brand-400 transition-colors">
                                    <Mail size={11} className="text-brand-400" />
                                    <span>info@eemedicals.com</span>
                                </a>
                            </div>
                            <div className="flex items-center gap-2">
                                {[Facebook, Twitter, Linkedin, Youtube].map((Icon, i) => (
                                    <a key={i} href="#" className="w-7 h-7 rounded-full bg-white/5 hover:bg-brand-500 flex items-center justify-center text-gray-500 hover:text-white transition-all duration-200">
                                        <Icon size={13} />
                                    </a>
                                ))}
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-gray-600">
                            <p>
                                &copy; {new Date().getFullYear()} E & E Medicals and Consulting. All rights reserved.
                            </p>
                            <div className="flex gap-6">
                                <a href="#" className="hover:text-gray-300 transition-colors">Terms of Use</a>
                                <a href="#" className="hover:text-gray-300 transition-colors">Privacy Policy</a>
                                <a href="#" className="hover:text-gray-300 transition-colors">Cookie Policy</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};
