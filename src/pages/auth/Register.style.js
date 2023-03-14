import styled from "styled-components";

export const RegisterContainer = styled.div`
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 100%;
  gap: 10px;
  @media screen and (max-width: 678px) {
    grid-template-columns: 1fr;
  }
`;
