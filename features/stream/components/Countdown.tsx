import Image from "next/image";

import PatternImg from "@/assets/images/frame.svg";
import OriginalImg from "@/assets/images/original.svg";
import ContentsImg from "@/assets/images/contents.svg";
import { ScaleIn, StaggerContainer, StaggerItem } from "@/components/Motion";

const Countdown = () => {
  return (
    <div>
      <section className="px-4 md:px-20 bg-[#111111] pt-8 pb-10 md:pb-14">
        <ScaleIn className="max-w-[1600px] mx-auto relative rounded-2xl md:rounded-[33px] py-12 md:py-20 mb-2">
          <Image
            src={PatternImg}
            alt="network"
            className="w-full h-full inset-0 absolute z-10 object-cover rounded-2xl md:rounded-4xl"
          />
          <div className="max-w-[320px] md:max-w-[431px] mx-auto z-20 relative px-4">
            <h3 className="text-3xl md:text-5xl text-white uppercase text-center mb-3 md:mb-5">
              Next Event
            </h3>
            <div className="w-full h-20 md:h-30 bg-black rounded-xl md:rounded-[18px]"></div>
            <div className="flex items-center justify-between px-2 md:px-10 mt-3 md:mt-5">
              <h4 className="text-white uppercase font-avenir text-xs md:text-base">DAYS</h4>
              <h4 className="text-white uppercase font-avenir text-xs md:text-base">HOURS</h4>
              <h4 className="text-white uppercase font-avenir text-xs md:text-base">MINUTES</h4>
              <h4 className="text-white uppercase font-avenir text-xs md:text-base">SECONDS</h4>
            </div>
          </div>
        </ScaleIn>
        <StaggerContainer className="max-w-[1600px] mx-auto grid grid-cols-1 md:grid-cols-[1fr_1.3fr] gap-4">
          <StaggerItem>
            <Image src={ContentsImg} alt="contents" className="w-full h-[200px] md:h-[340px] object-cover rounded-2xl md:rounded-4xl" />
          </StaggerItem>
          <StaggerItem>
            <Image src={OriginalImg} alt="original" className="w-full h-[200px] md:h-[340px] object-cover rounded-2xl md:rounded-4xl" />
          </StaggerItem>
        </StaggerContainer>
      </section>
    </div>
  );
};

export default Countdown;
