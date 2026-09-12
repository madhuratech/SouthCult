import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowDown, Check } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function TransparentRevenue() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".revenue-header > *", {
        opacity: 0,
        y: 40,
        stagger: 0.15,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
      });

      gsap.from(".revenue-line", {
        scaleY: 0,
        transformOrigin: "top",
        duration: 1.4,
        ease: "power3.inOut",
        scrollTrigger: {
          trigger: ".revenue-flow",
          start: "top 70%",
        },
      });

      gsap.from(".revenue-item", {
        opacity: 0,
        x: -40,
        stagger: 0.25,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".revenue-flow",
          start: "top 65%",
        },
      });

      gsap.from(".revenue-final", {
        opacity: 0,
        y: 40,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".revenue-final",
          start: "top 80%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-[#050505] px-6 py-28 text-white sm:px-10 md:py-36 lg:px-20 font-clash"
    >
      {/* Subtle cinematic grain */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='180' height='180'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")",
        }}
      />

      <div className="relative mx-auto max-w-6xl">

        {/* Header */}
        <div className="revenue-header mb-28">

          <p className="mb-6 text-[10px] uppercase tracking-[0.45em] text-white/30">
            Transparent Revenue
          </p>

          <h2 className="max-w-5xl text-5xl font-light leading-[0.9] tracking-[-0.055em] sm:text-6xl md:text-7xl lg:text-[7rem]">
            Clear terms.
            <br />
            <span className="text-white/25">
              Shared success.
            </span>
          </h2>

          <p className="mt-10 max-w-xl text-sm font-light leading-relaxed text-white/40 sm:text-base">
            Every release has a clear agreement. Revenue generated from
            streaming and monetization is shared according to the signed
            collaboration.
          </p>
        </div>

        {/* Flow */}
        <div className="revenue-flow relative ml-2 border-l border-white/10 pl-10 sm:ml-8 sm:pl-16 md:ml-20">

          {/* Animated vertical line */}
          <div className="revenue-line absolute -left-px top-0 h-full w-px bg-white/30" />

          {/* Step 01 */}
          <RevenueItem
            number="01"
            title="Agreement"
            description="Every collaboration begins with clear terms agreed upon before the release."
          />

          {/* Step 02 */}
          <RevenueItem
            number="02"
            title="Release"
            description="The finished work is distributed and made available across the agreed platforms."
          />

          {/* Step 03 */}
          <RevenueItem
            number="03"
            title="Revenue"
            description="Streaming and monetization generate revenue that is shared according to the signed collaboration."
          />

        </div>

        {/* Final statement */}
        <div className="revenue-final mt-32 border-t border-white/10 pt-16">

          <div className="grid gap-10 md:grid-cols-[1fr_auto] md:items-end">

            <div>
              <p className="mb-5 text-[10px] uppercase tracking-[0.4em] text-white/25">
                The principle
              </p>

              <h3 className="max-w-3xl text-3xl font-light leading-tight tracking-[-0.03em] sm:text-4xl md:text-5xl">
                No fixed promises.
                <br />

                <span className="text-white/30">
                  No vague terms.
                </span>
              </h3>
            </div>

            <div className="flex items-center gap-3 text-xs text-white/30">
              <Check size={15} strokeWidth={1} />

              <span>
                Every collaboration is documented.
              </span>
            </div>

          </div>
        </div>

        {/* Bottom label */}
        <div className="mt-20 flex items-center justify-between border-t border-white/10 pt-6">

          <span className="text-[9px] uppercase tracking-[0.4em] text-white/20">
            South Cult
          </span>

          <span className="text-[9px] uppercase tracking-[0.4em] text-white/20">
            Transparency
          </span>

        </div>

      </div>
    </section>
  );
}


/* --------------------------------
   Revenue Item
--------------------------------- */

function RevenueItem({
  number,
  title,
  description,
}) {
  return (
    <div className="revenue-item relative pb-24 last:pb-0">

      {/* Timeline dot */}
      <div className="absolute -left-[59px] top-0 flex h-5 w-5 items-center justify-center rounded-full border border-white/30 bg-black sm:-left-[77px]">
        <div className="h-1.5 w-1.5 rounded-full bg-white/60" />
      </div>

      {/* Number */}
      <div className="mb-5 text-[9px] tracking-[0.4em] text-white/25">
        {number}
      </div>

      {/* Title */}
      <h3 className="text-4xl font-light tracking-[-0.04em] sm:text-5xl md:text-6xl">
        {title}
      </h3>

      {/* Description */}
      <p className="mt-6 max-w-xl text-sm font-light leading-relaxed text-white/35 sm:text-base">
        {description}
      </p>

      {/* Arrow */}
      {number !== "03" && (
        <ArrowDown
          size={17}
          strokeWidth={1}
          className="mt-10 text-white/20"
        />
      )}

    </div>
  );
}