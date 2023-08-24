import AddCircleIcon from "@mui/icons-material/AddCircle";
import SaveIcon from "@mui/icons-material/Save";
import React, { useState } from "react";
import AddStaff from "../../components/Staff/AddStaff";
import BannerBackground from "../../components/Banner/BannerBackground";
import Model from "../../components/ModelOverLay/Model";
import OverLay from "../../components/ModelOverLay/OverLay";
import StaffItems from "../../components/Staff/StaffItems";
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

      {!isOpen && (
        <Model title="Add Staff" toggleModel={toggleModel}>
          <AddStaff setIsOpen={setIsOpen} isOpen={isOpen} />
        </Model>
      )}
      {!isOpen && <OverLay />}
      <StaffItems />
    </StaffContainer>
  );
};

export default Staff;
