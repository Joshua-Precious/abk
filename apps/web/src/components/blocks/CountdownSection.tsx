import React, { useState, useEffect } from "react";

export default function CountdownSection() {
    // Target date: Dec 31, 2026
    const targetDate = new Date("2026-12-31T23:59:59").getTime();
    
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    });

    useEffect(() => {
        const timer = setInterval(() => {
            const now = new Date().getTime();
            const difference = targetDate - now;

            if (difference > 0) {
                setTimeLeft({
                    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                    minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
                    seconds: Math.floor((difference % (1000 * 60)) / 1000)
                });
            } else {
                clearInterval(timer);
            }
        }, 1000);

        return () => clearInterval(timer);
    }, [targetDate]);

    const timeBlocks = [
        { label: "DAYS", value: timeLeft.days },
        { label: "HOURS", value: timeLeft.hours },
        { label: "MINUTES", value: timeLeft.minutes },
        { label: "SECONDS", value: timeLeft.seconds }
    ];

    return (
        <section className="container mx-auto px-4 py-8 md:py-16">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-3xl md:text-5xl font-bold tracking-[0.2em] mb-12 text-white drop-shadow-lg uppercase">
                    COUNT DOWN TO EVENT
                </h2>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
                    {timeBlocks.map((block, index) => (
                        <div key={index} className="liquid-glass chromatic-edge p-1 rounded-2xl">
                            <div className="bg-black/40 backdrop-blur-md rounded-xl p-6 md:p-10 flex flex-col items-center justify-center border border-white/5 h-full">
                                <span className="text-5xl md:text-7xl font-black text-white tracking-tighter drop-shadow-md">
                                    {String(block.value).padStart(2, '0')}
                                </span>
                                <span className="text-xs md:text-sm font-bold tracking-widest text-white/60 mt-4 uppercase">
                                    {block.label}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
