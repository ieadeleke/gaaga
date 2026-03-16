import Image from "next/image";
import WomanImg from "@/assets/images/woman.svg";
import WomanSecImg from "@/assets/images/woman-sec.svg";
import Quote1Img from "@/assets/images/quote1.svg";
import Quote2Img from "@/assets/images/quote2.svg";

import CoverImg from "@/assets/images/cover.svg";
import { FadeIn, SlideIn, SlideUp } from "@/components/Motion";

const HomeProps = () => {
  return (
    <section className="bg-white">
      <FadeIn>
        <div className="bg-accent pt-7 pb-7 w-full text-center relative">
          <h4 className="text-xl md:text-2xl">We sit at the intersection of talent, capital, and culture.</h4>
        <Image
          src={CoverImg}
          alt="cover"
          width={1000}
          height={1000}
          className="h-full inset-0 w-full absolute"
        />
        </div>
      </FadeIn>
      <div className="max-w-[1800px] mx-auto grid grid-cols-1 md:grid-cols-2 px-6 md:px-20 pb-10 md:pb-14 pt-8 md:pt-12 bg-white gap-8 md:gap-0">
        <div className="mt-6 md:mt-10">
          <SlideIn direction="left">
            <p className="text-base md:text-xl font-avenir-medium max-w-[550px] uppercase mb-10 md:mb-20">
              We manage talents, partner with brands driving popular culture and
              invest directly in creators shaping Africa&apos;s internet culture.
            </p>
          </SlideIn>
          <SlideUp delay={0.2}>
            <div>
              <Image
                src={WomanImg}
                alt="woman"
                width={1000}
                height={1000}
                className="object-cover w-[80%] md:w-[60%]"
              />
            </div>
          </SlideUp>
        </div>
        <div>
          <div>
            <SlideIn direction="right">
              <div className="relative">
                <Image
                  src={WomanSecImg}
                  alt="woman"
                  width={1000}
                  height={1000}
                  className="object-cover w-[70%] md:w-[60%] mx-auto z-20 relative"
                />
                <Image
                  src={Quote1Img}
                  alt="quote 1"
                  width={182}
                  height={182}
                  className="absolute -top-4 md:-top-8 right-2 md:right-10 z-10 w-16 md:w-auto"
                />
                <Image
                  src={Quote2Img}
                  alt="quote 2"
                  width={182}
                  height={182}
                  className="absolute top-8 md:top-14 left-2 md:left-10 z-10 w-16 md:w-auto"
                />
              </div>
            </SlideIn>
            <SlideIn direction="right" delay={0.2}>
              <p className="text-base md:text-xl font-avenir-medium max-w-[480px] md:ml-auto uppercase mb-10 md:mb-20 md:text-right mt-10 md:mt-20">
                Whether you&apos;re a creator ready to scale, a brand looking for
                authentic reach, or an investor backing Africa&apos;s creative future,
                Gaaga is the partner built for this moment.
              </p>
            </SlideIn>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeProps;
