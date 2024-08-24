import { IconMap2 } from "@tabler/icons-react";
import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const navLinks = [
    { name: "Home", path: "/", id: 1 },
    { name: "Profiles", path: "/profiles", id: 2 },
    { name: "Map", path: "/map", id: 3 },
    { name: "Admin Panel", path: "/admin", id: 4 },
    { name: "Contact", path: "/contact", id: 5 },
    { name: "About Us", path: "/about", id: 6 },
    // { name: "Login", path: "/login", id: 7 },
  ];

  const location = useLocation();

  return (
    <div className="navbar z-10 bg-transparent backdrop-blur-md backdrop-brightness-90 shadow-sm">
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
            {navLinks.map((link) => (
              <li className="nav-item " key={link.id}>
                <Link
                  className={`nav-link ${
                    location.pathname === link.path
                      ? "border-b-2 border-gray-500 "
                      : ""
                  }`}
                  to={link.path}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className=" flex gap-1 xl:text-4xl text-2xl font-bold">
          <span>
            <Link to="/">GeoProfiler</Link>
          </span>
          <IconMap2 />
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {navLinks.map((link) => (
            <div key={link.id}>
              <li className="nav-item text-md text-gray-600  [&_a]:hover:bg-gray-300">
                <Link
                  className={`nav-link ${
                    location.pathname === link.path
                      ? "border-b-2 border-gray-500 bg-gray-300"
                      : ""
                  }`}
                  to={link.path}
                >
                  {link.name}
                </Link>
              </li>
            </div>
          ))}
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn border-none bg-gray-300 text-gray-800 hover:bg-gray-500 hover:text-gray-200">
          Login
        </a>
      </div>
    </div>
  );
};

export default Navbar;
