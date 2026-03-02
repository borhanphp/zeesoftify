'use client';

import { motion } from 'framer-motion';
import { Send, MapPin, Phone, Mail, Clock, ArrowRight } from 'lucide-react';
import { useState } from 'react';

export default function ContactPage() {
    const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setFormStatus('submitting');
        // Simulate API call
        setTimeout(() => {
            setFormStatus('success');
            setTimeout(() => setFormStatus('idle'), 3000);
        }, 1500);
    };

    return (
        <div className="min-h-screen pt-32 pb-20 relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full mix-blend-screen filter blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/20 rounded-full mix-blend-screen filter blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-6 max-w-7xl relative z-10">

                {/* Header Section */}
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mb-4 inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-white/10 text-sm font-medium text-accent"
                    >
                        Let's Connect
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-6xl font-bold tracking-tight mb-6"
                    >
                        Start Your <span className="text-gradient">Next Project</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-400 text-lg md:text-xl"
                    >
                        Book an appointment with our engineering team to discuss how we can transform your vision into reality.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

                    {/* Contact Information */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 }}
                        className="lg:col-span-5 space-y-8"
                    >
                        <div className="glass-card rounded-3xl p-8 h-full border border-white/5 bg-white/5 backdrop-blur-xl">
                            <h3 className="text-2xl font-bold text-white mb-8">Contact Information</h3>

                            <div className="space-y-8">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-full glass flex items-center justify-center text-primary shrink-0 border border-white/10">
                                        <MapPin size={24} />
                                    </div>
                                    <div>
                                        <h4 className="text-white font-medium mb-1">Office Address</h4>
                                        <p className="text-gray-400 text-sm leading-relaxed">
                                            Agrabad commercial area,<br />
                                            Chattogram, Bangladesh
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-full glass flex items-center justify-center text-secondary shrink-0 border border-white/10">
                                        <Phone size={24} />
                                    </div>
                                    <div>
                                        <h4 className="text-white font-medium mb-1">Phone Number</h4>
                                        <p className="text-gray-400 text-sm leading-relaxed">
                                            +880 1885 107614
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-full glass flex items-center justify-center text-accent shrink-0 border border-white/10">
                                        <Mail size={24} />
                                    </div>
                                    <div>
                                        <h4 className="text-white font-medium mb-1">Email Address</h4>
                                        <p className="text-gray-400 text-sm leading-relaxed">
                                            hello@zeesoftify.com
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-full glass flex items-center justify-center text-primary shrink-0 border border-white/10">
                                        <Clock size={24} />
                                    </div>
                                    <div>
                                        <h4 className="text-white font-medium mb-1">Business Hours</h4>
                                        <p className="text-gray-400 text-sm leading-relaxed">
                                            Monday - Friday<br />
                                            9:00 AM - 6:00 PM (GMT+6)
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Decorative element */}
                            <div className="mt-12 p-6 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 border border-white/5 relative overflow-hidden group hover:border-white/10 transition-colors">
                                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 ease-in-out" />
                                <h4 className="text-white font-medium mb-2 relative z-10">Looking for a career?</h4>
                                <p className="text-gray-400 text-sm mb-4 relative z-10">We are always looking for passionate engineers.</p>
                                <a href="#" className="text-sm font-medium text-accent flex items-center gap-2 relative z-10">
                                    View open positions <ArrowRight size={16} />
                                </a>
                            </div>
                        </div>
                    </motion.div>

                    {/* Booking Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 }}
                        className="lg:col-span-7"
                    >
                        <div className="glass-card rounded-3xl p-8 md:p-12 border border-white/10 bg-black/20 backdrop-blur-xl relative overflow-hidden shadow-2xl">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-[80px] pointer-events-none" />

                            <h3 className="text-2xl font-bold text-white mb-2">Book an Appointment</h3>
                            <p className="text-gray-400 text-sm mb-8">Fill out the form below and we'll get back to you within 24 hours.</p>

                            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {/* Name field */}
                                    <div className="space-y-2">
                                        <label htmlFor="name" className="text-sm font-medium text-gray-300">Full Name</label>
                                        <input
                                            type="text"
                                            id="name"
                                            required
                                            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 text-white placeholder-gray-500 transition-all font-light"
                                            placeholder="John Doe"
                                        />
                                    </div>

                                    {/* Email field */}
                                    <div className="space-y-2">
                                        <label htmlFor="email" className="text-sm font-medium text-gray-300">Email Address</label>
                                        <input
                                            type="email"
                                            id="email"
                                            required
                                            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 text-white placeholder-gray-500 transition-all font-light"
                                            placeholder="john@example.com"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {/* Service type */}
                                    <div className="space-y-2">
                                        <label htmlFor="service" className="text-sm font-medium text-gray-300">Interested Service</label>
                                        <select
                                            id="service"
                                            required
                                            className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 text-gray-300 transition-all font-light appearance-none"
                                        >
                                            <option value="" disabled selected>Select a service</option>
                                            <option value="web">Web Application Development</option>
                                            <option value="mobile">Mobile App Development</option>
                                            <option value="ai">AI Integration & Automation</option>
                                            <option value="cloud">Cloud Architecture</option>
                                            <option value="consulting">Technical Consulting</option>
                                            <option value="other">Other</option>
                                        </select>
                                    </div>

                                    {/* Preferred Date */}
                                    <div className="space-y-2">
                                        <label htmlFor="date" className="text-sm font-medium text-gray-300">Preferred Meeting Date</label>
                                        <input
                                            type="date"
                                            id="date"
                                            className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 text-gray-300 transition-all font-light appearance-none"
                                        />
                                    </div>
                                </div>

                                {/* Message field */}
                                <div className="space-y-2">
                                    <label htmlFor="message" className="text-sm font-medium text-gray-300">Project Details</label>
                                    <textarea
                                        id="message"
                                        rows={4}
                                        required
                                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 text-white placeholder-gray-500 transition-all font-light resize-none"
                                        placeholder="Tell us about your project, goals, and timeline..."
                                    ></textarea>
                                </div>

                                {/* Submit button */}
                                <button
                                    type="submit"
                                    disabled={formStatus === 'submitting' || formStatus === 'success'}
                                    className={`w-full py-4 rounded-xl font-bold text-white transition-all flex items-center justify-center gap-2
                    ${formStatus === 'idle' ? 'bg-gradient-to-r from-primary to-accent hover:shadow-[0_0_20px_rgba(99,102,241,0.4)]' : ''}
                    ${formStatus === 'submitting' ? 'bg-gray-700 cursor-not-allowed' : ''}
                    ${formStatus === 'success' ? 'bg-green-600' : ''}
                  `}
                                >
                                    {formStatus === 'idle' && (
                                        <>Send Request <Send size={18} /></>
                                    )}
                                    {formStatus === 'submitting' && (
                                        <><div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" /> Sending...</>
                                    )}
                                    {formStatus === 'success' && (
                                        <>Request Sent Successfully!</>
                                    )}
                                </button>
                            </form>
                        </div>
                    </motion.div>

                </div>
            </div>
        </div>
    );
}
