import AboutHero from "@/features/about-us/components/Hero";
import AboutProps from "@/features/about-us/components/Props";
import OurApproach from "@/features/about-us/components/Approach";
import FAQ from "@/features/about-us/components/FAQ";
import ContactPoint from "@/features/about-us/components/ContactPoint";

const AboutUsPage = () => {
  return (
    <div className="bg-[#111]">
      <AboutHero />
      <AboutProps />
      <OurApproach />
      <FAQ />
      <ContactPoint />
    </div>
  );
};

export default AboutUsPage;
