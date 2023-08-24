import React, { useEffect } from "react";

import styled from "styled-components";

import { Box, Skeleton } from "@mui/material";

import { useSelector } from "react-redux";
import EmptyCartAnimation from "../../assets/empty.json";
import useService from "../../hooks/service/useServices";
import Empty from "../NotFound/Empty";
import { LinkToHome } from "../NotFound/emptycart.styles";
import ServiceCard from "./ServiceCard";

const ServiceItems = () => {
  const services = useSelector((state) => state.services.current_services);
  const { loading, error, getAllServices } = useService();

  useEffect(() => {
    getAllServices();
  }, []);

  return (
    <React.Fragment>
      {loading ? (
        <SeviceItems>
          {Array.from(new Array(6)).map((_, index) => (
            <Box key={index} sx={{ width: "100%" }}>
              <Skeleton variant="rectangular" width={"100%"} height={150} />
              <Skeleton height={40} />
              <Skeleton height={40} />
            </Box>
          ))}
        </SeviceItems>
      ) : (
        <React.Fragment>
          {services.length > 0 ? (
            <SeviceItems>
              {services?.map((service) => (
                <ServiceCard {...service} key={service._id} />
              ))}
            </SeviceItems>
          ) : (
            <Empty
              message={`${error ? error : "No Service Found"}`}
              animationData={EmptyCartAnimation}
            >
              <LinkToHome to="/">Back To Home</LinkToHome>
            </Empty>
          )}
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

export default ServiceItems;

export const SeviceItems = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  margin: 40px 10px;
  gap: 10px;

  @media screen and (max-width: 600px) {
    grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  }
`;
