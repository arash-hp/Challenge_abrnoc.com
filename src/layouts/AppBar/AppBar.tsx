import {
  Box,
  Button,
  AppBar as MUI_AppBar,
  Toolbar,
  Typography,
} from "@mui/material";
import { memo } from "react";
import { useNavigate } from "react-router-dom";
import { styles } from "./styles";

const navItems = [
  {
    label: "Home",
    path: "/",
  },
  {
    label: "Products",
    path: "product-list",
  },
];

export const AppBar = memo(() => {
  const navigate = useNavigate();
  return (
    <MUI_AppBar component="nav" position="sticky">
      <Toolbar>
        <Typography variant="h6" component="div" flex={1}>
          MUI
        </Typography>
        <Box>
          {navItems.map((item, index) => (
            <Button
              onClick={() => navigate(item.path)}
              key={index}
              sx={styles.button}
            >
              {item.label}
            </Button>
          ))}
        </Box>
      </Toolbar>
    </MUI_AppBar>
  );
});
