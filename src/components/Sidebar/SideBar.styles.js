import styled from "styled-components";
import { colors } from "../../styles/colors";

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  background: ${colors.colorWhite};
  height: 100vh;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;
  color: ${colors.colorBlack};
  width: 300px;
  padding: 0 10px;
  overflow-y: scroll;
  transition: all 0.05s linear;

  transform: translate(0);
  @media screen and (max-width: 1000px) {
    width: 80px;
  }

  @media screen and (max-width: 600px) {
    transform: ${({ isSideBarOpen }) =>
      !isSideBarOpen ? "translateX(-100%)" : "translateX(0%)"};
    width: 60%;
    z-index: 100;
  }

  ::-webkit-scrollbar {
    display: none;
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  h3 {
    margin: 10px;
  }

  @media screen and (max-width: 1000px) {
    justify-content: center;
    h3 {
      display: none;
    }
  }

  @media screen and (max-width: 600px) {
    justify-content: flex-start;
    h3 {
      display: block;
    }
  }
`;

export const SideBarProfileWrapper = styled.div`
  display: none;
  @media screen and (max-width: 600px) {
    display: block;
    padding: 0 10px;
  }
`;

export const SideBarHeader = styled.div`
  height: 60px;
  margin-bottom: 8px;
  border-bottom: 2px solid ${colors.colorPrimary};
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: sticky;
  top: 0px;
  z-index: 100;
  transition: all 0.2 ease-in;
  /* padding: 0 10px; */
  background: ${colors.colorWhite};

  @media screen and (max-width: 1000px) {
    justify-content: center;
  }
  @media screen and (max-width: 600px) {
    justify-content: space-between;
  }
`;

export const MenuBarWrapper = styled.div`
  display: none;
  @media screen and (max-width: 600px) {
    display: block;
  }
`;
