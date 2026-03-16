import Image from "next/image";
import Merch1 from "@/assets/images/merch-1.svg";
import Merch2 from "@/assets/images/merch-2.svg";
import Merch3 from "@/assets/images/merch-3.svg";
import ArrowImg from "@/assets/images/arrow.svg";
import { SlideUp, StaggerContainer, StaggerItem } from "@/components/Motion";

const products = [
  { img: Merch1, name: "GG Classic Tee", tag: "Drop 01" },
  { img: Merch2, name: "GG Culture Hoodie", tag: "Drop 01" },
  { img: Merch3, name: "GG Statement Cap", tag: "Drop 01" },
];

const StoreGrid = () => {
  return (
    <section className="bg-[#111] py-16 md:py-24 px-6 md:px-20">
      <SlideUp>
        <div className="flex items-center justify-between max-w-[1800px] mx-auto mb-10 md:mb-16">
          <div>
            <p className="text-white/40 uppercase tracking-[0.2em] text-xs font-avenir-light mb-1">
              Latest drop
            </p>
            <h2 className="text-2xl md:text-4xl text-white uppercase">Drop 01</h2>
          </div>
          <span className="text-white/30 text-sm font-avenir-light uppercase tracking-widest">
            More drops coming soon
          </span>
        </div>
      </SlideUp>

      <StaggerContainer className="max-w-[1800px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
        {products.map((product) => (
          <StaggerItem key={product.name}>
            <div className="group relative rounded-2xl md:rounded-[33px] overflow-hidden bg-black">
              <Image
                src={product.img}
                alt={product.name}
                width={1000}
                height={1000}
                className="w-full h-[320px] md:h-[420px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5 md:p-7 flex items-end justify-between">
                <div>
                  <p className="text-accent text-xs uppercase tracking-widest font-avenir-light mb-1">
                    {product.tag}
                  </p>
                  <h3 className="text-white text-lg md:text-2xl uppercase">
                    {product.name}
                  </h3>
                </div>
                <button className="bg-accent text-black rounded-full w-10 h-10 flex items-center justify-center shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Image src={ArrowImg} alt="" width={16} height={16} />
                </button>
              </div>
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>

      <SlideUp>
        <div className="text-center mt-12 md:mt-20 border border-white/10 rounded-2xl py-12 md:py-16 px-4 max-w-[1800px] mx-auto">
          <p className="text-white/40 uppercase tracking-[0.2em] text-xs font-avenir-light mb-3">
            Stay ahead
          </p>
          <h3 className="text-xl md:text-3xl text-white uppercase mb-6">
            New drops. First access.
          </h3>
          <div className="flex gap-3 max-w-[440px] mx-auto">
            <label htmlFor="store-email" className="sr-only">Email address</label>
            <input
              id="store-email"
              type="email"
              placeholder="Your email address"
              className="flex-1 bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white placeholder:text-white/30 font-avenir-light text-sm outline-none focus:border-accent"
            />
            <button className="bg-accent text-black font-milker uppercase px-5 py-3 rounded-lg flex items-center gap-2 text-sm whitespace-nowrap">
              Notify Me
              <Image src={ArrowImg} alt="" width={16} height={16} />
            </button>
          </div>
        </div>
      </SlideUp>
    </section>
  );
};

export default StoreGrid;
