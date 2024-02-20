import * as React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import { useDispatch, useSelector } from "react-redux";
import { changeInforPayment } from "../Auth/userSlice";

export default function PaymentForm({ onChange }) {
  const dispatch = useDispatch();
  const { payment } = useSelector((state) => state.user);
  const [inforPayment, setInforPayment] = React.useState(payment);
  const handleChangeInfor = (e, field) => {
    const valueChange = e.target.value;
    const newInforPayment = {
      ...inforPayment,
      [field]: valueChange,
    };
    setInforPayment(newInforPayment);
    dispatch(changeInforPayment({ newInforPayment }));
  };

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Payment method
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cardName"
            label="Name on card"
            fullWidth
            autoComplete="cc-name"
            variant="standard"
            value={inforPayment.cardName}
            onChange={(e) => handleChangeInfor(e, "cardName")}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cardNumber"
            label="Card number"
            fullWidth
            autoComplete="cc-number"
            variant="standard"
            value={inforPayment.cardNumber}
            onChange={(e) => handleChangeInfor(e, "cardNumber")}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="expDate"
            value={inforPayment.expDate}
            label="Expiry date"
            fullWidth
            autoComplete="cc-exp"
            variant="standard"
            onChange={(e) => handleChangeInfor(e, "expDate")}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cvv"
            label="CVV"
            helperText="Last three digits on signature strip"
            fullWidth
            value={inforPayment.cvv}
            autoComplete="cc-csc"
            variant="standard"
            onChange={(e) => handleChangeInfor(e, "cvv")}
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
