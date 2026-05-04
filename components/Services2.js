"use client";

import { Search, PenTool, HardHat, Paintbrush2, Zap, RefreshCw, ClipboardList } from "lucide-react";

const services = [
  {
    id: "01",
    title: "Pre-Construction",
    icon: Search,
    img: "/images/hero-bg.webp",
    fallback: "linear-gradient(140deg,#2c1a12,#8f5a34)",
    points: [
      "Site analysis & feasibility studies",
      "Concept design & planning",
      "Cost estimation & BOQ",
      "Project scheduling",
    ],
  },
  {
    id: "02",
    title: "Architectural & Design",
    icon: PenTool,
    img: "/images/hero-bg.webp",
    fallback: "linear-gradient(140deg,#0e1f13,#437f47)",
    points: [
      "Architectural design — residential & commercial",
      "AutoCAD drawings — plans, elevations, sections",
      "3D modeling & visualization",
      "Interior design & space planning",
      "Landscape design",
    ],
  },
  {
    id: "03",
    title: "Construction",
    icon: HardHat,
    img: "/images/hero-bg.webp",
    fallback: "linear-gradient(140deg,#2c1a12,#73462c)",
    points: [
      "Grey structure construction",
      "Complete turnkey construction",
      "Residential & commercial buildings",
      "Foundations, RCC & structural works",
      "Masonry, plastering & roofing",
    ],
  },
  {
    id: "04",
    title: "Finishing Works",
    icon: Paintbrush2,
    img: "/images/hero-bg.webp",
    fallback: "linear-gradient(140deg,#3a2610,#c8a063)",
    points: [
      "Flooring — tiles, marble, wood",
      "Paint & wall finishes",
      "False ceiling & gypsum works",
      "Woodwork & cabinetry",
      "Glass & aluminum works",
    ],
  },
  {
    id: "05",
    title: "MEP Services",
    icon: Zap,
    img: "/images/hero-bg.webp",
    fallback: "linear-gradient(140deg,#0e1f13,#316537)",
    points: [
      "Electrical wiring & installation",
      "Plumbing & drainage systems",
      "HVAC — heating, ventilation, A/C",
      "Fire safety systems",
    ],
  },
  {
    id: "06",
    title: "Renovation & Remodeling",
    icon: RefreshCw,
    img: "/images/hero-bg.webp",
    fallback: "linear-gradient(140deg,#2c1a12,#5e3a28)",
    points: [
      "Home renovation & upgrades",
      "Commercial space remodeling",
      "Structural modifications",
      "Interior refurbishments",
    ],
  },
  {
    id: "07",
    title: "Project Management",
    icon: ClipboardList,
    img: "/images/hero-bg.webp",
    fallback: "linear-gradient(140deg,#2c1a12,#a97040)",
    points: [
      "Site supervision",
      "Contractor coordination",
      "Material procurement",
      "Quality control & safety management",
      "Time and cost management",
    ],
  },
];

function ServiceCard({ s, i }) {
  const Icon = s.icon;

  return (
    <div className="group relative rounded-2xl overflow-hidden h-72 lg:h-80">
      {/* Background */}
      <div className="absolute inset-0" style={{ background: s.fallback }}>
        <img
          src={s.img}
          alt={s.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          onError={(e) => (e.target.style.display = "none")}
        />
      </div>

      {/* Base gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-wood-950/90 via-wood-950/30 to-transparent" />

      {/* Hover overlay */}
      <div className="absolute inset-0 bg-wood-950/10 group-hover:bg-wood-950/60 transition-colors duration-500" />

      {/* TOP CONTENT (Icon + number + title) */}
      <div className="absolute top-5 left-5 right-5 z-10">
        {/* Icon + number */}
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-xl bg-black/40 backdrop-blur-md border border-white/20 flex items-center justify-center">
            <Icon size={18} className="text-cream" />
          </div>

          <span className="font-mono text-xs text-cream/60 tracking-widest">{s.id}</span>
        </div>

        {/* Title UNDER icon */}
        <h3 className="font-display text-xl text-cream font-light leading-snug max-w-[80%]">{s.title}</h3>
      </div>

      {/* BOTTOM DETAILS (hidden → hover) */}
      <div
        className="absolute bottom-0 left-0 right-0 p-5 z-10
                   translate-y-6 opacity-0
                   group-hover:translate-y-0 group-hover:opacity-100
                   transition-all duration-500 ease-out"
      >
        <ul className="flex flex-col gap-2">
          {s.points.map((pt) => (
            <li key={pt} className="flex items-start gap-2">
              <span className="mt-1.5 w-1 h-1 rounded-full bg-sand-400 shrink-0" />
              <span className="text-[12px] text-cream/90 leading-snug">{pt}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function Services2() {
  const firstRow = services.slice(0, 4);
  const secondRow = services.slice(4); // 3 cards

  return (
    <section id="services" className="bg-cream py-20 lg:py-36">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* HEADER */}
        <div className="mb-14">
          <p className="reveal text-xs font-mono tracking-[0.25em] text-wood-500 uppercase mb-4">What We Offer</p>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <h2 className="reveal reveal-delay-1 font-display text-4xl sm:text-5xl lg:text-6xl font-light text-wood-900 leading-tight">
              End-to-end <span className="italic">solutions</span>
              <br className="hidden sm:block" /> under one roof.
            </h2>
            <p className="reveal reveal-delay-2 text-wood-500 text-sm leading-relaxed max-w-xs lg:text-right">
              Seven service areas — from first sketch to final handover.
              <br />
              <span className="text-wood-400">Hover a card to explore.</span>
            </p>
          </div>
        </div>

        {/* ROW 1 — 4 cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
          {firstRow.map((s, i) => (
            <ServiceCard key={s.id} s={s} i={i} />
          ))}
        </div>

        {/* ROW 2 — 3 cards, centered via 3-col grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {secondRow.map((s, i) => (
            <ServiceCard key={s.id} s={s} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
