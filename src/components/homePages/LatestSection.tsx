import { NavLink } from "react-router-dom";
import imgOne from "../../assets/Latest Products/image 1166.svg";
import imgTwo from "../../assets/Latest Products/image 1168 (1).svg";
import imgThree from "../../assets/Latest Products/image 15.svg";
import imgFour from "../../assets/Latest Products/image 23.svg";
import imgFive from "../../assets/Latest Products/image 3 (1).svg";
import imgSex from "../../assets/Latest Products/image 32 (1).svg";
const Imgs = [
  { chair: imgOne },
  { chair: imgTwo },
  { chair: imgThree },
  { chair: imgFour },
  { chair: imgFive },
  { chair: imgSex },
];
const NavLinks=[
    {title:"New Arrival",link:"/newarriva"},
    {title:"Best Seller",link:"/bestseller"},
    {title:"Featured",link:"/featured"},
    {title:"Special Offer",link:"/specialoffer"},
]
const LatestSection = () => {
  return (
    <div>
      <h2 className="text-center text-4xl font-bold text-offBlue mt-4 pt-4">
        Latest Products
      </h2>
      <div>
            <ul className="flex justify-center items-center space-x-6 p-4 font-normal">
              {NavLinks.map((link, index) => (
                <li key={index}>
                  <NavLink to={link.link} className="active:text-[#FB2E86]">{link.title}</NavLink>
                </li>
              ))}
            </ul>
          </div>
      <div className="flex items-center  justify-center flex-wrap gap-6 py-4">
        {Imgs.map((chair, index) => (
          <div
            className="card bg-base-100 shadow-xl p-4 w-80 flex flex-col justify-start items-center"
            key={index}
          >
            <figure className="px-4 pt-4 bg-SkyBlue w-full h-48 flex justify-center items-center">
              <img
                src={chair.chair}
                alt="Chair"
                className="rounded-xl max-h-full max-w-full"
              />
            </figure>
            <div className="   flex  w-full justify-between items-center ">
              <p className="card-title text-offBlue text-xs">
                Comfort Handy Craft
              </p>

              <div className="flex ">
                <p className="text-offBlue">$42.00</p>
                <p className="text-alex">$65.00</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LatestSection;
