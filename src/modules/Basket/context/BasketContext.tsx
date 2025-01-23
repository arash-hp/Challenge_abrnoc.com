import { createContext, FC, useCallback, useContext } from "react";
import { BasketContextProviderProps, BasketContextType } from "./types";
import { useAddProduct } from "../services";
import { useGetBasket } from "../services/useGetBasket";
import { Product } from "../services/types";

// =============================C R E A T E============================================*
const BasketContext = createContext<BasketContextType | null>(null);
// ===============================U S E================================================*

export const useBasketContext = () => {
  const basketContext = useContext(BasketContext);
  if (!basketContext) {
    throw new Error(
      "basketContext has to be used within <useBasketContext.Provider>"
    );
  }

  return basketContext;
};
// ===========================P R O V I D E R==========================================*

export const BasketContextProvider: FC<BasketContextProviderProps> = ({
  children,
}) => {
  const { mutate } = useAddProduct();
  const { data: basket } = useGetBasket();
  const addItem = useCallback(
    (item: Product) => {
      console.log(item);
      mutate(item);
    },
    [mutate]
  );
  const value = { addItem, basket };

  return (
    <BasketContext.Provider value={value}>{children}</BasketContext.Provider>
  );
};
