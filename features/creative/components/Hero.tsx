import Image from "next/image";

import LayerImg from "@/assets/images/layer.svg";
import Link from "next/link";

const CreativeHero = () => {
  return (
    <header className="gaaga-hero min-h-165 bg-[#18092D7D] relative mb-8 flex items-center justify-center">
      <div className="z-30 text-center pt-28">
        <h2 className="text-[50px] leading-none text-accent uppercase w-[60%] mx-auto mb-4">
          Projects That Shape Our Story.
        </h2>
        <p className="text-[32px] font-avenir-light leading-loose md:leading-none w-[60%] mb-16 mx-auto text-white">
          Explore the first generation of creators building the Gaaga narrative.
        </p>
        <Link
          href=""
          className="uppercase font-milker bg-accent relative py-5 rounded-lg px-7 text-lg"
        >
          Get Started
        </Link>
      </div>
      <Image
        src={LayerImg}
        alt="background gradient"
        width={1000}
        height={1000}
        className="absolute inset-0 w-full h-full z-20"
      />
    </header>
  );
};

export default CreativeHero;
