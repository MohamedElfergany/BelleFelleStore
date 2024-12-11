import { useState } from "react";
import Input from "../components/homePages/ui/Input";
import Select from "../components/homePages/ui/Select";
import { FaSearch } from "react-icons/fa";
import AccumsanTincidunt from "../assets/Products/AccumsanTincidunt";
import Rating from "../components/homePages/ui/Rating";

const Products = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleSearch = () => {
    console.log("Search term:", searchTerm);
    // Add your actual search logic here (e.g., API call)
  };
  return (
    <>
      <div className="flex justify-between w-full">
        <div className="flex flex-col">
          <p className="text-NavyBlue font-bold">
            Ecommerce Acceories & Fashion item{" "}
          </p>
          <p className="text-xs text-[#8A8FB9]">
            About 9,620 results (0.62 seconds)
          </p>
        </div>
        <div className="flex items-center space-x-4">
          <span className="flex items-center space-x-2 text-OffNavyBlue">
            <p>Per Page:</p>
            <Input
              inputClassName={"w-12 px-2 text-center rounded-none h-6  "}
              maxLength={2}
              type="number"
            />
          </span>
          <span className="flex items-center space-x-2">
            <p className="text-OffNavyBlue">Sort By:</p>
            <Select
              options={["Best Match", "Best Seller"]}
              defaultOption="Best Match"
              className="text-xs rounded-none h-6 "
            />
          </span>

          <span>
            <p className="text-OffNavyBlue">View:</p>
          </span>
          <span>
            <Input
              type="text"
              name="search"
              placeholder="Search..."
              value={searchTerm}
              onChange={handleSearchChange}
              onSearch={handleSearch}
              icon={<FaSearch className="text-[#8A8FB9]" />} // Passing the search icon here
              inputClassName="rounded-none h-6 #8A8FB9"
              maxLength={12}
            />
          </span>
        </div>
      </div>
      <div className="flex">
        <div>
          <AccumsanTincidunt />
        </div>
        <div>
          <div className="flex items-center">
            <p>Accumsan tincidunt</p>
            <div className="w-3 h-3 bg-NavyBlue rounded-full "></div>
            <div className="w-3 h-3 bg-[#DE9034] rounded-full "></div>
            <div className="w-3 h-3 bg-Red rounded-full "></div>
          </div>
          <div className="flex items-center justify-center ">
            <div>$26.00</div>
            <div>$52.00</div>
            <Rating/>
          </div>
          <div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, quae.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
