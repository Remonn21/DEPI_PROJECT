import { Button } from "@/components/ui/button";
import {
   Sheet,
   SheetContent,
   SheetDescription,
   SheetHeader,
   SheetTitle,
} from "@/components/ui/sheet";
import { useDispatch, useSelector } from "react-redux";
import StarRating from "./StarRating";
import { useNavigate } from "react-router-dom";
import { ImCross } from "react-icons/im";
import { toggleWishList as toggleWishListAction } from "@/redux/slice/wishlist.slice";

const Wishlist = ({ isShown, toggleWishList }) => {
   const wishlist = useSelector((state) => state.wishlist);
   const navigate = useNavigate();
   const dispatch = useDispatch();

   const navigatToProductHandler = (prodId) => {
      navigate(`/products/${prodId}`);
      toggleWishList();
   };

   return (
      <Sheet open={isShown} onOpenChange={toggleWishList}>
         <SheetContent className="bg-white">
            <SheetHeader>
               <SheetTitle className="text-center text-h5">Wishlist</SheetTitle>
               <SheetDescription></SheetDescription>
            </SheetHeader>
            <div className="grid gap-4 py-4">
               <p className="border-b-2 pb-2">
                  <span className="font-bold">{wishlist.items.length}</span>{" "}
                  items in you wishlist
               </p>
               <div className="flex flex-col gap-4">
                  {wishlist.items.map((item) => (
                     <div
                        key={item._id}
                        className="group relative flex border-b-2 pb-2"
                     >
                        <div
                           className="relative flex flex-1 cursor-pointer items-center gap-6"
                           onClick={() => navigatToProductHandler(item._id)}
                        >
                           <div className="absolute inset-0 rounded-md hover:bg-navyBlue/20"></div>

                           <img
                              src={item.images[0]}
                              alt={item.name}
                              className="h-24 w-24 rounded-md"
                           />
                           <div className="flex flex-col gap-2">
                              <p className="text-sm text-center font-semibold">
                                 {item.name}
                              </p>
                              <StarRating rating={item.rating} />
                              <div className="flex gap-2">
                                 <p
                                    className={`font-bold ${item.discountPrice ? "text-gray-600 line-through" : ""}`}
                                 >
                                    ${item.price}
                                 </p>
                                 {item.discountPrice && (
                                    <p className="font-bold">${item.price}</p>
                                 )}
                              </div>
                           </div>
                        </div>
                        <ImCross
                           className="size-5 self-center hover:text-red"
                           onClick={() => dispatch(toggleWishListAction(item))}
                        />
                     </div>
                  ))}
               </div>
               <div className="grid grid-cols-4 items-center gap-4"></div>
            </div>
            {/* <SheetFooter>

            </SheetFooter> */}
         </SheetContent>
      </Sheet>
   );
};

export default Wishlist;
