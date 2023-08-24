import DeleteIcon from "@mui/icons-material/Delete";

import { Button } from "@mui/material";

import Lottie from "lottie-react";
import React from "react";

import { Link } from "react-router-dom";
import Slider from "react-slick";
import circleloader from "../../assets/circle-loader.json";
import useService from "../../hooks/service/useServices";
import { colors } from "../../styles/colors";
import { ServiceCardBottom, ServiceCardContainer } from "./service.card.styles";

const ServiceCard = ({ serviceTitle, serviceImages, _id }) => {
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

  const { loading, deleteService } = useService();

  return (
    <ServiceCardContainer>
      <Link to={`/services/${_id}`}>
        <Slider {...settings}>
          {serviceImages?.map((item, id) => (
            <div key={id}>
              <img
                style={{
                  borderTopLeftRadius: 15,
                  borderTopRightRadius: 15,
                  // height: "180px",
                  width: "100%",
                  aspectRatio: 3 / 2,
                  objectFit: "cover",
                }}
                src={item?.src}
                alt="img"
              />
            </div>
          ))}
        </Slider>
      </Link>
      <p style={{ padding: "10px", fontSize: "14px", fontWeight: 400 }}>
        {serviceTitle}
      </p>
      <ServiceCardBottom>
        {/* <Button
          variant="outlined"
          style={{
            margin: "5px 0",
            width: "100%",
            background: colors.colorBlack,
            border: `1px solid ${colors.colorWhite}`,
            color: colors.colorWhite,
            borderRadius: "25px",
            fontSize: "15px",
            textTransform: "capitalize",
          }}
        >
          <EditIcon />
          <span style={{ marginLeft: "5px" }}>Edit</span>
        </Button> */}
        <Button
          variant="contained"
          style={{
            width: "100%",
            height: "40px",
            background: colors.colorWhite,
            border: `1px solid ${colors.colorBlack}`,
            color: colors.colorBlack,
            borderRadius: "25px",
            fontSize: "15px",
            textTransform: "capitalize",
          }}
        >
          {!loading ? (
            <React.Fragment>
              <DeleteIcon />
              <span
                style={{ marginLeft: "5px" }}
                onClick={() => deleteService(_id)}
              >
                Delete
              </span>
            </React.Fragment>
          ) : (
            <Lottie style={{ height: "100%" }} animationData={circleloader} />
          )}
        </Button>
      </ServiceCardBottom>
    </ServiceCardContainer>
  );
};

export default ServiceCard;
