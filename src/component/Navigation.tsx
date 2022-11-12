import React from "react";
import { Link } from "react-router-dom";

export const Navigation =() =>{
return (  <nav className="h-50px items-center  flex justify-between px-5 bg-gray-500 text-white ">
      <span className="font-bold "> Rect 2022</span>

      <span>
         <Link to ="/" className="mr-2">Products</Link>
         <Link to ="/about">About</Link>
      </span>
   </nav>)
}