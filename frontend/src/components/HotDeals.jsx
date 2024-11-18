import Countdown from "react-countdown";
import OfferCard from "./OfferCard";
import ProductCard from "./ProductCard";
import PropTypes from "prop-types";

const HotDeals = ({ products }) => {
   const renderer = ({ days, hours, minutes, seconds, completed }) => {
      if (completed) {
         //  return <Completionist />;
      } else {
         return (
            <div className="flex gap-1 text-white">
               <div className="flex flex-col items-center justify-center gap-0 rounded-sm bg-navyBlue px-2">
                  <span>{days}</span>
               </div>
               <div className="items- flex flex-col justify-center gap-0 rounded-sm bg-navyBlue px-2">
                  <span>{hours}</span>
               </div>
               <div className="flex flex-col items-center justify-center gap-0 rounded-sm bg-navyBlue px-2">
                  <span>{minutes}</span>
               </div>
               <div className="flex flex-col items-center justify-center gap-0 rounded-sm bg-navyBlue px-2">
                  <span>{seconds}</span>
               </div>
            </div>
         );
      }
   };

   return (
      <div className="mt-10">
         <div className="mb-10 flex flex-1 flex-col items-center justify-between md:flex-row">
            <h2 className="text-[1.4rem] font-bold capitalize">
               Best Deals products
            </h2>
            <div className="flex items-center gap-2">
               <p className="text-[.8rem] text-gray-500">
                  Hurry up! Offer ends in:{" "}
               </p>
               <Countdown
                  date={Date.now() + 5 * 24 * 60 * 60 * 1000}
                  renderer={renderer}
               />
            </div>
         </div>
         <div className="flex flex-col flex-wrap gap-8 sm:flex-row">
            <OfferCard
               className="sm:w-[calc(30%-2rem)]"
               title="Iphone 14 Pro Max"
               linkTxt="show now"
               description="Pair text with an icon to focus on your store's features"
               href="/"
               textOffset="top"
               textClass="text-white"
               image="https://isotech-demo.myshopify.com/cdn/shop/files/Watch_Banner_7b3ae013-75a3-479c-a76f-7c2eea9d4a9e_360x.png?v=1696738786"
               loading="lazy"
            />
            <div className="w-full sm:max-w-[70%]">
               <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
                  {products.map((product) => (
                     <ProductCard key={product.name} product={product} />
                  ))}
               </div>
            </div>
         </div>
      </div>
   );
};

HotDeals.propTypes = {
   products: PropTypes.array.isRequired,
};

export default HotDeals;
