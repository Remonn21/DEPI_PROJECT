import { Star, ShoppingCart, Heart, Search } from "lucide-react";
import StarRating from "./StarRating";

export default function ProductCardList({
   name,
   discountPrice,
   price,
   rating,
   description,
   images,
   onClick,
   colors,
}) {
   return (
      <div
         onClick={onClick}
         className="flex flex-col overflow-hidden rounded-lg bg-white shadow-md md:flex-row"
      >
         <div className="w-full p-4 md:w-1/3">
            <img
               src={images[0]}
               alt={name}
               className="h-64 w-full rounded-lg object-cover"
            />
         </div>

         <div className="flex w-full flex-col justify-between p-4 md:w-2/3">
            <div>
               <div className="mb-2 flex items-start justify-between">
                  <h2 className="text-body-md font-semibold text-blue-off">
                     {name}
                  </h2>

                  <div className="flex space-x-1">
                     {/* {colors.map((color, index) => (
                        <div
                           key={index}
                           className={`h-4 w-4 rounded-full bg-${color}-500`}
                        ></div>
                     ))} */}
                  </div>
               </div>

               <div className="mb-2 flex items-center">
                  {discountPrice && (
                     <span className="text-body-md font-bold text-blue-off">
                        ${discountPrice.toFixed(2)}
                     </span>
                  )}
                  <span
                     className={`ml-2 text-body-sm text-pink ${discountPrice ? "line-through" : ""}`}
                  >
                     ${price.toFixed(2)}
                  </span>
               </div>

               <div className="mb-2 flex items-center">
                  <StarRating rating={rating} />
               </div>
               <p className="mb-4 text-gray-600">{description}</p>
            </div>

            <div className="relative z-50 flex space-x-4">
               <button className="p-2">
                  <ShoppingCart className="size-6 text-navyBlue-off duration-300 hover:scale-110 hover:fill-navyBlue" />
               </button>
               <button className="p-2">
                  <Heart className="size-6 text-navyBlue-off duration-300 hover:scale-110 hover:fill-red hover:text-red" />
               </button>
               <button className="p-2">
                  <Search className="size-6 text-navyBlue-off duration-300 hover:scale-110 hover:text-navyBlue" />
               </button>
            </div>
         </div>
      </div>
   );
}
