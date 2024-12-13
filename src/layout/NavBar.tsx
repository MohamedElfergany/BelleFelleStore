
import { useState } from "react";
import searchIcon from "../assets/home/uil_search.svg";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const NavLinks = [
    { title: "Home", link: "/" },
    { title: "Pages", link: "/pages" },
    { title: "Products", link: "/products" },
    { title: "Blog", link: "/blog" },
    { title: "Shop", link: "/shop" },
    { title: "Contact", link: "/contact" },
  ];

  return (
    <>
     
      <div className="hidden md:flex justify-around items-center w-full h-20">
        <div className="flex justify-between items-center space-x-16 ">
          <div>
            <p className="font-bold space-x-4 hecto">Hekto</p>
          </div>
          <div>
            <ul className="flex justify-center items-center space-x-4 font-normal">
              {NavLinks.map((link, index) => (
                <li key={index}>
                  <NavLink
                    to={link.link}
                    className="active:text-[#FB2E86]"
                  >
                    {link.title}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div>
          <label className="flex justify-between items-center border-4">
            <input
              type="text"
              placeholder=""
              className="border-spacing-3"
            />
            <img src={searchIcon} alt="searchIcon" className="bg-red-400" />
          </label>
        </div>
      </div>

      <div className="flex md:hidden justify-between items-center w-full h-20 px-4 bg-white shadow-md">
        <button
          onClick={toggleMenu}
          className="text-purple-600 focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5m-16.5 5.25h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
        <div className="text-lg font-bold text-purple-600">Hekto</div>
        <div>
          <img src={searchIcon} alt="searchIcon" className="w-6 h-6" />
        </div>
      </div>

     
      {menuOpen && (
        <div className="sm:hidden bg-white shadow-lg p-4">
          <ul className="flex flex-col space-y-4">
            {NavLinks.map((link, index) => (
              <li key={index}>
                <NavLink
                  to={link.link}
                  className="text-gray-600 hover:text-purple-600"
                  onClick={() => setMenuOpen(false)} 
                >
                  {link.title}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default NavBar;
