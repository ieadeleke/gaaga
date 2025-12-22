import Image from "next/image";

import GaagaLogo from "@/assets/images/logo.svg";
import Link from "next/link";

const Navigation = () => {
  const navLinks = [
    {
      link: "/about-us",
      title: "About",
    },
    {
      link: "/creative",
      title: "Projects",
    },
    {
      link: "/creatives",
      title: "Originals",
    },
  ];
  return (
    <div className="fixed w-full top-2 px-20 pt-2 z-50">
      <nav className="flex items-center justify-between bg-black border-2 border-accent px-5 py-5 rounded-lg">
        <Link href="/">
          <Image
            src={GaagaLogo}
            alt="logo"
            className="w-15 h-auto"
            width={1000}
            height={1000}
          />
        </Link>
        <ul className="flex items-center uppercase text-white gap-28">
          {navLinks.map((nav) => (
            <li key={nav.link}>
              <Link href={nav.link}>{nav.title}</Link>
            </li>
          ))}
        </ul>
        <div className="flex gap-5 items-center">
          <Link
            href="/contact-us"
            className="bg-accent py-3 border-2 border-accent px-8 text-sm text-black rounded-lg"
          >
            Apply
          </Link>
          <Link
            href="/stream"
            className="bg-transparent border-2 border-solid border-primary text-primary hover:text-accent py-3 px-8 text-sm rounded-lg"
          >
            Partner
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
