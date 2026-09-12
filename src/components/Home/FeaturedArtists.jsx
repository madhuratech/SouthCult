import React from "react";
import { ArrowUpRight, Music2 } from "lucide-react";

import Marabu from "../../assets/Marabu.webp";
import barath from "../../assets/ymc.webp";

const artists = [
    {
        name: "Marabu Kavi",
        role: "Independent Artist",
        image: Marabu,
        spotify: "https://open.spotify.com/artist/1nCqcjvnRspRyd81QZa8Sr",
    },
    {
        name: "YMC Barath",
        role: "Independent Artist",
        image: barath,
        spotify: "https://open.spotify.com/artist/4ZI5kjqs53SfxggERnkycx",
    },
];

export default function OurArtists() {
    return (
        <>
            {/* Sticky Heading */}
            <section className="sticky top-0 h-[360px] bg-[#050505] flex items-center z-0 overflow-hidden">
                <div className="w-full max-w-7xl mx-auto px-6">
                    <div className="leading-[0.82] ">
                        <h1
                            className="text-[56px] sm:text-[80px] md:text-[120px] lg:text-[150px] font-black uppercase"
                            style={{
                                color: "transparent",
                                WebkitTextStroke: "2px rgba(255,255,255,0.15)",
                            }}
                        >
                            OUR
                        </h1>

                        <h1
                            className="text-[56px] sm:text-[80px] md:text-[120px] lg:text-[150px] font-black uppercase -mt-2 md:mt-2"
                            style={{
                                color: "transparent",
                                WebkitTextStroke: "2px rgba(255,255,255,0.15)",
                            }}
                        >
                            ARTISTS
                        </h1>
                    </div>
                </div>
            </section>


            {/* Artist Section */}
            <section className="relative z-10 bg-[#050505]">
                <div className="max-w-7xl mx-auto px-6 py-24">

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                        {/* Artist 01 */}
                        <a
                            href={artists[0].spotify}
                            target="_blank"
                            rel="noreferrer"
                            className="group relative overflow-hidden rounded-[28px] bg-zinc-900 border border-white/10"
                        >
                            <img
                                src={artists[0].image}
                                alt={artists[0].name}
                                className="w-full h-[420px] object-cover group-hover:scale-105 transition duration-700"
                            />

                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />



                            <div className="absolute bottom-6 left-6 right-6">
                                <p className="text-white text-xs uppercase tracking-[0.3em] mb-2">
                                    Independent Artist
                                </p>

                                <h3 className="text-3xl font-medium font-clash text-white">
                                    {artists[0].name}
                                </h3>

                                <div className="mt-4 flex items-center gap-2 text-white text-sm">
                                    <Music2 size={16} />
                                    Spotify
                                    <ArrowUpRight size={15} />
                                </div>
                            </div>
                        </a>

                        {/* Artist 02 */}
                        <a
                            href={artists[1].spotify}
                            target="_blank"
                            rel="noreferrer"
                            className="group relative overflow-hidden rounded-[28px] bg-zinc-900 border border-white/10"
                        >
                            <img
                                src={artists[1].image}
                                alt={artists[1].name}
                                className="w-full h-[420px] object-cover group-hover:scale-105 transition duration-700"
                            />

                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />



                            <div className="absolute bottom-6 left-6 right-6">
                                <p className="text-white text-xs uppercase tracking-[0.3em] mb-2">
                                    Independent Artist
                                </p>

                                <h3 className="text-3xl font-medium font-clash text-white">
                                    {artists[1].name}
                                </h3>

                                <div className="mt-4 flex items-center gap-2 text-white text-sm">
                                    <Music2 size={16} />
                                    Spotify
                                    <ArrowUpRight size={15} />
                                </div>
                            </div>
                        </a>

                        {/* Artist 03 - Coming Soon */}
                        <div className="relative rounded-[28px] border border-dashed border-white/20 bg-zinc-950 flex flex-col items-center justify-center h-[420px] text-center p-8">

                            <div className="mt-8 w-20 h-20 rounded-full border border-white/10 flex items-center justify-center">
                                <Music2 size={34} className="text-white" />
                            </div>

                            <p className="mt-8 text-white uppercase tracking-[0.3em] text-xs">
                                Next Artist
                            </p>

                            <h3 className="mt-3 text-3xl font-medium font-clash text-white">
                                Could Be You
                            </h3>

                            <p className="mt-3 text-zinc-500 text-sm">
                                The next SouthCult collaboration starts here.
                            </p>
                        </div>

                    </div>

                    {/* CTA */}
                    <div className="mt-20 text-center">
                        <p className="text-white uppercase tracking-[0.35em] text-sm mb-3">
                            SouthCult
                        </p>

                        <h2 className="text-4xl md:text-5xl  font-clash text-white">
                            Be the Next Name We Amplify
                        </h2>
                    </div>

                </div>
            </section>
        </>
    );
}