import React from "react";
import { Play } from "lucide-react";

export default function TrailerSection() {
    return (
        <section className="py-8 md:py-16">
            <div className="relative w-full rounded-3xl overflow-hidden liquid-glass border border-white/10 md:p-4 chromatic-edge">
                <div className="aspect-video bg-black/60 rounded-2xl flex flex-col items-center justify-center relative group cursor-pointer overflow-hidden">
                    {/* Placeholder Background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/80 to-black z-0"></div>
                    <div className="absolute inset-0 opacity-20 bg-[url('/grunge.jpg')] mix-blend-overlay z-0"></div>

                    {/* Content */}
                    <div className="relative z-10 text-center">
                        <h2 className="text-4xl md:text-7xl font-black tracking-widest text-white/90 drop-shadow-2xl mb-6">
                            TRAILER 25
                        </h2>

                        <div className="w-20 h-20 md:w-28 md:h-28 rounded-full liquid-glass flex items-center justify-center group-hover:scale-110 transition-transform duration-500 mx-auto border border-white/20">
                            <Play className="w-10 h-10 md:w-14 md:h-14 text-white ml-2" />
                        </div>

                        <p className="mt-6 text-lg md:text-2xl font-bold tracking-widest text-white/70">VIDEO</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
