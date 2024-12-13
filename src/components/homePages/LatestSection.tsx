
import { useState } from "react";
import { NavLink } from "react-router-dom";
import imgOne from "../../assets/Latest Products/image 1166.svg";
import imgTwo from "../../assets/Latest Products/image 1168 (1).svg";
import imgThree from "../../assets/Latest Products/image 15.svg";
import imgFour from "../../assets/Latest Products/image 23.svg";
import imgFive from "../../assets/Latest Products/image 3 (1).svg";
import imgSex from "../../assets/Latest Products/image 32 (1).svg";

const fituerd = [
  {
    chairOne: [imgOne, imgFive, imgFour, imgSex, imgThree, imgTwo],
    chairOneTitle: "New Arrival",
    chairOnePrice: "62$",
  },
  {
    chairOne: [imgSex, imgFive, imgFour, imgOne, imgTwo, imgFive],
    chairOneTitle: "Best Seller",
    chairOnePrice: "77$",
  },
  {
    chairOne: [imgTwo, imgFour, imgOne, imgSex, imgFive, imgTwo],
    chairOneTitle: "Featured",
    chairOnePrice: "99$",
  },
  {
    chairOne: [imgFour, imgFive, imgOne, imgSex, imgTwo, imgThree],
    chairOneTitle: "Special Offer",
    chairOnePrice: "22$",
  },
];

const NavLinks = [
  { title: "New Arrival", link: "newarriva" },
  { title: "Best Seller", link: "bestseller" },
  { title: "Featured", link: "featured" },
  { title: "Special Offer", link: "specialoffer" },
];

const LatestSection = () => {
 
  const [currentCategory, setCurrentCategory] = useState(fituerd[0]);
  const [active,setActive]=useState(NavLinks[0].title)

  const handleCategoryChange = (categoryTitle:string) => {
    const selectedCategory = fituerd.find(
      (category) => category.chairOneTitle === categoryTitle
    );
    if (selectedCategory) {
      setCurrentCategory(selectedCategory);
    }
    setActive(categoryTitle)
  };

  return (
    <div>
      <h2 className="text-center text-4xl font-bold text-offBlue mt-4 pt-4">
        Latest Products
      </h2>
      <div>
      
        <ul className="flex justify-center items-center space-x-6 p-4 font-normal">
          {NavLinks.map((link, index) => (
            <li key={index}>
              <NavLink
                to="#"
                onClick={() => handleCategoryChange(link.title)}
                className={active===link.title ?"text-alex":"text-OffNavyBlue"}
              >
                {link.title}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex items-center justify-center flex-wrap gap-6 py-4">
     
        {currentCategory?.chairOne.map((chair, index) => (
          <div
            className="card   bg-SkyBlue  shadow-xl p-4 w-80 flex flex-col justify-start items-center"
            key={index}
          >
            <figure className="px-4 pt-4w-full h-48 flex justify-center items-center">
              <img
                src={chair}
                alt="Chair"
                className="rounded-xl max-h-full max-w-full"
              />
            </figure>
            <div className="flex flex-col w-full mt-2">
              <p className="card-title text-offBlue text-xs font-semibold">
                {currentCategory.chairOneTitle}
              </p>
              <div className="flex justify-between items-center mt-2">
                <p className="text-offBlue text-sm">{currentCategory.chairOnePrice}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LatestSection;
