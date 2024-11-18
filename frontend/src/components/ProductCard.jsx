import PropTypes from "prop-types";

import { useNavigate } from "react-router-dom";
import { GoDotFill } from "react-icons/go";
import { useDispatch, useSelector } from "react-redux";
import { toggleWishList } from "@/redux/slice/wishlist.slice";
import { FaHeart } from "react-icons/fa";
import StarRating from "./StarRating";

const ProductCard = ({ product }) => {
   const dispatch = useDispatch();
   const navigate = useNavigate();
   const wishlist = useSelector((state) => state.wishlist);

   const toggleWishListHandler = () => {
      dispatch(toggleWishList(product));
   };

   return (
      <div className="overflow-hidden rounded-lg bg-white pb-4">
         <div className="relative cursor-pointer">
            <div
               onClick={toggleWishListHandler}
               className="group absolute right-4 top-4 z-10 rounded-full bg-white p-2 shadow-lg transition duration-500 hover:bg-black"
            >
               <FaHeart
                  className={`${wishlist.items.find((prd) => prd._id === product._id) ? "text-red" : ""} size-5 group-hover:text-red`}
               />
            </div>
            <div
               className="group relative overflow-hidden"
               style={{ paddingBottom: "100%" }}
               onClick={() => navigate(`/products/${product._id}`)}
            >
               <img
                  src={product.images[0]}
                  className="absolute block w-full object-contain transition duration-500 group-hover:opacity-0"
                  alt=""
                  loading="lazy"
               />
               <img
                  src={product.images[1]}
                  className="duration-400 absolute block scale-90 opacity-0 transition group-hover:scale-100 group-hover:opacity-100"
                  alt=""
                  loading="lazy"
               />
            </div>
         </div>
         <div className="mt-2 flex flex-col gap-2 px-4">
            <h4 className="line-clamp-2 h-9 text-small-md font-bold leading-tight">
               {product.name}
            </h4>

            <div className="flex gap-2">
               <p
                  className={`font-bold ${product.discountPrice ? "text-gray-600 line-through" : ""}`}
               >
                  ${product.price}
               </p>
               {product.discountPrice && (
                  <p className="font-bold">${product.price}</p>
               )}
            </div>

            <div className="flex flex-col gap-1 sm:flex-row sm:items-center">
               <StarRating rating={product.rating} />
               <span className="text-small-sm text-gray-500">
                  {product?.reviews.length || 0} reviews
               </span>
            </div>
            <div className="text-green-800 flex items-center">
               {product.quantity > 10 ? (
                  <>
                     <GoDotFill className="text-green" />
                     <span className="text-small-sm font-bold text-green">
                        In stock
                     </span>
                  </>
               ) : product.quantity > 0 ? (
                  <>
                     <GoDotFill className="text-orange-500" />
                     <span className="text-small-sm font-bold text-orange-500">
                        {product.quantity} left on stock
                     </span>
                  </>
               ) : (
                  <>
                     <GoDotFill className="text-red-600" />
                     <span className="text-small-sm font-bold text-red-600">
                        out of stock
                     </span>
                  </>
               )}
            </div>
         </div>
      </div>
   );
};

ProductCard.propTypes = {
   product: PropTypes.shape({
      _id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      images: PropTypes.array.isRequired,
      price: PropTypes.number.isRequired,
      discountPrice: PropTypes.number,
      rating: PropTypes.number.isRequired,
      quantity: PropTypes.number.isRequired,
      reviews: PropTypes.array.isRequired,
   }).isRequired,
};

export default ProductCard;
