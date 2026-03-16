const ContactForm = () => {
  return (
    <div>
      <section className="max-w-[1800px] mx-auto px-6 md:px-12 lg:px-20 pt-12 md:pt-20 pb-20 md:pb-40">
        <div className="">
          <form className="space-y-6">
            <div>
              <label
                htmlFor="company"
                className="block text-sm mb-2 font-avenir text-accent"
              >
                Name
              </label>
              <input
                id="company"
                type="text"
                placeholder="Company or Group Name"
                className="w-full font-avenir-light rounded-lg border border-neutral-300 px-4 py-3 md:py-4 text-base outline-none focus:border-neutral-500"
              />
            </div>
            <div>
              <label
                htmlFor="address"
                className="block text-sm mb-2 font-avenir text-accent"
              >
                Email
              </label>
              <input
                id="address"
                type="text"
                placeholder="Company Address"
                className="w-full font-avenir-light rounded-lg border border-neutral-300 px-4 py-3 md:py-4 text-base outline-none focus:border-neutral-500"
              />
            </div>
            <div>
              <label
                htmlFor="contactName"
                className="block text-sm mb-2 font-avenir text-accent"
              >
                Location
              </label>
              <input
                id="contactName"
                type="text"
                placeholder="Full Name"
                className="w-full font-avenir-light rounded-lg border border-neutral-300 px-4 py-3 md:py-4 text-base outline-none focus:border-neutral-500"
              />
            </div>
            <div className="pt-4">
              <button
                type="button"
                className="w-full border-2 border-black rounded-lg bg-accent py-3 md:py-4 text-lg md:text-xl font-avenir-light font-avenir text-black"
              >
                CONTACT US
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default ContactForm;
