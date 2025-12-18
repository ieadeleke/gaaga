"use client";

import Image from "next/image";

import Home1 from "@/assets/images/home-main-1.svg";
import Home2 from "@/assets/images/home-main-2.svg";
import Home3 from "@/assets/images/home-main-3.svg";
import Home4 from "@/assets/images/home-main-4.svg";

const WhatWeDo = () => {
  const OfferingsArray = [
    {
      img: Home1,
      title: "⁠Creator Management & Representation",
    },
    {
      img: Home2,
      title: "Brand Partnerships & Influencer Campaigns",
    },
    {
      img: Home3,
      title: "Content Production & Creative Studio",
    },
    {
      img: Home4,
      title: "Creator Funding & Licensing",
    },
    {
      img: Home3,
      title: "Events & Activations",
    },
    {
      img: Home3,
      title: "Events & Brand Consulting & Creative Strategy ",
    },
  ];
  return (
    <section className="py-20 bg-white">
      <div className="text-center mb-7">
        <h4 className="text-3xl font-avenir-medium! uppercase mb-5">
          What We Can Do
        </h4>
        <p className="text-2xl uppercase font-avenir-light w-[60%] mx-auto">
          Every creator we work with gets structure, capital, and strategy — not
          guesswork.
        </p>
      </div>

      {/* Stacked sticky cards: natural flow until each card reaches the sticky top, then next slides up over it */}
      <div className="max-w-[1120px] mx-auto px-4 space-y-10">
        {OfferingsArray.map((home, index) => (
          <div
            key={home.title}
            className="sticky top-24" /* adjust top if nav overlaps */
            style={{ zIndex: index + 1 }}
          >
            <div className="relative w-max mx-auto rounded-[54px] overflow-hidden shadow-xl">
              <Image src={home.img} alt="capability" width={1120} height={455} />
              {/* Content overlay */}
              <div
                className={`absolute inset-0 ${
                  OfferingsArray.length - 1 === index ? "w-[80%]" : "w-[50%]"
                } max-w-[721px] text-center mx-auto h-full flex items-center justify-center`}
              >
                <h3 className="text-4xl text-accent">{home.title}</h3>
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
