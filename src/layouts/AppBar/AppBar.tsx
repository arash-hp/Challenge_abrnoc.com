import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import {
  Badge,
  Box,
  Button,
  IconButton,
  AppBar as MUI_AppBar,
  Toolbar,
} from "@mui/material";
import { memo } from "react";
import { useNavigate } from "react-router-dom";
import { Container } from "../../components";
import { useBasketContext } from "../../modules/Basket/context/BasketContext";
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
  const { basket, toggleModal } = useBasketContext();
  const navigate = useNavigate();

  return (
    <MUI_AppBar component="nav" position="sticky">
      <Container>
        <Toolbar>
          <Box sx={styles.logo}>
            <img src="/logo.svg" alt="Logo" />
          </Box>

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
          <IconButton size="large" color="inherit" onClick={toggleModal}>
            <Badge badgeContent={basket?.length} color="error">
              <AddShoppingCartIcon />
            </Badge>
          </IconButton>
        </Toolbar>
      </Container>
    </MUI_AppBar>
  );
});
