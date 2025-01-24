import { Theme, SxProps as MUISxProps } from "@mui/material";

type SxProps = MUISxProps<Theme>;
export type SxRecord<T extends string> = Record<T, SxProps>;

export interface Product {
  qty: number;
  name: string;
  price: number;
  stock: number;
  image: string;
  id: string;
  productId: string;
}
