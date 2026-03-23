import Image from "next/image";
import TalentImg from "@/assets/images/talent.svg";
import StarImg from "@/assets/images/star.svg";
import EventsImg from "@/assets/images/events.svg";
import MerchImg from "@/assets/images/merch.svg";
import BrandImg from "@/assets/images/brand.svg";
import { SlideUp, StaggerContainer, StaggerItem } from "@/components/Motion";

const items = [
  { label: "Brand Partnerships", img: BrandImg },
  { label: "Campaign Talent", img: TalentImg },
  { label: "Content & Editorial", img: StarImg },
  { label: "Events & Live Moments", img: EventsImg },
  { label: "Merch & Drops", img: MerchImg },
];

const ValueProps = () => {
  return (
    <section className="bg-[#111]">
      <SlideUp>
        <div className="text-center mb-6 md:mb-10 px-4">
          <h3 className="text-2xl md:text-3xl uppercase text-accent">What We Do With Talent</h3>
        </div>
      </SlideUp>

      <StaggerContainer className="flex text-white flex-col max-w-3xl md:max-w-5xl mx-auto px-6 md:px-0">
        {items.map((item, i) => (
          <StaggerItem key={item.label}>
            <div className={`group flex gap-6 md:gap-12 items-center py-5 md:py-8 cursor-default ${i < items.length - 1 ? "border-b border-solid border-white/20" : ""}`}>
              <div className="w-10 md:w-16 shrink-0">
                <Image src={item.img} alt="" width={200} height={200} className="w-8 md:w-12" />
              </div>
              <h4 className="flex-1 text-lg md:text-2xl">{item.label}</h4>
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </section>
  );
};

export default ValueProps;

