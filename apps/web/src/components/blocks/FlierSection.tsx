import React from "react";
import flier from "../assets/flier.jpg";

export default function FlierSection() {
    return (
        <div id="flier-section" className="w-full max-w-5xl mx-auto px-4 my-16">
            <div className="relative rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/10 group">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10 opacity-60"></div>
                <img 
                    src={flier} 
                    alt="ABK Event Flier" 
                    className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105"
                />
            </div>
        </div>
    );
}
