"use client";

import { getConstructionProjects, getDesignProjects } from "@/lib/projects";
import { ArrowUpRight, PenTool, HardHat } from "lucide-react";
import Link from "next/link";

const designProjects = getDesignProjects();

const constructionProjects = getConstructionProjects();

function ProjectLink({ p, side }) {
  return (
    <Link
      href={`/projects/${p.slug}`}
      className={`group flex items-center gap-4 py-4 border-b transition-colors duration-200 ${
        side === "design" ? "border-wood-200 hover:border-wood-400" : "border-wood-200 hover:border-wood-400"
      }`}
    >
      {/* Thumbnail */}
      <div className="relative shrink-0 w-14 h-14 rounded-xl overflow-hidden bg-wood-100">
        <img
          src={p.coverImg}
          alt={p.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          onError={(e) => {
            e.target.style.display = "none";
            e.target.parentElement.style.background =
              side === "design" ? "linear-gradient(135deg,#437f47,#c2dbc3)" : "linear-gradient(135deg,#8f5a34,#e3ccb0)";
          }}
        />
      </div>

      {/* Text */}
      <div className="flex-1 min-w-0">
        <div className="font-display text-base text-wood-900 font-light leading-snug truncate group-hover:text-wood-700 transition-colors">
          {p.title}
        </div>
        <div className="flex items-center gap-2 mt-0.5">
          <span className="text-[11px] font-mono text-wood-400 truncate">{p.type}</span>
          <span className="text-wood-300 text-xs">·</span>
          <span className="text-[11px] font-mono text-wood-400 shrink-0">{p.year}</span>
        </div>
      </div>

      {/* Arrow */}
      <ArrowUpRight
        size={16}
        className="shrink-0 text-wood-300 group-hover:text-wood-700 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200"
      />
    </Link>
  );
}

export default function ProjectShowcase() {
  return (
    <section id="project-showcase" className="bg-parchment py-20 lg:py-36">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* TOP LABEL */}
        <p className="reveal text-xs font-mono tracking-[0.25em] text-wood-500 uppercase mb-12">Project Showcase</p>

        {/* TWO-COLUMN LAYOUT */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 lg:divide-x lg:divide-wood-200">
          {/* ── LEFT: DESIGN PROJECTS ── */}
          <div className="lg:pr-16 pb-16 lg:pb-0">
            {/* Column heading */}
            <div className="flex items-center gap-3 mb-2">
              <div className="w-9 h-9 rounded-xl bg-forest-100 flex items-center justify-center">
                <PenTool size={16} className="text-forest-700" />
              </div>
              <h2 className="reveal font-display text-3xl sm:text-4xl font-light text-wood-900 leading-tight">
                Design Projects
              </h2>
            </div>
            <p className="reveal reveal-delay-1 text-xs font-mono text-wood-400 tracking-wider mb-8 pl-12">
              Architectural · Interior · Visualization
            </p>

            {/* Project links */}
            <div>
              {designProjects.map((p, i) => (
                <div key={p.title} className={`reveal reveal-delay-${(i % 3) + 1}`}>
                  <ProjectLink p={p} side="design" />
                </div>
              ))}
            </div>

            {/* View all CTA */}
            <div className="reveal mt-8">
              <a
                href="#portfolio"
                className="inline-flex items-center gap-2 text-sm font-medium text-forest-700 hover:text-forest-900 transition-colors group"
              >
                View all design projects
                <ArrowUpRight
                  size={15}
                  className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                />
              </a>
            </div>
          </div>

          {/* ── RIGHT: CONSTRUCTION PROJECTS ── */}
          <div className="lg:pl-16 pt-16 lg:pt-0 border-t border-wood-200 lg:border-t-0">
            {/* Column heading */}
            <div className="flex items-center gap-3 mb-2">
              <div className="w-9 h-9 rounded-xl bg-wood-100 flex items-center justify-center">
                <HardHat size={16} className="text-wood-700" />
              </div>
              <h2 className="reveal font-display text-3xl sm:text-4xl font-light text-wood-900 leading-tight">
                Construction Projects
              </h2>
            </div>
            <p className="reveal reveal-delay-1 text-xs font-mono text-wood-400 tracking-wider mb-8 pl-12">
              Turnkey · Renovation · MEP · Fit-Out
            </p>

            {/* Project links */}
            <div>
              {constructionProjects.map((p, i) => (
                <div key={p.title} className={`reveal reveal-delay-${(i % 3) + 1}`}>
                  <ProjectLink p={p} side="construction" />
                </div>
              ))}
            </div>

            {/* View all CTA */}
            <div className="reveal mt-8">
              <a
                href="#portfolio"
                className="inline-flex items-center gap-2 text-sm font-medium text-wood-700 hover:text-wood-900 transition-colors group"
              >
                View all construction projects
                <ArrowUpRight
                  size={15}
                  className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
