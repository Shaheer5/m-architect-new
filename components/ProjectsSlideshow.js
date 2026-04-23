"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { ArrowLeft, ArrowRight, MapPin, Tag, ExternalLink } from "lucide-react";

const projects = [
  {
    img: "/images/hero-bg.webp",
    title: "Executive Office Suite",
    type: "Interior Design",
    location: "Lahore, Pakistan",
    year: "2024",
    area: "3,200 sq ft",
    desc: "A refined executive workspace blending warm walnut tones with bespoke joinery, integrated lighting, and a custom display wall — designed and built end-to-end.",
  },
  {
    img: "/images/hero-bg.webp",
    title: "Residential Villa",
    type: "Architectural Design",
    location: "Islamabad",
    year: "2023",
    area: "6,500 sq ft",
    desc: "Contemporary villa with climate-responsive façade design, double-height living volumes, and seamless indoor-outdoor flow across terraced landscaping.",
  },
  {
    img: "/images/hero-bg.webp",
    title: "Boutique Hotel Lobby",
    type: "Design & Build",
    location: "Karachi",
    year: "2023",
    area: "1,800 sq ft",
    desc: "Turnkey lobby design and construction featuring hand-selected stone, feature ceilings, bespoke reception millwork, and curated art integration.",
  },
  {
    img: "/images/hero-bg.webp",
    title: "Commercial Complex",
    type: "Project Management",
    location: "Rawalpindi",
    year: "2022",
    area: "28,000 sq ft",
    desc: "Full project management of a mixed-use commercial development — coordinating architecture, MEP, interior fit-out, and contractor delivery on schedule.",
  },
  {
    img: "/images/hero-bg.webp",
    title: "Café & Retail Space",
    type: "Interior Fit-Out",
    location: "Lahore",
    year: "2024",
    area: "900 sq ft",
    desc: "High-energy café interior with fluted timber walls, concrete counters, and custom pendant lighting — complete fit-out delivered in 6 weeks.",
  },
  {
    img: "/images/hero-bg.webp",
    title: "Private Residence",
    type: "Design & Build",
    location: "Islamabad",
    year: "2024",
    area: "4,100 sq ft",
    desc: "Turnkey residential project with architectural design, interior execution, landscaping, and MEP coordination — single point of responsibility.",
  },
];

// How many are visible at once per breakpoint (controlled via JS)
const VISIBLE = 2;

