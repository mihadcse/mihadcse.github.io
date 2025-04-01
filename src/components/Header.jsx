

import { useState } from "react";
import { Link } from "react-scroll";
import { FaBarsStaggered, FaXmark } from "react-icons/fa6";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { path: "home", title: "Home" },
    { path: "skills", title: "Skills" },
    { path: "projects", title: "Projects" },
    { path: "footer", title: "Connect" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-cyan-800 bg-opacity-50 backdrop-blur-md p-4 shadow-md">
      <nav className="container mx-auto flex items-center justify-between">
        <a href="/" className="flex items-center gap-3 text-2xl text-white">
          <span className="text-white font-bold">Syed Huzzatullah Mihad</span>
        </a>

        {/* Navbar for large devices */}
        <ul className="hidden md:flex gap-12 text-white">
          {navItems.map(({ path, title }) => (
            <li key={path} className="text-base font-bold hover:text-cyan-500 transition duration-300">
              <Link
                to={path}
                smooth={true}
                duration={500}
                className="cursor-pointer"
              >
                {title}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <div className="block md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? (
              <FaXmark className="w-6 h-6 text-white" />
            ) : (
              <FaBarsStaggered className="w-6 h-6 text-white" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`absolute top-full left-0 w-full bg-black backdrop-blur-md py-5 rounded-sm z-20 transition-all duration-300 ${
          isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <ul className="text-center">
          {navItems.map(({ path, title }) => (
            <li key={path} className="text-base text-white py-2 font-bold hover:text-cyan-400 hover:bg-gray-800 rounded-md transition duration-300">
              <Link
                to={path}
                smooth={true}
                duration={500}
                className="cursor-pointer"
                onClick={() => setIsMenuOpen(false)} // Close menu on click
              >
                {title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Header;
