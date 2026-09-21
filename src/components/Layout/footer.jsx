import React, { useState } from "react";
import { ChevronUp } from "lucide-react";

export default function Footer() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Desktop Footer */}
     <footer className="sticky bottom-0 z-40 hidden w-full border-t border-white/10 bg-[#050505] px-8 py-4 font-clash text-white md:block lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-medium">South Cult</h3>
              <p className="mt-0.5 text-[9px] text-white/30">
                South Indian stories, music & film.
              </p>
            </div>

            <nav className="flex gap-6">
              <a
                href="/"
                className="text-[9px] uppercase tracking-[0.15em] hover:text-white/60 transition"
              >
                Home
              </a>

              <a
                href="/label"
                className="text-[9px] uppercase tracking-[0.15em] hover:text-white/60 transition"
              >
                South Cult Label
              </a>

              <a
                href="/collab"
                className="text-[9px] uppercase tracking-[0.15em] hover:text-white/60 transition"
              >
                Collaboration
              </a>
            </nav>
          </div>

          <div className="mt-3 flex justify-between border-t border-white/5 pt-2.5">
            <p className="text-[8px] uppercase tracking-[0.2em] text-white/25">
              © {new Date().getFullYear()} South Cult
            </p>

            <p className="text-[8px] uppercase tracking-[0.2em] text-white/25">
              Made for stories worth telling.
            </p>
          </div>
        </div>
      </footer>

      {/* Mobile Collapsible Footer */}
      <div className="fixed bottom-0 left-0 z-50 w-full font-clash md:hidden">
        <button
          onClick={() => setOpen(!open)}
          className="flex w-full items-center justify-center border-t border-white/10 bg-[#050505] py-2.5 text-white"
        >
          <ChevronUp
            size={17}
            className={`transition-transform duration-300 ${
              open ? "rotate-180" : ""
            }`}
          />
        </button>

        <div
          className={`overflow-hidden bg-[#050505] transition-all duration-300 ${
            open ? "max-h-72" : "max-h-0"
          }`}
        >
          <div className="space-y-5 px-5 py-5 text-white">
            <div>
              <h3 className="text-lg font-medium">South Cult</h3>

              <p className="mt-1 text-[10px] text-white/30">
                South Indian stories, music & film.
              </p>
            </div>

            <nav className="flex flex-col gap-2.5">
              <a
                href="/"
                className="text-[10px] uppercase tracking-[0.15em]"
              >
                Home
              </a>

              <a
                href="/label"
                className="text-[10px] uppercase tracking-[0.15em]"
              >
                South Cult Label
              </a>

              <a
                href="/collab"
                className="text-[10px] uppercase tracking-[0.15em]"
              >
                Collaboration
              </a>
            </nav>

            <div className="border-t border-white/5 pt-3">
              <p className="text-[9px] uppercase tracking-[0.2em] text-white/25">
                © {new Date().getFullYear()} South Cult
              </p>

              <p className="mt-1.5 text-[9px] uppercase tracking-[0.2em] text-white/25">
                Made for stories worth telling.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}