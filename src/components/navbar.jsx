import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-10">
      <div className="container mx-auto flex justify-center items-center p-4">
        {/* navbar menu button for mobile */}
        <button
          className="md:hidden text-gray-700 text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>

        {/* Desktop Menu */}
        <ul className=" hidden md:flex space-x-6 text-gray-700 gap-8">
          <li>
            <a href="#" className="hover:text-blue-500 hover:font-semibold">
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="hover:text-blue-500 hover:font-semibold"
            >
              About Me
            </a>
          </li>
          <li>
            <a
              href="#gallery"
              className="hover:text-blue-500 hover:font-semibold"
            >
              Gallery
            </a>
          </li>
          <li>
            <a
              href="#favorites"
              className="hover:text-blue-500 hover:font-semibold"
            >
              Favorites
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="hover:text-blue-500 hover:font-semibold"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>

      {/* mobile dropdown menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
        } `}
      >
        <ul className="flex flex-col items-center space-y-4 p-4">
          {["Home", "About Me", "Gallery", "Favorites", "Contact"].map(
            (item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase().replace(/\s+/g, "")}`}
                  className="px-4 py-2 rounded-md transition duration-300 block"
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </a>
              </li>
            )
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
