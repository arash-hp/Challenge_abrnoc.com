import { useMutation } from "@tanstack/react-query";
import { axiosInstance } from "../../../services";
import { useInvalidateAccountTreeData } from "../../../utils/functions";

const deleteItem = (id: string) => {
  return axiosInstance.delete(`basket//${id}`);
};

export const useDeleteBasketItem = () => {
  const invalidate = useInvalidateAccountTreeData("getBasket");
  return useMutation({
    mutationFn: deleteItem,
    onSuccess: invalidate,
  });
};
