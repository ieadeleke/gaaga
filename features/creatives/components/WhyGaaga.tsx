import Link from "next/link";
import Image from "next/image";
import ArrowImg from "@/assets/images/arrow.svg";

const WhyGaaga = () => {
  return (
    <section className="">
      <div className="bg-accent py-6 w-full mb-10">
        <h3 className="text-3xl uppercase text-center">Why Gaaga</h3>
      </div>
      <div className="">
        <p className="text-3xl capitalize leading-loose md:leading-relaxed text-center font-avenir-light text-accent w-287.75 mx-auto">
          We are built on adaptability, trust, and shared ambition. As a growing
          team, we move fast, learn openly, and stay committed to supporting
          creators and partners with clarity and intention.
        </p>
        <div className="w-300 mx-auto mt-12">
          <div className="grid grid-cols-2 items-center gap-24 border-b py-5 border-solid border-white">
            <div className="flex gap-3 items-end">
              <p className="text-white">01</p>
              <h4 className="text-4xl text-accent">Real Creative Voices</h4>
            </div>
            <div>
              <p className="text-[28px] text-accent font-avenir-light">
                Access emerging talent grounded in culture, not over-polished
                influence.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 items-center gap-24 border-b py-5 border-solid border-white">
            <div className="flex gap-3 items-end">
              <p className="text-white">02</p>
              <h4 className="text-4xl text-accent">Authenticity First</h4>
            </div>
            <div>
              <p className="text-[28px] text-accent font-avenir-light">
                Stories that feel lived-in, local, and culturally relevant.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 items-center gap-24 border-b py-5 border-solid border-white">
            <div className="flex gap-3 items-end">
              <p className="text-white">03</p>
              <h4 className="text-4xl text-accent">Measurable Reach</h4>
            </div>
            <div>
              <p className="text-[28px] text-accent font-avenir-light">
                Clear engagement, performance insights, and trackable campaigns.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 items-center gap-24 py-5">
            <div className="flex gap-3 items-end">
              <p className="text-white">04</p>
              <h4 className="text-4xl text-accent">Hands-on execution</h4>
            </div>
            <div>
              <p className="text-[28px] text-accent font-avenir-light">
                We’re small, but our process is personal — we work closely with
                you from concept to rollout.
              </p>
            </div>
          </div>
        </div>
        <Link
          href=""
          className="uppercase text-xl rounded-lg flex items-center gap-3 bg-accent py-3 px-6 w-max mx-auto mt-5 mb-20 font-milker"
        >
          COLLABORATE WITH US
          <Image src={ArrowImg} alt="arrow icon" width={24} height={24} />
        </Link>
      </div>
    </section>
  );
};

export default WhyGaaga;
