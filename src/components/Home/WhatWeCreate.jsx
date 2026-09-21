import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";



gsap.registerPlugin(ScrollTrigger);

const creations = [
    {
        number: "01",
        title: "Music",
        description:
            "Original sounds, independent artists, and releases built to travel beyond the moment. Original sounds, independent artists, and releases built to travel beyond the moment.",
        image:
            "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1200&q=85",
    },
    {
        number: "02",
        title: "Films",
        description:
            "Stories developed from ideas and scripts, brought to life from concept to final frame.",
        image:
            "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=1200&q=85",
    },
    {
        number: "03",
        title: "Music Videos",
        description:
            "Turning sound into visual worlds through direction, cinematography, and storytelling.",
        image:
            "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=1200&q=85",
    },
];

export default function WhatWeCreate() {
    const sectionRef = useRef(null);
    const introRef = useRef(null);
    const stageRef = useRef(null);

    const itemsRef = useRef([]);
    const imageRefs = useRef([]);

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
                    visibility:
                        index === 0 ? "visible" : "hidden",
                });

                const title = item.querySelector(
                    ".creation-title"
                );

                const number = item.querySelector(
                    ".creation-number"
                );

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

                /* Image */

                if (imageRefs.current[index]) {
                    gsap.set(imageRefs.current[index], {
                        opacity: index === 0 ? 1 : 0,
                        scale: index === 0 ? 1 : 1.08,
                        visibility:
                            index === 0
                                ? "visible"
                                : "hidden",
                    });
                }
            });

            /* ==========================================
               CREATION TRANSITION
            =========================================== */

            const changeCreation = (
                index,
                direction = 1
            ) => {
                if (
                    index === currentRef.current ||
                    index < 0 ||
                    index >= creations.length
                ) {
                    return;
                }

                const currentIndex = currentRef.current;

                const current =
                    itemsRef.current[currentIndex];

                const next = itemsRef.current[index];

                if (!current || !next) return;

                const currentTitle =
                    current.querySelector(
                        ".creation-title"
                    );

                const currentNumber =
                    current.querySelector(
                        ".creation-number"
                    );

                const currentDescription =
                    current.querySelector(
                        ".creation-description"
                    );

                const nextTitle =
                    next.querySelector(
                        ".creation-title"
                    );

                const nextNumber =
                    next.querySelector(
                        ".creation-number"
                    );

                const nextDescription =
                    next.querySelector(
                        ".creation-description"
                    );

                const currentImage =
                    imageRefs.current[currentIndex];

                const nextImage =
                    imageRefs.current[index];

                const exitY =
                    direction > 0 ? -55 : 55;

                const enterY =
                    direction > 0 ? 55 : -55;

                const tl = gsap.timeline();

                /* ======================================
                   OLD CONTENT
                ====================================== */

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

                    /* ==================================
                       OLD IMAGE
                    ================================== */

                    .to(
                        currentImage,
                        {
                            opacity: 0,
                            scale: 1.05,
                            duration: 0.45,
                            ease: "power3.inOut",
                        },
                        0
                    )

                    /* ==================================
                       HIDE OLD
                    ================================== */

                    .set(current, {
                        visibility: "hidden",
                        opacity: 0,
                    })

                    .set(currentImage, {
                        visibility: "hidden",
                    })

                    /* ==================================
                       PREPARE NEXT
                    ================================== */

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

                    .set(nextImage, {
                        visibility: "visible",
                        opacity: 0,
                        scale: 1.08,
                    })

                    /* ==================================
                       NEW IMAGE
                    ================================== */

                    .to(
                        nextImage,
                        {
                            opacity: 1,
                            scale: 1,
                            duration: 0.8,
                            ease: "power3.out",
                        },
                        "<"
                    )

                    /* ==================================
                       NEW TITLE
                    ================================== */

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

                    /* ==================================
                       NEW NUMBER
                    ================================== */

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

                    /* ==================================
                       NEW DESCRIPTION
                    ================================== */

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
            =========================================== */

            const creationScroll =
                window.innerHeight *
                creations.length *
                0.65;

            const finalHold =
                window.innerHeight * 0.75;

            const scrollDistance =
                creationScroll + finalHold;

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
                            progress *
                                (scrollDistance /
                                    creationScroll)
                        );

                    const index = Math.min(
                        creations.length - 1,
                        Math.floor(
                            creationProgress *
                                creations.length
                        )
                    );

                    const direction =
                        self.direction || 1;

                    if (
                        index !==
                        currentRef.current
                    ) {
                        changeCreation(
                            index,
                            direction
                        );
                    }

                    /* Progress */

                    if (progressRef.current) {
                        gsap.to(
                            progressRef.current,
                            {
                                scaleY: progress,
                                duration: 0.2,
                                overwrite: true,
                            }
                        );
                    }
                },
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={sectionRef}
            className="
                relative
                -mt-px
                bg-[#050505]
                text-white
            "
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
                {/* LABEL */}

                <div
                    className="
                        create-label
                        mb-8
                        flex
                        items-center
                        gap-3
                        md:mb-10
                    "
                >
                    <span
                        className="
                            h-px
                            w-8
                            bg-white/40
                        "
                    />

                    <span
                        className="
                            text-[10px]
                            uppercase
                            tracking-[0.3em]
                            text-white/40
                        "
                    >
                        What We Create
                    </span>
                </div>

                {/* HEADING */}

                <div
                    className="
                        space-y-10
                        font-clash
                        md:space-y-14
                    "
                >
                    {/* MAIN HEADING */}

                    <h2
                        className="
                            text-[16vw]
                            leading-[0.88]
                            tracking-[-0.06em]
                            text-white
                            md:text-[10vw]
                            lg:text-[8.8rem]
                        "
                    >
                        Not just content.
                    </h2>

                    {/* STATEMENT */}

                    <div className="flex justify-end">
                        <h3
                            className="
                                max-w-3xl
                                text-right
                                text-3xl
                                font-light
                                leading-[0.95]
                                tracking-[-0.04em]
                                text-white/80
                                md:text-5xl
                                lg:text-6xl
                            "
                        >
                            We don't just make
                            <br />

                            <span className="text-white/25">
                                things.
                            </span>

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
                <div
                    className="
                        creation-stage-inner
                        relative
                        flex
                        h-full
                        w-full
                        items-center
                    "
                >
                    {/* ==================================
                        LEFT SIDE PROGRESS
                    ================================== */}

                    <div
                        className="
                            absolute
                            left-6
                            top-8
                            z-30
                            md:left-10
                            md:top-1/2
                            md:-translate-y-1/2
                        "
                    >
                        <div
                            className="
                                flex
                                flex-col
                                gap-4
                            "
                        >
                            <span
                                className="
                                    text-[9px]
                                    uppercase
                                    tracking-[0.35em]
                                    text-white/25
                                "
                            >
                                South Cult
                            </span>

                            <div
                                className="
                                    hidden
                                    h-24
                                    w-px
                                    bg-white/10
                                    md:block
                                "
                            >
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

                    <div
                        className="
                            relative
                            mx-auto
                            w-full
                            max-w-7xl
                            px-6
                            font-clash
                            md:px-10
                        "
                    >
                        <div
                            className="
                                relative
                                flex
                                min-h-[440px]
                                items-center
                                md:min-h-[500px]
                            "
                        >
                            {creations.map(
                                (
                                    creation,
                                    index
                                ) => (
                                    <div
                                        key={
                                            creation.number
                                        }
                                        ref={(el) => {
                                            itemsRef.current[
                                                index
                                            ] = el;
                                        }}
                                        className="
                                            creation-item
                                            absolute
                                            inset-0
                                            flex
                                            items-center
                                        "
                                    >
                                        {/* ==================================
                                            LEFT CONTENT
                                        ================================== */}

                                        <div
                                            className="
                                                w-full
                                                pr-0
                                                md:w-[58%]
                                                md:pr-10
                                                lg:w-[60%]
                                            "
                                        >
                                            {/* NUMBER */}

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
                                                {
                                                    creation.number
                                                }

                                                <span className="text-white/15">
                                                    {" "}
                                                    /{" "}
                                                    03
                                                </span>
                                            </div>

                                            {/* TITLE */}

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
                                                    {
                                                        creation.title
                                                    }
                                                </h3>
                                            </div>

                                            {/* DESCRIPTION */}

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
                                                    {
                                                        creation.description
                                                    }
                                                </p>

                                                <div
                                                    className="
                                                        mt-5
                                                        flex
                                                        items-center
                                                        gap-3
                                                    "
                                                >
                                                    <span
                                                        className="
                                                            h-px
                                                            w-8
                                                            bg-white/30
                                                        "
                                                    />

                                                    <span
                                                        className="
                                                            text-[9px]
                                                            uppercase
                                                            tracking-[0.3em]
                                                            text-white/30
                                                        "
                                                    >
                                                        Create
                                                        with
                                                        us
                                                    </span>
                                                </div>
                                            </div>
                                        </div>

                                        {/* ==================================
                                            RIGHT IMAGE
                                        ================================== */}

                                        <div
                                            className="
                                                absolute
                                                right-0
                                                top-1/2
                                                hidden
                                                h-[58vh]
                                                w-[36%]
                                                -translate-y-1/2
                                                overflow-hidden
                                                md:block
                                                lg:w-[38%]
                                            "
                                        >
                                            <img
                                                ref={(el) => {
                                                    imageRefs.current[
                                                        index
                                                    ] = el;
                                                }}
                                                src={
                                                    creation.image
                                                }
                                                alt={
                                                    creation.title
                                                }
                                                className="
                                                    h-full
                                                    w-full
                                                    object-cover
                                                    grayscale
                                                    opacity-90
                                                "
                                            />

                                            {/* DARK OVERLAY */}

                                            <div
                                                className="
                                                    absolute
                                                    inset-0
                                                    bg-black/20
                                                "
                                            />

                                            {/* CINEMATIC BORDER */}

                                            <div
                                                className="
                                                    absolute
                                                    inset-0
                                                    border
                                                    border-white/10
                                                "
                                            />

                                            {/* TOP LABEL */}

                                            <div
                                                className="
                                                    absolute
                                                    left-5
                                                    top-5
                                                "
                                            >
                                                <span
                                                    className="
                                                        text-[8px]
                                                        uppercase
                                                        tracking-[0.35em]
                                                        text-white/50
                                                    "
                                                >
                                                    South Cult
                                                </span>
                                            </div>

                                            {/* BOTTOM LABEL */}

                                            <div
                                                className="
                                                    absolute
                                                    bottom-5
                                                    left-5
                                                "
                                            >
                                                <span
                                                    className="
                                                        text-[8px]
                                                        uppercase
                                                        tracking-[0.35em]
                                                        text-white/50
                                                    "
                                                >
                                                    Frame /
                                                    {
                                                        creation.number
                                                    }
                                                </span>
                                            </div>

                                            {/* CORNER MARK */}

                                            <div
                                                className="
                                                    absolute
                                                    bottom-5
                                                    right-5
                                                    h-5
                                                    w-5
                                                    border-b
                                                    border-r
                                                    border-white/30
                                                "
                                            />
                                        </div>
                                    </div>
                                )
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}