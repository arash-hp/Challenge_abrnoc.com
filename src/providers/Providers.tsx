import { Outlet } from "react-router-dom";
import { AppBar } from "../layouts";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export const Providers = () => {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <AppBar />
      <Outlet />
    </QueryClientProvider>
  );
};
