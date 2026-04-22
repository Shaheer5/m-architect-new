"use client";

const projects = [
  {
    img: "/images/hero-bg.webp",
    title: "Executive Office Suite",
    type: "Interior Design",
    location: "Lahore, Pakistan",
    span: "lg:col-span-2 lg:row-span-2",
  },
  {
    img: "/images/hero-bg.webp",
    title: "Residential Villa",
    type: "Architectural Design",
    location: "Islamabad",
  },
  {
    img: "/images/hero-bg.webp",
    title: "Boutique Hotel Lobby",
    type: "Design & Build",
    location: "Karachi",
  },
  {
    img: "/images/hero-bg.webp",
    title: "Commercial Complex",
    type: "Project Management",
    location: "Rawalpindi",
  },
  {
    img: "/images/hero-bg.webp",
    title: "Café & Retail Space",
    type: "Interior Fit-Out",
    location: "Lahore",
  },
];

const delays = ["reveal-delay-1", "reveal-delay-2", "reveal-delay-3"];

export default function Portfolio() {
  return (
    <section id="portfolio" className="bg-parchment py-20 lg:py-36">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* HEADER */}
        <div className="mb-12 lg:mb-16">
          <p className="reveal text-xs font-mono tracking-[0.25em] text-wood-500 uppercase mb-4">Our Work</p>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <h2 className="reveal reveal-delay-1 font-display text-3xl sm:text-5xl lg:text-6xl font-light text-wood-900 leading-tight">
              Projects that <span className="italic">speak</span>
              <br />
              for themselves.
            </h2>

            <a
              href="#contact"
              className="reveal reveal-delay-2 px-6 py-3 border border-wood-400 text-wood-700 text-sm rounded-full hover:bg-wood-700 hover:text-cream transition-colors"
            >
              View All Projects
            </a>
          </div>
        </div>

        {/* GRID */}
        <div
          className="
          grid gap-4
          sm:grid-cols-2
          lg:grid-cols-3
          auto-rows-[220px]
          lg:auto-rows-[260px]
        "
        >
          {projects.map((p, i) => (
            <div
              key={p.title}
              className={`reveal ${delays[i % 3]} relative rounded-2xl overflow-hidden group ${p.span || ""}`}
            >
              {/* IMAGE */}
              <img
                src={p.img}
                alt={p.title}
                className="
                  w-full h-full object-cover
                  transform group-hover:scale-105
                  transition-transform duration-700
                  will-change-transform
                "
                loading="lazy"
              />

              {/* OVERLAY */}
              <div
                className="
                absolute inset-0
                bg-linear-to-t from-wood-950/80 via-wood-950/20 to-transparent
                opacity-90
                group-hover:opacity-100
                transition-opacity duration-300
              "
              />

              {/* TEXT */}
              <div
                className="
                absolute bottom-0 left-0 right-0
                p-4 sm:p-6
                translate-y-1 group-hover:translate-y-0
                transition-transform duration-300
              "
              >
                <div className="text-xs font-mono tracking-widest text-sand-400 mb-1 uppercase">
                  {p.type} · {p.location}
                </div>
                <h3 className="font-display text-lg sm:text-xl text-cream">{p.title}</h3>
              </div>
            </div>
          ))}
        </div>

        {/* FOOTNOTE */}
        <p className="mt-8 text-center text-xs text-wood-400 font-mono">Selected architectural & interior projects</p>
      </div>
    </section>
  );
}
