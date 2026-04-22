import { PenTool, Layers, Hammer, Camera, ClipboardList, Wrench, RefreshCw, FileText, Sparkles } from "lucide-react";

const services = [
  {
    icon: PenTool,
    title: "Architectural Design",
    desc: "Concept to construction docs — residential, commercial, hospitality.",
    color: "bg-wood-100 text-wood-700",
  },
  {
    icon: Layers,
    title: "Interior Design & Fit-Out",
    desc: "Space planning, 3D visualization, material selection & full execution.",
    color: "bg-sand-100 text-sand-700",
  },
  {
    icon: Hammer,
    title: "Design & Build (Turnkey)",
    desc: "Single-point responsibility. Architecture, structure, MEP under one roof.",
    color: "bg-wood-100 text-wood-700",
  },
  {
    icon: Camera,
    title: "3D Visualization",
    desc: "Photo-realistic renders, walkthroughs, and marketing-ready imagery.",
    color: "bg-forest-100 text-forest-700",
  },
  {
    icon: ClipboardList,
    title: "Project Management",
    desc: "Site supervision, contractor coordination, quality assurance & handover.",
    color: "bg-sand-100 text-sand-700",
  },
  {
    icon: Wrench,
    title: "Engineering & MEP",
    desc: "Structural coordination, HVAC, electrical, plumbing & fire-fighting.",
    color: "bg-wood-100 text-wood-700",
  },
  {
    icon: RefreshCw,
    title: "Renovation & Refurbishment",
    desc: "Façade upgrades, adaptive reuse, interior & exterior refurbishment.",
    color: "bg-forest-100 text-forest-700",
  },
  {
    icon: FileText,
    title: "BOQ & Tender Support",
    desc: "Detailed quantities, cost estimation, tender docs & value engineering.",
    color: "bg-sand-100 text-sand-700",
  },
  {
    icon: Sparkles,
    title: "Specialized Solutions",
    desc: "GRC/GRP elements, custom façades, landscape & sustainable design.",
    color: "bg-forest-100 text-forest-700",
  },
];

// SAFE delays (NO Tailwind purge issues)
const delayClasses = ["reveal-delay-1", "reveal-delay-2", "reveal-delay-3", "reveal-delay-4"];

export default function Services() {
  return (
    <section id="services" className="bg-cream py-20 lg:py-36">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* HEADER */}
        <div className="mb-14 lg:mb-16 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
          <div>
            <p className="reveal text-xs font-mono tracking-[0.25em] text-wood-500 uppercase mb-4">What We Do</p>

            <h2 className="reveal reveal-delay-1 font-display text-3xl sm:text-5xl lg:text-6xl font-light text-wood-900 leading-tight">
              End-to-end <span className="italic">solutions</span>
              <br />
              under one roof.
            </h2>
          </div>

          <p className="reveal reveal-delay-2 text-wood-500 text-sm leading-relaxed max-w-xs sm:text-right">
            Nine service areas, one accountable team — from first sketch to final handover.
          </p>
        </div>

        {/* GRID */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => {
            const delay = delayClasses[i % 4];

            return (
              <div
                key={s.title}
                className={`
                  reveal ${delay}
                  group
                  bg-parchment
                  hover:bg-wood-800
                  rounded-2xl
                  p-6 lg:p-7
                  transition-all duration-300
                  hover:-translate-y-1
                  cursor-default
                `}
              >
                {/* ICON */}
                <div
                  className={`
                    w-11 h-11 rounded-xl flex items-center justify-center mb-5
                    ${s.color}
                    group-hover:bg-wood-700
                    transition-colors duration-300
                  `}
                >
                  <s.icon size={20} className="group-hover:text-sand-200 transition-colors duration-300" />
                </div>

                {/* TITLE */}
                <h3 className="font-display text-lg lg:text-xl font-medium text-wood-900 group-hover:text-cream mb-2 transition-colors">
                  {s.title}
                </h3>

                {/* DESC */}
                <p className="text-wood-500 group-hover:text-wood-200 text-sm leading-relaxed transition-colors">
                  {s.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
