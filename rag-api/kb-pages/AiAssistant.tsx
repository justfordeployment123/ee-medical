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
                "Hi—I'm the E&E Medicals Regulatory Advisor (AI). I can help map your FDA / CE / SaMD pathway and what evidence you'll likely need. What best describes your product?",
        },
    ]);
    const [input, setInput] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const SUGGESTED_PROMPTS = [
        "Medical device (hardware)",
        "Software / SaMD / AI",
        "IVD / diagnostic",
        "Wellness app (non-medical)",
        "Not sure — help me classify",
        "I need a 510(k) / De Novo / PMA plan",
        "EU MDR / CE Mark",
    ];

    const sendMessage = async (overrideQuestion?: string) => {
        const question = (overrideQuestion ?? input.trim()).trim();
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

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        void sendMessage(undefined);
    };

    return (
        <div className="min-h-screen flex flex-col font-sans bg-white">
            <Header />

            <main className="grow">
                <PageHeader
                    title="Regulatory Intelligence Assistant"
                    breadcrumb="Regulatory Advisor"
                />

                <InnerContent>
                    <Section>
                        <SectionHeading
                            badge="Regulatory Intelligence"
                            title="Pre-Consultation Advisor & Lead Qualification"
                            subtitle="This Regulatory Intelligence Assistant acts as a Pre-Consultation Advisor—not a generic chatbot. It answers pathway questions (510(k), De Novo, PMA), document requirements, and timelines, then routes qualified leads to our strategy team."
                        />
                        <InfoBox variant="warning" className="mb-6">
                            <p className="text-sm md:text-[15px] leading-relaxed">
                                Educational guidance only—not legal advice. Final regulatory determinations require a formal review. Contact qualified professionals for clinical, regulatory, or business decisions.
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
                                    {messages.length <= 1 && !isLoading && (
                                        <div className="flex flex-wrap gap-2 pt-2">
                                            {SUGGESTED_PROMPTS.map((text) => (
                                                <button
                                                    key={text}
                                                    type="button"
                                                    onClick={() => void sendMessage(text)}
                                                    className="text-xs px-3 py-2 rounded-xl bg-brand-50 text-brand-700 border border-brand-100 hover:bg-brand-100 hover:border-brand-200 transition-colors text-left"
                                                >
                                                    {text}
                                                </button>
                                            ))}
                                        </div>
                                    )}
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
                                        placeholder="Pathway? 510(k) docs? Timeline? Book strategy call…"
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
                                    What this advisor covers
                                </h3>
                                <ul className="space-y-2">
                                    <li className="flex items-start gap-2">
                                        <span className="mt-1 w-1.5 h-1.5 rounded-full bg-brand-500" />
                                        <span>
                                            Regulatory pathway questions: 510(k), De Novo, PMA, AI SaMD, EU MDR, AI Act.
                                        </span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="mt-1 w-1.5 h-1.5 rounded-full bg-brand-500" />
                                        <span>
                                            Document requirements, submission timelines, cost estimates, and lead qualification.
                                        </span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="mt-1 w-1.5 h-1.5 rounded-full bg-brand-500" />
                                        <span>
                                            Curated FAQs and service pages. Uses RAG to retrieve from website content.
                                        </span>
                                    </li>
                                </ul>
                                <p className="text-xs text-gray-500">
                                    Concludes with CTAs (e.g. Book a Strategy Call, Request a proposal) to convert visitors into consulting clients.
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

