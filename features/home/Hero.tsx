import Image from "next/image";
import GaageMain from "@/assets/images/gaaga-huge.svg";
import Hero4Img from "@/assets/images/hero.gif";

const HomeHero = () => {
  return (
    <header className="pt-40">
      <div>
        <Image
          src={GaageMain}
          alt="Gaaga stylish design"
          width={1000}
          height={1000}
          className="w-[550px] mx-auto h-full mb-24"
        />
        <div className="sawtooth-mask relative">
          <Image
            src={Hero4Img}
            alt="checklist"
            width={1000}
            height={1000}
            className="w-full h-full object-cover"
          />
          <div className="text-center max-w-[752px] mx-auto absolute inset-0 top-20">
            <h1 className="text-4xl text-white mb-3">
              Growing With Emerging Creators.
            </h1>
            <p className="text-xl w-[90%] mx-auto font-avenir-medium text-white mb-20">
              Gaaga Agency is a venture studio empowering Africa’s next
              generation of digital creators — turning creativity into capital.
            </p>
            <div className="flex items-center justify-center gap-5">
              <button className="bg-accent rounded-lg border-2 border-accent font-avenir-medium py-3 px-4 text-black">
                View Our Projects
              </button>
              <button className="border-2 rounded-lg bg-transparent border-accent font-avenir-medium text-accent py-3 px-4 capitalize">
                Pitch your Project
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HomeHero;
