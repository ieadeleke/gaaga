import Image from "next/image";

import NetworkImg from "@/assets/images/network.svg";
import NetworkBlackImg from "@/assets/images/network-black.svg";
import { SlideUp } from "@/components/Motion";

const StreamHero = () => {
  return (
    <div>
      <div className="bg-black h-24 md:h-32"></div>
      <header className="stream-hero flex items-center justify-center text-center px-4">
        <SlideUp>
          <div className="flex gap-4 items-center text-white justify-center mb-6 md:mb-12">
            <Image src={NetworkImg} alt="network" width={58} height={58} className="w-10 md:w-auto" />
            <h4 className="text-2xl md:text-3xl uppercase">Gaaga 25</h4>
          </div>
          <h2 className="text-2xl md:text-4xl text-white mb-3 md:mb-5">
            Gaaga 25: watch the biggest beach party
          </h2>
          <p className="text-lg md:text-2xl w-[90%] md:w-[50%] mx-auto text-white font-avenir-light mb-5 md:mb-7">
            A 24-hour live showcase of emerging African creators — streaming
            from Lagos.
          </p>
          <button className="py-3 px-6 bg-accent rounded-lg text-sm md:text-base flex items-center gap-3 w-max mx-auto text-center">
            Join Stream
            <Image src={NetworkBlackImg} alt="network" width={26} height={26} />
          </button>
        </SlideUp>
      </header>
    </div>
  );
};

export default StreamHero;
