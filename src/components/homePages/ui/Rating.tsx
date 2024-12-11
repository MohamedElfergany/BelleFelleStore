import { useState } from "react";
import { FaStar } from "react-icons/fa";

const Rating = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState<number | null>(null); // Explicitly set type here

  return (
    <div className="flex items-center space-x-1">
      {[...Array(5)].map((_, index) => {
        const starRating = index + 1;
        return (
          <FaStar
            key={starRating}
            className={`cursor-pointer ${
              starRating <= (hover || rating) ? "text-yellow-400" : "text-gray-300"
            }`}
            size={18}
            onClick={() => setRating(starRating)}
            onMouseEnter={() => setHover(starRating)}
            onMouseLeave={() => setHover(null)}
          />
        );
      })}
    </div>
  );
};

export default Rating;
