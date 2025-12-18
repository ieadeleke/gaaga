import Image from "next/image";

import GaageMain from "@/assets/images/gaaga-huge.svg";
import AboutHeroImg from "@/assets/images/about-hero.svg";

const AboutHero = () => {
  return (
    <header className="pt-40 bg-[#111]">
      <div className="max-w-[1800px] mx-auto flex items-top justify-center gap-5">
        <h4 className="text-4xl text-white">About</h4>
        <Image
          src={GaageMain}
          alt="Gaaga stylish design"
          width={1000}
          height={1000}
          className="w-[550px] h-full"
        />
      </div>
      <div className="max-w-[1800px] mx-auto px-28 mt-20">
        <div className="grid grid-cols-2 gap-10">
          <div className="mt-20">
            <h4 className="text-3xl font-avenir-light! text-white uppercase">
              Gaaga Agency began in Lagos with a simple belief: <br />
              <span className="font-avenir">
                Africa’s creators deserve real support — not just visibility.
              </span>
            </h4>
          </div>
          <div>
            <Image
              src={AboutHeroImg}
              alt="About hero main"
              width={1000}
              height={1000}
              className="max-w-[450px] mx-auto h-full"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default AboutHero;
