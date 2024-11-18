import { useMutation } from "react-query";
import { protectedClient } from "./axios";
import { toast } from "sonner";

export const createOrderRequest = async (formData) => {
   const response = await protectedClient.post("/orders", formData);

   return response.data;
};

export const useCreateOrder = () => {
   const {
      mutateAsync: createOrder,
      isLoading,
      isSuccess,
   } = useMutation(createOrderRequest, {
      onSuccess: () => {
         toast.success("Order placed successfully");
      },
      onError: async (error) => {
         toast.error(
            error.response.data.message || "Error while placing order",
         );
      },
   });

   return { createOrder, isLoading, isSuccess };
};
