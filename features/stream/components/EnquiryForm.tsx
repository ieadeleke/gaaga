const EnquiryForm = () => {
  return (
    <div>
      <div className="bg-black h-10 w-full mt-10"></div>
      <section className="px-6 md:px-12 lg:px-20 pt-16 bg-white">
        <div className="">
          <h2 className="text-5xl md:text-6xl text-center font-avenir-light! mb-12">
            Sponsorship Enquiry Form
          </h2>

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
                className="w-full font-avenir-light rounded-lg border border-neutral-300 bg-white px-4 py-4 text-base outline-none focus:border-neutral-500"
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
                className="w-full font-avenir-light rounded-lg border border-neutral-300 bg-white px-4 py-4 text-base outline-none focus:border-neutral-500"
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
                className="w-full font-avenir-light rounded-lg border border-neutral-300 bg-white px-4 py-4 text-base outline-none focus:border-neutral-500"
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
                className="w-full font-avenir-light rounded-lg border border-neutral-300 bg-white px-4 py-4 text-base outline-none focus:border-neutral-500"
              />
            </div>

            <div className="pt-4">
              <button
                type="button"
                className="w-full border-2 border-black rounded-lg bg-accent py-4 text-xl font-avenir-light font-avenir text-black"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </section>
      <div className="bg-black h-40 w-full mt-10"></div>
    </div>
  );
};

export default EnquiryForm;
