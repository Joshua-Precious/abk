import React from "react";
import GlassyContainer from "../ui/GlassyContainer";
import GlassyCard from "../ui/GlassyCard";

interface EventInfoSectionProps {
    activeTab: string;
    setActiveTab: (tab: string) => void;
}

export default function EventInfoSection({ activeTab, setActiveTab }: EventInfoSectionProps) {
    const tabs = ['Info', 'Auditions', 'Events'];

    return (
        <GlassyContainer id="tabs-section" className="mt-8">
            <div className="text-center space-y-4 mb-10">
                <h1 className="font-bold text-3xl md:text-5xl text-white drop-shadow-md">TBD</h1>
                <p className="text-white/70 text-lg">First Love Centre, East Legon, Accra, Ghana</p>
            </div>

            <GlassyCard className="max-w-5xl mx-auto p-6 md:p-10">
                {/* Tabs Header */}
                <div className="flex space-x-2 mb-8 bg-black/40 rounded-xl p-2 backdrop-blur-md border border-white/5">
                    {tabs.map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`flex-1 py-3 px-4 rounded-lg transition-all duration-300 font-semibold text-sm md:text-base ${
                                activeTab === tab
                                    ? 'btn-glass'
                                    : 'text-white/60 hover:text-white hover:bg-white/10'
                            }`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>

                {/* Tabs Content */}
                <div className="text-white/90 leading-relaxed min-h-[300px]">
                    {activeTab === 'Info' && (
                        <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4">
                            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">About Accra Boogie King</h2>
                            <div className="space-y-4 text-base md:text-lg">
                                <h3 className="text-xl font-semibold text-accent">What is ABK?</h3>
                                <p>Are you ready to own the stage? Accra Boogie King, Ghana's biggest team dance competition, returns for its explosive 2026 season!</p>
                                <p>This all-styles dance showdown brings together Ghana's top crews to battle it out in a high-energy contest celebrating rhythm, creativity, and unity. From afro to hip-hop, Amapiano to gospel street — teams will need to impress the crowd and judges across three dynamic rounds.</p>
                                <p>Accra Boogie King 2026 will spotlight dance communities from across the nation, building momentum through city-wide qualifiers, workshops, and activations — all leading to the grand finale this October in Accra. Who will be crowned Ghana's Boogie Kings this year? The stage is yours!</p>
                            </div>
                        </div>
                    )}

                    {activeTab === 'Auditions' && (
                        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4">
                            <div className="space-y-4 text-base md:text-lg">
                                <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Audition Information</h2>
                                <h3 className="text-xl font-semibold text-accent">Audition Process</h3>
                                <p>Think You've Got What It Takes? Step into the Spotlight at the ABK 2026 Open Auditions! Join us at one of the ABK Open Audition Sessions for your chance to earn a spot on the biggest dance stage in Ghana.</p>
                                <p>Our audition panels feature top dance professionals who will be watching closely for charisma, rhythm, musicality, creativity, and overall movement. All dance styles are welcome — from Afrobeats to Hip-Hop, Freestyle, and more. Note: This is not a breaking competition. Overemphasis on breaking may lead to disqualification.</p>
                                <p>Applicants must be 16 years or older and based in Ghana to be eligible. The ABK 2026 Auditions are your first step toward dancing live at the 7th Edition of Accra Boogie King this October — where thousands of fans and dance lovers gather to witness Ghana's finest. Spots are limited, so register early to secure your place. Let your dance speak — and we'll see you on the floor!</p>
                            </div>

                            <div className="bg-black/30 border border-white/10 p-6 rounded-2xl">
                                <h3 className="text-xl font-semibold text-accent mb-4 text-center">Important Dates</h3>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                                    <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                                        <p className="font-semibold text-white mb-1">Registration Opens</p>
                                        <p className="text-accent font-bold">TBD</p>
                                    </div>
                                    <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                                        <p className="font-semibold text-white mb-1">Registration Closes</p>
                                        <p className="text-accent font-bold">TBD</p>
                                    </div>
                                    <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                                        <p className="font-semibold text-white mb-1">Live Auditions</p>
                                        <p className="text-accent font-bold">TBD</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {activeTab === 'Events' && (
                        <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4">
                            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Rules & Guidelines</h2>
                            <ul className="space-y-3 text-base md:text-lg list-disc list-inside marker:text-accent">
                                <li><span className="font-semibold text-white">Groups only</span> — No solo entries allowed</li>
                                <li><span className="font-semibold text-white">Group size</span> — Minimum of 3 members</li>
                                <li><span className="font-semibold text-white">Minimum Performance on stage</span> — Strictly 12 people at a time.</li>
                                <li><span className="font-semibold text-white">Music Policy</span> — Instrumentals and gospel music only. No explicit lyrics or secular tracks.</li>
                                <li><span className="font-semibold text-white">Safety First</span> — No flips, aerial moves, dangerous stunts, naked flames, or fireworks on stage.</li>
                                <li><span className="font-semibold text-white">Dress Code</span> — No nudity, revealing, or sensual attire. Costumes must be modest and respectful.</li>
                                <li><span className="font-semibold text-white">Respect</span> — Show respect to all participants, event staff, and audience members at all times.</li>
                                <li><span className="font-semibold text-white">Judging</span> — No arguing with judges; let your moves do the talking. Judges' decisions are final.</li>
                                <li><span className="font-semibold text-white">Time Limit</span> — All performances must stay within the allocated time limit: 3 minutes.</li>
                                <li><span className="font-semibold text-white">Stage Readiness</span> — Be ready when called; delays may result in disqualification.</li>
                                <li><span className="font-semibold text-white">Props</span> — All props must be pre-approved by organizers and safe for stage use.</li>
                                <li><span className="font-semibold text-white">Sportsmanship</span> — Any form of misconduct, aggression, or disrespect will lead to disqualification.</li>
                            </ul>
                        </div>
                    )}
                </div>
            </GlassyCard>
        </GlassyContainer>
    );
}
