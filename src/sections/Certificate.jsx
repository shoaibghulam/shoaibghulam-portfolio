import useData from "../hooks/useData";

export default function Certificate() {
  
  const {data} = useData();
  
  const {certificates,base_url} = data || {};
  return (
    <>
  {/*Testimonial Section Start */}
  <section
    id="testimonial"
    className="text-gray-400 bg-secondary-500 body-font "
  >
    <div className="container px-4 md:px-10 py-24 mx-auto flex flex-wrap border-t-2 border-secondary-600">
      <div className="flex flex-col text-center w-full mb-20">
        <h2 className="sm:text-4xl text-2xl font-medium title-font underline decoration-primary-500 decoration-4 underline-offset-8 text-slate-200">
          Certificate
        </h2>
      </div>

     <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
    {certificates?.map((item,index)=>(
  <div key={index}  className="text-gray-400  bg-secondary-500 body-font hover:shadow-2xl shadow-certificate rounded-md overflow-hidden">
    <a href={item?.link} target="_blank">
   <img src={base_url+item.image}  className="w-full h-[150px] hover:scale-105 duration-300 "/>
   <h1 className="text-lg pb-2 font-bold text-center text-gray-300">{item?.title}</h1>
   </a>
</div>
    ))}
    
     </div>
      
    </div>
  </section>
  {/* Testimonial Section End */}
</>

  )
}
