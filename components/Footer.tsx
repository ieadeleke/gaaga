import Link from "next/link";

import ArrowImg from "@/assets/images/arrow.svg";
import LogoImg from "@/assets/images/logo-main.svg";
import LogoJiggleImg from "@/assets/images/logo-jiggle.svg";
import Image from "next/image";
import { FadeIn, SlideIn } from "@/components/Motion";

const Footer = () => {
  const FooterSiteLinks = [
    { label: "About",         link: "/about-us" },
    { label: "Productions",   link: "/productions" },
    { label: "Gaaga's Pulse", link: "/stream" },
    { label: "For Creators",  link: "/creative" },
    { label: "Store",         link: "/store" },
  ];
  const FooterSocialLinks = [
    {
      label: "Instagram",
      link: "/instagram",
    },
    {
      label: "YouTube",
      link: "/youtube",
    },
    {
      label: "X",
      link: "/x",
    },
    {
      label: "TikTok",
      link: "/tiktok",
    },
  ];
  return (
    <footer className="max-w-[1800px] mx-auto px-6 md:px-20 pt-10 md:pt-20">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10 md:gap-0">
        <SlideIn direction="left">
          <Image
            src={LogoJiggleImg}
            alt="arrow icon"
            width={450}
            height={400}
            className="w-[280px] md:w-[450px] h-auto mb-7"
          />
        </SlideIn>
        <FadeIn delay={0.2}>
          <Image
            src={LogoImg}
            alt="arrow icon"
            width={200}
            height={200}
            className="w-28 md:w-40 h-auto mb-7"
          />
          <div className="grid grid-cols-2 mb-10 md:mb-20">
            <div>
              <h5 className="uppercase mb-5 font-avenir-light! text-black font-normal">
                Explore
              </h5>
              <ul className="flex flex-col gap-3">
                {FooterSiteLinks.map(({ label, link }) => (
                  <li key={label}>
                    <Link
                      href={link}
                      className="text-black/70 font-avenir-light cursor-pointer"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h5 className="uppercase mb-5 font-avenir-light! text-black font-normal">
                Let's Connect
              </h5>
              <ul className="flex flex-col gap-5">
                {FooterSocialLinks.map(({ label, link }) => (
                  <li key={label}>
                    <Link
                      href={link}
                      className="text-black/70 font-avenir-light cursor-pointer"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div>
            <div className="flex gap-2 mb-3 items-center">
              <h4 className="font-avenir!">The Gaaga Pulse</h4>
              <Image src={ArrowImg} alt="arrow icon" width={24} height={24} />
            </div>
            <p className="text-base md:text-lg w-full md:w-[90%] leading-loose md:leading-normal font-avenir-light mb-5">
              Culture, creativity, and what&apos;s actually moving on the continent.
              In your inbox, monthly.
            </p>
            <div className="flex gap-4 mb-12 md:mb-24">
              <label htmlFor="subscribe" className="sr-only">
                Email
              </label>
              <input
                id="subscribe"
                type="text"
                className="bg-transparent border border-accent flex-1 rounded-lg"
              />
              <button className="bg-accent px-4 py-3 flex items-center gap-3 rounded-lg">
                Subscribe
                <Image src={ArrowImg} alt="arrow icon" width={24} height={24} />
              </button>
            </div>
          </div>
        </FadeIn>
      </div>
      <div>
        <ul className="flex items-center justify-center gap-6 md:gap-20 pb-2">
          <li>
            <Link href="" className="font-avenir-light text-sm md:text-base">
              Privacy Policy
            </Link>
          </li>
          <li>
            <Link href="" className="font-avenir-light text-sm md:text-base">
              Terms and Conditions
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
