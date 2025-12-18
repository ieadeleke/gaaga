import Link from "next/link";

import ArrowImg from "@/assets/images/arrow.svg";
import LogoImg from "@/assets/images/logo-main.svg";
import LogoJiggleImg from "@/assets/images/logo-jiggle.svg";
import Image from "next/image";
import Sitelinks from "@/utils/SiteLinks";

const Footer = () => {
  const FooterSiteLinks = [
    {
      label: "Work",
      link: Sitelinks.work,
    },
    {
      label: "Services",
      link: Sitelinks.services,
    },
    {
      label: "Solutions",
      link: Sitelinks.solutions,
    },
    {
      label: "Insights",
      link: Sitelinks.insights,
    },
    {
      label: "Technology",
      link: Sitelinks.technology,
    },
    {
      label: "Company",
      link: Sitelinks.company,
    },
  ];
  const FooterSocialLinks = [
    {
      label: "LinkedIn",
      link: "/linkedIn",
    },
    {
      label: "Facebook",
      link: "/facebook",
    },
    {
      label: "Instagram",
      link: "/instagram",
    },
  ];
  return (
    <footer className="px-20 pt-20">
      <div className="grid grid-cols-2 items-center">
        <div>
          <Image
            src={LogoJiggleImg}
            alt="arrow icon"
            width={450}
            height={400}
            className="w-[450px] h-auto mb-7"
          />
        </div>
        <div>
          <Image
            src={LogoImg}
            alt="arrow icon"
            width={200}
            height={200}
            className="w-40 h-auto mb-7"
          />
          <div className="grid grid-cols-2 mb-20">
            <div>
              <h5 className="uppercase mb-5 font-avenir-light! text-black font-normal">
                Agency
              </h5>
              <ul className="flex flex-col gap-3">
                {FooterSiteLinks.map(({ label, link }) => (
                  <li key={label}>
                    <Link
                      href={link}
                      className="text-black/70 font-avenir-light"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h5 className="uppercase mb-5 font-avenir-light! text-black font-normal">
                Let's social
              </h5>
              <ul className="flex flex-col gap-5">
                {FooterSocialLinks.map(({ label, link }) => (
                  <li key={label}>
                    <Link
                      href={link}
                      className="text-black/70 font-avenir-light"
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
              <h4 className="font-avenir!">Let's talk</h4>
              <Image src={ArrowImg} alt="arrow icon" width={24} height={24} />
            </div>
            <p className="text-lg w-[90%] leading-loose md:leading-normal font-avenir-light mb-5">
              A monthly pulse check on the culture—ideas, patterns, and shifts
              worth paying attention to, crafted to inspire your next move.
            </p>
            <div className="flex gap-4 mb-24">
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
        </div>
      </div>
      <div className="">
        <ul className="flex items-center justify-center gap-20 pb-2">
          <li>
            <Link href="" className="font-avenir-light">
              Privacy Policy
            </Link>
          </li>
          <li>
            <Link href="" className="font-avenir-light">
              Terms and Conditions
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
