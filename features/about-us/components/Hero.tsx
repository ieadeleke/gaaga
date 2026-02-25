import Image from "next/image";

import GaageMain from "@/assets/images/gaaga-huge.svg";
import AboutHeroImg from "@/assets/images/about-hero.svg";
import { FadeIn, SlideIn, SlideUp } from "@/components/Motion";

const AboutHero = () => {
  return (
    <header className="pt-24 md:pt-40 bg-[#111]">
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
              <h4 className="text-xl md:text-3xl font-avenir-light! text-white uppercase">
                Gaaga Agency began in Lagos with a simple belief: <br />
                <span className="font-avenir">
                  Africa&apos;s creators deserve real support — not just visibility.
                </span>
              </h4>
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
