export default function TestimonialItem() {
  return (
    <>
      <div className="flex rounded-lg h-full bg-secondary-600 bg-opacity-60 p-8 flex-col">
              <div className="flex items-end mb-3">
                <img
                  className="w-10 h-10 rounded-full mr-4"
                  alt="quote"
                  src="./asset/quote.png"
                />
                <img
                  className="w-10 h-10 rounded-full mr-4"
                  alt="user"
                  src="https://randomuser.me/api/portraits/men/1.jpg"
                />
              </div>
              <div className="flex-grow">
                <p className="leading-relaxed text-base">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id,
                  rerum fugit. Minus sit voluptate eos autem illo numquam
                  commodi hic!
                </p>
                <h2 className="text-white text-lg title-font mt-6 font-medium">
                  Arun Kumar
                </h2>
                <p className="leading-relaxed text-base">
                  Delivery Manager, Vigowebs
                </p>
              </div>
            </div>
    </>
  )
}
