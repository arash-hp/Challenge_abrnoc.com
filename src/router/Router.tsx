import React from "react";
import { createBrowserRouter } from "react-router-dom";
import { Providers } from "../providers";

export const lazyHome = React.lazy(() => import("../pages/Home/Home"));
export const lazyPayment = React.lazy(() => import("../pages/Payment/Payment"));
export const lazyProductList = React.lazy(
  () => import("../pages/ProductList/ProductList")
);

const withSuspense = (
  Component: React.LazyExoticComponent<React.FC>,
  fallback: string
) => (
  <React.Suspense fallback={<div>{fallback}</div>}>
    <Component />
  </React.Suspense>
);

export const router = createBrowserRouter([
  {
    element: <Providers />,
    children: [
      {
        path: "/",
        element: withSuspense(lazyHome, "is loading"),
      },
      {
        path: "/product-list",
        element: withSuspense(lazyProductList, "is loading"),
      },
    ],
  },
  {
    path: "/payment",
    element: withSuspense(lazyPayment, "is loading"),
  },
]);
