import { ReactNode } from "react";
import { Product } from "../../../types/general";

export interface BasketContextType {
  addItem: (item: Product) => void;
  basket: Product[] | undefined;
  toggleModal: () => void;
  increaseQty: (qty: number) => void;
  decreaseQty: (qty: number) => void;
  openModal: boolean;
  deleteItem: (id: string) => void;
}

export interface BasketContextProviderProps {
  children: ReactNode;
}
