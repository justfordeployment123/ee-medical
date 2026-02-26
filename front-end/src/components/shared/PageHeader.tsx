import React from "react";
import { Link } from "react-router-dom";

interface PageHeaderProps {
    title: string;
    breadcrumb: string;
}

export const PageHeader: React.FC<PageHeaderProps> = ({ title, breadcrumb }) => {
    return (
        <div
            className="relative w-full py-24 md:py-32 bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center text-white"
            style={{ backgroundImage: `url('http://eemedicals.com/wp-content/uploads/2021/11/header-bg.jpg')` }}
        >
            {/* Dark Overlay for text readability */}
            <div className="absolute inset-0 bg-[#0a1e3f] opacity-70 z-0"></div>

            <div className="relative z-10 text-center px-4">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
                <div className="flex items-center justify-center space-x-2 text-sm md:text-base font-medium">
                    <Link to="/" className="hover:text-blue-400 transition-colors">
                        Home
                    </Link>
                    <span className="text-gray-400">/</span>
                    <span className="text-blue-400">{breadcrumb}</span>
                </div>
            </div>
        </div>
    );
};
