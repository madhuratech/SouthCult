import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import about from "../../assets/about.png";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
    const section = useRef();

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: section.current,
                    start: "top top",
                    end: "+=180%",
                    scrub: 1,
                    pin: true,
                    anticipatePin: 1,
                },
            });

            tl.from(".leftContent", {
                x: -180,
                opacity: 0,
                duration: 1,
            })
                .from(
                    ".rightContent",
                    {
                        x: 180,
                        opacity: 0,
                        duration: 1,
                    },
                    "<"
                )
                .from(
                    ".centerLine",
                    {
                        scaleX: 0,
                        transformOrigin: "center",
                        duration: 0.6,
                    },
                    "-=0.3"
                );
        }, section);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={section}
            className="h-screen bg-[#050505] text-white overflow-hidden"
        >
            <div className="max-w-7xl mx-auto h-full px-6 grid lg:grid-cols-2 gap-16 items-center">

                {/* LEFT */}
                <div className="leftContent font-clash relative z-10">
                    <p className="uppercase tracking-[6px] text-neutral-500 text-sm mb-4">
                        ABOUT
                    </p>

                    <h2 className="text-5xl lg:text-7xl font-bold leading-none mb-6">
                        SOUTH
                        <br />
                        CULT
                    </h2>

                    <div className="centerLine w-24 h-[2px] bg-white mb-6 text-[#cfcfcf]" />

                    <p className=" text-lg leading-8 mb-6">
                        SouthCult is a creative ecosystem empowering independent artists through artist development, 
                        funding, music production, documentaries, podcasts, broadcasting, marketing, and live experiences, 
                        helping creators transform original ideas into impactful stories that connect with audiences worldwide.
                    </p>


                    {/* Button */}
                    <a
                        href="/label"
                        className="group inline-flex items-center gap-3 border border-white/20 px-6 py-3 rounded-full text-sm tracking-widest uppercase hover:bg-white hover:text-black transition-all duration-500"
                    >
                        What We Stand For
                        <span className="transform transition-transform duration-300 group-hover:translate-x-1">
                            →
                        </span>
                    </a>
                </div>

                {/* RIGHT */}
                <div className="rightContent relative">
                    <div className="absolute -inset-4 bg-white/10 blur-3xl rounded-full" />

                    <img
                        src={about}
                        alt="Music Studio"
                        className="relative w-full h-[660px] object-cover"
                    />
                </div>

            </div>
        </section>
    );
}