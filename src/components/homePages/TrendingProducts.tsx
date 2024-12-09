import imgOne from "../../assets/Latest Products/image 1166.svg";
import imgTwo from "../../assets/Latest Products/image 1168 (1).svg";
import imgThree from "../../assets/Latest Products/image 15.svg";
import imgFour from "../../assets/Latest Products/image 23.svg";
import imgFive from "../../assets/shopex Offer/image 1161.svg";
import imgSex from "../../assets/shopex Offer/image 1162.svg";


const TrendingProducts = () => {
    const products = [
      { name: "Cantilever chair", price: "$26.00", oldPrice: "$40.00", img: imgOne },
      { name: "Cantilever chair", price: "$26.00", oldPrice: "$40.00", img: imgTwo },
      { name: "Cantilever chair", price: "$26.00", oldPrice: "$40.00", img: imgThree },
      { name: "Cantilever chair", price: "$26.00", oldPrice: "$40.00", img: imgFour },
    ];
  
    return (
      <div className="container w-2/3 mx-auto py-10 space-y-8">
       
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <div key={index} className="card bg-white shadow-md p-4 rounded-lg">
              <img src={product.img} alt={product.name} className="rounded-lg mb-4" />
              <h3 className="text-center text-lg font-bold">{product.name}</h3>
              <div className="text-center">
                <span className="text-xl text-black font-semibold">{product.price}</span>{" "}
                <span className="text-gray-500 line-through">{product.oldPrice}</span>
              </div>
            </div>
          ))}
        </div>
  
      
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-pink-50 p-6  ">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-black">23% off in all products</h2>
              <a href="#" className="text-pink-500 font-semibold">Shop Now</a>
            </div>
            <img src={imgSex} alt="Discount Image" className="w-2/3 ml-auto" />
          </div>
          <div className="bg-blue-50 p-6 flex flex-col justify-between items-stretch">
            <div className="space-y-4">
              <h2 className="text-xl font-bold text-black">23% off in all products</h2>
              <a href="#" className="text-blue-500 font-semibold">View Collection</a>
            </div>
            <img src={imgFive} alt="Discount Image" className="w-100 ml-auto" />
          </div>
        <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
         
          <div className="space-y-4">
            <div className="bg-white p-4 rounded-lg shadow-md flex items-center">
              <img src={imgTwo} alt="Small Product" className="w-16 h-16 rounded-lg" />
              <div className="ml-4">
                <h4 className="text-black font-semibold">Executive Seat chair</h4>
                <span className="text-gray-500">$32.00</span>
              </div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md flex items-center">
              <img src={imgThree} alt="Small Product" className="w-16 h-16 rounded-lg" />
              <div className="ml-4">
                <h4 className="text-black font-semibold">Executive Seat chair</h4>
                <span className="text-gray-500">$32.00</span>
              </div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md flex items-center">
              <img src={imgFour} alt="Small Product" className="w-16 h-16 rounded-lg" />
              <div className="ml-4">
                <h4 className="text-black font-semibold">Executive Seat chair</h4>
                <span className="text-gray-500">$32.00</span>
              </div>
            </div>
          </div>
        </div>
        </div>
  
        
      </div>
    );
  };
  
  export default TrendingProducts;
  