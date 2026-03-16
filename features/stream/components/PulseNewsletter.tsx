import Image from "next/image";
import ArrowImg from "@/assets/images/arrow.svg";
import PatternImg from "@/assets/images/big-pattern.svg";
import { SlideUp } from "@/components/Motion";

const PulseNewsletter = () => {
  return (
    <section className="relative bg-accent overflow-hidden py-16 md:py-28 px-4 text-center">
      <Image
        src={PatternImg}
        alt=""
        width={1000}
        height={1000}
        className="absolute inset-0 w-full h-full object-cover opacity-10 pointer-events-none"
      />
      <div className="relative z-10 max-w-[640px] mx-auto">
        <SlideUp>
          <p className="uppercase tracking-[0.2em] text-black/50 text-xs md:text-sm font-avenir-light mb-4">
            Stay in the loop
          </p>
          <h2 className="text-2xl md:text-5xl uppercase text-black mb-4 md:mb-6 leading-tight">
            Culture, creativity, and what&apos;s actually moving.
          </h2>
          <p className="text-sm md:text-base font-avenir-light text-black/70 mb-8 md:mb-10">
            In your inbox, monthly. No noise — just the stuff worth knowing.
          </p>
          <div className="flex gap-3 max-w-[480px] mx-auto">
            <label htmlFor="pulse-email" className="sr-only">
              Email address
            </label>
            <input
              id="pulse-email"
              type="email"
              placeholder="Your email address"
              className="flex-1 bg-black/10 border border-black/20 rounded-lg px-4 py-3 text-black placeholder:text-black/40 font-avenir-light text-sm outline-none focus:border-black/50"
            />
            <button className="bg-black text-accent font-milker uppercase px-5 py-3 rounded-lg flex items-center gap-2 text-sm whitespace-nowrap">
              Subscribe
              <Image src={ArrowImg} alt="" width={18} height={18} className="invert" />
            </button>
          </div>
        </SlideUp>
      </div>
    </section>
  );
};

export default PulseNewsletter;
