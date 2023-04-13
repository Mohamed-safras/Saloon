import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../../components/Nav/NavBar";
import SideBar from "../../components/Sidebar/SideBar";
import { Body, Container } from "./Shared.styles";
const SharedLayOut = () => {
  return (
    <Container>
      <SideBar />
      <Body>
        <NavBar />
        <Outlet />
      </Body>
    </Container>
  );
};

export default SharedLayOut;
