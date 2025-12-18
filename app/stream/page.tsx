import Countdown from "@/features/stream/components/Countdown";
import StreamHero from "@/features/stream/components/Hero";
import Merch from "@/features/stream/components/Merch";
import EnquiryForm from "@/features/stream/components/EnquiryForm";
import PatternImg from "@/assets/images/big-pattern.svg";
import Image from "next/image";

const Stream = () => {
  return (
    <div>
      <StreamHero />
      <div className="relative py-10 bg-[#111]">
        <Image
          src={PatternImg}
          alt="Gaaga background pattern design"
          width={1000}
          height={1000}
          className="absolute left-0 top-0 w-full h-full z-10 object-cover"
        />
        <div className="z-20 relative">
          <Countdown />
        </div>
      </div>
      <Merch />
      <EnquiryForm />
    </div>
  );
};

export default Stream;
