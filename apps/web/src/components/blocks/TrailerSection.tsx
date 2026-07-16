import React, { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";

export default function TrailerSection() {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isMuted, setIsMuted] = useState(true);

    useEffect(() => {
        // IntersectionObserver to handle auto-play on scroll
        const observer = new IntersectionObserver(
            (entries) => {
                const [entry] = entries;
                if (entry.isIntersecting) {
                    // Use catch to prevent unhandled promise rejections if autoplay is blocked
                    videoRef.current?.play().catch(console.error);
                } else {
                    videoRef.current?.pause();
                }
            },
            { threshold: 0.3 } // Triggers when 30% of the video is visible
        );

        if (videoRef.current) {
            observer.observe(videoRef.current);
        }

        return () => observer.disconnect();
    }, []);

    const toggleMute = () => {
        if (videoRef.current) {
            videoRef.current.muted = !videoRef.current.muted;
            setIsMuted(videoRef.current.muted);
        }
    };

    return (
        <section className="h-full py-8 md:py-16">
            <div className="relative container mx-auto w-full rounded-3xl overflow-hidden liquid-glass md:p-4 chromatic-edge">
                <div className="aspect-video bg-black rounded-2xl flex flex-col items-center justify-center relative group overflow-hidden">
                    
                    {/* The Video Element - chunked streaming via preload="metadata" */}
                    <video 
                        ref={videoRef}
                        src="https://pub-5f67caa8563f429a9f86a1fe1513d9f6.r2.dev/Video/downloadgram.org_AQO6CQNj_gDI87f2H6JeHHeTXrQbAY1TDoZ9rJ_tMbFWrXDWe4O0OFT8tNMiyP2O2qeB2QGPxmb3DwpfFWd65Jycw4kVsUVJHJEor78.mp4"
                        preload="metadata"
                        muted={isMuted}
                        loop
                        playsInline
                        className="absolute inset-0 w-full h-full object-cover z-0"
                    />

                    {/* Gradient Overlay for better contrast on text/buttons */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent z-10 pointer-events-none"></div>

                    {/* Mute Toggle Button */}
                    <button 
                        onClick={toggleMute}
                        className="absolute bottom-4 right-4 md:bottom-8 md:right-8 z-20 w-12 h-12 md:w-16 md:h-16 rounded-full liquid-glass flex items-center justify-center border border-white/20 hover:scale-110 hover:bg-white/10 transition-all cursor-pointer backdrop-blur-md"
                        title={isMuted ? "Unmute Video" : "Mute Video"}
                    >
                        {isMuted ? (
                            <VolumeX className="w-6 h-6 md:w-8 md:h-8 text-white" />
                        ) : (
                            <Volume2 className="w-6 h-6 md:w-8 md:h-8 text-white" />
                        )}
                    </button>
                    
                    {/* Trailer Title Overlay */}
                    <div className="relative z-10 text-center pointer-events-none mt-auto pb-8 md:pb-12">
                        <h2 className="text-4xl md:text-7xl font-black tracking-widest text-white/90 drop-shadow-[0_0_15px_rgba(0,0,0,0.8)]">
                            TRAILER 25
                        </h2>
                    </div>
                </div>
            </div>
        </section>
    );
}
