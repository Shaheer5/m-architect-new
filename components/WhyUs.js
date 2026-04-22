import { Shield, Award, Cpu, Clock, Eye, Heart } from "lucide-react";

const values = [
  { icon: Shield, label: "Integrity", desc: "Honest, transparent practices at every stage." },
  { icon: Award, label: "Excellence", desc: "High standards in design and on-site execution." },
  { icon: Cpu, label: "Innovation", desc: "Practical modern solutions for real-world challenges." },
  { icon: Clock, label: "Reliability", desc: "Committed to timelines and budget discipline." },
  { icon: Eye, label: "Clarity", desc: "Transparent communication throughout the project." },
  { icon: Heart, label: "Client Trust", desc: "Long-term relationships built on results." },
];

const reasons = [
  "Design & Build under one roof",
  "Experienced multidisciplinary team",
  "Cost-effective & buildable solutions",
  "Strong site execution capability",
  "Nationwide & international reach",
  "Value engineering & cost control",
];

export default function WhyUs() {
  return (
    <section id="why-us" className="bg-cream py-20 lg:py-36">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="text-center mb-14 lg:mb-20">
          <p className="reveal text-xs font-mono tracking-[0.25em] text-wood-500 uppercase mb-4">Why M-Architect</p>

          <h2 className="reveal reveal-delay-1 font-display text-3xl sm:text-5xl lg:text-6xl font-light text-wood-900 leading-tight">
            One team. One vision. <span className="italic">Zero gaps.</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-14 lg:gap-24 items-start">
          {/* LEFT */}
          <div className="reveal reveal-delay-1">
            <h3 className="font-display text-xl sm:text-2xl text-wood-800 mb-8 font-light">What sets us apart</h3>

            <ul className="flex flex-col gap-5">
              {reasons.map((r, i) => (
                <li key={r} className="flex items-center gap-4 group">
                  <span className="font-mono text-xs text-wood-400 w-6 shrink-0">{String(i + 1).padStart(2, "0")}</span>

                  <div className="h-px flex-1 bg-wood-200 group-hover:bg-wood-400 transition-colors" />

                  <span className="text-wood-800 text-sm sm:text-base font-medium">{r}</span>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <div className="mt-10 lg:mt-12 bg-wood-800 rounded-2xl p-6 sm:p-8 text-cream">
              <div className="font-display text-2xl sm:text-3xl font-light mb-3">Ready to build?</div>

              <p className="text-wood-300 text-sm leading-relaxed mb-6">
                We don't just design buildings — we deliver solutions. Let's talk about your project.
              </p>

              <a
                href="#contact"
                className="inline-block px-6 py-3 bg-sand-400 hover:bg-sand-300 text-wood-950 text-sm font-medium rounded-full transition-colors"
              >
                Start a Conversation
              </a>
            </div>
          </div>

          {/* RIGHT */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
            {values.map((v, i) => (
              <div
                key={v.label}
                className={`reveal reveal-delay-${(i % 4) + 1} bg-parchment rounded-2xl p-6 sm:p-7 hover:bg-wood-50 transition-colors`}
              >
                <div className="w-10 h-10 rounded-xl bg-wood-100 flex items-center justify-center mb-4">
                  <v.icon size={18} className="text-wood-600" />
                </div>

                <div className="font-display text-lg sm:text-xl text-wood-900 mb-1">{v.label}</div>

                <p className="text-wood-500 text-xs sm:text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
