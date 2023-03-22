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
  z-index: 100;
  /* border-radius: 15px; */
  height: 60px;

  box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;
`;

export const NavRight = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  /* justify-content: space-between; */
  width: 100%;
`;

export const NavLeft = styled.div`
  width: 100%;
  h1 {
    font-size: 20px;
    font-weight: 500;
  }
`;
export const Profile = styled.div`
  display: flex;
  align-items: center;
`;

export const UserDetails = styled.div`
  margin: 0 10px;
`;
export const Role = styled.span`
  font-size: 14px;
`;
export const UserName = styled.h1`
  font-size: 16px;
  font-weight: 500;
`;
export const Image = styled.div`
  height: ${({ type }) => (type === "profile" ? "40px" : "50px")};
  width: ${({ type }) => (type === "profile" ? "40px" : "50px")};
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;

    border-radius: ${({ type }) => (type === "profile" ? "50%" : "10px")};
  }
`;
