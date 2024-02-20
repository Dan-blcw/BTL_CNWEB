import React, { useState } from "react";

import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";

import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import axios from "axios";
import { useSelector } from "react-redux";

export default function InforUserForm({ onChange }) {
  const {information} = useSelector(state => state.user)
  const [inforUser, setInforUser] = useState(information);

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Shipping address
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            required
            id="fullName"
            name="fullName"
            label="Full name"
            fullWidth
            autoComplete="given-name"
            variant="standard"
            value={inforUser.fullName}
            onChange={(e) => {
              const newFullName = e.target.value;
              setInforUser((prevInfor) => ({
                ...prevInfor,
                fullName: newFullName,
              }));
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="telephoneNumber"
            name="state"
            label="Telephone number"
            fullWidth
            variant="standard"
            value={inforUser.telephoneNumber}
            onChange={(e) => {
              const newTelphone = e.target.value;
              setInforUser((prevInfor) => ({
                ...prevInfor,
                telephoneNumber: newTelphone,
              }));
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="address"
            name="address"
            label="Address"
            fullWidth
            autoComplete="shipping address-line"
            variant="standard"
            value={inforUser.address}
            onChange={(e) => {
              const newAddress = e.target.value;
              setInforUser((prevInfor) => ({
                ...prevInfor,
                address: newAddress,
              }));
            }}
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
