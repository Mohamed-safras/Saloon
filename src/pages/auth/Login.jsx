import { Button, TextField } from "@mui/material";
import React from "react";
import useInputHandler from "../../hooks/InputHandler";
import useAuthHandler from "../../hooks/user.auth";
import { colors } from "../../styles/colors";

const InitialState = {
  email: "",
  password: "",
};

const Login = () => {
  const { handleInput, formInput } = useInputHandler(InitialState);
  const { login, loading } = useAuthHandler(formInput);
  return (
    <form onSubmit={login}>
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
        type="password"
        margin="dense"
        size="small"
        label="Password"
        name="password"
        onChange={handleInput}
        value={formInput.password}
      />
      <Button
        sx={{ background: `${colors.colorBlack}` }}
        variant="contained"
        type="submit"
      >
        {loading ? "Loading..." : "SIGNIN"}
      </Button>
    </form>
  );
};

export default Login;
