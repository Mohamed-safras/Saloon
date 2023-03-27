import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import OverLay from "../../components/ModelOverLay/OverLay";
import NavBar from "../../components/nav/NavBar";
import SideBar from "../../components/Sidebar/SideBar";
import { Body, Container } from "./Shared.styles";
const SharedLayOut = () => {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);

  const toggleSideBar = () => {
    setIsSideBarOpen((prev) => !prev);
  };

  return (
    <Container>
      <SideBar isSideBarOpen={isSideBarOpen} toggleSideBar={toggleSideBar} />

      <Body>
        <NavBar isSideBarOpen={isSideBarOpen} toggleSideBar={toggleSideBar} />
        <Outlet />
      </Body>
    </Container>
  );
};

export default SharedLayOut;
