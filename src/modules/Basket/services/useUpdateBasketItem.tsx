import { useMutation } from "@tanstack/react-query";
import { axiosInstance } from "../../../services";
import { useInvalidateQueryByKey } from "../../../hook/api";

const updateItem = ({ id, qty }: { id: string; qty: number }) => {
  console.log("service", id, qty);

  return axiosInstance.put(`basket//${id}`, { qty });
};

export const useUpdateBasketItem = () => {
  const invalidate = useInvalidateQueryByKey("getBasket");
  return useMutation({
    mutationFn: updateItem,
    onSuccess: invalidate,
    // onError: () => {
    // handle error
    // },
  });
};
