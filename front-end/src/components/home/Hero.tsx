import React from "react";

export const Hero: React.FC = () => {
    return (
        <section className="relative w-full min-h-[70vh] flex flex-col items-center justify-center text-center p-6 py-16">
            {/* Optional text header - uncomment if needed */}
            {/* <div className="z-10 text-white max-w-3xl mb-10">
                <p className="text-blue-400 font-semibold tracking-wider uppercase mb-4">Advancing Healthcare</p>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">Positioning clients at the forefront of their field</h1>
            </div> */}

            {/* Centered YouTube Video */}
            <div className="z-10 w-full max-w-5xl aspect-video relative overflow-hidden ">
                <iframe
                    className="absolute top-0 left-0 w-full h-full"
                    src="https://www.youtube.com/embed/kbdEERk_whw?si=uDSM2b3zH0SnodrS&autoplay=1&mute=1&rel=0"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                ></iframe>
            </div>
        </section>
    );
};
