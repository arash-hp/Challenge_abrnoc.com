import {
  Box,
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
import { Product } from "../services/types";
import DeleteIcon from "@mui/icons-material/Delete";

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

function priceRow(qty: number, unit: number) {
  return qty * unit;
}

function createRow(desc: string, qty: number, unit: number) {
  const price = priceRow(qty, unit);
  return { desc, qty, unit, price };
}

// interface Row {
//   desc: string;
//   qty: number;
//   unit: number;
//   price: number;
// }

function subtotal(items: readonly Product[]) {
  return items?.map(({ price }) => price).reduce((sum, i) => sum + i, 0);
}

// const rows = [
//   createRow("Paperclips (Box)", 100, 1.15),
//   createRow("Paper (Case)", 10, 45.99),
//   createRow("Waste Basket", 2, 17.99),
// ];

export default function SpanningTable() {
  const { basket, deleteItem } = useBasketContext();
  const invoiceSubtotal = useMemo(
    () => (basket && subtotal(basket)) || 0,
    [basket]
  );

  console.log("table", invoiceSubtotal);
  return (
    <>
      {!basket?.length ? (
        <Box component={Paper} p={2}>
          Nothinnnnnnnnnnnnnnnng
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
                  <TableCell align="right">{row.qty}</TableCell>
                  <TableCell align="right">{row.price}</TableCell>
                  <TableCell align="right">
                    {ccyFormat(row.price)}
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
                <TableCell rowSpan={3} />
                <TableCell colSpan={2}>Subtotal</TableCell>
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
