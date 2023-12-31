"use client"
import React, { useState } from "react";

import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(true);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="text-white flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4">
      <h1 className=" w-full text-3xl font-bold text-[#00df9a] ">
        UCHNINO JAKES.
      </h1>
      <ul className="md:flex hidden w-[400px]">
        <li className="p-4">Home</li>
        <li className="p-4">About</li>
        <li className="px-4 py-4 items-center h-8 justify-center flex mt-3 rounded-md ml-6 bg-[#00df9a]">
          Sign Up
        </li>
      </ul>
      <div onClick={handleNav} className="block md:hidden">
        {!nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      {/* mobile Menu  */}

      <div
        className={
          !nav
            ? `fixed left-0 top-0 w-[80%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-700`
            : `fixed left-[-100%] `
        }
      >
        <h1 className=" w-full text-xl font-bold text-[#00df9a] m-4 ">
          UCHNINO JAKES.
        </h1>
        <ul className=" uppercase p-4">
          <li className="p-4 border-b border-gray-600">Home</li>
          <li className="p-4 border-b border-gray-600">About</li>
          <li className="p-4">Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;