import { FormControl, TextField } from "@mui/material";
import React from "react";
import CountrySelect from "../../components/form/Country";
import { colors } from "../../styles/colors";
import { Form, RegisterContainer } from "./Register.style";

const Register = () => {
  return (
    <RegisterContainer>
      <Form>
        <TextField
          fullWidth
          type="text"
          margin="dense"
          size="small"
          id="outlined-controlled"
          label="Saloon Name"
        />
        <TextField
          type="email"
          margin="dense"
          size="small"
          id="outlined-controlled"
          label="Email"
        />
        <TextField
          margin="dense"
          size="small"
          type="password"
          id="outlined-controlled"
          label="Password"
        />
        <TextField
          type="password"
          margin="dense"
          size="small"
          id="outlined-controlled"
          label="Confirm Password"
        />
        <TextField
          margin="dense"
          size="small"
          id="outlined-controlled"
          label="phone"
          type="text"
        />
        <TextField
          margin="dense"
          size="small"
          id="outlined-controlled"
          label="phone"
          type="text"
        />
        <TextField
          margin="dense"
          size="small"
          id="outlined-controlled"
          label="Address Line 1"
          type="text"
        />
        <TextField
          margin="dense"
          size="small"
          id="outlined-controlled"
          label="Address Line 2"
          type="text"
        />
        <TextField
          margin="dense"
          size="small"
          id="outlined-controlled"
          label="city"
          type="text"
        />
        <TextField
          margin="dense"
          size="small"
          id="outlined-controlled"
          label="Zip/Postal Code"
          type="text"
        />
        <CountrySelect />
      </Form>
    </RegisterContainer>
  );
};

export default Register;
