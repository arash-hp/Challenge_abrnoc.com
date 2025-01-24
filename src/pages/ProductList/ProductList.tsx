import { Grid2 } from "@mui/material";
import { Card } from "../../components";
import { useGetProducts } from "./services";

const ProductList = () => {
  const { data } = useGetProducts();
  return (
    <Grid2 container spacing={2} justifyContent="space-between" p={4}>
      {data?.map((item) => (
        <Card key={item.id} item={item} />
      ))}
    </Grid2>
  );
};

export default ProductList;
