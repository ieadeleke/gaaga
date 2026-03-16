"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HiMenu, HiX } from "react-icons/hi";

import GaagaLogo from "@/assets/images/logo.svg";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);

  const navLinks = [
    {
      link: "/about-us",
      title: "About",
    },
    {
      link: "/productions",
      title: "Productions",
    },
    {
      link: "/stream",
      title: "Gaaga's Pulse",
    },
    {
      link: "/creative",
      title: "For Creators",
    },
  ];

  return (
    <div className="fixed w-full top-2 px-4 md:px-20 pt-2 z-50">
      <nav className="relative flex items-center justify-between bg-black border-2 border-accent px-3 md:px-5 py-4 md:py-5 rounded-lg">
        <Link href="/">
          <Image
            src={GaagaLogo}
            alt="logo"
            className="w-15 h-auto"
            width={1000}
            height={1000}
          />
        </Link>

        {/* Desktop nav links */}
        <ul className="hidden md:flex items-center uppercase text-white gap-8 absolute left-1/2 -translate-x-1/2">
          {navLinks.map((nav) => (
            <li key={nav.link}>
              <Link href={nav.link}>{nav.title}</Link>
            </li>
          ))}
        </ul>

        {/* Desktop CTA buttons */}
        <div className="hidden md:flex gap-3 items-center">
          <Link
            href="/creatives"
            className="bg-transparent border-2 border-solid border-primary text-primary hover:text-accent py-3 px-6 text-sm rounded-lg"
          >
            For Brands
          </Link>
          <Link
            href="/store"
            className="bg-transparent border-2 border-solid border-accent text-accent hover:bg-accent hover:text-black transition-colors duration-300 py-3 px-6 text-sm rounded-lg"
          >
            GG Store
          </Link>
        </div>

        {/* Mobile hamburger button */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? <HiX /> : <HiMenu />}
        </button>

        {/* Mobile menu overlay */}
        <div
          className={`absolute left-0 right-0 top-full mt-2 bg-black border-2 border-accent rounded-lg md:hidden transition-all duration-300 ease-in-out ${
            isOpen
              ? "max-h-96 opacity-100"
              : "max-h-0 opacity-0 pointer-events-none"
          } overflow-hidden`}
        >
          <ul className="flex flex-col items-center uppercase text-white gap-6 py-6">
            {navLinks.map((nav) => (
              <li key={nav.link}>
                <Link href={nav.link} onClick={closeMenu}>
                  {nav.title}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex flex-col gap-3 px-4 pb-6">
            <Link
              href="/creatives"
              onClick={closeMenu}
              className="bg-transparent border-2 border-solid border-primary text-primary hover:text-accent py-3 px-8 text-sm rounded-lg text-center"
            >
              For Brands
            </Link>
            <Link
              href="/store"
              onClick={closeMenu}
              className="bg-transparent border-2 border-solid border-accent text-accent py-3 px-8 text-sm rounded-lg text-center"
            >
              GG Store
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
