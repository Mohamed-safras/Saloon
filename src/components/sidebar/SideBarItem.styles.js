import { Link } from "react-router-dom";
import styled from "styled-components";
import { colors } from "../../styles/colors";

export const SideBarItem = styled(Link)`
  margin-bottom: 10px;
  padding: 10px;
  border-radius: 10px;
  height: 40px;
  display: flex;
  align-items: center;
  width: 100%;

  background: ${colors.colorWhite};
  color: ${colors.colorBlack};
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
