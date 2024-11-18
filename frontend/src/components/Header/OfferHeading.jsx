import { MoveRight, X } from "lucide-react";
import { useState } from "react";
import Countdown from "react-countdown";
import { useNavigate } from "react-router-dom";

const OfferHeading = () => {
   const [isShown, setIsShown] = useState(true);
   const navigate = useNavigate();

   const renderer = ({ days, hours, minutes, seconds, completed }) => {
      if (completed) {
         return <></>;
      } else {
         return (
            <div className="flex gap-2 text-white">
               <div className="flex flex-col items-center gap-0 rounded-md border border-gray-500 px-2">
                  <span>{days}</span>
                  <span>Days</span>
               </div>
               <div className="flex flex-col items-center gap-0 rounded-md border border-gray-500 px-2">
                  <span>{hours}</span>
                  <span>Hrs</span>
               </div>
               <div className="flex flex-col items-center gap-0 rounded-md border border-gray-500 px-2">
                  <span>{minutes}</span>
                  <span>Min</span>
               </div>
               <div className="flex flex-col items-center gap-0 rounded-md border border-gray-500 px-2">
                  <span>{seconds}</span>
                  <span>Sec</span>
               </div>
            </div>
         );
      }
   };

   return (
      <>
         {isShown && (
            <div className="relative mx-auto flex w-full items-center bg-navyBlue px-2 py-3 pr-10 text-[.9rem] sm:justify-center md:px-8">
               <div className="flex w-full items-center justify-between sm:gap-5 sm:self-center md:justify-center">
                  <div className="flex flex-col items-center sm:flex-row sm:gap-5">
                     <p className="mb-2 self-center text-[1rem] uppercase text-white">
                        Up to 50% OFF
                     </p>
                     <Countdown
                        date={Date.now() + 5 * 24 * 60 * 60 * 1000}
                        renderer={renderer}
                     />
                  </div>
                  <div>
                     <button
                        onClick={() => navigate("/products")}
                        className="flex max-w-max items-center gap-2 rounded-lg bg-white px-2 py-2 text-[.8rem] text-black transition duration-300 hover:bg-black hover:text-white"
                     >
                        <span>Shop now</span> <MoveRight size={16} />
                     </button>
                  </div>
               </div>
               <X
                  className="absolute right-3 cursor-pointer text-white"
                  onClick={() => setIsShown(false)}
               />
            </div>
         )}
      </>
   );
};

export default OfferHeading;
