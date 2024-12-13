import msg from "../assets/home/msg.svg";
import calling from "../assets/home/calling.svg";
import login from "../assets/home/login.svg";
import uil_heart from "../assets/home/uil_heart.svg";
import fluent from "../assets/home/fluent_cart-24-regular.svg";
import { useState } from "react";
import { Link } from "react-router-dom";

const MainHeader = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  return (
    <>
      <div className="bg-[#7E33E0] h-auto flex flex-col sm:flex-row sm:h-11  items-center text-[#F1F1F1]">
        <div className="flex items-center p-2 justify-between h-11 w-full md:hidden">
          <p className="text-lg font-bold">mohamedfergany28@gmail.com</p>
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none relative"
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

          {menuOpen && (
            <div className="absolute top-12 right-4 bg-white text-black shadow-lg rounded-md w-48 z-50">
              <ul className="flex flex-col  items-center p-4 space-y-4">
                <li>
                  <Link to="#" className="hover:text-[#7E33E0]">
                    <select className="select  ">
                      <option selected>EN</option>
                      <option>AR</option>
                    </select>
                  </Link>
                </li>
                <li>
                  <Link to="#" className="hover:text-[#7E33E0]">
                    <select className="select border-none ">
                      <option selected>USD</option>
                      <option>ARE</option>
                    </select>
                  </Link>
                </li>
                <li>
                  <Link to="#" className="hover:text-[#7E33E0]">
                    <div className="flex space-x-1">
                      <p>Login</p>
                      <img
                        src={login}
                        alt="login"
                        className="bg-[#7E33E0] p-1 rounded-lg"
                      />
                    </div>
                  </Link>
                 
                </li>
                <li>
                <Link to="#" className="hover:text-[#7E33E0]">
                    <div className="flex space-x-1">
                      <p>WishList</p>
                      <img
                        src={uil_heart}
                        alt="login"
                        className="bg-[#7E33E0] p-1 rounded-lg"
                      />
                    </div>
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </div>
        <div className="hidden md:flex  justify-around items-center w-full ">
          <div className="flex   justify-center items-center space-x-8">
            <div className="flex justify-center items-center space-x-3">
              <img src={msg} alt="msg" />
              <p>mohamedfergany28@gmail.com</p>
            </div>
            <div className="flex justify-center items-center space-x-3">
              <img src={calling} alt="calling" />
              <p>01220413870</p>
            </div>
          </div>
          <div className="flex  items-center space-y-3 sm:space-y-0 sm:space-x-4 mt-3 sm:mt-0">
            <select className="select  bg-[#7E33E0]">
              <option selected>EN</option>
              <option>AR</option>
            </select>
            <div>
              <select className="select border-none bg-[#7E33E0]">
                <option selected>USD</option>
                <option>ARE</option>
              </select>
            </div>
            <div className="flex space-x-1">
              <p>Login</p>
              <img src={login} alt="login" />
            </div>
            <div className="flex space-x-1">
              <p>WishList</p>
              <img src={uil_heart} alt="login" />
            </div>
            <div>
              <img src={fluent} alt="fluent" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainHeader;
