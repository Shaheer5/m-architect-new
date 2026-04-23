"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { label: "About", href: "#why-us" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);

    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`
        fixed top-0 left-0 right-0 z-50
        transition-all duration-700 ease-out
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-6"}
        ${
          scrolled
            ? "bg-cream/80 backdrop-blur-xl shadow-sm border-b border-wood-200/40"
            : "bg-white/60 backdrop-blur-md"
        }
      `}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 h-16 sm:h-18 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex flex-col leading-none group">
          <span className="font-display text-xl sm:text-2xl font-semibold text-wood-800 tracking-wide">
            M-Architect
          </span>
          <span className="text-[9px] sm:text-[10px] font-mono tracking-[0.25em] text-wood-500 uppercase mt-0.5">
            Solution Providers
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8">
          {links.map((l, i) => (
            <a
              key={l.href}
              href={l.href}
              className={`
                relative text-sm font-medium text-wood-700 hover:text-wood-950
                transition-all duration-300
                opacity-0 animate-[fadeIn_0.6s_ease_forwards]
              `}
              style={{ animationDelay: `${i * 0.08}s` }}
            >
              {l.label}
              <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-wood-500 group-hover:w-full transition-all duration-300" />
            </a>
          ))}

          <a
            href="#contact"
            className="
              ml-3 lg:ml-4 px-4 lg:px-5 py-2.5
              bg-wood-700 text-cream text-sm font-medium
              rounded-full hover:bg-wood-800
              transition-all duration-300
              shadow-sm hover:shadow-md
            "
          >
            Get a Quote
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 text-wood-700 hover:text-wood-950 transition-colors"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`
          md:hidden overflow-hidden transition-all duration-500 ease-out
          bg-cream/40 backdrop-blur-md border-t border-wood-200/50
          ${open ? "max-h-100 opacity-100 py-6" : "max-h-0 opacity-0 py-0"}
        `}
      >
        <div className="px-6 flex flex-col gap-5">
          {links.map((l, i) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="
                text-base font-medium text-wood-800
                hover:text-wood-950 transition-colors
                opacity-0 animate-[fadeIn_0.4s_ease_forwards]
              "
              style={{ animationDelay: `${i * 0.05}s` }}
            >
              {l.label}
            </a>
          ))}

          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="
              mt-2 px-5 py-3 bg-wood-700 text-cream
              text-sm font-medium rounded-full text-center
              hover:bg-wood-800 transition-colors
            "
          >
            Get a Quote
          </a>
        </div>
      </div>
    </header>
  );
}
