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
    <div className="px-20 max-w-[1450px] mx-auto z-20 relative">
      {/* <div className="border-20 rounde d-[20px] border-solid border-[#FFF5CD] relative"> */}
      <div className="relative">
        {hidePattern ? (
          page === "home" ? (
            <Image
              src={HomeContactImg}
              alt="contact box"
              width={1000}
              height={1000}
              className="w-full border-20 rounded-[30px] border-solid border-[#FFF5CD] relative"
            />
          ) : (
            <Image
              src={SmilingWoman}
              alt="contact box"
              width={1000}
              height={1000}
              className="w-full border-20 rounded-[30px] border-solid border-[#FFF5CD] relative"
            />
          )
        ) : (
          <div className="rounded-full">
            <Image
              src={ContactImg}
              alt="contact box"
              width={1000}
              height={1000}
              className="w-full border-20 rounded-[30px] border-solid border-[#FFF5CD] relative"
            />
          </div>
        )}
        <div className="w-full h-full absolute bg-black/10 inset-0 flex items-center justify-center">
          <div className="max-w-[590px] text-center mx-auto">
            <h3 className="text-2xl mb-3 uppercase text-white">
              Be Among the first to know
            </h3>
            <p className="text-2xl font-avenir-light text-white mb-6">
              Have a question or want to work with us? We’d love to hear from
              you.
            </p>
            <button className="py-4 px-8 bg-accent text-base rounded-lg">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsPage;
