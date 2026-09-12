import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, Check, X } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function TraditionalVsSouthCult() {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const traditionalRef = useRef(null);
  const southCultRef = useRef(null);
  const lineRef = useRef(null);
  const statementRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          toggleActions: "play none none reverse",
        },
      });

      tl.fromTo(
        titleRef.current,
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
        }
      )
        .fromTo(
          traditionalRef.current,
          {
            opacity: 0,
            x: -100,
          },
          {
            opacity: 1,
            x: 0,
            duration: 1,
            ease: "power3.out",
          },
          "-=0.5"
        )
        .fromTo(
          southCultRef.current,
          {
            opacity: 0,
            x: 100,
          },
          {
            opacity: 1,
            x: 0,
            duration: 1,
            ease: "power3.out",
          },
          "-=0.8"
        )
        .fromTo(
          lineRef.current,
          {
            scaleX: 0,
          },
          {
            scaleX: 1,
            duration: 0.8,
            ease: "power3.inOut",
          },
          "-=0.4"
        )
        .fromTo(
          statementRef.current,
          {
            opacity: 0,
            y: 30,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.3"
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden bg-[#050505] px-5 py-24 text-white sm:px-8 md:py-10 lg:px-16 font-clash"
    >
      {/* Cinematic grain */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 180 180' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='.8'/%3E%3C/svg%3E\")",
        }}
      />

      {/* Top cinematic line */}
      <div className="mx-auto mb-16 h-px w-full max-w-7xl bg-white/10" />

      <div className="relative mx-auto max-w-7xl">
        {/* Heading */}
        <div ref={titleRef} className="mb-16 max-w-3xl">
          <p className="mb-5 text-[10px] font-medium uppercase tracking-[0.4em] text-white/40 sm:text-xs">
            The South Cult Difference
          </p>

          <h2 className="text-4xl font-light leading-[0.95] tracking-[-0.04em] sm:text-5xl md:text-6xl lg:text-7xl">
            Two ways to
            <br />
            <span className="font-medium">build a release.</span>
          </h2>
        </div>

        {/* Cards */}
        <div className="grid gap-5 lg:grid-cols-2 lg:gap-8">
          {/* Traditional */}
          <div
            ref={traditionalRef}
            className="group relative min-h-[430px] overflow-hidden border border-white/10 bg-[#050505] p-7 sm:p-10 md:min-h-[470px]"
          >
            {/* Number */}
            <div className="absolute right-7 top-7 text-xs tracking-[0.3em] text-white/20">
              01
            </div>

            <div className="flex h-full flex-col">
              <div>
                <p className="mb-5 text-[10px] uppercase tracking-[0.3em] text-white/30">
                  Traditional Model
                </p>

                <h3 className="text-3xl font-light tracking-[-0.03em] sm:text-4xl">
                  Traditional
                  <br />
                  Studio
                </h3>
              </div>

              {/* Divider */}
              <div className="my-10 h-px w-full bg-white/10" />

              <div className="space-y-7">
                <Feature
                  icon={<X size={15} strokeWidth={1.5} />}
                  text="Pay upfront"
                />

                <Feature
                  icon={<X size={15} strokeWidth={1.5} />}
                  text="Deliver project"
                />

                <Feature
                  icon={<X size={15} strokeWidth={1.5} />}
                  text="Relationship ends"
                  muted
                />
              </div>

              {/* Bottom text */}
              <div className="mt-auto pt-10">
                <p className="max-w-sm text-sm leading-relaxed text-white/30">
                  A transaction. The project is delivered, the payment is
                  complete, and the relationship ends.
                </p>
              </div>
            </div>
          </div>

          {/* South Cult */}
          <div
            ref={southCultRef}
            className="group relative min-h-[430px] overflow-hidden border border-white/30 bg-white/[0.04] p-7 sm:p-10 md:min-h-[470px]"
          >
            {/* Cinematic light */}
            <div className="pointer-events-none absolute -right-32 -top-32 h-72 w-72 rounded-full bg-white/[0.035] blur-3xl transition-all duration-700 group-hover:bg-white/[0.07]" />

            {/* Number */}
            <div className="absolute right-7 top-7 text-xs tracking-[0.3em] text-white/40">
              02
            </div>

            <div className="relative flex h-full flex-col">
              <div>
                <p className="mb-5 text-[10px] uppercase tracking-[0.3em] text-white/50">
                  South Cult Model
                </p>

                <h3 className="text-3xl font-light tracking-[-0.03em] sm:text-4xl">
                  South Cult
                  <br />
                  <span className="font-medium">Label</span>
                </h3>
              </div>

              {/* Divider */}
              <div className="my-10 h-px w-full bg-white/15" />

              <div className="space-y-7">
                <Feature
                  icon={<Check size={15} strokeWidth={1.5} />}
                  text="We invest"
                />

                <Feature
                  icon={<Check size={15} strokeWidth={1.5} />}
                  text="We release together"
                />

                <Feature
                  icon={<Check size={15} strokeWidth={1.5} />}
                  text="Revenue is shared"
                />

                <Feature
                  icon={<Check size={15} strokeWidth={1.5} />}
                  text="Long-term partnership"
                  strong
                />
              </div>

              <div className="mt-auto pt-10">
                <p className="max-w-sm text-sm leading-relaxed text-white/55">
                  Not just a service. We put our resources behind the work and
                  grow with the artist.
                </p>
              </div>
            </div>
          </div>
        </div>

       
     
      </div>

      
    </section>
  );
}

function Feature({ icon, text, muted, strong }) {
  return (
    <div
      className={`flex items-center gap-4 ${
        muted ? "text-white/30" : "text-white/75"
      }`}
    >
      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-white/15">
        {icon}
      </span>

      <span
        className={`text-sm tracking-wide ${
          strong ? "font-medium text-white" : "font-light"
        }`}
      >
        {text}
      </span>
    </div>
  );
}