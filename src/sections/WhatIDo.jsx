import useData from "../hooks/useData";

export default function WhatIDo() {
  const {data} = useData();
  console.log("the data is: " ,data)
  const {services} = data || {};
  return (
   <>
   <section id="whatIdo" className="text-gray-400 bg-secondary-500 body-font ">
  <div className="container px-4 md:px-10 py-24 mx-auto flex flex-wrap border-t-2 border-secondary-600">
    <div className="flex flex-col text-center w-full mb-20">
      <h2 className="sm:text-4xl text-2xl font-medium title-font underline decoration-primary-500 decoration-4 underline-offset-8 text-slate-200">
        What I Do
      </h2>
    </div>
    <div className="flex flex-wrap -m-4">
      {services?.map((item,index)=>(
  <div key={index} className="p-4 md:w-1/3" data-aos="fade-up" data-aos-delay={300}>
  <div className="flex rounded-lg h-full bg-secondary-600 bg-opacity-60 p-8 flex-col">
    <div className="flex items-center mb-3">
      <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-primary-500 text-white flex-shrink-0">
      <span className="w-[26px] h-[26px]" dangerouslySetInnerHTML={{ __html: item?.icon }} />
      
    
      </div>
      <h2 className="text-slate-200 text-lg title-font font-medium">
       {item?.title}
      </h2>
    </div>
    <div className="flex-grow">
      <p className="leading-relaxed text-base">
       {item?.description}
      </p>
    </div>
  </div>
</div>
      ))}
    
    
    
    </div>
  </div>
</section>

   </>
  )
}
