"use client";
import { useEffect, useState } from "react";

export default function ProcessLine() {
  const [active, setActive] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setActive(true);
    }, 1200); // small delay for effect

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="hidden lg:block absolute top-9 left-0 right-0 h-px overflow-hidden">
      <div
        style={{
          height: "1px",
          backgroundColor: "#73462c", // wood-700
          transform: active ? "scaleX(1)" : "scaleX(0)",
          transformOrigin: "left",
          transition: "transform 1.2s ease",
        }}
      />
    </div>
  );
}
