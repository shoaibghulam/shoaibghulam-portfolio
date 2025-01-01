import {  Navbar } from "flowbite-react";
import { themeOptions } from "./options";
import { Link } from "react-scroll";
import NavItem from "./NavItem";
export default function NavbarMenu() {
  return (
   <>

  {/* Navbar Start */}
  {/* <nav className="flex flex-wrap items-center justify-between p-5 bg-secondary-500">
    <a className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
      <span className="ml-3 text-xl">Shoaib Ghulam</span>
    </a>
    <div className="flex md:hidden">
      <button id="hamburger">
        <img
          className="toggle block"
          src="./asset/menu-squared.png"
          alt="menu icon"
          width={40}
          height={40}
        />
        <img
          className="toggle hidden"
          src="./asset/close-window.png"
          alt="close icon"
          width={40}
          height={40}
        />
      </button>
    </div>
    <div className="toggle hidden w-full md:w-auto md:flex text-right text-bold mt-5 md:mt-0 border-t-2 border-primary-500 md:border-none">
      <a
        href="#whatIdo"
        className="block md:inline-block text-slate-200 hover:text-primary-500 px-3 py-3 border-b-2 border-primary-500 md:border-none uppercase"
      >
        What I do
      </a>
      <a
        href="#portfolio"
        className="block md:inline-block text-slate-200 hover:text-primary-500 px-3 py-3 border-b-2 border-primary-500 md:border-none uppercase"
      >
        Portfolio
      </a>
      <a
        href="#skills"
        className="block md:inline-block text-slate-200 hover:text-primary-500 px-3 py-3 border-b-2 border-primary-500 md:border-none uppercase"
      >
        Skills
      </a>
      <a
        href="#testimonial"
        className="block md:inline-block text-slate-200 hover:text-primary-500 px-3 py-3 border-b-2 border-primary-500 md:border-none uppercase"
      >
        Testimonial
      </a>
      <a
        href="#blog"
        className="block md:inline-block text-slate-200 hover:text-primary-500 px-3 py-3 border-b-2 border-primary-500 md:border-none uppercase"
      >
        Blog
      </a>
    </div>
    <a
      href="#contact"
      className="toggle hidden md:flex w-full md:w-auto px-4 py-2 text-right bg-primary-500 hover:bg-secondary-600 hover:text-primary-500 text-white md:rounded"
    >
      Hire me
    </a>
  </nav> */}
  {/* Navbar End*/}

  



    <Navbar fluid rounded theme={themeOptions}>
      <Navbar.Brand 
      
      as={Link} 
    
     
    to="home" 
    spy={true} 
    smooth={true} 
    offset={50} 
    duration={500} 
      >
        <span className="self-center whitespace-nowrap  font-semibold dark:text-white cursor-pointer text-2xl">Shoaib Ghulam</span>
      </Navbar.Brand>
      <div className="flex md:order-2 px-3">
        <a href="https://www.fiverr.com/users/shoaibgm" className="py-2 px-10 bg-primary-500 rounded-md hover:bg-primary-500/40"> Hire me</a>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <NavItem id="home" label="Home"/>
        <NavItem id="services" label="What I Do"/>
        <NavItem id="portfolio" label="Portfolio"/>
        <NavItem id="myskills" label="My Skills"/>
        <NavItem id="certificate" label="Certificate"/>
      
      </Navbar.Collapse>
    </Navbar>


   </>
  )
}
