import React, { useState } from "react";
import openBtn from "../images/icon-hamburger.svg";
import closeBtn from "../images/icon-close.svg";
import logo from "../images/logo.svg";
const Header = () => {
  const [menu, setMenu] = useState(false);
  const handleNav = () => {
    if (menu) {
      setMenu(menu);
    }
    setMenu(!menu);
  };
  return (
    <header className="bg-white w-full fixed top-0 z-20">
      <nav className="flex items-center justify-between  w-[85%] mx-auto ">
        <div className="cursor-pointer py-8">
          <img src={logo} alt="logo" />
        </div>
        <ul className="hidden md:flex gap-4 items-center ">
          <li className="cursor-pointer hover:border-b-4 py-6 border-[#2bb7da] ">
            Home
          </li>
          <li className="cursor-pointer hover:border-b-4 h-full  py-6 border-[#2bb7da] ">
            About
          </li>
          <li className="cursor-pointer  hover:border-b-4 py-6  border-[#2bb7da] ">
            Contact
          </li>
          <li className="cursor-pointer hover:border-b-4 py-6 border-[#2bb7da] ">
            Blog
          </li>
          <li className="cursor-pointer hover:border-b-4 py-6 border-[#2bb7da] ">
            Careers
          </li>
        </ul>
        <button className="cursor-pointer hidden md:block rounded-full py-2 px-4 ">
          Request Invite
        </button>
        {/* Menu Icon */}
        <div className="block md:hidden cursor-pointer z-10">
          {menu ? (
            <img src={closeBtn} alt="" onClick={handleNav} />
          ) : (
            <img src={openBtn} alt="" onClick={handleNav} />
          )}
        </div>
        {/* Mobile menu */}
        <div
          className={
            menu
              ? "md:hidden fixed left-0 top-20 flex flex-col items-center justify-between w-full ease-in duration-300 z-10"
              : "fixed left-[-100%] top-20  flex flex-col items-center justify-between ease-in duration-300"
          }
        >
          <ul className="w-[85%] p-5 bg-[#fff] flex flex-col justify-center rounded-lg ">
            <li className="cursor-pointer  py-3 m-auto">Home</li>
            <li className="cursor-pointer  py-3 m-auto">About</li>
            <li className="cursor-pointer   py-3 m-auto">Contact</li>
            <li className="cursor-pointer  py-3 m-auto">Blog</li>
            <li className="cursor-pointer  py-3 m-auto">Careers</li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
