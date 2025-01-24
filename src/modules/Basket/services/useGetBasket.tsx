import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "../../../services";
import { Product } from "../../../types/general";

const getBasket = () => {
  return axiosInstance.get<Product[]>("basket").then((res) => res.data);
};

export const useGetBasket = () => {
  const { data, status, error, isLoading } = useQuery({
    queryKey: ["getBasket"],
    queryFn: getBasket,
  });
  return { data, status, error, isLoading };
};
