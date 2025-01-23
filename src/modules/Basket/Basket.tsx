import { memo, ReactNode } from "react";
import { BasketContextProvider } from "./context/BasketContext";

export const Basket = memo(({ children }: { children: ReactNode }) => {
  return <BasketContextProvider>{children}</BasketContextProvider>;
});
