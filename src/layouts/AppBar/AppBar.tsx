import {
  Box,
  Button,
  AppBar as MUI_AppBar,
  Toolbar,
  Typography,
} from "@mui/material";
import { memo } from "react";

const navItems = ["Products", "About", "Contact"];

export const AppBar = memo(() => {
  return (
    <Box sx={{ display: "flex" }}>
      <MUI_AppBar component="nav">
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            MUI
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map((item) => (
              <Button key={item} sx={{ color: "#fff" }}>
                {item}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </MUI_AppBar>
    </Box>
  );
});
