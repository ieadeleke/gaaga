import Light from "@/assets/images/light.svg";
import ContactImg from "@/assets/images/contact-us.svg";
import Image from "next/image";
import ContactForm from "./ContactForm";
import { SlideUp, ScaleIn } from "@/components/Motion";

const ContactHero = () => {
  return (
    <header className="pt-24 md:pt-40 relative overflow-hidden">
      <Image
        src={Light}
        alt="light gradient"
        className="absolute top-0"
        width={1000}
        height={1000}
      />
      <ScaleIn className="px-4 md:px-24">
        <div className="max-w-[1800px] mx-auto relative">
          <Image
            src={ContactImg}
            alt=""
            className="w-full h-full"
            width={1000}
            height={1000}
          />
          <div className="absolute inset-0 flex items-center justify-center px-4">
            <SlideUp>
              <div className="text-center">
                <h4 className="text-2xl md:text-4xl text-accent uppercase mb-2">
                  Get in Touch
                </h4>
                <p className="text-base md:text-2xl text-white w-[90%] md:w-[60%] mx-auto font-avenir-light">
                  Request for a Demo and see how Juno works for your business in
                  just a few minutes.
                </p>
              </div>
            </SlideUp>
          </div>
        </div>
      </ScaleIn>
      <ContactForm />
    </header>
  );
};

export default ContactHero;
