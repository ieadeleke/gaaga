import Image from "next/image";

import TalentImg from "@/assets/images/talent.svg";
import StarImg from "@/assets/images/star.svg";
import EventsImg from "@/assets/images/events.svg";
import MerchImg from "@/assets/images/merch.svg";
import BrandImg from "@/assets/images/brand.svg";
import { SlideUp, StaggerContainer, StaggerItem } from "@/components/Motion";

const OurEcosystem = () => {
  return (
    <div>
      <SlideUp>
        <h3 className="text-2xl md:text-3xl uppercase text-center text-accent mb-6 md:mb-10">
          Our Ecosystem
        </h3>
      </SlideUp>
      <StaggerContainer className="flex text-white flex-col max-w-300 mx-auto">
        <StaggerItem>
          <div className="flex gap-8 md:gap-32 items-center py-8 md:py-16 border-b border-solid border-white">
            <div className="w-10 md:w-16 shrink-0">
              <Image src={TalentImg} alt="Talent collaboration" width={200} height={200} className="w-8 md:w-12" />
            </div>
            <h4 className="flex-1 text-lg md:text-3xl">Talent Representation & Brand Development</h4>
          </div>
        </StaggerItem>
        <StaggerItem>
          <div className="flex gap-8 md:gap-32 items-center py-8 md:py-16 border-b border-solid border-white">
            <div className="w-10 md:w-16 shrink-0">
              <Image src={StarImg} alt="Content & Creative Production" width={200} height={200} className="w-8 md:w-12" />
            </div>
            <h4 className="flex-1 text-lg md:text-3xl">Content Production Support</h4>
          </div>
        </StaggerItem>
        <StaggerItem>
          <div className="flex gap-8 md:gap-32 items-center py-8 md:py-16 border-b border-solid border-white">
            <div className="w-10 md:w-16 shrink-0">
              <Image src={EventsImg} alt="Events & Live Moments" width={200} height={200} className="w-6 md:w-9" />
            </div>
            <h4 className="flex-1 text-lg md:text-3xl">Merchandising & Creative Commerce</h4>
          </div>
        </StaggerItem>
        <StaggerItem>
          <div className="flex gap-8 md:gap-32 items-center py-8 md:py-16 border-b border-solid border-white">
            <div className="w-10 md:w-16 shrink-0">
              <Image src={MerchImg} alt="Merch & Co-Branded Drops" width={200} height={200} className="w-8 md:w-12" />
            </div>
            <h4 className="flex-1 text-lg md:text-3xl">Creator Micro-Fund (Early Stage)</h4>
          </div>
        </StaggerItem>
        <StaggerItem>
          <div className="flex gap-8 md:gap-32 items-center py-8 md:py-16">
            <div className="w-10 md:w-16 shrink-0">
              <Image src={BrandImg} alt="Brand Partnerships & Campaign Strategy" width={200} height={200} className="w-10 md:w-16" />
            </div>
            <h4 className="flex-1 text-lg md:text-3xl">Brand Partnerships & Campaign Strategy</h4>
          </div>
        </StaggerItem>
      </StaggerContainer>
    </div>
  );
};

export default OurEcosystem;
