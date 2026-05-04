"use client";

import { useState } from "react";
import { MapPin, Calendar, Ruler, ChevronDown, Activity } from "lucide-react";
import { ongoingProjects } from "@/lib/projects";

const ongoing = ongoingProjects;

export default function OngoingProjects() {
  const [expanded, setExpanded] = useState(0);

  const toggle = (i) => setExpanded((prev) => (prev === i ? null : i));

  return (
    <section id="ongoing" className="bg-cream py-20 lg:py-36">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* HEADER */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-2 mb-5">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-forest-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-forest-500" />
              </span>
              <p className="text-xs font-mono tracking-[0.25em] text-wood-500 uppercase">Live Updates</p>
            </div>
            <h2 className="reveal font-display text-3xl sm:text-5xl lg:text-6xl font-light text-wood-900 leading-tight">
              Currently <span className="italic text-wood-500">in progress.</span>
            </h2>
          </div>
          <p className="reveal reveal-delay-1 text-wood-500 text-sm leading-relaxed max-w-xs sm:text-right">
            {ongoing.length} active projects across Pakistan &amp; Saudi Arabia.
          </p>
        </div>

        {/* ACCORDION LIST */}
        <div className="flex flex-col gap-3">
          {ongoing.map((p, i) => {
            const open = expanded === i;
            return (
              <div
                key={p.id}
                /*
                  IMPORTANT: no `reveal` class here — the card wrapper must NOT
                  have opacity:0 / transform on it, otherwise the expanded content
                  inherits the hidden state and "fades away" on open.
                  The reveal class is only safe on static, always-visible elements.
                */
                className={`rounded-2xl border transition-colors duration-300 ${
                  open
                    ? "border-wood-300 bg-parchment"
                    : "border-wood-200 bg-parchment/60 hover:border-wood-300 hover:bg-parchment"
                }`}
              >
                {/* ROW — trigger */}
                <button
                  onClick={() => toggle(i)}
                  className="w-full text-left px-6 py-5 flex items-center gap-4 sm:gap-6"
                >
                  <span className="font-mono text-2xl font-light text-wood-300 shrink-0 w-8">{p.id}</span>

                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <h3 className="font-display text-lg sm:text-xl text-wood-900 font-light leading-snug truncate">
                        {p.title}
                      </h3>
                      <span
                        className={`shrink-0 text-[10px] font-mono tracking-wider px-2.5 py-0.5 rounded-full ${p.statusColor}`}
                      >
                        {p.status}
                      </span>
                    </div>
                    <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-wood-400">
                      <span className="flex items-center gap-1">
                        <MapPin size={10} />
                        {p.location}
                      </span>
                      <span className="hidden sm:inline text-wood-300">·</span>
                      <span className="hidden sm:inline">{p.type}</span>
                      <span className="hidden sm:inline text-wood-300">·</span>
                      <span className="hidden sm:inline">{p.area}</span>
                    </div>
                  </div>

                  {/* Progress bar desktop */}
                  <div className="hidden md:flex flex-col items-end gap-1.5 shrink-0 w-32">
                    <span className="font-mono text-xs text-wood-400">{p.progress}% complete</span>
                    <div className="w-full h-1.5 bg-wood-100 rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full transition-all duration-700"
                        style={{ width: `${p.progress}%`, backgroundColor: p.accent }}
                      />
                    </div>
                  </div>

                  <div className={`shrink-0 transition-transform duration-300 ${open ? "rotate-180" : ""}`}>
                    <ChevronDown size={18} className="text-wood-400" />
                  </div>
                </button>

                {/*
                  EXPANDED PANEL
                  - overflow:hidden + max-height transition = smooth height slide
                  - NO opacity on this wrapper (avoid conflict with .reveal)
                  - Inner div has no reveal/opacity classes — content is always visible once rendered
                */}
                <div
                  style={{
                    overflow: "hidden",
                    maxHeight: open ? "700px" : "0px",
                    transition: "max-height 0.45s cubic-bezier(0.4, 0, 0.2, 1)",
                  }}
                >
                  <div className="px-6 pb-7 grid lg:grid-cols-[1fr_auto] gap-8">
                    {/* Left */}
                    <div>
                      {/* Mobile progress */}
                      <div className="md:hidden mb-5">
                        <div className="flex justify-between mb-1.5">
                          <span className="font-mono text-xs text-wood-400">Progress</span>
                          <span className="font-mono text-xs text-wood-400">{p.progress}%</span>
                        </div>
                        <div className="w-full h-1.5 bg-wood-100 rounded-full overflow-hidden">
                          <div
                            className="h-full rounded-full"
                            style={{ width: `${p.progress}%`, backgroundColor: p.accent }}
                          />
                        </div>
                      </div>

                      <p className="text-wood-600 text-sm leading-relaxed mb-6 max-w-xl">{p.desc}</p>

                      {/* Meta */}
                      <div className="flex flex-wrap gap-5 mb-7">
                        {[
                          { icon: Calendar, label: "Started", val: p.started },
                          { icon: Activity, label: "ETA", val: p.eta },
                          { icon: Ruler, label: "Area", val: p.area },
                        ].map((m) => (
                          <div key={m.label} className="flex items-center gap-2">
                            <div className="w-7 h-7 rounded-lg bg-wood-100 flex items-center justify-center">
                              <m.icon size={13} className="text-wood-500" />
                            </div>
                            <div>
                              <div className="text-[10px] font-mono text-wood-400 tracking-wider">{m.label}</div>
                              <div className="text-xs text-wood-800 font-medium">{m.val}</div>
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Milestone track */}
                      <div className="flex items-center">
                        {p.milestones.map((m, mi) => {
                          const done = mi < p.activeMilestone;
                          const active = mi === p.activeMilestone;
                          return (
                            <div key={mi} className="flex items-center flex-1 min-w-0">
                              <div className="flex flex-col items-center shrink-0">
                                <div
                                  className={`w-3 h-3 rounded-full border-2 transition-colors ${
                                    done
                                      ? "bg-forest-500 border-forest-500"
                                      : active
                                        ? "border-sand-500 bg-sand-400 ring-2 ring-sand-300/50"
                                        : "bg-white border-wood-200"
                                  }`}
                                />
                                <span
                                  className={`text-[9px] font-mono mt-1.5 text-center leading-tight w-12 sm:w-16 truncate ${
                                    done ? "text-forest-600" : active ? "text-wood-700" : "text-wood-300"
                                  }`}
                                >
                                  {m}
                                </span>
                              </div>
                              {mi < p.milestones.length - 1 && (
                                <div
                                  className="flex-1 h-px mx-1 mb-4"
                                  style={{ backgroundColor: done ? "#437f47" : "#e3ccb0" }}
                                />
                              )}
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    {/* Right — image */}
                    <div className="hidden lg:block w-56 h-48 rounded-xl overflow-hidden shrink-0 border border-wood-100">
                      <img
                        src={p.img}
                        alt={p.title}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.target.parentElement.style.background = `linear-gradient(135deg, #f2e8d9, ${p.accent}55)`;
                          e.target.style.display = "none";
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <p className="mt-10 text-center text-xs text-wood-400 font-mono">
          Progress figures updated monthly — last updated April 2025
        </p>
      </div>
    </section>
  );
}
