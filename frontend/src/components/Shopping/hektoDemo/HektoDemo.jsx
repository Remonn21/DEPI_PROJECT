import HektoForm from "./HektoForm";
import HektoProducts from "./HektoProducts";
import CartTotals from "../CartTotals";

export default function HektoDemo() {
   return (
      <div className="my-20">
         <h3 className="text-h3 text-navyBlue">Hekto Demo</h3>
         <p className="my-5 text-navyBlue">Card/Information/Shipping/Payment</p>
         <div className="grid grid-cols-1 gap-y-8 md:grid-cols-3 md:gap-x-8">
            <div className="cart-details col-span-2">
               <HektoForm />
            </div>
            <div className="card-price">
               <HektoProducts />
               <CartTotals totalAmount={2323} />
            </div>
         </div>
      </div>
   );
}
