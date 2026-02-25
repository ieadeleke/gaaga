import Image from "next/image";

import ScaleImg from "@/assets/images/scale.svg";
import DeliverImg from "@/assets/images/deliver.svg";
import DevelopImage from "@/assets/images/develop.svg";

const ApproachMain = () => {
  const MainContent = [
    {
      img: DeliverImg,
      title: "Discover",
      desc: "We scout emerging talent across music, fashion, digital media, and film.",
    },
    {
      img: DevelopImage,
      title: "Develop",
      desc: "We provide brand development, production support, and growth strategy.",
    },
    {
      img: ScaleImg,
      title: "Scale",
      desc: "We help creators launch monetizable projects: content, merch, collaborations, and partnerships.",
    },
  ];
  return (
    <div className="space-y-12 md:space-y-24">
      {MainContent.map((content, index) => (
        <div key={content.title} className="sticky top-24" style={{ zIndex: index + 1 }}>
          <div className="relative rounded-2xl md:rounded-3xl bg-[#111] px-4 md:px-10 py-8 md:py-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-20 items-start">
              <div>
                <h2 className="text-6xl md:text-9xl font-avenir-light!">0{index + 1}</h2>
              </div>
              <div>
                <div className="w-full md:w-[80%]">
                  <h4 className="text-2xl md:text-3xl mb-2">{content.title}</h4>
                  <p className="text-lg md:text-2xl text-white font-avenir-light mb-6 md:mb-8!">
                    {content.desc}
                  </p>
                  <Image
                    src={content.img}
                    alt={content.title}
                    width={1000}
                    height={1000}
                    className="w-full md:w-[475px] h-full"
                  />
                </div>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-12 bg-gradient-to-b from-transparent to-black/30" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ApproachMain;
