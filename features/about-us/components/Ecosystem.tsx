import Image from "next/image";

import TalentImg from "@/assets/images/talent.svg";
import StarImg from "@/assets/images/star.svg";
import EventsImg from "@/assets/images/events.svg";
import MerchImg from "@/assets/images/merch.svg";
import BrandImg from "@/assets/images/brand.svg";

const OurEcosystem = () => {
  return (
    <div>
      <h3 className="text-3xl uppercase text-center text-accent mb-10">
        Our Ecosystem
      </h3>
      <ul className="flex text-white flex-col max-w-300 mx-auto">
        <li className="flex gap-32 items-center py-16 border-b border-solid border-white string">
          <div className="w-16">
            <Image
              src={TalentImg}
              alt="Talent collaboration"
              width={200}
              height={200}
              className="w-12"
            />
          </div>
          <h4 className="flex-1 text-3xl">
            Talent Representation & Brand Development
          </h4>
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
          <h4 className="flex-1 text-3xl">Content Production Support</h4>
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
          <h4 className="flex-1 text-3xl">Merchandising & Creative Commerce</h4>
        </li>
        <li className="flex gap-32 items-center py-16 border-b border-solid border-white">
          <div className="w-16">
            <Image
              src={MerchImg}
              alt="Merch & Co-Branded Drops"
              width={200}
              height={200}
              className="w-12"
            />
          </div>
          <h4 className="flex-1 text-3xl">Creator Micro-Fund (Early Stage)</h4>
        </li>
        <li className="flex gap-32 items-center py-16">
          <div className="w-16">
            <Image
              src={BrandImg}
              alt="Brand Partnerships & Campaign Strategy"
              width={200}
              height={200}
              className="w-16"
            />
          </div>
          <h4 className="flex-1 text-3xl">
            Brand Partnerships & Campaign Strategy
          </h4>
        </li>
      </ul>
    </div>
  );
};

export default OurEcosystem;
