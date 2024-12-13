import imgOne from "../../assets/shopex Offer/free-delivery 1.svg";
import imgTwo from "../../assets/shopex Offer/cashback 1.svg";
import imgThree from "../../assets/shopex Offer/premium-quality 1.svg";
import imgFour from "../../assets/shopex Offer/24-hours-support 1.svg";
import imgHome from "../../assets/shopex Offer/Home-Stylish-Club-Sofa-Chair-Pleated-Sofa-Armchair-with-Golden-Legs 1.svg";
const Imgs = [
  { img: imgOne },
  { img: imgTwo },
  { img: imgThree },
  { img: imgFour },
];
const ShopexOffer = () => {
  return (
    <div>
      <h2 className="text-center text-4xl font-bold text-offBlue mt-4 py-4">
        What Shopex Offer!
      </h2>
      <div className="flex items-center justify-center flex-wrap gap-6 py-4">
        {Imgs.map((logo, index) => (
          <div
            className="card bg-base-100 shadow-xl p-4 w-60 h-60 flex flex-col justify-start items-center"
            key={index}
          >
            <figure className="  w-full  flex justify-center items-center">
              <img
                src={logo.img}
                alt="Chair"
                className="rounded-xl max-h-full max-w-full"
              />
            </figure>
            <div className=" items-center text-center">
              <h2 className="font-bold py-4 text-center text-offBlue">
                24/7 Support
              </h2>

              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa
                purus gravida.
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className=" bg-SkyBlue my-4 ">
        <div className="flex flex-col md:flex-row items-center justify-center ">
          <figure className="">
            <img src={imgHome} alt="Movie" className="w-100" />
          </figure>
          <div className="flex flex-col md:items-start items-center justify-between gap-6">
            <h2 className=" text-2xl font-bold w-80">
              Unique Features Of leatest & Trending Poducts
            </h2>
            <ul className="menu-dropdown-toggle pb-2 flex flex-col md:items-start items-center justify-center gap-3 text-center md:text-left">
              <li className="">
                All frames constructed with hardwood solids and laminates
              </li>
              <li>
                Reinforced with double wood dowels, glue, screw - nails corner
                blocks and machine nails
              </li>
              <li>All frames constructed with hardwood solids and laminates</li>
            </ul>

            <div className="flex justify-evenly pb-2 space-x-4">
              <button className="btn bg-alex text-white">Add To Cart</button>
              <span>
                <p>B&B Italian Sofa </p>
                <p>$32.00 </p>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopexOffer;
