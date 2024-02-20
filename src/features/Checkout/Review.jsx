import * as React from "react";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Grid from "@mui/material/Grid";
import { useSelector } from "react-redux";
import { Divider } from "@mui/material";

export default function Review() {
  const { payment } = useSelector((state) => state.user);
  const { cart } = useSelector((state) => state.user);
  const [inforUser, setInforUser] = React.useState({
    fullName: "Nguyễn Xuân Phong",
    address: "Vĩnh Quỳnh, Thanh Trì",
    telephoneNumber: "0987654321",
    city: "Thành phố Hà Nội",
  });
  const payments = [
    { name: "Card type", detail: "Visa" },
    { name: "Card holder", detail: `Mr ${inforUser.fullName}` },
    {
      name: "Card number",
      detail: `xxxx-xxxx-xxxx-${payment.cardNumber.slice(-4)}`,
    },
    { name: "Expiry date", detail: `${payment.expDate}` },
  ];
  const addresses = [inforUser.address, inforUser.city];
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Order summary
      </Typography>
      <List disablePadding>
        {cart.items.map((product) => (
          <ListItem key={product.name} sx={{ py: 1, px: 0 }}>
            <ListItemText
              primary={product.name}
              secondary={`Quanity: x${product.count}`}
            />
            <Typography variant="body2">
              {product.totalPrice.toLocaleString("en-US", {
                style: "currency",
                currency: "USD",
              })}
            </Typography>
          </ListItem>
        ))}
        <Divider />
        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText primary="Shipping" />
          <Typography variant="subtitle1">
            {cart.totalCost >= 10000
              ? "Free"
              : (cart.totalCost * 0.05).toLocaleString("en-US", {
                  style: "currency",
                  currency: "USD",
                })}
          </Typography>
        </ListItem>
        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
            {cart.totalCost.toLocaleString("en-US", {
              style: "currency",
              currency: "USD",
            })}
          </Typography>
        </ListItem>
      </List>
      <Divider />
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Shipping
          </Typography>
          <Typography gutterBottom>{inforUser.fullName}</Typography>
          <Typography gutterBottom>{addresses.join(", ")}</Typography>
        </Grid>
        <Grid item container direction="column" xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Payment details
          </Typography>
          <Grid container>
            {payments.map((payment) => (
              <React.Fragment key={payment.name}>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.name}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.detail}</Typography>
                </Grid>
              </React.Fragment>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
