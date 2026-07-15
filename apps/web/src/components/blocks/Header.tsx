import React, { useState } from "react";
import { Search, Menu, X } from "lucide-react";
import { useNavigate, useLocation } from "react-router";

export default function Header() {
    const navigate = useNavigate();
    const location = useLocation();

    const [showSearch, setShowSearch] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const navigateToHome = () => { navigate('/'); setIsMobileMenuOpen(false); };
    const navigateToGallery = () => { navigate('/gallery'); setIsMobileMenuOpen(false); };
    const navigateToRegister = () => { navigate('/register'); setIsMobileMenuOpen(false); };

    const handleSearchSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Implement global search logic or redirect to a search page
        console.log("Searching for:", searchQuery);
        setShowSearch(false);
        setSearchQuery('');
    };

    const currentPage = location.pathname;

    const navItems = [
        { label: 'Home', path: '/', action: navigateToHome },
        { label: 'About', path: '#', action: () => { } },
        { label: 'Merch', path: '#', action: () => { } },
        { label: 'FAQs', path: '#', action: () => { } },
    ];

    return (
        <header className="fixed top-0 left-0 right-0 z-50 liquid-glass border-b border-white/10 shadow-xl transition-all duration-300">
            <div className="flex items-center justify-between container mx-auto py-4 px-4">
                <div onClick={navigateToHome} className="cursor-pointer">
                    <img src="/assets/monogram.webp" alt="ABK" className="h-16 md:h-20 hover:scale-105 transition-transform" />
                </div>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8 text-lg">
                    {navItems.map(item => (
                        <button
                            key={item.label}
                            onClick={item.action}
                            className={`px-4 py-1.5 font-medium ${currentPage === item.path
                                ? 'text-white border-b-2 border-accent shadow-sm'
                                : 'text-white/70 hover:border-b-2 hover:border-white/10 hover:cursor-pointer'
                                }`}
                        >
                            {item.label}
                        </button>
                    ))}
                </div>

                <div className="flex items-center space-x-3">
                    <button
                        onClick={navigateToRegister}
                        className="cursor-pointer font-bold px-6 py-2.5 text-xl"
                    >
                        REGISTER
                    </button>

                    <button
                        onClick={() => setShowSearch(!showSearch)}
                        className="p-2 rounded-full bg-white/5 hover:bg-white/15 text-white/80 hover:text-white transition-colors border border-white/5"
                    >
                        <Search className="w-5 h-5 md:w-6 md:h-6" />
                    </button>

                    {/* Mobile Menu Toggle */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="md:hidden p-2 rounded-full bg-white/5 text-white/80 hover:text-white"
                    >
                        {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            {isMobileMenuOpen && (
                <div className="md:hidden absolute top-full left-0 right-0 liquid-glass border-b border-white/10 p-8 flex flex-col items-center space-y-6 shadow-2xl">
                    <div className="flex flex-col items-center space-y-4 w-full">
                        {navItems.map(item => (
                            <button
                                key={item.label}
                                onClick={item.action}
                                className={`px-4 py-2 font-medium text-xl transition-all duration-300 border-b-2 ${currentPage === item.path
                                    ? 'text-white border-accent shadow-sm'
                                    : 'text-white/70 border-transparent hover:border-white/10 hover:cursor-pointer'
                                    }`}
                            >
                                {item.label}
                            </button>
                        ))}
                    </div>
                    <button
                        onClick={navigateToRegister}
                        className="w-full max-w-xs py-3 rounded-full btn-glass font-bold text-lg hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 mt-2"
                    >
                        REGISTER
                    </button>
                </div>
            )}

            {/* Search Dropdown */}
            {showSearch && (
                <div className="absolute top-full right-4 md:right-10 mt-2 w-72 md:w-96 bg-primary/90 backdrop-blur-xl border border-white/10 rounded-2xl p-4 shadow-2xl z-50 animate-in fade-in slide-in-from-top-4">
                    <form onSubmit={handleSearchSubmit}>
                        <div className="relative">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-white/50" />
                            <input
                                type="text"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                placeholder="Search..."
                                autoFocus
                                className="w-full bg-white/5 border border-white/10 text-white placeholder-white/50 py-3 pl-10 pr-4 rounded-xl focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all"
                            />
                        </div>
                    </form>
                </div>
            )}
        </header>
    );
}
