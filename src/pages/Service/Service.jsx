import AddCircleIcon from "@mui/icons-material/AddCircle";
import SaveIcon from "@mui/icons-material/Save";
import React, { useState } from "react";
import Background from "../../assets/service_background.jpg";
import BannerBackground from "../../components/Banner/BannerBackground";
import Model from "../../components/ModelOverLay/Model";
import OverLay from "../../components/ModelOverLay/OverLay";
import ServiceItems from "../../components/Services/ServiceItems";
import AddModel from "../../components/Services/index";
import { Button } from "../Staff/staff.styles";
import { ServiceContainer } from "./service.styles";
const Service = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [service, setService] = useState([]);
  const toggleModel = () => setIsOpen(!isOpen);

  return (
    <ServiceContainer>
      <BannerBackground Background={Background}>
        <Button onClick={toggleModel}>
          <AddCircleIcon /> <span>add service</span>
        </Button>
      </BannerBackground>

      {!isOpen && (
        <Model title="Add Service" toggleModel={toggleModel}>
          <AddModel
            service={service}
            isOpen={isOpen}
            setService={setService}
            setIsOpen={setIsOpen}
            actionName={"Add Service"}
            Icon={SaveIcon}
          />
        </Model>
      )}
      {!isOpen && <OverLay />}
      <ServiceItems service={service} setService={setService} />
    </ServiceContainer>
  );
};

export default Service;
