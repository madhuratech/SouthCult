import React from "react";

export default function CollaborationHero() {
    return (
        <section className="relative min-h-[72vh] overflow-hidden bg-[#050505] text-white font-clash">

            {/* Background atmosphere */}
            <div className="pointer-events-none absolute inset-0">

                <div
                    className="
                        absolute -right-40 top-1/2
                        h-[600px] w-[600px]
                        -translate-y-1/2
                        rounded-full
                        bg-white/[0.018]
                        blur-[180px]
                    "
                />

                <div
                    className="
                        absolute inset-0
                        bg-[radial-gradient(circle_at_70%_50%,rgba(255,255,255,0.025),transparent_45%)]
                    "
                />

            </div>

            {/* Content */}
            <div
                className="
                    relative z-10
                    mx-auto flex min-h-[72vh]
                    max-w-7xl items-center
                    px-6 py-24
                    md:px-10
                    lg:px-16
                "
            >

                <div
                    className="
                        grid w-full
                        grid-cols-1
                        gap-12
                        md:grid-cols-12
                        md:items-center
                        lg:gap-16
                    "
                >

                    {/* Heading */}
                    <div className="md:col-span-8">

                        <h1
                            className="
                                text-5xl
                                font-light
                                leading-[0.95]
                                tracking-[-0.05em]
                                sm:text-6xl
                                md:text-7xl
                                lg:text-[5.5vw]
                                xl:text-[5.2vw]
                            "
                        >
                            Where Independent creators
                            <br />

                            <span className="text-white/25">
                                Finds Its Home.

                            </span>
                        </h1>

                    </div>

                    {/* Paragraph */}
                    <div className="md:col-span-4 md:pt-16 lg:pt-20">

                        <div className="mb-7 h-px w-12 bg-white/30" />

                        <p
                            className="
                                max-w-sm
                                text-sm
                                font-light
                                leading-7
                                text-white/45
                                md:text-base
                                md:leading-8
                            "
                        >
                            We partner with independent artists to bring
                            South Indian music to a wider audience through
                            thoughtful collaboration, global distribution
                            and a transparent revenue-sharing model.
                        </p>

                    </div>

                </div>

            </div>

        </section>
    );
}