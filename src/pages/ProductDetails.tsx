import { NavLink } from "react-router-dom";
import imgOne from "../assets/ProductDetails/Rectangle 134.svg";
import imgTwo from "../assets/ProductDetails/Rectangle 136.svg";
import imgThree from "../assets/ProductDetails/Rectangle 137.svg";
import imgFour from "../assets/ProductDetails/Rectangle 138.svg";
import imgfive from "../assets/ProductDetails/Group 236.svg";
import icons from "../assets/ProductDetails/akar-icons_arrow-up.svg";
import cardOne from "../assets/ProductDetails/Rectangle 128.svg";
import cardTwo from "../assets/ProductDetails/Rectangle 130.svg";
import cardThree from "../assets/ProductDetails/Rectangle 131.svg";
import cardFour from "../assets/ProductDetails/Group 233.svg";

import imgSeven from "../assets/ProductDetails/Group 205.svg";
import { useState } from "react";
const arrLinks = [
  { title: "Description", titleParag: "Description" },
  { title: "Additional Info", titleParag: "Additional Info" },
  { title: "Reviews", titleParag: "Reviews" },
  { title: "Video", titleParag: "Video" },
];
const Cards = [
  { img: cardOne, titleCard: "Mens Fashion Wear" },
  { img: cardTwo, titleCard: "Women’s Fashion" },
  { img: cardThree, titleCard: "Wolx Dummy Fashion" },
  { img: cardFour, titleCard: "Top Wall Digital Clock" },
];
const ProductDetails = () => {
  const [mainLink, setMainLink] = useState(arrLinks[0].title);
  const ChangeTitle = (titleParag: string) => {
    const Selected = arrLinks.find(
      (titleLink) => titleLink.title == titleParag
    );
    if (Selected) {
      setMainLink(titleParag);
    }
  };
  return (
    <div className=" flex flex-col justify-between space-y-16 my-4">
      <div className="breadcrumbs mb-4 h-32 bg-SkyBlue text-2xl flex flex-col items-center font-bold justify-center ">
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>

          <li className="text-alex">Product Details</li>
        </ul>
      </div>
      {/* =========================================================================== */}
      <div className="flex justify-center items-center">
        <div className="  flex w-2/3  justify-between bg-base-100 shadow-xl">
          <div className="flex p-3 space-y-2 flex-col justify-center items-start">
            <figure>
              <img src={imgOne} alt="Album" />
            </figure>
            <figure>
              <img src={imgTwo} alt="Album" />
            </figure>
            <figure>
              <img src={imgThree} alt="Album" />
            </figure>
          </div>
          <div className="p-3 ">
            <figure className="">
              <img src={imgFour} alt="Album" className="h-full" />
            </figure>
          </div>
          <div className="p-3 flex flex-col justify-around space-y-">
            <h2>Playwood arm chair</h2>
            <div className="flex items-center space-x-4">
              <figure>
                <img src={imgfive} alt="Album" />
              </figure>
              <p>(22)</p>
            </div>
            <div className="flex items-center space-x-2">
              <p>$32.00</p>
              <p className="text-alex">$30.00</p>
            </div>
            <p className=" text-SkyGray">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit Mauris
              tellus porttitor purus, et volutpat sit.
            </p>
            <div className="flex text-OffNavyBlue items-center">
              <p>Add To cart</p>
            </div>
            <p>Categories:</p>
            <p>Tags</p>
            <div className="flex items-center space-x-2">
              <p>Share</p>
              <figure>
                <img src={imgSeven} alt="Album" />
              </figure>
            </div>
          </div>
        </div>
      </div>
      {/* ============================================================================== */}
      <div className=" flex flex-col my-4 bg-SkyBlue items-center justify-around space-y-5 p-4">
        <div className="flex  w-2/3  items-center space-x-7">
          {arrLinks.map((link, index) => (
            <ul key={index}>
              <li>
                <NavLink
                  to=""
                  className="text-OffNavyBlue text-2xl font-bold"
                  onClick={() => ChangeTitle(link.title)}
                >
                  {link.title}
                </NavLink>
              </li>
            </ul>
          ))}
        </div>
        <div className="flex flex-col justify-between space-y-6 w-2/3 ">
          <h2 className="text-OffNavyBlue text-2xl font-bold">{mainLink}:</h2>
          <p className="">
            Aliquam dis vulputate vulputate integer sagittis. Faucibus dolor
            ornare faucibus vel sed et eleifend habitasse amet. Montes, mauris
            varius ac est bibendum. Scelerisque a, risus ac ante. Velit
            consectetur neque, elit, aliquet. Non varius proin sed urna, egestas
            consequat laoreet diam tincidunt. Magna eget faucibus cras justo, .
          </p>
        </div>
        <div className="flex flex-col justify-between space-y-6 w-2/3 ">
          <h2 className="text-OffNavyBlue text-2xl font-bold">
            {" "}
            main..{mainLink}
          </h2>
          <div className="flex space-x-1">
            <img src={icons} alt="" />
            <p>
              Aliquam dis vulputate vulputate integer sagittis. Faucibus dolor
              ornare faucibus vel sed et eleifend
            </p>
          </div>
          <div className="flex space-x-1">
            <img src={icons} alt="" />
            <p>
              Aliquam dis vulputate vulputate integer sagittis. Faucibus dolor
              ornare faucibus vel sed et eleifend
            </p>
          </div>
          <div className="flex space-x-1">
            <img src={icons} alt="" />
            <p>
              Aliquam dis vulputate vulputate integer sagittis. Faucibus dolor
              ornare faucibus vel sed et eleifend
            </p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 py-4">
        {Cards.map((card, index) => (
          <div
            key={index}
            className="card  shadow-xl  "
          >
            <figure className="">
              <img src={card.img} alt="Card Image"  />
            </figure>
            <div className="flex justify-between items-center text-center p-2">
              <h2 className="card-title text-lg font-bold">{card.titleCard}</h2>
              <img src={imgfive} alt="Icon"  />
            </div>
              <div className="card-actions mt-4 p-4">
                <p className="text-lg font-semibold">$67.00</p>
              </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductDetails;
