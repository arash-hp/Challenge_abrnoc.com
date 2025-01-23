import {
  Button,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Card as MUICard,
  Typography,
} from "@mui/material";
import { FC, memo } from "react";
import { Product } from "../../pages/ProductList/services/types";

interface CardProps {
  item: Product;
}

export const Card: FC<CardProps> = memo(({ item }) => {
  return (
    <MUICard sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={`https://picsum.photos/200/${item.image}`}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
      </CardActions>
    </MUICard>
  );
});
