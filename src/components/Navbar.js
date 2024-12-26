import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import backgroundImage from "../assets/AR.png";
import { FaBars, FaTimes } from "react-icons/fa";

export const Navbar = () => {
  const [active, setActive] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const userData = localStorage.getItem("token");
    if (userData) {
      setActive(true);
    }
    console.log("actibe");
  }, []);

  const toggleNavbar = () => {
    setIsOpen(!isOpen); // Toggle navbar visibility
  };

  return (
    <div className="w-[100vw] h-[8vh] navbar">
      <button
        onClick={toggleNavbar}
        className="text-white rounded-md ml-3 absolute top-2 z-100  md:hidden visible"
      >
        {isOpen ? <FaTimes size={30} /> : <FaBars size={30} />}
      </button>
      {isOpen && (
        <div
          className="w-[100vw] h-[100vh] md:hidden absolute color-bg bg-black z-50"
          onClick={toggleNavbar}
        >
          <button
            onClick={toggleNavbar}
            className="text-white rounded-md top-2 ml-3 absolute z-100  md:hidden visible"
          >
            {isOpen ? <FaTimes size={30} /> : <FaBars size={30} />}
          </button>

          <nav className="flex w-[100%] h-[100%] ">
        <ul className="flex md:hidden flex-col w-[100%] h-[100%] justify-center items-center space-y-5">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-blue-500" : "text-gray-700"
            }
          >
            <li className="ml-5 hover:bg-blue-700 hover:scale-125 transition-transform duration-300 hover:rounded-lg py-1 px-3 cursor-pointer text-white">
              Home
            </li>
          </NavLink>

          <NavLink
            to="/sell"
            className={({ isActive }) =>
              isActive ? "text-blue-500" : "text-gray-700"
            }
          >
            <li className="ml-5 hover:bg-blue-700 hover:scale-125 transition-transform duration-300 hover:rounded-lg py-1 px-3 cursor-pointer text-white">
              Sell
            </li>
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? "text-blue-500" : "text-gray-700"
            }
          >
            <li className="ml-5 hover:bg-blue-700 hover:scale-125 transition-transform duration-300 hover:rounded-lg py-1 px-3 cursor-pointer text-white">
              Contact
            </li>
          </NavLink>
          {active ? (
            // Show Dashboard if user is logged in
            <>
              <NavLink
                to="/dashboard"
                className={({ isActive }) =>
                  isActive ? "text-blue-500" : "text-gray-700"
                }
              >
                <li className="ml-5 hover:bg-blue-700 hover:scale-125 transition-transform duration-300 hover:rounded-lg py-1 px-3 cursor-pointer text-white">
                  Dashboard
                </li>
              </NavLink>
              <NavLink
                to="/logout"
                className={({ isActive }) =>
                  isActive ? "text-blue-500" : "text-gray-700"
                }
              >
                <li className="ml-5 hover:bg-blue-700 hover:scale-125 transition-transform duration-300 hover:rounded-lg py-1 px-3 cursor-pointer text-white">
                  Logout
                </li>
              </NavLink>
            </>
          ) : (
            // Show Login and Signup if user is not logged in
            <>
              <NavLink
                to="/login"
                className={({ isActive }) =>
                  isActive ? "text-blue-500" : "text-gray-700"
                }
              >
                <li className="ml-5 hover:bg-blue-700 hover:scale-125 transition-transform duration-300 hover:rounded-lg py-1 px-3 cursor-pointer text-white">
                  Login
                </li>
              </NavLink>

              <NavLink
                to="/signup"
                className={({ isActive }) =>
                  isActive ? "text-blue-500" : "text-gray-700"
                }
              >
                <li className="ml-5 hover:bg-blue-700 hover:scale-125 transition-transform duration-300 hover:rounded-lg py-1 px-3 cursor-pointer text-white">
                  Signup
                </li>
              </NavLink>
            </>
          )}
        </ul>
      </nav>
        </div>
      )}

      <nav className="flex md:justify-end justify-start p-3">
        <ul className="md:flex hidden">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-blue-500" : "text-gray-700"
            }
          >
            <li className="ml-5 hover:bg-blue-700 hover:scale-125 transition-transform duration-300 hover:rounded-lg py-1 px-3 cursor-pointer text-white">
              Home
            </li>
          </NavLink>

          <NavLink
            to="/sell"
            className={({ isActive }) =>
              isActive ? "text-blue-500" : "text-gray-700"
            }
          >
            <li className="ml-5 hover:bg-blue-700 hover:scale-125 transition-transform duration-300 hover:rounded-lg py-1 px-3 cursor-pointer text-white">
              Sell
            </li>
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? "text-blue-500" : "text-gray-700"
            }
          >
            <li className="ml-5 hover:bg-blue-700 hover:scale-125 transition-transform duration-300 hover:rounded-lg py-1 px-3 cursor-pointer text-white">
              Contact
            </li>
          </NavLink>
          {active ? (
            // Show Dashboard if user is logged in
            <>
              <NavLink
                to="/dashboard"
                className={({ isActive }) =>
                  isActive ? "text-blue-500" : "text-gray-700"
                }
              >
                <li className="ml-5 hover:bg-blue-700 hover:scale-125 transition-transform duration-300 hover:rounded-lg py-1 px-3 cursor-pointer text-white">
                  Dashboard
                </li>
              </NavLink>
              <NavLink
                to="/logout"
                className={({ isActive }) =>
                  isActive ? "text-blue-500" : "text-gray-700"
                }
              >
                <li className="ml-5 hover:bg-blue-700 hover:scale-125 transition-transform duration-300 hover:rounded-lg py-1 px-3 cursor-pointer text-white">
                  Logout
                </li>
              </NavLink>
            </>
          ) : (
            // Show Login and Signup if user is not logged in
            <>
              <NavLink
                to="/login"
                className={({ isActive }) =>
                  isActive ? "text-blue-500" : "text-gray-700"
                }
              >
                <li className="ml-5 hover:bg-blue-700 hover:scale-125 transition-transform duration-300 hover:rounded-lg py-1 px-3 cursor-pointer text-white">
                  Login
                </li>
              </NavLink>

              <NavLink
                to="/signup"
                className={({ isActive }) =>
                  isActive ? "text-blue-500" : "text-gray-700"
                }
              >
                <li className="ml-5 hover:bg-blue-700 hover:scale-125 transition-transform duration-300 hover:rounded-lg py-1 px-3 cursor-pointer text-white">
                  Signup
                </li>
              </NavLink>
            </>
          )}
        </ul>
      </nav>
    </div>
  );
};
