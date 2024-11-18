import { publicClient } from "./axios";

export const searchProducts = async (searchState) => {
   const {
      page = 1,
      limit = 10,
      searchQuery = "",
      sortBy = "",
      category = "",
   } = searchState;
   const params = new URLSearchParams();

   if (sortBy) {
      const sortOption = sortBy.split("-")[0];
      const sortOrder = sortBy.split("-")[1];
      params.set("sortOption", sortOption);
      params.set("sortOrder", sortOrder);
   }

   params.set("searchQuery", searchQuery);
   params.set("category", category);
   params.set("page", page);
   params.set("limit", limit);

   const response = publicClient.get(`/products/search?${params.toString()}`);

   return response;
};

export const getProductById = async (productId) => {
   const response = await publicClient.get(`/products/${productId}`);

   return response.data;
};

export const getHomeStatistics = async () => {
   const response = await publicClient.get("/products/statistics");

   return response.data;
};
