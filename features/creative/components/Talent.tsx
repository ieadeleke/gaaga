import Image from "next/image";

import TalentImg from "@/assets/images/superstar.svg";
import { FadeIn, ScaleIn } from "@/components/Motion";

const Talent = () => {
  return (
    <section className="bg-black">
      <FadeIn>
        <div className="bg-accent py-6 md:py-9 w-full">
          <h3 className="text-2xl md:text-3xl uppercase text-center">Our Projects</h3>
        </div>
      </FadeIn>
      <ScaleIn className="relative">
        <Image
          src={TalentImg}
          alt="Talent collaboration"
          width={1000}
          height={1000}
          className="w-full h-full"
        />
        <div className="absolute inset-0 flex items-center justify-center px-4">
          <div className="pt-16 md:pt-32">
            <h4 className="text-3xl md:text-6xl text-accent mb-6 md:mb-14 text-center">FADDO THE GREAT</h4>
            <button className="border-2 bg-accent rounded-lg border-black py-3 md:py-5 px-4 md:px-6 text-base md:text-xl font-milker mx-auto w-max block">
              View Full Project
            </button>
          </div>
        </div>
      </ScaleIn>
    </section>
  );
};

export default Talent;
