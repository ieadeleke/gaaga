"use client";

import Image from "next/image";
import Hero1Img from "@/assets/images/hero_1.svg";
import Hero2Img from "@/assets/images/hero_2.svg";
import Hero3Img from "@/assets/images/hero_3.svg";
import Hero4Img from "@/assets/images/hero_4.svg";
import Hero5Img from "@/assets/images/art.png";
import { useState } from "react";
import ArrowImg from "@/assets/images/arrow.svg";
import LogoImg from "@/assets/images/logo-main.svg";
import { FaFacebookF } from "react-icons/fa";
import { FaSnapchatGhost } from "react-icons/fa";
import Link from "next/link";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/Motion";

const MeetTheTeam = () => {
  const [hoverEffect, setHoverEffect] = useState<number | null>(null);
  return (
    <section className="bg-[#111]">
      <FadeIn>
        <div className="bg-accent pt-5 md:pt-7 pb-6 md:pb-9 w-full text-center px-4">
          <h4 className="text-2xl md:text-4xl mb-1">Exceptional Talents. Delivering impact.</h4>
          <p className="text-sm md:text-xl font-avenir-medium uppercase w-[90%] md:w-[75%] mx-auto text-center">
            A growing roster of artists, filmmakers, designers, and storytellers
            redefining what African creativity looks like on the global stage.
          </p>
        </div>
      </FadeIn>
      <StaggerContainer className="max-w-[1800px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-3 px-4 md:px-20 bg-[#111] pb-16 md:pb-32 pt-2">
        <StaggerItem className="relative team-bar">
          <Image
            src={Hero1Img}
            alt="checklist"
            width={1000}
            height={1000}
            className="object-cover mx-auto"
          />
          <div className="team-bar-label absolute bottom-0 left-0 right-0 z-10 px-4 pb-5 pt-16 flex items-end justify-between black-gradient">
            <p className="text-accent text-base md:text-2xl uppercase font-avenir tracking-widest leading-tight">
              Bailey <br /> Sarian
            </p>
            <div className="flex items-center gap-3 text-white/90 font-avenir-light">
              <span className="text-lg md:text-2xl">×</span>
              <Image src={LogoImg} alt="Gaaga" width={120} height={120} className="w-20 md:w-28 opacity-90" />
            </div>
          </div>
          <div className="absolute h-full w-full inset-0 z-20 opacity-0 main-img">
            <Image
              src={Hero5Img}
              alt="woman posing for camera"
              width={1000}
              height={1000}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 z-30 black-gradient"></div>
          </div>
          <div className="hover-action-bar absolute inset-0 flex items-center justify-center z-40">
            <div>
              <button className="bg-accent text-sm md:text-xl flex items-center gap-2 py-2 md:py-3 px-3 md:px-5 rounded-lg border-3 border-black font-milker">
                BOOK
                <Image src={ArrowImg} alt="arrow icon" width={24} height={24} />
              </button>
            </div>
            <div className="absolute bottom-4 left-4 md:bottom-10 md:left-10">
              <h3 className="text-xl md:text-3xl uppercase font-avenir! text-accent mb-2">
                Bailey <br /> Sarian
              </h3>
              <div className="flex gap-3">
                <Link
                  className="border-2 border-accent text-accent size-8 md:size-10 rounded-full flex items-center justify-center text-xs md:text-base"
                  href="#"
                >
                  <FaFacebookF />
                </Link>
                <Link
                  className="border-2 border-accent text-accent size-8 md:size-10 rounded-full flex items-center justify-center text-xs md:text-base"
                  href="#"
                >
                  <FaSnapchatGhost />
                </Link>
              </div>
            </div>
          </div>
        </StaggerItem>
        <StaggerItem className="relative team-bar">
          <Image
            src={Hero2Img}
            alt="checklist"
            width={1000}
            height={1000}
            className="object-cover mx-auto"
          />
          <div className="team-bar-label absolute bottom-0 left-0 right-0 z-10 px-4 pb-5 pt-16 flex items-end justify-between black-gradient">
            <p className="text-accent text-base md:text-2xl uppercase font-avenir tracking-widest leading-tight">
              Bailey <br /> Sarian
            </p>
            <div className="flex items-center gap-3 text-white/90 font-avenir-light">
              <span className="text-lg md:text-2xl">×</span>
              <Image src={LogoImg} alt="Gaaga" width={120} height={120} className="w-20 md:w-28 opacity-90" />
            </div>
          </div>
          <div className="absolute h-full w-full inset-0 z-20 opacity-0 main-img">
            <Image
              src={Hero5Img}
              alt="woman posing for camera"
              width={1000}
              height={1000}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 z-30 black-gradient"></div>
          </div>
          <div className="hover-action-bar absolute inset-0 flex items-center justify-center z-40">
            <div>
              <button className="bg-accent text-sm md:text-xl flex items-center gap-2 py-2 md:py-3 px-3 md:px-5 rounded-lg border-3 border-black font-milker">
                BOOK
                <Image src={ArrowImg} alt="arrow icon" width={24} height={24} />
              </button>
            </div>
            <div className="absolute bottom-4 left-4 md:bottom-10 md:left-10">
              <h3 className="text-xl md:text-3xl uppercase font-avenir! text-accent mb-2">
                Bailey <br /> Sarian
              </h3>
              <div className="flex gap-3">
                <Link
                  className="border-2 border-accent text-accent size-8 md:size-10 rounded-full flex items-center justify-center text-xs md:text-base"
                  href="#"
                >
                  <FaFacebookF />
                </Link>
                <Link
                  className="border-2 border-accent text-accent size-8 md:size-10 rounded-full flex items-center justify-center text-xs md:text-base"
                  href="#"
                >
                  <FaSnapchatGhost />
                </Link>
              </div>
            </div>
          </div>
        </StaggerItem>
        <StaggerItem className="relative team-bar">
          <Image
            src={Hero3Img}
            alt="checklist"
            width={1000}
            height={1000}
            className="object-cover mx-auto"
          />
          <div className="team-bar-label absolute bottom-0 left-0 right-0 z-10 px-4 pb-5 pt-16 flex items-end justify-between black-gradient">
            <p className="text-accent text-base md:text-2xl uppercase font-avenir tracking-widest leading-tight">
              Bailey <br /> Sarian
            </p>
            <div className="flex items-center gap-3 text-white/90 font-avenir-light">
              <span className="text-lg md:text-2xl">×</span>
              <Image src={LogoImg} alt="Gaaga" width={120} height={120} className="w-20 md:w-28 opacity-90" />
            </div>
          </div>
          <div className="absolute h-full w-full inset-0 z-20 opacity-0 main-img">
            <Image
              src={Hero5Img}
              alt="woman posing for camera"
              width={1000}
              height={1000}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 z-30 black-gradient"></div>
          </div>
          <div className="hover-action-bar absolute inset-0 flex items-center justify-center z-40">
            <div>
              <button className="bg-accent text-sm md:text-xl flex items-center gap-2 py-2 md:py-3 px-3 md:px-5 rounded-lg border-3 border-black font-milker">
                BOOK
                <Image src={ArrowImg} alt="arrow icon" width={24} height={24} />
              </button>
            </div>
            <div className="absolute bottom-4 left-4 md:bottom-10 md:left-10">
              <h3 className="text-xl md:text-3xl uppercase font-avenir! text-accent mb-2">
                Bailey <br /> Sarian
              </h3>
              <div className="flex gap-3">
                <Link
                  className="border-2 border-accent text-accent size-8 md:size-10 rounded-full flex items-center justify-center text-xs md:text-base"
                  href="#"
                >
                  <FaFacebookF />
                </Link>
                <Link
                  className="border-2 border-accent text-accent size-8 md:size-10 rounded-full flex items-center justify-center text-xs md:text-base"
                  href="#"
                >
                  <FaSnapchatGhost />
                </Link>
              </div>
            </div>
          </div>
        </StaggerItem>
        <StaggerItem className="relative team-bar">
          <Image
            src={Hero4Img}
            alt="checklist"
            width={1000}
            height={1000}
            className="object-cover mx-auto"
          />
          <div className="team-bar-label absolute bottom-0 left-0 right-0 z-10 px-4 pb-5 pt-16 flex items-end justify-between black-gradient">
            <p className="text-accent text-base md:text-2xl uppercase font-avenir tracking-widest leading-tight">
              Bailey <br /> Sarian
            </p>
            <div className="flex items-center gap-3 text-white/90 font-avenir-light">
              <span className="text-lg md:text-2xl">×</span>
              <Image src={LogoImg} alt="Gaaga" width={120} height={120} className="w-20 md:w-28 opacity-90" />
            </div>
          </div>
          <div className="absolute h-full w-full inset-0 z-20 opacity-0 main-img">
            <Image
              src={Hero5Img}
              alt="woman posing for camera"
              width={1000}
              height={1000}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 z-30 black-gradient"></div>
          </div>
          <div className="hover-action-bar absolute inset-0 flex items-center justify-center z-40">
            <div>
              <button className="bg-accent text-sm md:text-xl flex items-center gap-2 py-2 md:py-3 px-3 md:px-5 rounded-lg border-3 border-black font-milker">
                BOOK
                <Image src={ArrowImg} alt="arrow icon" width={24} height={24} />
              </button>
            </div>
            <div className="absolute bottom-4 left-4 md:bottom-10 md:left-10">
              <h3 className="text-xl md:text-3xl uppercase font-avenir! text-accent mb-2">
                Bailey <br /> Sarian
              </h3>
              <div className="flex gap-3">
                <Link
                  className="border-2 border-accent text-accent size-8 md:size-10 rounded-full flex items-center justify-center text-xs md:text-base"
                  href="#"
                >
                  <FaFacebookF />
                </Link>
                <Link
                  className="border-2 border-accent text-accent size-8 md:size-10 rounded-full flex items-center justify-center text-xs md:text-base"
                  href="#"
                >
                  <FaSnapchatGhost />
                </Link>
              </div>
            </div>
          </div>
        </StaggerItem>
      </StaggerContainer>
    </section>
  );
};

export default MeetTheTeam;
