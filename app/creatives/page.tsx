import ContactUsPage from "@/components/Contact";
import GaagaHero from "@/features/creatives/components/Hero";
import HowWeWork from "@/features/creatives/components/HowWeWork";
import WhyGaaga from "@/features/creatives/components/WhyGaaga";

const CreativesPage = () => {
  return (
    <div className="bg-[#111111] pb-10">
      <GaagaHero />
      <HowWeWork />
      <WhyGaaga />
      <ContactUsPage />
    </div>
  );
};

export default CreativesPage;
