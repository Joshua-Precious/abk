import React, { useState } from "react";
import Header from "../components/blocks/Header";
import HeroSection from "../components/blocks/HeroSection";
import TrailerSection from "../components/blocks/TrailerSection";
import CountdownSection from "../components/blocks/CountdownSection";
import TimelineSection from "../components/blocks/TimelineSection";
import MasonryGridSection from "../components/blocks/MasonryGridSection";
import ActionButtonsSection from "../components/blocks/ActionButtonsSection";
import PartnersSection from "../components/blocks/PartnersSection";
import SocialMediaFooter from "../components/blocks/SocialMediaFooter";

export default function Home() {
    return (
        <div className="flex flex-col min-h-screen text-neutral-content">
            <Header />

            {/* Main Content */}
            <main className="pt-24 md:pt-28 flex-grow relative z-10">
                <HeroSection />
                <TrailerSection />
                <CountdownSection />
                <TimelineSection />
                <MasonryGridSection />
                <ActionButtonsSection />
                <PartnersSection />
            </main>

            <SocialMediaFooter />
        </div>
    );
}
