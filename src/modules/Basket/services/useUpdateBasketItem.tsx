import { useMutation } from "@tanstack/react-query";
import { axiosInstance } from "../../../services";
import { useInvalidateAccountTreeData } from "../../../utils/functions";

const updateItem = ({ id, qty }: { id: string; qty: number }) => {
  console.log("service", id, qty);

  return axiosInstance.put(`basket//${id}`, { qty });
};

export const useUpdateBasketItem = () => {
  const invalidate = useInvalidateAccountTreeData("getBasket");
  return useMutation({
    mutationFn: updateItem,
    onSuccess: invalidate,
  });
};
