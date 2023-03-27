import { Link } from "react-router-dom";
import styled from "styled-components";
import { colors } from "../../styles/colors";

export const SideBarItem = styled(Link)`
  margin-bottom: 8px;
  padding: 10px;
  border-radius: 10px;
  height: 40px;
  display: flex;
  align-items: center;
  width: 100%;

  background: ${({ active, title }) =>
    active === title ? `${colors.colorPrimary}` : `${colors.colorGray}`};
  color: ${({ active, title }) =>
    active === title ? `${colors.colorWhite}` : `${colors.colorPrimary}`};
  h1 {
    font-size: 18px;
    font-weight: 500;
    margin-left: 10px;
    font-size: 15px;
  }

  @media screen and (max-width: 1000px) {
    justify-content: center;
    h1 {
      display: none;
    }
  }
  @media screen and (max-width: 600px) {
    justify-content: flex-start;
    h1 {
      display: block;
    }
  }
`;
