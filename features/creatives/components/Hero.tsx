import Image from "next/image";

import LayerImg from "@/assets/images/layer.svg";
import Link from "next/link";
import { SlideUp } from "@/components/Motion";

const GaagaHero = () => {
  return (
    <header className="gaaga-hero min-h-[400px] md:min-h-165 bg-[#18092D7D] relative mb-8 flex items-center justify-center">
      <SlideUp className="z-30 text-center pt-20 md:pt-28 px-4">
        <h2 className="text-2xl md:text-[50px] leading-tight md:leading-none text-accent uppercase w-[90%] md:w-[50%] mx-auto mb-3 md:mb-4">
          Brands That Get It.
        </h2>
        <p className="text-lg md:text-[32px] font-avenir-light leading-relaxed md:leading-none w-[90%] md:w-[50%] mb-8 md:mb-16 mx-auto text-white">
          We&apos;ve partnered with some of the most exciting brands in the game —
          and we&apos;re always looking for the next great fit.
        </p>
        <Link
          href="/contact-us"
          className="uppercase font-milker bg-accent inline-block text-center break-words max-w-[90%] md:max-w-none py-3 md:py-5 rounded-lg px-4 md:px-7 text-sm md:text-lg"
        >
          Let&apos;s talk about your campaign
        </Link>
      </SlideUp>
      <Image
        src={LayerImg}
        alt="background gradient"
        fill
        className="absolute inset-0 w-full h-full object-cover z-20"
        priority
      />
    </header>
  );
};

export default GaagaHero;
