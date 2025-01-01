/* eslint-disable react/prop-types */
import { Link } from "react-scroll";
import {  Navbar } from "flowbite-react";
export default function NavItem({id,label}) {
  return (
    <>
     <Navbar.Link
            as={Link}
            activeClass="!text-primary-500" 
          to={id} 
          spy={true} 
          smooth={true} 
          offset={50} 
          duration={500} 
          className="cursor-pointer"
            >
              {label}
            </Navbar.Link>
    </>
  )
}
