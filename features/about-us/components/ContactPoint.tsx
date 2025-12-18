import ContactUsPage from "@/components/Contact";
import Image from "next/image";
import PatternImg from "@/assets/images/big-pattern.svg";

const ContactPoint = () => {
  return (
    <section className="relative">
      <div className="py-28">
        <ContactUsPage hidePattern={true} />
      </div>
      <div className="">
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

export default ContactPoint;
