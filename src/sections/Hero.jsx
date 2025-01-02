/* eslint-disable react/no-unescaped-entities */

import useData from "../hooks/useData"

export default function Hero() {
  const {data} = useData();
  console.log("the data is: " ,data)
  const {about,base_url,icons} = data || {};
  return (
    <>
    {/* Hero Section Start*/}
    <section className="text-gray-400 bg-secondary-500 body-font ">
      <div className="container px-4 md:px-10 mx-auto flex pt-4 pb-16 md:flex-row flex-col items-center">
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 border-solid border-[18px] border-secondary-600 drop-shadow-xl sm:order-1 lg:order-2">
          <img
            className="object-cover object-center rounded w-full "
            alt="hero"
            src={`${base_url}${about?.image}`}
          />
        </div>
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:pt-10 pt-8 items-center text-center relative top-2 md:top-20">
          <h1 className="title-font sm:text-5xl leading-6 text-3xl mb-4 font-bold text-white">
            Hi, I'm <span className="text-primary-500">{about?.name}</span>
          </h1>
          <h2 className="title-font sm:text-3xl text-xl mb-4 font-bold text-white">
           {about?.position}
          </h2>
          
        
          <div className="mb-8 leading-relaxed text-slate-200 space-y-4 flex flex-col " dangerouslySetInnerHTML={{ __html: about?.description }}></div>
 
         
          <div className="flex gap-x-3 justify-center my-6">
            {icons && icons.map((item,index)=>(


<a href={item?.link} key={index} className="inline-flex text-white bg-secondary-600 border-0 py-4 px-6 focus:outline-none hover:bg-primary-500 rounded-lg text-lg">
             <span className="w-[16px] h-[16px]" dangerouslySetInnerHTML={{ __html: item?.icon_code }} />
            
            </a>

            ))}
        
         
          
           
          </div>
        </div>
      </div>
    </section>
  </>
  
  )
}
