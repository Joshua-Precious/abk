import React from "react";

export default function SocialMediaFooter() {
    return (
        <footer className="relative ">
            <div className="flex flex-col">
                <div className="liquid-glass p-8 md:p-12 relative">
                    {/* Chromatic Top Border */}
                    <div className="absolute top-0 left-0 right-0 h-[2px] chromatic-bg opacity-70"></div>
                    <div className="flex flex-col md:flex-row items-center justify-between gap-10 border-b border-white/10 pb-10">
                        {/* Logo Left */}
                        <div className="w-full md:w-1/3 flex justify-center md:justify-start">
                            <div className="w-32 h-32 md:w-40 md:h-40 flex items-center justify-center">
                                <img src="/assets/lockUp.png" alt="Logo" className="max-w-full max-h-full object-contain filter drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]" />
                            </div>
                        </div>

                        {/* Follow Us Center */}
                        <div className="w-full md:w-1/3 flex flex-col items-center justify-center text-center">
                            <h3 className="text-xl md:text-2xl font-bold tracking-widest text-white uppercase mb-6">
                                FOLLOW US
                            </h3>
                            <div className="flex gap-4">
                                <a href="https://www.instagram.com/accraboogieking" target="_blank" rel="noopener noreferrer" className="w-12 h-12 md:w-14 md:h-14 border border-white/20 rounded-lg flex items-center justify-center text-white/70 hover:text-white hover:bg-white/10 transition-colors">
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
                                </a>
                                <a href="https://youtube.com/@accraboogieking" target="_blank" rel="noopener noreferrer" className="w-12 h-12 md:w-14 md:h-14 border border-white/20 rounded-lg flex items-center justify-center text-white/70 hover:text-white hover:bg-white/10 transition-colors">
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" /></svg>
                                </a>
                            </div>
                        </div>

                        {/* Contact Us Right */}
                        <div className="w-full md:w-1/3 flex justify-center md:justify-end">
                            <h3 className="text-xl md:text-2xl font-bold tracking-widest text-white uppercase hover:text-accent cursor-pointer transition-colors">
                                CONTACT US
                            </h3>
                        </div>
                    </div>

                    {/* Copyright Bottom */}
                    <div className="text-center pt-8">
                        <p className="text-sm md:text-base font-bold tracking-widest text-white/50 uppercase">
                            &copy; {new Date().getFullYear()} ACCRA'S BOOGIE KING
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
