import React from "react";

export default function MasonryGridSection() {
    const images = [
        { src: "/assets/mascot.png", span: "md:col-span-1 md:row-span-2" },
        { src: "/assets/teaser.png", span: "md:col-span-2 md:row-span-1" },
        { src: "/assets/monogram.webp", span: "md:col-span-1 md:row-span-1" },
        { src: "/assets/lockUp.png", span: "md:col-span-1 md:row-span-2" },
        { src: "/assets/bg.jpeg", span: "md:col-span-2 md:row-span-1" },
        { src: "/assets/mascot.png", span: "md:col-span-1 md:row-span-1" },
        { src: "/assets/bg.jpeg", span: "md:col-span-2 md:row-span-1" },
        { src: "/assets/monogram.webp", span: "md:col-span-1 md:row-span-1" },
        { src: "/assets/bg.jpeg", span: "md:col-span-2 md:row-span-1" },
        { src: "/assets/mascot.png", span: "md:col-span-1 md:row-span-1" },
    ];

    return (
        <section className="py-8 md:py-16">
            <div className="w-full">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 auto-rows-[200px]">
                    {images.map((img, index) => (
                        <div
                            key={index}
                            className={`relative group overflow-hidden rounded-2xl liquid-glass chromatic-edge border border-white/10 ${img.span}`}
                        >
                            <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                            <img
                                src={img.src}
                                alt={`Gallery image ${index + 1}`}
                                className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
