import { Heart, Menu, Search, ShoppingCart, User } from "lucide-react";
import { Badge } from "../ui/badge";
import { useMemo, useState } from "react";
import Sidebar from "./Sidebar";
import { AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Heading = ({ toggleWishList }) => {
   const [toggleSideBar, setToggleSideBar] = useState(false);
   const cart = useSelector((state) => state.cart);
   const wishlist = useSelector((state) => state.wishlist);

   // will check if useMemo not needed (not needed until now)
   const totalCartItems = useMemo(() => {
      return cart.items.reduce((acc, curr) => {
         return acc + curr.quantity;
      }, 0);
   }, [cart]);

   return (
      <>
         <AnimatePresence>
            {toggleSideBar && (
               <Sidebar onClose={() => setToggleSideBar(false)} />
            )}
         </AnimatePresence>
         <div className="">
            <div className="mx-auto flex w-full items-center justify-between lg:max-w-[95%] lg:px-0 xl:max-w-[90%]">
               <div className="md:hidden">
                  <Menu
                     className="text-xl"
                     onClick={() => setToggleSideBar(true)}
                  />
               </div>
               <Link
                  to="/"
                  className="pl-1 text-h4 font-extrabold tracking-wide"
               >
                  Depi<span className="text-navyBlue-off">Tech</span>
               </Link>
               {/* Search */}
               <div className="hidden items-center md:flex">
                  <input
                     type="text"
                     placeholder="Search our store"
                     className="w-full min-w-[350px] border border-gray-200 px-4 py-2 lg:min-w-[500px]"
                  />
                  <div className="h-full bg-navyBlue px-3 py-2">
                     <Search className="text-white" />
                  </div>
               </div>
               {/* icons */}
               <div className="flex gap-4">
                  <Search size={20} className="md:hidden" />
                  <Link to="/myprofile">
                     <User
                        size={20}
                        className="hidden cursor-pointer md:block"
                     />
                  </Link>
                  <div
                     onClick={toggleWishList}
                     className="relative hidden cursor-pointer md:block"
                  >
                     <Heart size={20} />
                     <Badge className="text-sm absolute -top-[3px] right-0 flex w-1 -translate-y-1/2 translate-x-1/2 justify-center bg-navyBlue text-[10px] font-bold text-white">
                        {wishlist.items.length}
                     </Badge>
                  </div>
                  <Link to="/cart" className="relative">
                     <ShoppingCart size={20} />
                     <Badge className="text-sm absolute -top-[3px] right-0 flex w-1 -translate-y-1/2 translate-x-1/2 justify-center bg-navyBlue text-[10px] font-bold text-white">
                        {totalCartItems}
                     </Badge>
                  </Link>
               </div>
            </div>
         </div>
      </>
   );
};

export default Heading;
