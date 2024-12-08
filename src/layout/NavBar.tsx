import searchIcon from "../assets/home/uil_search.svg";

import { NavLink } from "react-router-dom";
const NavBar = () => {
  const NavLinks = [
    { title: "Home", link: "/" },
    { title: "Pages", link: "/pages" },
    { title: "Products", link: "/products" },
    { title: "Blog", link: "/blog" },
    { title: "Shop", link: "/shop" },
    { title: "Contant", link: "/contant" },
  ];
  return (
    <>
      <div className="flex justify-around items-center w-full h-20 ">
        <div className="flex justify-between items-center space-x-16 ">
          <div className="">
            <p className="font-bold space-x-4 hecto ">Hekto</p>
          </div>
          <div>
            <ul className="flex justify-center items-center space-x-4 font-normal">
              {NavLinks.map((link, index) => (
                <li key={index}>
                  <NavLink to={link.link} className="active:text-[#FB2E86]">{link.title}</NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div>
          <label className="flex justify-between items-center border-4 ">
            <input type="text" placeholder="" className="border-spacing-3" />
            <img src={searchIcon} alt="searchIcon" className="bg-red-400  " />
          </label>
        </div>
      </div>
    </>
  );
};

export default NavBar;
