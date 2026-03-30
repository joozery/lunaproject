"use client";

import { Outfit } from "next/font/google";
import { useState } from "react";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

const navLinks = [
  { name: "Home", href: "#" },
  { name: "Images", href: "#" },
  { name: "Prints", href: "#" },
  { name: "Projects", href: "#" },
  { name: "Travel", href: "#" },
  { name: "Workshops", href: "#" },
  { name: "Events", href: "#" },
  { name: "Books", href: "#" },
  { name: "About", href: "#" },
  { name: "News", href: "#" },
  { name: "Stock", href: "#" },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <html
      lang="th"
      className={`${outfit.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body suppressHydrationWarning className={`${outfit.className} min-h-screen flex flex-col bg-white text-pastel-blue-500`}>
        <header className="sticky top-0 z-50 glass border-b border-pastel-blue-100/50">
          <nav className="container mx-auto px-4 md:px-6 h-16 md:h-20 flex items-center justify-between">
            <h1 className="text-xl md:text-2xl font-bold tracking-tighter text-pastel-blue-500">
              Aura<span className="font-light text-pastel-blue-400">Gallery</span>
            </h1>
            
            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-6 xl:gap-8 text-[11px] font-bold tracking-[0.2em] text-pastel-blue-400 uppercase">
              {navLinks.map((link) => (
                <a key={link.name} href={link.href} className="nav-link hover:text-pastel-blue-500 transition-colors">
                  {link.name}
                </a>
              ))}
              <button className="hover:text-pastel-blue-500 hover:scale-125 transition-all ml-2 cursor-pointer p-2 rounded-full hover:bg-pastel-blue-50">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
              </button>
            </div>

            {/* Mobile Actions */}
            <div className="flex lg:hidden items-center gap-2 text-pastel-blue-400">
              <button className="p-2 hover:bg-pastel-blue-50 rounded-full transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
              </button>
              <button 
                onClick={() => setIsMenuOpen(true)}
                className="p-2 hover:bg-pastel-blue-50 rounded-full transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
              </button>
            </div>
          </nav>

          {/* Mobile Menu Overlay */}
          <div className={`fixed inset-0 z-[60] bg-white/95 backdrop-blur-md transition-all duration-500 lg:hidden ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}`}>
            <div className="flex flex-col h-full p-8">
              <div className="flex items-center justify-between mb-12">
                <h1 className="text-xl font-bold tracking-tighter text-pastel-blue-500">
                  Aura<span className="font-light text-pastel-blue-400">Gallery</span>
                </h1>
                <button 
                  onClick={() => setIsMenuOpen(false)}
                  className="p-2 text-pastel-blue-400 hover:bg-pastel-blue-50 rounded-full transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" x2="6" y1="6" y2="18"/><line x1="6" x2="18" y1="6" y2="18"/></svg>
                </button>
              </div>
              <div className="flex flex-col gap-6 overflow-y-auto">
                {navLinks.map((link) => (
                  <a 
                    key={link.name} 
                    href={link.href} 
                    onClick={() => setIsMenuOpen(false)}
                    className="text-2xl font-bold text-pastel-blue-500 hover:text-pastel-blue-400 transition-colors tracking-tight"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
              <div className="mt-auto pt-8 border-t border-pastel-blue-100 flex gap-6">
                <a href="#" className="text-pastel-blue-300 hover:text-pastel-blue-400 transition-colors text-sm uppercase tracking-widest font-bold">Instagram</a>
                <a href="#" className="text-pastel-blue-300 hover:text-pastel-blue-400 transition-colors text-sm uppercase tracking-widest font-bold">Twitter</a>
              </div>
            </div>
          </div>
        </header>
        <main className="flex-grow">{children}</main>
        <footer className="bg-white border-t border-pastel-blue-200/30 pt-20 pb-12">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
              {/* Brand Section */}
              <div className="space-y-6">
                <h2 className="text-2xl font-semibold tracking-tight text-pastel-blue-500">
                  Aura<span className="font-light text-pastel-blue-400">Gallery</span>
                </h2>
                <p className="text-pastel-blue-400/80 text-sm leading-relaxed max-w-xs">
                  A sanctuary for minimalist photography and fine art prints. Capturing the essence of tranquility in every frame.
                </p>
                <div className="flex gap-5 text-pastel-blue-300">
                  <a href="#" className="hover:text-pastel-blue-500 transition-colors"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg></a>
                  <a href="#" className="hover:text-pastel-blue-500 transition-colors"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg></a>
                  <a href="#" className="hover:text-pastel-blue-500 transition-colors"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg></a>
                </div>
              </div>

              {/* Quick Links */}
              <div>
                <h4 className="text-pastel-blue-500 font-semibold mb-8 text-sm uppercase tracking-widest">Collections</h4>
                <ul className="space-y-4 text-sm text-pastel-blue-300">
                  <li><a href="#" className="hover:text-pastel-blue-500 transition-colors">Nature & Landscapes</a></li>
                  <li><a href="#" className="hover:text-pastel-blue-500 transition-colors">Ocean Breeze</a></li>
                  <li><a href="#" className="hover:text-pastel-blue-500 transition-colors">Architectural Lines</a></li>
                  <li><a href="#" className="hover:text-pastel-blue-500 transition-colors">Minimalist Botanics</a></li>
                </ul>
              </div>

              {/* Company */}
              <div>
                <h4 className="text-pastel-blue-500 font-semibold mb-8 text-sm uppercase tracking-widest">Company</h4>
                <ul className="space-y-4 text-sm text-pastel-blue-300">
                  <li><a href="#" className="hover:text-pastel-blue-500 transition-colors">About Story</a></li>
                  <li><a href="#" className="hover:text-pastel-blue-500 transition-colors">Fine Art Prints</a></li>
                  <li><a href="#" className="hover:text-pastel-blue-500 transition-colors">Licensing</a></li>
                  <li><a href="#" className="hover:text-pastel-blue-500 transition-colors">Contact Us</a></li>
                </ul>
              </div>

              {/* Newsletter */}
              <div>
                <h4 className="text-pastel-blue-500 font-semibold mb-8 text-sm uppercase tracking-widest">Stay Inspired</h4>
                <p className="text-pastel-blue-300 text-xs mb-6 leading-relaxed">Join 5,000+ others receiving our monthly curated art inspiration.</p>
                <div className="flex flex-col gap-3">
                  <input 
                    type="email" 
                    placeholder="Email address" 
                    className="w-full px-5 py-3 rounded-xl border border-pastel-blue-200/20 text-sm focus:outline-none focus:ring-2 focus:ring-pastel-blue-200/30 bg-pastel-blue-50/20 text-pastel-blue-500 placeholder:text-pastel-blue-300"
                  />
                  <button className="w-full bg-pastel-blue-400 hover:bg-pastel-blue-500 text-white font-medium py-3 rounded-xl transition-all shadow-lg shadow-pastel-blue-200/50 active:scale-95">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>

            {/* Bottom Bar */}
            <div className="pt-12 border-t border-pastel-blue-200/10 flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="text-xs text-pastel-blue-200 uppercase tracking-widest font-medium">
                © 2026 Aura Gallery. All Rights Reserved.
              </div>
              <div className="flex gap-8 text-[10px] font-bold text-pastel-blue-200 uppercase tracking-widest">
                <a href="#" className="hover:text-pastel-blue-400 transition-colors">Terms</a>
                <a href="#" className="hover:text-pastel-blue-500 transition-colors">Privacy</a>
                <a href="#" className="hover:text-pastel-blue-500 transition-colors">Cookies</a>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}

