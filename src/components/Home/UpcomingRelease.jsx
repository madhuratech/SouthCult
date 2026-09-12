
export default function UpcomingRelease() {
    return (
        <>
            {/* SECTION 1 : Sticky Heading */}
            <section className="sticky top-0 h-[300px] sm:h-[360px] bg-[#050505] -mt-px flex items-center justify-end z-0 overflow-hidden">
                <div className="w-full max-w-7xl mx-auto px-6">
                    <div className="text-right">

                        <h1
                            className="
                                text-[52px]
                                sm:text-[80px]
                                md:text-[120px]
                                lg:text-[150px]
                                font-black
                                uppercase
                                leading-[0.9]
                                sm:leading-[0.82]
                            "
                            style={{
                                color: "transparent",
                                WebkitTextStroke: "1.5px rgba(255,255,255,0.15)",
                            }}
                        >
                            UPCOMING
                        </h1>

                        <h1
                            className="
                                text-[52px]
                                sm:text-[80px]
                                md:text-[120px]
                                lg:text-[150px]
                                font-black
                                uppercase
                                leading-[0.9]
                                sm:leading-[0.82]
                                mt-1
                                sm:mt-2
                            "
                            style={{
                                color: "transparent",
                                WebkitTextStroke: "1.5px rgba(255,255,255,0.15)",
                            }}
                        >
                            RELEASE
                        </h1>

                    </div>
                </div>
            </section>

            {/* SECTION 2 : Covers Sticky Heading */}
            <section className="relative z-10 bg-[#050505]">
                <div className="max-w-7xl mx-auto px-6 py-20 sm:py-24">

                    <div className="min-h-[280px] flex items-center justify-center">
                        <h2
                            className="
                                text-5xl
                                sm:text-6xl
                                md:text-8xl
                                lg:text-[150px]
                                font-clash
                                font-black
                                text-white
                                uppercase
                                leading-[0.85]
                                tracking-[-0.04em]
                                text-center
                            "
                        >
                            Open{" "}
                            <span className="text-white/20">
                                1000
                            </span>
                        </h2>
                    </div>

                </div>
            </section>
        </>
    );
}

