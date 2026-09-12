import React from "react";
import { ArrowUpRight } from "lucide-react";

const collaborators = [
    {
        number: "01",
        title: "Artists",
        description:
            "Independent singers, musicians and composers looking to develop and release their work.",
    },
    {
        number: "02",
        title: "Song Creators",
        description:
            "Creators with finished or developing songs who need a label, distribution and a long-term partner.",
    },
    {
        number: "03",
        title: "Filmmakers",
        description:
            "Filmmakers and directors with stories, scripts or concepts that deserve to be brought to life.",
    },
    {
        number: "04",
        title: "Storytellers",
        description:
            "Creators with original ideas for documentaries, films and visual stories.",
    },
];

export default function WhoWeCollaborate() {
    return (
        <section className="relative overflow-hidden bg-[#050505] text-white font-clash">

            {/* Background atmosphere */}
            <div className="pointer-events-none absolute inset-0">
                <div
                    className="
                        absolute left-1/2 top-1/2
                        h-[500px] w-[500px]
                        -translate-x-1/2 -translate-y-1/2
                        rounded-full
                        bg-white/[0.015]
                        blur-[160px]
                    "
                />
            </div>

            <div className="relative mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-32 lg:px-16">

                {/* Section heading */}
                <div className="mb-16 grid grid-cols-1 gap-8 md:grid-cols-12 md:items-end">

                    <div className="md:col-span-8">

                        <p className="mb-5 text-[10px] uppercase tracking-[0.4em] text-white/30">
                            Who We Collaborate With
                        </p>

                        <h2
                            className="
                                font-clash
                                text-4xl
                                font-semibold
                                leading-[0.95]
                                tracking-[-0.04em]
                                sm:text-5xl
                                md:text-6xl
                                lg:text-[5vw]
                            "
                        >
                            Different Voices.
                            <br />
                            <span className="text-white/25">
                                One Creative Space.
                            </span>
                        </h2>

                    </div>

                    <div className="md:col-span-4 md:pb-1">

                        <p className="max-w-sm text-sm font-light leading-7 text-white/40 md:text-base md:leading-8">
                            We work with people who have something worth
                            creating — from independent music to original
                            stories and films.
                        </p>

                    </div>

                </div>

                {/* Collaborator list */}
                <div className="border-t border-white/[0.1]">

                    {collaborators.map((item) => (
                        <div
                            key={item.number}
                            className="
                                group
                                grid
                                grid-cols-12
                                items-center
                                border-b
                                border-white/[0.1]
                                py-7
                                transition-all
                                duration-500
                                hover:bg-white/[0.02]
                                md:py-9
                            "
                        >

                            {/* Number */}
                            <div className="col-span-2 md:col-span-1">
                                <span className="text-[10px] tracking-[0.25em] text-white/25">
                                    {item.number}
                                </span>
                            </div>

                            {/* Title */}
                            <div className="col-span-8 md:col-span-4">

                                <h3
                                    className="
                                        text-2xl
                                        font-light
                                        tracking-[-0.03em]
                                        text-white
                                        transition-transform
                                        duration-500
                                        group-hover:translate-x-2
                                        sm:text-3xl
                                        md:text-4xl
                                    "
                                >
                                    {item.title}
                                </h3>

                            </div>

                            {/* Description */}
                            <div className="col-span-10 col-start-3 mt-3 md:col-span-5 md:col-start-auto md:mt-0">

                                <p className="max-w-md text-xs leading-6 text-white/35 md:text-sm md:leading-7">
                                    {item.description}
                                </p>

                            </div>

                            {/* Arrow */}
                            <div className="col-span-2 flex justify-end">

                                <ArrowUpRight
                                    size={18}
                                    strokeWidth={1}
                                    className="
                                        text-white/20
                                        transition-all
                                        duration-500
                                        group-hover:-translate-y-1
                                        group-hover:translate-x-1
                                        group-hover:text-white/70
                                    "
                                />

                            </div>

                        </div>
                    ))}

                </div>

            </div>

        </section>
    );
}