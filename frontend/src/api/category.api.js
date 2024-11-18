import { useQuery } from "react-query";
import { publicClient } from "./axios";

export const getAllCategories = async () => {
   const response = await publicClient.get(`/categories`);

   return response.data;
};

export const useGetCategories = () => {
   const {
      data: results,
      isLoading,
      isError,
   } = useQuery("categories", getAllCategories);

   return { results, isLoading, isError };
};
