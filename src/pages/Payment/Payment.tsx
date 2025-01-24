import { Box, Grid2 } from "@mui/material";

const Payment = () => {
  return (
    <Grid2
      sx={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Box>
        <img src="payment.png" alt="payment" />
      </Box>
    </Grid2>
  );
};

export default Payment;
