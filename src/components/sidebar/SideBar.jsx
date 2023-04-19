import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import ContentCutIcon from "@mui/icons-material/ContentCut";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import { Avatar, IconButton } from "@mui/material";
import React from "react";
import SaloonLogo from "../../assets/logo.webp";
import { MenuWrapper } from "../Nav/NavBar.styles";
import Profile from "../Profile/Profile";
import {
  Container,
  LogoContainer,
  ProfileWrapper,
  SideBarHeaderWrapper,
} from "./SideBar.styles";
import SideBarItems from "./SideBarItems";
const SideBar = ({ isOpen, toggleSideBar }) => {
  return (
    <Container isOpen={isOpen}>
      <SideBarHeaderWrapper>
        <LogoContainer>
          <Avatar src={SaloonLogo} />
          <h3>Salonly</h3>
        </LogoContainer>
        <MenuWrapper onClick={toggleSideBar}>
          <IconButton>
            <MenuIcon sx={{ color: "#fff", fontSize: 28 }} />
          </IconButton>
        </MenuWrapper>
      </SideBarHeaderWrapper>
      <SideBarItems
        to={"/"}
        Icon={<DashboardOutlinedIcon />}
        title={"DashBoard"}
      />
      <SideBarItems
        to={"stylists"}
        title={"Stylists"}
        Icon={<ContentCutIcon />}
      />
      <SideBarItems
        to={"clients"}
        title={"Clients"}
        Icon={<AccountCircleOutlinedIcon />}
      />
      <SideBarItems
        to={"clients"}
        title={"Clients"}
        Icon={<AccountCircleOutlinedIcon />}
      />
      <SideBarItems
        to={"stylists"}
        title={"Stylists"}
        Icon={<ContentCutIcon />}
      />{" "}
      <SideBarItems
        to={"/"}
        Icon={<DashboardOutlinedIcon />}
        title={"DashBoard"}
      />
      <ProfileWrapper>
        <Profile />
      </ProfileWrapper>
    </Container>
  );
};

export default SideBar;
