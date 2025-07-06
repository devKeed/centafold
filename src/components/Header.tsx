import React, { useState } from "react";
import { Link } from "react-scroll";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-background-hero w-full header-container">
      <div style={{ maxWidth: "1400px", margin: "auto" }}>
        <div className="flex justify-between h-28 p-6 ">
          <img src="./images/logo.svg" alt="Logo" className="" />

          <div className="list hidden md:flex space-x-8 items-center">
            <Link
              to="services"
              smooth={true}
              className="link text-black cursor-pointer"
            >
              Services
            </Link>
            <Link
              to="about"
              smooth={true}
              className="link text-black cursor-pointer"
            >
              About Us
            </Link>
            <Link
              to="team"
              smooth={true}
              className="link text-black cursor-pointer"
            >
              Team
            </Link>
            <Link to="contact" smooth={true}>
              <button className="text-white bg-button hover:bg-buttonHover px-4 py-2 rounded-md">
                Contact Us
              </button>
            </Link>
          </div>

          <div className="flex md:hidden items-center">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-gray-900 focus:outline-none"
            >
              <svg
                className={`h-6 w-6 svg-icon ${isOpen ? "open" : "close"}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div
          className={`md:hidden menu-enter ${
            isOpen ? "menu-enter-active" : "menu-exit-active"
          }`}
        >
          <div className="px-6 pb-3 space-y-1 sm:px-3 flex flex-col gap-3 items-center">
            <Link
              to="services"
              smooth={true}
              className="block text-gray-700 link cursor-pointer"
            >
              Services
            </Link>
            <Link
              to="about"
              smooth={true}
              className="block text-gray-700 link cursor-pointer"
            >
              About Us
            </Link>
            <Link
              to="team"
              smooth={true}
              className="block text-gray-700 link cursor-pointer"
            >
              Team
            </Link>
            <Link to="contact" smooth={true}>
              <button className="w-full text-white bg-button hover:bg-lightBlue px-4 py-2 rounded-md">
                Contact Us
              </button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
