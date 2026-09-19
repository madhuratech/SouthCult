import React, { useState } from "react";
import { ArrowDownRight } from "lucide-react";

const faqs = [
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
      "Yes. If you already have a completed song, you can submit it to South Cult for consideration as a potential label release.",
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
];

export default function FAQ() {
  const [active, setActive] = useState(null);

  const toggle = (index) => {
    setActive(active === index ? null : index);
  };

  return (
    <section className="bg-[#050505] px-5 py-28 text-white sm:px-8 md:px-12 lg:px-20 lg:py-36 font-clash">
      <div className="mx-auto max-w-6xl">

        {/* ================= HEADER ================= */}
        <div className="mb-16 grid gap-10 md:mb-20 md:grid-cols-2 md:items-end">

          {/* Heading */}
          <div>
            <p className="mb-6 text-[11px] font-medium uppercase tracking-[0.4em] text-white/50">
              South Cult / FAQ
            </p>

            <h2 className="text-5xl font-light leading-[0.95] tracking-[-0.04em] sm:text-6xl md:text-7xl">
              Before we
              <br />
              <span className="text-white/45">begin.</span>
            </h2>
          </div>

          {/* Description */}
          <p className="max-w-md text-[15px] leading-7 text-white/55 md:ml-auto">
            Everything you need to know before submitting your work
            and starting a collaboration with South Cult.
          </p>
        </div>

        {/* ================= FAQ GRID ================= */}
        <div className="grid gap-x-14 md:grid-cols-2">

          {/* ================= LEFT COLUMN ================= */}
          <div className="border-t border-white/25">

            {faqs.slice(0, 3).map((faq, index) => {
              const actualIndex = index;
              const isOpen = active === actualIndex;

              return (
                <div
                  key={actualIndex}
                  className="border-b border-white/15"
                >

                  {/* Question */}
                  <button
                    type="button"
                    onClick={() => toggle(actualIndex)}
                    className="group flex w-full items-center gap-5 py-8 text-left sm:py-9"
                    aria-expanded={isOpen}
                  >

                    {/* Number */}
                    <span className="w-8 shrink-0 text-[10px] font-medium tracking-[0.2em] text-white/35">
                      0{actualIndex + 1}
                    </span>

                    {/* Question Text */}
                    <span
                      className={`flex-1 text-lg font-normal tracking-tight transition-all duration-300 sm:text-xl md:text-[22px] ${
                        isOpen
                          ? "text-white"
                          : "text-white/75 group-hover:text-white"
                      }`}
                    >
                      {faq.question}
                    </span>

                    {/* Arrow */}
                    <span
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-all duration-500 ${
                        isOpen
                          ? "rotate-45 border-white bg-white text-black"
                          : "border-white/25 text-white/60 group-hover:border-white/60 group-hover:text-white"
                      }`}
                    >
                      <ArrowDownRight
                        size={15}
                        strokeWidth={1.3}
                      />
                    </span>
                  </button>

                  {/* Answer */}
                  <div
                    className={`grid transition-all duration-500 ease-in-out ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="pb-8 pl-[52px] pr-6 text-[15px] leading-7 text-white/50">
                        {faq.answer}
                      </p>
                    </div>
                  </div>

                </div>
              );
            })}

          </div>

          {/* ================= RIGHT COLUMN ================= */}
          <div className="border-t border-white/25">

            {faqs.slice(3, 6).map((faq, index) => {
              const actualIndex = index + 3;
              const isOpen = active === actualIndex;

              return (
                <div
                  key={actualIndex}
                  className="border-b border-white/15"
                >

                  {/* Question */}
                  <button
                    type="button"
                    onClick={() => toggle(actualIndex)}
                    className="group flex w-full items-center gap-5 py-8 text-left sm:py-9"
                    aria-expanded={isOpen}
                  >

                    {/* Number */}
                    <span className="w-8 shrink-0 text-[10px] font-medium tracking-[0.2em] text-white/35">
                      0{actualIndex + 1}
                    </span>

                    {/* Question Text */}
                    <span
                      className={`flex-1 text-lg font-normal tracking-tight transition-all duration-300 sm:text-xl md:text-[22px] ${
                        isOpen
                          ? "text-white"
                          : "text-white/75 group-hover:text-white"
                      }`}
                    >
                      {faq.question}
                    </span>

                    {/* Arrow */}
                    <span
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-all duration-500 ${
                        isOpen
                          ? "rotate-45 border-white bg-white text-black"
                          : "border-white/25 text-white/60 group-hover:border-white/60 group-hover:text-white"
                      }`}
                    >
                      <ArrowDownRight
                        size={15}
                        strokeWidth={1.3}
                      />
                    </span>
                  </button>

                  {/* Answer */}
                  <div
                    className={`grid transition-all duration-500 ease-in-out ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="pb-8 pl-[52px] pr-6 text-[15px] leading-7 text-white/50">
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
        <div className="mt-10 flex flex-col justify-between gap-3 pt-6 text-[10px] uppercase tracking-[0.3em] text-white/30 sm:flex-row">
          <span>South Cult Label</span>

          <span>
            Clear terms. Long-term collaboration.
          </span>
        </div>

      </div>
    </section>
  );
}