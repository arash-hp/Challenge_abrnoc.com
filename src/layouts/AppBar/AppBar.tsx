import {
  Badge,
  Box,
  Button,
  IconButton,
  AppBar as MUI_AppBar,
  Toolbar,
  Typography,
} from "@mui/material";
import { memo } from "react";
import { useNavigate } from "react-router-dom";
import { styles } from "./styles";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { Container } from "../../components";
import { useBasketContext } from "../../modules/Basket/context/BasketContext";

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
  const { basket } = useBasketContext();
  const navigate = useNavigate();
  return (
    <MUI_AppBar component="nav" position="sticky">
      <Container>
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
          <IconButton
            size="large"
            aria-label="show 17 new notifications"
            color="inherit"
          >
            <Badge badgeContent={basket?.length} color="error">
              <AddShoppingCartIcon />
            </Badge>
          </IconButton>
        </Toolbar>
      </Container>
    </MUI_AppBar>
  );
});
