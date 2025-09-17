"use client";
import { MouseIcon } from "@/common/icons";
import { useEffect, useState } from "react";

// utils/slowScroll.ts
export function slowScrollTo(targetY: number, duration = 1200) {
  const startY = window.scrollY;
  const diff = targetY - startY;
  let startTime: number | null = null;

  function step(timestamp: number) {
    if (!startTime) startTime = timestamp;
    const time = timestamp - startTime;
    const percent = Math.min(time / duration, 1);

    window.scrollTo(0, startY + diff * percent);

    if (time < duration) {
      requestAnimationFrame(step);
    }
  }

  requestAnimationFrame(step);
}

export default function ScrollMouse({ targetId }: { targetId: string }) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      // Hide mouse when scrolled past hero (say 150px)
      if (window.scrollY > 250) {
        setVisible(false);
      } else {
        setVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = () => {
    const el = document.getElementById(targetId);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY;
      slowScrollTo(top, 1000);
    }
    // Hide temporarily when clicked
    setVisible(false);
    setTimeout(() => setVisible(true), 1000); // reappear after 1s
  };

  return (
    <button
      className={`relative z-10 flex items-center justify-center mb-[30px] ${
        visible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-5 pointer-events-none"
      }`}
      onClick={handleClick}
    >
      <div className="cursor-pointer relative h-full w-fit flex items-center justify-center">
        {/* Mouse outline */}
        <MouseIcon />

        {/* Animated inner bar */}
        <div
          className="absolute left-1/2 -translate-x-1/2 
                 w-1 h-3 rounded-full bg-white 
                 animate-scrollBounce"
        ></div>
      </div>
    </button>
  );
}
