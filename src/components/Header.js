import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "./../assets/webniexLogo.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="h-20">
      <header className="bg-white text-black shadow-md fixed z-10 w-full">
        <div className="container mx-auto flex justify-between items-center px-6 py-4 h-20">
          <div className="text-2xl font-bold">
            <Link
              to="/"
              className="hover:text-yellow-300 transition duration-300 no-underline"
            >
              <img src={logo} className="w-36 md:w-56 lg:w-60" alt="Logo" />
            </Link>
          </div>
          <nav className="hidden md:flex space-x-4">
            <Link
              to="/faq"
              className="bg-[#f8fc27] text-sm font-bold no-underline text-black px-4 py-2 hover:bg-yellow-500 transition duration-300"
            >
              FAQ
            </Link>
            <Link
              to="/support"
              className="bg-[#f8fc27] text-sm font-bold no-underline text-black px-4 py-2 hover:bg-yellow-500 transition duration-300"
            >
              Get a Free Quote
            </Link>
            <Link
              to="/earnwithus"
              className="bg-white border border-black text-sm font-bold no-underline text-black px-4 py-2 hover:bg-yellow-500 hover:text-yellow transition duration-300"
            >
              Send whatsapp
            </Link>
          </nav>
          <div className="md:hidden">
            <button onClick={toggleMenu} className="focus:outline-none">
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            </button>
          </div>
        </div>
        {isOpen && (
          <div className="md:hidden bg-white shadow-lg">
            <nav className="flex flex-col space-y-2 py-2 px-6">
              <Link
                to="/faq"
                className="block bg-[#f8fc27] px-4 py-2 text-sm font-bold no-underline text-black hover:bg-yellow-500 transition duration-300"
              >
                FAQ
              </Link>
              <Link
                to="/support"
                className="block bg-[#f8fc27] text-sm font-bold no-underline text-black px-4 py-2 hover:bg-yellow-500 transition duration-300"
              >
                Get a Free Quote
              </Link>
              <Link
                to="/earnwithus"
                className="block bg-[#f8fc27] text-sm font-bold no-underline text-black px-4 py-2 hover:bg-yellow-500 transition duration-300"
              >
                Send whatsapp
              </Link>
            </nav>
          </div>
        )}
      </header>
    </div>
  );
};

export default Header;
