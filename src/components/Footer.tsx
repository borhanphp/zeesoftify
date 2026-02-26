import Link from 'next/link';
import { Twitter, Linkedin, Github, Mail, MapPin, Phone } from 'lucide-react';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="relative border-t border-white/5 bg-background pt-20 pb-10 overflow-hidden">
            {/* Decorative gradient blur */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-primary/20 blur-[120px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-6 max-w-7xl">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

                    {/* Brand Concept */}
                    <div className="space-y-6">
                        <Link href="/" className="flex items-center gap-2 group">
                            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                                <span className="font-bold text-xl text-white">Z</span>
                            </div>
                            <span className="font-bold text-2xl tracking-tight">
                                Zee<span className="text-gradient">Softify</span>
                            </span>
                        </Link>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            We engineer extremely smart, scalable software solutions that propel your business into the future. Innovation delivered beautifully.
                        </p>
                        <div className="flex items-center gap-4">
                            <a href="#" className="h-10 w-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-primary hover:bg-primary/10 transition-all">
                                <Twitter size={18} />
                            </a>
                            <a href="#" className="h-10 w-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-secondary hover:bg-secondary/10 transition-all">
                                <Linkedin size={18} />
                            </a>
                            <a href="#" className="h-10 w-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-accent hover:bg-accent/10 transition-all">
                                <Github size={18} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-semibold text-white mb-6 uppercase tracking-wider text-sm">Services</h4>
                        <ul className="space-y-4">
                            <li><Link href="#products" className="text-gray-400 hover:text-primary transition-colors text-sm flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary/50" /> Our Products</Link></li>
                            <li><Link href="#services" className="text-gray-400 hover:text-secondary transition-colors text-sm flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-secondary/50" /> Custom Development</Link></li>
                            <li><a href="#" className="text-gray-400 hover:text-accent transition-colors text-sm flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-accent/50" /> Cloud Infrastructure</a></li>
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h4 className="font-semibold text-white mb-6 uppercase tracking-wider text-sm">Company</h4>
                        <ul className="space-y-4">
                            <li><Link href="#about" className="text-gray-400 hover:text-white transition-colors text-sm">About Us</Link></li>
                            <li><Link href="#blog" className="text-gray-400 hover:text-white transition-colors text-sm">Engineering Blog</Link></li>
                            <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Careers</a></li>
                        </ul>
                    </div>

                    {/* Contact Details */}
                    <div>
                        <h4 className="font-semibold text-white mb-6 uppercase tracking-wider text-sm">Contact</h4>
                        <ul className="space-y-4">
                            <li className="flex gap-3 text-sm text-gray-400">
                                <MapPin size={18} className="text-primary shrink-0" />
                                <span>Agrabad commercial area, Chattogram, Bangladesh</span>
                            </li>
                            <li className="flex gap-3 text-sm text-gray-400">
                                <Phone size={18} className="text-secondary shrink-0" />
                                <span>+8801885107614</span>
                            </li>
                            <li className="flex gap-3 text-sm text-gray-400">
                                <Mail size={18} className="text-accent shrink-0" />
                                <span>hello@zeesoftify.com</span>
                            </li>
                        </ul>
                    </div>

                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-gray-500 text-sm border-l-2 border-primary/50 pl-4 py-1">
                        © {currentYear} Zeesoftify. All rights reserved.
                    </p>
                    <div className="flex items-center gap-6">
                        <a href="#" className="text-gray-500 hover:text-white text-xs transition-colors">Privacy Policy</a>
                        <a href="#" className="text-gray-500 hover:text-white text-xs transition-colors">Terms of Service</a>
                        <a href="#" className="text-gray-500 hover:text-white text-xs transition-colors">Cookies</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
