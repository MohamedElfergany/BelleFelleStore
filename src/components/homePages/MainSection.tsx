
import imgOne from "../../assets/home/image 32.svg";
import imgTwo from "../../assets/home/Shell-Shaped-Armchair-Pink-Velvet-Fabric-One-Seater-Sofa-for-Living-Room 1.svg";
import imgthree from "../../assets/home/Group 130.svg";
import iconOne from "../../assets/home/Rectangle 96.svg";
import iconTwo from "../../assets/home/Rectangle 98.svg";
const MainSection = () => {
  return (
    <div>
          <div className="   bg-SkyBlue py-4 ">
        <div className=" flex justify-evenly  ">
          <div className="flex  justify-center w-1/2 ">
            <div>
              <img src={imgOne} alt="imgOne" />
            </div>
            <div className="flex flex-col justify-center gap-4">
              <p className="text-alex">Best Furniture For Your Castle....</p>
              <p className="font-extrabold text-4xl">
                New Furniture Collection Trends in 2020
              </p>
              <p className="font-normal">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna
                in est adipiscing in phasellus non in justo.
              </p>
              <button className="bg-alex p-2 w-1/3">shop now</button>
            </div>
          </div>
          <div className="flex justify-center items-start p-8">
            <img
              src={imgTwo}
              alt="imgTwo"
              className="max-w-[300px] h-auto object-contain"
            />
            <img src={imgthree} alt="imgThree" className="max-w-[100px] " />
          </div>
        </div>
        <div className="flex justify-center items-center py-2">
          <img src={iconOne} alt="iconOne" />
          <img src={iconTwo} alt="icontwo" />
          <img src={iconTwo} alt="icontwo" />
        </div>
      </div>
    </div>
  )
}

export default MainSection