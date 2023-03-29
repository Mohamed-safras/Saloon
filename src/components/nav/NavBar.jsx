import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import SearchIcon from "@mui/icons-material/Search";
import { IconButton } from "@mui/material";
import React from "react";
import ProfilePic from "../../assets/styling-hair.jpg";
import {
  Image,
  NavContainer,
  NavLeft,
  NavRight,
  Profile,
  Role,
  UserDetails,
  UserName,
} from "./NavBar.styles";

const NavBar = () => {
  return (
    <NavContainer>
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
        <Profile>
          <Image type="profile">
            <img src={ProfilePic} alt="profile" />
          </Image>
          <UserDetails>
            <UserName>Safras</UserName>
            <Role>Owner</Role>
          </UserDetails>
        </Profile>
      </NavRight>
    </NavContainer>
  );
};

export default NavBar;
