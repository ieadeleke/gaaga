import Light from "@/assets/images/light.svg";
import ContactImg from "@/assets/images/contact-us.svg";
import Image from "next/image";
import ContactForm from "./ContactForm";

const ContactHero = () => {
  return (
    <header className="pt-40 relative">
      <Image
        src={Light}
        alt="light gradient"
        className="absolute top-0"
        width={1000}
        height={1000}
      />
      <div className="px-24">
        <div className="max-w-[1800px] mx-auto relative">
          <Image
            src={ContactImg}
            alt=""
            className="w-full h-full"
            width={1000}
            height={1000}
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <h4 className="text-4xl text-accent uppercase mb-2">
                Get in Touch
              </h4>
              <p className="text-2xl text-white w-[60%] mx-auto font-avenir-light">
                Request for a Demo and see how Juno works for your business in
                just a few minutes.
              </p>
            </div>
          </div>
        </div>
      </div>
      <ContactForm />
    </header>
  );
};

export default ContactHero;
