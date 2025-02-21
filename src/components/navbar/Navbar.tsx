import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  // Function to close the menu
  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <header className="pb-6 bg-white lg:pb-0">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <nav className="flex items-center justify-between h-16 lg:h-20">
            <div className="flex-shrink-0">
              <Link to="/" className="flex" onClick={closeMenu}>
                {/* Uncomment and replace with your logo */}
                {/* <img
                  className="w-auto h-8 lg:h-10"
                  src="https://cdn.rareblocks.xyz/collection/celebration/images/logo.svg"
                  alt=""
                /> */}
                <h1 className="font-bold text-3xl">DevLearn</h1>
              </Link>
            </div>

            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center p-2 text-black transition-all duration-200 rounded-md lg:hidden focus:bg-gray-100 hover:bg-gray-100"
            >
              {isMenuOpen ? (
                <svg
                  className="w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 8h16M4 16h16"
                  />
                </svg>
              )}
            </button>

            <div className={`hidden lg:flex lg:items-center lg:ml-auto lg:space-x-10 ${isMenuOpen ? "block" : "hidden"}`}>
              <Link to="/" className="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600" onClick={closeMenu}>
                Home
              </Link>

              <Link to="/about-us" className="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600" onClick={closeMenu}>
                About Us
              </Link>
            </div>

            <Link
              to="/signin"
              className="items-center justify-center hidden px-4 py-3 ml-10 text-base font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md lg:inline-flex hover:bg-blue-700 focus:bg-blue-700"
              role="button"
              onClick={closeMenu}
            >
              Sign In Now
            </Link>
          </nav>

          <nav className={`pt-4 pb-6 bg-white border border-gray-200 rounded-md shadow-md lg:hidden ${isMenuOpen ? "block" : "hidden"}`}>
            <div className="flow-root">
              <div className="flex flex-col px-6 -my-2 space-y-1">
                <Link
                  to="/"
                  className="inline-flex py-2 text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
                  onClick={closeMenu}
                >
                  Home
                </Link>

                <Link
                  to="/about-us"
                  className="inline-flex py-2 text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
                  onClick={closeMenu}
                >
                  About Us
                </Link>
              </div>
            </div>

            <div className="px-6 mt-6">
              <Link
                to="/signin"
                className="inline-flex justify-center px-4 py-3 text-base font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md tems-center hover:bg-blue-700 focus:bg-blue-700"
                role="button"
                onClick={closeMenu}
              >
                Sign In Now
              </Link>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Navbar;
