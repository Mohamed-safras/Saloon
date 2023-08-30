import CloseIcon from "@mui/icons-material/Close";
import { IconButton } from "@mui/material";

import React from "react";

import { ModelHeader, ModelWrapper } from "./Model.styles";

const Model = ({ toggleModel, children, title }) => {
  return (
    <ModelWrapper>
      <ModelHeader>
        <h3>{title}</h3>
        <IconButton onClick={toggleModel}>
          <CloseIcon />
        </IconButton>
      </ModelHeader>
      {children}
    </ModelWrapper>
  );
};

export default Model;
