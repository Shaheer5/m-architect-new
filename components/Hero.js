"use client";

import { useEffect, useState } from "react";
import { ArrowDown, MapPin } from "lucide-react";

const images = ["/images/hero-bg.webp", "/images/hero-bg.webp", "/images/hero-bg.webp", "/images/hero-bg.webp"];

export default function Hero() {
  const [index, setIndex] = useState(0);

  // Auto change slide
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000); // change every 4s

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col justify-end overflow-hidden">
      {/* fallback background */}
      <div className="absolute inset-0 bg-gradient-to-br from-wood-800 via-wood-700 to-wood-900 z-0" />

      {/* slideshow */}
      <div className="absolute inset-0 z-10">
        {images.map((src, i) => (
          <img
            key={i}
            src={src}
            alt=""
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
              i === index ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </div>

      {/* overlays */}
      <div className="absolute inset-0 z-20">
        <div className="absolute inset-0 bg-gradient-to-t from-wood-950/90 via-wood-900/50 to-wood-800/20" />
      </div>

      {/* content */}
      <div className="relative z-30 max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 pb-16 sm:pb-20 pt-28 sm:pt-32 lg:pt-40">
        <div className="flex items-center gap-2 mb-6 sm:mb-8">
          <MapPin size={14} className="text-sand-300" />
          <span className="text-[10px] sm:text-xs font-mono tracking-[0.2em] text-sand-300 uppercase">
            Pakistan · Saudi Arabia · International
          </span>
        </div>

        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-8xl text-cream font-light leading-[1.05] max-w-4xl mb-5 sm:mb-6">
          Developing <span className="italic text-sand-300">Spaces</span>
          <br />
          That <span className="italic text-sand-300">Endure.</span>
        </h1>

        <p className="text-sand-200 text-sm sm:text-base lg:text-lg max-w-xl mb-8 sm:mb-10 lg:mb-12 leading-relaxed">
          M-Architect Pvt. Ltd — End-to-end architectural, interior, and construction solutions.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
          <a
            href="#services"
            className="px-6 sm:px-7 py-3 sm:py-3.5 bg-wood-500 text-cream rounded-full text-sm sm:text-base text-center"
          >
            Explore Services
          </a>

          <a
            href="#contact"
            className="px-6 sm:px-7 py-3 sm:py-3.5 border border-cream/40 text-cream rounded-full text-sm sm:text-base text-center"
          >
            Start a Project
          </a>
        </div>
      </div>

      <a
        href="#services"
        className="absolute bottom-5 sm:bottom-8 right-5 sm:right-10 z-30 text-sand-400 flex flex-col items-center gap-1 animate-[float_2.5s_ease-in-out_infinite]"
      >
        <span className="hidden md:inline text-[10px] sm:text-xs font-mono rotate-90 mb-2 sm:mb-3">Scroll</span>
        <ArrowDown size={16} />
      </a>
    </section>
  );
}
