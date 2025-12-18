import Image from "next/image";

import GearImg from "@/assets/images/gear.svg";
import CheckListImg from "@/assets/images/checklist.svg";
import GraphImg from "@/assets/images/graph.svg";
import BulbImg from "@/assets/images/bulb.svg";
import Link from "next/link";

import ArrowImg from "@/assets/images/arrow.svg";
import ContactUsPage from "@/components/Contact";

const HowWeWork = () => {
  const HowItWorksBox = [
    {
      img: CheckListImg,
      title: "Submit Your Project / Get Discovered",
      desc: "Creators apply or get scouted through Gaaga’s network.",
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
      desc: "Creators apply or get scouted through Gaaga’s network.",
    },
  ];

  return (
    <section className="bg-black pb-20">
      <div className="bg-accent pt-5 pb-9 w-full">
        <button className="bg-black py-2 mb-4 px-6 text-accent uppercase font-avenir-light rounded-full block w-max mx-auto">
          How It Works
        </button>
        <p className="text-xl font-avenir uppercase w-[55%] mx-auto text-center">
          Gaaga provides micro-funding, production support, and strategic
          direction to help creators build their first major projects.
        </p>
      </div>
      <div className="px-20 grid py-14 grid-cols-4 gap-10 text-center">
        {HowItWorksBox.map(({ img, title, desc }) => (
          <div>
            <Image
              src={img}
              alt="checklist"
              width={89}
              height={89}
              className="object-cover mx-auto mb-14"
            />
            <h4 className="text-2xl mb-3 font-avenir! text-white min-h-[80px]">
              {title}
            </h4>
            <p className="text-base text-white font-avenir-light w-[80%] mx-auto">
              {desc}
            </p>
          </div>
        ))}
      </div>
      <Link
        href=""
        className="uppercase text-xl rounded-lg flex items-center gap-3 bg-accent py-3 px-6 w-max mx-auto mt-5 mb-20 font-milker"
      >
        Apply for funding
        <Image src={ArrowImg} alt="arrow icon" width={24} height={24} />
      </Link>
      <ContactUsPage />
    </section>
  );
};

export default HowWeWork;
