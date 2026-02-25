import Image from "next/image";

import Merch1 from "@/assets/images/merch-1.svg";
import Merch2 from "@/assets/images/merch-2.svg";
import Merch3 from "@/assets/images/merch-3.svg";
import { SlideUp, StaggerContainer, StaggerItem } from "@/components/Motion";

const Merch = () => {
  return (
    <section className="max-w-[1600px] mx-auto ">
      <SlideUp>
        <h3 className="text-2xl md:text-4xl uppercase text-center mb-6 md:mb-10 mt-5">Gaaga 24 Merch </h3>
      </SlideUp>
      <StaggerContainer className="px-4 md:px-20 grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-2">
        <StaggerItem>
          <Image
            src={Merch1}
            alt="man wearing merch"
            width={1000}
            height={1000}
            className="w-full h-[300px] md:h-full object-cover rounded-2xl md:rounded-[33px]"
          />
        </StaggerItem>
        <StaggerItem className="flex flex-col gap-2">
          <div>
            <Image
              src={Merch2}
              alt="man wearing merch"
              width={1000}
              height={304}
              className="h-[200px] md:h-[304px] w-full object-center object-cover rounded-2xl md:rounded-[33px]"
            />
          </div>
          <div className="grid grid-cols-2 gap-2">
            <div>
              <Image
                src={Merch3}
                alt="man wearing merch"
                width={1000}
                height={304}
                className="h-[200px] md:h-[304px] w-full object-center object-cover rounded-2xl md:rounded-[33px]"
              />
            </div>
            <div className="bg-black rounded-2xl md:rounded-[33px] min-h-[200px] md:min-h-0"></div>
          </div>
        </StaggerItem>
      </StaggerContainer>
    </section>
  );
};

export default Merch;
