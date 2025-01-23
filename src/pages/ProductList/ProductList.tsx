import { Card } from "../../components";
import { useGetProducts } from "./services";

const ProductList = () => {
  const { data } = useGetProducts();
  console.log("res", data);
  return (
    <>
      {data?.map((item) => (
        <Card key={item.id} item={item} />
      ))}
    </>
  );
};

export default ProductList;
