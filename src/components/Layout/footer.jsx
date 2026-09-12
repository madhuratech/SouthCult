
import React from "react";
import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full border-t border-white/10 bg-[#050505] px-5 py-8 font-clash text-white sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">

        {/* TOP */}
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">

          {/* BRAND */}
          <div>
            <h3 className="text-xl font-medium tracking-tight text-white">
              South Cult
            </h3>

            <p className="mt-1 text-[10px] text-white/30">
              South Indian stories, music & film.
            </p>
          </div>

          {/* LINKS */}
          <nav className="flex flex-wrap gap-x-6 gap-y-3">

            <a
              href="/"
              className="text-[10px] uppercase tracking-[0.15em] text-white transition-colors"
            >
              Home
            </a>

            <a
              href="/label"
              className="text-[10px] uppercase tracking-[0.15em] text-white transition-colors"
            >
              South Cult Label
            </a>

            <a
              href="/collab"
              className="text-[10px] uppercase tracking-[0.15em] text-white transition-colors"
            >
              Collaboration
            </a>

          </nav>
        </div>

        {/* BOTTOM */}
        <div className="mt-6 flex flex-col gap-2 border-t border-white/5 pt-4 sm:flex-row sm:items-center sm:justify-between">

          <p className="text-[9px] uppercase tracking-[0.2em] text-white/25">
            © {new Date().getFullYear()} South Cult
          </p>

          <p className="text-[9px] uppercase tracking-[0.2em] text-white/25">
            Made for stories worth telling.
          </p>

        </div>

      </div>
    </footer>
  );
}

