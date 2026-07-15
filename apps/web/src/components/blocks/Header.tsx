import React, { useState } from "react";
import { Search, Menu, X } from "lucide-react";
import { useNavigate, useLocation } from "react-router";
import image5 from "../assets/image5.png";

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
        { label: 'Gallery', path: '/gallery', action: navigateToGallery },
        { label: 'ABK TV', path: '#', action: () => {} },
    ];
    
    return (
        <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-primary/70 border-b border-white/10 shadow-xl transition-all duration-300">
            <div className="flex items-center justify-between container mx-auto py-3 px-4">
                <div onClick={navigateToHome} className="cursor-pointer">
                    <img src={image5} alt="ABK" className="h-10 md:h-14 hover:scale-105 transition-transform"/>
                </div>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center space-x-2 p-1.5 bg-black/20 border border-white/5 rounded-full backdrop-blur-sm text-sm">
                    {navItems.map(item => (
                        <button 
                            key={item.label}
                            onClick={item.action}
                            className={`px-4 py-1.5 rounded-full font-medium transition-all duration-300 ${
                                currentPage === item.path 
                                    ? 'bg-white/15 text-white shadow-sm' 
                                    : 'text-white/70 hover:bg-white/10 hover:text-white'
                            }`}
                        >
                            {item.label}
                        </button>
                    ))}
                </div>

                <div className="flex items-center space-x-3">
                    <button 
                        onClick={navigateToRegister}
                        className={`hidden md:block cursor-pointer font-bold px-6 py-2.5 rounded-full ${
                            currentPage === '/register' 
                                ? 'btn-glass' 
                                : 'bg-white/10 text-white hover:btn-glass border border-white/10'
                        }`}
                    >
                        Register
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
                <div className="md:hidden absolute top-full left-0 right-0 bg-primary/95 backdrop-blur-xl border-b border-white/10 p-4 flex flex-col space-y-3 shadow-2xl">
                    {navItems.map(item => (
                        <button 
                            key={item.label}
                            onClick={item.action}
                            className={`p-3 rounded-lg text-left font-medium ${
                                currentPage === item.path ? 'bg-white/10 text-white' : 'text-white/70'
                            }`}
                        >
                            {item.label}
                        </button>
                    ))}
                    <button 
                        onClick={navigateToRegister}
                        className="p-3 rounded-lg btn-glass font-bold mt-2"
                    >
                        Register
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
