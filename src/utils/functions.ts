import { useQueryClient } from "@tanstack/react-query";
import { useCallback } from "react";

export const useInvalidateAccountTreeData = (queryKey: string) => {
  const queryClient = useQueryClient();
  const invalidate = useCallback(
    () => queryClient.invalidateQueries({ queryKey: [queryKey] }),
    [queryClient, queryKey]
  );
  return invalidate;
};
