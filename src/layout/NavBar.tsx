import searchIcon from "../assets/home/uil_search.svg";

const NavBar = () => {
  return (
    <>
      <div className="flex justify-around items-center w-full h-20 ">
        <div className="flex justify-between items-center space-x-16 ">
          <div className="">
            <p className="font-bold space-x-4 hecto ">Hekto</p>
          </div>
          <div>
            <ul className="flex justify-center items-center space-x-4 font-normal">
              <li>
                <a href="" className="active">Home</a>
              </li>
              <li>
                <a href="">Pages</a>
              </li>
              <li>
                <a href="">Prodects</a>
              </li>
              <li>
                <a href="">Blog</a>
              </li>
              <li>
                <a href="">Shop</a>
              </li>
              <li>
                <a href="">Contant</a>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <label className="flex justify-between items-center border-4 ">
            <input
              type="text"
              placeholder=""
              className="border-spacing-3"
            />
            <img src={searchIcon} alt="searchIcon" className="bg-red-400  "/>
          </label>
        </div>
      </div>
    </>
  );
};

export default NavBar;
