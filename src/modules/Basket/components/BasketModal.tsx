import AddCircleIcon from "@mui/icons-material/AddCircle";
import DeleteIcon from "@mui/icons-material/Delete";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import {
  Box,
  Button,
  CircularProgress,
  IconButton,
  Modal,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { Product } from "../../../types/general";
import { useBasketContext } from "../context/BasketContext";
import { styles } from "./styles";

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

function priceRow(qty: number, price: number) {
  return qty * price;
}

function calculateTotal(items: Product[]) {
  return items.reduce((sum, { qty, price }) => priceRow(qty, price) + sum, 0);
}

export default function SpanningTable() {
  const {
    basket,
    deleteItem,
    increaseQty,
    decreaseQty,
    isPending,
    itemIdInprogress,
  } = useBasketContext();

  const invoiceSubtotal = basket ? calculateTotal(basket) : 0;

  const navigate = useNavigate();
  const onPayment = useCallback(() => navigate("payment"), [navigate]);

  return (
    <>
      {!basket?.length ? (
        <Box component={Paper} p={2}>
          <Typography>
            Your basket is currently empty. Start adding items to explore our
            amazing products!
          </Typography>
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
                    {itemIdInprogress === row.id ? (
                      <CircularProgress size="30px" />
                    ) : (
                      <>
                        <IconButton
                          onClick={() => decreaseQty(row.id, row.qty)}
                          disabled={row.qty <= 1 || isPending}
                        >
                          <RemoveCircleIcon />
                        </IconButton>
                        {row.qty}
                        <IconButton
                          onClick={() => increaseQty(row.id, row.qty)}
                          disabled={isPending}
                        >
                          <AddCircleIcon />
                        </IconButton>
                      </>
                    )}
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
                <TableCell>
                  <Typography variant="subtitle1">Total</Typography>
                </TableCell>
                <TableCell align="right">
                  <Typography variant="h5">${invoiceSubtotal}</Typography>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </>
  );
}
