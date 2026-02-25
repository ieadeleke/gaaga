import ApproachMain from "./ApproachMain";
import OurEcosystem from "./Ecosystem";
import { SlideUp, StaggerContainer, StaggerItem } from "@/components/Motion";

const OurApproach = () => {
  return (
    <section className="px-4 md:px-20 text-white mt-14 md:mt-28">
      <div className="max-w-[1600px] mx-auto ">
        <SlideUp>
          <h4 className="text-2xl md:text-3xl font-avenir-light! mb-16 md:mb-32">Our Approach</h4>
        </SlideUp>
        <StaggerContainer className="md:ml-auto w-max text-xl md:text-2xl space-y-3">
          <StaggerItem>
            <li className="flex gap-6 md:gap-10 font-avenir-light list-none">
              <span>01</span>
              <span>Discover</span>
            </li>
          </StaggerItem>
          <StaggerItem>
            <li className="flex gap-6 md:gap-10 font-avenir-light list-none">
              <span>02</span>
              <span>Develop</span>
            </li>
          </StaggerItem>
          <StaggerItem>
            <li className="flex gap-6 md:gap-10 font-avenir-light list-none">
              <span>03</span>
              <span>Scale</span>
            </li>
          </StaggerItem>
        </StaggerContainer>
        <div className="mt-20 md:mt-62">
          <ApproachMain />
        </div>
        <div>
          <OurEcosystem />
        </div>
      </div>
    </section>
  );
};

export default OurApproach;
