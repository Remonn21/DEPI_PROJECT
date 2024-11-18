import { useEffect, useState } from "react";
import { CreditCard, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
   Select,
   SelectContent,
   SelectItem,
   SelectTrigger,
   SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FaCartPlus } from "react-icons/fa";
import { Separator } from "@/components/ui/separator";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useCreateOrder } from "@/api/order.api";
import { clearCart } from "@/redux/slice/cart.slice";

export default function PaymentPage() {
   const [paymentMethod, setPaymentMethod] = useState("credit-card");

   const { createOrder, isLoading, isSuccess } = useCreateOrder();
   const navigate = useNavigate();
   const cart = useSelector((state) => state.cart);
   const cartItems = cart.items;
   const totalAmount = cart.total;
   const dispatch = useDispatch();

   const handlePlaceOrder = () => {
      createOrder({
         products: [...cartItems],
         paymentMethod: "visa",
         shippingAddress: "test",
      });
   };

   useEffect(() => {
      if (isSuccess) {
         dispatch(clearCart());
         navigate("/order-completed");
      }
   }, [isSuccess, dispatch, navigate]);

   return (
      <div className="flex flex-col justify-center py-2 sm:px-6 lg:px-8">
         <div className="sm:mx-auto sm:w-full sm:max-w-md">
            <h2 className="text-3xl mt-6 text-center font-extrabold text-gray-900">
               Complete your payment
            </h2>
         </div>

         <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-4xl">
            <div className="bg-white px-4 py-8 shadow sm:rounded-lg sm:px-10">
               <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div>
                     <Card className="mb-6 md:mb-0">
                        <CardHeader>
                           <CardTitle className="flex items-center">
                              <FaCartPlus className="mr-2 h-5 w-5" />
                              Order Summary
                           </CardTitle>
                        </CardHeader>
                        <CardContent>
                           <ul className="space-y-2">
                              {cartItems?.map((item) => (
                                 <li
                                    key={item.id}
                                    className="flex justify-between"
                                 >
                                    <span>
                                       {item.name} x {item.quantity}
                                    </span>
                                    <span>
                                       $
                                       {(item.price * item.quantity).toFixed(2)}
                                    </span>
                                 </li>
                              ))}
                           </ul>
                           <Separator className="my-4" />
                           <div className="flex justify-between font-bold">
                              <span>Total</span>
                              <span>${totalAmount.toFixed(2)}</span>
                           </div>
                        </CardContent>
                     </Card>
                  </div>
                  <div>
                     <form className="space-y-6" onSubmit={handlePlaceOrder}>
                        <RadioGroup
                           value={paymentMethod}
                           onValueChange={setPaymentMethod}
                           className="space-y-4"
                        >
                           <div className="flex items-center space-x-3">
                              <RadioGroupItem
                                 value="credit-card"
                                 id="credit-card"
                              />
                              <Label
                                 htmlFor="credit-card"
                                 className="flex items-center font-semibold"
                              >
                                 <CreditCard className="mr-2 h-4 w-4" />
                                 Credit Card
                              </Label>
                           </div>
                           <div className="flex items-center space-x-3">
                              <RadioGroupItem
                                 value="debit-card"
                                 id="debit-card"
                              />
                              <Label
                                 htmlFor="debit-card"
                                 className="flex items-center font-semibold"
                              >
                                 <CreditCard className="mr-2 h-4 w-4" />
                                 Debit Card
                              </Label>
                           </div>
                        </RadioGroup>

                        <div className="space-y-1">
                           <Label
                              className="font-semibold"
                              htmlFor="card-number"
                           >
                              Card number
                           </Label>
                           <Input
                              id="card-number"
                              name="card-number"
                              type="text"
                              required
                              className="mt-1"
                           />
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                           <div className="space-y-1">
                              <Label
                                 className="font-semibold"
                                 htmlFor="expiry-date"
                              >
                                 Expiry date
                              </Label>
                              <Input
                                 id="expiry-date"
                                 name="expiry-date"
                                 type="text"
                                 placeholder="MM / YY"
                                 required
                                 className="mt-1"
                              />
                           </div>
                           <div className="space-y-1">
                              <Label className="font-semibold" htmlFor="cvv">
                                 CVV
                              </Label>
                              <Input
                                 id="cvv"
                                 name="cvv"
                                 type="text"
                                 required
                                 className="mt-1"
                              />
                           </div>
                        </div>

                        <div className="space-y-1">
                           <Label className="font-semibold" htmlFor="name">
                              Name on card
                           </Label>
                           <Input
                              id="name"
                              name="name"
                              type="text"
                              required
                              className="mt-1"
                           />
                        </div>

                        <div className="space-y-1">
                           <Label className="font-semibold" htmlFor="country">
                              Country or region
                           </Label>
                           <Select>
                              <SelectTrigger className="w-full">
                                 <SelectValue placeholder="Select a country" />
                              </SelectTrigger>
                              <SelectContent>
                                 <SelectItem value="eg">Egypt</SelectItem>
                                 <SelectItem value="us">
                                    United States
                                 </SelectItem>
                                 <SelectItem value="ca">Canada</SelectItem>
                                 <SelectItem value="uk">
                                    United Kingdom
                                 </SelectItem>
                              </SelectContent>
                           </Select>
                        </div>

                        <div>
                           <Button
                              onClick={handlePlaceOrder}
                              type="submit"
                              className="text-lg flex w-full items-center justify-center bg-navyBlue px-4 py-6 font-bold text-white hover:bg-navyBlue/90"
                           >
                              {isLoading ? (
                                 <span className="flex items-center justify-center">
                                    <svg
                                       className="mr-2 h-4 w-4 animate-spin"
                                       viewBox="0 0 24 24"
                                    >
                                       <circle
                                          className="opacity-25"
                                          cx="12"
                                          cy="12"
                                          r="10"
                                          stroke="currentColor"
                                          strokeWidth="4"
                                          fill="none"
                                       />
                                       <path
                                          className="opacity-75"
                                          fill="currentColor"
                                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                       />
                                    </svg>
                                    Processing...
                                 </span>
                              ) : (
                                 <>
                                    <Lock className="mr-2 h-4 w-4" />
                                    Pay securely
                                 </>
                              )}
                           </Button>
                        </div>
                     </form>

                     <div className="mt-6 text-center">
                        <p className="text-sm text-gray-500">
                           Secure payments powered by
                        </p>
                        <img
                           src="data:image/png;base64,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"
                           alt="Paymob"
                           className="mx-auto mt-2 h-8 rounded-md"
                        />
                     </div>
                     <div className="mt-6">
                        <p className="text-sm text-center text-gray-500">
                           Your payment is secure and encrypted
                        </p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}
