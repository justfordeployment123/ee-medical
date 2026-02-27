import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
    Phone,
    Mail,
    MapPin,
    Search,
    ChevronDown,
    Clock,
    Facebook,
    Twitter,
    Linkedin,
    Youtube,
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

export const Header: React.FC = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeMobileDropdown, setActiveMobileDropdown] = useState<string | null>(null);

    const toggleMobileDropdown = (menu: string) => {
        setActiveMobileDropdown(activeMobileDropdown === menu ? null : menu);
    };

    return (
        <>
            <header className="w-full flex flex-col z-40 relative">
                {/* 1. Top Bar — blue background */}
                <div className="bg-[#1a8fd1] text-white text-xs py-2 px-4 md:px-8 justify-between items-center hidden md:flex">
                    <div className="flex items-center space-x-2 font-medium">
                        <Clock size={14} className="text-white" />
                        <span>Mon - Fri: 9:00 am EST - 06:00 pm EST</span>
                    </div>
                    <div className="flex items-center space-x-1">
                        {/* Divider */}
                        <div className="w-px h-4 bg-white/40 mx-2" />
                        <div className="flex space-x-3 text-white">
                            <a href="#" className="hover:text-white/70 transition-colors">
                                <Facebook size={14} />
                            </a>
                            <a href="#" className="hover:text-white/70 transition-colors">
                                <Twitter size={14} />
                            </a>
                            <a href="#" className="hover:text-white/70 transition-colors">
                                <Linkedin size={14} />
                            </a>
                            <a href="#" className="hover:text-white/70 transition-colors">
                                <Youtube size={14} />
                            </a>
                        </div>
                    </div>
                </div>

                {/* 2. Middle Bar — dark navy background with logo & contact */}
                <div className="py-5 px-4 md:px-8 justify-between items-center bg-[#0d2340] hidden lg:flex ">
                    <Link to="/" className="flex items-center">
                        <img
                            src="https://eemedicals.com/wp-content/uploads/2025/10/logo-new.jpg"
                            alt="E & E Medicals"
                            className="h-14 lg:h-16 w-auto object-contain"
                        />
                    </Link>

                    <div className="flex space-x-10">
                        <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 flex items-center justify-center">
                                <Phone className="text-[#1a8fd1] w-7 h-7" strokeWidth={1.5} />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-sm font-bold text-white">Call Us: (678) 385-6106</span>
                                <span className="text-xs text-gray-400 font-medium">(Mon - Fri)</span>
                            </div>
                        </div>
                        <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 flex items-center justify-center">
                                <Mail className="text-[#1a8fd1] w-7 h-7" strokeWidth={1.5} />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-sm font-bold text-white">Mail us for help:</span>
                                <a href="mailto:info@eemedicals.com" className="text-xs text-[#1a8fd1] font-medium hover:underline">
                                    info@eemedicals.com
                                </a>
                            </div>
                        </div>
                        <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 flex items-center justify-center">
                                <MapPin className="text-[#1a8fd1] w-7 h-7" strokeWidth={1.5} />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-sm font-bold text-white">Enquiry Form:</span>
                                <span className="text-xs text-gray-400 font-medium">Share Your Project</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 3. Bottom Bar / Main Navigation — white background */}
                <nav className="w-full bg-white text-gray-800 shadow-md sticky top-0 z-50">
                    <div className="px-4 md:px-8 flex justify-between items-center max-w-7xl mx-auto relative">
                        <div className="lg:hidden py-3">
                            <Link to="/">
                                <img
                                    src="https://eemedicals.com/wp-content/uploads/2025/10/logo-new.jpg"
                                    alt="E & E Medicals"
                                    className="h-10 w-auto object-contain"
                                />
                            </Link>
                        </div>

                        {/* Desktop Menu */}
                        <ul className="hidden lg:flex space-x-0 text-sm font-semibold w-full">
                            <li>
                                <Link to="/" className="block py-5 px-4 text-gray-700 hover:text-[#1a8fd1] transition-colors">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link to="/about" className="block py-5 px-4 text-gray-700 hover:text-[#1a8fd1] transition-colors">
                                    About Us
                                </Link>
                            </li>

                            {/* Mega Menu: Quality & Compliance */}
                            <li className="static group">
                                <button className="flex items-center py-5 px-4 text-gray-700 hover:text-[#1a8fd1] transition-colors">
                                    Quality & Compliance <ChevronDown size={14} className="ml-1" />
                                </button>
                                <div className="absolute left-0 w-full top-full bg-white shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 border-t-2 border-[#1a8fd1]">
                                    <div className="max-w-7xl mx-auto py-10 px-8 grid grid-cols-3 gap-8">
                                        {/* Column 1 */}
                                        <div>
                                            <h3 className="text-gray-900 font-bold uppercase mb-6 tracking-wider text-sm">Healthcare</h3>
                                            <ul className="space-y-4">
                                                <li>
                                                    <Link
                                                        to="/reliability"
                                                        className="flex items-center text-gray-600 hover:text-[#1a8fd1] font-medium"
                                                    >
                                                        <Handshake size={18} className="mr-3 text-gray-400" /> Reliability
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        to="/six-sigma-healthcare"
                                                        className="flex items-center text-gray-600 hover:text-[#1a8fd1] font-medium"
                                                    >
                                                        <Lightbulb size={18} className="mr-3 text-gray-400" /> Six Sigma - Healthcare
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                        {/* Column 2 */}
                                        <div>
                                            <h3 className="text-gray-900 font-bold uppercase mb-6 tracking-wider text-sm">Quality Assurance</h3>
                                            <ul className="space-y-4">
                                                <li>
                                                    <Link
                                                        to="/medical-devices-quality-assurance"
                                                        className="flex items-center text-gray-600 hover:text-[#1a8fd1] font-medium"
                                                    >
                                                        <Briefcase size={18} className="mr-3 text-gray-400" /> Medical Devices
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        to="/quality-assurance-audits"
                                                        className="flex items-center text-gray-600 hover:text-[#1a8fd1] font-medium"
                                                    >
                                                        <ClipboardCheck size={18} className="mr-3 text-gray-400" /> Audits
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        to="/reliability"
                                                        className="flex items-center text-gray-600 hover:text-[#1a8fd1] font-medium"
                                                    >
                                                        <Handshake size={18} className="mr-3 text-gray-400" /> Reliability
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        to="/quality-system-regulation-qsr"
                                                        className="flex items-center text-gray-600 hover:text-[#1a8fd1] font-medium"
                                                    >
                                                        <Cpu size={18} className="mr-3 text-gray-400" /> Quality Management System Regulation (QMSR)
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        to="/quality-management-system-implementation"
                                                        className="flex items-center text-gray-600 hover:text-[#1a8fd1] font-medium"
                                                    >
                                                        <ShieldCheck size={18} className="mr-3 text-gray-400" /> Quality Management System
                                                        Implementation
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                        {/* Column 3 */}
                                        <div>
                                            <h3 className="text-gray-900 font-bold uppercase mb-6 tracking-wider text-sm">ISO</h3>
                                            <ul className="space-y-4">
                                                <li>
                                                    <Link
                                                        to="/iso-13485-medical-quality-system-registration"
                                                        className="flex items-center text-gray-600 hover:text-[#1a8fd1] font-medium"
                                                    >
                                                        <CheckCircle size={18} className="mr-3 text-gray-400" /> ISO 13485 Quality System Registration
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        to="/iso-14971-medical-device-risk-management-for-medical-devices"
                                                        className="flex items-center text-gray-600 hover:text-[#1a8fd1] font-medium"
                                                    >
                                                        <ShieldAlert size={18} className="mr-3 text-gray-400" /> ISO 14971 Device Risk Management
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        to="/quality-management-system-implementation"
                                                        className="flex items-center text-gray-600 hover:text-[#1a8fd1] font-medium"
                                                    >
                                                        <Heart size={18} className="mr-3 text-gray-400" /> ISO 9001 Quality Management System
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        to="/free-iso-13485-2016-gap-analysis-tool"
                                                        className="flex items-center text-gray-600 hover:text-[#1a8fd1] font-medium"
                                                    >
                                                        <Target size={18} className="mr-3 text-gray-400" /> Free ISO 13485:2016 Gap Analysis Tool
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="#" className="flex items-center text-gray-600 hover:text-[#1a8fd1] font-medium">
                                                        <History size={18} className="mr-3 text-gray-400" /> Free ISO 9001:2015 Gap Analysis Tool
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </li>

                            {/* Mega Menu: Regulatory Operations */}
                            <li className="static group">
                                <button className="flex items-center py-5 px-4 text-gray-700 hover:text-[#1a8fd1] transition-colors">
                                    Regulatory Operations <ChevronDown size={14} className="ml-1" />
                                </button>
                                <div className="absolute left-0 w-full top-full bg-white shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 border-t-2 border-[#1a8fd1]">
                                    <div className="max-w-7xl mx-auto py-10 px-8 grid grid-cols-3 gap-8">
                                        {/* Column 1 */}
                                        <div>
                                            <h3 className="text-gray-900 font-bold mb-6 text-sm pr-4">Mark Approval / Licensing / Compliance</h3>
                                            <ul className="space-y-4">
                                                <li>
                                                    <Link to="/ccc-mark-approval" className="flex items-center text-gray-600 hover:text-[#1a8fd1] font-medium">
                                                        <Globe size={18} className="mr-3 text-gray-400 shrink-0" /> CCC Mark Approval
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="/ce-mark-approval" className="flex items-center text-gray-600 hover:text-[#1a8fd1] font-medium">
                                                        <Globe size={18} className="mr-3 text-gray-400 shrink-0" /> CE Mark Approval
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="/ce-mark-approval" className="flex items-center text-gray-600 hover:text-[#1a8fd1] font-medium">
                                                        <FileText size={18} className="mr-3 text-gray-400 shrink-0" /> EU MDR/IVDR Technical
                                                        Documentation
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="/clinical-data-and-postmarket-compliance-under-the-mdr" className="flex items-center text-gray-600 hover:text-[#1a8fd1] font-medium">
                                                        <ShieldCheck size={18} className="mr-3 text-gray-400 shrink-0" /> Post-market Compliance
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="/fda-483-observations-warning-letters-recalls-remediation" className="flex items-center text-gray-600 hover:text-[#1a8fd1] font-medium">
                                                        <ShieldAlert size={18} className="mr-3 text-gray-400 shrink-0" /> FDA 483 Warning
                                                        Letter/Recalls and Remediation
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                        {/* Column 2 */}
                                        <div>
                                            <h3 className="text-gray-900 font-bold mb-6 text-sm pr-4">Medical Device and Diagnostics</h3>
                                            <ul className="space-y-4">
                                                <li>
                                                    <Link to="#" className="flex items-center text-gray-600 hover:text-[#1a8fd1] font-medium">
                                                        <Settings size={18} className="mr-3 text-gray-400 shrink-0" /> Investigational Device
                                                        Exemption (IDE)
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="#" className="flex items-center text-gray-600 hover:text-[#1a8fd1] font-medium">
                                                        <Heart size={18} className="mr-3 text-gray-400 shrink-0" /> Premarket Notification 510(k),
                                                        DeNovo, PMA
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="#" className="flex items-center text-gray-600 hover:text-[#1a8fd1] font-medium">
                                                        <Building2 size={18} className="mr-3 text-gray-400 shrink-0" /> Establishment Registration
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="#" className="flex items-center text-gray-600 hover:text-[#1a8fd1] font-medium">
                                                        <MapPin size={18} className="mr-3 text-gray-400 shrink-0" /> US Agent for Foreign
                                                        Establishments
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                        {/* Column 3 */}
                                        <div>
                                            <h3 className="text-gray-900 font-bold mb-6 text-sm pr-4">Drugs / Biologics / Pharmacovigilance</h3>
                                            <ul className="space-y-4">
                                                <li>
                                                    <Link to="#" className="flex items-center text-gray-600 hover:text-[#1a8fd1] font-medium">
                                                        <Target size={18} className="mr-3 text-gray-400 shrink-0" /> Investigational New Drug (IND)
                                                        Application
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="#" className="flex items-center text-gray-600 hover:text-[#1a8fd1] font-medium">
                                                        <Target size={18} className="mr-3 text-gray-400 shrink-0" /> New Drug Application (NDA)
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="#" className="flex items-center text-gray-600 hover:text-[#1a8fd1] font-medium">
                                                        <Target size={18} className="mr-3 text-gray-400 shrink-0" /> Abbreviated New Drug Application
                                                        (ANDA)
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="#" className="flex items-center text-gray-600 hover:text-[#1a8fd1] font-medium">
                                                        <Target size={18} className="mr-3 text-gray-400 shrink-0" /> Biologics License Application
                                                        (BLA)
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="#" className="flex items-center text-gray-600 hover:text-[#1a8fd1] font-medium">
                                                        <Target size={18} className="mr-3 text-gray-400 shrink-0" /> Drug Master File (DMF)
                                                        Submissions
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </li>

                            {/* Standard Dropdown: AI-Enabled Regulatory */}
                            <li className="relative group">
                                <button className="flex items-center py-5 px-4 text-gray-700 hover:text-[#1a8fd1] transition-colors">
                                    AI-Enabled Regulatory <ChevronDown size={14} className="ml-1" />
                                </button>
                                <div className="absolute left-0 top-full mt-0 w-96 bg-white shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 border-t-2 border-[#1a8fd1]">
                                    <ul className="flex flex-col py-6 px-4 space-y-4">
                                        <li>
                                            <Link to="#" className="flex items-center text-gray-600 hover:text-[#1a8fd1] font-medium">
                                                <CheckCircle size={18} className="mr-3 text-gray-500 shrink-0" /> AI SaMD Regulatory Pathway Strategy
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="#" className="flex items-center text-gray-600 hover:text-[#1a8fd1] font-medium">
                                                <CheckCircle size={18} className="mr-3 text-gray-500 shrink-0" /> AI FDA Readiness & Deficiency Risk
                                                Audit
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="#" className="flex items-center text-gray-600 hover:text-[#1a8fd1] font-medium">
                                                <CheckCircle size={18} className="mr-3 text-gray-500 shrink-0" /> Predetermined Change Control Plan
                                                (PCCP) Authoring
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="#" className="flex items-center text-gray-600 hover:text-[#1a8fd1] font-medium">
                                                <CheckCircle size={18} className="mr-3 text-gray-500 shrink-0" /> AI Design Controls & QMSR
                                                Integration
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="#" className="flex items-center text-gray-600 hover:text-[#1a8fd1] font-medium">
                                                <CheckCircle size={18} className="mr-3 text-gray-500 shrink-0" /> FDA Interaction & Defense Support
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </li>

                            <li>
                                <Link to="/media" className="block py-5 px-4 text-gray-700 hover:text-[#1a8fd1] transition-colors">
                                    Media
                                </Link>
                            </li>

                            {/* "Software" — highlighted in blue as shown in screenshot */}
                            <li>
                                <Link to="/software" className="block py-5 px-4 text-[#1a8fd1] font-bold hover:text-[#1278b5] transition-colors">
                                    Software
                                </Link>
                            </li>
                        </ul>

                        {/* Vertical Divider + Search Icon (Desktop) */}
                        <div className="hidden lg:flex items-center self-stretch ml-auto">
                            <div className="w-px h-8 bg-gray-200 mx-2" />
                            <div className="py-5 px-4 cursor-pointer text-gray-500 hover:text-[#1a8fd1] transition-colors">
                                <Search size={18} />
                            </div>
                        </div>

                        {/* Mobile Menu Toggle Button */}
                        <button
                            className="lg:hidden flex items-center p-2 focus:outline-none text-gray-700"
                            onClick={() => setIsMobileMenuOpen(true)}
                        >
                            <div className="space-y-1.5">
                                <span className="block w-6 h-0.5 bg-gray-700"></span>
                                <span className="block w-6 h-0.5 bg-gray-700"></span>
                                <span className="block w-6 h-0.5 bg-gray-700"></span>
                            </div>
                        </button>
                    </div>
                </nav>
            </header>

            {/* --- MOBILE SIDEBAR SLIDE-IN --- */}
            <div
                className={`fixed inset-0 bg-black/60 z-60 transition-opacity duration-300 lg:hidden ${isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
                onClick={() => setIsMobileMenuOpen(false)}
            ></div>

            <div
                className={`fixed top-0 right-0 h-full w-[85%] max-w-sm bg-white z-70 shadow-2xl transform transition-transform duration-300 ease-in-out lg:hidden overflow-y-auto flex flex-col ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"}`}
            >
                <div className="flex justify-between items-center p-4 border-b border-gray-100 bg-[#0d2340]">
                    <img
                        src="https://eemedicals.com/wp-content/uploads/2025/10/logo-new.jpg"
                        alt="E & E Medicals"
                        className="h-10 w-auto object-contain"
                    />
                    <button
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="p-2 text-white hover:text-red-400 transition-colors bg-white/10 rounded-full"
                    >
                        <X size={20} />
                    </button>
                </div>

                <div className="flex flex-col py-4">
                    <Link
                        to="/"
                        className="px-6 py-3 text-gray-800 font-semibold hover:text-[#1a8fd1] border-b border-gray-100"
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        Home
                    </Link>
                    <Link
                        to="/about"
                        className="px-6 py-3 text-gray-800 font-semibold hover:text-[#1a8fd1] border-b border-gray-100"
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        About Us
                    </Link>

                    {/* Accordion: Quality & Compliance */}
                    <div className="border-b border-gray-100">
                        <button
                            className="w-full px-6 py-3 flex justify-between items-center text-gray-800 font-semibold hover:text-[#1a8fd1]"
                            onClick={() => toggleMobileDropdown("quality")}
                        >
                            Quality & Compliance
                            <ChevronDown
                                size={18}
                                className={`transform transition-transform ${activeMobileDropdown === "quality" ? "rotate-180 text-[#1a8fd1]" : ""}`}
                            />
                        </button>
                        <div
                            className={`overflow-hidden transition-all duration-300 bg-gray-50 ${activeMobileDropdown === "quality" ? "max-h-150" : "max-h-0"}`}
                        >
                            <ul className="flex flex-col py-2 px-8 text-sm text-gray-600 space-y-3 pb-4">
                                <li className="font-bold text-gray-800 pt-2">Healthcare</li>
                                <li>
                                    <Link to="/reliability" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-[#1a8fd1]">
                                        Reliability
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-[#1a8fd1]">
                                        Six Sigma - Healthcare
                                    </Link>
                                </li>
                                <li className="font-bold text-gray-800 pt-2">Quality Assurance</li>
                                <li>
                                    <Link to="#" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-[#1a8fd1]">
                                        Medical Devices
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-[#1a8fd1]">
                                        Audits
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-[#1a8fd1]">
                                        QMSR Regulation
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-[#1a8fd1]">
                                        QMS Implementation
                                    </Link>
                                </li>
                                <li className="font-bold text-gray-800 pt-2">ISO</li>
                                <li>
                                    <Link to="#" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-[#1a8fd1]">
                                        ISO 13485 Registration
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-[#1a8fd1]">
                                        ISO 14971 Device Risk Mgt
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-[#1a8fd1]">
                                        ISO 9001 QMS
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Accordion: Regulatory Operations */}
                    <div className="border-b border-gray-100">
                        <button
                            className="w-full px-6 py-3 flex justify-between items-center text-gray-800 font-semibold hover:text-[#1a8fd1]"
                            onClick={() => toggleMobileDropdown("regulatory")}
                        >
                            Regulatory Operations
                            <ChevronDown
                                size={18}
                                className={`transform transition-transform ${activeMobileDropdown === "regulatory" ? "rotate-180 text-[#1a8fd1]" : ""}`}
                            />
                        </button>
                        <div
                            className={`overflow-hidden transition-all duration-300 bg-gray-50 ${activeMobileDropdown === "regulatory" ? "max-h-150" : "max-h-0"}`}
                        >
                            <ul className="flex flex-col py-2 px-8 text-sm text-gray-600 space-y-3 pb-4">
                                <li className="font-bold text-gray-800 pt-2">Mark Approval & Compliance</li>
                                <li>
                                    <Link to="#" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-[#1a8fd1]">
                                        CE & CCC Mark Approval
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-[#1a8fd1]">
                                        EU MDR/IVDR Documentation
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-[#1a8fd1]">
                                        Post-market Compliance
                                    </Link>
                                </li>
                                <li className="font-bold text-gray-800 pt-2">Medical Device & Diagnostics</li>
                                <li>
                                    <Link to="#" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-[#1a8fd1]">
                                        IDE & 510(k) Applications
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-[#1a8fd1]">
                                        Establishment Registration
                                    </Link>
                                </li>
                                <li className="font-bold text-gray-800 pt-2">Drugs & Biologics</li>
                                <li>
                                    <Link to="#" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-[#1a8fd1]">
                                        IND & NDA Applications
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-[#1a8fd1]">
                                        BLA & DMF Submissions
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Accordion: AI-Enabled Regulatory */}
                    <div className="border-b border-gray-100">
                        <button
                            className="w-full px-6 py-3 flex justify-between items-center text-gray-800 font-semibold hover:text-[#1a8fd1]"
                            onClick={() => toggleMobileDropdown("ai")}
                        >
                            AI-Enabled Regulatory
                            <ChevronDown
                                size={18}
                                className={`transform transition-transform ${activeMobileDropdown === "ai" ? "rotate-180 text-[#1a8fd1]" : ""}`}
                            />
                        </button>
                        <div
                            className={`overflow-hidden transition-all duration-300 bg-gray-50 ${activeMobileDropdown === "ai" ? "max-h-100" : "max-h-0"}`}
                        >
                            <ul className="flex flex-col py-2 px-8 text-sm text-gray-600 space-y-3 pb-4">
                                <li>
                                    <Link to="#" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-[#1a8fd1]">
                                        AI SaMD Regulatory Pathway
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-[#1a8fd1]">
                                        AI FDA Readiness & Risk Audit
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-[#1a8fd1]">
                                        PCCP Authoring
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-[#1a8fd1]">
                                        AI Design Controls & QMSR
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-[#1a8fd1]">
                                        FDA Interaction & Defense
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <Link
                        to="/media"
                        className="px-6 py-3 text-gray-800 font-semibold hover:text-[#1a8fd1] border-b border-gray-100"
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        Media
                    </Link>
                    <Link
                        to="/software"
                        className="px-6 py-3 text-[#1a8fd1] font-bold border-b border-gray-100"
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        Software
                    </Link>
                </div>

                <div className="mt-auto p-6 bg-[#0d2340]">
                    <p className="text-sm font-bold text-white mb-2">Need help?</p>
                    <div className="flex items-center text-[#1a8fd1] text-sm mb-2">
                        <Phone size={16} className="mr-2" /> (678) 385-6106
                    </div>
                    <div className="flex items-center text-[#1a8fd1] text-sm">
                        <Mail size={16} className="mr-2" /> info@eemedicals.com
                    </div>
                </div>
            </div>
        </>
    );
};
