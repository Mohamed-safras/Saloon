import styled from "styled-components";
import { colors } from "../../styles/colors";

export const RegisterContainer = styled.div`
  display: flex;
  /* margin: 0 10px; */
  align-items: flex-start;
  justify-content: center;
  height: 100vh;
`;

export const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  width: 100%;

  @media screen and (max-width: 450px) {
    grid-template-columns: 1fr;
  }

  .MuiFormControl-root {
    margin: 0px !important;
  }

  .MuiAutocomplete-root .MuiFormControl-root .MuiInputBase-root {
    height: 40px;
    padding: 0 !important;
    margin: 0 !important;
  }
`;

export const BannerContainer = styled.div`
  width: 50%;
  height: 100%;
  background-color: red;
  display: flex;
  padding: 0px 40px;
  align-items: center;
  justify-content: center;
  background: ${colors.colorBlack};

  @media screen and (max-width: 850px) {
    display: none;
  }
`;

export const FormContainer = styled.div`
  padding: 0 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100%;
  width: 100%;

  h3 {
    font-size: 20px;
    font-weight: bold;
    text-transform: uppercase;
    color: ${colors.colorBlack};
    margin: 10px;
  }

  @media screen and (max-width: 450px) {
    justify-content: flex-start;
    height: 100vh;
    padding: 0 20px;

    h3 {
      font-size: 16px;
    }
  }
`;
