import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import ContentCutIcon from "@mui/icons-material/ContentCut";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import EmailIcon from "@mui/icons-material/Email";
import MenuIcon from "@mui/icons-material/Menu";
import ReviewsIcon from "@mui/icons-material/Reviews";
import SettingsIcon from "@mui/icons-material/Settings";
import { IconButton } from "@mui/material";
import Lottie from "lottie-react";
import React from "react";
import dashboardAnimated from "../../assets/icons/dynamic-dashboard-icon.json";
import SaloonLogo from "../../assets/logo.webp";
import { Image } from "../../styles/image";
import Profile from "../Profile/Profile";
import {
  Container,
  LogoContainer,
  MenuBarWrapper,
  SideBarHeader,
  SideBarProfileWrapper,
} from "./SideBar.styles";
import SideBarItems from "./SideBarItems";

const style = {
  height: "100%",
  width: "100%",
};

const SideBar = ({ isSideBarOpen, toggleSideBar }) => {
  return (
    <Container isSideBarOpen={isSideBarOpen}>
      <SideBarHeader>
        <MenuBarWrapper onClick={toggleSideBar}>
          <IconButton>
            <MenuIcon />
          </IconButton>
        </MenuBarWrapper>

        <LogoContainer>
          <Image height={40} width={40}>
            <img style={{ borderRadius: "50%" }} src={SaloonLogo} alt="" />
          </Image>
          <h3>Salonly</h3>
        </LogoContainer>
      </SideBarHeader>

      <SideBarItems
        to={"/"}
        Icon={<DashboardOutlinedIcon />}
        title={"DashBoard"}
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
      />
      <SideBarItems to={"message"} title={"Message"} Icon={<EmailIcon />} />
      <SideBarItems to={"reviews"} title={"Reviews"} Icon={<ReviewsIcon />} />
      <SideBarItems
        to={"finances"}
        title={"Finances"}
        Icon={<AccountBalanceWalletIcon />}
      />
      <SideBarItems
        to={"settings"}
        title={"Settings"}
        Icon={<SettingsIcon />}
      />

      <SideBarProfileWrapper>
        <Profile />
      </SideBarProfileWrapper>
    </Container>
  );
};

export default SideBar;
