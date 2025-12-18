import ApproachMain from "./ApproachMain";
import OurEcosystem from "./Ecosystem";

const OurApproach = () => {
  return (
    <section className="px-20 text-white mt-28">
      <div className="max-w-[1600px] mx-auto ">
        <h4 className="text-3xl font-avenir-light! mb-32">Our Approach</h4>
        <ul className="ml-auto w-max text-2xl space-y-3">
          <li className="flex gap-10 font-avenir-light">
            <span>01</span>
            <span>Discover</span>
          </li>
          <li className="flex gap-10 font-avenir-light">
            <span>02</span>
            <span>Develop</span>
          </li>
          <li className="flex gap-10 font-avenir-light">
            <span>03</span>
            <span>Scale</span>
          </li>
        </ul>
        <div className="mt-62">
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
