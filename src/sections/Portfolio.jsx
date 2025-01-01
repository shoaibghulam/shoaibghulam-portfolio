import useData from "../hooks/useData";

export default function Portfolio() {
  const {data} = useData();
  
  const {portfolio,base_url} = data || {};
  return (
    <>
    {/* Portfolio Section Start */}
    <section id="portfolio" className="text-gray-400 body-font bg-secondary-500 ">
      <div className="container px-4 md:px-10 py-24 mx-auto border-t-2 border-secondary-600">
        <div className="flex flex-col text-center w-full mb-20">
          <h2 className="sm:text-4xl text-2xl font-medium title-font underline decoration-primary-500 decoration-4 underline-offset-8 text-slate-200">
            Portfolio
          </h2>
        </div>
        <div className="flex flex-wrap -m-4">
          {portfolio?.map((item,index)=>(
          <div key={index} className="xl:w-1/3 md:w-1/2 p-4">
            <a href={`${item?.link ===null ?"#" : item?.link }`} target="_blank">
              <div className="bg-secondary-600 bg-opacity-40 p-6 rounded-lg">
                <img
                  className="h-40 rounded w-full object-cover object-center mb-6 hover:scale-105 duration-500"
                  src={base_url+item?.image}
                  alt="content"
                />
                <h2 className="text-lg text-slate-200 font-medium title-font mb-4">
                  {item?.title}
                </h2>
                <p className="leading-relaxed text-base">
                 {item?.description}
                </p>
              </div>
            </a>
          </div>
          ))}
        
        </div>
      </div>
    </section>
    {/*Portfolio Section End */}
  </>
  
  )
}
