import React from "react";
import { Phone, Mail, MapPin, Search, ChevronDown, Clock, Facebook, Twitter, Linkedin, Youtube } from "lucide-react";

export const Header: React.FC = () => {
    return (
        <header className="w-full flex flex-col z-50 bg-white shadow-sm sticky top-0">
            {/* Top Bar */}
            <div className="bg-gray-100 text-sm py-2 px-4 md:px-8 flex justify-between items-center hidden md:flex">
                <div className="flex items-center space-x-2 text-gray-600">
                    <Clock size={14} />
                    <span>Mon - Fri: 9:00 am EST - 06:00 pm EST</span>
                </div>
                <div className="flex space-x-4 text-gray-500">
                    <a href="#" className="hover:text-blue-600">
                        <Facebook size={16} />
                    </a>
                    <a href="#" className="hover:text-blue-400">
                        <Twitter size={16} />
                    </a>
                    <a href="#" className="hover:text-blue-700">
                        <Linkedin size={16} />
                    </a>
                    <a href="#" className="hover:text-red-600">
                        <Youtube size={16} />
                    </a>
                </div>
            </div>

            {/* Middle Contact Bar */}
            <div className="py-4 px-4 md:px-8 flex justify-between items-center border-b">
                {/* Image Placeholder: Logo */}
                <div className="w-48 h-12 bg-gray-200 flex items-center justify-center text-gray-500 font-bold">[LOGO PLACEHOLDER]</div>

                <div className="hidden lg:flex space-x-8">
                    <div className="flex items-center space-x-3">
                        <Phone className="text-blue-500" />
                        <div>
                            <p className="text-sm font-semibold">Call Us: (678) 385-6106</p>
                            <p className="text-xs text-gray-500">(Mon - Fri)</p>
                        </div>
                    </div>
                    <div className="flex items-center space-x-3">
                        <Mail className="text-blue-500" />
                        <div>
                            <p className="text-sm font-semibold">Mail us for help:</p>
                            <p className="text-xs text-blue-600">info@eemedicals.com</p>
                        </div>
                    </div>
                    <div className="flex items-center space-x-3">
                        <MapPin className="text-blue-500" />
                        <div>
                            <p className="text-sm font-semibold">Enquiry Form:</p>
                            <p className="text-xs text-blue-600">Share Your Project</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Navigation */}
            <nav className="py-4 px-4 md:px-8 flex justify-between items-center bg-blue-900 text-white">
                <ul className="flex space-x-6 text-sm font-medium">
                    <li className="hover:text-blue-300 cursor-pointer text-blue-300">Home</li>
                    <li className="hover:text-blue-300 cursor-pointer">About Us</li>
                    <li className="hover:text-blue-300 cursor-pointer flex items-center">
                        Quality & Compliance <ChevronDown size={16} className="ml-1" />
                    </li>
                    <li className="hover:text-blue-300 cursor-pointer flex items-center">
                        Regulatory Operations <ChevronDown size={16} className="ml-1" />
                    </li>
                    <li className="hover:text-blue-300 cursor-pointer flex items-center">
                        AI-Enabled Regulatory <ChevronDown size={16} className="ml-1" />
                    </li>
                    <li className="hover:text-blue-300 cursor-pointer">Media</li>
                    <li className="hover:text-blue-300 cursor-pointer">Software</li>
                </ul>
                <Search className="cursor-pointer hover:text-blue-300" size={20} />
            </nav>
        </header>
    );
};
