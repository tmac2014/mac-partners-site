"use client";

import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-bg/90 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="flex items-baseline gap-2.5">
            <span className="font-[family-name:var(--font-outfit)] text-2xl font-extrabold tracking-tight text-primary">
              MAC
            </span>
            <span className="font-[family-name:var(--font-outfit)] text-sm font-bold tracking-[0.25em] text-white">
              PARTNERS
            </span>
          </a>
          <a
            href="https://link.macinsurance.org/widget/booking/s4Z67SgUiYKhJhkxZF3e"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-bg transition-all hover:brightness-110 hover:shadow-[0_0_20px_rgba(46,196,165,0.3)]"
          >
            Apply Now
          </a>
        </div>
      </div>
    </nav>
  );
}
