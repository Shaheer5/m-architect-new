"use client";
import { Mail, Phone, MapPin, Globe } from "lucide-react";

const info = [
  { icon: MapPin, label: "Location", value: "Pakistan (Nationwide) · International" },
  { icon: Mail, label: "Email", value: "info@m-architect.com" },
  { icon: Phone, label: "Phone", value: "+92 300 000 0000" },
  { icon: Globe, label: "Website", value: "www.m-architect.com" },
];

export default function Contact() {
  return (
    <section id="contact" className="bg-parchment py-20 sm:py-24 lg:py-36">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          {/* LEFT */}
          <div>
            <p className="reveal text-xs font-mono tracking-[0.25em] text-wood-500 uppercase mb-5 sm:mb-6">
              Get In Touch
            </p>

            <h2 className="reveal reveal-delay-1 font-display text-3xl sm:text-4xl lg:text-6xl font-light text-wood-900 leading-tight mb-6 sm:mb-8">
              Let&apos;s bring your <span className="italic">vision</span>
              <br />
              to life.
            </h2>

            <p className="reveal reveal-delay-2 text-wood-600 text-sm sm:text-base leading-relaxed max-w-sm mb-10 sm:mb-12">
              Whether you have a detailed brief or just an idea — reach out and let&apos;s explore what&apos;s possible
              together.
            </p>

            {/* CONTACT INFO */}
            <div className="flex flex-col gap-5 sm:gap-6">
              {info.map((item, i) => (
                <div key={item.label} className={`reveal reveal-delay-${i + 2} flex items-center gap-3 sm:gap-4`}>
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-wood-100 flex items-center justify-center shrink-0">
                    <item.icon size={16} className="text-wood-600" />
                  </div>

                  <div>
                    <div className="text-[10px] sm:text-xs font-mono text-wood-400 tracking-wider mb-0.5">
                      {item.label}
                    </div>
                    <div className="text-wood-800 text-sm font-medium wrap-break-words">{item.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT FORM */}
          <div className="reveal reveal-delay-2">
            <div className="bg-wood-800 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 shadow-xl">
              <h3 className="font-display text-xl sm:text-2xl text-cream mb-6 sm:mb-8 font-light">Send a Message</h3>

              <form className="flex flex-col gap-4 sm:gap-5" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                  <div>
                    <label className="text-xs font-mono text-wood-400 tracking-wider mb-2 block">Full Name</label>
                    <input
                      type="text"
                      placeholder="Your name"
                      className="w-full bg-wood-700/60 border border-wood-600 rounded-lg sm:rounded-xl px-3 sm:px-4 py-3 text-cream placeholder-wood-400 text-sm focus:outline-none focus:border-sand-400 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-mono text-wood-400 tracking-wider mb-2 block">Email</label>
                    <input
                      type="email"
                      placeholder="your@email.com"
                      className="w-full bg-wood-700/60 border border-wood-600 rounded-lg sm:rounded-xl px-3 sm:px-4 py-3 text-cream placeholder-wood-400 text-sm focus:outline-none focus:border-sand-400 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-mono text-wood-400 tracking-wider mb-2 block">Project Type</label>
                  <select className="w-full bg-wood-700/60 border border-wood-600 rounded-lg sm:rounded-xl px-3 sm:px-4 py-3 text-cream text-sm focus:outline-none focus:border-sand-400 transition-colors appearance-none">
                    <option value="" className="bg-wood-800">
                      Select service…
                    </option>
                    <option value="arch" className="bg-wood-800">
                      Architectural Design
                    </option>
                    <option value="interior" className="bg-wood-800">
                      Interior Design
                    </option>
                    <option value="db" className="bg-wood-800">
                      Design & Build
                    </option>
                    <option value="viz" className="bg-wood-800">
                      3D Visualization
                    </option>
                    <option value="pm" className="bg-wood-800">
                      Project Management
                    </option>
                    <option value="reno" className="bg-wood-800">
                      Renovation
                    </option>
                    <option value="other" className="bg-wood-800">
                      Other
                    </option>
                  </select>
                </div>

                <div>
                  <label className="text-xs font-mono text-wood-400 tracking-wider mb-2 block">Message</label>
                  <textarea
                    rows={5}
                    placeholder="Tell us about your project…"
                    className="w-full bg-wood-700/60 border border-wood-600 rounded-lg sm:rounded-xl px-3 sm:px-4 py-3 text-cream placeholder-wood-400 text-sm focus:outline-none focus:border-sand-400 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 bg-sand-400 hover:bg-sand-300 text-wood-950 font-medium text-sm rounded-xl transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
