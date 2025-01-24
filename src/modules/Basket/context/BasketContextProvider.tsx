import { FC, useCallback, useState } from "react";
import { Product } from "../../../types/general";
import {
  useAddProduct,
  useDeleteBasketItem,
  useGetBasket,
  useUpdateBasketItem,
} from "../services";
import { BasketContext } from "./BasketContext";
import { BasketContextProviderProps } from "./types";

// ===========================P R O V I D E R==========================================*
export const BasketContextProvider: FC<BasketContextProviderProps> = ({
  children,
}) => {
  const { mutate } = useAddProduct();
  const { data: basket } = useGetBasket();
  const { mutate: deleteBasketItem } = useDeleteBasketItem();
  const { mutate: updateBasketItem, isPending } = useUpdateBasketItem();
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [itemIdInprogress, setItemInprogress] = useState<string | null>(null);

  const addItem = useCallback(
    (item: Product) => {
      mutate({ ...item, qty: 1, productId: item.id });
    },
    [mutate]
  );

  const deleteItem = useCallback(
    (id: string) => {
      deleteBasketItem(id);
    },
    [deleteBasketItem]
  );

  const updateItem = useCallback(
    (id: string, qty: number) => {
      setItemInprogress(id);
      updateBasketItem(
        { id, qty },
        { onSettled: () => setItemInprogress(null) }
      );
    },
    [updateBasketItem]
  );

  const increaseQty = useCallback(
    (id: string, qty: number) => {
      updateItem(id, qty + 1);
    },
    [updateItem]
  );
  const decreaseQty = useCallback(
    (id: string, qty: number) => {
      updateItem(id, qty - 1);
    },
    [updateItem]
  );
  const toggleModal = useCallback(() => {
    setOpenModal((prev) => !prev);
  }, []);
  const value = {
    addItem,
    basket,
    toggleModal,
    openModal,
    deleteItem,
    increaseQty,
    decreaseQty,
    isPending,
    itemIdInprogress,
  };

  return (
    <BasketContext.Provider value={value}>{children}</BasketContext.Provider>
  );
};
