import React from "react";

export const Hero: React.FC = () => {
    return (
        <section className="relative w-full h-[60vh] bg-gray-800 flex flex-col items-center justify-center text-center p-6">
            {/* Background Video Placeholder */}
            <div className="absolute inset-0 bg-gray-900 opacity-60 z-0">
                <div className="w-full h-full flex items-center justify-center text-gray-500 text-2xl font-bold">[BACKGROUND VIDEO PLACEHOLDER]</div>
            </div>

            <div className="z-10 text-white max-w-3xl">
                <p className="text-blue-400 font-semibold tracking-wider uppercase mb-4">Services</p>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">We position our clients at the forefront of their field!</h1>
            </div>
        </section>
    );
};
