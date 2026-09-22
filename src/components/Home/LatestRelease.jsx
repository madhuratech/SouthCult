import { ArrowUpRight, Play } from "lucide-react";

export default function LatestRelease() {
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
                    leading-[0.95]
                    sm:leading-[0.82]
                "
                            style={{
                                color: "transparent",
                                WebkitTextStroke: "1.5px rgba(255,255,255,0.15)",
                            }}
                        >
                            LATEST
                        </h1>

                        <h1
                            className="
                    text-[52px]
                    sm:text-[80px]
                    md:text-[120px]
                    lg:text-[150px]
                    font-black
                    uppercase
                    leading-[0.95]
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
            

            {/* SECTION 2 : Covers the sticky section */}
            <section className="relative z-10 bg-[#050505]">
                <div className="max-w-7xl mx-auto px-6 py-24">

                    {/* Top Content */}
                    <div className="grid lg:grid-cols-12 gap-10 items-end mb-16">

                        {/* Left */}
                        <div className="lg:col-span-7">
                            <p className="text-xs uppercase tracking-[0.35em] text-zinc-500 mb-6">
                                SouthCult • Debut Single
                            </p>

                            <h2 className="text-5xl font-clash md:text-7xl lg:text-8xl font-black leading-[0.9] text-white">
                                STAYING
                            </h2>
                            <h2 className="text-5xl font-clash md:text-7xl lg:text-8xl font-black leading-[0.9] text-zinc-600">
                                DOWN
                            </h2>
                        </div>

                        {/* Right */}
                        <div className="lg:col-span-5 lg:pl-8 border-l border-white/10">
                            <div className="space-y-6">
                                <div>
                                    <p className="text-[11px] uppercase tracking-[0.3em] text-zinc-500 mb-2">
                                        Release
                                    </p>

                                </div>

                                <p className="text-zinc-400 leading-relaxed">
                                    The first chapter of SouthCult's creative journey, bringing together original music, authentic storytelling, 
                                    and artistic expression to inspire audiences and celebrate independent talent.
                                </p>

                                <div className="flex flex-wrap gap-3 pt-2">
                                    <a
                                        href="https://open.spotify.com/track/7v1tMD4WPsGlqNJzZkADVr"
                                        target="_blank"
                                        rel="noreferrer"
                                        className="inline-flex items-center gap-2 bg-white text-black px-5 py-3 rounded-full font-medium hover:scale-105 transition"
                                    >
                                        <Play size={16} fill="currentColor" />
                                        Listen Now
                                    </a>

                                    <a
                                        href="https://open.spotify.com/track/7v1tMD4WPsGlqNJzZkADVr"
                                        target="_blank"
                                        rel="noreferrer"
                                        className="inline-flex items-center gap-2 border border-white/20 text-white px-5 py-3 rounded-full hover:bg-white hover:text-black transition"
                                    >
                                        Spotify
                                        <ArrowUpRight size={16} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Spotify Player */}
                    <div className="rounded-[28px] overflow-hidden border border-white/10 bg-zinc-950 shadow-[0_20px_60px_rgba(0,0,0,0.45)]">
                        <iframe
                            src="https://open.spotify.com/embed/track/7v1tMD4WPsGlqNJzZkADVr?utm_source=generator"
                            width="100%"
                            height="380"
                            frameBorder="0"
                            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                            loading="lazy"
                            title="Staying Down - Spotify"
                        />
                    </div>

                </div>
            </section>
        </>
    );
}