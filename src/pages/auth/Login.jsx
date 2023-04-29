import { Alert, Button, TextField } from "@mui/material";

import Banners from "../../components/Banner/Banners";
import useInputHandler from "../../hooks/InputHandler";
import useAuthHandler from "../../hooks/user.auth";
import { colors } from "../../styles/colors";

import SaloonLogo from "../../assets/logo.webp";

import {
  BannerContainer,
  Container,
  Form,
  FormContainer,
  Logo,
} from "./auth.styles";
import { bannerdata } from "./Banner";

const InitialState = {
  email: "",
  password: "",
};

const Login = () => {
  const { handleInput, formInput } = useInputHandler(InitialState);
  const { login, loading, error, setError } = useAuthHandler(formInput);

  return (
    <Container>
      <BannerContainer>
        <Banners banners={bannerdata} />
      </BannerContainer>
      <FormContainer>
        <Logo style={{ margin: 10 }} height={150} width={150}>
          <img src={SaloonLogo} alt="logo" />
        </Logo>
        <h3>Welcome to Salooony</h3>

        {error && (
          <Alert
            sx={{ margin: "10px", width: "100%" }}
            onClose={() => setError("")}
            severity="error"
          >
            {error}
          </Alert>
        )}
        <Form onSubmit={login}>
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
            fullWidth
          >
            {loading ? "Loading..." : "SIGNIN"}
          </Button>
        </Form>
      </FormContainer>
    </Container>
  );
};

export default Login;
