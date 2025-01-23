import React from "react";
import { createBrowserRouter } from "react-router-dom";

export const lazyHome = React.lazy(() => import("../pages/Home/Home"));
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
    path: "/",
    element: withSuspense(lazyHome, "is loading"),
  },
  {
    path: "/product-list",
    element: withSuspense(lazyProductList, "is loading"),
  },
]);
