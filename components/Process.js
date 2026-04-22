import { MessageSquare, Lightbulb, Monitor, FileStack, Calculator, HardHat, CheckCircle2 } from "lucide-react";

import ProcessLine from "./ProcessLine";

const steps = [
  { num: "01", icon: MessageSquare, title: "Client Brief", desc: "Understanding your vision, needs, and feasibility." },
  {
    num: "02",
    icon: Lightbulb,
    title: "Concept Design",
    desc: "Schematic ideas, space planning, and design direction.",
  },
  {
    num: "03",
    icon: Monitor,
    title: "3D Visualization",
    desc: "Realistic renders for design approval before commitment.",
  },
  {
    num: "04",
    icon: FileStack,
    title: "Detailed Drawings",
    desc: "Construction documents, specs, and authority submissions.",
  },
  {
    num: "05",
    icon: Calculator,
    title: "Cost & Value Engineering",
    desc: "BOQ, budgets, and optimizing every rupee invested.",
  },
  {
    num: "06",
    icon: HardHat,
    title: "Site Execution",
    desc: "Civil, architectural, interior, and MEP works coordinated.",
  },
  { num: "07", icon: CheckCircle2, title: "Handover", desc: "Quality control, snagging, and final project delivery." },
];

// SAFE static delays (NO dynamic Tailwind issues)
const delayClasses = ["reveal-delay-1", "reveal-delay-2", "reveal-delay-3", "reveal-delay-4"];

export default function Process() {
  return (
    <section id="process" className="bg-wood-950 py-20 lg:py-36 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* HEADER */}
        <div className="text-center mb-14 lg:mb-20">
          <p className="reveal text-xs font-mono tracking-[0.25em] text-wood-400 uppercase mb-4">How We Work</p>

          <h2 className="reveal reveal-delay-1 font-display text-3xl sm:text-5xl lg:text-6xl font-light text-cream leading-tight">
            Seven steps to <span className="italic text-sand-300">built reality.</span>
          </h2>
        </div>

        {/* STEPS WRAPPER */}
        <div className="relative">
          {/* Desktop connecting line */}
          <ProcessLine />

          {/* MOBILE SCROLL + DESKTOP GRID */}
          <div className="flex lg:grid gap-6 lg:gap-4 lg:grid-cols-7 overflow-x-auto overflow-y-hidden lg:overflow-visible pb-6 lg:pb-0 scroll-smooth no-scrollbar">
            {steps.map((step, i) => {
              const delay = delayClasses[i % 4];

              return (
                <div
                  key={step.num}
                  className={`
                    ${delay}
                    reveal
                    shrink-0 lg:shrink
                    w-40 sm:w-45 lg:w-auto
                    flex flex-col items-center text-center
                    relative
                  `}
                >
                  {/* ICON */}
                  <div
                    className="
                    relative z-10 mb-4 lg:mb-5
                    w-14 h-14 lg:w-18 lg:h-18
                    rounded-full
                    bg-wood-800 border border-wood-600
                    flex items-center justify-center
                    transition-colors
                  "
                  >
                    <step.icon size={20} className="lg:size-5.5 text-sand-300" />
                  </div>

                  {/* NUMBER */}
                  <div className="font-mono text-[10px] lg:text-xs text-wood-500 mb-2">{step.num}</div>

                  {/* TITLE */}
                  <h3 className="font-display text-sm lg:text-lg font-medium text-cream mb-1">{step.title}</h3>

                  {/* DESC */}
                  <p className="text-wood-400 text-[10px] sm:text-xs leading-relaxed">{step.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
