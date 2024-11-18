import ShoppingCard from "@/components/Shopping/ShoppingCard";
import { useSelector } from "react-redux";

export default function ShoppingCardPage() {
   const isAuthenticated = useSelector((state) => state.user.isAuthenticated);

   return (
      <div>
         <div className="container mx-auto px-4 py-8">
            <h1 className="text-4xl mb-6 font-bold">Shopping Cart</h1>
            <ShoppingCard isAuth={isAuthenticated} />
         </div>
      </div>
   );
}
