import React, { useState } from "react";
import { ArrowDownRight } from "lucide-react";

const faqData = {
  music: {
    number: "01",
    label: "Music Production",
    description:
      "Everything you need to know about working with South Cult on music production and releases.",
    faqs: [
      {
        question: "Do I keep ownership?",
        answer:
          "Ownership and rights are clearly defined in the collaboration agreement. Everything is discussed and agreed upon before the release.",
      },
      {
        question: "Is there any upfront fee?",
        answer:
          "South Cult is built around collaboration rather than traditional upfront production fees. Commercial terms depend on the project and are agreed upon before we begin.",
      },
      {
        question: "Do you accept already finished songs?",
        answer:
          "Yes. If you already have a completed song, you can submit it to South Cult for consideration as a potential release.",
      },
      {
        question: "How long does review take?",
        answer:
          "Every submission is reviewed based on quality, originality, and its fit with South Cult. Review time can vary depending on the number of submissions.",
      },
      {
        question: "What happens if my song is selected?",
        answer:
          "We discuss the collaboration, agree on the terms, sign the agreement, and work together on distribution, release, and monetization.",
      },
      {
        question: "Where will my music be released?",
        answer:
          "Selected releases can be distributed across major digital streaming and music platforms based on the agreed release strategy.",
      },
    ],
  },

  podcast: {
    number: "02",
    label: "Podcast",
    description:
      "Everything you need to know about recording, editing, producing, and publishing podcasts with South Cult.",
    faqs: [
      {
        question: "Do you provide podcast recording?",
        answer:
          "Yes. South Cult provides professional podcast recording with studio-quality audio and video production options.",
      },
      {
        question: "Can you record both audio and video?",
        answer:
          "Yes. Podcast sessions can be produced as audio-only or multi-camera video podcasts depending on the project's requirements.",
      },
      {
        question: "Do you handle podcast editing?",
        answer:
          "Yes. We can handle editing, audio cleanup, mixing, video editing, subtitles, and short-form clips for social media.",
      },
      {
        question: "Can you help with the podcast concept?",
        answer:
          "Yes. We can collaborate on the format, visual identity, episode structure, creative direction, and overall production approach.",
      },
      {
        question: "Can I bring my own guests?",
        answer:
          "Absolutely. You can bring your own guests, hosts, or collaborators. We can also discuss production requirements for each episode.",
      },
      {
        question: "Where can the podcast be published?",
        answer:
          "Completed episodes can be prepared for major podcast and video platforms according to your publishing strategy.",
      },
    ],
  },

  documentary: {
    number: "03",
    label: "Documentary",
    description:
      "Everything you need to know about developing, filming, editing, and delivering documentary projects.",
    faqs: [
      {
        question: "Do you develop documentary concepts?",
        answer:
          "Yes. We work with creators and organisations to develop documentary ideas, stories, themes, and creative direction.",
      },
      {
        question: "Do you handle filming?",
        answer:
          "Yes. Depending on the project, production can include location filming, interviews, cinematography, and supporting footage.",
      },
      {
        question: "Can you help with research and scripting?",
        answer:
          "Yes. Research, story development, interviews, scripting, and narrative structure can be part of the documentary production process.",
      },
      {
        question: "Do you handle post-production?",
        answer:
          "Yes. Post-production can include editing, colour grading, sound design, music, subtitles, graphics, and final mastering.",
      },
      {
        question: "How long does a documentary take?",
        answer:
          "Timelines depend on the story, research, filming requirements, locations, and final duration. Each project is planned individually.",
      },
      {
        question: "Can documentaries be distributed digitally?",
        answer:
          "Yes. We can prepare the final documentary for digital platforms, screenings, festivals, or other agreed distribution channels.",
      },
    ],
  },
};

