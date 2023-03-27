import MoreVertIcon from "@mui/icons-material/MoreVert";
import { IconButton } from "@mui/material";

import React from "react";

import { Image } from "../../styles/image";

import { CardContainer, CardDetails } from "./card.styles";

const Card = ({ img, children, backGround }) => {
  return (
    <CardContainer backGround={backGround}>
      <Image height={50} width={50}>
        <img style={{ borderRadius: "10px" }} src={img} alt="img" />
      </Image>
      <CardDetails>{children}</CardDetails>

      <IconButton sx={{ marginLeft: "auto" }}>
        <MoreVertIcon />
      </IconButton>
    </CardContainer>
  );
};

export default Card;
