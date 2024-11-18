import {
   Facebook,
   Instagram,
   Mail,
   MoveRight,
   Plus,
   Twitter,
} from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Footer = () => {
   const [activeTab, setActiveTab] = useState();

   const handleActiveTab = (tab) => {
      setActiveTab((prevTab) => (prevTab === tab ? "" : tab));
   };
   return (
      <div className="bg-white">
         <div className="mx-auto mb-16 grid max-w-6xl gap-6 px-4 py-8 sm:grid-cols-2 md:mb-0 md:grid-cols-4">
            <div
               className="relative cursor-pointer sm:cursor-default"
               onClick={() => handleActiveTab("about")}
            >
               <h1 className="mb-2 text-small-lg font-bold">About us</h1>
               <div
                  className={`max-h-0 overflow-hidden transition-all duration-300 ${activeTab === "about" ? "max-h-screen" : "max-h-0 sm:max-h-screen"}`}
               >
                  <p className="text-[.8rem] text-gray-600">
                     Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                     Voluptatem ad numquam consectetur dignissimos sapiente
                     sunt, voluptatum unde id,
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                     <Twitter size={20} />
                     <Facebook size={20} />
                     <Instagram size={20} />
                  </div>
               </div>
               <Plus className="absolute right-0 top-1 sm:hidden" />
            </div>
            <div
               className="relative cursor-pointer sm:cursor-default"
               onClick={() => handleActiveTab("quicklinks")}
            >
               <h1 className="mb-2 text-small-lg font-bold">Quick links</h1>
               <div
                  className={`max-h-0 overflow-hidden transition-all duration-300 ${activeTab === "quicklinks" ? "max-h-screen" : "max-h-0 sm:max-h-screen"}`}
               >
                  <div className="flex flex-col gap-1 text-[.8rem] text-gray-600">
                     <Link className="hover:text-gray-800" to="/">
                        FAQ
                     </Link>
                     <Link className="hover:text-gray-800" to="/">
                        Find store location
                     </Link>
                     <Link className="hover:text-gray-800" to="/">
                        Privacy Policy
                     </Link>
                     <Link className="hover:text-gray-800" to="/">
                        Refund Policy
                     </Link>
                     <Link className="hover:text-gray-800" to="/">
                        Terms of Service
                     </Link>
                  </div>
               </div>
               <Plus className="absolute right-0 top-1 sm:hidden" />
            </div>
            <div
               className="relative cursor-pointer sm:cursor-default"
               onClick={() => handleActiveTab("company")}
            >
               <h1 className="mb-2 text-small-lg font-bold">Company</h1>
               <div
                  className={`max-h-0 overflow-hidden transition-all duration-300 ${activeTab === "company" ? "max-h-screen" : "max-h-0 sm:max-h-screen"}`}
               >
                  <div className="flex flex-col gap-1 text-[.8rem] text-gray-600">
                     <Link className="hover:text-gray-800" to="/">
                        Wishlist
                     </Link>
                     <Link className="hover:text-gray-800" to="/">
                        My account
                     </Link>
                     <Link className="hover:text-gray-800" to="/">
                        Product compare
                     </Link>
                     <Link className="hover:text-gray-800" to="/">
                        Cart
                     </Link>
                     <Link className="hover:text-gray-800" to="/">
                        About us
                     </Link>
                  </div>
               </div>
               <Plus className="absolute right-0 top-1 sm:hidden" />
            </div>{" "}
            <div
               className="relative cursor-pointer sm:cursor-default"
               onClick={() => handleActiveTab("newsletter")}
            >
               <h1 className="mb-2 text-small-lg font-bold">Newsletter</h1>
               <div
                  className={`max-h-0 overflow-hidden transition-all duration-300 ${activeTab === "newsletter" ? "max-h-screen" : "max-h-0 sm:max-h-screen"}`}
               >
                  <p className="text-gray-604 mb-4 text-[.8rem]">
                     Write your email first to know about any infromation
                  </p>
                  <div className="relative">
                     <input
                        type="text"
                        placeholder="Enter your email"
                        className="w-full rounded-md border border-gray-300 px-3 py-1 pl-9 shadow-sm"
                     />
                     <Mail
                        size={20}
                        className="absolute left-2 top-2 text-gray-600"
                     />
                     <MoveRight
                        size={20}
                        className="absolute right-2 top-2 cursor-pointer text-gray-600"
                        onClick={() => {}}
                     />
                  </div>
               </div>
               <Plus className="absolute right-0 top-1 sm:hidden" />
            </div>
         </div>
      </div>
   );
};

export default Footer;
