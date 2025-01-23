import { ContainerProps, Container as MUIContainer } from "@mui/material";
import { memo } from "react";

export const Container = memo((props: ContainerProps) => (
  <MUIContainer {...props} />
));
