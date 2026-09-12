import React from "react";
import { ArrowUpRight } from "lucide-react";

export default function Collab() {
  const handleArtist = () => {
    const subject = encodeURIComponent(
      "Artist Collaboration with South Cult"
    );

    const body = encodeURIComponent(`Hi South Cult,

I'm an artist and I'd like to collaborate with South Cult.

Name:
Artist Name:
Instagram / Spotify / YouTube:
What I'm looking for:

Thanks!`);

    window.location.href =
      `mailto:hello@southcult.in?subject=${subject}&body=${body}`;
  };

  const handleStory = () => {
    const subject = encodeURIComponent(
      "Story / Film Collaboration with South Cult"
    );

    const body = encodeURIComponent(`Hi South Cult,

I have a story / film idea that I'd like to discuss with South Cult.

Name:
Contact:
Story / Project Title:
Brief Description:

Thanks!`);

    window.location.href =
      `mailto:hello@southcult.in?subject=${subject}&body=${body}`;
  };

  return (
    <section className="relative overflow-hidden bg-[#050505] text-white font-clash ">

      <div className="mx-auto flex max-w-7xl flex-col px-6 py-10 md:px-10 md:py-12">

        <div className="grid w-full grid-cols-1 gap-10 lg:grid-cols-[0.9fr_1.4fr] lg:gap-20">

          {/* LEFT */}
          <div className="flex flex-col justify-center">

            <p className="mb-4 text-[10px] uppercase tracking-[0.35em] text-white/35">
              Collaborate
            </p>

            <h2 className="max-w-xl text-4xl font-medium leading-[0.9] tracking-tight sm:text-5xl md:text-6xl">
              Something
              <br />
              worth
              <br />
              <span className="text-white/30">
                creating?
              </span>
            </h2>

            <div className="mt-7">

              <p className="max-w-sm text-xs leading-5 text-white/40">
                Music. Film. Stories.
                <br />
                If you have something meaningful to create,
                let's build it together.
              </p>

              <div className="mt-4 flex items-center gap-3">
                <span className="h-px w-8 bg-white/20" />

                <span className="text-[9px] uppercase tracking-[0.3em] text-white/30">
                  South Cult
                </span>
              </div>

            </div>
          </div>


          {/* RIGHT */}
          <div className="flex flex-col justify-center">

            {/* ARTIST */}
            <button
              onClick={handleArtist}
              className="group relative border-t border-white/15 py-5 text-left transition-all duration-500 md:py-6"
            >
              <div className="flex items-center justify-between gap-5">

                <div className="flex items-start gap-5 md:gap-8">

                  <span className="pt-1 text-[9px] tracking-[0.25em] text-white/25">
                    01
                  </span>

                  <div>

                    <p className="mb-1.5 text-[9px] uppercase tracking-[0.3em] text-white/35">
                      Music
                    </p>

                    <h3 className="text-xl font-medium tracking-tight transition-transform duration-500 group-hover:translate-x-2 sm:text-2xl md:text-3xl">
                      I'm an Artist
                    </h3>

                    <p className="mt-2 max-w-md text-[11px] leading-5 text-white/35 transition-colors duration-500 group-hover:text-white/55">
                      Let’s create, produce, release and grow
                      your music together.
                    </p>

                  </div>
                </div>

                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/10 transition-all duration-500 group-hover:border-white/40 group-hover:bg-white group-hover:text-black">

                  <ArrowUpRight
                    size={15}
                    strokeWidth={1.5}
                    className="transition-transform duration-500 group-hover:rotate-45"
                  />

                </div>

              </div>

              <div className="absolute bottom-0 left-0 h-px w-0 bg-white transition-all duration-700 group-hover:w-full" />
            </button>


            {/* STORY */}
            <button
              onClick={handleStory}
              className="group relative border-t border-white/15 py-5 text-left transition-all duration-500 md:py-6"
            >
              <div className="flex items-center justify-between gap-5">

                <div className="flex items-start gap-5 md:gap-8">

                  <span className="pt-1 text-[9px] tracking-[0.25em] text-white/25">
                    02
                  </span>

                  <div>

                    <p className="mb-1.5 text-[9px] uppercase tracking-[0.3em] text-white/35">
                      Film & Story
                    </p>

                    <h3 className="text-xl font-medium tracking-tight transition-transform duration-500 group-hover:translate-x-2 sm:text-2xl md:text-3xl">
                      I Have a Story
                    </h3>

                    <p className="mt-2 max-w-md text-[11px] leading-5 text-white/35 transition-colors duration-500 group-hover:text-white/55">
                      Have an idea, script or story?
                      Let’s turn it into film.
                    </p>

                  </div>
                </div>

                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/10 transition-all duration-500 group-hover:border-white/40 group-hover:bg-white group-hover:text-black">

                  <ArrowUpRight
                    size={15}
                    strokeWidth={1.5}
                    className="transition-transform duration-500 group-hover:rotate-45"
                  />

                </div>

              </div>

              <div className="absolute bottom-0 left-0 h-px w-0 bg-white transition-all duration-700 group-hover:w-full" />
            </button>


            {/* PATH */}
            <div className="flex items-center justify-between pt-3">

              <span className="text-[8px] uppercase tracking-[0.25em] text-white/20">
                Choose your path
              </span>

              <span className="text-[9px] text-white/20">
                ↓
              </span>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}