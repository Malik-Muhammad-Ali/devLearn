import { useState } from "react";
import { Link } from "react-router-dom";
import useAppStore from "../../zustand/store"; // Import Zustand store

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const user = useAppStore((state) => state.user);
  const logout = useAppStore((state) => state.logout);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const handleLogout = () => {
    logout();
    setDropdownOpen(false); // Close dropdown after logout
  };

  return (
    <>
      <header className="pb-6 bg-white lg:pb-0 z-50 relative">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <nav className="flex items-center justify-between h-16 lg:h-20">
            <div className="flex-shrink-0">
              <Link to="/" className="flex" onClick={closeMenu}>
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

            <div
              className={`hidden lg:flex lg:items-center lg:ml-auto lg:space-x-10 ${
                isMenuOpen ? "block" : "hidden"
              }`}
            >
              <Link
                to="/"
                className="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
                onClick={closeMenu}
              >
                Home
              </Link>

              <Link
                to="/about-us"
                className="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
                onClick={closeMenu}
              >
                About Us
              </Link>
            </div>

            {/* Show Profile Picture & Dropdown If User is Logged In */}
            {user ? (
              <div className="relative ml-10">
                <button
                  onClick={toggleDropdown}
                  className="flex items-center focus:outline-none cursor-pointer"
                >
                  <img
                    src={user.profilePic || "/public/images/profile.png"}
                    alt="User Profile"
                    className="w-10 h-10 rounded-full border-2 border-blue-600"
                  />
                </button>

                {/* Dropdown Menu */}
                {isDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white border rounded-lg shadow-lg">
                    <p className="px-4 py-2 text-sm font-semibold text-gray-800">
                      {user.name}
                    </p>
                    <Link
                      to="/edit-profile"
                      className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-100"
                      onClick={() => setDropdownOpen(false)}
                    >
                      Edit Profile
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100 cursor-pointer"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              // Show Sign In Button if User is NOT Logged In
              <Link
                to="/signin"
                className="items-center justify-center hidden px-4 py-3 ml-10 text-base font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md lg:inline-flex hover:bg-blue-700 focus:bg-blue-700"
                role="button"
                onClick={closeMenu}
              >
                Sign In Now
              </Link>
            )}
          </nav>

          {/* Mobile Menu */}
          <nav
            className={`pt-4 pb-6 bg-white border border-gray-200 rounded-md shadow-md lg:hidden ${
              isMenuOpen ? "block" : "hidden"
            }`}
          >
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
          </nav>
        </div>
      </header>
    </>
  );
};

export default Navbar;
