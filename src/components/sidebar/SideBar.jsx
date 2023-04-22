import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import ContentCutIcon from "@mui/icons-material/ContentCut";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import LogoutIcon from "@mui/icons-material/Logout";
import { Avatar, IconButton } from "@mui/material";
import React from "react";
import SaloonLogo from "../../assets/logo.webp";
import useLogOut from "../../hooks/user.logout";
import Profile from "../Profile/Profile";
import {
  Container,
  LogOutWrapper,
  LogoContainer,
  ProfileWrapper,
  SideBarItemWrapper,
  SidebarBottomWrapper,
} from "./SideBar.styles";
import SideBarItems from "./SideBarItems";
const SideBar = ({ isOpen, toggleSideBar }) => {
  const { LogOut } = useLogOut();

  return (
    <Container isOpen={isOpen}>
      <LogoContainer>
        <Avatar sx={{ width: 35, height: 35 }} src={SaloonLogo} />
        <h3>Salonly</h3>
      </LogoContainer>

      <SideBarItemWrapper>
        {" "}
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
      </SideBarItemWrapper>
      <SidebarBottomWrapper>
        <ProfileWrapper>
          <Profile />
        </ProfileWrapper>
        <LogOutWrapper>
          <IconButton onClick={LogOut}>
            <LogoutIcon sx={{ fontSize: 26, color: "#344154" }} />
          </IconButton>
        </LogOutWrapper>
      </SidebarBottomWrapper>
    </Container>
  );
};

export default SideBar;
