import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import ContentCutIcon from "@mui/icons-material/ContentCut";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import React from "react";
import SaloonLogo from "../../assets/logo.webp";
import { Logo } from "../../pages/auth/Register.style";
import { Container, LogoContainer } from "./SideBar.styles";
import SideBarItems from "./SideBarItems";
const SideBar = () => {
  return (
    <Container>
      <LogoContainer>
        <Logo height={40} width={40}>
          <img style={{ borderRadius: "50%" }} src={SaloonLogo} alt="" />
        </Logo>
        <h3>Salonly</h3>
      </LogoContainer>
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
        to={"clients"}
        title={"Clients"}
        Icon={<AccountCircleOutlinedIcon />}
      />
      <SideBarItems
        to={"stylists"}
        title={"Stylists"}
        Icon={<ContentCutIcon />}
      />
    </Container>
  );
};

export default SideBar;
