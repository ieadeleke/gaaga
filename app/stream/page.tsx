import PulseHero from "@/features/stream/components/PulseHero";
import PulseCategories from "@/features/stream/components/PulseCategories";
import PulseNewsletter from "@/features/stream/components/PulseNewsletter";

const GaagaPulsePage = () => {
  return (
    <div className="bg-black">
      <PulseHero />
      <PulseCategories />
      <PulseNewsletter />
    </div>
  );
};

export default GaagaPulsePage;
