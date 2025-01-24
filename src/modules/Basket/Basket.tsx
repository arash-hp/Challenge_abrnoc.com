import { memo, ReactNode } from "react";
import { BasketContextProvider } from "./context/BasketContextProvider";
import { BasketModal } from "./components";

export const Basket = memo(({ children }: { children: ReactNode }) => {
  return (
    <BasketContextProvider>
      <>
        {children}
        <BasketModal />
      </>
    </BasketContextProvider>
  );
});
