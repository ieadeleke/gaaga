import Image from "next/image";

import GaageMain from "@/assets/images/abt-main.svg";
import { SlideIn, SlideUp } from "@/components/Motion";

const AboutProps = () => {
  return (
    <section className="px-4 md:px-20 mt-16 md:mt-32">
      <div className="md:max-w-[1240px] mx-auto relative pt-14 md:pt-28 pb-10 md:pb-20">
        <SlideIn direction="right" className="mb-16 md:mb-32 z-20 relative px-4 md:px-10">
          <h4 className="font-avenir-light! text-right text-white uppercase text-xl md:text-2xl mb-4">Our Mission</h4>
          <p className="text-lg md:text-2xl uppercase text-white max-w-[520px] md:text-right md:ml-auto font-avenir-light">
            To give Africa&apos;s most talented creators the tools, resources, and
            backing they need to build careers that don&apos;t just last — but define
            the culture.
          </p>
        </SlideIn>
        <SlideIn direction="left" delay={0.2} className="w-full md:w-[540px] text-white uppercase z-20 relative px-4 pl-40 md:px-8">
          <h4 className="font-avenir-light! text-xl md:text-2xl mb-4">Our Vision</h4>
          <p className="text-lg md:text-2xl uppercase font-avenir-light">
            To become Africa&apos;s most trusted creator venture network; where the
            continent&apos;s best talent, ideas, and culture are built for the world
            stage.
          </p>
        </SlideIn>
        <div>
          <Image
            src={GaageMain}
            alt="Gaaga about hero design"
            fill
            className="absolute inset-0 z-10 w-full h-full object-cover md:min-w-[1240px]"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default AboutProps;
