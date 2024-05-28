"use client"

import { MenuContext } from "@/context/Menucontext";
import { useContext } from "react";
import { IoMdMenu } from "react-icons/io";
import { TbBrandBaidu } from "react-icons/tb";


const MainHeader = () => {
    const {toggle} = useContext(MenuContext);


  return (
    <div className="bg-white flex justify-between items-center px-4 h-12 mb-4">

        <div className=" flex gap-2">
            <TbBrandBaidu className="text-3xl"/>
            <h1 className="text-2xl text-red-600">Fast Admin</h1>
        </div>


        <div className="flex items-center justify-center gap-2">
            <div onClick={toggle} className="cursor-pointer lg:hidden">
                <IoMdMenu className="text-2xl"/>
            </div>
            <div>User Area</div>
        </div>
      
    </div>
  )
}

export default MainHeader
