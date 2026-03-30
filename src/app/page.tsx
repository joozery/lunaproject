"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

const heroImages = [
  { id: 1, src: "/gallery/hero.png", title: "AURA COLLECTIVE", subtitle: "OUR JOURNEY" },
  { id: 2, src: "/gallery/image1.png", title: "SERENE WAVES", subtitle: "OCEAN BREEZE" },
  { id: 3, src: "/gallery/image2.png", title: "DREAMY ALTUS", subtitle: "SKY COTTON" },
  { id: 4, src: "/gallery/image4.png", title: "AZURE ETHOS", subtitle: "MODERN LINES" },
];

const images = [
  { id: 1, src: "/gallery/image1.png", title: "Serene Waves", theme: "Ocean Breeze" },
  { id: 2, src: "/gallery/image2.png", title: "Dreamy Altus", theme: "Sky Cotton" },
  { id: 3, src: "/gallery/image3.png", title: "Pure Bloom", theme: "Floral Minimal" },
  { id: 4, src: "/gallery/image4.png", title: "Azure Ethos", theme: "Architectural Lines" },
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col min-h-full">
      {/* Premium Sliding Hero Section */}
      <section className="relative h-[70vh] md:h-[80vh] flex flex-col justify-center overflow-hidden">
        {/* Background Images Slider */}
        {heroImages.map((img, index) => (
          <div 
            key={img.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100 z-0' : 'opacity-0 -z-10'}`}
          >
            <Image 
              src={img.src} 
              alt={img.title} 
              fill 
              className="object-cover"
              priority={index === 0}
            />
          </div>
        ))}
        
        {/* Subtle Light Overlay */}
        <div className="absolute inset-0 bg-white/20 backdrop-blur-[1px] pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-white/10 pointer-events-none" />
        
        {/* Floating Headline - Restored Container Padding & Alignment */}
        <div className="absolute top-[12%] left-0 w-full z-10 pointer-events-none">
          <div className="container mx-auto px-4 md:px-6">
            <h2 
              key={currentSlide}
              className="flex flex-col animate-text-reveal text-left"
            >
              <span className="text-5xl md:text-[10vw] font-black text-gradient uppercase leading-none tracking-tighter">
                {heroImages[currentSlide].title.split(" ")[0]}
              </span>
              <span className="text-4xl md:text-[9vw] font-light italic text-gradient uppercase leading-none tracking-tighter opacity-90">
                {heroImages[currentSlide].title.split(" ")[1]}
              </span>
            </h2>
          </div>
        </div>

        {/* Main Content Area (Bottom Actions) */}
        <div className="relative z-10 container mx-auto px-4 md:px-6 h-full flex flex-col justify-end pb-12">
          {/* Headline space filler */}
          <div className="h-[40%] pointer-events-none" />




          {/* Bottom Interactive Area */}
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-8 md:gap-12 animate-fade-in">
            
            {/* Play Button & Slider Info */}
            <div className="flex flex-col gap-6 md:gap-8">
              <div className="flex items-center gap-4 md:gap-6 group cursor-pointer">
                <button className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-white flex items-center justify-center text-pastel-blue-400 shadow-xl shadow-pastel-blue-200/30 group-hover:scale-110 transition-transform">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
                </button>
                <div className="text-xs font-medium text-pastel-blue-500">
                  <p className="uppercase tracking-widest text-[8px] md:text-[9px] text-pastel-blue-300 mb-0.5 md:mb-1">{heroImages[currentSlide].subtitle}</p>
                  <p className="hover:text-pastel-blue-400 transition-colors">Experience the art</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 text-pastel-blue-500 font-bold tracking-tighter">
                <span className="text-xl md:text-2xl italic">{String(currentSlide + 1).padStart(2, '0')}</span>
                <div className="w-20 md:w-24 h-px bg-pastel-blue-200 relative overflow-hidden">
                  <div 
                    className="absolute top-0 left-0 h-full bg-pastel-blue-400 transition-all duration-500" 
                    style={{ width: `${((currentSlide + 1) / heroImages.length) * 100}%` }}
                  />
                </div>
                <span className="text-pastel-blue-300 text-xs md:text-sm">/ {String(heroImages.length).padStart(2, '0')}</span>
              </div>
            </div>

            {/* Sub-navigation Cards - Keep hidden on mobile for clean UI */}
            <div className="hidden md:flex gap-4 overflow-hidden">
              {images.slice(0, 3).map((img, i) => (
                <div 
                  key={img.id}
                  onClick={() => setCurrentSlide(i + 1)}
                  className={`group relative w-32 h-20 lg:w-36 lg:h-24 rounded-xl overflow-hidden shadow-2xl transition-all duration-500 hover:w-52 cursor-pointer border-2 ${currentSlide === i + 1 ? 'border-pastel-blue-400' : 'border-transparent'}`}
                >
                  <Image src={img.src} alt={img.title} fill className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-all" />
                  <span className="absolute bottom-2 left-3 text-white font-bold uppercase tracking-[0.1em] text-[8px] drop-shadow-md">{img.title}</span>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* Intro Section - The "Philosophy" */}
      <section className="py-20 md:py-24 bg-white border-b border-pastel-blue-100/30 overflow-hidden relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-12 md:h-16 bg-gradient-to-b from-pastel-blue-200 to-transparent" />
        
        <div className="container mx-auto px-4 md:px-6 text-center max-w-4xl animate-fade-in">
          <span className="inline-block px-3 py-1 rounded-full bg-pastel-blue-50 border border-pastel-blue-100 text-pastel-blue-400 text-[8px] md:text-[9px] font-bold uppercase tracking-[0.2em] mb-4 md:mb-6">
            The Philosophy
          </span>
          <h3 className="text-2xl md:text-4xl font-bold text-pastel-blue-500 mb-4 md:mb-6 tracking-tight leading-tight">
            Minimalist <span className="font-light italic text-pastel-blue-400">Moments</span>
          </h3>
          <p className="text-pastel-blue-400/80 text-base md:text-lg font-light leading-relaxed max-w-2xl mx-auto italic">
            "Beauty in simplicity is not the absence of complexity, but the mastery of it."
          </p>
        </div>
      </section>

      {/* Interactive Vertical Gallery Section */}
      <section className="py-16 bg-white overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row h-[700px] gap-2 md:gap-3 transition-all duration-700 ease-in-out">
            {[
              { id: "01", title: "The Blue Sky Home", sub: "ECO DESIGN", src: "/gallery/image1.png" },
              { id: "02", title: "Serene Waves", sub: "OCEAN FRONT", src: "/gallery/image2.png" },
              { id: "03", title: "Dreamy Altus", sub: "MOUNTAIN VIEW", src: "/gallery/image3.png" },
              { id: "04", title: "Azure Ethos", sub: "URBAN LINES", src: "/gallery/image4.png" }
            ].map((item, index) => (
              <div 
                key={item.id} 
                className="group relative flex-1 hover:flex-[2.5] h-full transition-all duration-700 ease-in-out rounded-3xl overflow-hidden cursor-pointer"
              >
                <Image 
                  src={item.src} 
                  alt={item.title} 
                  fill 
                  className="object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-pastel-blue-900/10 group-hover:bg-transparent transition-all duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-pastel-blue-500/60 via-transparent to-transparent opacity-60 group-hover:opacity-100 transition-opacity" />

                {/* Content Overlay */}
                <div className="absolute inset-0 p-6 flex flex-col justify-between">
                  <div>
                    <span className="block text-white/80 font-bold text-sm tracking-widest mb-2 opacity-0 group-hover:opacity-100 transition-opacity delay-300">{item.id}</span>
                    <h4 className="text-white text-xl md:text-2xl font-bold uppercase tracking-tighter leading-none opacity-0 group-hover:opacity-100 transition-opacity delay-300 whitespace-nowrap">
                      {item.title}
                    </h4>
                  </div>

                  <div className="flex justify-between items-end">
                    {/* Vertical Side Text */}
                    <div className="[writing-mode:vertical-lr] rotate-180 text-white/60 text-[10px] font-bold tracking-[0.3em] uppercase opacity-0 group-hover:opacity-100 transition-opacity delay-300 translate-y-4 group-hover:translate-y-0 duration-500">
                      {item.sub}
                    </div>

                    {/* Open Icon/Circle */}
                    <div className="w-12 h-12 rounded-full border border-white/30 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all delay-300 transform scale-50 group-hover:scale-100">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14m-7-7v14"/></svg>
                    </div>
                  </div>
                </div>

                {/* Always Visible Text (When not hovered) */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group-hover:opacity-0 transition-opacity duration-300 pointer-events-none w-full text-center px-2">
                  <span className="text-white font-bold text-xs tracking-[0.4em] uppercase [writing-mode:vertical-lr] rotate-180 whitespace-nowrap opacity-60">
                    {item.id} — {item.title.split(" ")[0]}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Gallery Grid */}
      <section className="py-16 md:py-20 container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
          {images.map((image, index) => (
            <div 
              key={image.id}
              className={`group relative overflow-hidden rounded-2xl md:rounded-3xl bg-white aspect-[4/5] shadow-xl shadow-pastel-blue-200/5 transition-all duration-700 hover:-translate-y-2 animate-fade-in`}
              style={{ animationDelay: `${(index + 1) * 150}ms` }}
            >
              <Image
                src={image.src}
                alt={image.title}
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-pastel-blue-500/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6 md:p-8 cursor-pointer">
                <span className="text-white/80 text-[10px] md:text-xs font-medium mb-1 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  {image.theme}
                </span>
                <h3 className="text-white text-xl md:text-2xl font-semibold translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                  {image.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </section>


      {/* Cinematic Video/Story Slider Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="relative h-[500px] md:h-[700px] w-full rounded-[40px] overflow-hidden group shadow-2xl">
            {/* Background cinematic image */}
            <Image 
              src="/gallery/hero.png" 
              alt="Cinematic Story" 
              fill 
              className="object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            
            {/* Dark Cinematic Overlay */}
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-all duration-500" />
            
            {/* Content Container */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
              {/* Central Play Button */}
              <button className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-white/10 backdrop-blur-md border border-white/30 flex items-center justify-center text-white mb-8 hover:scale-110 hover:bg-white/20 transition-all cursor-pointer">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
              </button>
              
              <div className="animate-fade-in translate-y-4">
                <h3 className="text-3xl md:text-5xl font-bold text-white uppercase tracking-tighter mb-2">
                  Aura Stories — Serene
                </h3>
                <p className="text-white/70 text-xs md:text-sm font-bold tracking-[0.4em] uppercase">
                  BY AURA COLLECTIVE
                </p>
              </div>
            </div>

            {/* Navigation Arrows */}
            <button className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white opacity-40 hover:opacity-100 transition-opacity hover:bg-white/10 hidden md:flex">
              <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M15 18l-6-6 6-6"/></svg>
            </button>
            <button className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white opacity-40 hover:opacity-100 transition-opacity hover:bg-white/10 hidden md:flex">
              <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M9 5l6 6-6 6"/></svg>
            </button>

            {/* Bottom Pagination Dots */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-3">
              <div className="w-2 h-2 rounded-full bg-white transition-opacity" />
              <div className="w-2 h-2 rounded-full bg-white/30 transition-opacity" />
              <div className="w-2 h-2 rounded-full bg-white/30 transition-opacity" />
              <div className="w-2 h-2 rounded-full bg-white/30 transition-opacity" />
            </div>
          </div>
        </div>
      </section>

      {/* Showcase Section */}
      <section className="py-20 md:py-24 bg-white/40 border-y border-pastel-blue-200/10">
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-xl md:text-2xl font-medium text-pastel-blue-500 mb-8 md:mb-10 tracking-wide uppercase text-[10px] md:text-xs">Capture the Essence</h3>
          <div className="flex flex-wrap justify-center gap-8 md:gap-12 opacity-30">
            <div className="text-sm md:text-lg font-bold tracking-tighter">ZENITH</div>
            <div className="text-sm md:text-lg font-bold tracking-tighter">LUMINA</div>
            <div className="text-sm md:text-lg font-bold tracking-tighter">ECHO</div>
            <div className="text-sm md:text-lg font-bold tracking-tighter">AETHER</div>
          </div>
        </div>
      </section>

    </div>
  );
}
