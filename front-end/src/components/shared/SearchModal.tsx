import React, { useState, useEffect, useRef, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { Search, X, ArrowRight, ChevronRight } from "lucide-react";

// ─── Static page index ────────────────────────────────────────────────────────
const PAGES = [
    // Core
    { title: "Home",                path: "/",                         cat: "Core",                   kw: "home main landing page" },
    { title: "About Us",            path: "/about",                    cat: "Core",                   kw: "about team mission vision values expertise history company" },
    { title: "Careers",             path: "/careers",                  cat: "Core",                   kw: "jobs careers hiring employment work opportunities" },
    { title: "Digital Health",      path: "/software",                 cat: "Core",                   kw: "software digital health telemedicine healthcare technology development" },
    { title: "Media & News",        path: "/media",                    cat: "Core",                   kw: "media news articles press announcements" },
    { title: "Blog",                path: "/blog",                     cat: "Core",                   kw: "blog articles insights regulatory news updates" },
    { title: "Share Your Project",  path: "/share-your-project",       cat: "Core",                   kw: "contact enquiry project share form request quote" },
    // Quality & Compliance
    { title: "Reliability",                        path: "/reliability",                                                    cat: "Quality & Compliance", kw: "reliability fmeca mtbf product design testing iso 9000 14971 safety" },
    { title: "Six Sigma – Healthcare",             path: "/six-sigma-healthcare",                                           cat: "Quality & Compliance", kw: "six sigma healthcare quality improvement dmaic process lean" },
    { title: "Medical Devices Quality Assurance",  path: "/medical-devices-quality-assurance",                              cat: "Quality & Compliance", kw: "medical devices quality assurance qa compliance testing" },
    { title: "Quality Assurance Audits",           path: "/quality-assurance-audits",                                       cat: "Quality & Compliance", kw: "audits quality assurance compliance iso fda verification inspection" },
    { title: "FDA Compliance Consulting",          path: "/fda-compliance-consulting",                                      cat: "Quality & Compliance", kw: "fda compliance consulting regulatory quality" },
    { title: "FDA Audit Preparation",              path: "/fda-audit-preparation",                                          cat: "Quality & Compliance", kw: "fda audit preparation inspection readiness 483 warning" },
    { title: "Quality System Regulation (QMSR)",   path: "/quality-system-regulation-qsr",                                  cat: "Quality & Compliance", kw: "qmsr quality system regulation 21 cfr 820 fda qms" },
    { title: "QMS Implementation",                 path: "/quality-management-system-implementation",                       cat: "Quality & Compliance", kw: "qms quality management system implementation iso 9001 13485" },
    // ISO Standards
    { title: "ISO 13485 Quality System",           path: "/iso-13485-medical-quality-system-registration",                  cat: "ISO Standards",        kw: "iso 13485 medical device quality management certification registration mdsap" },
    { title: "ISO 14971 Risk Management",          path: "/iso-14971-medical-device-risk-management-for-medical-devices",   cat: "ISO Standards",        kw: "iso 14971 risk management medical device hazard fmea" },
    { title: "Free ISO 13485 Gap Analysis",        path: "/free-iso-13485-2016-gap-analysis-tool",                          cat: "ISO Standards",        kw: "iso 13485 gap analysis tool free 2016" },
    { title: "ISO 13485 Complete Guide",           path: "/iso-13485-guide",                                                cat: "ISO Standards",        kw: "iso 13485 guide complete medical quality system" },
    { title: "FDA QMS Requirements Guide",         path: "/fda-qms-requirements",                                           cat: "ISO Standards",        kw: "fda qms requirements guide quality management system 21 cfr 820" },
    // Regulatory Operations
    { title: "CCC Mark Approval",                  path: "/ccc-mark-approval",                                              cat: "Regulatory Operations", kw: "ccc mark approval china compulsory certification medical devices" },
    { title: "CE Mark Approval",                   path: "/ce-mark-approval",                                               cat: "Regulatory Operations", kw: "ce mark approval eu mdr ivdr europe medical device mdd" },
    { title: "Post-market Compliance",             path: "/clinical-data-and-postmarket-compliance-under-the-mdr",          cat: "Regulatory Operations", kw: "postmarket compliance clinical data mdr ivdr surveillance pms pmcf" },
    { title: "FDA 483 / Warning Letters",          path: "/fda-483-observations-warning-letters-recalls-remediation",       cat: "Regulatory Operations", kw: "fda 483 warning letters recalls remediation observations" },
    { title: "Investigational Device Exemption",   path: "/pre-ide-process",                                                cat: "Regulatory Operations", kw: "pre ide investigational device exemption clinical trial" },
    { title: "510(k), De Novo, PMA",               path: "/fda-510k-application",                                           cat: "Regulatory Operations", kw: "510k de novo pma fda clearance approval medical device submission" },
    { title: "FDA 510(k) Consulting",              path: "/fda-510k-consulting",                                            cat: "Regulatory Operations", kw: "fda 510k consulting medical device clearance submission" },
    { title: "FDA 510(k) Submission Guide",        path: "/fda-510k-submission-guide",                                      cat: "Regulatory Operations", kw: "510k submission guide fda medical device clearance premarket" },
    { title: "FDA Approval Process Guide",         path: "/medical-device-fda-approval-process",                            cat: "Regulatory Operations", kw: "fda approval process guide medical device 510k pma de novo" },
    { title: "Medical Device Regulatory Strategy", path: "/medical-device-regulatory-strategy",                             cat: "Regulatory Operations", kw: "medical device regulatory strategy fda global market access" },
    { title: "FDA Establishment Registration",     path: "/fda-establishment-registration",                                 cat: "Regulatory Operations", kw: "fda establishment registration device listing manufacturer" },
    { title: "US Agent for Foreign Establishments",path: "/fda-usa-agents-for-foreign-establishments",                      cat: "Regulatory Operations", kw: "us agent foreign establishments fda registration international" },
    // Drugs & Biologics
    { title: "IND Application",                    path: "/investigational-new-drug-ind-application",                       cat: "Drugs & Biologics",    kw: "ind investigational new drug application fda clinical trial pharmaceutical" },
    { title: "New Drug Application (NDA)",         path: "/new-drug-application-overview",                                  cat: "Drugs & Biologics",    kw: "nda new drug application fda pharmaceutical approval" },
    { title: "ANDA Submissions",                   path: "/abbreviated-new-drug-application-anda-submissions-overview",     cat: "Drugs & Biologics",    kw: "anda abbreviated new drug application generic drug" },
    { title: "Biologics License Application (BLA)",path: "/biologics-license-application-bla-overview",                     cat: "Drugs & Biologics",    kw: "bla biologics license application biologic drug cell gene therapy" },
    { title: "Drug Master File (DMF)",             path: "/dmf",                                                            cat: "Drugs & Biologics",    kw: "dmf drug master file fda pharmaceutical chemistry manufacturing" },
    { title: "CMC Services",                       path: "/cmc",                                                            cat: "Drugs & Biologics",    kw: "cmc chemistry manufacturing controls pharmaceutical drug development" },
    // AI-Enabled Regulatory
    { title: "AI Regulatory Strategy",             path: "/ai-regulatory-strategy",    cat: "AI-Enabled Regulatory", kw: "ai regulatory strategy artificial intelligence medical device fda" },
    { title: "AI SaMD Regulatory Pathway",         path: "/ai-samd-pathway",           cat: "AI-Enabled Regulatory", kw: "ai samd software medical device regulatory pathway fda" },
    { title: "AI FDA Readiness & Risk Audit",      path: "/ai-fda-readiness",          cat: "AI-Enabled Regulatory", kw: "ai fda readiness risk audit artificial intelligence" },
    { title: "PCCP Authoring",                     path: "/pccp-authoring",            cat: "AI-Enabled Regulatory", kw: "pccp predetermined change control plan authoring ai machine learning" },
    { title: "AI Design Controls & QMSR",          path: "/ai-design-controls",        cat: "AI-Enabled Regulatory", kw: "ai design controls qmsr quality management system regulation" },
    { title: "FDA Interaction & Defense",          path: "/fda-defense",               cat: "AI-Enabled Regulatory", kw: "fda interaction defense support regulatory response" },
    { title: "SaMD FDA Regulations Guide",         path: "/samd-fda-regulations",      cat: "AI-Enabled Regulatory", kw: "samd fda regulations software medical device guide" },
];

const POPULAR = ["/", "/about", "/fda-510k-application", "/iso-13485-medical-quality-system-registration", "/ce-mark-approval", "/careers"];

function highlight(text: string, query: string): React.ReactNode {
    if (!query) return text;
    const idx = text.toLowerCase().indexOf(query.toLowerCase());
    if (idx === -1) return text;
    return (
        <>
            {text.slice(0, idx)}
            <mark className="bg-brand-100 text-brand-700 rounded px-0.5 font-bold not-italic">{text.slice(idx, idx + query.length)}</mark>
            {text.slice(idx + query.length)}
        </>
    );
}

interface Props {
    open: boolean;
    onClose: () => void;
}

export const SearchModal: React.FC<Props> = ({ open, onClose }) => {
    const [query, setQuery] = useState("");
    const [cursor, setCursor] = useState(0);
    const inputRef = useRef<HTMLInputElement>(null);
    const listRef = useRef<HTMLUListElement>(null);
    const navigate = useNavigate();

    const q = query.trim().toLowerCase();
    const results = q
        ? PAGES.filter((p) => p.title.toLowerCase().includes(q) || p.kw.includes(q) || p.cat.toLowerCase().includes(q))
        : PAGES.filter((p) => POPULAR.includes(p.path));

    const go = useCallback((path: string) => {
        navigate(path);
        onClose();
    }, [navigate, onClose]);

    // Reset on open
    useEffect(() => {
        if (open) {
            setQuery("");
            setCursor(0);
            setTimeout(() => inputRef.current?.focus(), 50);
        }
    }, [open]);

    // Keep cursor in range when results change
    useEffect(() => { setCursor(0); }, [q]);

    // Scroll active item into view
    useEffect(() => {
        const el = listRef.current?.children[cursor] as HTMLElement | undefined;
        el?.scrollIntoView({ block: "nearest" });
    }, [cursor]);

    // Keyboard navigation
    useEffect(() => {
        if (!open) return;
        function onKey(e: KeyboardEvent) {
            if (e.key === "Escape") { onClose(); return; }
            if (e.key === "ArrowDown") { e.preventDefault(); setCursor((c) => Math.min(c + 1, results.length - 1)); }
            if (e.key === "ArrowUp")   { e.preventDefault(); setCursor((c) => Math.max(c - 1, 0)); }
            if (e.key === "Enter" && results[cursor]) { go(results[cursor].path); }
        }
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, [open, cursor, results, go, onClose]);

    if (!open) return null;

    // Group results by category
    const grouped = results.reduce<Record<string, typeof PAGES>>((acc, p) => {
        (acc[p.cat] ??= []).push(p);
        return acc;
    }, {});

    // Flat list index → result for cursor tracking
    let flatIdx = 0;

    return (
        <div
            className="fixed inset-0 z-[200] flex items-start justify-center pt-[12vh] px-4"
            onClick={onClose}
        >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-navy-950/50 backdrop-blur-sm" />

            {/* Modal */}
            <div
                className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl shadow-navy-950/20 overflow-hidden flex flex-col max-h-[70vh]"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Input row */}
                <div className="flex items-center gap-3 px-4 py-3 border-b border-gray-100">
                    <Search size={18} className="text-gray-400 shrink-0" />
                    <input
                        ref={inputRef}
                        type="text"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        placeholder="Search pages, services, topics…"
                        className="flex-1 text-[15px] text-gray-800 placeholder:text-gray-400 outline-none bg-transparent"
                    />
                    {query && (
                        <button onClick={() => setQuery("")} className="text-gray-400 hover:text-gray-600 transition-colors">
                            <X size={16} />
                        </button>
                    )}
                    <kbd className="hidden sm:inline-flex items-center px-2 py-0.5 rounded border border-gray-200 text-[11px] text-gray-400 font-mono">Esc</kbd>
                </div>

                {/* Results */}
                <div className="overflow-y-auto flex-1">
                    {results.length === 0 ? (
                        <div className="py-12 text-center text-gray-400 text-sm">
                            No results for <span className="font-semibold text-gray-600">"{query}"</span>
                        </div>
                    ) : (
                        <ul ref={listRef} className="py-2">
                            {!q && (
                                <li className="px-4 pt-1 pb-2">
                                    <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Popular pages</span>
                                </li>
                            )}
                            {Object.entries(grouped).map(([cat, items]) => (
                                <React.Fragment key={cat}>
                                    {q && (
                                        <li className="px-4 pt-3 pb-1">
                                            <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">{cat}</span>
                                        </li>
                                    )}
                                    {items.map((page) => {
                                        const isActive = flatIdx === cursor;
                                        const myIdx = flatIdx++;
                                        return (
                                            <li key={page.path}>
                                                <button
                                                    onMouseEnter={() => setCursor(myIdx)}
                                                    onClick={() => go(page.path)}
                                                    className={`w-full flex items-center gap-3 px-4 py-2.5 text-left transition-colors ${isActive ? "bg-brand-50" : "hover:bg-gray-50"}`}
                                                >
                                                    <div className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 ${isActive ? "bg-brand-500" : "bg-gray-100"}`}>
                                                        <ChevronRight size={13} className={isActive ? "text-white" : "text-gray-400"} />
                                                    </div>
                                                    <div className="flex-1 min-w-0">
                                                        <p className={`text-sm font-semibold truncate ${isActive ? "text-brand-700" : "text-gray-800"}`}>
                                                            {highlight(page.title, query.trim())}
                                                        </p>
                                                        {q && (
                                                            <p className="text-xs text-gray-400 truncate">{page.cat}</p>
                                                        )}
                                                    </div>
                                                    <ArrowRight size={14} className={`shrink-0 transition-opacity ${isActive ? "opacity-100 text-brand-500" : "opacity-0"}`} />
                                                </button>
                                            </li>
                                        );
                                    })}
                                </React.Fragment>
                            ))}
                        </ul>
                    )}
                </div>

                {/* Footer hint */}
                <div className="px-4 py-2.5 border-t border-gray-100 flex items-center gap-4 text-[11px] text-gray-400">
                    <span><kbd className="font-mono">↑↓</kbd> navigate</span>
                    <span><kbd className="font-mono">↵</kbd> open</span>
                    <span><kbd className="font-mono">Esc</kbd> close</span>
                    <span className="ml-auto">Press <kbd className="font-mono">Ctrl K</kbd> anytime to search</span>
                </div>
            </div>
        </div>
    );
};
