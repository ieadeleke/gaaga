import Image from "next/image";

import Merch1 from "@/assets/images/merch-1.svg";
import Merch2 from "@/assets/images/merch-2.svg";
import Merch3 from "@/assets/images/merch-3.svg";

const Merch = () => {
  return (
    <section>
      <h3 className="text-4xl uppercase text-center mb-10 mt-5">Gaaga 24 Merch </h3>
      <div className="px-20 grid grid-cols-[1fr_2fr] gap-2">
        <div className="">
          <Image
            src={Merch1}
            alt="man wearing merch"
            width={1000}
            height={1000}
            className="w-full h-full object-cover rounded-[33px]"
          />
        </div>
        <div className="flex flex-col gap-2">
          <div>
            <Image
              src={Merch2}
              alt="man wearing merch"
              width={1000}
              height={304}
              className="h-[304px] w-full object-center object-cover rounded-[33px]"
            />
          </div>
          <div className="grid grid-cols-2 gap-2">
            <div>
              <Image
                src={Merch3}
                alt="man wearing merch"
                width={1000}
                height={304}
                className="h-[304px] w-full object-center object-cover rounded-[33px]"
              />
            </div>
            <div className="bg-black rounded-[33px]"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Merch;
