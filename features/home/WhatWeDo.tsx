"use client";

import Image from "next/image";
import { SlideUp } from "@/components/Motion";

import Home1 from "@/assets/images/home-main-1.svg";
import Home2 from "@/assets/images/home-main-2.svg";
import Home3 from "@/assets/images/home-main-3.svg";

const WhatWeDo = () => {
  const OfferingsArray = [
    {
      img: Home1,
      title: "Creators",
      subtitle: "Management, representation, and growth strategy for Africa's next-gen digital talent.",
    },
    {
      img: Home2,
      title: "Brand Partnerships",
      subtitle: "Connecting brands with authentic creator voices through campaigns that convert.",
    },
    {
      img: Home3,
      title: "Investment",
      subtitle: "Funding, licensing, and equity partnerships that turn creative potential into lasting ventures.",
    },
  ];
  return (
    <section className="py-10 md:py-20 bg-white">
      <SlideUp>
        <div className="text-center mb-7 px-4">
          <h4 className="text-2xl md:text-3xl font-avenir-medium! uppercase mb-3 md:mb-5">
            Three Pillars. One Studio.
          </h4>
          <p className="text-lg md:text-2xl uppercase font-avenir-light w-[90%] md:w-[60%] mx-auto">
            Everything we do falls under three pillars — Creators, Brand
            Partnerships, and Investment.
          </p>
        </div>
      </SlideUp>

      {/* Stacked sticky cards: natural flow until each card reaches the sticky top, then next slides up over it */}
      <div className="max-w-[1120px] mx-auto px-4 space-y-6 md:space-y-10">
        {OfferingsArray.map((home, index) => (
          <div
            key={home.title}
            className="sticky top-24" /* adjust top if nav overlaps */
            style={{ zIndex: index + 1 }}
          >
            <div className="relative w-full md:w-max mx-auto rounded-2xl md:rounded-[54px] overflow-hidden shadow-xl">
              <Image src={home.img} alt="capability" width={1120} height={455} />
              {/* Content overlay */}
              <div
                className={`absolute inset-0 ${
                  OfferingsArray.length - 1 === index ? "w-[90%] md:w-[80%]" : "w-[80%] md:w-[50%]"
                } max-w-[721px] text-center mx-auto h-full flex flex-col items-center justify-center`}
              >
                <h3 className="text-xl md:text-4xl text-accent mb-2 md:mb-4">{home.title}</h3>
                {home.subtitle && (
                  <p className="text-sm md:text-xl font-avenir-light text-white/90 px-4">
                    {home.subtitle}
                  </p>
                )}
              </div>
              {/* Subtle gradient at bottom to hint another card underneath */}
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-10 bg-gradient-to-b from-transparent to-black/20" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhatWeDo;
