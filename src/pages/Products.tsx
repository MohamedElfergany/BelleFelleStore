import Select from "../components/homePages/ui/Select";

const Products = () => {
  return (
    <>
      <div className="flex justify-between w-full">
        <div className="flex flex-col">
          <p>Ecommerce Acceories & Fashion item </p>
          <p>About 9,620 results (0.62 seconds)</p>
        </div>
        <div className="flex items-center space-x-4">
          <span className="flex items-center">
            <p>Per Page</p>
            <input
              type="number"
              maxLength={2}
              onInput={(e) => {
                if (e.target.value.length > 2) {
                  e.target.value = e.target.value.slice(0, 2);
                }
              }}
              placeholder="1"
              className="input input-bordered focus:outline-none focus:border  rounded-none w-12 h-8 px-0 text-center "
            />
          </span>
          <span className="flex items-center">
            <p>Sort By:</p>
            <Select 
            options={["Best Match", "Best Seller"]}
            defaultOption="Best Match"
            className="text-sm rounded-none h-8"
             />
          </span>

          <span>
            <p>View:</p>
          </span>
          <span>
            <label className="input input-bordered flex items-center gap-2">
              <input type="text" className="grow" placeholder="Search" />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70"
              >
                <path
                  fillRule="evenodd"
                  d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                  clipRule="evenodd"
                />
              </svg>
            </label>
          </span>
        </div>
      </div>
    </>
  );
};

export default Products;
