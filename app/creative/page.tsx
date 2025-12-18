import CreativeHero from "@/features/creative/components/Hero";
import HowWeWork from "@/features/creative/components/HowWeWork";
import Talent from "@/features/creative/components/Talent";

const CreativePage = () => {
  return (
    <div className="bg-[#111111]">
      <CreativeHero />
      <Talent />
      <HowWeWork />
    </div>
  );
};

export default CreativePage;
