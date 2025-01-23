import { Theme, SxProps as MUISxProps } from "@mui/material";

type SxProps = MUISxProps<Theme>;
export type SxRecord<T extends string> = Record<T, SxProps>;
