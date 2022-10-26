import React from "react";
import { links } from "./Data";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
const Navbar = () => {
  const [showNav, setShowNav] = useState(false);
  const NavHandler = () => {
    setShowNav(!showNav);
  };
  return (
    <div className="nav sticky top-0 z-50 bg-white w-[100%] h-16 flex md:flex justify-between items-center border-b border-slate-300 py-2 px-[8%]">
      <h1 className="text-2xl font-bold uppercase">
        Hamdan <span className="text-red-600">Moto</span>
      </h1>
      <div className="md:hidden">
        {showNav ? (
          <button onClick={NavHandler}>
            {" "}
            <AiOutlineClose className="text-2xl" />
          </button>
        ) : (
          <button onClick={NavHandler}>
            <AiOutlineMenu className="text-2xl" />
          </button>
        )}
      </div>
      <ul
        className={` mobileNav md:desktopNav   ${
          !showNav ? "left-[-100%] md:left-0" : "left-0"
        }`}
      >
        {links.map((link) => {
          const { id, url, text } = link;
          return (
            <li
              className="mx-3 px-4 py-1 my-2 font-bold uppercase text-sm border-b-2 border-white hover:border-red-600 hover:text-red-600 transition-all duration-700"
              key={id}
            >
              <a href="#">{text}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Navbar;
