import Image from "next/image";
import ContactImg from "@/assets/images/contact.svg";
import SmilingWoman from "@/assets/images/smiling-woman.svg";
import HomeContactImg from "@/assets/images/home-contact.svg";

interface ContactUsProps {
  hidePattern?: boolean;
  page?: string;
}

const ContactUsPage = ({ hidePattern, page }: ContactUsProps) => {
  return (
    <div className="px-4 md:px-20 max-w-[1450px] mx-auto z-20 relative">
      {/* <div className="border-20 rounde d-[20px] border-solid border-[#FFF5CD] relative"> */}
      <div className="relative">
        {hidePattern ? (
          page === "home" ? (
            <Image
              src={HomeContactImg}
              alt="contact box"
              width={1000}
              height={1000}
              className="w-full border-8 md:border-20 rounded-2xl md:rounded-[30px] border-solid border-[#FFF5CD] relative"
            />
          ) : (
            <Image
              src={SmilingWoman}
              alt="contact box"
              width={1000}
              height={1000}
              className="w-full border-8 md:border-20 rounded-2xl md:rounded-[30px] border-solid border-[#FFF5CD] relative"
            />
          )
        ) : (
          <div className="rounded-full">
            <Image
              src={ContactImg}
              alt="contact box"
              width={1000}
              height={1000}
              className="w-full border-8 md:border-20 rounded-2xl md:rounded-[30px] border-solid border-[#FFF5CD] relative"
            />
          </div>
        )}
        <div className="w-full h-full absolute bg-black/10 inset-0 flex items-center justify-center rounded-2xl md:rounded-[30px]">
          <div className="max-w-[590px] text-center mx-auto px-4">
            <h3 className="text-lg md:text-2xl mb-3 uppercase text-white">
              Ready to take your project to the next level?
            </h3>
            <p className="text-sm md:text-2xl font-avenir-light text-white mb-4 md:mb-6">
              Book a call with our team and discover how we can support your
              creative journey or brand project.
            </p>
            <button className="py-3 md:py-4 px-6 md:px-8 bg-accent text-sm md:text-base rounded-lg">
              Schedule a Call
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsPage;
