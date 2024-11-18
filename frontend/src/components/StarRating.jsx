import PropTypes from "prop-types";

import { Star, StarHalf } from "lucide-react";

const StarRating = ({ rating, maxRating = 5 }) => {
   const getStarType = (i) => {
      if (i <= rating)
         return (
            <Star
               className="border-none text-[#ED9C00]"
               fill="rgb(237 156 0)"
               key={i}
               size={20}
            />
         );
      if (i - 0.5 <= rating)
         return (
            <StarHalf
               size={20}
               className="text-[#ED9C00]"
               fill="rgb(237 156 0)"
               key={i}
            />
         );
      return <Star className="text-gray-700" size={20} key={i} />;
   };

   return (
      <div className="flex">
         {Array.from({ length: maxRating }, (_, i) => getStarType(i + 1))}
      </div>
   );
};

export default StarRating;

StarRating.propTypes = {
   rating: PropTypes.number.isRequired,
   maxRating: PropTypes.number,
};
