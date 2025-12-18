import Image from "next/image";

import GaageMain from "@/assets/images/abt-main.svg";

const AboutProps = () => {
  return (
    <section className="px-20 mt-32">
      <div className="md:max-w-[1240px] mx-auto relative pt-28 pb-20">
        <div className="mb-32 z-20 relative px-10">
          <p className="text-2xl uppercase text-white w- [0%] max-w-[520px] text-right ml-auto font-avenir-light">
            Our mission is simple: To empower African creators with the tools,
            resources, and support they need to build careers that last.
          </p>
        </div>
        <div className="w-[540px] text-white uppercase z-20 relative px-8">
          <h4 className="font-avenir-light! text-2xl mb-4">Our Vision?</h4>
          <p className="text-2xl uppercase font-avenir-light">
            To become Africa’s most trusted creator venture network — exporting
            talent, ideas, and culture to the world.
          </p>
        </div>
        <div>
          <Image
            src={GaageMain}
            alt="Gaaga about hero design"
            width={1000}
            height={1000}
            className="absolute inset-0 z-10 w-full h-full md:min-w-[1240px]"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutProps;
