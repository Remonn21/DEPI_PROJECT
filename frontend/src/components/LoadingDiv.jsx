import { RiLoader4Line } from "react-icons/ri";

const LoadingDiv = () => {
   return (
      <div className="flex flex-col items-center justify-center gap-5">
         <RiLoader4Line className="size-[100px] animate-spin text-slate-600 md:size-[150px]" />
         <h2 className="text-h3 font-bold text-slate-600 md:text-h2">
            Loading...
         </h2>
      </div>
   );
};

export default LoadingDiv;
