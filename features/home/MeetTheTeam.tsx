"use client";

import Image from "next/image";
import Hero1Img from "@/assets/images/hero_1.svg";
import Hero2Img from "@/assets/images/hero_2.svg";
import Hero3Img from "@/assets/images/hero_3.svg";
import Hero4Img from "@/assets/images/hero_4.svg";
import Hero5Img from "@/assets/images/art.png";
import { useState } from "react";
import ArrowImg from "@/assets/images/arrow.svg";
import { FaFacebookF } from "react-icons/fa";
import { FaSnapchatGhost } from "react-icons/fa";
import Link from "next/link";

const MeetTheTeam = () => {
  const [hoverEffect, setHoverEffect] = useState<number | null>(null);
  return (
    <section className="bg-[#111]">
      <div className="bg-accent pt-7 pb-9 w-full text-center">
        <h4 className="text-4xl mb-1">Meet Our Talents</h4>
        <p className="text-xl font-avenir-medium uppercase w-[75%] mx-auto text-center">
          A growing network of artists, designers, filmmakers, and digital
          storytellers shaping the next wave of African creativity.
        </p>
      </div>
      <div className="max-w-[1800px] mx-auto grid grid-cols-4 gap-3 px-20 bg-[#111] pb-32 pt-2">
        <div className="relative team-bar">
          <Image
            src={Hero1Img}
            alt="checklist"
            width={1000}
            height={1000}
            className="object-cover mx-auto"
          />
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
            <div className="">
              <button className="bg-accent text-xl flex items-center gap-2 py-3 px-5 rounded-lg border-3 border-black font-milker">
                BOOK
                <Image src={ArrowImg} alt="arrow icon" width={24} height={24} />
              </button>
            </div>
            <div className="absolute bottom-10 left-10">
              <h3 className="text-3xl uppercase font-avenir! text-accent mb-2">
                Bailey <br /> Sarian
              </h3>
              <div className="flex gap-3">
                <Link
                  className="border-2 border-accent text-accent size-10 rounded-full flex items-center justify-center"
                  href="#"
                >
                  <FaFacebookF />
                </Link>
                <Link
                  className="border-2 border-accent text-accent size-10 rounded-full flex items-center justify-center"
                  href="#"
                >
                  <FaSnapchatGhost />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="relative team-bar">
          <Image
            src={Hero2Img}
            alt="checklist"
            width={1000}
            height={1000}
            className="object-cover mx-auto"
          />
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
            <div className="">
              <button className="bg-accent text-xl flex items-center gap-2 py-3 px-5 rounded-lg border-3 border-black font-milker">
                BOOK
                <Image src={ArrowImg} alt="arrow icon" width={24} height={24} />
              </button>
            </div>
            <div className="absolute bottom-10 left-10">
              <h3 className="text-3xl uppercase font-avenir! text-accent mb-2">
                Bailey <br /> Sarian
              </h3>
              <div className="flex gap-3">
                <Link
                  className="border-2 border-accent text-accent size-10 rounded-full flex items-center justify-center"
                  href="#"
                >
                  <FaFacebookF />
                </Link>
                <Link
                  className="border-2 border-accent text-accent size-10 rounded-full flex items-center justify-center"
                  href="#"
                >
                  <FaSnapchatGhost />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="relative team-bar">
          <Image
            src={Hero3Img}
            alt="checklist"
            width={1000}
            height={1000}
            className="object-cover mx-auto"
          />
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
            <div className="">
              <button className="bg-accent text-xl flex items-center gap-2 py-3 px-5 rounded-lg border-3 border-black font-milker">
                BOOK
                <Image src={ArrowImg} alt="arrow icon" width={24} height={24} />
              </button>
            </div>
            <div className="absolute bottom-10 left-10">
              <h3 className="text-3xl uppercase font-avenir! text-accent mb-2">
                Bailey <br /> Sarian
              </h3>
              <div className="flex gap-3">
                <Link
                  className="border-2 border-accent text-accent size-10 rounded-full flex items-center justify-center"
                  href="#"
                >
                  <FaFacebookF />
                </Link>
                <Link
                  className="border-2 border-accent text-accent size-10 rounded-full flex items-center justify-center"
                  href="#"
                >
                  <FaSnapchatGhost />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="relative team-bar">
          <Image
            src={Hero4Img}
            alt="checklist"
            width={1000}
            height={1000}
            className="object-cover mx-auto"
          />
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
            <div className="">
              <button className="bg-accent text-xl flex items-center gap-2 py-3 px-5 rounded-lg border-3 border-black font-milker">
                BOOK
                <Image src={ArrowImg} alt="arrow icon" width={24} height={24} />
              </button>
            </div>
            <div className="absolute bottom-10 left-10">
              <h3 className="text-3xl uppercase font-avenir! text-accent mb-2">
                Bailey <br /> Sarian
              </h3>
              <div className="flex gap-3">
                <Link
                  className="border-2 border-accent text-accent size-10 rounded-full flex items-center justify-center"
                  href="#"
                >
                  <FaFacebookF />
                </Link>
                <Link
                  className="border-2 border-accent text-accent size-10 rounded-full flex items-center justify-center"
                  href="#"
                >
                  <FaSnapchatGhost />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MeetTheTeam;
