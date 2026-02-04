"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Loader() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // Hide quickly (perceived performance)
    const timer = setTimeout(() => {
      setVisible(false);
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      className="
        fixed inset-0 z-[9999]
        flex flex-col items-center justify-center
        bg-white pointer-events-none
        will-change-transform
      "
    >
      <Image
        src="/assets/logo/TMG-Global-Services-LLC.png"
        alt="Logo"
        width={140}
        height={140}
        priority
        className="object-contain mb-8 animate-pulse"
      />

      <div className="relative flex items-center justify-center">
        {[...Array(4)].map((_, i) => (
          <div
            key={i}
            className="relative w-8 h-8 mx-2 rounded-full border-2 border-[#972044] animate-circle"
            style={{ animationDelay: `${i * 0.25}s` }}
          >
            <div
              className="absolute inset-0 m-auto w-3 h-3 rounded-full bg-[#972044] animate-dot"
              style={{ animationDelay: `${i * 0.25}s` }}
            />
            <div
              className="absolute inset-0 m-auto w-6 h-6 rounded-full animate-outline"
              style={{ animationDelay: `${0.75 + i * 0.25}s` }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
