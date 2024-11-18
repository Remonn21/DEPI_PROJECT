import CartDetails from "./CartDetails";

import CartTotals from "./CartTotals";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

export default function ShoppingCard({ isAuth }) {
   const cart = useSelector((state) => state.cart);

   return (
      <div className="my-10 box-border grid max-w-[100vw] gap-6 md:my-20 lg:grid-cols-3">
         <div className="lg:col-span-2">
            <Card className="bg-white">
               <CardHeader>
                  <CardTitle>Cart Items</CardTitle>
               </CardHeader>
               <CardContent className="box-border p-3">
                  <CartDetails cartItems={cart.items} />
               </CardContent>
            </Card>
         </div>
         <div className="card-price">
            <CartTotals isAuth={isAuth} totalAmount={cart.total} />
         </div>
      </div>
   );
}

ShoppingCard.propTypes = {
   isAuth: PropTypes.bool.isRequired,
};
