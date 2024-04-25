import React from "react";
import { Link, NavLink } from "react-router-dom";

function Header() {
  return (
    <nav className="w-full  h-[60px] p-1 z-50 sticky top-0 bg-gray-600 shadow-xl flex items-center shadow text-white">
      <div className=" ml-[10vh]">
        <NavLink
          to={"/"}
          className={({ isActive }) => `mx-3 p-4 rounded-md h-full  hover:bg-gray-400`}
        >
          <i className="fa fa-home text-[30px]"></i>
        </NavLink>
        <NavLink
          to={"/form"}
          className={({ isActive }) => `mx-3 p-4 rounded-md h-full  hover:bg-gray-400`}
        >
          Form
        </NavLink>

       
      </div>
    </nav>
  );
}

export default Header;
