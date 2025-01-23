import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "../../../services";
import { Product } from "../../../types/general";

const getProducts = (): Promise<Product[]> => {
  return axiosInstance.get<Product[]>("products").then((res) => res);
};

export const useGetProducts = () => {
  const { data, status, error, isLoading } = useQuery({
    queryKey: ["getProducts"],
    queryFn: getProducts,
  });
  return { data, status, error, isLoading };
};
