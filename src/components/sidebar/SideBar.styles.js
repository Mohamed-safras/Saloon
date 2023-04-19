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
  transition: all 150ms ease-in-out;
  @media screen and (max-width: 1000px) {
    width: 80px;
  }

  ::-webkit-scrollbar {
    display: none;
  }

  @media screen and (max-width: 600px) {
    width: 240px;

    z-index: 100;
    transform: ${({ isOpen }) =>
      isOpen ? "translateX(-100%)" : "translateX(0%)"};
  }
`;

export const SideBarHeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  height: 60px;
  margin-bottom: 10px;
  transition: all 150ms ease-in-out;
  border-bottom: 2px solid ${colors.colorWhite};
  position: sticky;
  top: 0px;
  z-index: 100;
  background: ${colors.colorBlack};
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;

  transition: all 150ms ease-in-out;

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

export const ProfileWrapper = styled.div`
  display: none;

  @media screen and (max-width: 600px) {
    display: block;
    margin: 20px 0;
  }
`;
