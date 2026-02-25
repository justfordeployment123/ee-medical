import React from "react";

export const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-900 text-gray-300 py-12 px-4 md:px-8">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                    {/* Image Placeholder: Accreditation Logos */}
                    <div className="w-full h-24 bg-gray-700 flex items-center justify-center text-gray-400 mb-4">[BBB / RAPS LOGO PLACEHOLDERS]</div>
                </div>
                <div>
                    <h3 className="text-white text-lg font-bold mb-4 border-b border-gray-700 pb-2">Connect with us</h3>
                    <p className="mb-2">
                        400 Galleria Pkwy Suite 1500,
                        <br />
                        Atlanta, GA 30339
                    </p>
                    <p className="font-bold text-white mt-4">Open Hours:</p>
                    <p>
                        Mon - Fri: 9 am - 6 pm (EST)
                        <br />
                        Sat, Sun: Closed
                    </p>
                </div>
                <div>
                    <h3 className="text-white text-lg font-bold mb-4 border-b border-gray-700 pb-2">Contact us</h3>
                    <p className="mb-2 text-blue-400">info@eemedicals.com</p>
                    <p className="mb-1">+1-678-815-9233</p>
                    <p className="mb-1">+1-678-385-6106</p>
                    <p className="mb-1">Fax: +1-678-336-8945</p>
                </div>
            </div>
            <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-gray-800 text-sm text-center">
                <p>© E & E Medicals and Consulting | Terms of Use | Privacy Policy</p>
            </div>
        </footer>
    );
};
