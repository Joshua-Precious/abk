import React from "react";

export default function TimelineSection() {
    return (
        <section className="container mx-auto px-4 py-8 md:py-16">
            <div className="max-w-5xl mx-auto text-center space-y-12">
                <div className="liquid-glass border border-white/10 rounded-2xl p-6 md:p-10 inline-block px-12 md:px-24 chromatic-edge">
                    <h2 className="text-2xl md:text-4xl font-black tracking-[0.3em] text-white uppercase line-through decoration-white/30 decoration-2 md:decoration-4">
                        UPCOMING EVENT
                    </h2>
                </div>
                
                <div className="liquid-glass border border-white/10 rounded-2xl p-6 md:p-10 inline-block px-12 md:px-24 chromatic-edge">
                    <h2 className="text-2xl md:text-4xl font-black tracking-[0.3em] text-white uppercase">
                        TIMELINE OF ABK 26
                    </h2>
                </div>
            </div>
        </section>
    );
}
