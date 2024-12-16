
import { useState } from "react";
import chairOne from "../../assets/Featured Products/image 1168.svg";
import chairTwo from "../../assets/Featured Products/image 1169.svg";
import chairThree from "../../assets/Featured Products/image 3.svg";
import chairFour from "../../assets/Featured Products/image 1.svg";
import { NavLink } from "react-router";

const imgChair = [
  { img: chairOne, name: "Cantilever chair", code: "Y523201", price: "$42.00" },
  { img: chairTwo, name: "Cantilever chair", code: "Y523202", price: "$55.00" },
  { img: chairThree, name: "Cantilever chair", code: "Y523203", price: "$65.00" },
  { img: chairFour, name: "Cantilever chair", code: "Y523204", price: "$75.00" },
  { img: chairOne, name: "Cantilever chair", code: "Y523201", price: "$42.00" },
  { img: chairTwo, name: "Cantilever chair", code: "Y523202", price: "$55.00" },
  { img: chairThree, name: "Cantilever chair", code: "Y523203", price: "$65.00" },
  { img: chairFour, name: "Cantilever chair", code: "Y523204", price: "$75.00" },
  { img: chairOne, name: "Cantilever chair", code: "Y523201", price: "$42.00" },
  { img: chairTwo, name: "Cantilever chair", code: "Y523202", price: "$55.00" },
  { img: chairThree, name: "Cantilever chair", code: "Y523203", price: "$65.00" },
  { img: chairFour, name: "Cantilever chair", code: "Y523204", price: "$75.00" },
];

const FeaturedSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
 

  const itemsPerPage = 4; // عدد الصور المعروضة في كل مرة
  const totalPages = Math.ceil(imgChair.length / itemsPerPage);
//عدد الصور المعروضة على عدد عناصر المصفوفة =عدد الايقونات
  
const handleIconClick = (index: number) => {
    setCurrentIndex(index); // تغيير الصفحة بناءً على الأيقونة المضغوطة
  };

  return (
    <div>
      <h2 className="text-center text-4xl font-bold text-offBlue mt-4 p-4">
        Featured Products....
      </h2>
      <div className="flex overflow-hidden py-4">
        
        <div
          className="flex transition-transform justify-between  space-x-16 max-w-full  items-center duration-500 " 
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
            width: `${35 * totalPages}%`,
          }}
         
        >
          {imgChair.map((chair, index) => (
            <div
            className="card shadow-xl bg-SkyBlue hover:scale-105 transition-all duration-300 
            flex-shrink-0 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 
            flex flex-col justify-start items-center group relative p-4"
              key={index}
            >
              <figure className="px-4 pt-4 w-full h-48  flex flex-col justify-center items-center relative">
                <img
                  src={chair.img}
                  alt="Chair"
                  className="rounded-xl  l max-w-full"
                />
              </figure>
              <div className="card-body w-full hover:bg-Blue   transition-all duration-500 items-center  bg-white text-center relative">
            <NavLink to="/productdetails">
            <button className="  bg-green-700 p-2 rounded-md text-white opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300">
                  View Details
                </button>
            </NavLink>
                <h2 className="card-title text-alex">{chair.name}</h2>
                <p>{chair.code}</p>
                <p>{chair.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

     
      <div className="flex w-full justify-center gap-2 py-2">
        {Array.from({ length: totalPages }).map((_, index) => (
          <button
            key={index}
            onClick={() => handleIconClick(index)}
            className={`w-4 h-4 rounded-full ${
              currentIndex === index ? "bg-pink-500" : "bg-gray-300"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default FeaturedSection;
