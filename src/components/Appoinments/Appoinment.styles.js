import styled from "styled-components";
import { colors } from "../../styles/colors";

export const AppoinmentsWrapper = styled.div`
  flex: 0.3;
  height: 100%;
  @media screen and (max-width: 1100px) {
    flex: 0.5;
  }
`;

export const AppoinmentsContainer = styled.div`
  background: ${colors.colorWhite};
  border-radius: 10px;
  padding: 10px;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;

  h3 {
    font-weight: 500;
    font-size: 15px;
    margin: 10px;
  }
`;

export const AppoinmentsCards = styled.div`
  gap: 10px;
  display: flex;
  flex-direction: column;
`;

export const FinancialAppoinmentWrapper = styled.div`
  display: none;

  @media screen and (max-width: 1100px) {
    display: block;
  }
`;