import { CircleUser, House, Search, ShoppingCart, Store } from "lucide-react";
import { NavLink } from "react-router-dom/dist";

export const links = [
   {
      name: "Home",
      path: "/",
      icon: <House />,
   },
   {
      name: "Search",
      path: "/products",
      icon: <Search />,
   },
   {
      name: "Shop",
      path: "/products",
      icon: <Store />,
   },
   {
      name: "Cart",
      path: "/cart",
      icon: <ShoppingCart />,
   },
   {
      name: "profile",
      path: "/user",
      icon: <CircleUser />,
   },
];

const MobileNav = () => {
   return (
      <div className="fixed bottom-0 left-0 right-0 z-50 w-full bg-gray-200 shadow-md">
         <div className="flex justify-between px-3">
            {links.map((link, index) => (
               <NavLink
                  key={index}
                  className={({ isActive }) =>
                     `flex flex-col items-center py-2 ${isActive ? "border-b-4 border-navyBlue font-[900] text-navyBlue" : ""}`
                  }
                  to={link.path}
               >
                  {link.icon}
                  <span>{link.name}</span>
               </NavLink>
            ))}
         </div>
      </div>
   );
};

export default MobileNav;
