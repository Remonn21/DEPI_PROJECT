import Footer from "@/components/Footer";
import Header from "@/components/Header/Header";
import OfferHeading from "@/components/Header/OfferHeading";
import Wishlist from "@/components/Wishlist";
import { useState } from "react";
import { Outlet } from "react-router-dom/dist";

const Layout = () => {
   const [isWishlistShow, setIsLayoutShown] = useState(false);

   const toggleWishListHandler = () => {
      setIsLayoutShown((prevState) => !prevState);
   };

   return (
      <div className="">
         <OfferHeading />
         <Header toggleWishList={toggleWishListHandler} />
         <Wishlist
            isShown={isWishlistShow}
            toggleWishList={toggleWishListHandler}
         />
         <div className="mx-auto w-full px-4 pb-16 lg:max-w-[95%] lg:px-0 xl:max-w-[90%]">
            <Outlet />
         </div>
         <Footer />
      </div>
   );
};

export default Layout;
