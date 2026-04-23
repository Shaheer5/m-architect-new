"use client";

import { Mail, Phone, MapPin, Globe, Upload, X, ImageIcon } from "lucide-react";
import { useState, useRef, useCallback } from "react";

const info = [
  { icon: MapPin, label: "Location", value: "Saudi Arabia · Pakistan · International" },
  { icon: Mail, label: "Email", value: "info@m-architectpvt.com" },
  { icon: Phone, label: "Phone", value: "+966 50 569 6040" },
  { icon: Globe, label: "Website", value: "www.m-architectpvt.com" },
];

export default function Contact() {
  const [files, setFiles] = useState([]);
  const [dragging, setDragging] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const inputRef = useRef(null);

  const addFiles = useCallback((incoming) => {
    if (!incoming) return;
    const accepted = Array.from(incoming).filter((f) => f.type.startsWith("image/"));
    const mapped = accepted.map((f) => ({
      file: f,
      preview: URL.createObjectURL(f),
      id: `${f.name}-${Date.now()}-${Math.random()}`,
    }));
    setFiles((prev) => [...prev, ...mapped].slice(0, 8));
  }, []);

  const removeFile = (id) => {
    setFiles((prev) => {
      const f = prev.find((x) => x.id === id);
      if (f) URL.revokeObjectURL(f.preview);
      return prev.filter((x) => x.id !== id);
    });
  };

  const onDrop = (e) => {
    e.preventDefault();
    setDragging(false);
    addFiles(e.dataTransfer.files);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);
    files.forEach((f) => formData.append("sitePictures", f.file));

    try {
      // Your API route
      // await fetch("/api/contact", { method: "POST", body: formData });
      await new Promise((r) => setTimeout(r, 1800)); // ← remove this line when wired up
      setSubmitted(true);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="bg-parchment py-20 sm:py-24 lg:py-36">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          {/* ── LEFT ── */}
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

          {/* ── RIGHT FORM ── */}
          <div className="reveal reveal-delay-2">
            <div className="bg-wood-800 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 shadow-xl">
              <h3 className="font-display text-xl sm:text-2xl text-cream mb-6 sm:mb-8 font-light">Send a Message</h3>

              {submitted ? (
                /* ── SUCCESS STATE ── */
                <div className="flex flex-col items-center justify-center py-16 text-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-forest-700/40 flex items-center justify-center">
                    <Mail size={24} className="text-forest-300" />
                  </div>
                  <div className="font-display text-2xl text-cream font-light">Message Sent!</div>
                  <p className="text-wood-300 text-sm leading-relaxed max-w-xs">
                    Thank you — we&apos;ll review your project details and get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFiles([]);
                    }}
                    className="mt-4 px-6 py-2.5 border border-wood-500 text-wood-300 text-sm rounded-full hover:border-sand-400 hover:text-sand-300 transition-colors"
                  >
                    Send Another
                  </button>
                </div>
              ) : (
                <form className="flex flex-col gap-4 sm:gap-5" onSubmit={handleSubmit}>
                  {/* Name + Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                    <div>
                      <label className="text-xs font-mono text-wood-400 tracking-wider mb-2 block">Full Name</label>
                      <input
                        name="name"
                        type="text"
                        required
                        placeholder="Your name"
                        className="w-full bg-wood-700/60 border border-wood-600 rounded-lg sm:rounded-xl px-3 sm:px-4 py-3 text-cream placeholder-wood-400 text-sm focus:outline-none focus:border-sand-400 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-mono text-wood-400 tracking-wider mb-2 block">Email</label>
                      <input
                        name="email"
                        type="email"
                        required
                        placeholder="your@email.com"
                        className="w-full bg-wood-700/60 border border-wood-600 rounded-lg sm:rounded-xl px-3 sm:px-4 py-3 text-cream placeholder-wood-400 text-sm focus:outline-none focus:border-sand-400 transition-colors"
                      />
                    </div>
                  </div>

                  {/* Phone + Service */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                    <div>
                      <label className="text-xs font-mono text-wood-400 tracking-wider mb-2 block">
                        Phone / WhatsApp
                      </label>
                      <input
                        name="phone"
                        type="tel"
                        placeholder="+966 50 000 0000"
                        className="w-full bg-wood-700/60 border border-wood-600 rounded-lg sm:rounded-xl px-3 sm:px-4 py-3 text-cream placeholder-wood-400 text-sm focus:outline-none focus:border-sand-400 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-mono text-wood-400 tracking-wider mb-2 block">Project Type</label>
                      <select
                        name="service"
                        className="w-full bg-wood-700/60 border border-wood-600 rounded-lg sm:rounded-xl px-3 sm:px-4 py-3 text-cream text-sm focus:outline-none focus:border-sand-400 transition-colors appearance-none"
                      >
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
                  </div>

                  {/* Message */}
                  <div>
                    <label className="text-xs font-mono text-wood-400 tracking-wider mb-2 block">Project Brief</label>
                    <textarea
                      name="message"
                      rows={4}
                      placeholder="Tell us about your project…"
                      className="w-full bg-wood-700/60 border border-wood-600 rounded-lg sm:rounded-xl px-3 sm:px-4 py-3 text-cream placeholder-wood-400 text-sm focus:outline-none focus:border-sand-400 transition-colors resize-none"
                    />
                  </div>

                  {/* ── FILE UPLOAD ── */}
                  <div>
                    <label className="text-xs font-mono text-wood-400 tracking-wider mb-2 flex items-center gap-2">
                      Site Pictures
                      <span className="text-wood-600 normal-case tracking-normal font-sans">
                        — optional · max 8 images
                      </span>
                    </label>

                    {/* Drop zone */}
                    <div
                      onClick={() => inputRef.current?.click()}
                      onDragOver={(e) => {
                        e.preventDefault();
                        setDragging(true);
                      }}
                      onDragLeave={() => setDragging(false)}
                      onDrop={onDrop}
                      className={`
                        border-2 border-dashed rounded-xl px-4 py-7 text-center cursor-pointer
                        transition-all duration-200 select-none
                        ${
                          dragging
                            ? "border-sand-400 bg-wood-600/50 scale-[1.01]"
                            : "border-wood-600 hover:border-wood-400 bg-wood-700/30 hover:bg-wood-700/50"
                        }
                      `}
                    >
                      <input
                        ref={inputRef}
                        type="file"
                        accept="image/*"
                        multiple
                        className="hidden"
                        onChange={(e) => addFiles(e.target.files)}
                      />
                      <Upload
                        size={22}
                        className={`mx-auto mb-2 transition-colors ${dragging ? "text-sand-300" : "text-wood-400"}`}
                      />
                      <p
                        className={`text-sm font-medium transition-colors ${dragging ? "text-sand-300" : "text-wood-300"}`}
                      >
                        {dragging ? "Drop your images here" : "Click to upload or drag & drop"}
                      </p>
                      <p className="text-xs text-wood-500 mt-1">JPG · PNG · WEBP</p>
                    </div>

                    {/* Preview grid */}
                    {files.length > 0 && (
                      <div className="mt-3 grid grid-cols-4 gap-2">
                        {files.map((f) => (
                          <div
                            key={f.id}
                            className="relative aspect-square rounded-lg overflow-hidden group border border-wood-600"
                          >
                            <img src={f.preview} alt={f.file.name} className="w-full h-full object-cover" />
                            {/* Remove */}
                            <button
                              type="button"
                              onClick={() => removeFile(f.id)}
                              className="absolute top-1 right-1 w-5 h-5 rounded-full bg-wood-950/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-red-900"
                            >
                              <X size={10} className="text-cream" />
                            </button>
                            {/* Name */}
                            <div className="absolute inset-x-0 bottom-0 bg-wood-950/70 px-1 py-0.5 opacity-0 group-hover:opacity-100 transition-opacity">
                              <p className="text-[9px] text-wood-300 truncate">{f.file.name}</p>
                            </div>
                          </div>
                        ))}
                        {/* Add-more slot */}
                        {files.length < 8 && (
                          <button
                            type="button"
                            onClick={() => inputRef.current?.click()}
                            className="aspect-square rounded-lg border-2 border-dashed border-wood-600 hover:border-wood-400 flex flex-col items-center justify-center gap-1 transition-colors"
                          >
                            <ImageIcon size={14} className="text-wood-500" />
                            <span className="text-[10px] text-wood-500">Add</span>
                          </button>
                        )}
                      </div>
                    )}
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full py-3.5 bg-sand-400 hover:bg-sand-300 disabled:opacity-60 disabled:cursor-not-allowed text-wood-950 font-medium text-sm rounded-xl transition-colors flex items-center justify-center gap-2 mt-1"
                  >
                    {submitting ? (
                      <>
                        <svg className="animate-spin h-4 w-4 text-wood-800" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                        </svg>
                        Sending…
                      </>
                    ) : (
                      "Send Message"
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
