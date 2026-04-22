import { FaInstagram, FaLinkedin, FaFacebook } from "react-icons/fa";

const navLinks = [
  { label: "About", href: "#philosophy" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Contact", href: "#contact" },
];

const services = [
  "Architectural Design",
  "Interior Design",
  "Design & Build",
  "3D Visualization",
  "Project Management",
  "Renovation",
];

const socials = [
  { icon: FaInstagram, link: "#" },
  { icon: FaLinkedin, link: "#" },
  { icon: FaFacebook, link: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-wood-950 text-wood-300">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-10 pt-16 sm:pt-20 pb-10">
        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-12 mb-12 sm:mb-16">
          {/* BRAND */}
          <div className="lg:col-span-1">
            <div className="font-display text-2xl sm:text-3xl text-cream font-light mb-1">M-Architect</div>

            <div className="text-[10px] sm:text-xs font-mono tracking-[0.25em] text-wood-500 uppercase mb-5 sm:mb-6">
              Pvt. Ltd
            </div>

            <p className="text-wood-400 text-sm leading-relaxed mb-6 sm:mb-8 max-w-xs">
              Design &amp; Build Consultants. Pakistan &amp; International. Est. 2019.
            </p>

            {/* SOCIALS */}
            <div className="flex gap-3 sm:gap-4">
              {socials.map((s, i) => {
                const Icon = s.icon;
                return (
                  <a
                    key={i}
                    href={s.link}
                    className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-wood-700 flex items-center justify-center hover:bg-wood-700 hover:border-wood-500 transition-colors"
                  >
                    <Icon size={16} className="text-wood-400" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* NAVIGATION */}
          <div>
            <div className="text-[10px] sm:text-xs font-mono tracking-widest text-wood-500 uppercase mb-5 sm:mb-6">
              Navigation
            </div>

            <ul className="flex flex-col gap-2 sm:gap-3">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-sm text-wood-400 hover:text-cream transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* SERVICES */}
          <div>
            <div className="text-[10px] sm:text-xs font-mono tracking-widest text-wood-500 uppercase mb-5 sm:mb-6">
              Services
            </div>

            <ul className="flex flex-col gap-2 sm:gap-3">
              {services.map((s) => (
                <li key={s} className="text-sm text-wood-400 hover:text-cream transition-colors cursor-default">
                  {s}
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <div className="text-[10px] sm:text-xs font-mono tracking-widest text-wood-500 uppercase mb-5 sm:mb-6">
              Contact
            </div>

            <div className="flex flex-col gap-3 sm:gap-4 text-sm text-wood-400">
              <div>
                <div className="text-wood-600 text-xs mb-1">Email</div>
                <div className="wrap-break-words">info@m-architect.com</div>
              </div>

              <div>
                <div className="text-wood-600 text-xs mb-1">Phone</div>
                +92 300 000 0000
              </div>

              <div>
                <div className="text-wood-600 text-xs mb-1">Location</div>
                Pakistan · International
              </div>
            </div>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="border-t border-wood-800 pt-6 sm:pt-8 flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4 text-center sm:text-left">
          <p className="text-xs text-wood-600">
            © {new Date().getFullYear()} M-Architect (Private) Limited. All rights reserved.
          </p>

          <p className="text-xs text-wood-600 font-mono">Solution Providers</p>
        </div>
      </div>
    </footer>
  );
}