export default function ProjectsSlideshow() {
  const [current, setCurrent] = useState(0);
  const [hovered, setHovered] = useState(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const autoRef = useRef(null);

  const total = projects.length;
  const maxIndex = total - VISIBLE;

  const go = useCallback(
    (dir) => {
      if (isAnimating) return;
      setIsAnimating(true);
      setCurrent((prev) => Math.max(0, Math.min(prev + dir, maxIndex)));
      setTimeout(() => setIsAnimating(false), 500);
    },
    [isAnimating, maxIndex],
  );

  // Auto-advance
  const resetAuto = useCallback(() => {
    if (autoRef.current) clearTimeout(autoRef.current);
    autoRef.current = setTimeout(() => {
      setCurrent((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 4500);
  }, [maxIndex]);

  useEffect(() => {
    resetAuto();
    return () => {
      if (autoRef.current) clearTimeout(autoRef.current);
    };
  }, [current, resetAuto]);

  const goTo = (i) => {
    if (!isAnimating && i !== current) {
      setIsAnimating(true);
      setCurrent(i);
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  return (
    <section id="portfolio" className="bg-parchment py-20 lg:py-36 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* ── HEADER ── */}
        <div className="mb-12 lg:mb-14 flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div>
            <p className="reveal text-xs font-mono tracking-[0.25em] text-wood-500 uppercase mb-4">Our Work</p>
            <h2 className="reveal reveal-delay-1 font-display text-3xl sm:text-5xl lg:text-6xl font-light text-wood-900 leading-tight">
              Projects that <span className="italic">speak</span>
              <br />
              for themselves.
            </h2>
          </div>

          <div className="reveal reveal-delay-2 flex items-center gap-4">
            {/* Counter */}
            <span className="font-mono text-xs text-wood-400 tracking-widest hidden sm:inline">
              {String(current + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
            </span>
            {/* Arrows */}
            <button
              onClick={() => go(-1)}
              disabled={current === 0}
              aria-label="Previous"
              className="w-10 h-10 rounded-full border border-wood-300 flex items-center justify-center text-wood-600
                         hover:bg-wood-700 hover:border-wood-700 hover:text-cream
                         disabled:opacity-30 disabled:cursor-not-allowed
                         transition-colors"
            >
              <ArrowLeft size={16} />
            </button>
            <button
              onClick={() => go(1)}
              disabled={current >= maxIndex}
              aria-label="Next"
              className="w-10 h-10 rounded-full border border-wood-300 flex items-center justify-center text-wood-600
                         hover:bg-wood-700 hover:border-wood-700 hover:text-cream
                         disabled:opacity-30 disabled:cursor-not-allowed
                         transition-colors"
            >
              <ArrowRight size={16} />
            </button>
            {/* CTA */}
            <a
              href="#contact"
              className="ml-2 px-6 py-3 bg-wood-700 text-cream text-sm font-medium rounded-full
                         hover:bg-wood-800 transition-colors hidden sm:inline-block"
            >
              Start a Project
            </a>
          </div>
        </div>

        {/* ── SLIDESHOW ── */}
        <div className="relative">
          {/* Track */}
          <div className="overflow-hidden rounded-2xl">
            <div
              className="flex gap-4 transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(calc(-${current} * (50% + 8px)))` }}
            >
              {projects.map((p, i) => (
                <div
                  key={p.title}
                  className="relative shrink-0 rounded-2xl overflow-hidden cursor-pointer
                             w-[85vw] sm:w-[60vw] lg:w-[calc(50%-8px)]
                             h-[52vw] sm:h-[38vw] lg:h-105"
                  onMouseEnter={() => setHovered(i)}
                  onMouseLeave={() => setHovered(null)}
                >
                  {/* Image */}
                  <img
                    src={p.img}
                    alt={p.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    style={{ transform: hovered === i ? "scale(1.04)" : "scale(1)" }}
                    loading="lazy"
                  />

                  {/* Base gradient — always visible */}
                  <div className="absolute inset-0 bg-linear-to-t from-wood-950/75 via-wood-950/10 to-transparent" />

                  {/* ── TOP-LEFT LABEL (always visible) ── */}
                  <div className="absolute top-5 left-5 z-10">
                    <div
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full
                                 bg-wood-950/50 backdrop-blur-sm border border-cream/10"
                    >
                      <Tag size={10} className="text-sand-300" />
                      <span className="text-xs font-mono tracking-widest text-sand-300 uppercase">{p.type}</span>
                    </div>
                  </div>

                  {/* ── HOVER DETAIL PANEL (top-left, slides in) ── */}
                  <div
                    className="absolute top-0 left-0 right-0 p-5 z-20
                               transition-all duration-400 ease-out"
                    style={{
                      opacity: hovered === i ? 1 : 0,
                      transform: hovered === i ? "translateY(0)" : "translateY(-8px)",
                      pointerEvents: hovered === i ? "auto" : "none",
                    }}
                  >
                    {/* Full detail card */}
                    <div className="bg-wood-950/80 backdrop-blur-md rounded-xl p-5 max-w-70">
                      <div className="flex items-center gap-1.5 mb-3">
                        <MapPin size={11} className="text-sand-400 shrink-0" />
                        <span className="text-xs font-mono text-sand-400 tracking-wider uppercase">{p.location}</span>
                      </div>
                      <h4 className="font-display text-xl text-cream font-light leading-snug mb-2">{p.title}</h4>
                      <p className="text-xs text-wood-300 leading-relaxed mb-4">{p.desc}</p>
                      <div className="flex gap-4 text-xs font-mono text-wood-400">
                        <span>{p.year}</span>
                        <span className="text-wood-600">·</span>
                        <span>{p.area}</span>
                      </div>
                    </div>
                  </div>

                  {/* ── BOTTOM LABEL (always visible) ── */}
                  <div
                    className="absolute bottom-0 left-0 right-0 p-5 z-10
                               transition-transform duration-300 ease-out"
                    style={{ transform: hovered === i ? "translateY(4px)" : "translateY(0)" }}
                  >
                    <h3 className="font-display text-xl sm:text-2xl text-cream font-light">{p.title}</h3>
                    <div className="flex items-center gap-1.5 mt-1">
                      <MapPin size={11} className="text-sand-400" />
                      <span className="text-xs font-mono text-sand-400 tracking-wider">{p.location}</span>
                    </div>
                  </div>

                  {/* View detail button on hover */}
                  <div
                    className="absolute bottom-5 right-5 z-20 transition-all duration-300"
                    style={{
                      opacity: hovered === i ? 1 : 0,
                      transform: hovered === i ? "scale(1)" : "scale(0.85)",
                    }}
                  >
                    <button className="w-9 h-9 rounded-full bg-sand-400 hover:bg-sand-300 flex items-center justify-center transition-colors">
                      <ExternalLink size={14} className="text-wood-950" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile edge fade */}
          <div className="absolute top-0 right-0 bottom-0 w-16 bg-linear-to-l from-parchment to-transparent pointer-events-none lg:hidden" />
        </div>

        {/* ── DOT INDICATORS ── */}
        <div className="mt-8 flex items-center justify-center gap-2">
          {Array.from({ length: maxIndex + 1 }).map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Go to slide ${i + 1}`}
              className="transition-all duration-300 rounded-full"
              style={{
                width: current === i ? "28px" : "8px",
                height: "8px",
                backgroundColor: current === i ? "#8f5a34" : "#d6ba86",
              }}
            />
          ))}
        </div>

        {/* Mobile CTA */}
        <div className="mt-8 text-center sm:hidden">
          <a
            href="#contact"
            className="inline-block px-6 py-3 bg-wood-700 text-cream text-sm font-medium rounded-full hover:bg-wood-800 transition-colors"
          >
            Start a Project
          </a>
        </div>

        {/* Footnote */}
        <p className="mt-6 text-center text-xs text-wood-400 font-mono">
          Selected architectural &amp; interior projects
        </p>
      </div>
    </section>
  );
}
