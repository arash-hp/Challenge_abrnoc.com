import { useMutation, useQueryClient } from "@tanstack/react-query";
import { axiosInstance } from "../../../services";
import { Product } from "./types";

const addProduct = (data: Product) => {
  return axiosInstance.post<{ data: Product }>(`basket`, data);
};
export const useAddProduct = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: addProduct,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["getBasket"] });
    },
  });
};
