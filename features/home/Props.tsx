import Image from "next/image";
import WomanImg from "@/assets/images/woman.svg";
import WomanSecImg from "@/assets/images/woman-sec.svg";
import Quote1Img from "@/assets/images/quote1.svg";
import Quote2Img from "@/assets/images/quote2.svg";

import CoverImg from "@/assets/images/cover.svg";
import OriginalImg from "@/assets/images/original.svg";
import LogoImg from "@/assets/images/logo-main.svg";
import StarImg from "@/assets/images/star.svg";
import { FadeIn, SlideIn, SlideUp } from "@/components/Motion";

const HomeProps = () => {
  return (
    <section className="bg-white">
      <FadeIn>
        <div className="bg-accent py-5 md:py-7 w-full text-center relative">
          <h4 className="text-xl md:text-2xl">We sit at the intersection of talent, capital, and culture.</h4>
        <Image
          src={CoverImg}
          alt="cover"
          fill
          className="absolute inset-0 w-full h-full object-cover opacity-50 pointer-events-none"
          priority
        />
        </div>
      </FadeIn>
      <div className="max-w-[1800px] mx-auto grid grid-cols-1 md:grid-cols-2 px-6 md:px-20 pb-8 md:pb-12 pt-4 md:pt-8 bg-white gap-8 md:gap-0">
        <div className="mt-6 md:mt-10">
          <SlideIn direction="left">
            <p className="text-base md:text-xl font-avenir-medium max-w-[550px] uppercase mb-10 md:mb-20">
              We manage talents, partner with brands driving popular culture and
              invest directly in creators shaping Africa&apos;s internet culture.
            </p>
          </SlideIn>
          <SlideUp delay={0.2}>
            <div>
              <Image
                src={WomanImg}
                alt="woman"
                width={1000}
                height={1000}
                className="object-cover w-[80%] md:w-[60%]"
              />
            </div>
          </SlideUp>
        </div>
        <div>
          <div>
            <SlideIn direction="right">
              <div className="relative">
                <Image
                  src={WomanSecImg}
                  alt="woman"
                  width={1000}
                  height={1000}
                  className="object-cover w-[70%] md:w-[60%] mx-auto z-20 relative"
                />
                <Image
                  src={Quote1Img}
                  alt="quote 1"
                  width={182}
                  height={182}
                  className="absolute -top-4 md:-top-8 right-2 md:right-10 z-10 w-16 md:w-auto"
                />
                <Image
                  src={Quote2Img}
                  alt="quote 2"
                  width={182}
                  height={182}
                  className="hidden md:block absolute top-8 md:top-14 left-2 md:left-10 z-10 w-16 md:w-auto"
                />
              </div>
            </SlideIn>
            <SlideIn direction="right" delay={0.2}>
              <div className="relative group max-w-[520px] md:ml-auto mt-10 md:mt-20 mb-10 md:mb-20 hidden md:block">
                {/* glow frame */}
                <div className="absolute -inset-2 rounded-[26px] bg-gradient-to-tr from-accent/30 via-transparent to-accent/10 blur opacity-80 transition-opacity duration-300 group-hover:opacity-100" />
                {/* offset layer */}
                <div className="absolute inset-0 -rotate-2 rounded-[22px] border border-black/10 bg-black/5" />
                {/* main card */}
                <div className="relative rounded-2xl md:rounded-3xl overflow-hidden border-2 border-accent shadow-[0_8px_28px_rgba(0,0,0,0.35)] transition-transform duration-300 group-hover:-translate-y-1">
                  <Image src={OriginalImg} alt="" aria-hidden className="w-full object-cover" />
                  <Image src={CoverImg} alt="" aria-hidden className="absolute inset-0 opacity-30 mix-blend-overlay" />
                  {/* watermark + sticker */}
                  <Image src={LogoImg} alt="" aria-hidden width={160} height={160} className="absolute left-4 bottom-4 w-16 opacity-60" />
                  <Image src={StarImg} alt="" aria-hidden width={120} height={120} className="absolute right-4 top-4 w-10 opacity-90 transition-transform duration-300 group-hover:rotate-12" />
                </div>
              </div>
            </SlideIn>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeProps;
