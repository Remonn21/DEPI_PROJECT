import { useState } from "react";

import ProductCard from "./ProductCard";
import PropTypes from "prop-types";

const TrendingProducts = ({ products }) => {
   const [openedTab, setOpenedTab] = useState(0);
   const tabs = [...new Set(products.map((product) => product.category.name))];

   const handleOpenTab = (tab) => {
      setOpenedTab(tab);
   };

   return (
      <div className="mt-20">
         <h1 className="text-h4 font-bold">Trending products</h1>

         <div className="mb-5 mt-7 flex gap-5 overflow-x-auto">
            {tabs.map((item, index) => (
               <button
                  className={`text-body-sm font-bold capitalize ${item === tabs[openedTab] ? "border-b-2 border-navyBlue text-navyBlue" : "text-gray-600"}`}
                  key={item}
                  onClick={() => handleOpenTab(index)}
               >
                  {item}
               </button>
            ))}
         </div>

         <div className="m grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-5">
            {products.map(
               (product) =>
                  product.category.name === tabs[openedTab] && (
                     <ProductCard key={product.name} product={product} />
                  ),
            )}
         </div>
      </div>
   );
};
TrendingProducts.propTypes = {
   products: PropTypes.array.isRequired,
};

export default TrendingProducts;
