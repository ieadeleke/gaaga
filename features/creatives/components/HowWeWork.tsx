import Image from "next/image";

import TalentImg from "@/assets/images/talent.svg";
import StarImg from "@/assets/images/star.svg";
import EventsImg from "@/assets/images/events.svg";
import MerchImg from "@/assets/images/merch.svg";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/Motion";

const HowWeWork = () => {
  return (
    <section className="bg-black">
      <FadeIn>
        <div className="bg-accent py-6 md:py-9 w-full">
          <h3 className="text-2xl md:text-3xl uppercase text-center">
            How We Work With Brands
          </h3>
        </div>
      </FadeIn>
      <StaggerContainer className="flex text-white flex-col max-w-300 mx-auto px-4 md:px-0">
        <StaggerItem>
          <div className="flex gap-8 md:gap-32 items-center py-8 md:py-16 border-b border-solid border-white">
            <div className="w-10 md:w-16 shrink-0">
              <Image src={TalentImg} alt="Talent collaboration" width={200} height={200} className="w-8 md:w-12" />
            </div>
            <h4 className="flex-1 text-lg md:text-3xl">Talent Collaborations</h4>
          </div>
        </StaggerItem>
        <StaggerItem>
          <div className="flex gap-8 md:gap-32 items-center py-8 md:py-16 border-b border-solid border-white">
            <div className="w-10 md:w-16 shrink-0">
              <Image src={StarImg} alt="Content & Creative Production" width={200} height={200} className="w-8 md:w-12" />
            </div>
            <h4 className="flex-1 text-lg md:text-3xl">Content & Creative Production</h4>
          </div>
        </StaggerItem>
        <StaggerItem>
          <div className="flex gap-8 md:gap-32 items-center py-8 md:py-16 border-b border-solid border-white">
            <div className="w-10 md:w-16 shrink-0">
              <Image src={EventsImg} alt="Events & Live Moments" width={200} height={200} className="w-6 md:w-9" />
            </div>
            <h4 className="flex-1 text-lg md:text-3xl">Events & Live Moments</h4>
          </div>
        </StaggerItem>
        <StaggerItem>
          <div className="flex gap-8 md:gap-32 items-center py-8 md:py-16">
            <div className="w-10 md:w-16 shrink-0">
              <Image src={MerchImg} alt="Merch & Co-Branded Drops" width={200} height={200} className="w-8 md:w-12" />
            </div>
            <h4 className="flex-1 text-lg md:text-3xl">Merch & Co-Branded Drops</h4>
          </div>
        </StaggerItem>
      </StaggerContainer>
    </section>
  );
};

export default HowWeWork;
