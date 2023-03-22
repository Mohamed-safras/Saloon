import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../../components/nav/NavBar";
import SideBar from "../../components/sidebar/SideBar";
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
