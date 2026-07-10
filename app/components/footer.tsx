"use client";

import * as React from "react";
import { Mail, ArrowUpRight } from "lucide-react";

// lucide-react removed brand/logo icons (Facebook, Instagram, YouTube, etc.)
// in its v1.0 release, so these are small hand-rolled outline icons kept
// visually consistent with the rest of the lucide set (same stroke style).
function Instagram({ size = 17, strokeWidth = 1.75 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function Youtube({ size = 17, strokeWidth = 1.75 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 8.6c0-1.9-1.4-3.4-3.2-3.6C16 4.7 12 4.7 12 4.7s-4 0-6.8.3C3.4 5.2 2 6.7 2 8.6v6.8c0 1.9 1.4 3.4 3.2 3.6 2.8.3 6.8.3 6.8.3s4 0 6.8-.3c1.8-.2 3.2-1.7 3.2-3.6V8.6Z" />
      <path d="M10 9.5v5l4.5-2.5-4.5-2.5Z" fill="currentColor" stroke="none" />
    </svg>
  );
}

function Facebook({ size = 17, strokeWidth = 1.75 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 3h-2a4 4 0 0 0-4 4v3H7v4h2v7h4v-7h3l1-4h-4V7a1 1 0 0 1 1-1h3V3Z" />
    </svg>
  );
}

const legends = [
  { name: "3.0 CSL", year: "1971" },
  { name: "M1", year: "1978" },
  { name: "M3 E30", year: "1986" },
  { name: "Z8", year: "1999" },
  { name: "2002 Turbo", year: "1973" },
  { name: "507", year: "1956" },
];

const explore = [
  { label: "Home", href: "#" },
  { label: "The Models", href: "#" },
  { label: "Heritage", href: "#" },
  { label: "Archive", href: "#" },
  { label: "Visit Showroom", href: "#" },
  { label: "Contact", href: "#" },
];

const socials = [
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Youtube, href: "#", label: "YouTube" },
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Mail, href: "#", label: "Email" },
];

export default function Footer() {
  return (
    <footer className="relative w-full bg-[#0a0a0a] text-neutral-300">
      {/* signature M-stripe — the one recurring brand mark across the site */}
      <div className="h-[3px] w-full flex">
        <div className="flex-1 bg-[#1b3f8b]" />
        <div className="flex-1 bg-[#5a2d81]" />
        <div className="flex-1 bg-[#e2231a]" />
      </div>

      <div className="mx-auto max-w-7xl px-8 md:px-16 pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-4">
            <h2 className="text-white text-3xl font-bold tracking-tight">
              BMW <span className="text-[#e2231a]">LEGENDS</span>
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-neutral-400 max-w-xs">
              Six decades of icons, one road. A living archive of the cars
              that defined what driving is supposed to feel like.
            </p>

            <div className="mt-6 flex items-center gap-3">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="h-10 w-10 rounded-full border border-white/15 flex items-center justify-center
                             text-neutral-400 hover:text-white hover:border-white/40 transition-colors duration-300"
                >
                  <Icon size={17} strokeWidth={1.75} />
                </a>
              ))}
            </div>
          </div>

          {/* The Legends */}
          <div className="md:col-span-4">
            <h3 className="text-xs font-semibold tracking-[0.2em] text-neutral-500 uppercase mb-5">
              The Legends
            </h3>
            <ul className="space-y-3">
              {legends.map((car) => (
                <li key={car.name}>
                  <a
                    href="#"
                    className="group flex items-baseline justify-between text-sm text-neutral-300 hover:text-white transition-colors duration-200"
                  >
                    <span className="relative">
                      {car.name}
                      <span className="absolute left-0 -bottom-0.5 h-px w-0 bg-[#e2231a] transition-all duration-300 group-hover:w-full" />
                    </span>
                    <span className="text-neutral-600 group-hover:text-neutral-400 text-xs tracking-wide">
                      {car.year}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Explore */}
          <div className="md:col-span-2">
            <h3 className="text-xs font-semibold tracking-[0.2em] text-neutral-500 uppercase mb-5">
              Explore
            </h3>
            <ul className="space-y-3">
              {explore.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-sm text-neutral-300 hover:text-white transition-colors duration-200"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Visit / CTA */}
          <div className="md:col-span-2">
            <h3 className="text-xs font-semibold tracking-[0.2em] text-neutral-500 uppercase mb-5">
              Showroom
            </h3>
            <p className="text-sm text-neutral-400 leading-relaxed">
              Open by appointment.
              <br />
              Munich &amp; touring.
            </p>
            <a
              href="#"
              className="mt-4 inline-flex items-center gap-1 text-sm text-white group"
            >
              Book a visit
              <ArrowUpRight
                size={15}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-6 border-t border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="text-xs text-neutral-500">
            © {new Date().getFullYear()} BMW Legends. An independent
            enthusiast showcase — not affiliated with or endorsed by BMW AG.
          </p>
          <div className="flex items-center gap-6 text-xs text-neutral-500">
            <a href="#" className="hover:text-neutral-300 transition-colors">
              Privacy
            </a>
            <a href="#" className="hover:text-neutral-300 transition-colors">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
