import useData from "../hooks/useData";

export default function Skill() {
  const {data} = useData();
  
  const {skills,base_url} = data || {};
  return (
   
    <>
  {/* Skills Section Start*/}
  <section id="skills" className="text-gray-400 bg-secondary-500 body-font ">
    <div className="container px-4 md:px-10 py-24 mx-auto flex flex-wrap border-t-2 border-secondary-600">
      <div className="flex flex-col text-center w-full mb-20">
        <h2 className="sm:text-4xl text-2xl font-medium title-font underline decoration-primary-500 decoration-4 underline-offset-8 text-slate-200">
          My Skills
        </h2>
      </div>
      <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        <h2 className="title-font sm:text-3xl text-xl mb-4 font-bold text-white">
        Full Stack Developer
        </h2>
        <p className="mb-8 leading-relaxed text-slate-200">
        As a versatile developer, I specialize in full-stack web development, proficient in both front-end and back-end technologies. I also have expertise in mobile app development and graphic design, enabling me to deliver comprehensive digital solutions.



        </p>
      </div>
      <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        <div className="grid grid-cols-4 md:grid-cols-6 gap-5">
          {skills?.map((item,index)=>(
          <div key={index} className="">
            <div className="flex rounded-lg bg-secondary-600 hover:scale-110 duration-500 p-3 flex-col justify-center items-center">
              <img
                className="w-[100px] object-fill"
                src={base_url+item?.icon}
                alt={item?.name}
              />
            </div>
          </div>
          ))}
          
        </div>
      </div>
    </div>
  </section>
  {/*Skills Section End */}
</>

  )
}
