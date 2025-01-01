
export default function Contact() {
  return (
   
    <>
  {/* Contact Start */}
  <section
    id="contact"
    className="text-slate-200  bg-secondary-500 body-font relative "
  >
    <div className="container px-4 md:px-10  py-24 mx-auto border-t-2 border-secondary-600 shadow-lg border-xl drop-shadow-lg">
      <div className="flex flex-col text-center w-full mb-12">
        <h2 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">
          Contact Me
        </h2>
        <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui,
          nesciunt!
        </p>
      </div>
      <div className="lg:w-1/2 md:w-2/3 mx-auto">
        <div className="bg-secondary-600 bg-opacity-40 p-6 rounded-lg h-full flex items-start">
          <div className="flex flex-wrap -m-2">
            <div className="p-2 w-1/2">
              <div className="relative">
                <label
                  htmlFor="name"
                  className="leading-7 text-sm text-slate-200 uppercase"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full bg-secondary-600 bg-opacity-40 rounded border border-slate-800 focus:border-primary-500 focus:ring-2 focus:ring-primary-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
            <div className="p-2 w-1/2">
              <div className="relative">
                <label
                  htmlFor="email"
                  className="leading-7 text-sm text-slate-200 uppercase"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full bg-secondary-600 bg-opacity-40 rounded border border-slate-800 focus:border-primary-500 focus:bg-gray-900 focus:ring-2 focus:ring-primary-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
            <div className="p-2 w-full">
              <div className="relative">
                <label
                  htmlFor="message"
                  className="leading-7 text-sm text-slate-200 uppercase"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="w-full bg-secondary-600 rounded border border-slate-800 focus:border-primary-500 focus:bg-gray-900 focus:ring-2 focus:ring-primary-500 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  defaultValue={""}
                />
              </div>
            </div>
            <div className="p-4 w-full">
              <button className="flex mx-auto text-primary-500 bg-secondary-600 hover:bg-primary-500 hover:text-slate-200 border-lg font-medium py-4 px-10 focus:outline-nonerounded text-lg uppercase">
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Contact End*/}
</>

  )
}