export default function FAQ() {
  const [activeTab, setActiveTab] = useState("music");
  const [activeFaq, setActiveFaq] = useState(null);

  const currentCategory = faqData[activeTab];

  const changeTab = (tab) => {
    setActiveTab(tab);
    setActiveFaq(null);
  };

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  return (
    <section className="bg-[#050505] px-4 py-20 font-clash text-white sm:px-6 sm:py-24 md:px-10 lg:px-16 xl:px-20">
      <div className="mx-auto w-full max-w-6xl">

        {/* ================= HEADER ================= */}
        <div className="mb-12 sm:mb-16 md:mb-20">
          <div className="max-w-3xl">
            <p className="mb-5 text-[9px] font-medium uppercase tracking-[0.35em] text-white/35 sm:mb-6 sm:text-[10px] sm:tracking-[0.45em]">
              South Cult / FAQ
            </p>

            <h2
              className="
                text-[42px]
                font-light
                leading-[0.92]
                tracking-[-0.055em]
                sm:text-5xl
                md:text-6xl
                lg:text-7xl
              "
            >
              Questions
              <br />
              <span className="text-white/30">
                before we begin.
              </span>
            </h2>
          </div>
        </div>

        {/* ================= CATEGORY TABS ================= */}
        <div className="mb-12 border-y border-white/10 sm:mb-16">
          <div className="grid grid-cols-3">

            {Object.entries(faqData).map(([key, category]) => {
              const isActive = activeTab === key;

              return (
                <button
                  key={key}
                  type="button"
                  onClick={() => changeTab(key)}
                  className={`
                    group
                    relative
                    min-w-0
                    overflow-hidden
                    px-1.5
                    py-5
                    text-left
                    transition-all
                    duration-300
                    sm:px-3
                    sm:py-6
                    md:px-5
                    md:py-7
                    ${
                      isActive
                        ? "text-white"
                        : "text-white/30 hover:text-white/70"
                    }
                  `}
                >
                  <div className="flex min-w-0 items-start gap-2 sm:gap-3 md:gap-5">

                    <span
                      className={`
                        shrink-0
                        pt-0.5
                        text-[8px]
                        tracking-[0.15em]
                        transition-colors
                        duration-300
                        sm:text-[9px]
                        md:text-[10px]
                        ${
                          isActive
                            ? "text-white/70"
                            : "text-white/20"
                        }
                      `}
                    >
                      {category.number}
                    </span>

                    <span
                      className="
                        min-w-0
                        text-[9px]
                        font-medium
                        uppercase
                        leading-tight
                        tracking-[0.04em]
                        sm:text-[11px]
                        sm:tracking-[0.08em]
                        md:text-[15px]
                        md:tracking-[0.12em]
                      "
                    >
                      {category.label}
                    </span>
                  </div>

                  <span
                    className={`
                      absolute
                      bottom-[-1px]
                      left-0
                      h-[2px]
                      bg-white
                      transition-all
                      duration-500
                      ${
                        isActive
                          ? "w-full"
                          : "w-0"
                      }
                    `}
                  />
                </button>
              );
            })}

          </div>
        </div>

        {/* ================= CATEGORY INTRO ================= */}
        <div
          className="
            mb-10
            flex
            flex-col
            gap-5
            sm:mb-12
            sm:gap-6
            md:flex-row
            md:items-end
            md:justify-between
          "
        >
          <div className="min-w-0">
            <h3
              className="
                text-[28px]
                font-light
                leading-none
                tracking-[-0.04em]
                sm:text-3xl
                md:text-4xl
              "
            >
              {currentCategory.label}
            </h3>
          </div>

          <p
            className="
              max-w-md
              text-[12px]
              leading-6
              text-white/35
              sm:text-[13px]
              md:text-right
            "
          >
            {currentCategory.description}
          </p>
        </div>

        {/* ================= FAQ GRID ================= */}
        <div className="grid grid-cols-1 gap-x-10 md:grid-cols-2 md:gap-x-12 lg:gap-x-16">

          {/* ================= LEFT COLUMN ================= */}
          <div className="flex flex-col">
            {currentCategory.faqs
              .filter((_, index) => index % 2 === 0)
              .map((faq, index) => {
                const actualIndex = index * 2;
                const isOpen = activeFaq === actualIndex;

                return (
                  <div
                    key={actualIndex}
                    className="border-b border-white/10"
                  >
                    <button
                      type="button"
                      onClick={() => toggleFaq(actualIndex)}
                      aria-expanded={isOpen}
                      className="
                        group
                        flex
                        w-full
                        items-center
                        gap-3
                        py-6
                        text-left
                        sm:gap-4
                        sm:py-7
                        md:gap-5
                        md:py-8
                      "
                    >
                      {/* NUMBER */}
                      <span
                        className="
                          w-6
                          shrink-0
                          text-[9px]
                          tracking-[0.15em]
                          text-white/30
                          sm:w-8
                          sm:text-[10px]
                          sm:tracking-[0.2em]
                        "
                      >
                        0{actualIndex + 1}
                      </span>

                      {/* QUESTION */}
                      <span
                        className={`
                          min-w-0
                          flex-1
                          pr-1
                          text-[15px]
                          leading-snug
                          tracking-tight
                          transition-colors
                          duration-300
                          sm:text-lg
                          md:text-xl
                          ${
                            isOpen
                              ? "text-white"
                              : "text-white/70 group-hover:text-white"
                          }
                        `}
                      >
                        {faq.question}
                      </span>

                      {/* ICON */}
                      <span
                        className={`
                          flex
                          h-8
                          w-8
                          shrink-0
                          items-center
                          justify-center
                          rounded-full
                          border
                          transition-all
                          duration-500
                          sm:h-9
                          sm:w-9
                          ${
                            isOpen
                              ? "rotate-45 border-white bg-white text-black"
                              : "border-white/20 text-white/50 group-hover:border-white/50"
                          }
                        `}
                      >
                        <ArrowDownRight
                          size={14}
                          strokeWidth={1.3}
                        />
                      </span>
                    </button>

                    {/* ANSWER */}
                    <div
                      className={`
                        grid
                        transition-all
                        duration-500
                        ease-in-out
                        ${
                          isOpen
                            ? "grid-rows-[1fr] opacity-100"
                            : "grid-rows-[0fr] opacity-0"
                        }
                      `}
                    >
                      <div className="overflow-hidden">
                        <p
                          className="
                            pb-6
                            pl-9
                            pr-2
                            text-[12px]
                            leading-6
                            text-white/40
                            sm:pb-7
                            sm:pl-12
                            sm:pr-6
                            sm:text-[14px]
                            sm:leading-7
                          "
                        >
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>

          {/* ================= RIGHT COLUMN ================= */}
          <div className="flex flex-col">
            {currentCategory.faqs
              .filter((_, index) => index % 2 === 1)
              .map((faq, index) => {
                const actualIndex = index * 2 + 1;
                const isOpen = activeFaq === actualIndex;

                return (
                  <div
                    key={actualIndex}
                    className="border-b border-white/10"
                  >
                    <button
                      type="button"
                      onClick={() => toggleFaq(actualIndex)}
                      aria-expanded={isOpen}
                      className="
                        group
                        flex
                        w-full
                        items-center
                        gap-3
                        py-6
                        text-left
                        sm:gap-4
                        sm:py-7
                        md:gap-5
                        md:py-8
                      "
                    >
                      {/* NUMBER */}
                      <span
                        className="
                          w-6
                          shrink-0
                          text-[9px]
                          tracking-[0.15em]
                          text-white/30
                          sm:w-8
                          sm:text-[10px]
                          sm:tracking-[0.2em]
                        "
                      >
                        0{actualIndex + 1}
                      </span>

                      {/* QUESTION */}
                      <span
                        className={`
                          min-w-0
                          flex-1
                          pr-1
                          text-[15px]
                          leading-snug
                          tracking-tight
                          transition-colors
                          duration-300
                          sm:text-lg
                          md:text-xl
                          ${
                            isOpen
                              ? "text-white"
                              : "text-white/70 group-hover:text-white"
                          }
                        `}
                      >
                        {faq.question}
                      </span>

                      {/* ICON */}
                      <span
                        className={`
                          flex
                          h-8
                          w-8
                          shrink-0
                          items-center
                          justify-center
                          rounded-full
                          border
                          transition-all
                          duration-500
                          sm:h-9
                          sm:w-9
                          ${
                            isOpen
                              ? "rotate-45 border-white bg-white text-black"
                              : "border-white/20 text-white/50 group-hover:border-white/50"
                          }
                        `}
                      >
                        <ArrowDownRight
                          size={14}
                          strokeWidth={1.3}
                        />
                      </span>
                    </button>

                    {/* ANSWER */}
                    <div
                      className={`
                        grid
                        transition-all
                        duration-500
                        ease-in-out
                        ${
                          isOpen
                            ? "grid-rows-[1fr] opacity-100"
                            : "grid-rows-[0fr] opacity-0"
                        }
                      `}
                    >
                      <div className="overflow-hidden">
                        <p
                          className="
                            pb-6
                            pl-9
                            pr-2
                            text-[12px]
                            leading-6
                            text-white/40
                            sm:pb-7
                            sm:pl-12
                            sm:pr-6
                            sm:text-[14px]
                            sm:leading-7
                          "
                        >
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>

        {/* ================= FOOTER ================= */}
        <div
          className="
            mt-10
            flex
            flex-col
            gap-3
            text-[8px]
            uppercase
            tracking-[0.25em]
            text-white/20
            sm:flex-row
            sm:justify-between
            sm:text-[9px]
            sm:tracking-[0.3em]
          "
        >
          <span>South Cult</span>

          <span>Clear terms / Long-term collaboration</span>
        </div>
      </div>
    </section>
  );
}