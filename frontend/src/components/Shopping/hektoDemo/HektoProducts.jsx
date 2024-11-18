import { useSelector } from "react-redux";
import CartItem from "../CartItem";

export default function HektoProducts() {
   const cartItems = useSelector((state) => state.cart.items);
   return (
      <div id="total" className="mb-10">
         {cartItems.map((product) => (
            <CartItem data={product} key={product._id} />
         ))}
      </div>
   );
}
