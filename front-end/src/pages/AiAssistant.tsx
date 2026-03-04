import React, { useState } from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { PageHeader } from "../components/shared/PageHeader";
import {
    InnerContent,
    Section,
    SectionHeading,
    InfoBox,
} from "../components/shared/InnerPage";

type Role = "user" | "assistant";

interface ChatMessage {
    id: string;
    role: Role;
    content: string;
}

export const AiAssistant: React.FC = () => {
    const [messages, setMessages] = useState<ChatMessage[]>([
        {
            id: "welcome",
            role: "assistant",
            content:
                "I can answer questions about E&E Medicals’ services, medical device and drug regulations, AI-enabled regulatory strategy, and related topics based on this website’s content. How can I help?",
        },
    ]);
    const [input, setInput] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const question = input.trim();
        if (!question || isLoading) return;

        const userMessage: ChatMessage = {
            id: `user-${Date.now()}`,
            role: "user",
            content: question,
        };

        setMessages((prev) => [...prev, userMessage]);
        setInput("");
        setError(null);
        setIsLoading(true);

        try {
            const base = import.meta.env.VITE_API_BASE_URL ?? "";
            const response = await fetch(`${base}/api/rag`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    query: question,
                    history: messages.map((m) => ({
                        role: m.role,
                        content: m.content,
                    })),
                }),
            });

            if (!response.ok) {
                throw new Error("The AI service is temporarily unavailable. Please try again.");
            }

            const data: { answer: string } = await response.json();

            const assistantMessage: ChatMessage = {
                id: `assistant-${Date.now()}`,
                role: "assistant",
                content: data.answer,
            };

            setMessages((prev) => [...prev, assistantMessage]);
        } catch (err) {
            setError(
                err instanceof Error ? err.message : "Something went wrong. Please try again.",
            );
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex flex-col font-sans bg-white">
            <Header />

            <main className="grow">
                <PageHeader
                    title="AI Medical & Regulatory Assistant"
                    breadcrumb="AI Assistant"
                />

                <InnerContent>
                    <Section>
                        <SectionHeading
                            badge="AI-Enabled Support"
                            title="Ask Questions About Medical Devices, Drugs, and Compliance"
                            subtitle="This assistant is grounded in E&E Medicals’ own website content — including AI regulatory services, device and drug pathways, and quality system guidance — to provide focused, domain-specific answers."
                        />
                        <InfoBox variant="warning" className="mb-6">
                            <p className="text-sm md:text-[15px] leading-relaxed">
                                This tool is for general information only and does not replace medical advice, legal advice, or direct guidance from
                                regulators. Always consult qualified professionals before making clinical, regulatory, or business decisions.
                            </p>
                        </InfoBox>

                        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)] gap-8 items-start">
                            <div className="rounded-2xl border border-gray-100 bg-slate-50/70 flex flex-col h-[520px]">
                                <div className="flex-1 overflow-y-auto p-4 md:p-5 space-y-4">
                                    {messages.map((m) => (
                                        <div
                                            key={m.id}
                                            className={`flex ${
                                                m.role === "user" ? "justify-end" : "justify-start"
                                            }`}
                                        >
                                            <div
                                                className={`max-w-[80%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
                                                    m.role === "user"
                                                        ? "bg-brand-500 text-white rounded-br-sm"
                                                        : "bg-white text-gray-800 border border-gray-100 rounded-bl-sm"
                                                }`}
                                            >
                                                {m.content}
                                            </div>
                                        </div>
                                    ))}
                                    {isLoading && (
                                        <div className="flex items-center gap-2 text-xs text-gray-500">
                                            <span className="w-2 h-2 rounded-full bg-brand-400 animate-bounce" />
                                            <span>Thinking based on site content…</span>
                                        </div>
                                    )}
                                </div>
                                <form
                                    onSubmit={handleSubmit}
                                    className="border-t border-gray-100 bg-white rounded-b-2xl p-3 md:p-4 flex items-center gap-3"
                                >
                                    <textarea
                                        value={input}
                                        onChange={(e) => setInput(e.target.value)}
                                        placeholder="Ask about AI regulatory strategy, FDA pathways, EU MDR, AI Act, or our services…"
                                        rows={2}
                                        className="flex-1 resize-none text-sm border border-gray-200 rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand-500/30 focus:border-brand-400"
                                    />
                                    <button
                                        type="submit"
                                        disabled={isLoading || !input.trim()}
                                        className="inline-flex items-center justify-center px-4 py-2.5 rounded-xl bg-brand-500 text-white text-sm font-semibold disabled:opacity-60 disabled:cursor-not-allowed hover:bg-brand-400 transition-colors whitespace-nowrap"
                                    >
                                        {isLoading ? "Sending…" : "Ask"}
                                    </button>
                                </form>
                                {error && (
                                    <div className="px-4 pb-3 text-xs text-red-600">
                                        {error}
                                    </div>
                                )}
                            </div>

                            <div className="space-y-5 text-sm text-gray-600">
                                <h3 className="font-display text-base font-bold text-navy-900">
                                    What this assistant is trained on
                                </h3>
                                <ul className="space-y-2">
                                    <li className="flex items-start gap-2">
                                        <span className="mt-1 w-1.5 h-1.5 rounded-full bg-brand-500" />
                                        <span>
                                            AI-enabled regulatory pages (AI regulatory strategy, AI SaMD pathway, FDA readiness, PCCP authoring, AI design
                                            controls, FDA defense).
                                        </span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="mt-1 w-1.5 h-1.5 rounded-full bg-brand-500" />
                                        <span>
                                            Core service pages for medical devices, pharmaceuticals, quality systems, CE/CCC mark approvals, and audits.
                                        </span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="mt-1 w-1.5 h-1.5 rounded-full bg-brand-500" />
                                        <span>
                                            Media &amp; news content and any curated FAQs you add for common regulatory and compliance questions.
                                        </span>
                                    </li>
                                </ul>
                                <p className="text-xs text-gray-500">
                                    Answers are generated using retrieval-augmented generation (RAG): we first retrieve the most relevant content from this
                                    website, then use it to craft a concise response.
                                </p>
                            </div>
                        </div>
                    </Section>
                </InnerContent>
            </main>

            <Footer />
        </div>
    );
};

