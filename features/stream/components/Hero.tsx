import Image from "next/image";

import NetworkImg from "@/assets/images/network.svg";
import NetworkBlackImg from "@/assets/images/network-black.svg";

const StreamHero = () => {
  return (
    <div>
      <div className="bg-black h-32"></div>
      <header className="stream-hero flex items-center justify-center text-center">
        <div>
          <div className="flex gap-4 items-center text-white justify-center mb-12">
            <Image src={NetworkImg} alt="network" width={58} height={58} />
            <h4 className="text-3xl uppercase">Gaaga 25</h4>
          </div>
          <h2 className="text-4xl text-white mb-5">
            Gaaga 25: watch the biggest beach party
          </h2>
          <p className="text-2xl w-[50%] mx-auto text-white font-avenir-light mb-7">
            A 24-hour live showcase of emerging African creators — streaming
            from Lagos.
          </p>
          <button className="py-3 px-6 bg-accent rounded-lg text-base flex items-center gap-3 w-max mx-auto text-center">
            Join Stream
            <Image src={NetworkBlackImg} alt="network" width={26} height={26} />
          </button>
        </div>
      </header>
    </div>
  );
};

export default StreamHero;
