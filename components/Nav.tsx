"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HiMenu, HiX } from "react-icons/hi";

import GaagaLogo from "@/assets/images/logo.svg";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef<HTMLDivElement | null>(null);
  const [menuTop, setMenuTop] = useState<number>(0);
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

  // Position the mobile menu using the live nav height to avoid initial overflow
  useEffect(() => {
    const updateTop = () => {
      if (!navRef.current) return;
      const rect = navRef.current.getBoundingClientRect();
      // rect.bottom gives distance from viewport top
      setMenuTop(rect.bottom);
    };
    updateTop();
    window.addEventListener("resize", updateTop);
    window.addEventListener("scroll", updateTop, { passive: true });
    return () => {
      window.removeEventListener("resize", updateTop);
      window.removeEventListener("scroll", updateTop);
    };
  }, []);

  const closeMenu = () => setIsOpen(false);

  const navLinks = [
    { link: "/about-us", title: "About" },
    { link: "/productions", title: "Productions" },
    { link: "/stream", title: "Gaaga's Pulse" },
    { link: "/store", title: "GG Store" },
  ];

  return (
    <div className="fixed inset-x-0 top-2 px-4 md:px-20 pt-2 z-50 box-border">
      <nav ref={navRef} className="relative flex items-center justify-between bg-black border-2 border-accent px-3 md:px-5 py-4 md:py-5 rounded-lg">
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
        <ul className="hidden md:flex items-center uppercase gap-8 absolute left-1/2 -translate-x-1/2">
          {navLinks.map((nav) => {
            const isActive =
              pathname === nav.link || pathname.startsWith(nav.link + "/");
            return (
              <li key={nav.link}>
                <Link
                  href={nav.link}
                  className={`${isActive ? "text-accent" : "text-white hover:text-accent"} transition-colors`}
                >
                  {nav.title}
                </Link>
              </li>
            );
          })}
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
            href="/creative"
            className="bg-transparent border-2 border-solid border-accent text-accent hover:bg-accent hover:text-black transition-colors duration-300 py-3 px-6 text-sm rounded-lg"
          >
            For Creators
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
          className={`fixed left-0 right-0 bg-black border-2 border-accent rounded-lg md:hidden transition-all duration-300 ease-in-out box-border ${
            isOpen
              ? "max-h-[85vh] opacity-100"
              : "max-h-0 opacity-0 pointer-events-none"
          } overflow-hidden overflow-y-auto`}
          style={{ top: menuTop + 8 }}
        >
          <ul className="flex items-center justify-center uppercase gap-8 py-6 flex-wrap">
            {navLinks.map((nav) => {
              const isActive =
                pathname === nav.link || pathname.startsWith(nav.link + "/");
              return (
                <li key={nav.link}>
                  <Link
                    href={nav.link}
                    onClick={closeMenu}
                    className={`${isActive ? "text-accent" : "text-white hover:text-accent"} transition-colors`}
                    aria-current={isActive ? "page" : undefined}
                  >
                    {nav.title}
                  </Link>
                </li>
              );
            })}
          </ul>
          <div className="flex justify-center gap-3 px-4 pb-6">
            <Link
              href="/creatives"
              onClick={closeMenu}
              className="bg-transparent border-2 border-solid border-primary text-primary hover:text-accent py-3 px-6 text-sm rounded-lg"
            >
              For Brands
            </Link>
            <Link
              href="/creative"
              onClick={closeMenu}
              className="bg-transparent border-2 border-solid border-accent text-accent hover:bg-accent hover:text-black transition-colors duration-300 py-3 px-6 text-sm rounded-lg"
            >
              For Creators
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
