import { createContext, FC, useCallback, useContext, useState } from "react";
import { BasketContextProviderProps, BasketContextType } from "./types";
import { useAddProduct } from "../services";
import { useGetBasket } from "../services/useGetBasket";
import { Product } from "../services/types";
import { useDeleteBasketItem } from "../services/useDeleteBasketItem";

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
  const { mutate: deleteBasketItem } = useDeleteBasketItem();
  const [openModal, setOpenModal] = useState<boolean>(true);

  const addItem = useCallback(
    (item: Product) => {
      console.log({ ...item, qty: 1 });
      mutate({ ...item, qty: 1 });
    },
    [mutate]
  );

  const deleteItem = useCallback(
    (id: string) => {
      console.log(id);
      deleteBasketItem(id);
    },
    [deleteBasketItem]
  );

  const toggleModal = useCallback(() => {
    setOpenModal((prev) => !prev);
  }, []);
  const value = { addItem, basket, toggleModal, openModal, deleteItem };

  return (
    <BasketContext.Provider value={value}>{children}</BasketContext.Provider>
  );
};
