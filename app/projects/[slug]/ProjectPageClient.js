"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight, MapPin, Calendar, Ruler, Clock, User, Tag, X } from "lucide-react";

// ── Status badge color
function statusBadge(status) {
  if (status === "Completed") return "bg-forest-100 text-forest-800";
  if (status === "In Progress") return "bg-sand-200 text-wood-800";
  return "bg-wood-100 text-wood-600";
}

// ── Full-screen lightbox
function Lightbox({ images, activeIndex, onClose, onNav }) {
  return (
    <div
      className="fixed inset-0 z-50 bg-wood-950/95 backdrop-blur-sm flex flex-col items-center justify-center"
      onClick={onClose}
    >
      {/* Close */}
      <button
        onClick={onClose}
        className="absolute top-5 right-5 w-10 h-10 rounded-full border border-wood-600 flex items-center justify-center text-wood-300 hover:text-cream hover:border-wood-400 transition-colors"
      >
        <X size={18} />
      </button>

      {/* Image */}
      <div
        className="relative max-w-5xl w-full mx-6 rounded-2xl overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={images[activeIndex].src}
          alt={images[activeIndex].label}
          className="w-full max-h-[75vh] object-contain bg-wood-900"
          onError={(e) => {
            e.target.parentElement.style.background = "linear-gradient(135deg,#2c1a12,#8f5a34)";
            e.target.style.display = "none";
          }}
        />
        {/* Label */}
        <div className="absolute bottom-0 inset-x-0 bg-wood-950/70 backdrop-blur-sm px-6 py-3">
          <span className="text-xs font-mono text-sand-300 tracking-widest uppercase">{images[activeIndex].label}</span>
        </div>
      </div>

      {/* Nav arrows */}
      <div className="flex items-center gap-4 mt-6" onClick={(e) => e.stopPropagation()}>
        <button
          onClick={() => onNav(-1)}
          disabled={activeIndex === 0}
          className="w-10 h-10 rounded-full border border-wood-600 flex items-center justify-center text-wood-300 hover:text-cream hover:border-wood-400 disabled:opacity-30 transition-colors"
        >
          <ArrowLeft size={16} />
        </button>
        <span className="font-mono text-xs text-wood-500">
          {activeIndex + 1} / {images.length}
        </span>
        <button
          onClick={() => onNav(1)}
          disabled={activeIndex === images.length - 1}
          className="w-10 h-10 rounded-full border border-wood-600 flex items-center justify-center text-wood-300 hover:text-cream hover:border-wood-400 disabled:opacity-30 transition-colors"
        >
          <ArrowRight size={16} />
        </button>
      </div>
    </div>
  );
}

