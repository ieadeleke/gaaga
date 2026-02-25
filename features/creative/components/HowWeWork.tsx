import Image from "next/image";

import GearImg from "@/assets/images/gear.svg";
import CheckListImg from "@/assets/images/checklist.svg";
import GraphImg from "@/assets/images/graph.svg";
import BulbImg from "@/assets/images/bulb.svg";
import Link from "next/link";

import ArrowImg from "@/assets/images/arrow.svg";
import ContactUsPage from "@/components/Contact";
import { FadeIn, StaggerContainer, StaggerItem, ScaleIn } from "@/components/Motion";

const HowWeWork = () => {
  const HowItWorksBox = [
    {
      img: CheckListImg,
      title: "Submit Your Project / Get Discovered",
      desc: "Creators apply or get scouted through Gaaga's network.",
    },
    {
      img: BulbImg,
      title: "Creative Strategy + Light Funding",
      desc: "We help refine your idea and provide small capital or production support.",
    },
    {
      img: GearImg,
      title: "Execution",
      desc: "Content, visuals, merch, or campaign support — depending on the project.",
    },
    {
      img: GraphImg,
      title: "Submit Your Project / Get Discovered",
      desc: "Creators apply or get scouted through Gaaga's network.",
    },
  ];

  return (
    <section className="bg-[#111] pb-10 md:pb-20">
      <FadeIn>
        <div className="bg-accent pt-5 pb-6 md:pb-9 w-full px-4">
          <button className="bg-black py-2 mb-4 px-6 text-accent uppercase font-avenir-light rounded-full block w-max mx-auto text-sm md:text-base">
            How It Works
          </button>
          <p className="text-sm md:text-xl font-avenir uppercase w-[90%] md:w-[55%] mx-auto text-center">
            Gaaga provides micro-funding, production support, and strategic
            direction to help creators build their first major projects.
          </p>
        </div>
      </FadeIn>
      <StaggerContainer className="max-w-[1800px] mx-auto px-4 md:px-20 grid py-10 md:py-14 grid-cols-2 md:grid-cols-4 gap-6 md:gap-10 text-center">
        {HowItWorksBox.map(({ img, title, desc }) => (
          <StaggerItem key={title}>
            <Image
              src={img}
              alt="checklist"
              width={89}
              height={89}
              className="object-cover mx-auto mb-6 md:mb-14 w-14 md:w-auto"
            />
            <h4 className="text-lg md:text-2xl mb-3 font-avenir! text-white min-h-[60px] md:min-h-[80px]">
              {title}
            </h4>
            <p className="text-sm md:text-base text-white font-avenir-light w-[90%] md:w-[80%] mx-auto">
              {desc}
            </p>
          </StaggerItem>
        ))}
      </StaggerContainer>
      <Link
        href=""
        className="uppercase text-base md:text-xl rounded-lg flex items-center gap-3 bg-accent py-3 px-4 md:px-6 w-max mx-auto mt-5 mb-10 md:mb-20 font-milker"
      >
        Apply for funding
        <Image src={ArrowImg} alt="arrow icon" width={24} height={24} />
      </Link>
      <ScaleIn>
        <ContactUsPage />
      </ScaleIn>
    </section>
  );
};

export default HowWeWork;
