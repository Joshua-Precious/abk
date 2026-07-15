import React from "react";
import Header from "../components/blocks/Header";
import HeroSection from "../components/blocks/HeroSection";
import LogoSection from "../components/blocks/LogoSection";
import PartnersSection from "../components/blocks/PartnersSection";
import SocialMediaFooter from "../components/blocks/SocialMediaFooter";
import RegistrationForm from "../components/blocks/RegistrationForm";

export default function Register() {
    return (
        <div className="flex flex-col min-h-screen text-neutral-content">
            <Header />

            <main className="pt-20 md:pt-24 flex-grow relative">
                {/* Background glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/10 rounded-full blur-[120px] pointer-events-none z-0"></div>

                <HeroSection />
                
                <div className="relative z-10 space-y-12 pb-12">
                    <LogoSection />
                    
                    <div id="register-section">
                        <RegistrationForm />
                    </div>
                    
                    <PartnersSection />
                </div>
            </main>

            <SocialMediaFooter />
        </div>
    );
}
