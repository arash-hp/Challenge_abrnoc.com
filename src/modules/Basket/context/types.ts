import { ReactNode } from "react";
import { Product } from "../../../pages/ProductList/services/types";

export interface BasketContextType {
  addItem: (item: Product) => void;
  basket: Product[] | undefined;
  toggleModal: () => void;
  openModal: boolean;
  deleteItem: (id: string) => void;
}

export interface BasketContextProviderProps {
  children: ReactNode;
}
