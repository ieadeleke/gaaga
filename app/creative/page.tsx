import CreativeHeroV2 from "@/features/creative/components/HeroV2";
import TalentRoster from "@/features/creative/components/TalentRoster";
import ValueProps from "@/features/creative/components/ValueProps";
import BookingSteps from "@/features/creative/components/BookingSteps";
import BrandFAQ from "@/features/creative/components/BrandFAQ";
import ContactPoint from "@/features/about-us/components/ContactPoint";

const CreativePage = () => {
  return (
    <div className="bg-[#111111]">
      <CreativeHeroV2 />
      <TalentRoster />
      <ValueProps />
      <BookingSteps />
      <BrandFAQ />
      <ContactPoint />
    </div>
  );
};

export default CreativePage;
