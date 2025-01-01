import { useEffect } from "react"
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
function App() {
 
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
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

export default App
