
export default function Blog() {
  return (
    <>
    {/* Blog Section Start*/}
    <section id="blog" className="text-gray-400 bg-secondary-500 body-font ">
      <div className="container px-4 md:px-10 py-24 mx-auto border-t-2 border-secondary-600">
        <div className="flex flex-wrap -mx-4 -my-8">
          <div className="flex flex-col text-center w-full mb-20">
            <h2 className="sm:text-4xl text-2xl font-medium title-font underline decoration-primary-500 decoration-4 underline-offset-8 text-slate-200">
              My Blog
            </h2>
          </div>
          <div className="py-8 px-4 lg:w-1/3">
            <div className="bg-secondary-600 bg-opacity-40 p-6 rounded-lg h-full flex items-start">
              <div className="w-12 flex-shrink-0 flex flex-col text-center leading-none">
                <span className="text-gray-400 pb-2 mb-2 border-b-2 border-gray-700">
                  Aug
                </span>
                <span className="font-medium text-lg leading-none text-gray-300 title-font">
                  21
                </span>
              </div>
              <div className="flex-grow pl-6">
                <h2 className="tracking-widest text-xs title-font font-medium text-primary-500 mb-1 uppercase">
                  Artificial Intelligence
                </h2>
                <h3 className="title-font text-xl font-medium text-slate-200 mb-3">
                  Generative AI for creatives
                </h3>
                <p className="leading-relaxed mb-5">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Repellat nobis veritatis dicta.
                </p>
                <a className="mt-3 text-primary-500 inline-flex items-center">
                  Read more
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="py-8 px-4 lg:w-1/3">
            <div className="bg-secondary-600 bg-opacity-40 p-6 rounded-lg h-full flex items-start">
              <div className="w-12 flex-shrink-0 flex flex-col text-center leading-none">
                <span className="text-gray-400 pb-2 mb-2 border-b-2 border-gray-700">
                  Jul
                </span>
                <span className="font-medium text-lg leading-none text-gray-300 title-font">
                  31
                </span>
              </div>
              <div className="flex-grow pl-6">
                <h2 className="tracking-widest text-xs title-font font-medium text-primary-500 mb-1 uppercase">
                  UX Design
                </h2>
                <h3 className="title-font text-xl font-medium text-white mb-3">
                  Breaking the law of UX
                </h3>
                <p className="leading-relaxed mb-5">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
                  voluptates consequuntur inventore?
                </p>
                <a className="mt-3 text-primary-500 inline-flex items-center">
                  Read more
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="py-8 px-4 lg:w-1/3">
            <div className="bg-secondary-600 bg-opacity-40 p-6 rounded-lg h-full flex items-start">
              <div className="w-12 flex-shrink-0 flex flex-col text-center leading-none">
                <span className="text-gray-400 pb-2 mb-2 border-b-2 border-gray-700">
                  Jul
                </span>
                <span className="font-medium text-lg leading-none text-gray-300 title-font">
                  15
                </span>
              </div>
              <div className="flex-grow pl-6">
                <h2 className="tracking-widest text-xs title-font font-medium text-primary-500 mb-1 uppercase">
                  UI Design
                </h2>
                <h3 className="title-font text-xl font-medium text-white mb-3">
                  Motion Design
                </h3>
                <p className="leading-relaxed mb-5">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum
                  dolorum quo quasi?
                </p>
                <a className="mt-3 text-primary-500 inline-flex items-center">
                  Read more
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/*Blog Section End */}
  </>
  
  )
}
