import AddCircleIcon from "@mui/icons-material/AddCircle";
import React, { useState } from "react";
import BannerBackground from "../../components/Banner/BannerBackground";
import Model from "../../components/ModelOverLay/Model";
import OverLay from "../../components/ModelOverLay/OverLay";
import { Button, StaffContainer } from "./staff.styles";

const Staff = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleModel = () => setIsOpen(!isOpen);

  return (
    <StaffContainer>
      <BannerBackground
        Background={
          "https://plus.unsplash.com/premium_photo-1661288493270-64eb69d68e39?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80"
        }
      >
        <Button onClick={toggleModel}>
          <AddCircleIcon /> <span>add staff</span>
        </Button>
      </BannerBackground>

      {!isOpen && <Model toggleModel={toggleModel} />}
      {!isOpen && <OverLay />}
    </StaffContainer>
  );
};

export default Staff;
