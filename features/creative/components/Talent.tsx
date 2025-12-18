import Image from "next/image";

import TalentImg from "@/assets/images/superstar.svg";

const Talent = () => {
  return (
    <section className="bg-black">
      <div className="bg-accent py-9 w-full">
        <h3 className="text-3xl uppercase text-center">Our Projects</h3>
      </div>
      <div className="relative">
        <Image
          src={TalentImg}
          alt="Talent collaboration"
          width={1000}
          height={1000}
          className="w-full h-full"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="pt-32">
            <h4 className="text-6xl text-accent mb-14">FADDO THE GREAT</h4>
            <button className="border-2 bg-accent rounded-lg border-black py-5 px-6 text-xl font-milker mx-auto w-max block">
              View Full Project
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Talent;
