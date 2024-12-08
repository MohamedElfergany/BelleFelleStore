import msg from "../assets/home/msg.svg";
import calling from "../assets/home/calling.svg";
import login from "../assets/home/login.svg";
import uil_heart from "../assets/home/uil_heart.svg";
import fluent from "../assets/home/fluent_cart-24-regular.svg";
const MainHeader = () => {
  return (
    <>
      <div className="bg-[#7E33E0] h-11 flex items-center text-[#F1F1F1]">
        <div className="flex justify-around items-center w-full ">
          <div className="flex justify-center items-center space-x-8">
            <div className="flex justify-center items-center space-x-3">
              <img src={msg} alt="msg" />
              <p>mohamedfergany28@gmail.com</p>
            </div>
            <div className="flex justify-center items-center space-x-3">
              <img src={calling} alt="calling" />
              <p>01220413870</p>
            </div>
          </div>
          <div className="flex space-x-4 items-center ">
            <select className="select  bg-[#7E33E0]">
              <option  selected>
                EN
              </option>
              <option>AR</option>
              
            </select>
            <div>USD</div>
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
