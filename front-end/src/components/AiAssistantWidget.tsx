import React, { useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { InfoBox } from "./shared/InnerPage";

type Role = "user" | "assistant";

interface ChatMessage {
    id: string;
    role: Role;
    content: string;
}

export const AiAssistantWidget: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
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

    const sendMessage = async () => {
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

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        void sendMessage();
    };

    return (
        <div className="fixed bottom-4 right-4 z-40">
            {/* Chat Panel */}
            {isOpen && (
                <div className="mb-3 w-[320px] sm:w-[380px] rounded-2xl shadow-2xl shadow-navy-950/20 border border-gray-200 bg-white flex flex-col overflow-hidden">
                    <div className="flex items-center justify-between px-4 py-3 bg-gradient-to-r from-navy-950 to-navy-800 text-white">
                        <div>
                            <p className="text-xs font-semibold uppercase tracking-wider text-brand-300">
                                AI-Enabled Support
                            </p>
                            <p className="text-sm font-bold">
                                E&amp;E Medicals Assistant
                            </p>
                        </div>
                        <button
                            type="button"
                            onClick={() => setIsOpen(false)}
                            className="p-1.5 rounded-full hover:bg-white/10 transition-colors"
                            aria-label="Close assistant"
                        >
                            <X size={16} />
                        </button>
                    </div>

                    <div className="px-3 pt-3">
                        <InfoBox variant="warning" className="mb-2 px-3 py-3">
                            <p className="text-[11px] leading-relaxed">
                                Informational only — not medical or legal advice. For decisions, always consult qualified professionals or contact{" "}
                                <a href="mailto:info@eemedicals.com" className="underline font-semibold">
                                    info@eemedicals.com
                                </a>
                                .
                            </p>
                        </InfoBox>
                    </div>

                    <div className="flex flex-col h-[380px]">
                        <div className="flex-1 overflow-y-auto px-3 pb-3 space-y-3">
                            {messages.map((m) => (
                                <div
                                    key={m.id}
                                    className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
                                >
                                    <div
                                        className={`max-w-[80%] rounded-2xl px-3 py-2 text-xs leading-relaxed ${
                                            m.role === "user"
                                                ? "bg-brand-500 text-white rounded-br-sm"
                                                : "bg-slate-50 text-gray-800 border border-gray-100 rounded-bl-sm"
                                        }`}
                                    >
                                        {m.content}
                                    </div>
                                </div>
                            ))}
                            {isLoading && (
                                <div className="flex items-center gap-2 text-[11px] text-gray-500 px-1">
                                    <span className="w-2 h-2 rounded-full bg-brand-400 animate-bounce" />
                                    <span>Thinking based on E&amp;E Medicals content…</span>
                                </div>
                            )}
                        </div>

                        <form
                            onSubmit={handleSubmit}
                            className="border-t border-gray-100 bg-white px-3 py-2 flex items-end gap-2"
                        >
                            <textarea
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                placeholder="Ask about AI regulatory strategy, FDA pathways, MDR, AI Act, or our services…"
                                rows={2}
                                className="flex-1 resize-none text-xs border border-gray-200 rounded-xl px-2.5 py-1.5 focus:outline-none focus:ring-2 focus:ring-brand-500/30 focus:border-brand-400"
                                onKeyDown={(e) => {
                                    if (e.key === "Enter" && !e.shiftKey) {
                                        e.preventDefault();
                                        void sendMessage();
                                    }
                                }}
                            />
                            <button
                                type="submit"
                                disabled={isLoading || !input.trim()}
                                className="inline-flex items-center justify-center px-3 py-1.5 rounded-xl bg-brand-500 text-white text-xs font-semibold disabled:opacity-60 disabled:cursor-not-allowed hover:bg-brand-400 transition-colors whitespace-nowrap"
                            >
                                {isLoading ? "Sending…" : "Ask"}
                            </button>
                        </form>
                        {error && (
                            <div className="px-3 pb-2 text-[11px] text-red-600">
                                {error}
                            </div>
                        )}
                    </div>
                </div>
            )}

            {/* Floating Button */}
            <button
                type="button"
                onClick={() => setIsOpen((prev) => !prev)}
                className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-brand-500 hover:bg-brand-400 text-white shadow-xl shadow-brand-600/40 border border-white/70 transition-transform duration-200 hover:-translate-y-0.5 focus:outline-none"
                aria-label="Open AI assistant"
            >
                <MessageCircle size={22} />
            </button>
        </div>
    );
};

