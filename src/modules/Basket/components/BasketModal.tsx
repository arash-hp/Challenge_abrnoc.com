import {
  Box,
  Button,
  IconButton,
  Modal,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { useBasketContext } from "../context/BasketContext";
import { styles } from "./styles";
import { useCallback, useMemo } from "react";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import DeleteIcon from "@mui/icons-material/Delete";
import { Product } from "../../../types/general";
import { useNavigate } from "react-router-dom";

export const BasketModal = () => {
  const { toggleModal, openModal } = useBasketContext();
  return (
    <Modal
      open={openModal}
      onClose={toggleModal}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={styles.modal}>
        <SpanningTable />
      </Box>
    </Modal>
  );
};

function ccyFormat(num: number) {
  return `${num.toFixed(2)}`;
}

function priceRow(qty: number, price: number) {
  return qty * price;
}

// interface Row {
//   desc: string;
//   qty: number;
//   unit: number;
//   price: number;
// }

// const rows = [
//   createRow("Paperclips (Box)", 100, 1.15),
//   createRow("Paper (Case)", 10, 45.99),
//   createRow("Waste Basket", 2, 17.99),
// ];

function subtotal(items: Product & { totalRow: number }[]) {
  return items?.map(({ totalRow }) => totalRow).reduce((sum, i) => sum + i, 0);
}

function createRow(name: string, qty: number, price: number) {
  const totalRow = priceRow(qty, price);
  return { name, qty, price, totalRow };
}

export default function SpanningTable() {
  const { basket, deleteItem, increaseQty, decreaseQty } = useBasketContext();

  const rows = basket?.map((item) =>
    createRow(item.name, item.qty, item.price)
  );

  const invoiceSubtotal = rows && subtotal(rows);

  console.log("table", rows, invoiceSubtotal);
  const navigate = useNavigate();
  const onPayment = useCallback(() => navigate("payment"), [navigate]);

  return (
    <>
      {!basket?.length ? (
        <Box component={Paper} p={2}>
          Your basket is currently empty. Start adding items to explore our
          amazing products!
        </Box>
      ) : (
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="spanning table">
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell align="right">qty</TableCell>
                <TableCell align="right">price</TableCell>
                <TableCell align="right">total</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {basket?.map((row) => (
                <TableRow key={row.id}>
                  <TableCell>{row.name}</TableCell>
                  <TableCell align="right">
                    <IconButton
                      onClick={() => decreaseQty(row.id, row.qty)}
                      disabled={row.qty === 1}
                    >
                      <RemoveCircleIcon />
                    </IconButton>
                    {row.qty}
                    <IconButton onClick={() => increaseQty(row.id, row.qty)}>
                      <AddCircleIcon />
                    </IconButton>
                  </TableCell>
                  <TableCell align="right">{row.price}</TableCell>
                  <TableCell align="right">
                    {priceRow(row.price, row.qty)}
                    <IconButton
                      onClick={() => deleteItem(row.id)}
                      color="error"
                    >
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
              <TableRow>
                <TableCell>
                  <Button variant="outlined" onClick={onPayment}>
                    continue to payment
                  </Button>
                </TableCell>
                <TableCell>Subtotal</TableCell>
                <TableCell align="right">
                  {ccyFormat(invoiceSubtotal)}
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </>
  );
}
