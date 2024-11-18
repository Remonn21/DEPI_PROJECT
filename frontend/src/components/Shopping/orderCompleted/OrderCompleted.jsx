import { CircleCheckBig, ClipboardList, Clock2 } from "lucide-react";
import img from "../../../../public/image 1174.png";
import { useNavigate } from "react-router-dom";
export default function OrderCompleted() {
   const navigate = useNavigate();

   return (
      <section>
         <div className="border-grey-off relative my-20 border-2 p-10 text-center md:mx-20">
            <CircleCheckBig size={50} className="mx-auto text-pink" />
            <h4 className="my-4 text-h4 text-blue-off">
               Your Order Is Completed!
            </h4>
            <p className="text-grey">
               Thank you for your order! Your order is being processed and will
               be completed within 3-6 hours. You will receive an email
               confirmation when your order is completed.
            </p>
            <button
               onClick={() => navigate("/products")}
               className="btn mt-10 bg-pink px-7 py-3 text-white"
            >
               Continue Shopping
            </button>
            <Clock2
               size={50}
               className="absolute -left-5 -top-5 text-navyBlue"
            />
            <ClipboardList
               size={50}
               className="absolute -bottom-5 -right-4 text-pink"
            />
         </div>
         <div className="sponsors">
            <img src={img} alt="" className="w-full" />
         </div>
      </section>
   );
}
