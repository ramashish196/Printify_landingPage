import React, { useState } from "react";
import { MdMenuOpen } from "react-icons/md";
import { IoCloseSharp } from "react-icons/io5";
import logo from "../assets/images/logo-full.svg";
import Utilies from "./Utilies"; // Importing the Utilities component
import { HowItWork, services, UseCases, NeedHelp } from "./Utility"; // Importing the dropdown data

const Nav_barr = () => {
  const [isActive, setIsActive] = useState(false); // Sidebar state for mobile
  const handleActiveBar = () => {
    setIsActive((prevState) => !prevState);
  };

  return (
    <div className="bg-white border border-b-2 shadow-sm sm:w-full h-24 flex justify-center items-center relative">
      <div className="w-4/5 flex justify-between items-center">
        {/* Logo */}
        <div className="w-40 h-auto flex justify-center items-center">
          <img src={logo} alt="logo" className="w-40 h-auto" />
        </div>

        {/* Mobile Toggle Button */}
        <div className="block sm:hidden">
          {isActive ? (
            <IoCloseSharp
              onClick={handleActiveBar}
              className="text-4xl cursor-pointer"
            />
          ) : (
            <MdMenuOpen
              onClick={handleActiveBar}
              className="text-4xl cursor-pointer"
            />
          )}
        </div>

        {/* Desktop Menu */}
        <ul className="hidden sm:flex space-x-6 text-lg justify-between items-center flex-1">
          <li className="pl-2 hover:text-green-600 cursor-pointer">Catalog</li>
          <Utilies {...HowItWork} />
          <li className="hover:text-green-600 cursor-pointer">Pricing</li>
          <li className="hover:text-green-600 cursor-pointer">Blog</li>
          <Utilies {...services} />
          <Utilies {...UseCases} />
          <Utilies {...NeedHelp} />
        </ul>

        {/* Login and Signup Buttons for Large Screens */}
        <div className="hidden sm:flex space-x-4">
          <button className="border border-gray-300 rounded-md px-4 py-2 font-semibold hover:bg-gray-100">
            Log in
          </button>
          <button className="bg-green-400 border border-green-500 rounded-md px-4 py-2 font-semibold hover:bg-green-500">
            Sign up
          </button>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <aside
        className={`${
          isActive
            ? "fixed left-0 top-0 w-64 h-screen bg-white shadow-md z-50 border-r-2 transition-transform transform translate-x-0"
            : "fixed left-0 top-0 w-64 h-screen bg-white shadow-md z-50 border-r-2 transition-transform transform -translate-x-full"
        } sm:hidden`} // Hide sidebar on desktop
      >
        {/* Menu Items for Mobile */}
        <ul className="flex flex-col justify-start items-start h-full space-y-4 pt-10 px-4">
          <li className="hover:text-green-600 w-full text-left">Catalog</li>
          <Utilies {...HowItWork} />
          <li className="hover:text-green-600 w-full text-left">Pricing</li>
          <li className="hover:text-green-600 w-full text-left">Blog</li>
          <Utilies {...services} />
          <Utilies {...UseCases} />
          <Utilies {...NeedHelp} />
        </ul>
      </aside>
    </div>
  );
};

export default Nav_barr;
