import iconColor from "../../assets/Featured Products/Group 141.svg";
import chairOne from "../../assets/Featured Products/image 1168.svg";
import chairTwo from "../../assets/Featured Products/image 1169.svg";
import chairThree from "../../assets/Featured Products/image 1.svg";
import chairFour from "../../assets/Featured Products/image 3.svg";
import iconPink from "../../assets/Featured Products/Group 169.svg"
const imgChair = [
  { img: chairOne },
  { img: chairTwo },
  { img: chairThree },
  { img: chairFour },
];

const FeaturedSection = () => {
  return (
    <div>
        <h2 className="text-center text-4xl font-bold text-offBlue mt-4 pt-4">Featured Products</h2>
      <div className="flex items-center justify-center flex-wrap gap-6 py-4">
  {imgChair.map((chair, index) => (
    <div className="card bg-base-100 shadow-xl p-4 w-64 h-96 flex flex-col justify-start items-center" key={index}>
      <figure className="px-4 pt-4 bg-SkyBlue w-full h-48 flex justify-center items-center">
        <img src={chair.img} alt="Chair" className="rounded-xl max-h-full max-w-full" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title text-alex">Cantilever chair</h2>
        <img src={iconColor} alt="Icon" />
        <p>Code - Y523201</p>
        <p>$42.00</p>
      </div>
    </div>
  ))}
</div>
<div className="flex justify-center py-4">
<img src={iconPink} alt="iconpink" />
</div>
    </div>
  )
}

export default FeaturedSection