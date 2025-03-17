import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import useAppStore from "../../zustand/store"; // Import Zustand store
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const user = useAppStore((state) => state.user);
  const logout = useAppStore((state) => state.logout);
  const location = useLocation();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
    setDropdownOpen(false);
  };

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md py-2" : "bg-transparent py-6"
      }`}
    >
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center" onClick={closeMenu}>
              <motion.div
                className="relative flex items-center" // Added flex row styling here
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <div className="w-10 h-10 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg flex items-center justify-center mr-3">
                  <span className="text-white font-bold text-xl">D</span>
                </div>
                <h1 className="font-black text-2xl md:text-3xl text-indigo-600">
                  DevLearn
                </h1>
              </motion.div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:space-x-8">
            <NavLink to="/" isActive={isActive("/")} onClick={closeMenu}>
              Home
            </NavLink>
            <NavLink
              to="/about-us"
              isActive={isActive("/about-us")}
              onClick={closeMenu}
            >
              About Us
            </NavLink>
          </div>

          {/* User Profile or Sign In */}
          <div className="flex items-center ml-4 space-x-4">
            {user ? (
              <div className="relative">
                <motion.button
                  onClick={toggleDropdown}
                  className="flex items-center focus:outline-none cursor-pointer group"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="relative">
                    <div
                      className={`absolute inset-0 rounded-full ${
                        isDropdownOpen
                          ? "bg-indigo-100"
                          : "bg-transparent group-hover:bg-indigo-50"
                      } transition-all duration-300`}
                    ></div>
                    <img
                      src={user.profilePic || "/public/images/profile.png"}
                      alt="User Profile"
                      className="relative w-10 h-10 rounded-full border-2 border-indigo-500 object-cover transition-all duration-300"
                    />
                  </div>
                  <div className="ml-3 hidden md:block">
                    <p className="text-sm font-medium text-gray-800">
                      {user.name}
                    </p>
                  </div>
                </motion.button>

                {/* Dropdown Menu */}
                <AnimatePresence>
                  {isDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{
                        duration: 0.2,
                        type: "spring",
                        stiffness: 500,
                        damping: 30,
                      }}
                      className="absolute right-0 mt-2 w-64 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden z-50"
                    >
                      <div className="p-4 border-b border-gray-100">
                        <p className="text-sm font-semibold text-gray-800">
                          {user.name}
                        </p>
                        <p className="text-xs text-gray-500">{user.email}</p>
                      </div>
                      <div className="py-1">
                        <MenuItem
                          to="/dashboard"
                          icon={
                            <svg
                              className="w-4 h-4"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                              />
                            </svg>
                          }
                          onClick={() => setDropdownOpen(false)}
                        >
                          Dashboard
                        </MenuItem>
                        <MenuItem
                          to="/edit-profile"
                          icon={
                            <svg
                              className="w-4 h-4"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                              />
                            </svg>
                          }
                          onClick={() => setDropdownOpen(false)}
                        >
                          Edit Profile
                        </MenuItem>
                        <MenuItem
                          to="/settings"
                          icon={
                            <svg
                              className="w-4 h-4"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                              />
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                              />
                            </svg>
                          }
                          onClick={() => setDropdownOpen(false)}
                        >
                          Settings
                        </MenuItem>
                      </div>
                      <div className="border-t border-gray-100">
                        <button
                          onClick={handleLogout}
                          className="flex items-center w-full px-4 py-3 text-sm text-red-600 hover:bg-red-50 transition-colors"
                        >
                          <svg
                            className="w-4 h-4 mr-2"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                            />
                          </svg>
                          Logout
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/signin"
                  className="relative inline-flex items-center px-5 py-2.5 text-sm font-medium text-white transition-all duration-300 bg-indigo-600 rounded-full shadow-md hover:bg-indigo-700"
                  onClick={closeMenu}
                >
                  <span className="relative flex items-center">
                    <svg
                      className="w-4 h-4 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                      />
                    </svg>
                    Sign In
                  </span>
                </Link>
              </motion.div>
            )}

            {/* Mobile Menu Button */}
            <motion.button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center p-2 text-indigo-600 transition-all duration-200 rounded-md lg:hidden hover:bg-indigo-50 focus:outline-none"
              aria-expanded={isMenuOpen}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <span className="sr-only">
                {isMenuOpen ? "Close menu" : "Open menu"}
              </span>
              <div className="relative w-6 h-6">
                <AnimatePresence mode="wait">
                  {isMenuOpen ? (
                    <motion.svg
                      key="close"
                      className="w-6 h-6 absolute"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      initial={{ opacity: 0, rotate: -90 }}
                      animate={{ opacity: 1, rotate: 0 }}
                      exit={{ opacity: 0, rotate: 90 }}
                      transition={{ duration: 0.3 }}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </motion.svg>
                  ) : (
                    <motion.svg
                      key="menu"
                      className="w-6 h-6 absolute"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      initial={{ opacity: 0, rotate: 90 }}
                      animate={{ opacity: 1, rotate: 0 }}
                      exit={{ opacity: 0, rotate: -90 }}
                      transition={{ duration: 0.3 }}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </motion.svg>
                  )}
                </AnimatePresence>
              </div>
            </motion.button>
          </div>
        </nav>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0, y: -20 }}
              animate={{ opacity: 1, height: "auto", y: 0 }}
              exit={{ opacity: 0, height: 0, y: -20 }}
              transition={{
                duration: 0.3,
                type: "spring",
                stiffness: 500,
                damping: 30,
              }}
              className="lg:hidden mt-4 overflow-hidden"
            >
              <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
                <div className="py-2">
                  <MobileNavLink
                    to="/"
                    isActive={isActive("/")}
                    onClick={closeMenu}
                  >
                    Home
                  </MobileNavLink>
                  <MobileNavLink
                    to="/about-us"
                    isActive={isActive("/about-us")}
                    onClick={closeMenu}
                  >
                    About Us
                  </MobileNavLink>
                </div>
                {user && (
                  <div className="border-t border-gray-100 py-2">
                    <MobileNavLink
                      to="/dashboard"
                      isActive={isActive("/dashboard")}
                      onClick={closeMenu}
                    >
                      Dashboard
                    </MobileNavLink>
                    <MobileNavLink
                      to="/edit-profile"
                      isActive={isActive("/edit-profile")}
                      onClick={closeMenu}
                    >
                      Edit Profile
                    </MobileNavLink>
                    <MobileNavLink
                      to="/settings"
                      isActive={isActive("/settings")}
                      onClick={closeMenu}
                    >
                      Settings
                    </MobileNavLink>
                    <button
                      onClick={() => {
                        handleLogout();
                        closeMenu();
                      }}
                      className="flex items-center w-full px-4 py-3 text-sm text-red-600 hover:bg-red-50 transition-colors"
                    >
                      <svg
                        className="w-4 h-4 mr-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                        />
                      </svg>
                      Logout
                    </button>
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

// Desktop Navigation Link Component
const NavLink = ({
  to,
  children,
  isActive,
  onClick,
}: {
  to: string;
  children: React.ReactNode;
  isActive: boolean;
  onClick: () => void;
}) => {
  return (
    <Link
      to={to}
      className={`relative px-3 py-2 text-sm font-medium transition-all duration-200 rounded-lg ${
        isActive ? "text-indigo-600" : "text-gray-700 hover:text-indigo-600"
      }`}
      onClick={onClick}
    >
      <span className="relative z-10">{children}</span>

      {isActive && (
        <motion.div
          layoutId="activeIndicator"
          className="absolute bottom-0 left-0 right-0 h-0.5 bg-indigo-600 rounded-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        />
      )}
    </Link>
  );
};

// Mobile Navigation Link Component
const MobileNavLink = ({
  to,
  children,
  isActive,
  onClick,
}: {
  to: string;
  children: React.ReactNode;
  isActive: boolean;
  onClick: () => void;
}) => {
  return (
    <Link
      to={to}
      className={`flex items-center px-4 py-3 text-sm font-medium transition-all duration-200 ${
        isActive
          ? "text-indigo-600 bg-indigo-50"
          : "text-gray-700 hover:bg-gray-50 hover:text-indigo-600"
      }`}
      onClick={onClick}
    >
      {children}
      {isActive && (
        <motion.div
          layoutId="mobileActiveIndicator"
          className="ml-auto w-1.5 h-1.5 rounded-full bg-indigo-600"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        />
      )}
    </Link>
  );
};

// Dropdown Menu Item Component
const MenuItem = ({
  to,
  children,
  icon,
  onClick,
}: {
  to: string;
  children: React.ReactNode;
  icon: React.ReactNode;
  onClick: () => void;
}) => {
  return (
    <Link
      to={to}
      className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 transition-colors"
      onClick={onClick}
    >
      <span className="mr-2 text-gray-500">{icon}</span>
      {children}
    </Link>
  );
};

export default Navbar;
