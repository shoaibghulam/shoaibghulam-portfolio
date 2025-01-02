import { useEffect, useState } from "react"
import Footer from "./components/Footer"

// import Blog from "./sections/Blog"
// import Contact from "./sections/Contact"
import Hero from "./sections/Hero"
import Portfolio from "./sections/Portfolio"
import Skill from "./sections/Skill"
// import Testimonial from "./sections/Testimonial"
import WhatIDo from "./sections/WhatIDo"
import AOS from "aos";
import "aos/dist/aos.css";
import Certificate from "./sections/Certificate"
import NavbarMenu from "./components/Navbar"
import { Element } from "react-scroll"
import useData from "./hooks/useData"
import Loader from "./common/Loader"
function App() {
  const {loading} = useData();
  const [TheLoader,setLoader] = useState(false)
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  useEffect(()=>{
    if(loading===true){
    setTimeout(()=>{
      setLoader(loading)
    },2000)
  }
  },[loading])
  if(TheLoader){
  return (
    
   <>
   <NavbarMenu/>
   <Element name="home" className="element">
   <Hero/>
   </Element>
   <Element name="services" className="element">
   <WhatIDo/>
   </Element>
   <Element name="portfolio" className="element">
   <Portfolio/>
   </Element>
   <Element name="myskills" className="element">
   <Skill/>
   </Element>
   <Element name="certificate" className="element">
   <Certificate/>
   </Element>
   {/* <Blog/> */}
   {/* <Contact/> */}
   <Footer/>
   </>
  )
}
else{
  return(
    <div className="bg-gray-900 ">
    <Loader />
    </div>
  )
}
}

export default App
