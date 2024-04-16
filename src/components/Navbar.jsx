import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import logo from "../assets/images/b.png"

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className=" fixed shadow-md w-full top-0 left-0 bg-white z-50">
      <div className="flex items-center justify-between py-4 md:px-10 px-7">
        {/* <div className=" lg:text-4xl font-bold text-2xl md:text-2xl cursor-pointer text-black"> */}
        <img src={logo} className=" w-80 h-28 -m-10" alt="" />
        {/* </div> */}
        <div
          className="text-3xl text-black md:hidden cursor-pointer"
          onClick={handleNav}
        >
          {nav ? <AiOutlineClose /> : <AiOutlineMenu />}
        </div>
        <ul
          className={`md:flex md:items-center fixed md:static bg-[#6268F5]  text-black md:z-auto z-[-1] md:w-auto h-full transition-transform duration-500 ease-in-out ${
            nav ? "opacity-100 translate-x-0" : "-translate-x-full opacity-0 "
          } left-0 top-16 md:translate-x-0 opacity-85 md:opacity-100 md:static md:bg-transparent md:z-auto z-50 w-2/3 `}
        >
          <li className="md:ml-8 text-md md:my-0 my-7 ml-6">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `hover:text-orange-600 duration-500 ${
                  isActive ? "text-orange-600 border-b " : "text-black"
                }`
              }
              onClick={() => setNav(false)}
            >
              Home
            </NavLink>
          </li>
          <li className="md:ml-8 text-md md:my-0 my-7 ml-6">
            <NavLink
              to="/articles"
              className={({ isActive }) =>
                `hover:text-orange-600 duration-500 ${
                  isActive ? "text-orange-600" : "text-black"
                }`
              }
              onClick={() => setNav(false)}
            >
              Articles
            </NavLink>
          </li>
          <li className="md:ml-8 text-md md:my-0 my-7 ml-6">
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `hover:text-orange-600 duration-500 ${
                  isActive ? "text-orange-600" : "text-black"
                }`
              }
              onClick={() => setNav(false)}
            >
              About
            </NavLink>
          </li>
          <li className="md:ml-8 text-md md:my-0 my-7 ml-6">
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `hover:text-orange-600 duration-500 ${
                  isActive ? "text-orange-600" : "text-black"
                }`
              }
              onClick={() => setNav(false)}
            >
              Contact
            </NavLink>
          </li>

          <li className="md:ml-8 text-md md:my-0 my-7 ml-6">
            <NavLink
              to="/login"
              className={({ isActive }) =>
                `hover:text-orange-600 duration-500 ${
                  isActive ? "text-orange-600" : "text-black"
                }`
              }
              onClick={() => setNav(false)}
            >
              Login
            </NavLink>
          </li>
          <li className="md:ml-8 text-md md:my-0 my-7 ml-6">
            <NavLink
              to="/registration"
              className={({ isActive }) =>
                `hover:text-orange-600 duration-500 ${
                  isActive ? "text-orange-600" : "text-black"
                }`
              }
              onClick={() => setNav(false)}
            >
              Registration
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Navbar;
