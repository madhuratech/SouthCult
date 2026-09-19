import React from "react";


export default function Hero() {
    return (
        <section className="relative min-h-screen w-full overflow-hidden bg-[#050505] text-white">

            {/* Content */}
            <div className="relative z-10 flex min-h-screen flex-col">

                {/* Hero Content */}
                <div className="flex flex-1 items-center justify-center px-6 pb-20 text-center">

                    <div className="max-w-6xl">
                        {/* Main heading */}
                        <h2 className="font-serif text-5xl leading-[0.95] tracking-tight sm:text-6xl md:text-8xl lg:text-[110px]">
                            South Indian Stories
                            <br />

                            <span className="text-white/70">
                                Become Music & Film
                            </span>
                        </h2>

                        {/* Description */}
                        <p className="mx-auto font-clash mt-8 max-w-xl text-sm leading-7 text-white/55 md:text-base">
                            We turn stories, ideas and sounds from the South
                            into music and moving images.
                        </p>

                        {/* CTA */}
                        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">

                            <a
                                href="/collab"
                                className="group font-clash flex items-center gap-3 rounded-full border border-white/20 bg-white px-7 py-3 text-sm font-medium text-black transition-all duration-300 hover:bg-white/90"
                            >
                                Collaborate with Us

                                <span className="transition-transform duration-300 group-hover:translate-x-1">
                                    →
                                </span>
                            </a>


                        </div>
                    </div>
                </div>



            </div>
        </section>
    );
}