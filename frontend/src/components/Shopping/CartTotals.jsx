import { CircleCheck } from "lucide-react";
import {
   Card,
   CardContent,
   CardFooter,
   CardHeader,
   CardTitle,
} from "../ui/card";
import { FaCreditCard } from "react-icons/fa";
import { Separator } from "../ui/separator";
import { useNavigate } from "react-router-dom";

export default function CartTotals({ totalAmount, isAuth }) {
   const navigate = useNavigate();
   console.log(isAuth);
   const handlePlaceOrder = () => {
      if (!isAuth) return navigate("/login");
      navigate("/checkout");
   };

   return (
      <Card className="bg-white">
         <CardHeader>
            <CardTitle className="text-center text-h6 text-blue-off">
               Order Summary
            </CardTitle>
         </CardHeader>
         <CardContent>
            <div className="space-y-4">
               <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>${totalAmount.toFixed(2)}</span>
               </div>
               <Separator className="bg-gray-300" />
               <div className="flex justify-between font-semibold">
                  <span>Total</span>
                  <span>${totalAmount.toFixed(2)}</span>
               </div>
            </div>
         </CardContent>
         <CardFooter className="flex flex-col items-stretch space-y-4">
            <button
               disabled={totalAmount === 0}
               className="mt-10 w-full rounded-md bg-navyBlue p-3 text-white hover:bg-navyBlue/70 disabled:cursor-not-allowed disabled:bg-gray-600"
               onClick={handlePlaceOrder}
            >
               <span className="flex items-center justify-center">
                  <FaCreditCard className="mr-2 h-4 w-4" />
                  Proceed to Checkout
               </span>
            </button>
            <p className="text-grey text-small-md">
               <CircleCheck className="mr-2 inline-block text-small-sm text-green" />
               Shipping & taxes calculated at checkout
            </p>
         </CardFooter>
      </Card>
   );
}
