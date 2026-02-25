"use client";

import { useState, useEffect } from "react";
import { HiX } from "react-icons/hi";
import Link from "next/link";

const ContactPopup = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const dismissed = sessionStorage.getItem("popupDismissed");
    if (dismissed) return;

    const timer = setTimeout(() => {
      setVisible(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const close = () => {
    setVisible(false);
    sessionStorage.setItem("popupDismissed", "true");
  };

  if (!visible) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 animate-[fadeIn_0.3s_ease-out]"
      onClick={close}
    >
      <div
        className="relative bg-[#111] border-2 border-accent rounded-2xl mx-4 max-w-lg w-full p-8 md:p-12 text-center animate-[scaleIn_0.3s_ease-out]"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={close}
          className="absolute top-4 right-4 text-white/70 hover:text-white text-2xl"
          aria-label="Close popup"
        >
          <HiX />
        </button>
        <h3 className="text-xl md:text-2xl uppercase text-accent mb-3">
          Ready to take your project to the next level?
        </h3>
        <p className="text-sm md:text-base font-avenir-light text-white/80 mb-6">
          Book a call with our team and discover how we can support your
          creative journey or brand project.
        </p>
        <Link
          href="/contact-us"
          onClick={close}
          className="inline-block bg-accent py-3 px-8 text-sm md:text-base text-black rounded-lg font-avenir-medium"
        >
          Schedule a Call
        </Link>
      </div>
    </div>
  );
};

export default ContactPopup;
