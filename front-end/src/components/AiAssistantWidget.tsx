import React, { useState, useEffect } from "react";
import { MessageCircle, X } from "lucide-react";
import { InfoBox } from "./shared/InnerPage";
import {
    INITIAL_SESSION,
    ROUTER_OPTIONS,
    STAGE_OPTIONS,
    MARKET_OPTIONS,
    TIMING_OPTIONS,
    PROPOSAL_OPTIONS,
    PRODUCT_PATH_QUESTIONS,
    SAMD_WELLNESS_QUESTION,
    NOT_SURE_FOLLOWUP,
    getCtaOptionsForProduct,
    INTAKE_CONTACT_MSG,
    HANDOFF_MESSAGE,
    type FlowSession,
    shouldOfferTriage,
    shouldHandoffToHuman,
} from "../config/chatFlow";

type Role = "user" | "assistant";

interface ChatMessage {
    id: string;
    role: Role;
    content: string;
}

export const AiAssistantWidget: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [session, setSession] = useState<FlowSession>(INITIAL_SESSION);
    const [messages, setMessages] = useState<ChatMessage[]>(
        INITIAL_SESSION.messages.map((m, i) => ({
            id: `msg-${i}`,
            role: m.role as Role,
            content: m.content,
        }))
    );
    const [input, setInput] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    // Product-path: which question index we're on
    const [productPathIndex, setProductPathIndex] = useState(0);
    // Not sure path: which follow-up question (0-based)
    const [notSureFollowupIndex, setNotSureFollowupIndex] = useState(0);

    // Lead capture
    const [showLeadForm, setShowLeadForm] = useState(false);
    const [leadEmail, setLeadEmail] = useState("");
    const [leadName, setLeadName] = useState("");
    const [leadCompany, setLeadCompany] = useState("");
    const [leadRole, setLeadRole] = useState("");
    const [leadDevice, setLeadDevice] = useState("");
    const [leadWebsite, setLeadWebsite] = useState("");
    const [leadSubmitted, setLeadSubmitted] = useState(false);

    // Request proposal sub-menu
    const [showProposalOptions, setShowProposalOptions] = useState(false);
    // Which CTA triggered lead form (pathway_summary | 510k_checklist | samd_checklist)
    const [requestedLeadType, setRequestedLeadType] = useState<string>("pathway_summary");

    // Listen for global open event (e.g. from homepage hero CTA)
    useEffect(() => {
        const handler = () => setIsOpen(true);
        window.addEventListener("openAiRegulatoryAdvisor", handler);
        return () => window.removeEventListener("openAiRegulatoryAdvisor", handler);
    }, []);

    const addMessage = (role: Role, content: string) => {
        const id = `msg-${Date.now()}`;
        setMessages((prev) => [...prev, { id, role, content }]);
        return id;
    };

    const advanceStep = (nextStep: FlowSession["step"], updates: Partial<FlowSession> = {}) => {
        setSession((prev) => ({ ...prev, step: nextStep, ...updates }));
    };

    const productPathQuestions = session.productType ? PRODUCT_PATH_QUESTIONS[session.productType] : null;
    const currentProductPathQ = productPathQuestions?.[productPathIndex];

    const handleRouterSelect = (opt: (typeof ROUTER_OPTIONS)[number]) => {
        addMessage("user", opt.label);
        setSession((prev) => ({ ...prev, productType: opt.id }));

        if (opt.id === "not_sure") {
            advanceStep("product_path");
            addMessage(
                "assistant",
                "No problem. In one sentence, describe what your product does and who uses it."
            );
        } else if (opt.id === "wellness_app" || opt.id === "fda_plan") {
            advanceStep("stage");
            addMessage("assistant", "What stage are you in?");
        } else if (productPathQuestions && productPathQuestions.length > 0) {
            advanceStep("product_path");
            setProductPathIndex(0);
            addMessage("assistant", productPathQuestions[0].question);
        } else {
            advanceStep("stage");
            addMessage("assistant", "What stage are you in?");
        }
    };

    const handleProductPathSelect = (key: string, value: string, label: string) => {
        addMessage("user", label);
        const nextAnswers = { ...(session.productPathAnswers || {}), [key]: value };
        advanceStep("product_path", { productPathAnswers: nextAnswers });

        // SaMD branching: diagnosis=no → wellness follow-up (document section 4B)
        if (session.productType === "samd_ai" && key === "diagnosis" && value === "no") {
            addMessage("assistant", SAMD_WELLNESS_QUESTION.question);
            return;
        }

        // SaMD wellness answer → go to stage
        if (session.productType === "samd_ai" && key === "wellness_primary") {
            setProductPathIndex(0);
            advanceStep("stage");
            addMessage("assistant", "What stage are you in?");
            return;
        }

        if (productPathQuestions && productPathIndex + 1 < productPathQuestions.length) {
            setProductPathIndex(productPathIndex + 1);
            addMessage("assistant", productPathQuestions[productPathIndex + 1].question);
        } else {
            setProductPathIndex(0);
            advanceStep("stage");
            addMessage("assistant", "What stage are you in?");
        }
    };

    const handleSamdWellnessSelect = (value: string, label: string) => {
        handleProductPathSelect(SAMD_WELLNESS_QUESTION.key, value, label);
    };

    const handleNotSureDescribe = () => {
        const desc = input.trim();
        if (!desc) return;

        addMessage("user", desc);
        setSession((prev) => ({ ...prev, deviceDescription: desc }));
        setInput("");
        if (NOT_SURE_FOLLOWUP.length > 0) {
            setNotSureFollowupIndex(0);
            addMessage("assistant", NOT_SURE_FOLLOWUP[0].question);
        } else {
            advanceStep("stage");
            addMessage("assistant", "What stage are you in?");
        }
    };

    const handleNotSureFollowupSelect = (key: string, value: string, label: string) => {
        addMessage("user", label);
        const nextAnswers = { ...(session.productPathAnswers || {}), [key]: value };
        advanceStep("product_path", { productPathAnswers: nextAnswers });

        if (notSureFollowupIndex + 1 < NOT_SURE_FOLLOWUP.length) {
            setNotSureFollowupIndex(notSureFollowupIndex + 1);
            addMessage("assistant", NOT_SURE_FOLLOWUP[notSureFollowupIndex + 1].question);
        } else {
            setNotSureFollowupIndex(0);
            advanceStep("stage");
            addMessage("assistant", "What stage are you in?");
        }
    };

    const handleStageSelect = (opt: (typeof STAGE_OPTIONS)[number]) => {
        addMessage("user", opt.label);
        advanceStep("markets", { stage: opt.id });
        addMessage("assistant", "Which markets are you targeting first?");
    };

    const handleMarketSelect = (opt: (typeof MARKET_OPTIONS)[number]) => {
        addMessage("user", opt.label);
        advanceStep("timing", { markets: opt.id });
        addMessage("assistant", "What's your desired launch timeline?");
    };

    const handleTimingSelect = (opt: (typeof TIMING_OPTIONS)[number]) => {
        addMessage("user", opt.label);
        advanceStep("contact_capture", { timing: opt.id });
        addMessage("assistant", INTAKE_CONTACT_MSG);
    };

    const handleContactSkip = () => {
        advanceStep("analysis");
        void runPathwayAnalysis(
            [...messages, { id: `u-${Date.now()}`, role: "user" as const, content: "(skipped)" }],
            session
        );
    };

    const handleContactSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!leadEmail.trim()) return;

        const sessionWithContact = {
            ...session,
            email: leadEmail.trim(),
            name: leadName.trim(),
            company: leadCompany.trim(),
            role: leadRole.trim(),
            deviceDescription: leadDevice.trim() || session.deviceDescription,
            website: leadWebsite.trim(),
        };
        advanceStep("analysis", sessionWithContact);
        setShowLeadForm(false);

        // Capture lead via API
        try {
            const base = import.meta.env.VITE_API_BASE_URL ?? "";
            await fetch(`${base}/api/lead`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    email: leadEmail.trim(),
                    name: leadName.trim(),
                    company: leadCompany.trim(),
                    role: leadRole.trim(),
                    deviceDescription: leadDevice.trim() || session.deviceDescription,
                    website: leadWebsite.trim(),
                    productType: session.productType,
                    stage: session.stage,
                    markets: session.markets,
                    timing: session.timing,
                    requestType: "pathway_summary",
                }),
            });
        } catch {
            // Non-blocking
        }

        void runPathwayAnalysis(
            [...messages, { id: `u-${Date.now()}`, role: "user" as const, content: `Email: ${leadEmail}` }],
            sessionWithContact
        );
    };

    const runPathwayAnalysis = async (msgList: ChatMessage[], sessionData: FlowSession) => {
        setInput("");
        setError(null);
        setIsLoading(true);

        // Check handoff first
        if (shouldHandoffToHuman(sessionData)) {
            setIsLoading(false);
            addMessage("assistant", HANDOFF_MESSAGE);
            advanceStep("handoff");
            setShowLeadForm(true);
            return;
        }

        const query =
            "Based on my selections, provide a preliminary regulatory pathway assessment. Give: (1) Summary 2-4 bullets, (2) Likely regulatory status Device vs Non-device, (3) Likely pathway 510k/De Novo/PMA/wellness, (4) Evidence checklist, (5) Key risks/pitfalls, (6) Next best actions, (7) CTA for pathway summary, strategy call, or proposal. Use productPathAnswers if provided. End with: Would you like [Generate pathway summary] [Book a strategy call] [Request a proposal]? Contact info@eemedicals.com.";

        const history = msgList.map((m) => ({ role: m.role, content: m.content }));

        try {
            const base = import.meta.env.VITE_API_BASE_URL ?? "";
            const response = await fetch(`${base}/api/rag`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    query,
                    history,
                    session: {
                        productType: sessionData.productType,
                        stage: sessionData.stage,
                        markets: sessionData.markets,
                        timing: sessionData.timing,
                        deviceDescription: sessionData.deviceDescription,
                        productPathAnswers: sessionData.productPathAnswers,
                    },
                }),
            });

            if (!response.ok) throw new Error("AI service unavailable.");

            const data: { answer: string } = await response.json();
            addMessage("assistant", data.answer);

            if (shouldOfferTriage(sessionData)) {
                advanceStep("triage_offer");
            } else {
                advanceStep("cta");
            }
        } catch (err) {
            setError(err instanceof Error ? err.message : "Something went wrong.");
            advanceStep("cta");
        } finally {
            setIsLoading(false);
        }
    };

    const handleCtaSelect = async (ctaId: string) => {
        if (
            ctaId === "pathway_summary" ||
            ctaId === "510k_checklist" ||
            ctaId === "samd_checklist"
        ) {
            setRequestedLeadType(ctaId);
            setShowLeadForm(true);
        } else if (ctaId === "strategy_call") {
            window.open("mailto:info@eemedicals.com?subject=Regulatory%20Strategy%20Call%20Request");
        } else if (ctaId === "request_proposal") {
            setShowProposalOptions(true);
        }
    };

    const handleProposalSelect = (opt: (typeof PROPOSAL_OPTIONS)[number]) => {
        window.open(
            `mailto:info@eemedicals.com?subject=Regulatory%20Proposal%20Request%20-%20${encodeURIComponent(opt.label)}`
        );
        setShowProposalOptions(false);
    };

    const handleTriageResponse = (yes: boolean) => {
        addMessage("user", yes ? "Yes" : "Not now");
        if (yes) {
            window.open("mailto:info@eemedicals.com?subject=15-min%20Regulatory%20Triage%20Call");
        }
        advanceStep("cta");
    };

    const handleLeadSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!leadEmail.trim()) return;

        try {
            const base = import.meta.env.VITE_API_BASE_URL ?? "";
            const res = await fetch(`${base}/api/lead`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    email: leadEmail.trim(),
                    name: leadName.trim(),
                    company: leadCompany.trim(),
                    role: leadRole.trim(),
                    deviceDescription: (leadDevice || session.deviceDescription || "").trim(),
                    website: leadWebsite.trim(),
                    productType: session.productType,
                    stage: session.stage,
                    markets: session.markets,
                    timing: session.timing,
                    requestType: requestedLeadType,
                    pathwaySummaryText:
                        requestedLeadType === "pathway_summary"
                            ? [...messages].reverse().find((m) => m.role === "assistant")?.content ?? ""
                            : undefined,
                }),
            });
            if (res.ok) {
                setLeadSubmitted(true);
                addMessage(
                    "assistant",
                    "Thank you! We'll be in touch shortly. You can also reach us at info@eemedicals.com for a strategy call."
                );
            }
        } catch {
            setError("Failed to submit. Please email info@eemedicals.com directly.");
        }
    };

    const handleFreeFormSubmit = async () => {
        const question = input.trim();
        if (!question || isLoading) return;

        addMessage("user", question);
        setInput("");
        setError(null);
        setIsLoading(true);

        try {
            const base = import.meta.env.VITE_API_BASE_URL ?? "";
            const response = await fetch(`${base}/api/rag`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    query: question,
                    history: messages.map((m) => ({ role: m.role, content: m.content })),
                    session:
                        session.step !== "welcome"
                            ? {
                                  productType: session.productType,
                                  stage: session.stage,
                                  markets: session.markets,
                                  timing: session.timing,
                                  deviceDescription: session.deviceDescription,
                                  productPathAnswers: session.productPathAnswers,
                              }
                            : undefined,
                }),
            });

            if (!response.ok) throw new Error("AI service unavailable.");

            const data: { answer: string } = await response.json();
            addMessage("assistant", data.answer);
        } catch (err) {
            setError(err instanceof Error ? err.message : "Something went wrong.");
        } finally {
            setIsLoading(false);
        }
    };

    const resetChat = () => {
        setSession(INITIAL_SESSION);
        setMessages(
            INITIAL_SESSION.messages.map((m, i) => ({
                id: `msg-${i}`,
                role: m.role as Role,
                content: m.content,
            }))
        );
        setProductPathIndex(0);
        setNotSureFollowupIndex(0);
        setShowLeadForm(false);
        setShowProposalOptions(false);
        setLeadEmail("");
        setLeadName("");
        setLeadCompany("");
        setLeadRole("");
        setLeadDevice("");
        setLeadWebsite("");
        setLeadSubmitted(false);
        setRequestedLeadType("pathway_summary");
    };

    const pp = session.productPathAnswers || {};
    const showSamdWellness =
        session.step === "product_path" &&
        session.productType === "samd_ai" &&
        pp.diagnosis === "no" &&
        !pp.wellness_primary &&
        !isLoading;
    const showNotSureFollowup =
        session.step === "product_path" &&
        session.productType === "not_sure" &&
        !!session.deviceDescription &&
        notSureFollowupIndex < NOT_SURE_FOLLOWUP.length &&
        !isLoading;

    const showRouterButtons = session.step === "welcome" && !isLoading;
    const showProductPathButtons =
        session.step === "product_path" &&
        currentProductPathQ &&
        session.productType !== "not_sure" &&
        !showSamdWellness &&
        !showNotSureFollowup &&
        !isLoading;
    const showNotSureInput =
        session.step === "product_path" &&
        session.productType === "not_sure" &&
        !session.deviceDescription &&
        !isLoading;
    const showStageButtons = session.step === "stage" && !isLoading;
    const showMarketButtons = session.step === "markets" && !isLoading;
    const showTimingButtons = session.step === "timing" && !isLoading;
    const showContactStep = session.step === "contact_capture" && !isLoading && !showLeadForm;
    const showTriageOffer = session.step === "triage_offer" && !isLoading;
    const showCtaButtons = (session.step === "cta" || session.step === "handoff") && !isLoading && !showLeadForm && !showProposalOptions;

    return (
        <div className="fixed bottom-4 right-4 z-40">
            {isOpen && (
                <div className="mb-3 w-[320px] sm:w-[380px] rounded-2xl shadow-2xl shadow-navy-950/20 border border-gray-200 bg-white flex flex-col overflow-hidden">
                    <div className="flex items-center justify-between px-4 py-3 bg-gradient-to-r from-navy-950 to-navy-800 text-white">
                        <div>
                            <p className="text-xs font-semibold uppercase tracking-wider text-brand-300">
                                E&E Regulatory Advisor (AI)
                            </p>
                            <p className="text-sm font-bold">Educational guidance only — not legal advice</p>
                        </div>
                        <button
                            type="button"
                            onClick={() => setIsOpen(false)}
                            className="p-1.5 rounded-full hover:bg-white/10"
                            aria-label="Close"
                        >
                            <X size={16} />
                        </button>
                    </div>

                    <div className="px-3 pt-3">
                        <InfoBox variant="warning" className="mb-2 px-3 py-3">
                            <p className="text-[11px] leading-relaxed">
                                Educational guidance only—not legal advice. Final regulatory determinations require a formal review.{" "}
                                <a href="mailto:info@eemedicals.com" className="underline font-semibold">info@eemedicals.com</a>
                            </p>
                        </InfoBox>
                    </div>

                    <div className="flex flex-col h-[420px]">
                        <div className="flex-1 overflow-y-auto px-3 pb-3 space-y-3">
                            {messages.map((m) => (
                                <div
                                    key={m.id}
                                    className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
                                >
                                    <div
                                        className={`max-w-[85%] rounded-2xl px-3 py-2 text-xs leading-relaxed ${
                                            m.role === "user"
                                                ? "bg-brand-500 text-white rounded-br-sm"
                                                : "bg-slate-50 text-gray-800 border border-gray-100 rounded-bl-sm whitespace-pre-wrap"
                                        }`}
                                    >
                                        {m.content}
                                    </div>
                                </div>
                            ))}

                            {showRouterButtons && (
                                <div className="flex flex-wrap gap-1.5 pt-1">
                                    {ROUTER_OPTIONS.map((opt) => (
                                        <button
                                            key={opt.id}
                                            type="button"
                                            onClick={() => handleRouterSelect(opt)}
                                            className="text-[10px] px-2.5 py-1.5 rounded-lg bg-brand-50 text-brand-700 border border-brand-100 hover:bg-brand-100 transition-colors text-left"
                                        >
                                            {opt.label}
                                        </button>
                                    ))}
                                </div>
                            )}

                            {showProductPathButtons && currentProductPathQ && (
                                <div className="flex flex-wrap gap-1.5 pt-1">
                                    {currentProductPathQ.options.map((opt) => (
                                        <button
                                            key={opt.id}
                                            type="button"
                                            onClick={() =>
                                                handleProductPathSelect(currentProductPathQ.key, opt.id, opt.label)
                                            }
                                            className="text-[10px] px-2.5 py-1.5 rounded-lg bg-brand-50 text-brand-700 border border-brand-100 hover:bg-brand-100 transition-colors text-left"
                                        >
                                            {opt.label}
                                        </button>
                                    ))}
                                </div>
                            )}

                            {showSamdWellness && (
                                <div className="flex flex-wrap gap-1.5 pt-1">
                                    {SAMD_WELLNESS_QUESTION.options.map((opt) => (
                                        <button
                                            key={opt.id}
                                            type="button"
                                            onClick={() => handleSamdWellnessSelect(opt.id, opt.label)}
                                            className="text-[10px] px-2.5 py-1.5 rounded-lg bg-brand-50 text-brand-700 border border-brand-100 hover:bg-brand-100 transition-colors text-left"
                                        >
                                            {opt.label}
                                        </button>
                                    ))}
                                </div>
                            )}

                            {showNotSureFollowup && NOT_SURE_FOLLOWUP[notSureFollowupIndex] && (
                                <div className="flex flex-wrap gap-1.5 pt-1">
                                    {NOT_SURE_FOLLOWUP[notSureFollowupIndex].options.map((opt) => (
                                        <button
                                            key={opt.id}
                                            type="button"
                                            onClick={() =>
                                                handleNotSureFollowupSelect(
                                                    NOT_SURE_FOLLOWUP[notSureFollowupIndex].key,
                                                    opt.id,
                                                    opt.label
                                                )
                                            }
                                            className="text-[10px] px-2.5 py-1.5 rounded-lg bg-brand-50 text-brand-700 border border-brand-100 hover:bg-brand-100 transition-colors text-left"
                                        >
                                            {opt.label}
                                        </button>
                                    ))}
                                </div>
                            )}

                            {showNotSureInput && (
                                <div className="pt-1 flex gap-2">
                                    <input
                                        type="text"
                                        value={input}
                                        onChange={(e) => setInput(e.target.value)}
                                        placeholder="Describe your product and who uses it…"
                                        className="flex-1 text-xs px-2.5 py-1.5 rounded-lg border border-gray-200"
                                        onKeyDown={(e) => e.key === "Enter" && handleNotSureDescribe()}
                                    />
                                    <button
                                        type="button"
                                        onClick={() => handleNotSureDescribe()}
                                        disabled={!input.trim()}
                                        className="text-xs px-3 py-1.5 rounded-lg bg-brand-500 text-white font-semibold disabled:opacity-60"
                                    >
                                        Next
                                    </button>
                                </div>
                            )}

                            {showStageButtons && (
                                <div className="flex flex-wrap gap-1.5 pt-1">
                                    {STAGE_OPTIONS.map((opt) => (
                                        <button
                                            key={opt.id}
                                            type="button"
                                            onClick={() => handleStageSelect(opt)}
                                            className="text-[10px] px-2.5 py-1.5 rounded-lg bg-brand-50 text-brand-700 border border-brand-100 hover:bg-brand-100 transition-colors text-left"
                                        >
                                            {opt.label}
                                        </button>
                                    ))}
                                </div>
                            )}

                            {showMarketButtons && (
                                <div className="flex flex-wrap gap-1.5 pt-1">
                                    {MARKET_OPTIONS.map((opt) => (
                                        <button
                                            key={opt.id}
                                            type="button"
                                            onClick={() => handleMarketSelect(opt)}
                                            className="text-[10px] px-2.5 py-1.5 rounded-lg bg-brand-50 text-brand-700 border border-brand-100 hover:bg-brand-100 transition-colors text-left"
                                        >
                                            {opt.label}
                                        </button>
                                    ))}
                                </div>
                            )}

                            {showTimingButtons && (
                                <div className="flex flex-wrap gap-1.5 pt-1">
                                    {TIMING_OPTIONS.map((opt) => (
                                        <button
                                            key={opt.id}
                                            type="button"
                                            onClick={() => handleTimingSelect(opt)}
                                            className="text-[10px] px-2.5 py-1.5 rounded-lg bg-brand-50 text-brand-700 border border-brand-100 hover:bg-brand-100 transition-colors text-left"
                                        >
                                            {opt.label}
                                        </button>
                                    ))}
                                </div>
                            )}

                            {showContactStep && (
                                <div className="pt-1 flex flex-wrap gap-1.5">
                                    <button
                                        type="button"
                                        onClick={() => setShowLeadForm(true)}
                                        className="text-[10px] px-2.5 py-1.5 rounded-lg bg-brand-500 text-white font-semibold"
                                    >
                                        Enter email to receive summary
                                    </button>
                                    <button
                                        type="button"
                                        onClick={handleContactSkip}
                                        className="text-[10px] px-2.5 py-1.5 rounded-lg bg-slate-100 text-gray-600 hover:bg-slate-200"
                                    >
                                        Skip to analysis
                                    </button>
                                </div>
                            )}

                            {showTriageOffer && (
                                <div className="flex flex-wrap gap-1.5 pt-1">
                                    <button
                                        type="button"
                                        onClick={() => handleTriageResponse(true)}
                                        className="text-[10px] px-2.5 py-1.5 rounded-lg bg-brand-500 text-white font-semibold"
                                    >
                                        Yes
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => handleTriageResponse(false)}
                                        className="text-[10px] px-2.5 py-1.5 rounded-lg bg-slate-100 text-gray-600"
                                    >
                                        Not now
                                    </button>
                                </div>
                            )}

                            {showCtaButtons && !showProposalOptions && (
                                <div className="flex flex-wrap gap-1.5 pt-1">
                                    {getCtaOptionsForProduct(session.productType).map((opt) => (
                                        <button
                                            key={opt.id}
                                            type="button"
                                            onClick={() => handleCtaSelect(opt.id)}
                                            className="text-[10px] px-2.5 py-1.5 rounded-lg bg-brand-500 text-white hover:bg-brand-400 transition-colors text-left font-semibold"
                                        >
                                            {opt.label}
                                        </button>
                                    ))}
                                    <button
                                        type="button"
                                        onClick={resetChat}
                                        className="text-[10px] px-2.5 py-1.5 rounded-lg bg-slate-100 text-gray-600 hover:bg-slate-200"
                                    >
                                        Start over
                                    </button>
                                </div>
                            )}

                            {showProposalOptions && (
                                <div className="pt-1">
                                    <p className="text-[11px] font-semibold mb-1.5">What do you need most?</p>
                                    <div className="flex flex-wrap gap-1.5">
                                        {PROPOSAL_OPTIONS.map((opt) => (
                                            <button
                                                key={opt.id}
                                                type="button"
                                                onClick={() => handleProposalSelect(opt)}
                                                className="text-[10px] px-2.5 py-1.5 rounded-lg bg-brand-50 text-brand-700 border border-brand-100 hover:bg-brand-100"
                                            >
                                                {opt.label}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {showLeadForm && (
                                <form
                                    onSubmit={session.step === "contact_capture" ? handleContactSubmit : handleLeadSubmit}
                                    className="pt-2 space-y-2 rounded-xl border border-brand-100 bg-brand-50/50 p-3"
                                >
                                    <p className="text-[11px] font-semibold text-navy-900">
                                        {session.step === "contact_capture"
                                            ? "Where should we send your pathway summary?"
                                            : requestedLeadType === "510k_checklist"
                                              ? "Where should we send your 510(k) readiness checklist?"
                                              : requestedLeadType === "samd_checklist"
                                                ? "Where should we send your AI/ML SaMD evidence checklist?"
                                                : "Where should we send your pathway summary?"}
                                    </p>
                                    <input
                                        type="email"
                                        value={leadEmail}
                                        onChange={(e) => setLeadEmail(e.target.value)}
                                        placeholder="Email *"
                                        required
                                        className="w-full text-xs px-2.5 py-1.5 rounded-lg border border-gray-200"
                                    />
                                    <input
                                        type="text"
                                        value={leadName}
                                        onChange={(e) => setLeadName(e.target.value)}
                                        placeholder="Name (optional)"
                                        className="w-full text-xs px-2.5 py-1.5 rounded-lg border border-gray-200"
                                    />
                                    <input
                                        type="text"
                                        value={leadCompany}
                                        onChange={(e) => setLeadCompany(e.target.value)}
                                        placeholder="Company (optional)"
                                        className="w-full text-xs px-2.5 py-1.5 rounded-lg border border-gray-200"
                                    />
                                    <input
                                        type="text"
                                        value={leadDevice}
                                        onChange={(e) => setLeadDevice(e.target.value)}
                                        placeholder="Device name (optional)"
                                        className="w-full text-xs px-2.5 py-1.5 rounded-lg border border-gray-200"
                                    />
                                    <input
                                        type="text"
                                        value={leadWebsite}
                                        onChange={(e) => setLeadWebsite(e.target.value)}
                                        placeholder="Website (optional)"
                                        className="w-full text-xs px-2.5 py-1.5 rounded-lg border border-gray-200"
                                    />
                                    <input
                                        type="text"
                                        value={leadRole}
                                        onChange={(e) => setLeadRole(e.target.value)}
                                        placeholder="Role (optional)"
                                        className="w-full text-xs px-2.5 py-1.5 rounded-lg border border-gray-200"
                                    />
                                    <div className="flex gap-2">
                                        <button
                                            type="submit"
                                            disabled={leadSubmitted || !leadEmail.trim()}
                                            className="text-xs px-3 py-1.5 rounded-lg bg-brand-500 text-white font-semibold disabled:opacity-60"
                                        >
                                            {leadSubmitted ? "Submitted" : "Submit"}
                                        </button>
                                        <button
                                            type="button"
                                            onClick={() => setShowLeadForm(false)}
                                            className="text-xs px-3 py-1.5 rounded-lg bg-slate-200 text-gray-700"
                                        >
                                            Cancel
                                        </button>
                                    </div>
                                </form>
                            )}

                            {isLoading && (
                                <div className="flex items-center gap-2 text-[11px] text-gray-500 px-1">
                                    <span className="w-2 h-2 rounded-full bg-brand-400 animate-bounce" />
                                    Analyzing…
                                </div>
                            )}
                        </div>

                        {session.step !== "contact_capture" && !showLeadForm && (
                            <form
                                onSubmit={(e) => {
                                    e.preventDefault();
                                    if (showNotSureInput) handleNotSureDescribe();
                                    else void handleFreeFormSubmit();
                                }}
                                className="border-t border-gray-100 bg-white px-3 py-2 flex items-end gap-2"
                            >
                                <textarea
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    placeholder="Or type a question…"
                                    rows={2}
                                    className="flex-1 resize-none text-xs border border-gray-200 rounded-xl px-2.5 py-1.5 focus:outline-none focus:ring-2 focus:ring-brand-500/30"
                                    onKeyDown={(e) => {
                                        if (e.key === "Enter" && !e.shiftKey) {
                                            e.preventDefault();
                                            if (showNotSureInput) handleNotSureDescribe();
                                            else void handleFreeFormSubmit();
                                        }
                                    }}
                                />
                                <button
                                    type="submit"
                                    disabled={isLoading || !input.trim()}
                                    className="px-3 py-1.5 rounded-xl bg-brand-500 text-white text-xs font-semibold disabled:opacity-60"
                                >
                                    {showNotSureInput ? "Next" : "Ask"}
                                </button>
                            </form>
                        )}
                        {error && <div className="px-3 pb-2 text-[11px] text-red-600">{error}</div>}
                    </div>
                </div>
            )}

            <button
                type="button"
                onClick={() => setIsOpen((prev) => !prev)}
                className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-500 hover:bg-brand-400 text-white shadow-xl shadow-brand-600/40 transition-transform hover:-translate-y-0.5"
                aria-label="Open Regulatory Advisor"
            >
                <MessageCircle size={30} />
            </button>
        </div>
    );
};
