import React from "react";
import { ShoppingBag, FileSignature, BookOpen } from "lucide-react";
import { useNavigate } from "react-router";

export default function ActionButtonsSection() {
    const navigate = useNavigate();

    const buttons = [
        { label: "MERCH", icon: <ShoppingBag className="w-8 h-8 md:w-12 md:h-12 mb-4" />, action: () => {} },
        { label: "REGISTER", icon: <FileSignature className="w-8 h-8 md:w-12 md:h-12 mb-4" />, action: () => navigate('/register') },
        { label: "RULES", icon: <BookOpen className="w-8 h-8 md:w-12 md:h-12 mb-4" />, action: () => {} },
    ];

    return (
        <section className="container mx-auto px-4 py-8 md:py-16">
            <div className="max-w-5xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10">
                    {buttons.map((btn, index) => (
                        <button 
                            key={index}
                            onClick={btn.action}
                            className="group liquid-glass chromatic-edge relative rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-2"
                        >
                            <div className="bg-black/60 backdrop-blur-md p-8 md:p-12 flex flex-col items-center justify-center border border-white/5 h-full transition-colors group-hover:bg-black/40">
                                <div className="text-white/80 group-hover:text-white transition-colors">
                                    {btn.icon}
                                </div>
                                <h3 className="text-2xl md:text-3xl font-black tracking-widest text-white mt-2">
                                    {btn.label}
                                </h3>
                            </div>
                        </button>
                    ))}
                </div>
            </div>
        </section>
    );
}
