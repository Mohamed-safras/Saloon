import React from "react";
import { ClientsContainer } from "./clients.styles";

import Background from "../../assets/clientbackground.jpg";

import BannerBackground from "../../components/Banner/BannerBackground";

const Clients = () => {
  return (
    <ClientsContainer>
      <BannerBackground Background={Background} />
    </ClientsContainer>
  );
};

export default Clients;
