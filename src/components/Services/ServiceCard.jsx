import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { Button } from "@mui/material";
import React from "react";
import Slider from "react-slick";

import { ServiceCardBottom, ServiceCardContainer } from "./service.card.styles";
const ServiceCard = ({ serviceTitle, serviceImages }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
  };

  return (
    <ServiceCardContainer>
      <Slider {...settings}>
        {serviceImages.map((item, id) => (
          <div key={id}>
            <img
              style={{
                height: "200px",
                width: "100%",
                objectFit: "cover",
              }}
              src={item}
              alt=""
            />
          </div>
        ))}
      </Slider>

      <p style={{ padding: "10px", fontSize: "14px", fontWeight: 400 }}>
        {serviceTitle}
      </p>
      <ServiceCardBottom>
        <Button variant="contained" style={{ margin: "5px 0", width: "100%" }}>
          <EditIcon /> <span style={{ margin: "0 10px " }}>Edit</span>
        </Button>
        <Button variant="contained" style={{ margin: "5px 0", width: "100%" }}>
          <DeleteIcon />
          <span style={{ margin: "0 10px" }}>delete</span>
        </Button>
      </ServiceCardBottom>
    </ServiceCardContainer>
  );
};

export default ServiceCard;
