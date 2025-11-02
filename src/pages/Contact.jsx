import ContactCard from "./../components/common/contact/ContactCard";

const Contact = () => {
  return (
    <>
      <div className="grid grid-cols-6 lg:grid-cols-11 mx-5 lg:mx-0 gap-4 my-5">
        <div className="lg:col-span-3 col-span-6 lg:col-start-2 order-last lg:order-first flex">
          <div className="w-full h-auto flex flex-row lg:flex-col flex-wrap gap-10">
            <h1 className="font-light w-full uppercase text-2xl md:text-xl text-center md:text-left">
              Contact Info
            </h1>
            <ContactCard
              data={{
                id: 1,
                icon: "fa-regular fa-envelope",
                name: "Mail Us",
                href: "mailto:",
                line1: "junedwebsole@gmail.com",
                line2: "junedpothawaleofficial@gmail.com",
              }}
            />
            <ContactCard
              data={{
                id: 1,
                icon: "fa-solid fa-phone",
                href: "tel:",
                name: "Contact Us",
                line1: "+91 7776896286",
                line2: "+91 7588928677",
              }}
            />
            <ContactCard
              data={{
                id: 1,
                icon: "fa-regular fa-paper-plane",
                name: "Location",
                line1: "Wagholi, Pune 412207",
                line2: "Maharashtra, India",
              }}
            />
          </div>
        </div>
        <div className="col-span-6 card rounded-2xl p-10 relative space-y-4">
          <div className="contact_head flex">
            <h1 className="text-5xl font-semibold">
              Let's work <span className="text-blue-500">together.</span>
            </h1>
            <div className="arrow absolute top-0 right-15">
              <img src="/images/icons/png/icon2.png" alt="" srcset="" />
            </div>
          </div>
          <div className="contact_form w-full">
            <form className="w-full space-y-5" action="#" method="post">
              <input
                type="text"
                placeholder="Name *"
                className="contact_input outline-0 p-4 rounded-xl w-full border border-gray-900"
              />
              <input
                type="text"
                placeholder="Email *"
                className="contact_input outline-0 p-4 rounded-xl w-full border border-gray-900"
              />
              <input
                type="text"
                placeholder="Subject *"
                className="contact_input outline-0 p-4 rounded-xl w-full border border-gray-900"
              />
              <textarea
                className="contact_input outline-0 p-4 rounded-xl w-full border border-gray-900"
                placeholder="Massage *"
                name=""
                id=""
                rows="5"
              ></textarea>
              <input
                type="submit"
                className="connect_button w-[25%] bg-gray-600 hidden sm:block capitalize"
                placeholder="Send Message"
              />
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
