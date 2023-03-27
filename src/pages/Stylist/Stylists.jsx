import { Button } from "@mui/material";
import React, { useState } from "react";
import Model from "../../components/ModelOverLay/Model";
import { OverlayContainer } from "../../components/ModelOverLay/OverLay.styles";
import { AddStylist, StylistWrapper } from "./Stylists.styles";
const Stylists = () => {
  const [isModelOpen, setIsModelOpen] = useState(false);

  const toggleModel = () => {
    setIsModelOpen((prev) => !prev);
  };
  return (
    <StylistWrapper>
      <AddStylist onClick={toggleModel}>
        <Button variant="contained">Add Stylist</Button>
      </AddStylist>
      {isModelOpen && <Model toggleModel={toggleModel} />}
      {isModelOpen && <OverlayContainer />}
    </StylistWrapper>
  );
};

export default Stylists;
