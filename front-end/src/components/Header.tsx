import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Search, ChevronDown, Clock, Facebook, Twitter, Linkedin, Youtube, X } from 'lucide-react';

export const Header: React.FC = () => {
  // State for the main mobile sidebar
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // State to handle expanding/collapsing dropdowns inside the mobile menu
  const [activeMobileDropdown, setActiveMobileDropdown] = useState<string | null>(null);

  const toggleMobileDropdown = (menu: string) => {
    setActiveMobileDropdown(activeMobileDropdown === menu ? null : menu);
  };

  return (
    <>
      <header className="w-full flex flex-col z-40 bg-white shadow-md relative">
        {/* 1. Top Bar */}
        <div className="bg-gray-100 text-xs py-2 px-4 md:px-8 flex justify-between items-center hidden md:flex border-b border-gray-200">
          <div className="flex items-center space-x-2 text-gray-600 font-medium">
            <Clock size={14} className="text-blue-500" />
            <span>Mon - Fri: 9:00 am EST - 06:00 pm EST</span>
          </div>
          <div className="flex space-x-4 text-gray-400">
            <a href="#" className="hover:text-blue-600 transition-colors"><Facebook size={14} /></a>
            <a href="#" className="hover:text-blue-400 transition-colors"><Twitter size={14} /></a>
            <a href="#" className="hover:text-blue-700 transition-colors"><Linkedin size={14} /></a>
            <a href="#" className="hover:text-red-600 transition-colors"><Youtube size={14} /></a>
          </div>
        </div>

        {/* 2. Middle Bar (Logo & Contact Info) */}
        <div className="py-6 px-4 md:px-8 flex justify-between items-center bg-white hidden lg:flex">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img 
              src="https://eemedicals.com/wp-content/uploads/2025/10/logo-new.jpg" 
              alt="E & E Medicals" 
              className="h-14 lg:h-16 w-auto object-contain"
            />
          </Link>
          
          {/* Info Items */}
          <div className="flex space-x-10">
            <div className="flex items-center space-x-3">
              <Phone className="text-blue-500 w-8 h-8" strokeWidth={1.5} />
              <div className="flex flex-col">
                <span className="text-sm font-bold text-gray-900">Call Us: (678) 385-6106</span>
                <span className="text-xs text-gray-500 font-medium">(Mon - Fri)</span>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Mail className="text-blue-500 w-8 h-8" strokeWidth={1.5} />
              <div className="flex flex-col">
                <span className="text-sm font-bold text-gray-900">Mail us for help:</span>
                <a href="mailto:info@eemedicals.com" className="text-xs text-blue-600 font-medium hover:underline">info@eemedicals.com</a>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <MapPin className="text-blue-500 w-8 h-8" strokeWidth={1.5} />
              <div className="flex flex-col">
                <span className="text-sm font-bold text-gray-900">Enquiry Form:</span>
                <span className="text-xs text-gray-500 font-medium">Share Your Project</span>
              </div>
            </div>
          </div>
        </div>

        {/* 3. Bottom Bar / Main Navigation */}
        <nav className="w-full bg-[#0a1e3f] text-white sticky top-0">
          <div className="px-4 md:px-8 flex justify-between items-center max-w-7xl mx-auto">
            
            {/* Mobile Logo (Visible only on small screens) */}
            <div className="lg:hidden py-3">
              <Link to="/">
                  <img 
                    src="https://eemedicals.com/wp-content/uploads/2025/10/logo-new.jpg" 
                    alt="E & E Medicals" 
                    className="h-10 w-auto object-contain bg-white p-1 rounded"
                  />
              </Link>
            </div>

            {/* Desktop Menu */}
            <ul className="hidden lg:flex space-x-1 text-sm font-semibold">
              <li>
                <Link to="/" className="block py-5 px-4 text-blue-400 hover:text-white transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="block py-5 px-4 hover:text-blue-400 transition-colors">About Us</Link>
              </li>

              {/* Dropdown: Quality & Compliance */}
              <li className="relative group">
                <button className="flex items-center py-5 px-4 hover:text-blue-400 transition-colors">
                  Quality & Compliance <ChevronDown size={14} className="ml-1" />
                </button>
                <div className="absolute left-0 top-full mt-0 w-64 bg-white shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 border-t-2 border-blue-500">
                  <ul className="flex flex-col py-2 text-gray-700">
                    <li><a href="#" className="block px-4 py-2 hover:bg-gray-50 hover:text-blue-600">Reliability</a></li>
                    <li><a href="#" className="block px-4 py-2 hover:bg-gray-50 hover:text-blue-600">Six Sigma - Healthcare</a></li>
                    <li><a href="#" className="block px-4 py-2 hover:bg-gray-50 hover:text-blue-600">Medical Devices</a></li>
                    <li><a href="#" className="block px-4 py-2 hover:bg-gray-50 hover:text-blue-600">Audits</a></li>
                    <li><a href="#" className="block px-4 py-2 hover:bg-gray-50 hover:text-blue-600">ISO 13485 Registration</a></li>
                    <li><a href="#" className="block px-4 py-2 hover:bg-gray-50 hover:text-blue-600">ISO 9001 QMS</a></li>
                  </ul>
                </div>
              </li>

              {/* Dropdown: Regulatory Operations */}
              <li className="relative group">
                <button className="flex items-center py-5 px-4 hover:text-blue-400 transition-colors">
                  Regulatory Operations <ChevronDown size={14} className="ml-1" />
                </button>
                <div className="absolute left-0 top-full mt-0 w-72 bg-white shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 border-t-2 border-blue-500">
                  <ul className="flex flex-col py-2 text-gray-700">
                    <li><a href="#" className="block px-4 py-2 hover:bg-gray-50 hover:text-blue-600">CE Mark Approval</a></li>
                    <li><a href="#" className="block px-4 py-2 hover:bg-gray-50 hover:text-blue-600">EU MDR/IVDR Documentation</a></li>
                    <li><a href="#" className="block px-4 py-2 hover:bg-gray-50 hover:text-blue-600">FDA 510(k) Application</a></li>
                    <li><a href="#" className="block px-4 py-2 hover:bg-gray-50 hover:text-blue-600">US Agent for Foreign Establishments</a></li>
                    <li><a href="#" className="block px-4 py-2 hover:bg-gray-50 hover:text-blue-600">New Drug Application (NDA)</a></li>
                  </ul>
                </div>
              </li>

              {/* Dropdown: AI-Enabled Regulatory */}
              <li className="relative group">
                <button className="flex items-center py-5 px-4 hover:text-blue-400 transition-colors">
                  AI-Enabled Regulatory <ChevronDown size={14} className="ml-1" />
                </button>
                <div className="absolute left-0 top-full mt-0 w-72 bg-white shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 border-t-2 border-blue-500">
                  <ul className="flex flex-col py-2 text-gray-700">
                    <li><a href="#" className="block px-4 py-2 hover:bg-gray-50 hover:text-blue-600">AI SaMD Regulatory Pathway</a></li>
                    <li><a href="#" className="block px-4 py-2 hover:bg-gray-50 hover:text-blue-600">AI FDA Readiness & Risk Audit</a></li>
                    <li><a href="#" className="block px-4 py-2 hover:bg-gray-50 hover:text-blue-600">PCCP Authoring</a></li>
                  </ul>
                </div>
              </li>

              <li>
                <Link to="/media" className="block py-5 px-4 hover:text-blue-400 transition-colors">Media</Link>
              </li>
              <li>
                <Link to="/software" className="block py-5 px-4 hover:text-blue-400 transition-colors">Software</Link>
              </li>
            </ul>

            {/* Search Icon (Desktop) */}
            <div className="py-5 pl-4 border-l border-[#1a325a] ml-4 hidden lg:block cursor-pointer hover:text-blue-400 transition-colors">
              <Search size={18} />
            </div>

            {/* Mobile Menu Toggle Button */}
            <button 
              className="lg:hidden flex items-center p-2 focus:outline-none"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <div className="space-y-1.5">
                <span className="block w-6 h-0.5 bg-white"></span>
                <span className="block w-6 h-0.5 bg-white"></span>
                <span className="block w-6 h-0.5 bg-white"></span>
              </div>
            </button>

          </div>
        </nav>
      </header>

      {/* --- MOBILE SIDEBAR SLIDE-IN --- */}
      
      {/* Background Overlay */}
      <div 
        className={`fixed inset-0 bg-black/60 z-60 transition-opacity duration-300 lg:hidden ${isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
        onClick={() => setIsMobileMenuOpen(false)}
      ></div>

      {/* Sidebar Drawer */}
      <div 
        className={`fixed top-0 right-0 h-full w-[85%] max-w-sm bg-white z-70 shadow-2xl transform transition-transform duration-300 ease-in-out lg:hidden overflow-y-auto flex flex-col ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        {/* Sidebar Header */}
        <div className="flex justify-between items-center p-4 border-b border-gray-100">
          <img 
            src="https://eemedicals.com/wp-content/uploads/2025/10/logo-new.jpg" 
            alt="E & E Medicals" 
            className="h-10 w-auto object-contain"
          />
          <button 
            onClick={() => setIsMobileMenuOpen(false)}
            className="p-2 text-gray-500 hover:text-red-500 transition-colors bg-gray-100 rounded-full"
          >
            <X size={20} />
          </button>
        </div>

        {/* Sidebar Links */}
        <div className="flex flex-col py-4">
          <Link to="/" className="px-6 py-3 text-gray-800 font-semibold hover:text-blue-600 border-b border-gray-50" onClick={() => setIsMobileMenuOpen(false)}>
            Home
          </Link>
          <Link to="/about" className="px-6 py-3 text-gray-800 font-semibold hover:text-blue-600 border-b border-gray-50" onClick={() => setIsMobileMenuOpen(false)}>
            About Us
          </Link>

          {/* Accordion: Quality & Compliance */}
          <div className="border-b border-gray-50">
            <button 
              className="w-full px-6 py-3 flex justify-between items-center text-gray-800 font-semibold hover:text-blue-600"
              onClick={() => toggleMobileDropdown('quality')}
            >
              Quality & Compliance
              <ChevronDown size={18} className={`transform transition-transform ${activeMobileDropdown === 'quality' ? 'rotate-180 text-blue-600' : ''}`} />
            </button>
            <div className={`overflow-hidden transition-all duration-300 bg-gray-50 ${activeMobileDropdown === 'quality' ? 'max-h-96' : 'max-h-0'}`}>
              <ul className="flex flex-col py-2 px-8 text-sm text-gray-600 space-y-3">
                <li><a href="#" className="hover:text-blue-600">Reliability</a></li>
                <li><a href="#" className="hover:text-blue-600">Six Sigma - Healthcare</a></li>
                <li><a href="#" className="hover:text-blue-600">Medical Devices</a></li>
                <li><a href="#" className="hover:text-blue-600">Audits</a></li>
                <li><a href="#" className="hover:text-blue-600">ISO 13485 Registration</a></li>
                <li><a href="#" className="hover:text-blue-600">ISO 9001 QMS</a></li>
              </ul>
            </div>
          </div>

          {/* Accordion: Regulatory Operations */}
          <div className="border-b border-gray-50">
            <button 
              className="w-full px-6 py-3 flex justify-between items-center text-gray-800 font-semibold hover:text-blue-600"
              onClick={() => toggleMobileDropdown('regulatory')}
            >
              Regulatory Operations
              <ChevronDown size={18} className={`transform transition-transform ${activeMobileDropdown === 'regulatory' ? 'rotate-180 text-blue-600' : ''}`} />
            </button>
            <div className={`overflow-hidden transition-all duration-300 bg-gray-50 ${activeMobileDropdown === 'regulatory' ? 'max-h-96' : 'max-h-0'}`}>
              <ul className="flex flex-col py-2 px-8 text-sm text-gray-600 space-y-3">
                <li><a href="#" className="hover:text-blue-600">CE Mark Approval</a></li>
                <li><a href="#" className="hover:text-blue-600">EU MDR/IVDR Documentation</a></li>
                <li><a href="#" className="hover:text-blue-600">FDA 510(k) Application</a></li>
                <li><a href="#" className="hover:text-blue-600">US Agent for Foreign Establishments</a></li>
                <li><a href="#" className="hover:text-blue-600">New Drug Application (NDA)</a></li>
              </ul>
            </div>
          </div>

          {/* Accordion: AI-Enabled Regulatory */}
          <div className="border-b border-gray-50">
            <button 
              className="w-full px-6 py-3 flex justify-between items-center text-gray-800 font-semibold hover:text-blue-600"
              onClick={() => toggleMobileDropdown('ai')}
            >
              AI-Enabled Regulatory
              <ChevronDown size={18} className={`transform transition-transform ${activeMobileDropdown === 'ai' ? 'rotate-180 text-blue-600' : ''}`} />
            </button>
            <div className={`overflow-hidden transition-all duration-300 bg-gray-50 ${activeMobileDropdown === 'ai' ? 'max-h-96' : 'max-h-0'}`}>
              <ul className="flex flex-col py-2 px-8 text-sm text-gray-600 space-y-3">
                <li><a href="#" className="hover:text-blue-600">AI SaMD Regulatory Pathway</a></li>
                <li><a href="#" className="hover:text-blue-600">AI FDA Readiness & Risk Audit</a></li>
                <li><a href="#" className="hover:text-blue-600">PCCP Authoring</a></li>
              </ul>
            </div>
          </div>

          <Link to="/media" className="px-6 py-3 text-gray-800 font-semibold hover:text-blue-600 border-b border-gray-50" onClick={() => setIsMobileMenuOpen(false)}>
            Media
          </Link>
          <Link to="/software" className="px-6 py-3 text-gray-800 font-semibold hover:text-blue-600 border-b border-gray-50" onClick={() => setIsMobileMenuOpen(false)}>
            Software
          </Link>
        </div>
        
        {/* Mobile Sidebar Footer Info */}
        <div className="mt-auto p-6 bg-gray-50">
           <p className="text-sm font-bold text-gray-800 mb-2">Need help?</p>
           <div className="flex items-center text-blue-600 text-sm mb-2">
             <Phone size={16} className="mr-2" /> (678) 385-6106
           </div>
           <div className="flex items-center text-blue-600 text-sm">
             <Mail size={16} className="mr-2" /> info@eemedicals.com
           </div>
        </div>

      </div>
    </>
  );
};