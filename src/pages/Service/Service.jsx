import AddCircleIcon from "@mui/icons-material/AddCircle";
import React, { useState } from "react";
import Background from "../../assets/service_background.jpg";
import BannerBackground from "../../components/Banner/BannerBackground";
import Model from "../../components/ModelOverLay/Model";
import OverLay from "../../components/ModelOverLay/OverLay";

import AddService from "../../components/Services/AddService";
import ServiceItems from "../../components/Services/ServiceItems";
import { Button } from "../Staff/staff.styles";
import { ServiceContainer } from "./service.styles";
const Service = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleModel = () => setIsOpen(!isOpen);

  return (
    <ServiceContainer>
      <BannerBackground Background={Background}>
        <Button onClick={toggleModel}>
          <AddCircleIcon /> <span>add service</span>
        </Button>
      </BannerBackground>

      {!isOpen && (
        <Model toggleModel={toggleModel}>
          <AddService />
        </Model>
      )}
      {!isOpen && <OverLay />}
      <ServiceItems />
    </ServiceContainer>
  );
};

export default Service;
