import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const creations = [
    {
        number: "01",
        title: "Music",
        description:
            "Original sounds, independent artists, and releases built to travel beyond the moment.Original sounds, independent artists, and releases built to travel beyond the momentOriginal sounds, independent artists, and releases built to travel beyond the moment Original sounds, independent artists, and releases built to travel beyond the momentOriginal sounds, independent artists, and releases built to travel beyond the moment Original sounds, independent artists, and releases built to travel beyond the moment",
    },
    {
        number: "02",
        title: "Films",
        description:
            "Stories developed from ideas and scripts, brought to life from concept to final frame.",
    },
    {
        number: "03",
        title: "Music Videos",
        description:
            "Turning sound into visual worlds through direction, cinematography, and storytelling.",
    },
    {
        number: "04",
        title: "Stories",
        description:
            "Original ideas rooted in South Indian culture, people, places, and perspectives.",
    },
    {
        number: "05",
        title: "Artist Releases",
        description:
            "Helping completed music find its audience through release, distribution, and long-term support.",
    },
    {
        number: "06",
        title: "Collaborations",
        description:
            "Bringing artists, filmmakers, musicians, writers, and creators together around strong ideas.",
    },
];

export default function WhatWeCreate() {
    const sectionRef = useRef(null);
    const introRef = useRef(null);
    const stageRef = useRef(null);

    const itemsRef = useRef([]);
    const progressRef = useRef(null);
    const currentRef = useRef(0);

    useEffect(() => {
        const ctx = gsap.context(() => {
            /* ==========================================
               INTRO ANIMATION
            =========================================== */

            const intro = gsap.timeline({
                scrollTrigger: {
                    trigger: introRef.current,
                    start: "top 80%",
                    toggleActions: "play none none reverse",
                },
            });

            intro
                .from(".create-label", {
                    y: 20,
                    opacity: 0,
                    duration: 0.7,
                    ease: "power3.out",
                })
                .from(
                    ".intro-word",
                    {
                        y: 100,
                        opacity: 0,
                        duration: 1,
                        stagger: 0.08,
                        ease: "power4.out",
                    },
                    "-=0.3"
                )
                .from(
                    ".intro-copy",
                    {
                        y: 30,
                        opacity: 0,
                        duration: 0.8,
                        ease: "power3.out",
                    },
                    "-=0.5"
                );

            /* ==========================================
               INITIAL CREATION STATE
            =========================================== */

            itemsRef.current.forEach((item, index) => {
                if (!item) return;

                gsap.set(item, {
                    opacity: index === 0 ? 1 : 0,
                    visibility: index === 0 ? "visible" : "hidden",
                });

                const title = item.querySelector(".creation-title");
                const number = item.querySelector(".creation-number");
                const description = item.querySelector(
                    ".creation-description"
                );

                gsap.set(title, {
                    y: index === 0 ? 0 : 60,
                    opacity: index === 0 ? 1 : 0,
                });

                gsap.set(number, {
                    y: index === 0 ? 0 : 30,
                    opacity: index === 0 ? 1 : 0,
                });

                gsap.set(description, {
                    y: index === 0 ? 0 : 25,
                    opacity: index === 0 ? 1 : 0,
                });
            });

            /* ==========================================
               CREATION TRANSITION
            =========================================== */

            const changeCreation = (index, direction = 1) => {
                if (
                    index === currentRef.current ||
                    index < 0 ||
                    index >= creations.length
                ) {
                    return;
                }

                const currentIndex = currentRef.current;

                const current = itemsRef.current[currentIndex];
                const next = itemsRef.current[index];

                if (!current || !next) return;

                const currentTitle =
                    current.querySelector(".creation-title");

                const currentNumber =
                    current.querySelector(".creation-number");

                const currentDescription =
                    current.querySelector(".creation-description");

                const nextTitle =
                    next.querySelector(".creation-title");

                const nextNumber =
                    next.querySelector(".creation-number");

                const nextDescription =
                    next.querySelector(".creation-description");

                const exitY = direction > 0 ? -55 : 55;
                const enterY = direction > 0 ? 55 : -55;

                const tl = gsap.timeline();

                /* --------------------------------
                   OLD ITEM
                -------------------------------- */

                tl.to(
                    currentTitle,
                    {
                        y: exitY,
                        opacity: 0,
                        duration: 0.4,
                        ease: "power3.in",
                    },
                    0
                )

                    .to(
                        currentNumber,
                        {
                            y: exitY * 0.5,
                            opacity: 0,
                            duration: 0.3,
                            ease: "power3.in",
                        },
                        0
                    )

                    .to(
                        currentDescription,
                        {
                            y: exitY * 0.4,
                            opacity: 0,
                            duration: 0.3,
                            ease: "power3.in",
                        },
                        0
                    )

                    /* --------------------------------
                       HIDE OLD
                    -------------------------------- */

                    .set(current, {
                        visibility: "hidden",
                        opacity: 0,
                    })

                    /* --------------------------------
                       PREPARE NEXT
                    -------------------------------- */

                    .set(next, {
                        visibility: "visible",
                        opacity: 1,
                    })

                    .set(nextTitle, {
                        y: enterY,
                        opacity: 0,
                    })

                    .set(nextNumber, {
                        y: enterY * 0.5,
                        opacity: 0,
                    })

                    .set(nextDescription, {
                        y: enterY * 0.4,
                        opacity: 0,
                    })

                    /* --------------------------------
                       NEW ITEM
                    -------------------------------- */

                    .to(
                        nextTitle,
                        {
                            y: 0,
                            opacity: 1,
                            duration: 0.65,
                            ease: "power4.out",
                        },
                        "<"
                    )

                    .to(
                        nextNumber,
                        {
                            y: 0,
                            opacity: 1,
                            duration: 0.5,
                            ease: "power3.out",
                        },
                        "-=0.48"
                    )

                    .to(
                        nextDescription,
                        {
                            y: 0,
                            opacity: 1,
                            duration: 0.5,
                            ease: "power3.out",
                        },
                        "-=0.38"
                    );

                currentRef.current = index;
            };

            /* ==========================================
     PINNED SCROLL
  ========================================== */

            // Extra scroll space after the final item
            const creationScroll =
                window.innerHeight * creations.length * 0.65;

            const finalHold =
                window.innerHeight * 0.75;

            const scrollDistance = creationScroll + finalHold;

            ScrollTrigger.create({
                trigger: stageRef.current,

                start: "top top",

                end: `+=${scrollDistance}`,

                pin: true,

                anticipatePin: 1,

                onUpdate: (self) => {
                    const progress = self.progress;

                    /*
                     * Keep the last creation visible during
                     * the final hold section.
                     */
                    const creationProgress =
                        Math.min(
                            1,
                            progress * (scrollDistance / creationScroll)
                        );

                    const index = Math.min(
                        creations.length - 1,
                        Math.floor(
                            creationProgress * creations.length
                        )
                    );

                    const direction = self.direction || 1;

                    if (index !== currentRef.current) {
                        changeCreation(index, direction);
                    }

                    /* Progress */
                    if (progressRef.current) {
                        gsap.to(progressRef.current, {
                            scaleY: progress,
                            duration: 0.2,
                            overwrite: true,
                        });
                    }
                },
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={sectionRef}
            className="relative bg-[#050505] text-white -mt-px "
        >
            {/* ==========================================
                INTRO
            =========================================== */}

            <div
                ref={introRef}
                className="
                    create-intro
                    mx-auto
                    max-w-7xl
                    px-6
                    pb-24
                    pt-28
                    md:px-10
                    md:pb-32
                    md:pt-36
                "
            >
                {/* Label */}

                <div className="create-label mb-8 flex items-center gap-3 md:mb-10 ">
                    <span className="h-px w-8 bg-white/40" />

                    <span className="text-[10px] uppercase tracking-[0.3em] text-white/40">
                        What We Create
                    </span>
                </div>

                {/* Heading */}

                <div className="space-y-10 md:space-y-14 font-clash">

                    {/* Main Heading */}
                    <h2 className="text-[16vw] md:text-[10vw] lg:text-[8.8rem] leading-[0.88] tracking-[-0.06em] text-white overflow-visible">
                        Not just content.
                    </h2>

                    {/* Statement — Right Aligned */}
                    <div className="flex justify-end">
                        <h3 className="max-w-3xl text-right text-3xl font-light leading-[0.95] tracking-[-0.04em] text-white/80 md:text-5xl lg:text-6xl">
                            We don't just make
                            <br />
                            <span className="text-white/25">things.</span>
                            <br />
                            We make them matter.
                        </h3>
                    </div>

                </div>


            </div>

            {/* ==========================================
                PINNED CREATION AREA
            =========================================== */}

            <div
                ref={stageRef}
                className="
                    relative
                    h-[72vh]
                    min-h-[520px]
                    w-full
                    overflow-hidden
                    md:h-[70vh]
                    md:min-h-[560px]
                "
            >
                <div className="creation-stage-inner relative flex h-full w-full items-center">
                    {/* ==================================
                        LEFT SIDE
                    ================================== */}

                    <div
                        className="
                            absolute
                            left-6
                            top-8
                            z-20
                            md:left-10
                            md:top-1/2
                            md:-translate-y-1/2
                        "
                    >
                        <div className="flex flex-col gap-4">
                            <span className="text-[9px] uppercase tracking-[0.35em] text-white/25">
                                South Cult
                            </span>

                            <div className="hidden h-24 w-px bg-white/10 md:block">
                                <div
                                    ref={progressRef}
                                    className="
                                        h-full
                                        w-px
                                        origin-top
                                        scale-y-0
                                        bg-white
                                    "
                                />
                            </div>
                        </div>
                    </div>

                    {/* ==================================
                        CREATION CONTENT
                    ================================== */}

                    <div className="relative mx-auto w-full max-w-7xl px-6 md:px-10 font-clash">
                        <div
                            className="
                                relative
                                flex
                                min-h-[440px]
                                items-center
                                md:min-h-[500px]
                            "
                        >
                            {creations.map((creation, index) => (
                                <div
                                    key={creation.number}
                                    ref={(el) => {
                                        itemsRef.current[index] = el;
                                    }}
                                    className="
                                        creation-item
                                        absolute
                                        inset-0
                                        flex
                                        items-center
                                    "
                                >
                                    <div className="w-full">
                                        {/* Number */}

                                        <div
                                            className="
                                                creation-number
                                                mb-5
                                                text-[10px]
                                                tracking-[0.3em]
                                                text-white/40
                                                md:mb-7
                                            "
                                        >
                                            {creation.number}

                                            <span className="text-white/15">
                                                {" "}
                                                / 06
                                            </span>
                                        </div>

                                        {/* Title */}

                                        <div className="overflow-visible">
                                            <h3
                                                className="
                                                    creation-title
                                                    w-full
                                                    max-w-full
                                                    whitespace-normal
                                                    break-words
                                                    text-[15vw]
                                                    font-medium
                                                    leading-[0.95]
                                                    tracking-[-0.055em]
                                                    md:text-[10vw]
                                                    md:leading-[0.9]
                                                    lg:text-[8.2rem]
                                                    lg:leading-[0.9]
                                                "
                                            >
                                                {creation.title}
                                            </h3>
                                        </div>

                                        {/* Description */}

                                        <div
                                            className="
                                                creation-description
                                                mt-7
                                                max-w-lg
                                                md:ml-[8%]
                                                md:mt-8
                                            "
                                        >
                                            <p
                                                className="
                                                    text-sm
                                                    leading-relaxed
                                                    text-white/45
                                                    md:text-base
                                                "
                                            >
                                                {creation.description}
                                            </p>

                                            <div className="mt-5 flex items-center gap-3">
                                                <span className="h-px w-8 bg-white/30" />

                                                <span
                                                    className="
                                                        text-[9px]
                                                        uppercase
                                                        tracking-[0.3em]
                                                        text-white/30
                                                    "
                                                >
                                                    Create with us
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>



        </section>
    );
}