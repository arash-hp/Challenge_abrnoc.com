import {
  Box,
  Button,
  CardActionArea,
  CardContent,
  CardMedia,
  Card as MUICard,
  Typography,
} from "@mui/material";
import { FC, memo, useCallback } from "react";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { useBasketContext } from "../../modules/Basket/context/BasketContext";
import { Product } from "../../types/general";
interface CardProps {
  item: Product;
}

export const Card: FC<CardProps> = memo(({ item }) => {
  const { addItem, basket } = useBasketContext();
  const isSelected = basket?.find((obj) => obj.productId == item.id);

  const onClick = useCallback(() => {
    addItem(item);
  }, [addItem, item]);
  return (
    <MUICard sx={{ width: 300 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={`https://picsum.photos/600/${item.image}`}
          alt={item.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {item.name}
          </Typography>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography variant="h5" sx={{ color: "text.secondary" }}>
              $ {item.price}
            </Typography>
            <Button
              onClick={onClick}
              variant="contained"
              size="small"
              color="primary"
              endIcon={<AddShoppingCartIcon />}
              disabled={!!isSelected}
            >
              Add to Cart
            </Button>
          </Box>
        </CardContent>
      </CardActionArea>
    </MUICard>
  );
});
