import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Avatar, IconButton } from "@mui/material";

import React from "react";
import { CardContainer, CardDetails } from "./card.styles";

const Card = ({ img, children, backGround }) => {
  return (
    <CardContainer backGround={backGround}>
      <Avatar src={img} />
      <CardDetails>{children}</CardDetails>

      <IconButton sx={{ marginLeft: "auto" }}>
        <MoreVertIcon />
      </IconButton>
    </CardContainer>
  );
};

export default Card;