export default function ProjectPageClient({ project, prev, next }) {
  const [lightbox, setLightbox] = useState(null); // index or null

  const openLightbox = (i) => setLightbox(i);
  const closeLightbox = () => setLightbox(null);
  const navLightbox = (dir) => setLightbox((prev) => Math.max(0, Math.min(prev + dir, project.images.length - 1)));

  const meta = [
    { icon: MapPin, label: "Location", value: project.location },
    { icon: Calendar, label: "Year", value: project.year },
    { icon: Ruler, label: "Area", value: project.area },
    { icon: Clock, label: "Duration", value: project.duration },
    { icon: Tag, label: "Type", value: project.type },
  ];

  return (
    <>
      {/* Lightbox */}
      {lightbox !== null && (
        <Lightbox images={project.images} activeIndex={lightbox} onClose={closeLightbox} onNav={navLightbox} />
      )}

      <main className="bg-cream min-h-screen">
        {/* ── NAV BAR ── */}
        <header className="fixed top-0 left-0 right-0 z-40 bg-cream/95 backdrop-blur-md border-b border-wood-200/60">
          <div className="max-w-7xl mx-auto px-6 lg:px-10 h-16 flex items-center justify-between">
            <Link
              href="/"
              className="flex items-center gap-2 text-wood-600 hover:text-wood-900 transition-colors group"
            >
              <ArrowLeft size={16} className="group-hover:-translate-x-0.5 transition-transform" />
              <span className="text-sm font-medium">Back</span>
            </Link>

            <Link href="/" className="font-display text-xl font-semibold text-wood-800">
              M-Architect
            </Link>

            <Link
              href="/#contact"
              className="px-5 py-2 bg-wood-700 text-cream text-sm font-medium rounded-full hover:bg-wood-800 transition-colors"
            >
              Start a Project
            </Link>
          </div>
        </header>

        {/* ── MAIN CONTENT ── */}
        <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-28 pb-20">
          {/* ── HERO GRID: left col details + right col cover image ── */}
          <div className="grid lg:grid-cols-[1fr_1.1fr] gap-10 lg:gap-16 mb-16">
            {/* LEFT COLUMN */}
            <div className="flex flex-col justify-between gap-10">
              {/* TOP-LEFT: Title + meta + scope */}
              <div>
                {/* Breadcrumb */}
                <div className="flex items-center gap-2 mb-6">
                  <Link
                    href="/#project-showcase"
                    className="text-xs font-mono text-wood-400 hover:text-wood-700 tracking-wider uppercase transition-colors"
                  >
                    {project.category} Projects
                  </Link>
                  <span className="text-wood-300 text-xs">/</span>
                  <span className="text-xs font-mono text-wood-600 tracking-wider uppercase">{project.type}</span>
                </div>

                {/* Status */}
                <div className="mb-4">
                  <span
                    className={`text-[11px] font-mono tracking-wider px-3 py-1 rounded-full ${statusBadge(project.status)}`}
                  >
                    {project.status}
                  </span>
                </div>

                {/* Title */}
                <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-light text-wood-900 leading-tight mb-6">
                  {project.title}
                </h1>

                {/* Scope */}
                <p className="text-wood-600 text-base leading-relaxed max-w-md mb-8">{project.scope}</p>

                {/* Meta grid */}
                <div className="grid grid-cols-2 gap-4">
                  {meta.map((m) => (
                    <div key={m.label} className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-lg bg-wood-100 flex items-center justify-center shrink-0 mt-0.5">
                        <m.icon size={13} className="text-wood-600" />
                      </div>
                      <div>
                        <div className="text-[10px] font-mono text-wood-400 tracking-wider mb-0.5 uppercase">
                          {m.label}
                        </div>
                        <div className="text-sm text-wood-800 font-medium">{m.value}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* BOTTOM-LEFT: Client details card */}
              <div className="bg-parchment rounded-2xl p-6 border border-wood-200">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-9 h-9 rounded-xl bg-wood-100 flex items-center justify-center">
                    <User size={15} className="text-wood-600" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono text-wood-400 tracking-wider uppercase">Client</div>
                    <div className="text-sm font-medium text-wood-900">{project.client}</div>
                  </div>
                </div>
                <div className="h-px bg-wood-200 mb-4" />
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <div className="text-[10px] font-mono text-wood-400 tracking-wider mb-1 uppercase">Role</div>
                    <div className="text-wood-700">{project.clientRole}</div>
                  </div>
                  <div>
                    <div className="text-[10px] font-mono text-wood-400 tracking-wider mb-1 uppercase">
                      Project Duration
                    </div>
                    <div className="text-wood-700">{project.duration}</div>
                  </div>
                </div>
                <div className="h-px bg-wood-200 my-4" />
                <Link
                  href="/#contact"
                  className="text-xs font-mono text-wood-500 hover:text-wood-800 tracking-wider uppercase transition-colors inline-flex items-center gap-1.5"
                >
                  Enquire about a similar project →
                </Link>
              </div>
            </div>

            {/* RIGHT COLUMN: Cover image */}
            <div className="relative rounded-2xl overflow-hidden h-[340px] sm:h-[460px] lg:h-auto lg:min-h-[560px]">
              <div className="w-full h-full" style={{ background: "linear-gradient(135deg,#2c1a12,#8f5a34)" }}>
                <img
                  src={project.coverImg}
                  alt={project.title}
                  className="w-full h-full object-cover cursor-zoom-in"
                  onClick={() => openLightbox(0)}
                  onError={(e) => {
                    e.target.style.display = "none";
                  }}
                />
              </div>

              {/* View label */}
              <div className="absolute bottom-5 left-5 pointer-events-none">
                <span className="text-[10px] font-mono tracking-widest text-cream/60 uppercase bg-wood-950/40 backdrop-blur-sm px-3 py-1.5 rounded-full border border-cream/10">
                  View 1 — {project.images[0]?.label?.split("—")[1]?.trim() || "Cover"}
                </span>
              </div>

              {/* Click hint */}
              <div className="absolute top-5 right-5 pointer-events-none">
                <span className="text-[10px] font-mono tracking-widest text-cream/50 uppercase bg-wood-950/40 backdrop-blur-sm px-3 py-1.5 rounded-full">
                  Click to expand
                </span>
              </div>
            </div>
          </div>

          {/* ── IMAGE GRID (additional images) ── */}
          {project.images.length > 1 && (
            <div>
              {/* Section label */}
              <div className="flex items-center gap-4 mb-5">
                <div className="h-px flex-1 bg-wood-200" />
                <span className="text-xs font-mono text-wood-400 tracking-[0.25em] uppercase shrink-0">
                  Project Gallery
                </span>
                <div className="h-px flex-1 bg-wood-200" />
              </div>

              {/* Seamless grid — gap-0, rounded only on corners of the whole block */}
              <div
                className={`grid gap-px bg-wood-200 rounded-2xl overflow-hidden ${
                  project.images.length === 2
                    ? "grid-cols-1 sm:grid-cols-2"
                    : project.images.length === 3
                      ? "grid-cols-1 sm:grid-cols-3"
                      : "grid-cols-2 lg:grid-cols-4"
                }`}
              >
                {project.images.map((img, i) => (
                  <div
                    key={i}
                    className="relative group cursor-zoom-in bg-cream"
                    style={{ aspectRatio: project.images.length <= 2 ? "4/3" : "1/1" }}
                    onClick={() => openLightbox(i)}
                  >
                    {/* Image */}
                    <div
                      className="w-full h-full"
                      style={{
                        background: `linear-gradient(135deg,#2c1a12,${["#8f5a34", "#437f47", "#c8a063", "#316537"][i % 4]})`,
                      }}
                    >
                      <img
                        src={img.src}
                        alt={img.label}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        onError={(e) => {
                          e.target.style.display = "none";
                        }}
                      />
                    </div>

                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-wood-950/0 group-hover:bg-wood-950/30 transition-colors duration-300" />

                    {/* View label — bottom left corner, always visible */}
                    <div className="absolute bottom-3 left-3 z-10">
                      <span className="text-[10px] font-mono tracking-widest text-cream/70 uppercase">
                        View {i + 1}
                      </span>
                    </div>

                    {/* Hover label — full label revealed on hover */}
                    <div
                      className="absolute bottom-0 inset-x-0 p-3 z-10
                                 opacity-0 group-hover:opacity-100 transition-opacity duration-300
                                 bg-gradient-to-t from-wood-950/80 to-transparent"
                    >
                      <div className="text-xs text-right text-cream font-light">
                        {img.label?.split("—")[1]?.trim() || img.label}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ── PREV / NEXT NAVIGATION ── */}
          <div className="mt-20 pt-8 border-t border-wood-200 grid grid-cols-2 gap-4">
            {prev ? (
              <Link
                href={`/projects/${prev.slug}`}
                className="group flex items-center gap-3 p-4 rounded-xl hover:bg-parchment transition-colors"
              >
                <ArrowLeft
                  size={16}
                  className="text-wood-400 group-hover:text-wood-700 group-hover:-translate-x-0.5 transition-all shrink-0"
                />
                <div className="min-w-0">
                  <div className="text-[10px] font-mono text-wood-400 tracking-wider uppercase mb-0.5">Previous</div>
                  <div className="text-sm font-display text-wood-700 group-hover:text-wood-900 truncate transition-colors">
                    {prev.title}
                  </div>
                </div>
              </Link>
            ) : (
              <div />
            )}

            {next ? (
              <Link
                href={`/projects/${next.slug}`}
                className="group flex items-center gap-3 p-4 rounded-xl hover:bg-parchment transition-colors justify-end text-right"
              >
                <div className="min-w-0">
                  <div className="text-[10px] font-mono text-wood-400 tracking-wider uppercase mb-0.5">Next</div>
                  <div className="text-sm font-display text-wood-700 group-hover:text-wood-900 truncate transition-colors">
                    {next.title}
                  </div>
                </div>
                <ArrowRight
                  size={16}
                  className="text-wood-400 group-hover:text-wood-700 group-hover:translate-x-0.5 transition-all shrink-0"
                />
              </Link>
            ) : (
              <div />
            )}
          </div>
        </div>
      </main>
    </>
  );
}
