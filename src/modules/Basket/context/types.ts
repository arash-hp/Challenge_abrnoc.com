import { ReactNode } from "react";
import { Product } from "../../../types/general";

export interface BasketContextType {
  addItem: (item: Product) => void;
  basket: Product[] | undefined;
  toggleModal: () => void;
  increaseQty: (id: string, qty: number) => void;
  decreaseQty: (id: string, qty: number) => void;
  openModal: boolean;
  deleteItem: (id: string) => void;
  isPending: boolean;
  itemIdInprogress: string | null;
}

export interface BasketContextProviderProps {
  children: ReactNode;
}
