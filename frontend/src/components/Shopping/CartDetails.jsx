import { useDispatch } from "react-redux";
import CartItem from "./CartItem";
import { clearCart } from "@/redux/slice/cart.slice";
import { FaRegTrashAlt } from "react-icons/fa";
import {
   Table,
   TableBody,
   TableHead,
   TableHeader,
   TableRow,
} from "../ui/table";
import { Button } from "../ui/button";

export default function CartDetails({ cartItems }) {
   const dispatch = useDispatch();

   const clearCartHandler = () => {
      dispatch(clearCart());
   };

   return (
      <div className="w-full">
         <div className="mb-4 box-border max-w-[70vw] overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="py-2 align-middle sm:px-6 lg:px-8">
               <div className="box-border overflow-x-auto shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
                  <Table className="overflow-x-auto">
                     <TableHeader>
                        <TableRow>
                           <TableHead className="text-sm w-1/2 px-3 py-3.5 text-left font-semibold text-gray-900 sm:pl-6">
                              Product
                           </TableHead>
                           <TableHead className="text-sm px-3 py-3.5 text-right font-semibold text-gray-900">
                              Price
                           </TableHead>
                           <TableHead className="text-sm px-3 py-3.5 text-right font-semibold text-gray-900">
                              Quantity
                           </TableHead>
                           <TableHead className="text-sm px-3 py-3.5 text-right font-semibold text-gray-900">
                              Total
                           </TableHead>
                        </TableRow>
                     </TableHeader>
                     <TableBody>
                        {cartItems.map((product) => (
                           <CartItem key={product._id} data={product} />
                        ))}
                     </TableBody>
                  </Table>
               </div>
               <div className="mt-4 flex justify-end sm:px-6 lg:px-8">
                  <Button
                     onClick={clearCartHandler}
                     variant="destructive"
                     className="flex items-center gap-1 bg-red-500 px-4 py-2 text-white hover:bg-red-700"
                  >
                     <FaRegTrashAlt />
                     <span className="hidden sm:inline">Clear Cart</span>
                  </Button>
               </div>
            </div>
         </div>
      </div>
   );
}
