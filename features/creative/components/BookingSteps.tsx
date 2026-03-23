import { SlideUp, StaggerContainer, StaggerItem } from "@/components/Motion";

const steps = [
  { no: "01", title: "Brief", desc: "Tell us the audience, outcomes, timeline and budget." },
  { no: "02", title: "Match", desc: "We recommend creators, align the concept, and lock deliverables." },
  { no: "03", title: "Launch", desc: "We produce, report, and iterate with your team." },
];

const BookingSteps = () => {
  return (
    <section className="px-4 md:px-20 text-white mt-10 md:mt-20">
      <SlideUp>
        <h4 className="text-2xl md:text-3xl font-avenir-light! mb-8 md:mb-12">How Booking Works</h4>
      </SlideUp>
      <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {steps.map((s) => (
          <StaggerItem key={s.no}>
            <div className="rounded-2xl md:rounded-3xl bg-[#111] border border-white/10 p-6 md:p-8">
              <div className="text-5xl md:text-7xl text-accent font-avenir-light! mb-3">{s.no}</div>
              <h5 className="text-xl md:text-2xl mb-2">{s.title}</h5>
              <p className="text-white/80 font-avenir-light text-sm md:text-base">{s.desc}</p>
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </section>
  );
};

export default BookingSteps;

