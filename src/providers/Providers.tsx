import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Outlet } from "react-router-dom";
import { Container } from "../components";
import { AppBar } from "../layouts";
import { Basket } from "../modules";

export const AppProviders = () => {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Basket>
        <AppBar />
        <Container>
          <Outlet />
        </Container>
      </Basket>
    </QueryClientProvider>
  );
};
