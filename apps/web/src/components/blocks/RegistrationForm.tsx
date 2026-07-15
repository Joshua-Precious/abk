import React, { useState, useRef, useEffect } from "react";
import GlassyContainer from "../ui/GlassyContainer";
import GlassyCard from "../ui/GlassyCard";

export default function RegistrationForm() {
    // Form state
    const [formData, setFormData] = useState({
        teamName: '',
        numberOfPeople: '',
        ageRange: '',
        briefDescription: '',
        fullName: '',
        phoneNumber: '',
        email: '',
        city: ''
    });
    
    // Type assertion for indexing formData
    type FormDataKey = keyof typeof formData;
    
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitMessage, setSubmitMessage] = useState('');
    const [submitStatus, setSubmitStatus] = useState(''); // 'success' or 'error'
    
    // Use ref to track timeouts for cleanup
    const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
    
    // Cleanup timeout on unmount
    useEffect(() => {
        return () => {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
        };
    }, []);

    // Form handling functions
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };
    
    const validateForm = () => {
        const requiredFields: FormDataKey[] = ['teamName', 'numberOfPeople', 'ageRange', 'fullName', 'phoneNumber', 'email', 'city'];
        return requiredFields.every(field => formData[field].trim() !== '');
    };
    
    // Helper function to set message with auto-clear
    const setMessageWithTimeout = (message: string, status: string, duration: number) => {
        // Clear any existing timeout
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
        
        setSubmitMessage(message);
        setSubmitStatus(status);
        
        // Set new timeout
        timeoutRef.current = setTimeout(() => {
            setSubmitMessage('');
            setSubmitStatus('');
            timeoutRef.current = null;
        }, duration);
    };
    
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        
        if (!validateForm()) {
            setMessageWithTimeout('Please fill in all required fields', 'error', 5000);
            return;
        }
        
        setIsSubmitting(true);
        setSubmitMessage('');
        
        try {
            const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000';
            const response = await fetch(`${API_URL}/api/register`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            
            if (!response.ok) {
                throw new Error('Registration failed');
            }
            
            // Reset form
            setFormData({
                teamName: '',
                numberOfPeople: '',
                ageRange: '',
                briefDescription: '',
                fullName: '',
                phoneNumber: '',
                email: '',
                city: ''
            });
            
            setMessageWithTimeout('Registration submitted successfully!', 'success', 5000);
        } catch (error: any) {
            console.error('Registration error:', error);
            
            // Provide more specific error messages
            let errorMessage = 'Registration failed. Please try again.';
            
            if (error.message?.includes('network') || error.message?.includes('fetch')) {
                errorMessage = 'Network error. Please check your internet connection.';
            }
            
            setMessageWithTimeout(errorMessage, 'error', 8000);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <GlassyContainer id="register-section">
            <div className="text-center mb-10">
                <h1 className="font-bold text-4xl md:text-5xl text-white drop-shadow-md tracking-wider">REGISTER</h1>
                <p className="text-white/60 mt-3 text-lg">Join the ultimate dance showdown</p>
            </div>
            
            <GlassyCard className="max-w-5xl mx-auto p-6 md:p-12 relative overflow-hidden">
                {/* Submit message banner */}
                {submitMessage && (
                    <div className={`mb-8 p-4 rounded-xl text-center font-medium shadow-lg animate-in fade-in slide-in-from-top-4 ${
                        submitStatus === 'success' 
                            ? 'bg-green-500/20 text-green-300 border border-green-500/30 shadow-[0_0_20px_rgba(34,197,94,0.2)]' 
                            : 'bg-red-500/20 text-red-300 border border-red-500/30 shadow-[0_0_20px_rgba(239,68,68,0.2)]'
                    }`}>
                        {submitMessage}
                    </div>
                )}
                
                <form onSubmit={handleSubmit} className="relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 relative">
                        {/* Audition Details Section */}
                        <div className="space-y-6">
                            <h2 className="text-xl md:text-2xl font-semibold mb-8 text-accent border-b border-white/10 pb-4">Audition Details</h2>
                            
                            <div className="space-y-6">
                                <div className="group">
                                    <input 
                                        type="text" 
                                        name="teamName"
                                        value={formData.teamName}
                                        onChange={handleInputChange}
                                        placeholder="Team Name *" 
                                        required
                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 md:py-4 text-white placeholder-white/50 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all group-hover:bg-white/10 text-sm md:text-base shadow-inner"
                                    />
                                </div>
                                
                                <div className="group">
                                    <input 
                                        type="number" 
                                        name="numberOfPeople"
                                        value={formData.numberOfPeople}
                                        onChange={handleInputChange}
                                        placeholder="Number of people *" 
                                        required
                                        min="1"
                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 md:py-4 text-white placeholder-white/50 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all group-hover:bg-white/10 text-sm md:text-base shadow-inner"
                                    />
                                </div>
                                
                                <div className="group">
                                    <input 
                                        type="text" 
                                        name="ageRange"
                                        value={formData.ageRange}
                                        onChange={handleInputChange}
                                        placeholder="Age Range *" 
                                        required
                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 md:py-4 text-white placeholder-white/50 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all group-hover:bg-white/10 text-sm md:text-base shadow-inner"
                                    />
                                </div>
                                
                                <div className="group">
                                    <textarea 
                                        name="briefDescription"
                                        value={formData.briefDescription}
                                        onChange={handleInputChange}
                                        placeholder="Brief Description" 
                                        rows={3}
                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 md:py-4 text-white placeholder-white/50 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent resize-none transition-all group-hover:bg-white/10 text-sm md:text-base shadow-inner"
                                    ></textarea>
                                </div>
                            </div>
                        </div>

                        {/* Vertical Divider */}
                        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent transform -translate-x-1/2 hidden md:block"></div>

                        {/* Primary Contact Section */}
                        <div className="space-y-6">
                            <h2 className="text-xl md:text-2xl font-semibold mb-8 text-accent border-b border-white/10 pb-4">Primary Contact</h2>
                            
                            <div className="space-y-6">
                                <div className="group">
                                    <input 
                                        type="text" 
                                        name="fullName"
                                        value={formData.fullName}
                                        onChange={handleInputChange}
                                        placeholder="Full Name *" 
                                        required
                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 md:py-4 text-white placeholder-white/50 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all group-hover:bg-white/10 text-sm md:text-base shadow-inner"
                                    />
                                </div>
                                
                                <div className="group">
                                    <input 
                                        type="tel" 
                                        name="phoneNumber"
                                        value={formData.phoneNumber}
                                        onChange={handleInputChange}
                                        placeholder="Phone Number *" 
                                        required
                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 md:py-4 text-white placeholder-white/50 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all group-hover:bg-white/10 text-sm md:text-base shadow-inner"
                                    />
                                </div>
                                
                                <div className="group">
                                    <input 
                                        type="email" 
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        placeholder="Email *" 
                                        required
                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 md:py-4 text-white placeholder-white/50 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all group-hover:bg-white/10 text-sm md:text-base shadow-inner"
                                    />
                                </div>
                                
                                <div className="group">
                                    <input 
                                        type="text" 
                                        name="city"
                                        value={formData.city}
                                        onChange={handleInputChange}
                                        placeholder="City *" 
                                        required
                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 md:py-4 text-white placeholder-white/50 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all group-hover:bg-white/10 text-sm md:text-base shadow-inner"
                                    />
                                </div>
                                
                                <div className="pt-6">
                                    <button 
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full btn-glass font-bold py-4 rounded-xl transition-all duration-300 text-sm md:text-base disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                                    >
                                        {isSubmitting ? 'Submitting...' : 'Submit Registration'}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </GlassyCard>
        </GlassyContainer>
    );
}
