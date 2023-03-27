import MenuIcon from "@mui/icons-material/Menu";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import SearchIcon from "@mui/icons-material/Search";
import { IconButton } from "@mui/material";
import React from "react";
import Profile from "../Profile/Profile";

import {
  MenuWrapper,
  NavContainer,
  NavLeft,
  NavRight,
  ProfileWrapper,
} from "./NavBar.styles";
const NavBar = ({ toggleSideBar }) => {
  return (
    <NavContainer>
      <MenuWrapper>
        <IconButton onClick={toggleSideBar}>
          <MenuIcon />
        </IconButton>
      </MenuWrapper>

      <NavLeft>
        <h1>Overview</h1>
      </NavLeft>
      <NavRight>
        <IconButton>
          <SearchIcon />
        </IconButton>
        <IconButton>
          <NotificationsNoneOutlinedIcon />
        </IconButton>
        <ProfileWrapper>
          <Profile />
        </ProfileWrapper>
      </NavRight>
    </NavContainer>
  );
};

export default NavBar;
