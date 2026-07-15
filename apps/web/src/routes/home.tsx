import React, { useState } from "react";
import Header from "../components/blocks/Header";
import HeroSection from "../components/blocks/HeroSection";
import LogoSection from "../components/blocks/LogoSection";
import EventInfoSection from "../components/blocks/EventInfoSection";
import PartnersSection from "../components/blocks/PartnersSection";
import SocialMediaFooter from "../components/blocks/SocialMediaFooter";
import FlierSection from "../components/blocks/FlierSection";

export default function Home() {
    const [activeTab, setActiveTab] = useState("Info");

    return (
        <div className="flex flex-col min-h-screen bg-primary text-neutral-content selection:bg-accent selection:text-white">
            <Header />

            {/* Main Content */}
            <main className="pt-20 md:pt-24 flex-grow">
                <HeroSection />
                
                <div className="relative">
                    {/* Background decorative elements */}
                    <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
                        <div className="absolute top-1/4 -left-64 w-96 h-96 bg-accent/10 rounded-full blur-[100px]"></div>
                        <div className="absolute bottom-1/4 -right-64 w-96 h-96 bg-secondary/10 rounded-full blur-[100px]"></div>
                    </div>
                    
                    <div className="relative z-10 space-y-12 pb-12">
                        <LogoSection />
                        
                        <div id="info-section">
                            <EventInfoSection 
                                activeTab={activeTab} 
                                setActiveTab={setActiveTab} 
                            />
                        </div>
                        
                        <PartnersSection />
                        <FlierSection />
                    </div>
                </div>
            </main>

            <SocialMediaFooter />
        </div>
    );
}
