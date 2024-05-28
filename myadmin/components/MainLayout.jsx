"use client"
import MainHeader from "./MainHeader"
import { FaHome } from "react-icons/fa";
import Link from "next/link";
import { GrProjects } from "react-icons/gr";
import { BiSolidRightArrow } from "react-icons/bi";
import { FaCheck } from "react-icons/fa";
import { FaCheckDouble } from "react-icons/fa6";
import { MdOutlineDeblur } from "react-icons/md";
import { MdOutlineContactSupport } from "react-icons/md";
import { useContext } from "react";
import { MenuContext } from "@/context/Menucontext";



const MainLayout = ({children}) => {
  const {open} = useContext(MenuContext);
 
 
  return (
    <div className="bg-gray-100 w-screen min-h-screen">

      <MainHeader/> 

      <div className=" flex justify-start items-start">
        <aside className={`bg-white rounded-lg overflow-hidden transition-all duration-200 ${open ? "w-60 p-4": " w-0"}
        lg:w-60 lg:p-4`}>
          <ul>

            <li className="flex justify-start items-center hover:bg-blue-200 hover:text-blue-800 rounded-xl p-2">
              <FaHome className="mr-2"/>
              <Link href="/">Home</Link>
            </li>

            <li className="flex justify-start items-center hover:bg-blue-200 hover:text-blue-800 rounded-xl p-2">
              <GrProjects className="mr-2"/>
              <h2 className="flex-1">Projects</h2>
              <BiSolidRightArrow/>

            </li>

            <li className="flex justify-start items-center hover:bg-blue-200 hover:text-blue-800 rounded-xl p-2">
              <FaCheck className="mr-2"/>
              <h2 className="flex-1">Singular</h2>
              <BiSolidRightArrow/>

            </li>

            <li className="flex justify-start items-center hover:bg-blue-200 hover:text-blue-800 rounded-xl p-2">
              <FaCheckDouble className="mr-2"/>
              <h2 className="flex-1">Complex</h2>
              <BiSolidRightArrow/>

            </li>

            <li className="flex justify-start items-center hover:bg-blue-200 hover:text-blue-800 rounded-xl p-2">
              <MdOutlineDeblur className="mr-2"/>
              <Link href="/about-us">About Us</Link>
            </li>
            
            <li className="flex justify-start items-center hover:bg-blue-200 hover:text-blue-800 rounded-xl p-2">
              <MdOutlineContactSupport className="mr-2"/>
              <Link href="/contact-us">Contact Us</Link>
            </li>

          </ul>

        </aside>
        <main>{children}</main>
      </div>








     

      
    </div>
  )
}

export default MainLayout
