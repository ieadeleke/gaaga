import { SlideUp } from "@/components/Motion";

const EnquiryForm = () => {
  return (
    <div>
      <div className="bg-[#111] h-10 w-full mt-10"></div>
      <section className="max-w-[1800px] mx-auto px-6 md:px-12 lg:px-20 pt-10 md:pt-16 bg-white">
        <SlideUp>
          <h2 className="text-3xl md:text-5xl lg:text-6xl text-center font-avenir-light! mb-8 md:mb-12">
            Sponsorship Enquiry Form
          </h2>
        </SlideUp>

          <form className="space-y-6">
            <div>
              <label
                htmlFor="company"
                className="block text-sm mb-2 font-avenir-light"
              >
                Company or Group Requesting Sponsorship
              </label>
              <input
                id="company"
                type="text"
                placeholder="Company or Group Name"
                className="w-full font-avenir-light rounded-lg border border-neutral-300 bg-white px-4 py-3 md:py-4 text-base outline-none focus:border-neutral-500"
              />
            </div>

            <div>
              <label
                htmlFor="address"
                className="block text-sm mb-2 font-avenir-light"
              >
                Company Address
              </label>
              <input
                id="address"
                type="text"
                placeholder="Company Address"
                className="w-full font-avenir-light rounded-lg border border-neutral-300 bg-white px-4 py-3 md:py-4 text-base outline-none focus:border-neutral-500"
              />
            </div>

            <div>
              <label
                htmlFor="contactName"
                className="block text-sm mb-2 font-avenir-light"
              >
                Contact Name
              </label>
              <input
                id="contactName"
                type="text"
                placeholder="Full Name"
                className="w-full font-avenir-light rounded-lg border border-neutral-300 bg-white px-4 py-3 md:py-4 text-base outline-none focus:border-neutral-500"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm mb-2 font-avenir-light"
              >
                Contact Email Address
              </label>
              <input
                id="email"
                type="email"
                placeholder="Email Address"
                className="w-full font-avenir-light rounded-lg border border-neutral-300 bg-white px-4 py-3 md:py-4 text-base outline-none focus:border-neutral-500"
              />
            </div>

            <div className="pt-4">
              <button
                type="button"
                className="w-full border-2 border-black rounded-lg bg-accent py-3 md:py-4 text-lg md:text-xl font-avenir-light font-avenir text-black"
              >
                Send Message
              </button>
            </div>
          </form>
      </section>
      <div className="bg-black h-20 md:h-40 w-full mt-10"></div>
    </div>
  );
};

export default EnquiryForm;
