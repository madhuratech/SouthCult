import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import about from "../../assets/about.png";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
    const section = useRef(null);
    const left = useRef(null);
    const right = useRef(null);
    const line = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const isMobile = window.innerWidth < 768;

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: section.current,
                    start: "top top",
                    end: isMobile ? "bottom bottom" : "+=100%",
                    pin: !isMobile,
                    anticipatePin: 1,
                    invalidateOnRefresh: true,
                    toggleActions: "play none none none",
                },
            });

            tl.from(left.current, {
                x: isMobile ? -80 : -180,
                opacity: 0,
                duration: 0.8,
            })
                .from(
                    right.current,
                    {
                        x: isMobile ? 80 : 180,
                        opacity: 0,
                        duration: 0.8,
                    },
                    "<"
                )
                .from(
                    line.current,
                    {
                        scaleX: 0,
                        transformOrigin: "left center",
                        duration: 0.5,
                    },
                    "-=0.2"
                );
        }, section);

        return () => ctx.revert();
    }, []);

    return (
        <section
    ref={section}
    className="min-h-screen md:h-screen bg-[#050505] text-white overflow-hidden"
>
    <div className="max-w-7xl mx-auto px-6 py-16 md:py-0 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

        {/* LEFT */}
        <div ref={left} className="font-clash relative z-10">
            <p className="uppercase tracking-[6px] text-neutral-500 text-sm mb-4">
                ABOUT
            </p>

            <h2 className="text-5xl lg:text-7xl font-bold leading-none mb-6">
                SOUTH
                <br />
                CULT
            </h2>

            <div
                ref={line}
                className="w-24 h-[2px] bg-white mb-6"
            />

            <p className="text-lg leading-8 mb-6">
                SouthCult is a creative ecosystem empowering independent artists
                through artist development, funding, music production,
                documentaries, podcasts, broadcasting, marketing, and live
                experiences, helping creators transform original ideas into
                impactful stories that connect with audiences worldwide.
            </p>

            <a
                href="/label"
                className="group inline-flex items-center gap-3 border border-white/20 px-6 py-3 rounded-full text-sm tracking-widest uppercase hover:bg-white hover:text-black transition-all duration-500"
            >
                What We Stand For
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                </span>
            </a>
        </div>

        {/* RIGHT */}
        <div
            ref={right}
            className="relative w-full h-[75vh] min-h-[600px] lg:h-[82vh] lg:min-h-0"
        >
            <div className="absolute -inset-4 bg-white/10 blur-3xl rounded-full" />

            <img
                src={about}
                alt="Music Studio"
                className="relative w-full h-full object-cover"
            />
        </div>
    </div>
</section>
    );
}