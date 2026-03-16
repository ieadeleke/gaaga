import Link from "next/link";
import Image from "next/image";
import ArrowImg from "@/assets/images/arrow.svg";
import { FadeIn, SlideUp, StaggerContainer, StaggerItem } from "@/components/Motion";

const WhyGaaga = () => {
  return (
    <section className="">
      <FadeIn>
        <div className="bg-accent py-6 w-full mb-6 md:mb-10">
          <h3 className="text-2xl md:text-3xl uppercase text-center">Why Gaaga</h3>
        </div>
      </FadeIn>
      <div className="px-4 md:px-0">
        <SlideUp>
          <p className="text-xl md:text-3xl capitalize leading-relaxed text-center font-avenir-light text-accent max-w-[900px] md:w-287.75 mx-auto">
          Because cookie-cutter campaigns don&apos;t cut it anymore. Your audience
          knows the difference — and so do we. We move fast, we care about the
          match, and we stay in it with you the whole way. Giving you the right
          creator, the right story, the right result.
        </p>
        </SlideUp>
        <StaggerContainer className="max-w-[900px] md:w-300 mx-auto mt-8 md:mt-12">
          <StaggerItem>
            <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-4 md:gap-24 border-b py-4 md:py-5 border-solid border-white">
            <div className="flex gap-3 items-end">
              <p className="text-white">01</p>
              <h4 className="text-2xl md:text-4xl text-accent">Real Creative Voices</h4>
            </div>
            <div>
              <p className="text-lg md:text-[28px] text-accent font-avenir-light">
                Talent that&apos;s rooted in the culture — not just performing it.
              </p>
            </div>
          </div>
          </StaggerItem>
          <StaggerItem>
            <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-4 md:gap-24 border-b py-4 md:py-5 border-solid border-white">
            <div className="flex gap-3 items-end">
              <p className="text-white">02</p>
              <h4 className="text-2xl md:text-4xl text-accent">Authenticity First</h4>
            </div>
            <div>
              <p className="text-lg md:text-[28px] text-accent font-avenir-light">
                Stories that feel lived-in, local, and genuinely connected to the people watching.
              </p>
            </div>
          </div>
          </StaggerItem>
          <StaggerItem>
            <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-4 md:gap-24 border-b py-4 md:py-5 border-solid border-white">
            <div className="flex gap-3 items-end">
              <p className="text-white">03</p>
              <h4 className="text-2xl md:text-4xl text-accent">Measurable Reach</h4>
            </div>
            <div>
              <p className="text-lg md:text-[28px] text-accent font-avenir-light">
                You&apos;ll always know what&apos;s working — clear performance insights and campaigns you can actually track.
              </p>
            </div>
          </div>
          </StaggerItem>
          <StaggerItem>
            <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-4 md:gap-24 py-4 md:py-5">
            <div className="flex gap-3 items-end">
              <p className="text-white">04</p>
              <h4 className="text-2xl md:text-4xl text-accent">Hands-on Execution</h4>
            </div>
            <div>
              <p className="text-lg md:text-[28px] text-accent font-avenir-light">
                From concept to rollout, we&apos;re right there with you. Every step.
              </p>
            </div>
          </div>
          </StaggerItem>
        </StaggerContainer>
        <Link
          href=""
          className="uppercase text-base md:text-xl rounded-lg flex items-center gap-3 bg-accent py-3 px-4 md:px-6 w-max mx-auto mt-5 mb-10 md:mb-20 font-milker"
        >
          Get in Touch
          <Image src={ArrowImg} alt="arrow icon" width={24} height={24} />
        </Link>
      </div>
    </section>
  );
};

export default WhyGaaga;
