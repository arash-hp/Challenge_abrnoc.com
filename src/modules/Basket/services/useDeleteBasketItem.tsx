import { useMutation } from "@tanstack/react-query";
import { axiosInstance } from "../../../services";
import { useInvalidateQueryByKey } from "../../../hook/api";

const deleteItem = (id: string) => {
  return axiosInstance.delete(`basket//${id}`);
};

export const useDeleteBasketItem = () => {
  const invalidate = useInvalidateQueryByKey("getBasket");
  return useMutation({
    mutationFn: deleteItem,
    onSuccess: invalidate,
    // onError: () => {
    // handle error
    // },
  });
};
