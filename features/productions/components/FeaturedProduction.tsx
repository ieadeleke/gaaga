import Image from "next/image";
import HomeMain1 from "@/assets/images/home-main-1.svg";
import { SlideUp, ScaleIn } from "@/components/Motion";

const FeaturedProduction = () => {
  return (
    <section className="px-4 md:px-20 py-10 md:py-20">
      <div className="max-w-[1450px] mx-auto">
        <SlideUp>
          <h3 className="text-2xl md:text-4xl text-accent uppercase mb-6 md:mb-10 text-center">
            Featured Production
          </h3>
        </SlideUp>
        <ScaleIn className="relative rounded-2xl md:rounded-[30px] overflow-hidden group">
          <Image
            src={HomeMain1}
            alt="Rhythm of Lagos — Featured Production"
            width={1400}
            height={700}
            className="w-full h-[300px] md:h-[550px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12">
            <span className="inline-block bg-accent text-black text-xs md:text-sm font-avenir-medium px-3 py-1 rounded-full mb-3">
              Music Video
            </span>
            <h4 className="text-2xl md:text-5xl text-white mb-2 md:mb-4">
              Rhythm of Lagos
            </h4>
            <p className="text-sm md:text-xl font-avenir-light text-white/90 max-w-[700px] mb-4 md:mb-6">
              A vibrant Afrobeats visual that captures the pulse of Lagos
              nightlife — directed for breakout artist Teni Maverick. Shot across
              five iconic locations, blending street culture with cinematic flair.
            </p>
            <p className="text-sm md:text-base font-avenir-medium text-accent">
              Artist: Teni Maverick
            </p>
          </div>
        </ScaleIn>
      </div>
    </section>
  );
};

export default FeaturedProduction;
