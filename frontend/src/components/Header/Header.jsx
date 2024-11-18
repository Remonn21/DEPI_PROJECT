import DesktopNav from "./DesktopNav";
import Heading from "./Heading";
import MobileNav from "./MobileNav";
import { Separator } from "../ui/separator";

const Header = ({ toggleWishList }) => {
   return (
      <div>
         <div className="relative top-0 mb-6 w-full bg-white px-5 pb-2 pt-4 shadow-md md:px-0">
            <Heading toggleWishList={toggleWishList} />
            <Separator className="my-4 hidden bg-gray-300 md:block" />
            <DesktopNav />
         </div>
         <div className="sm:hidden">
            <MobileNav />
         </div>
      </div>
   );
};

export default Header;
