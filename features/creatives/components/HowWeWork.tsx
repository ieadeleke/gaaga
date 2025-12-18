import Image from "next/image";

import TalentImg from "@/assets/images/talent.svg";
import StarImg from "@/assets/images/star.svg";
import EventsImg from "@/assets/images/events.svg";
import MerchImg from "@/assets/images/merch.svg";

const HowWeWork = () => {
  return (
    <section className="bg-black">
      <div className="bg-accent py-9 w-full">
        <h3 className="text-3xl uppercase text-center">
          How We Work With Brands
        </h3>
      </div>
      <ul className="flex text-white flex-col max-w-300 mx-auto">
        <li className="flex gap-32 items-center py-16 border-b border-solid border-white">
          <div className="w-16">
            <Image
              src={TalentImg}
              alt="Talent collaboration"
              width={200}
              height={200}
              className="w-12"
            />
          </div>
          <h4 className="flex-1 text-3xl">Talent Collaborations</h4>
        </li>
        <li className="flex gap-32 items-center py-16 border-b border-solid border-white">
          <div className="w-16">
            <Image
              src={StarImg}
              alt="Content & Creative Production"
              width={200}
              height={200}
              className="w-12"
            />
          </div>
          <h4 className="flex-1 text-3xl">Content & Creative Production</h4>
        </li>
        <li className="flex gap-32 items-center py-16 border-b border-solid border-white">
          <div className="w-16">
            <Image
              src={EventsImg}
              alt="Events & Live Moments"
              width={200}
              height={200}
              className="w-9"
            />
          </div>
          <h4 className="flex-1 text-3xl">Events & Live Moments</h4>
        </li>
        <li className="flex gap-32 items-center py-16">
          <div className="w-16">
            <Image
              src={MerchImg}
              alt="Merch & Co-Branded Drops"
              width={200}
              height={200}
              className="w-12"
            />
          </div>
          <h4 className="flex-1 text-3xl">Merch & Co-Branded Drops</h4>
        </li>
      </ul>
    </section>
  );
};

export default HowWeWork;
