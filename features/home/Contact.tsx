import ContactUsPage from "@/components/Contact";
import Image from "next/image";
import PatternImg from "@/assets/images/big-pattern.svg";
import { ScaleIn } from "@/components/Motion";

const HomeContact = () => {
  return (
    <section className="relative">
      <ScaleIn>
        <div className="py-14 md:py-28">
          <ContactUsPage hidePattern={true} page="home" />
        </div>
      </ScaleIn>
      <div>
        <Image
          src={PatternImg}
          alt="Gaaga background pattern design"
          width={1000}
          height={1000}
          className="absolute left-0 top-0 w-full h-full z-10 object-cover"
        />
      </div>
    </section>
  );
};

export default HomeContact;
