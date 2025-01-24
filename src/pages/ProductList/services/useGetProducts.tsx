import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "../../../services";
import { Product } from "../../../types/general";

const getProducts = () => {
  return axiosInstance.get<Product[]>("products").then((res) => res.data);
};

export const useGetProducts = () => {
  const { data, status, error, isLoading } = useQuery({
    queryKey: ["getProducts"],
    queryFn: getProducts,
  });
  return { data, status, error, isLoading };
};
