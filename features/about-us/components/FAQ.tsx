"use client";

import { useState } from "react";

type FAQItem = {
  question: string;
  answer: string;
};

const faqs: FAQItem[] = [
  {
    question: "What is GAAGA?",
    answer:
      "GAAGA is a platform and creative studio that showcases emerging African creators and connects them with brands and audiences.",
  },
  {
    question: "Where are you based?",
    answer:
      "We operate globally with roots in Africa. Our team is distributed and we partner with creators and brands around the world.",
  },
  {
    question: "Do you only work with African creators?",
    answer:
      "Our focus is on elevating African creativity, but we collaborate with creators everywhere who share the same energy and vision.",
  },
  {
    question: "How do I join GAAGA as a creator?",
    answer:
      "Share your portfolio and socials via our contact form. We review submissions continuously and reach out when there’s a good fit.",
  },
  {
    question: "What kind of creators do you manage?",
    answer:
      "From visual artists and filmmakers to designers, musicians, and culture shapers — we champion original voices and bold ideas.",
  },
  {
    question: "Do you help creators grow their platforms?",
    answer:
      "Yes. We offer strategy, production support, partnerships, and programming opportunities to help creators reach new audiences.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (idx: number) => {
    setOpenIndex((current) => (current === idx ? null : idx));
  };

  return (
    <section className="bg-accent py-16 md:py-20 mt-20">
      <div className="max-w-4xl mx-auto px-6 md:px-10">
        <div className="flex justify-center mb-5">
          <span className="px-4 py-2 text-xs rounded-full border border-black bg-white">
            FAQs
          </span>
        </div>
        <h2 className="text-4xl md:text-4xl font-avenir-medium! text-center mb-4">
          Frequently Asked Questions
        </h2>
        <p className="text-center font-avenir-light text-2xl mx-auto mb-10">
          We’ve gathered the most common questions so you don’t have to ask
          twice.
        </p>
      </div>
      <div className="max-w-5xl mx-auto px-6 md:px-10">
        <ul className="bg-transparent">
          {faqs.map((item, idx) => {
            const open = openIndex === idx;
            return (
              <li key={idx} className="py-4">
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full flex items-center justify-between text-left"
                  aria-expanded={open}
                >
                  <span className="font-avenir-medium text-sm md:text-lg">
                    {item.question}
                  </span>
                  <span
                    className="ml-6 inline-flex text-2xl items-center justify-center rounded-full"
                    aria-hidden
                  >
                    {open ? "−" : "+"}
                  </span>
                </button>
                {open && (
                  <div className="mt-3 pr-10 text-sm font-avenir-light">
                    {item.answer}
                  </div>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default FAQ;
