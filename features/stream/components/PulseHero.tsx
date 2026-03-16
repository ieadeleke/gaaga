import Image from "next/image";
import GaageMain from "@/assets/images/gaaga-huge.svg";
import OriginalImg from "@/assets/images/original.svg";
import ArrowImg from "@/assets/images/arrow.svg";
import Link from "next/link";
import { FadeIn, SlideIn, SlideUp } from "@/components/Motion";

const PulseHero = () => {
  return (
    <header className="pt-24 md:pt-40 bg-[#111]">
      <FadeIn>
        <div className="max-w-[1800px] mx-auto flex items-center justify-center gap-3 md:gap-5 px-4">
          <h4 className="text-2xl md:text-4xl text-white">Gaaga&apos;s Pulse</h4>
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-center">
          <SlideIn direction="left">
            <div className="mt-6 md:mt-20">
              <h2 className="text-xl md:text-3xl font-avenir text-white uppercase mb-6 md:mb-10">
                The Pulse of African Culture.{" "}
                <span className="text-accent">All in One Place.</span>
              </h2>
              <div className="flex flex-col gap-4 md:gap-6 text-white/70 font-avenir-light text-sm md:text-base leading-relaxed max-w-[520px] mb-8 md:mb-12">
                <p className="text-white font-avenir">
                  If it&apos;s happening, it&apos;s here first.
                </p>
                <p>
                  Gaaga Pulse keeps you in the loop. Editorial, video, events,
                  and more — all through a distinctly African lens.
                </p>
              </div>
              <Link
                href="#categories"
                className="inline-flex items-center gap-3 bg-accent text-black uppercase font-milker py-3 md:py-4 px-6 md:px-8 rounded-lg text-sm md:text-base"
              >
                Explore the Pulse
                <Image src={ArrowImg} alt="" width={20} height={20} />
              </Link>
            </div>
          </SlideIn>

          <SlideIn direction="right" delay={0.2}>
            <div className="flex items-center justify-center">
              <Image
                src={OriginalImg}
                alt="Gaaga's Pulse"
                width={1000}
                height={1000}
                className="max-w-[300px] md:max-w-[480px] mx-auto h-full"
              />
            </div>
          </SlideIn>
        </div>
      </div>
    </header>
  );
};

export default PulseHero;
