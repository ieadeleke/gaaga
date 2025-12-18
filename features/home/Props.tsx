import Image from "next/image";
import WomanImg from "@/assets/images/woman.svg";
import WomanSecImg from "@/assets/images/woman-sec.svg";
import Quote1Img from "@/assets/images/quote1.svg";
import Quote2Img from "@/assets/images/quote2.svg";

import CoverImg from "@/assets/images/cover.svg";

const HomeProps = () => {
  return (
    <section className="bg-white">
      <div className="bg-accent pt-7 pb-7 w-full text-center relative">
        <h4 className="text-2xl">Building Africa’s Creative Future</h4>
        <Image
          src={CoverImg}
          alt="cover"
          width={1000}
          height={1000}
          className="h-full inset-0 w-full absolute"
        />
      </div>
      <div className="max-w-[1800px] mx-auto grid grid-cols-2 px-20 pb-14 pt-12 bg-white">
        <div className="mt-10">
          <p className="text-xl font-avenir-medium max-w-[550px] uppercase mb-20">
            Gaaga Agency connects creativity with capital. We invest in
            creators, develop their brands, and help them scale globally through
            funding, production, and partnerships.
          </p>
          <div>
            <Image
              src={WomanImg}
              alt="woman"
              width={1000}
              height={1000}
              className="object-cover w-[60%]"
            />
          </div>
        </div>
        <div>
          <div>
            <div className="relative">
              <Image
                src={WomanSecImg}
                alt="woman"
                width={1000}
                height={1000}
                className="object-cover w-[60%] mx-auto z-20 relative"
              />
              <Image
                src={Quote1Img}
                alt="quote 1"
                width={182}
                height={182}
                className="absolute -top-8 right-10 z-10"
              />
              <Image
                src={Quote2Img}
                alt="quote 2"
                width={182}
                height={182}
                className="absolute top-14 left-10 z-10"
              />
            </div>
            <p className="text-xl font-avenir-medium max-w-[480px] ml-auto uppercase mb-20 text-right mt-20">
              We challenge your strategy, sharpen your vision, and design
              digital experiences that elevate your brand and unlock new
              opportunities.Your ambition is the blueprint. We build everything
              around it.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeProps;
