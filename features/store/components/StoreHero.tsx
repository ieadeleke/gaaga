import Image from "next/image";
import GaageMain from "@/assets/images/gaaga-huge.svg";
import Merch1 from "@/assets/images/merch-1.svg";
import { FadeIn, SlideIn } from "@/components/Motion";
import StarImg from "@/assets/images/star.svg";

const StoreHero = () => {
  return (
    <header className="pt-24 md:pt-40 bg-[#111]">
      <FadeIn>
        <div className="max-w-[1800px] mx-auto flex items-center justify-center px-4">
          <div className="relative inline-block">
            <Image
              src={GaageMain}
              alt="Gaaga"
              width={1000}
              height={1000}
              className="w-[250px] md:w-[550px] h-full"
            />
            <div className="absolute -top-2 -right-2 md:top-1 md:-right-3 bg-black/70 border border-accent text-accent uppercase text-[10px] md:text-xs rounded-full px-2.5 py-1 flex items-center gap-1.5 backdrop-blur-sm">
              <Image src={StarImg} alt="" width={14} height={14} className="w-3 h-3" />
              <span>Official Merch</span>
            </div>
          </div>
        </div>
      </FadeIn>

      <div className="max-w-[1800px] mx-auto px-6 md:px-28 mt-10 md:mt-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-center pb-16 md:pb-24">
          <SlideIn direction="left">
            <div className="mt-6 md:mt-20">
              <h1 className="text-3xl md:text-5xl font-avenir text-white uppercase mb-4 md:mb-6">
                The GG Store.
              </h1>
              <p className="text-xl md:text-3xl font-avenir-light text-accent uppercase mb-2">
                Wear the culture.
              </p>
            </div>
          </SlideIn>

          <SlideIn direction="right" delay={0.2}>
            <Image
              src={Merch1}
              alt="GG Store merch"
              width={1000}
              height={1000}
              className="max-w-[340px] md:max-w-[500px] mx-auto w-full rounded-2xl md:rounded-[33px] object-cover"
            />
          </SlideIn>
        </div>
      </div>
    </header>
  );
};

export default StoreHero;
