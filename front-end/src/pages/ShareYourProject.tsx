import React, { useState } from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { PageHeader } from "../components/shared/PageHeader";
import { Send, FileText } from "lucide-react";
import { useContent } from "../hooks/useContent";

const PURPOSE_OPTIONS = [
    "Please Select",
    "FDA 510(k) / De Novo / PMA",
    "EU MDR / IVDR / CE Mark",
    "Quality Management System (QMS)",
    "AI/ML Medical Device",
    "Drug / Biologics Submission",
    "Clinical Evaluation",
    "Other Regulatory Support",
];

export const ShareYourProject: React.FC = () => {
    const content = useContent("share_project");
    const header = content?.header;
    const intro = content?.intro;
    const form = content?.form;

    const purposeOptions = (form?.purpose_options || PURPOSE_OPTIONS.join("\n"))
        .split("\n")
        .map((item) => item.trim())
        .filter(Boolean);

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        purpose: "",
        phone: "",
        message: "",
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // TODO: wire to backend or email service
        console.log("Enquiry submitted:", formData);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    return (
        <div className="w-full bg-white font-sans flex flex-col min-h-screen">
            <Header />

            <main className="grow">
                <PageHeader
                    title={header?.title || "Share Your Project"}
                    breadcrumb={header?.breadcrumb || "Enquiry Form"}
                />

                <div className="max-w-[1400px] mx-auto px-4 md:px-8 py-16 md:py-20">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
                        {/* Left: CTA */}
                        <div>
                            <h2 className="font-display text-2xl md:text-3xl font-extrabold text-navy-900 mb-6 leading-tight">
                                {intro?.heading || "Ready to Start Your Product Development Project or Regulatory Submission?"}
                            </h2>
                            <p className="text-gray-800 text-base md:text-lg leading-relaxed font-medium mb-6">
                                {intro?.paragraph1 || "Drive successful product development projects and regulatory submissions for medical, life science, and industrial technologies. Without the right engineering or design expertise, technology businesses can face costly delays and compliance gaps."}
                            </p>
                            <p className="text-gray-800 text-base leading-relaxed font-medium">
                                {intro?.paragraph2 || "Share your project details below and our team will get back to you to discuss how we can support your regulatory and quality goals."}
                            </p>
                            <div className="mt-10 flex items-center gap-3 text-brand-600 font-semibold">
                                <FileText size={20} />
                                <span>{intro?.note_text || "Enquiry Form - Share Your Project"}</span>
                            </div>
                        </div>

                        {/* Right: Enquiry Form */}
                        <div className="bg-white rounded-2xl shadow-xl shadow-black/[0.06] border border-gray-100 p-8 md:p-10">
                            <h3 className="font-display text-xl font-bold text-navy-900 mb-1.5">
                                {form?.form_title || "Enquiry Form"}
                            </h3>
                            <p className="text-base text-gray-700 font-medium mb-8">
                                {form?.form_subtitle || "Tell us about your project. We'll respond within 24 hours."}
                            </p>

                            <form onSubmit={handleSubmit} className="space-y-5">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                    <div>
                                        <label className="block text-sm font-bold text-navy-800 mb-2">
                                            {form?.label_first_name || "First Name"} <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            name="firstName"
                                            value={formData.firstName}
                                            onChange={handleChange}
                                            placeholder={form?.placeholder_first_name || "John"}
                                            className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 transition-all duration-200 text-base font-medium"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-bold text-navy-800 mb-2">
                                            {form?.label_last_name || "Last Name"} <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            name="lastName"
                                            value={formData.lastName}
                                            onChange={handleChange}
                                            placeholder={form?.placeholder_last_name || "Doe"}
                                            className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 transition-all duration-200 text-base font-medium"
                                            required
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-navy-800 mb-2">
                                        {form?.label_email || "Email"} <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder={form?.placeholder_email || "john@company.com"}
                                        className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 transition-all duration-200 text-base font-medium"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-navy-800 mb-2">
                                        {form?.label_purpose || "Purpose"} <span className="text-red-500">*</span>
                                    </label>
                                    <select
                                        name="purpose"
                                        value={formData.purpose}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 transition-all duration-200 text-base font-medium"
                                        required
                                    >
                                        {purposeOptions.map((opt) => (
                                            <option key={opt} value={opt}>
                                                {opt}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-navy-800 mb-2">
                                        {form?.label_phone || "Phone"}
                                    </label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        placeholder={form?.placeholder_phone || "+1 (555) 000-0000"}
                                        className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 transition-all duration-200 text-base font-medium"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-navy-800 mb-2">
                                        {form?.label_message || "Project Details / Message"}
                                    </label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        placeholder={form?.placeholder_message || "Tell us about your project, device, or regulatory needs..."}
                                        rows={5}
                                        className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 transition-all duration-200 text-base font-medium resize-none"
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="w-full inline-flex items-center justify-center gap-2.5 bg-brand-500 hover:bg-brand-400 text-white font-bold py-4 rounded-xl shadow-lg shadow-brand-500/25 hover:shadow-brand-500/40 hover:shadow-xl transition-all duration-300 text-base group"
                                >
                                    {form?.submit_text || "Submit Enquiry"}
                                    <Send size={18} className="group-hover:translate-x-0.5 transition-transform" />
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};
