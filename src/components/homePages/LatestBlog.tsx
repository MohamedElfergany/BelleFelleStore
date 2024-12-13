import mainImg from "../../assets/Latest Blog/image 1174 (1).svg";
import imgOne from "../../assets/Latest Blog/Frame 3 (1).svg";
import imgTwo from "../../assets/Latest Blog/Frame 3.svg";
import imgThree from "../../assets/Latest Blog/Frame 4.svg";
import iconOne from "../../assets/Latest Blog/Vector (2).svg";
import iconTwo from "../../assets/Latest Blog/uil_calendar-alt.svg";
const infomationCard = [{ img: imgOne }, { img: imgTwo }, { img: imgThree }];
const LatestBlog = () => {
  return (
    <div>
      <div className=" flex justify-center space-y-8 py-4">
        <img src={mainImg} alt="mainImg" />
      </div>
      <div className="space-y-4">
        <h2 className="text-4xl text-center font-bold py-4">Leatest Blog</h2>
      </div>
      <div className="grid md:grid-cols-3 gap-4 p-4 ">
        {infomationCard.map((card, index) => (
          <div key={index} className="card bg-base-100  shadow-xl p-3">
            <figure>
              <img src={card.img} alt="Shoes" />
            </figure>
            <div className="card-body p-4">
              <div className="flex flex-wrap">
                <div className="flex items-center ">
                  <div className="badge ">
                    <img src={iconOne} alt="" />
                  </div>
                  <p>SaberAli</p>
                </div>

                <div className="flex">
                  <div className="badge ">
                    <img src={iconTwo} alt="" />
                  </div>
                  <p>21 August,2020</p>
                </div>
              </div>
              <div className="flex flex-col justify-between items-center space-y-3 md:text-left md:items-start">
                <p className="text-2xl font-bold text-OffNavyBlue space-y-3">
                  Top esssential Trends in 2021
                </p>
                <p className="">More off this less hello samlande lied much</p>
                <p>over tightly circa horse taped mightly</p>
                <a href="" className="link">
                  Read More
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LatestBlog;
