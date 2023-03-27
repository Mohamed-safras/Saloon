import styled from "styled-components";
import { colors } from "../../styles/colors";

export const NavContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  background: ${colors.colorWhite};
  padding: 10px;
  position: sticky;
  top: 0px;
  z-index: 10;
  height: 60px;

  box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;
`;

export const NavRight = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
`;

export const MenuWrapper = styled.div`
  display: none;

  @media screen and (max-width: 600px) {
    display: block;
  }
`;
export const NavLeft = styled.div`
  h1 {
    font-size: 20px;
    font-weight: 500;
  }
`;

export const ProfileWrapper = styled.div`
  @media screen and (max-width: 600px) {
    display: none;
  }
`;
