import Image from "next/image";
import { SlideUp, StaggerContainer, StaggerItem } from "@/components/Motion";

import HomeMain1 from "@/assets/images/home-main-1.svg";
import HomeMain2 from "@/assets/images/home-main-2.svg";
import HomeMain3 from "@/assets/images/home-main-3.svg";
import HomeMain4 from "@/assets/images/home-main-4.svg";
import Hero1 from "@/assets/images/hero_1.svg";
import Hero3 from "@/assets/images/hero_3.svg";

const productions = [
  {
    image: HomeMain1,
    title: "Rhythm of Lagos",
    partner: "Teni Maverick",
    category: "Music Video",
    description:
      "A vibrant Afrobeats visual capturing the pulse of Lagos nightlife with cinematic flair.",
  },
  {
    image: HomeMain2,
    title: "Streets to Screens",
    partner: "Ade Visual",
    category: "Documentary",
    description:
      "A docu-series following the journey of African creators from street hustle to digital stardom.",
  },
  {
    image: HomeMain3,
    title: "Glow Campaign",
    partner: "Shea Radiance",
    category: "Brand Campaign",
    description:
      "A beauty brand campaign celebrating authentic African skincare through bold, sun-drenched visuals.",
  },
  {
    image: HomeMain4,
    title: "Voices Unfiltered",
    partner: "Nana Diaries",
    category: "Podcast Series",
    description:
      "A podcast series giving unfiltered takes on creativity, identity, and building an audience from scratch.",
  },
  {
    image: Hero1,
    title: "The Collective Drop",
    partner: "WKND Studios",
    category: "Merch Launch",
    description:
      "A hype-driven launch video for a limited-edition streetwear capsule rooted in Afro-futurism.",
  },
  {
    image: Hero3,
    title: "Lagos After Dark",
    partner: "Kemi Afolabi",
    category: "Short Film",
    description:
      "A short film exploring Lagos after hours — the sounds, the stories, and the people who own the night.",
  },
];

const ProductionGrid = () => {
  return (
    <section className="px-4 md:px-20 py-10 md:py-20">
      <div className="max-w-[1450px] mx-auto">
        <SlideUp>
          <div className="text-center mb-8 md:mb-14">
            <h3 className="text-2xl md:text-4xl text-accent uppercase mb-3 md:mb-5">
              All Productions
            </h3>
            <p className="text-base md:text-xl font-avenir-light text-white/80 w-[90%] md:w-[60%] mx-auto">
              Every project is a partnership — built with creators and brands who
              share our vision.
            </p>
          </div>
        </SlideUp>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {productions.map((prod) => (
            <StaggerItem
              key={prod.title}
              className="bg-[#1a1a1a] rounded-2xl overflow-hidden border border-white/10 hover:border-accent/50 transition-colors duration-300 group"
            >
              <div className="relative overflow-hidden">
                <Image
                  src={prod.image}
                  alt={prod.title}
                  width={600}
                  height={340}
                  className="w-full h-[200px] md:h-[240px] object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 left-3 bg-accent text-black text-xs font-avenir-medium px-3 py-1 rounded-full">
                  {prod.category}
                </span>
              </div>
              <div className="p-5 md:p-6">
                <h4 className="text-lg md:text-xl text-white mb-1">
                  {prod.title}
                </h4>
                <p className="text-sm font-avenir-medium text-accent mb-3">
                  {prod.partner}
                </p>
                <p className="text-sm font-avenir-light text-white/70 leading-relaxed">
                  {prod.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default ProductionGrid;
