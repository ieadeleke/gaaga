"use client";

import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { SlideUp } from "@/components/Motion";

const BookingForm = () => {
  const searchParams = useSearchParams();
  const talentFromQuery = searchParams.get("talent") || "";

  const [form, setForm] = useState({
    brand: "",
    contact: "",
    email: "",
    talent: talentFromQuery,
    title: "",
    budget: "",
    timeline: "",
    deliverables: [] as string[],
    details: "",
    links: "",
  });

  const toggleDeliverable = (key: string) => {
    setForm((f) => {
      const on = f.deliverables.includes(key);
      return { ...f, deliverables: on ? f.deliverables.filter((k) => k !== key) : [...f.deliverables, key] };
    });
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // For now just log. In production, post to API or external form endpoint.
    // eslint-disable-next-line no-console
    console.log("Booking submission", form);
    alert("Thanks — your booking request has been received. We’ll be in touch.");
  };

  const deliverableOptions = useMemo(
    () => [
      { key: "shortform", label: "Short-form" },
      { key: "longform", label: "Long-form" },
      { key: "event", label: "Events/Appearances" },
      { key: "ugc", label: "UGC" },
      { key: "amplification", label: "Amplification" },
      { key: "collab", label: "Co-branded Drop" },
    ],
    []
  );

  return (
    <section className="max-w-[1800px] mx-auto px-6 md:px-12 lg:px-20 pt-10 md:pt-16 pb-20 md:pb-36 bg-[#111] text-white">
      <SlideUp>
        <h2 className="text-3xl md:text-5xl lg:text-6xl text-center font-avenir-light! mb-8 md:mb-12">
          Booking Request
        </h2>
      </SlideUp>

      <form className="space-y-8 max-w-4xl mx-auto" onSubmit={onSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="brand" className="block text-sm mb-2 font-avenir text-accent">
              Brand/Company
            </label>
            <input
              id="brand"
              type="text"
              placeholder="Your brand or company"
              className="w-full font-avenir-light rounded-lg border border-white/20 bg-black/30 text-white placeholder-white/60 px-4 py-3 md:py-4 text-base outline-none focus:border-accent"
              value={form.brand}
              onChange={(e) => setForm({ ...form, brand: e.target.value })}
            />
          </div>
          <div>
            <label htmlFor="contact" className="block text-sm mb-2 font-avenir text-accent">
              Contact Name
            </label>
            <input
              id="contact"
              type="text"
              placeholder="Full Name"
              className="w-full font-avenir-light rounded-lg border border-white/20 bg-black/30 text-white placeholder-white/60 px-4 py-3 md:py-4 text-base outline-none focus:border-accent"
              value={form.contact}
              onChange={(e) => setForm({ ...form, contact: e.target.value })}
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm mb-2 font-avenir text-accent">
              Contact Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="Email Address"
              className="w-full font-avenir-light rounded-lg border border-white/20 bg-black/30 text-white placeholder-white/60 px-4 py-3 md:py-4 text-base outline-none focus:border-accent"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />
          </div>
          <div>
            <label htmlFor="talent" className="block text-sm mb-2 font-avenir text-accent">
              Talent (optional)
            </label>
            <input
              id="talent"
              type="text"
              placeholder="If you have someone in mind"
              className="w-full font-avenir-light rounded-lg border border-white/20 bg-black/30 text-white placeholder-white/60 px-4 py-3 md:py-4 text-base outline-none focus:border-accent"
              value={form.talent}
              onChange={(e) => setForm({ ...form, talent: e.target.value })}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="title" className="block text-sm mb-2 font-avenir text-accent">
              Campaign/Project Title
            </label>
            <input
              id="title"
              type="text"
              placeholder="Project or campaign name"
              className="w-full font-avenir-light rounded-lg border border-white/20 bg-black/30 text-white placeholder-white/60 px-4 py-3 md:py-4 text-base outline-none focus:border-accent"
              value={form.title}
              onChange={(e) => setForm({ ...form, title: e.target.value })}
            />
          </div>
          <div>
            <label htmlFor="budget" className="block text-sm mb-2 font-avenir text-accent">
              Budget Range
            </label>
            <select
              id="budget"
              className="w-full font-avenir-light rounded-lg border border-white/20 bg-black/30 text-white px-4 py-3 md:py-4 text-base outline-none focus:border-accent"
              value={form.budget}
              onChange={(e) => setForm({ ...form, budget: e.target.value })}
            >
              <option value="">Select a range</option>
              <option value="<10k">Under $10k</option>
              <option value="10-25k">$10k–$25k</option>
              <option value="25-50k">$25k–$50k</option>
              <option value=">50k">$50k+</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="timeline" className="block text-sm mb-2 font-avenir text-accent">
              Timeline
            </label>
            <input
              id="timeline"
              type="text"
              placeholder="e.g., Launching in June"
              className="w-full font-avenir-light rounded-lg border border-white/20 bg-black/30 text-white placeholder-white/60 px-4 py-3 md:py-4 text-base outline-none focus:border-accent"
              value={form.timeline}
              onChange={(e) => setForm({ ...form, timeline: e.target.value })}
            />
          </div>
          <div>
            <span className="block text-sm mb-2 font-avenir text-accent">Deliverables</span>
            <div className="flex flex-wrap gap-2">
              {deliverableOptions.map((d) => {
                const selected = form.deliverables.includes(d.key);
                return (
                  <label
                    key={d.key}
                    className={`cursor-pointer inline-flex items-center rounded-full border px-3 py-2 text-xs md:text-sm transition-colors ${
                      selected ? "bg-accent border-black text-black" : "border-white/20 bg-transparent text-white"
                    }`}
                  >
                    <input
                      type="checkbox"
                      className="sr-only"
                      checked={selected}
                      onChange={() => toggleDeliverable(d.key)}
                    />
                    {d.label}
                  </label>
                );
              })}
            </div>
          </div>
        </div>

        <div>
          <label htmlFor="details" className="block text-sm mb-2 font-avenir text-accent">
            Project Details
          </label>
          <textarea
            id="details"
            rows={6}
            placeholder="Tell us about the audience, platforms, KPIs, and any references."
            className="w-full font-avenir-light rounded-lg border border-white/20 bg-black/30 text-white placeholder-white/60 px-4 py-3 md:py-4 text-base outline-none focus:border-accent"
            value={form.details}
            onChange={(e) => setForm({ ...form, details: e.target.value })}
          />
        </div>

        <div>
          <label htmlFor="links" className="block text-sm mb-2 font-avenir text-accent">
            Links (deck, drive, examples)
          </label>
          <input
            id="links"
            type="text"
            placeholder="Paste any URLs here"
            className="w-full font-avenir-light rounded-lg border border-white/20 bg-black/30 text-white placeholder-white/60 px-4 py-3 md:py-4 text-base outline-none focus:border-accent"
            value={form.links}
            onChange={(e) => setForm({ ...form, links: e.target.value })}
          />
        </div>

        <div className="pt-2">
          <button type="submit" className="w-full border-2 border-black rounded-lg bg-accent py-3 md:py-4 text-lg md:text-xl font-avenir text-black">
            Submit Booking Request
          </button>
        </div>
      </form>
    </section>
  );
};

export default BookingForm;
