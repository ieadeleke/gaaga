"use client";

import { useState } from "react";

const items = [
  { q: "What deliverables can creators support?", a: "Short/long-form content, appearances, event hosting, UGC, amplification, and co-branded drops." },
  { q: "How long does booking take?", a: "Typical timelines range from 1–3 weeks depending on scope and availability. We can move faster for priority launches." },
  { q: "Do you handle production?", a: "Yes. We can coordinate creative direction, production partners, and post with your brand team." },
  { q: "What if we need multiple creators?", a: "We can assemble rosters across categories and regions, with unified reporting and management." },
];

const BrandFAQ = () => {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="bg-accent py-12 md:py-16 mt-12 md:mt-16">
      <div className="max-w-4xl mx-auto px-6 md:px-10">
        <div className="flex justify-center mb-3">
          <span className="px-4 py-2 text-xs rounded-full border border-black bg-white">Brands</span>
        </div>
        <h2 className="text-2xl md:text-3xl font-avenir-medium! text-center mb-6">Booking FAQs</h2>
        <ul>
          {items.map((it, idx) => (
            <li key={it.q} className="py-3">
              <button
                className="w-full flex items-center justify-between text-left"
                onClick={() => setOpen(open === idx ? null : idx)}
              >
                <span className="font-avenir-medium text-sm md:text-lg">{it.q}</span>
                <span className="ml-6 inline-flex text-2xl">{open === idx ? "−" : "+"}</span>
              </button>
              {open === idx && (
                <div className="mt-2 pr-6 text-sm font-avenir-light">{it.a}</div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default BrandFAQ;

