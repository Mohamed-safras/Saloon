import styled from "styled-components";
import { colors } from "../../styles/colors";

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  background: ${colors.colorBlack};
  height: 100vh;
  color: ${colors.colorWhite};
  width: 300px;
  padding: 0 10px;
  overflow-y: scroll;

  transition: all 0.2s ease-in;
  border-right: 2px solid ${colors.colorWhite};

  @media screen and (max-width: 1000px) {
    width: 80px;
  }

  ::-webkit-scrollbar {
    display: none;
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  height: 60px;
  margin-bottom: 10px;
  /* margin-top: 15px; */
  transition: all 0.2 ease-in;
  border-bottom: 2px solid ${colors.colorWhite};
  position: sticky;
  top: 0px;
  z-index: 100;
  background: ${colors.colorBlack};
  h3 {
    margin: 10px;
  }

  @media screen and (max-width: 1000px) {
    justify-content: center;
    h3 {
      display: none;
    }
  }
`;
