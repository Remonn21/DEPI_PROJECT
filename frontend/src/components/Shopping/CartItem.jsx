import { addToCart, removeFromCart } from "@/redux/slice/cart.slice";
import { useDispatch } from "react-redux";
import { TableCell, TableRow } from "../ui/table";
import { Button } from "../ui/button";
import { FaMinus, FaPlus, FaRegTrashAlt } from "react-icons/fa";

export default function CartItem({ data }) {
   const dispatch = useDispatch();

   const handleChange = (action) => {
      action === "increment"
         ? dispatch(addToCart({ ...data, quantity: 1 }))
         : dispatch(removeFromCart({ id: data._id, quantity: 1 }));
   };

   const removeItemHandler = () => {
      dispatch(removeFromCart({ id: data._id }));
   };

   return (
      <TableRow>
         <TableCell className="text-sm whitespace-nowrap py-4 pl-4 pr-3 font-medium text-gray-900 sm:pl-6">
            <div className="flex flex-col items-center gap-1 md:flex-row">
               <img
                  src={data.images[0]}
                  alt={data.name}
                  className="h-10 w-10 flex-shrink-0 rounded-full"
               />
               <div className="ml-4">
                  <div className="font-medium text-gray-900">{data.name}</div>
               </div>
            </div>
         </TableCell>
         <TableCell className="text-sm whitespace-nowrap px-3 py-4 text-right text-gray-500">
            ${data.price.toFixed(2)}
         </TableCell>
         <TableCell className="text-sm whitespace-nowrap px-3 py-4 text-right text-gray-500">
            <div className="flex items-center justify-end space-x-2">
               <Button
                  variant="outline"
                  size="icon"
                  id="decrement"
                  onClick={() => handleChange("decrement")}
                  className="h-6 w-6 rounded-full sm:h-8 sm:w-8"
               >
                  <FaMinus className="h-3 w-3 sm:h-4 sm:w-4" />
               </Button>
               <span className="w-6 text-center sm:w-8">{data.quantity}</span>
               <Button
                  variant="outline"
                  size="icon"
                  id="increment"
                  onClick={() => handleChange("increment")}
                  className="h-6 w-6 rounded-full sm:h-8 sm:w-8"
               >
                  <FaPlus className="h-3 w-3 sm:h-4 sm:w-4" />
               </Button>
            </div>
         </TableCell>
         <TableCell className="text-sm whitespace-nowrap px-3 py-4 text-right text-gray-500">
            <div className="flex items-center justify-end space-x-2">
               <span>${(data.price * data.quantity).toFixed(2)}</span>
               <Button
                  variant="ghost"
                  size="icon"
                  onClick={removeItemHandler}
                  className="h-6 w-6 text-red-500 hover:text-red-700 sm:h-8 sm:w-8"
               >
                  <FaRegTrashAlt size={16} />
               </Button>
            </div>
         </TableCell>
      </TableRow>
   );
}
