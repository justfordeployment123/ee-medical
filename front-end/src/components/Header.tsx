import React, { useState, useEffect, useRef, useCallback } from "react";
import { Link, useLocation } from "react-router-dom";
import EandELogo from "../assets/EandE-logo.png";
import {
    Phone,
    Mail,
    MapPin,
    Search,
    ChevronDown,
    ChevronLeft,
    ChevronRight,
    X,
    Handshake,
    Lightbulb,
    Briefcase,
    ClipboardCheck,
    Cpu,
    ShieldCheck,
    CheckCircle,
    ShieldAlert,
    Heart,
    Target,
    History,
    Globe,
    FileText,
    Settings,
    Building2,
} from "lucide-react";

const NAV_SCROLL_PX = 220;

export const Header: React.FC = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeMobileDropdown, setActiveMobileDropdown] = useState<string | null>(null);
    const [scrolled, setScrolled] = useState(false);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(false);
    const [openDesktopDropdown, setOpenDesktopDropdown] = useState<"ai" | "wellness" | null>(null);
    const [dropdownLeft, setDropdownLeft] = useState(0);
    const navScrollRef = useRef<HTMLUListElement>(null);
    const aiTriggerRef = useRef<HTMLButtonElement>(null);
    const wellnessTriggerRef = useRef<HTMLButtonElement>(null);
    const closeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
    const location = useLocation();

    const cancelCloseDelay = () => {
        if (closeTimeoutRef.current) {
            clearTimeout(closeTimeoutRef.current);
            closeTimeoutRef.current = null;
        }
    };

    const scheduleClose = () => {
        cancelCloseDelay();
        closeTimeoutRef.current = setTimeout(() => setOpenDesktopDropdown(null), 200);
    };

    const openAiDropdown = () => {
        cancelCloseDelay();
        const el = aiTriggerRef.current;
        if (el) {
            const rect = el.getBoundingClientRect();
            setDropdownLeft(Math.min(rect.left, typeof window !== "undefined" ? window.innerWidth - 336 : rect.left));
        }
        setOpenDesktopDropdown("ai");
    };
    const openWellnessDropdown = () => {
        cancelCloseDelay();
        const el = wellnessTriggerRef.current;
        if (el) {
            const rect = el.getBoundingClientRect();
            setDropdownLeft(Math.min(rect.left, typeof window !== "undefined" ? window.innerWidth - 356 : rect.left));
        }
        setOpenDesktopDropdown("wellness");
    };

    const updateNavScrollState = useCallback(() => {
        const el = navScrollRef.current;
        if (!el) return;
        setCanScrollLeft(el.scrollLeft > 0);
        setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 1);
    }, []);

    useEffect(() => {
        updateNavScrollState();
        window.addEventListener("resize", updateNavScrollState);
        return () => window.removeEventListener("resize", updateNavScrollState);
    }, [updateNavScrollState]);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    useEffect(() => {
        if (closeTimeoutRef.current) {
            clearTimeout(closeTimeoutRef.current);
            closeTimeoutRef.current = null;
        }
        setIsMobileMenuOpen(false);
        setActiveMobileDropdown(null);
        setOpenDesktopDropdown(null);
    }, [location.pathname]);

    const scrollNav = (direction: "left" | "right") => {
        const el = navScrollRef.current;
        if (!el) return;
        el.scrollBy({ left: direction === "left" ? -NAV_SCROLL_PX : NAV_SCROLL_PX, behavior: "smooth" });
        setTimeout(updateNavScrollState, 300);
    };

    const toggleMobileDropdown = (menu: string) => {
        setActiveMobileDropdown(activeMobileDropdown === menu ? null : menu);
    };

    const navLinkClass = (isActive: boolean) =>
        `relative flex items-center gap-1 py-2 px-2.5 text-[13px] font-semibold rounded-lg transition-all duration-200 whitespace-nowrap shrink-0 ${
            isActive
                ? "text-brand-600 bg-brand-50"
                : "text-navy-800 hover:text-brand-600 hover:bg-gray-50"
        }`;

    return (
        <>
            <header className="w-full flex flex-col sticky top-0 z-50 bg-transparent relative">
                {/* Top bar: Telephone, Email, Enquiry Form – always visible */}
                <div className="w-full bg-navy-900 border-b border-navy-800">
                    <div className="px-4 md:px-8 flex flex-wrap items-center justify-center lg:justify-end gap-4 lg:gap-6 max-w-[1400px] mx-auto py-2.5 text-sm font-semibold">
                        <a href="tel:+16788159233" className="flex items-center gap-2 text-gray-200 hover:text-white transition-colors whitespace-nowrap">
                            <Phone size={14} />
                            Call Us: +1 (678) 815-9233
                        </a>
                        <span className="hidden lg:inline text-navy-600">|</span>
                        <a href="mailto:info@eemedicals.com" className="flex items-center gap-2 text-gray-200 hover:text-white transition-colors whitespace-nowrap">
                            <Mail size={14} />
                            Mail us for help: info@eemedicals.com
                        </a>
                        <span className="hidden lg:inline text-navy-600">|</span>
                        <Link to="/share-your-project" className="flex items-center gap-2 text-brand-300 hover:text-brand-200 transition-colors whitespace-nowrap font-bold">
                            <FileText size={14} />
                            Enquiry Form – Share Your Project
                        </Link>
                    </div>
                </div>

                {/* Large desktop logo spanning both header lines */}
                <Link
                    to="/"
                    className="hidden lg:flex items-center absolute left-4 top-8 h-[80px] w-[220px] max-w-[240px] z-50"
                >
                    <img
                        src={EandELogo}
                        alt="E & E Medicals"
                        className="h-full w-auto object-contain object-left img-crisp block"
                    />
                </Link>

                {/* Main Nav */}
                <nav className={`w-full bg-white/95 backdrop-blur-md text-gray-800 transition-all duration-300 ${scrolled ? "shadow-lg shadow-navy-950/8" : "border-b border-gray-100"}`}>
                    <div className="pl-4 pr-4 md:pl-8 md:pr-8 lg:pl-[220px] flex items-center max-w-[1400px] mx-auto relative h-16 lg:h-[68px] min-w-0">
                        {/* Logo – mobile only inside nav */}
                        <Link
                            to="/"
                            className="shrink-0 mr-6 lg:mr-8 flex items-center h-11 w-[140px] max-w-[160px] overflow-hidden lg:hidden"
                        >
                            <img
                                src={EandELogo}
                                alt="E & E Medicals"
                                className="h-11 max-h-11 w-auto max-w-[160px] object-contain object-left img-crisp block"
                            />
                        </Link>

                        {/* Desktop Menu – one line, scrollable when needed */}
                        <div className="hidden lg:flex flex-1 min-w-0 items-center relative">
                            <button
                                type="button"
                                aria-label="Scroll nav left"
                                onClick={() => scrollNav("left")}
                                className={`absolute left-0 z-10 h-8 w-8 flex items-center justify-center rounded-full bg-white/95 text-navy-800 shadow-md border border-gray-200 hover:bg-gray-50 transition-all ${canScrollLeft ? "opacity-100" : "opacity-0 pointer-events-none"}`}
                            >
                                <ChevronLeft size={18} strokeWidth={2.5} />
                            </button>
                            <ul
                                ref={navScrollRef}
                                onScroll={updateNavScrollState}
                                className="flex items-center gap-0.5 flex-1 min-w-0 flex-nowrap overflow-x-auto scrollbar-hide pl-9 pr-9"
                            >
                            {[
                                { to: "/", label: "Home" },
                                { to: "/about", label: "About Us" },
                                { to: "/careers", label: "Careers" },
                            ].map(({ to, label }) => (
                                <li key={to}>
                                    <Link to={to} className={navLinkClass(location.pathname === to)}>
                                        {label}
                                    </Link>
                                </li>
                            ))}

                            {/* Mega Menu: Quality & Compliance */}
                            <li className="static group">
                                <button className={`${navLinkClass(false)} cursor-pointer`}>
                                    Quality & Compliance
                                    <ChevronDown size={12} className="ml-0.5 opacity-50 transition-transform duration-200 group-hover:rotate-180" />
                                </button>
                                <div className="absolute left-0 w-full top-full bg-white shadow-2xl shadow-black/8 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 border-t-2 border-brand-500">
                                    <div className="max-w-[1200px] mx-auto py-6 px-6 grid grid-cols-3 gap-6">
                                        <MegaColumn title="Healthcare" items={[
                                            { to: "/reliability", icon: Handshake, label: "Reliability" },
                                            { to: "/six-sigma-healthcare", icon: Lightbulb, label: "Six Sigma - Healthcare" },
                                        ]} />
                                        <MegaColumn title="Quality Assurance" items={[
                                            { to: "/medical-devices-quality-assurance", icon: Briefcase, label: "Medical Devices" },
                                            { to: "/quality-assurance-audits", icon: ClipboardCheck, label: "Audits" },
                                            { to: "/quality-system-regulation-qsr", icon: Cpu, label: "Quality Management System Regulation" },
                                            { to: "/quality-management-system-implementation", icon: ShieldCheck, label: "QMS Implementation" },
                                        ]} />
                                        <MegaColumn title="ISO Standards" items={[
                                            { to: "/iso-13485-medical-quality-system-registration", icon: CheckCircle, label: "ISO 13485 Quality System" },
                                            { to: "/iso-14971-medical-device-risk-management-for-medical-devices", icon: ShieldAlert, label: "ISO 14971 Risk Management" },
                                            { to: "/quality-management-system-implementation", icon: Heart, label: "ISO 9001 Quality Management" },
                                            { to: "/free-iso-13485-2016-gap-analysis-tool", icon: Target, label: "Free ISO 13485 Gap Analysis" },
                                            { to: "#", icon: History, label: "Free ISO 9001:2015 Gap Analysis" },
                                        ]} />
                                    </div>
                                </div>
                            </li>

                            {/* Mega Menu: Regulatory Operations */}
                            <li className="static group">
                                <button className={`${navLinkClass(false)} cursor-pointer`}>
                                    Regulatory Operations
                                    <ChevronDown size={12} className="ml-0.5 opacity-50 transition-transform duration-200 group-hover:rotate-180" />
                                </button>
                                <div className="absolute left-0 w-full top-full bg-white shadow-2xl shadow-black/8 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 border-t-2 border-brand-500">
                                    <div className="max-w-[1200px] mx-auto py-6 px-6 grid grid-cols-3 gap-6">
                                        <MegaColumn title="Mark Approval & Compliance" items={[
                                            { to: "/ccc-mark-approval", icon: Globe, label: "CCC Mark Approval" },
                                            { to: "/ce-mark-approval", icon: Globe, label: "CE Mark Approval" },
                                            { to: "/ce-mark-approval", icon: FileText, label: "EU MDR/IVDR Technical Docs" },
                                            { to: "/clinical-data-and-postmarket-compliance-under-the-mdr", icon: ShieldCheck, label: "Post-market Compliance" },
                                            { to: "/fda-483-observations-warning-letters-recalls-remediation", icon: ShieldAlert, label: "FDA 483 / Warning Letters" },
                                        ]} />
                                        <MegaColumn title="Medical Device & Diagnostics" items={[
                                            { to: "/pre-ide-process", icon: Settings, label: "Investigational Device Exemption (IDE)" },
                                            { to: "/fda-510k-application", icon: Heart, label: "510(k), De Novo, PMA" },
                                            { to: "/fda-establishment-registration", icon: Building2, label: "Establishment Registration" },
                                            { to: "/fda-usa-agents-for-foreign-establishments", icon: MapPin, label: "US Agent for Foreign Establishments" },
                                        ]} />
                                        <MegaColumn title="Drugs / Biologics / Pharmacovigilance" items={[
                                            { to: "/investigational-new-drug-ind-application", icon: Target, label: "IND Application" },
                                            { to: "/new-drug-application-overview", icon: Target, label: "New Drug Application (NDA)" },
                                            { to: "/abbreviated-new-drug-application-anda-submissions-overview", icon: Target, label: "ANDA Submissions" },
                                            { to: "/biologics-license-application-bla-overview", icon: Target, label: "Biologics License (BLA)" },
                                            { to: "/dmf", icon: Target, label: "Drug Master File (DMF)" },
                                            { to: "/cmc", icon: Target, label: "CMC Services" },
                                        ]} />
                                    </div>
                                </div>
                            </li>

                            {/* AI-Enabled Regulatory – fixed-position dropdown so it's not clipped by nav scroll */}
                            <li className="relative group">
                                <button
                                    ref={aiTriggerRef}
                                    onMouseEnter={openAiDropdown}
                                    onMouseLeave={scheduleClose}
                                    className={`${navLinkClass(false)} cursor-pointer`}
                                >
                                    AI-Enabled Regulatory
                                    <ChevronDown size={12} className={`ml-0.5 opacity-50 transition-transform duration-200 ${openDesktopDropdown === "ai" ? "rotate-180" : ""}`} />
                                </button>
                                <div
                                    onMouseEnter={openAiDropdown}
                                    onMouseLeave={scheduleClose}
                                    style={{ position: "fixed", top: "4.25rem", left: dropdownLeft, zIndex: 9999 }}
                                    className={`w-[320px] bg-white shadow-2xl shadow-black/8 border-t-2 border-brand-500 rounded-b-xl overflow-hidden transition-opacity duration-200 ${openDesktopDropdown === "ai" ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"}`}
                                >
                                    <ul className="py-1.5">
                                        {[
                                            { to: "/ai-regulatory-strategy", label: "AI Regulatory Strategy" },
                                            { to: "/ai-samd-pathway", label: "AI SaMD Regulatory Pathway" },
                                            { to: "/ai-fda-readiness", label: "AI FDA Readiness & Risk Audit" },
                                            { to: "/pccp-authoring", label: "PCCP Authoring" },
                                            { to: "/ai-design-controls", label: "AI Design Controls & QMSR" },
                                            { to: "/fda-defense", label: "FDA Interaction & Defense" },
                                        ].map(({ to, label }) => (
                                            <li key={to}>
                                                <Link to={to} className="flex items-center gap-2.5 px-4 py-2 text-sm text-gray-800 hover:text-brand-600 hover:bg-brand-50 font-semibold transition-all duration-200">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-brand-400 shrink-0" />
                                                    {label}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </li>

                            <li>
                                <Link to="/media" className={navLinkClass(location.pathname === "/media")}>
                                    Media
                                </Link>
                            </li>

                            <li>
                                <a
                                    href="http://206.162.244.134:4040/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`${navLinkClass(false)} bg-navy-900 text-white hover:bg-navy-800 hover:text-white`}
                                >
                                    Medical Supply Store
                                </a>
                            </li>

                            {/* E&E Medical Platforms – fixed-position dropdown so it's not clipped */}
                            <li className="relative group">
                                <button
                                    ref={wellnessTriggerRef}
                                    onMouseEnter={openWellnessDropdown}
                                    onMouseLeave={scheduleClose}
                                    className={`${navLinkClass(false)} cursor-pointer bg-navy-900 text-white hover:bg-navy-800 hover:text-white`}
                                >
                                    E&E Medical Platforms
                                    <ChevronDown size={12} className={`ml-0.5 opacity-50 transition-transform duration-200 ${openDesktopDropdown === "wellness" ? "rotate-180" : ""}`} />
                                </button>
                                <div
                                    onMouseEnter={openWellnessDropdown}
                                    onMouseLeave={scheduleClose}
                                    style={{ position: "fixed", top: "4.25rem", left: dropdownLeft, zIndex: 9999 }}
                                    className={`w-[340px] bg-white shadow-2xl shadow-black/8 border-t-2 border-brand-500 rounded-b-xl overflow-hidden transition-opacity duration-200 ${openDesktopDropdown === "wellness" ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"}`}
                                >
                                    <ul className="py-1.5">
                                        <li>
                                            <a
                                                href="https://www.figma.com/design/QqGRXig7sOuLtFD6OaNBWH/Ai-wellness-app?node-id=1-1977&t=HfrvsM1Vm4Zm9wIb-0"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-2.5 px-4 py-2 text-sm text-gray-800 hover:text-brand-600 hover:bg-brand-50 font-semibold transition-all duration-200"
                                            >
                                                <div className="w-1.5 h-1.5 rounded-full bg-brand-400 shrink-0" />
                                                Ai-powered eeMeds Platform
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="https://ee-telehealth-connect.onrender.com/login"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-2.5 px-4 py-2 text-sm text-gray-800 hover:text-brand-600 hover:bg-brand-50 font-semibold transition-all duration-200"
                                            >
                                                <div className="w-1.5 h-1.5 rounded-full bg-brand-400 shrink-0" />
                                                eeTelehealth connect platform
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                            <button
                                type="button"
                                aria-label="Scroll nav right"
                                onClick={() => scrollNav("right")}
                                className={`absolute right-0 z-10 h-8 w-8 flex items-center justify-center rounded-full bg-white/95 text-navy-800 shadow-md border border-gray-200 hover:bg-gray-50 transition-all ${canScrollRight ? "opacity-100" : "opacity-0 pointer-events-none"}`}
                            >
                                <ChevronRight size={18} strokeWidth={2.5} />
                            </button>
                        </div>

                        {/* Right side: Digital Healthcare button + Search – always visible */}
                        <div className="hidden lg:flex items-center gap-2 ml-4 shrink-0">
                            <Link
                                to="/software"
                                className="inline-flex items-center gap-1.5 bg-navy-900 text-white px-4 py-2 rounded-lg text-[13px] font-bold hover:bg-navy-800 hover:shadow-lg hover:shadow-navy-950/20 transition-all duration-300 whitespace-nowrap"
                            >
                                Digital Healthcare
                            </Link>
                            <div className="w-px h-5 bg-gray-200" />
                            <button className="p-2 rounded-lg text-gray-600 hover:text-brand-600 hover:bg-gray-50 transition-all duration-200">
                                <Search size={17} />
                            </button>
                        </div>

                        {/* Mobile Toggle */}
                        <button
                            className="lg:hidden flex flex-col justify-center items-center gap-1.5 p-2 ml-auto focus:outline-none"
                            onClick={() => setIsMobileMenuOpen(true)}
                        >
                            <span className="block w-5 h-0.5 bg-navy-800 rounded-full" />
                            <span className="block w-5 h-0.5 bg-navy-800 rounded-full" />
                            <span className="block w-3.5 h-0.5 bg-navy-800 rounded-full" />
                        </button>
                    </div>
                </nav>
            </header>

            {/* Mobile Overlay */}
            <div
                className={`fixed inset-0 bg-navy-950/60 backdrop-blur-sm z-[60] transition-opacity duration-300 lg:hidden ${isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"}`}
                onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Mobile Sidebar */}
            <div className={`fixed top-0 right-0 h-full w-[85%] max-w-sm bg-white z-[70] shadow-2xl transform transition-transform duration-300 ease-out lg:hidden overflow-y-auto flex flex-col ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"}`}>
                <div className="flex justify-between items-center p-4 border-b border-gray-100 bg-gradient-to-r from-navy-950 to-navy-800">
                    <div className="h-10 w-[120px] overflow-hidden flex items-center">
                        <img src={EandELogo} alt="E & E Medicals" className="h-10 max-h-10 w-auto max-w-[120px] object-contain object-left img-crisp block" />
                    </div>
                    <button onClick={() => setIsMobileMenuOpen(false)} className="p-2 text-white hover:text-red-400 transition-colors bg-white/10 rounded-full">
                        <X size={18} />
                    </button>
                </div>

                <div className="flex flex-col py-2">
                    <MobileLink to="/" label="Home" onClick={() => setIsMobileMenuOpen(false)} />
                    <MobileLink to="/about" label="About Us" onClick={() => setIsMobileMenuOpen(false)} />
                    <MobileLink to="/careers" label="Careers" onClick={() => setIsMobileMenuOpen(false)} />

                    <MobileAccordion
                        label="Quality & Compliance"
                        isOpen={activeMobileDropdown === "quality"}
                        onToggle={() => toggleMobileDropdown("quality")}
                        items={[
                            { heading: "Healthcare" },
                            { to: "/reliability", label: "Reliability" },
                            { to: "/six-sigma-healthcare", label: "Six Sigma - Healthcare" },
                            { heading: "Quality Assurance" },
                            { to: "/medical-devices-quality-assurance", label: "Medical Devices" },
                            { to: "/quality-assurance-audits", label: "Audits" },
                            { to: "/quality-system-regulation-qsr", label: "QMSR Regulation" },
                            { to: "/quality-management-system-implementation", label: "QMS Implementation" },
                            { heading: "ISO Standards" },
                            { to: "/iso-13485-medical-quality-system-registration", label: "ISO 13485" },
                            { to: "/iso-14971-medical-device-risk-management-for-medical-devices", label: "ISO 14971" },
                            { to: "/quality-management-system-implementation", label: "ISO 9001 QMS" },
                        ]}
                        onClose={() => setIsMobileMenuOpen(false)}
                    />

                    <MobileAccordion
                        label="Regulatory Operations"
                        isOpen={activeMobileDropdown === "regulatory"}
                        onToggle={() => toggleMobileDropdown("regulatory")}
                        items={[
                            { heading: "Mark Approval & Compliance" },
                            { to: "/ccc-mark-approval", label: "CCC Mark Approval" },
                            { to: "/ce-mark-approval", label: "CE Mark / EU MDR" },
                            { to: "/clinical-data-and-postmarket-compliance-under-the-mdr", label: "Post-market Compliance" },
                            { heading: "Medical Device & Diagnostics" },
                            { to: "/pre-ide-process", label: "IDE Process" },
                            { to: "/fda-510k-application", label: "510(k) / PMA" },
                            { to: "/fda-establishment-registration", label: "Establishment Registration" },
                            { heading: "Drugs & Biologics" },
                            { to: "/investigational-new-drug-ind-application", label: "IND Applications" },
                            { to: "/new-drug-application-overview", label: "NDA Applications" },
                            { to: "/biologics-license-application-bla-overview", label: "BLA Submissions" },
                            { to: "/dmf", label: "DMF Submissions" },
                        ]}
                        onClose={() => setIsMobileMenuOpen(false)}
                    />

                    <MobileAccordion
                        label="AI-Enabled Regulatory"
                        isOpen={activeMobileDropdown === "ai"}
                        onToggle={() => toggleMobileDropdown("ai")}
                        items={[
                            { to: "/ai-regulatory-strategy", label: "AI Regulatory Strategy" },
                            { to: "/ai-samd-pathway", label: "AI SaMD Pathway" },
                            { to: "/ai-fda-readiness", label: "AI FDA Readiness" },
                            { to: "/pccp-authoring", label: "PCCP Authoring" },
                            { to: "/ai-design-controls", label: "AI Design Controls" },
                            { to: "/fda-defense", label: "FDA Defense" },
                        ]}
                        onClose={() => setIsMobileMenuOpen(false)}
                    />

                    <MobileLink to="/media" label="Media" onClick={() => setIsMobileMenuOpen(false)} />
                    <MobileLinkExternal
                        href="http://206.162.244.134:4040/"
                        label="Medical Supply Store"
                        onClick={() => setIsMobileMenuOpen(false)}
                    />
                    <MobileAccordionExternal
                        label="E&E Medical Platforms"
                        isOpen={activeMobileDropdown === "wellness"}
                        onToggle={() => toggleMobileDropdown("wellness")}
                        items={[
                            { href: "https://www.figma.com/design/QqGRXig7sOuLtFD6OaNBWH/Ai-wellness-app?node-id=1-1977&t=HfrvsM1Vm4Zm9wIb-0", label: "Ai-powered eeMeds Platform" },
                            { href: "https://ee-telehealth-connect.onrender.com/login", label: "eeTelehealth connect platform" },
                        ]}
                        onClose={() => setIsMobileMenuOpen(false)}
                    />
                    <MobileLink to="/software" label="Digital Healthcare" onClick={() => setIsMobileMenuOpen(false)} highlight />
                </div>

                <div className="mt-auto p-6 bg-gradient-to-br from-navy-950 to-navy-800">
                    <p className="text-base font-bold text-white mb-3">Get in touch</p>
                    <a href="tel:+16788159233" className="flex items-center text-brand-300 text-base font-semibold mb-2 gap-2 hover:text-brand-200">
                        <Phone size={14} /> Call: +1 (678) 815-9233
                    </a>
                    <a href="mailto:info@eemedicals.com" className="flex items-center text-brand-300 text-base font-semibold mb-4 gap-2 hover:text-brand-200">
                        <Mail size={14} /> info@eemedicals.com
                    </a>
                    <Link
                        to="/share-your-project"
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-brand-500 hover:bg-brand-400 text-white font-bold text-sm"
                    >
                        <FileText size={16} /> Enquiry Form – Share Your Project
                    </Link>
                </div>
            </div>
        </>
    );
};

/* --- Sub-components --- */

function MegaColumn({ title, items }: { title: string; items: { to: string; icon: React.ElementType; label: string }[] }) {
    return (
        <div>
            <h3 className="text-navy-900 font-bold uppercase mb-3 tracking-wider text-xs flex items-center gap-2">
                <span className="w-5 h-0.5 bg-brand-500 rounded-full" />
                {title}
            </h3>
            <ul className="space-y-0.5">
                {items.map(({ to, icon: Icon, label }) => (
                    <li key={to + label}>
                        <Link to={to} className="flex items-center gap-2.5 py-1.5 px-2 -mx-2 rounded-lg text-gray-800 hover:text-brand-600 hover:bg-brand-50 font-semibold transition-all duration-200 text-sm">
                            <Icon size={14} className="text-gray-600 group-hover/link:text-brand-500 shrink-0" />
                            {label}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

function MobileLink({ to, label, onClick, highlight }: { to: string; label: string; onClick: () => void; highlight?: boolean }) {
    return (
        <Link
            to={to}
            className={`px-6 py-3.5 font-semibold border-b border-gray-50 transition-colors ${highlight ? "text-brand-500 font-bold" : "text-navy-800 hover:text-brand-500"}`}
            onClick={onClick}
        >
            {label}
        </Link>
    );
}

function MobileLinkExternal({ href, label, onClick }: { href: string; label: string; onClick: () => void }) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3.5 font-semibold border-b border-gray-50 text-navy-800 hover:text-brand-500 transition-colors block"
            onClick={onClick}
        >
            {label}
        </a>
    );
}

function MobileAccordionExternal({ label, isOpen, onToggle, items, onClose }: {
    label: string;
    isOpen: boolean;
    onToggle: () => void;
    items: { href: string; label: string }[];
    onClose: () => void;
}) {
    return (
        <div className="border-b border-gray-50">
            <button className="w-full px-6 py-3.5 flex justify-between items-center text-navy-800 font-semibold hover:text-brand-500 transition-colors" onClick={onToggle}>
                {label}
                <ChevronDown size={16} className={`transition-transform duration-200 ${isOpen ? "rotate-180 text-brand-500" : ""}`} />
            </button>
            <div className={`overflow-hidden transition-all duration-300 ${isOpen ? "max-h-[400px]" : "max-h-0"}`}>
                <ul className="flex flex-col py-2 px-6 text-base text-gray-800 font-medium space-y-1 pb-4 bg-gray-50/50">
                    {items.map((item, i) => (
                        <li key={i}>
                            <a href={item.href} target="_blank" rel="noopener noreferrer" onClick={onClose} className="block py-2 px-3 rounded-lg hover:text-brand-500 hover:bg-white transition-all">
                                {item.label}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

function MobileAccordion({ label, isOpen, onToggle, items, onClose }: {
    label: string;
    isOpen: boolean;
    onToggle: () => void;
    items: ({ heading?: string; to?: string; label?: string })[];
    onClose: () => void;
}) {
    return (
        <div className="border-b border-gray-50">
            <button className="w-full px-6 py-3.5 flex justify-between items-center text-navy-800 font-semibold hover:text-brand-500 transition-colors" onClick={onToggle}>
                {label}
                <ChevronDown size={16} className={`transition-transform duration-200 ${isOpen ? "rotate-180 text-brand-500" : ""}`} />
            </button>
            <div className={`overflow-hidden transition-all duration-300 ${isOpen ? "max-h-[600px]" : "max-h-0"}`}>
                <ul className="flex flex-col py-2 px-6 text-base text-gray-800 font-medium space-y-1 pb-4 bg-gray-50/50">
                    {items.map((item, i) =>
                        item.heading ? (
                            <li key={i} className="font-bold text-navy-800 pt-3 pb-1 text-sm uppercase tracking-wider">{item.heading}</li>
                        ) : (
                            <li key={i}>
                                <Link to={item.to!} onClick={onClose} className="block py-2 px-3 rounded-lg hover:text-brand-500 hover:bg-white transition-all">
                                    {item.label}
                                </Link>
                            </li>
                        )
                    )}
                </ul>
            </div>
        </div>
    );
}
