import {
   getHomeStatistics,
   getProductById,
   searchProducts,
} from "@/api/product.api";
import { useQuery } from "react-query";

export const useSearchProducts = (searchState) => {
   return useQuery(
      ["searchProducts", searchState],
      () => searchProducts(searchState),
      {
         enabled: !!searchState,
         // lsa hashof
      },
   );
};

export const useProductById = (productId) => {
   return useQuery(["product", productId], () => getProductById(productId), {
      enabled: !!productId,
   });
};

export const useHomeStatistics = () => {
   return useQuery(["homeStatistics"], () => getHomeStatistics());
};
