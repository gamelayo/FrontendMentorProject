import React from "react";
import logo from "../images/logo1.svg";
import {
  FaFacebookSquare,
  FaYoutube,
  FaTwitter,
  FaPinterest,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#2d314d] text-[#fff] py-12">
      <div className="w-[85%] flex justify-between mx-auto py-12 flex-col md:flex-row gap-3">
        <div className="flex flex-col items-center gap-10">
          <img src={logo} alt="logo" />
          <div className="flex gap-3">
            <FaFacebookSquare
              className="hover:text-[#31d35c] cursor-pointer"
              size={25}
            />
            <FaYoutube
              size={25}
              className="hover:text-[#31d35c] cursor-pointer"
            />

            <FaTwitter
              size={25}
              className="hover:text-[#31d35c] cursor-pointer"
            />
            <FaPinterest
              size={25}
              className="hover:text-[#31d35c] cursor-pointer"
            />
            <FaInstagram
              size={25}
              className="hover:text-[#31d35c] cursor-pointer"
            />
          </div>
        </div>
        <ul className="flex flex-col gap-3 items-center mt-3 md:mt-0">
          <li className="hover:text-[#31d35c] cursor-pointer">About Us</li>
          <li className="hover:text-[#31d35c] cursor-pointer">Contact</li>
          <li className="hover:text-[#31d35c] cursor-pointer">Blog</li>
        </ul>
        <ul className="flex flex-col gap-3 items-center">
          <li className="hover:text-[#31d35c] cursor-pointer">Careers</li>
          <li className="hover:text-[#31d35c] cursor-pointer">Support</li>
          <li className="hover:text-[#31d35c] cursor-pointer">
            Privacy Policy
          </li>
        </ul>
        <div className="flex flex-col gap-4 mt-3 md:mt-0">
          <div className="flex justify-center md:justify-end">
            <button className="cursor-pointer  rounded-full py-2 px-4">
              Request Invite
            </button>
          </div>

          <p className="flex justify-center">
            &copy; Easybank. All Right Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
