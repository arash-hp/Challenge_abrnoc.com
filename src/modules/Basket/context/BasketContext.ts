import { createContext, useContext } from "react";
import { BasketContextType } from "./types";

// =============================C R E A T E============================================*
export const BasketContext = createContext<BasketContextType | null>(null);
// ===============================U S E================================================*

export const useBasketContext = () => {
  const basketContext = useContext(BasketContext);
  if (!basketContext) {
    throw new Error(
      "useBasketContext has to be used within <BasketContext.Provider>"
    );
  }

  return basketContext;
};
