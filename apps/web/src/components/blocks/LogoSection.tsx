import React from "react";
import image4 from "../assets/image4.png";

export default function LogoSection() {
    return (
        <div className="flex items-center justify-center py-12 animate-in zoom-in duration-700">
            <div className="relative">
                {/* Glow behind the logo */}
                <div className="absolute inset-0 bg-accent/20 blur-[50px] rounded-full scale-150"></div>
                <img src={image4} alt="ABK" className="relative z-10 h-64 md:h-80 drop-shadow-2xl hover:scale-105 transition-transform duration-500"/>
            </div>
        </div>
    );
}
