import Image from "next/image";
import Link from "next/link";
import { FadeIn, SlideUp, StaggerContainer, StaggerItem } from "@/components/Motion";

import Hero1Img from "@/assets/images/hero_1.svg";
import Hero2Img from "@/assets/images/hero_2.svg";
import Hero3Img from "@/assets/images/hero_3.svg";
import Hero4Img from "@/assets/images/hero_4.svg";
import OverlayImg from "@/assets/images/art.png";
import LogoImg from "@/assets/images/logo-main.svg";
import ArrowImg from "@/assets/images/arrow.svg";

const talents = [
  { name: "Bailey Sarian", img: Hero1Img },
  { name: "Teni Maverick", img: Hero4Img },
  { name: "Zara Moyo", img: Hero3Img },
  { name: "Kofi Mensa", img: Hero2Img },
  { name: "Omari Blu", img: Hero1Img },
];

const TalentRoster = () => {
  return (
    <section className="bg-[#111]">
      <FadeIn>
        <div className="bg-accent pt-5 md:pt-7 pb-6 md:pb-9 w-full text-center px-4">
          <h3 className="text-2xl md:text-4xl uppercase">Our Talents</h3>
          <p className="text-sm md:text-xl font-avenir-medium uppercase w-[90%] md:w-[75%] mx-auto text-center">
            A growing roster of artists, filmmakers, designers, and storytellers delivering impact.
          </p>
        </div>
      </FadeIn>

      <StaggerContainer className="max-w-[1800px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-3 px-4 md:px-20 bg-[#111] pb-12 md:pb-20 pt-2">
        {talents.map((t) => (
          <StaggerItem key={t.name} className="relative team-bar">
            {/* Base image */}
            <Image src={t.img} alt={t.name} width={1000} height={1000} className="object-cover mx-auto w-full h-full" />

            {/* Bottom label */}
            <div className="team-bar-label absolute bottom-0 left-0 right-0 z-10 px-4 pb-5 pt-16 flex items-end justify-between black-gradient">
              <p className="text-accent text-base md:text-2xl uppercase font-avenir tracking-widest leading-tight">
                {t.name}
              </p>
              <div className="flex items-center gap-3 text-white/90 font-avenir-light">
                <span className="text-lg md:text-2xl">×</span>
                <Image src={LogoImg} alt="Gaaga" width={120} height={120} className="w-20 md:w-28 opacity-90" />
              </div>
            </div>

            {/* Hover image overlay */}
            <div className="absolute h-full w-full inset-0 z-20 opacity-0 main-img">
              <Image src={OverlayImg} alt="overlay" width={1000} height={1000} className="h-full w-full object-cover" />
              <div className="absolute inset-0 z-30 black-gradient"></div>
            </div>

            {/* Hover action */}
            <div className="hover-action-bar absolute inset-0 flex items-center justify-center z-40">
              <Link
                href={`/booking?talent=${encodeURIComponent(t.name)}`}
                className="bg-accent text-sm md:text-xl flex items-center gap-2 py-2 md:py-3 px-3 md:px-5 rounded-lg border-3 border-black font-milker"
              >
                BOOK
                <Image src={ArrowImg} alt="arrow icon" width={24} height={24} />
              </Link>
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>

      <SlideUp>
        <div className="text-center mb-12 md:mb-24 px-4">
          <Link
            href="/booking"
            className="uppercase text-base md:text-xl rounded-lg inline-flex items-center gap-3 bg-accent py-3 px-4 md:px-6 w-max mx-auto font-milker"
          >
            Book a Talent
            <Image src={ArrowImg} alt="arrow icon" width={24} height={24} />
          </Link>
        </div>
      </SlideUp>
    </section>
  );
};

export default TalentRoster;
