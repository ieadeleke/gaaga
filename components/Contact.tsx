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
      {/* Container with border, rounded and overflow to clip the image */}
      <div className="relative min-h-[360px] md:min-h-0 overflow-hidden border-8 md:border-20 rounded-2xl md:rounded-[30px] border-solid border-[#FFF5CD]">
        {hidePattern ? (
          page === "home" ? (
            <Image src={HomeContactImg} alt="contact box" fill className="object-cover" priority />
          ) : (
            <Image src={SmilingWoman} alt="contact box" fill className="object-cover" priority />
          )
        ) : (
          <Image src={ContactImg} alt="contact box" fill className="object-cover" priority />
        )}
        <div className="w-full h-full absolute bg-black/10 inset-0 flex items-center justify-center">
          <div className="max-w-[590px] text-center mx-auto px-4">
            <h3 className="text-lg md:text-2xl mb-3 uppercase text-white">
              Your next chapter starts here.
            </h3>
            <p className="text-sm md:text-2xl font-avenir-light text-white mb-4 md:mb-6">
              Are you a creator, a brand, or a collaborator; let&apos;s build
              something worth watching.
            </p>
            <button className="py-3 md:py-4 px-6 md:px-8 bg-accent text-sm md:text-base rounded-lg">
              Get in Touch
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsPage;
