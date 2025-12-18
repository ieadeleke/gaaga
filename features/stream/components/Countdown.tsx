import Image from "next/image";

import PatternImg from "@/assets/images/frame.svg";
import OriginalImg from "@/assets/images/original.svg";
import ContentsImg from "@/assets/images/contents.svg";

const Countdown = () => {
  return (
    <div>
      <section className="px-20 bg-[#111111] pt-8 pb-14">
        <div className="relative rounded-[33px] py-20">
          <Image
            src={PatternImg}
            alt="network"
            className="w-full h-full inset-0 absolute z-10"
          />
          <div className="max-w-[431px] mx-auto z-20 relative">
            <h3 className="text-5xl text-white uppercase text-center mb-5">
              Next Event
            </h3>
            <div className="w-full h-30 bg-black rounded-[18px]"></div>
            <div className="flex items-center justify-between px-10 mt-5">
              <h4 className="text-white uppercase font-avenir">DAYS</h4>
              <h4 className="text-white uppercase font-avenir">HOURS</h4>
              <h4 className="text-white uppercase font-avenir">MINUTES</h4>
              <h4 className="text-white uppercase font-avenir">SECONDS</h4>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-[1fr_1.3fr] gap-0">
          <div>
            <Image src={ContentsImg} alt="contents" className="w-full h-[340px]" />
          </div>
          <div>
            <Image src={OriginalImg} alt="original" className="w-full h-[340px]" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Countdown;
