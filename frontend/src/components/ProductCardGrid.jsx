import { ShoppingCart, Heart, Search } from "lucide-react";
import StarRating from "./StarRating";

export default function ProductCardGrid({
   _id,
   name,
   discountPrice,
   price,
   images,
   colors,
   onClick,
   rating,
   onWishlist,
   isWishListed,
   onAddToCart,
}) {
   return (
      <div className="group overflow-hidden rounded-lg bg-white text-center shadow-md">
         <div className="relative bg-[#F6F7FB]">
            <div className="overflow-hidden">
               <img
                  onClick={onClick}
                  src={images[0]}
                  alt={name}
                  className="h-64 w-full cursor-pointer object-cover transition duration-300 hover:scale-110"
               />
            </div>

            <div className="absolute bottom-2 left-2 hidden space-y-2 duration-300 group-hover:block">
               <button className="group/icon block rounded-full bg-white p-2 text-blue shadow duration-300 hover:bg-black">
                  <ShoppingCart
                     onClick={onAddToCart}
                     className="size-5 text-gray-600 group-hover/icon:text-white"
                  />
               </button>
               <button className="group/icon block rounded-full bg-white p-2 text-blue shadow duration-300 hover:bg-black">
                  <Search className="size-5 text-gray-600 group-hover/icon:text-white" />
               </button>
               <button className="group/icon block rounded-full bg-white p-2 text-blue shadow duration-300 hover:bg-black">
                  <Heart
                     onClick={onWishlist}
                     className={`size-5 text-gray-600 group-hover/icon:text-white ${isWishListed(_id) ? "text-red" : ""}`}
                     fill={isWishListed(_id) ? "#FF0000" : "#fff"}
                  />
               </button>
            </div>
         </div>

         <div className="flex flex-col items-center p-4 text-blue-off">
            <h2 className="mb-2 text-body-md font-semibold">{name}</h2>
            <div className="mb-1">
               <StarRating rating={rating} />
            </div>
            <div className="flex items-center justify-center">
               {discountPrice && (
                  <span className="font-bold">${discountPrice.toFixed(2)}</span>
               )}
               <span
                  className={`ml-2 text-pink {${discountPrice ? "line-through" : ""}`}
               >
                  ${price.toFixed(2)}
               </span>
            </div>

            <div className="flex space-x-1">
               {/* {colors.map((color, index) => (
                  <div
                     key={index}
                     className={`h-4 w-4 rounded-full bg-${color}-500`}
                  ></div>
               ))} */}
            </div>
         </div>
      </div>
   );
}
