import Image, { StaticImageData } from "next/image";

import TalentImg from "@/assets/images/talent.svg";
import StarImg from "@/assets/images/star.svg";
import EventsImg from "@/assets/images/events.svg";
import MerchImg from "@/assets/images/merch.svg";
import BrandImg from "@/assets/images/brand.svg";
import { SlideUp, StaggerContainer, StaggerItem } from "@/components/Motion";

const services: { label: string; img: StaticImageData; imgClass: string }[] = [
  { label: "Content & Media Strategy",                  img: StarImg,   imgClass: "w-8 md:w-12" },
  { label: "Content & Creative Production",             img: StarImg,   imgClass: "w-8 md:w-12" },
  { label: "Content Production Support",                img: StarImg,   imgClass: "w-8 md:w-12" },
  { label: "Brand Partnerships & Campaign Strategy",    img: BrandImg,  imgClass: "w-10 md:w-16" },
  { label: "Talent Representation & Brand Development", img: TalentImg, imgClass: "w-8 md:w-12" },
  { label: "Merchandising & Creative Commerce",         img: MerchImg,  imgClass: "w-8 md:w-12" },
  { label: "Content Licensing",                         img: StarImg,   imgClass: "w-8 md:w-12" },
  { label: "Merch & Co-Branded Drops",                  img: MerchImg,  imgClass: "w-8 md:w-12" },
  { label: "Events & Live Moments",                     img: EventsImg, imgClass: "w-6 md:w-9"  },
  { label: "Podcasting",                                img: StarImg,   imgClass: "w-8 md:w-12" },
  { label: "Creator Micro-Fund (Early Stage)",          img: TalentImg, imgClass: "w-8 md:w-12" },
  { label: "Business Strategy",                         img: BrandImg,  imgClass: "w-10 md:w-16" },
];

const OurEcosystem = () => {
  return (
    <div>
      <SlideUp>
        <div className="text-center mb-6 md:mb-10">
          <h3 className="text-2xl md:text-3xl uppercase text-accent">
            Our Ecosystem
          </h3>
        </div>
      </SlideUp>
      <StaggerContainer className="flex text-white flex-col max-w-300 mx-auto">
        {services.map((service, i) => (
          <StaggerItem key={service.label}>
            <div className={`group flex gap-8 md:gap-32 items-center py-6 md:py-12 cursor-default ${i < services.length - 1 ? "border-b border-solid border-white/20" : ""}`}>
              <div className="w-10 md:w-16 shrink-0">
                <Image
                  src={service.img}
                  alt=""
                  width={200}
                  height={200}
                  className={`eco-img ${service.imgClass}`}
                />
              </div>
              <h4 className="eco-text flex-1 text-lg md:text-3xl">
                {service.label}
              </h4>
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </div>
  );
};

export default OurEcosystem;
