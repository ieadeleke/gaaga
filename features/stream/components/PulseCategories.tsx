import Image from "next/image";
import StarImg from "@/assets/images/star.svg";
import EventsImg from "@/assets/images/events.svg";
import BulbImg from "@/assets/images/bulb.svg";
import NetworkImg from "@/assets/images/network.svg";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/Motion";

const categories = [
  {
    icon: StarImg,
    label: "Editorial",
    desc: "Sharp takes, deep dives, and stories worth your time. Written by people who actually live the culture.",
  },
  {
    icon: NetworkImg,
    label: "Video",
    desc: "From short-form to long-form — creator content, originals, and visual stories from across the continent.",
  },
  {
    icon: EventsImg,
    label: "Events",
    desc: "What's on, what's next, and what you can't miss. Live moments that move the culture forward.",
  },
  {
    icon: BulbImg,
    label: "Culture",
    desc: "Music, fashion, tech, sport, art. The full picture of what Africa is creating right now.",
  },
];

const PulseCategories = () => {
  return (
    <section id="categories" className="bg-[#111] py-16 md:py-28 px-4 md:px-20">
      <FadeIn>
        <div className="text-center mb-12 md:mb-20">
          <p className="text-white/40 uppercase tracking-[0.2em] text-xs md:text-sm font-avenir-light mb-3">
            What&apos;s inside
          </p>
          <h2 className="text-2xl md:text-4xl text-white uppercase">
            Everything the culture is doing.
          </h2>
        </div>
      </FadeIn>

      <StaggerContainer className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10">
        {categories.map((cat) => (
          <StaggerItem key={cat.label}>
            <div className="bg-[#111] p-8 md:p-12 group hover:bg-[#1a1a1a] transition-colors duration-500">
              <Image
                src={cat.icon}
                alt=""
                width={40}
                height={40}
                className="w-8 md:w-10 mb-6 md:mb-8 opacity-60 group-hover:opacity-100 transition-opacity duration-500"
              />
              <h3 className="text-xl md:text-3xl text-accent uppercase mb-3 md:mb-4 font-avenir">
                {cat.label}
              </h3>
              <p className="text-sm md:text-base font-avenir-light text-white/60 leading-relaxed max-w-[380px]">
                {cat.desc}
              </p>
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </section>
  );
};

export default PulseCategories;
