"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { HiX } from "react-icons/hi";

import Hero1Img from "@/assets/images/hero_1.svg";
import Hero2Img from "@/assets/images/hero_2.svg";
import Hero3Img from "@/assets/images/hero_3.svg";
import Hero4Img from "@/assets/images/hero_4.svg";
import ArtImg from "@/assets/images/art.png";
import Hero2Png from "@/assets/images/hero_2.png";

const creators = [
  {
    name: "Bailey Sarian",
    category: "Content Creator",
    image: Hero1Img,
  },
  {
    name: "Ade Visual",
    category: "Filmmaker",
    image: Hero2Img,
  },
  {
    name: "Nana Diaries",
    category: "Lifestyle Creator",
    image: Hero3Img,
  },
  {
    name: "Teni Maverick",
    category: "Music Artist",
    image: Hero4Img,
  },
  {
    name: "Kemi Afolabi",
    category: "Director",
    image: ArtImg,
  },
  {
    name: "Zara Oluwa",
    category: "Fashion Creator",
    image: Hero2Png,
  },
];

interface CreatorsShowcaseProps {
  onClose: () => void;
}

const CreatorsShowcase = ({ onClose }: CreatorsShowcaseProps) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKey);
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 animate-[fadeIn_0.3s_ease-out]"
      onClick={onClose}
    >
      <div
        className="relative bg-[#111] border-2 border-accent rounded-2xl mx-4 max-w-5xl w-full max-h-[90vh] overflow-y-auto p-6 md:p-10 animate-[scaleIn_0.3s_ease-out]"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white/70 hover:text-white text-2xl z-10"
          aria-label="Close"
        >
          <HiX />
        </button>

        <div className="text-center mb-8 md:mb-10">
          <h3 className="text-2xl md:text-4xl uppercase text-accent mb-2">
            Our Creators
          </h3>
          <p className="text-sm md:text-base font-avenir-light text-white/80 max-w-[500px] mx-auto">
            Tap on any creator to get in touch and start a conversation.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-5 mb-8 md:mb-10">
          {creators.map((creator) => (
            <Link
              key={creator.name}
              href={`/contact-us?creator=${encodeURIComponent(creator.name)}`}
              onClick={onClose}
              className="group relative rounded-xl overflow-hidden border border-white/10 hover:border-accent transition-colors duration-300"
            >
              <Image
                src={creator.image}
                alt={creator.name}
                width={400}
                height={500}
                className="w-full h-[180px] md:h-[260px] object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-3 md:p-5">
                <h4 className="text-base md:text-xl text-white font-avenir! uppercase leading-tight">
                  {creator.name}
                </h4>
                <p className="text-xs md:text-sm font-avenir-light text-accent">
                  {creator.category}
                </p>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/contact-us"
            onClick={onClose}
            className="inline-block bg-accent py-3 md:py-4 px-8 md:px-10 text-sm md:text-base text-black rounded-lg font-avenir-medium border-2 border-accent"
          >
            Discover Your Next Creator
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CreatorsShowcase;
