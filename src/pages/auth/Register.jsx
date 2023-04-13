import { Alert, Button, TextField } from "@mui/material";
import React from "react";

import SaloonLogo from "../../assets/logo.webp";
import Banners from "../../components/Banner/Banners";
import CountrySelect from "../../components/MaterialUIComponent/Country";
import useInputHandler from "../../hooks/InputHandler";
import useAuthHandler from "../../hooks/user.auth";

import { colors } from "../../styles/colors";
import {
  BannerContainer,
  Form,
  FormContainer,
  Logo,
  RegisterContainer,
} from "./Register.style";

export const InitialState = {
  title: "",
  email: "",
  password: "",
  confirmPassword: "",
  phone: "",
  shopNo: "",
  street: "",
  city: "",
  zip: "",
};

const Register = () => {
  const { handleInput, formInput } = useInputHandler(InitialState);
  const { register, error, loading } = useAuthHandler(formInput);

  return (
    <RegisterContainer>
      <BannerContainer>
        <Banners />
      </BannerContainer>
      <FormContainer>
        <h3>Get Started Now</h3>
        <Logo style={{ margin: 10 }} height={150} width={150}>
          <img src={SaloonLogo} alt="logo" />
        </Logo>
        {error && <Alert severity="error">{error}</Alert>}
        <Form onSubmit={register}>
          <TextField
            fullWidth
            type="text"
            margin="dense"
            size="small"
            label="Saloon Name"
            name="title"
            onChange={handleInput}
            value={formInput.title}
          />
          <TextField
            fullWidth
            type="email"
            margin="dense"
            size="small"
            label="Email"
            name="email"
            onChange={handleInput}
            value={formInput.email}
          />
          <TextField
            fullWidth
            margin="dense"
            size="small"
            type="password"
            label="Password"
            name="password"
            onChange={handleInput}
            value={formInput.password}
          />
          <TextField
            fullWidth
            type="password"
            margin="dense"
            size="small"
            label="Confirm Password"
            name="confirmPassword"
            onChange={handleInput}
            value={formInput.confirmPassword}
          />
          <TextField
            fullWidth
            margin="dense"
            size="small"
            label="phone"
            type="text"
            name="phone"
            onChange={handleInput}
            value={formInput.phone}
          />
          <TextField
            fullWidth
            margin="dense"
            size="small"
            label="Shop No"
            type="text"
            name="shopNo"
            onChange={handleInput}
            value={formInput.shopNo}
          />
          <TextField
            fullWidth
            margin="dense"
            size="small"
            label="Street"
            type="text"
            name="street"
            onChange={handleInput}
            value={formInput.street}
          />

          <TextField
            fullWidth
            margin="dense"
            size="small"
            label="city"
            type="text"
            name="city"
            onChange={handleInput}
            value={formInput.city}
          />
          <TextField
            fullWidth
            margin="dense"
            size="small"
            label="Zip/Postal Code"
            type="text"
            name="zip"
            onChange={handleInput}
            value={formInput.zip}
          />

          <CountrySelect />
          <Button
            sx={{ background: `${colors.colorBlack}` }}
            variant="contained"
            type="submit"
          >
            {loading ? "Loading..." : "SIGNUP"}
          </Button>
        </Form>
      </FormContainer>
    </RegisterContainer>
  );
};

export default Register;
