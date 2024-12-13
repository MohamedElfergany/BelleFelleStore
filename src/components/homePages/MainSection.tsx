import imgOne from "../../assets/home/image 32.svg";
import imgTwo from "../../assets/home/Shell-Shaped-Armchair-Pink-Velvet-Fabric-One-Seater-Sofa-for-Living-Room 1.svg";
import imgthree from "../../assets/home/Group 130.svg";

const MainSection = () => {
  return (
    <div>
      <div className="   bg-SkyBlue py-4 ">
        <div className="   flex-col md:flex-row md:flex-none flex justify-evenly  ">
          <div className="flex flex-col md:flex-row justify-center items-center gap-6 p-4">
            <div>
              <img
                src={imgOne}
                alt="imgOne"
                className="w-full max-w-sm md:max-w-none"
              />
            </div>
            <div className="flex flex-col items-center justify-center gap-4 text-center md:items-start md:text-left">
  <p className="text-alex text-sm md:text-base text-center mt-4 md:mt-2 leading-relaxed">
    Best Furniture For Your Castle....
  </p>
  <p className="font-extrabold text-2xl md:text-4xl md:text-left text-center">
    New Furniture Collection Trends in 2020
  </p>
  <p className="font-normal text-sm md:text-base text-center md:text-left">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est
    adipiscing in phasellus non in justo.
  </p>
  <button className="bg-alex p-2 w-2/3 md:w-1/3">Shop Now</button>
</div>

          </div>
          <div className="flex justify-center items-start relative p-8">
            <img
              src={imgTwo}
              alt="imgTwo"
              className="max-w-[300px] h-auto object-contain"
            />
            <img
              src={imgthree}
              alt="imgThree"
              className="max-w-[70px] mr-3 absolute right-0 top-0"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainSection;
