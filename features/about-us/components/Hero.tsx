import Image from "next/image";

import GaageMain from "@/assets/images/gaaga-huge.svg";
import AboutHeroImg from "@/assets/images/about-hero.svg";
import { FadeIn, SlideIn, SlideUp } from "@/components/Motion";

const AboutHero = () => {
  return (
    <header className="pt-28 md:pt-40 bg-[#111]">
      <FadeIn>
        <div className="max-w-[1800px] mx-auto flex items-top justify-center gap-3 md:gap-5 px-4">
          <h4 className="text-2xl md:text-4xl text-white">About</h4>
          <Image
            src={GaageMain}
            alt="Gaaga stylish design"
            width={1000}
            height={1000}
            className="w-[250px] md:w-[550px] h-full"
          />
        </div>
      </FadeIn>
      <div className="max-w-[1800px] mx-auto px-6 md:px-28 mt-10 md:mt-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
          <SlideIn direction="left">
            <div className="mt-6 md:mt-20">
              <h4 className="text-xl md:text-3xl font-avenir text-white uppercase mb-6 md:mb-10">
                We&apos;re big fans, actually.
              </h4>
              <div className="flex flex-col gap-4 md:gap-6 text-white/80 font-avenir-light text-sm md:text-base leading-relaxed max-w-[520px]">
                <p>
                  Gaaga started with watching incredible African creators build massive audiences with zero support, zero structure, and zero backup. Doing everything themselves. Making it work anyway.
                </p>
                <p className="font-avenir text-white">
                  We thought — what if they didn&apos;t have to?
                </p>
                <p>
                  Gaaga was built to be that support. A studio founded in Lagos, Nigeria that manages talent, connects creators with brands that actually fit, and invests in the people shaping what African creativity looks like right now.
                </p>
                <p>
                  We&apos;re not an agency that just books deals. We&apos;re not a fund that writes checks and disappears.
                </p>
                <p>
                  We&apos;re an active partner — in the room, in the strategy, and in your growth. We&apos;re in your corner for the long run, not just the big moments.
                </p>
              </div>
            </div>
          </SlideIn>
          <SlideIn direction="right" delay={0.2}>
            <div>
              <Image
                src={AboutHeroImg}
                alt="About hero main"
                width={1000}
                height={1000}
                className="max-w-[300px] md:max-w-[450px] mx-auto h-full"
              />
            </div>
          </SlideIn>
        </div>
      </div>
    </header>
  );
};

export default AboutHero;
