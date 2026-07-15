import React from "react";
import GlassyContainer from "../ui/GlassyContainer";
import spons1 from "../assets/spons1.png";
import spons2 from "../assets/spons2.png";
import spons3 from "../assets/spons3.jpg";
import spons4 from "../assets/spons4.png";

export default function PartnersSection() {
    const sponsors = [spons1, spons2, spons3, spons4];
    
    return (
        <GlassyContainer id="partners-section" className="my-16">
            <div className="flex flex-col items-center justify-center space-y-10">
                <h2 className="text-3xl md:text-4xl font-bold text-white tracking-widest uppercase opacity-80 border-b border-white/20 pb-4">
                    Partners
                </h2>
                <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12">
                    {sponsors.map((spons, i) => (
                        <div 
                            key={i} 
                            className="group h-24 w-36 md:h-32 md:w-48 liquid-glass chromatic-edge rounded-2xl overflow-hidden flex items-center justify-center p-4 transition-all duration-500 hover:scale-105"
                        >
                            <img 
                                src={spons} 
                                alt={`Sponsor ${i + 1}`} 
                                className="max-h-full max-w-full object-contain filter grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </GlassyContainer>
    );
}
