import React from "react";
import { BsCart4 } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa6";
import { Link, NavLink } from "react-router-dom";

const Nav = () => {
  const homeLink = (
    <NavLink
      to="/"
      className={({ isActive }) =>
        isActive ? "underline font-bold" : "font-bold"
      }
    >
      Home
    </NavLink>
  );
  const dashboardLink = (
    <NavLink
      to="/dashboard"
      className={({ isActive }) =>
        isActive ? "underline font-bold" : "font-bold"
      }
    >
      Dashboard
    </NavLink>
  );
  const statsLink = (
    <NavLink
      to="/statistics"
      className={({ isActive }) =>
        isActive ? "underline font-bold" : "font-bold"
      }
    >
      Statistics
    </NavLink>
  );
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {homeLink}
            {dashboardLink}
            {statsLink}
          </ul>
        </div>
        <div className="flex gap-2 justify-center items-center">
          <img src="/logo.png" alt="" className="w-6 h-6" />
          <h2 className="font-bold  md:text-xl">Gadget Heaven</h2>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal gap-5 px-1">
          {homeLink}
          {dashboardLink}
          {statsLink}
        </ul>
      </div>
      <div className="navbar-end gap-3">
        <div className="w-10 h-10 rounded-full shadow-lg flex justify-center items-center">
          <Link>
            <BsCart4 />
          </Link>
        </div>

        <div className="w-10 h-10 rounded-full shadow-lg flex justify-center items-center">
          <Link>
            <FaRegHeart />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Nav;
