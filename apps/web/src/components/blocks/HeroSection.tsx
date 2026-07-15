import React from 'react';
import image1 from "../assets/image1.jpg";

export default function HeroSection() {
    return (
        <div className="relative h-[60vh] md:h-[70vh] w-full overflow-hidden flex items-center justify-center">
            {/* Background Image with Gradient Overlay */}
            <div 
                className="absolute inset-0 z-0"
                style={{ 
                    background: `linear-gradient(to bottom, rgba(0,6,14,0.3) 0%, #00060e 100%), url(${image1})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundAttachment: 'fixed'
                }}
            />
            
            {/* Content Glass Container */}
            <div className="relative z-10 w-full max-w-5xl mx-auto px-4 mt-16 md:mt-0">
                <div className="liquid-glass chromatic-edge rounded-2xl p-8 md:p-12 shadow-2xl text-center md:text-left transform transition-all duration-700 hover:scale-[1.02]">
                    <h1 className="text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-white/70 mb-6 drop-shadow-sm">
                        Accra Boogie King
                    </h1>
                    <div className="text-white/80 max-w-2xl text-base md:text-lg leading-relaxed">
                        <p className="mb-2">Ghana's ultimate team dance showdance, Accra Boogie King, returns for its 2026 edition — bringing together the best crews to connect, compete, and celebrate Ghana's vibrant dance culture.</p>
                        <p className="font-bold text-accent text-xl">Stay tuned for audition updates below!</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
