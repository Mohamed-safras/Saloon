import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ServiceCard from "./ServiceCard";

const ServiceItems = () => {
  const [service, setService] = useState([]);

  useEffect(() => {
    const getAllServices = async () => {
      const user = localStorage.getItem("user");
      const { token } = JSON.parse(user);

      const response = await axios.get(
        "http://localhost:8080/api/v1/saloon/getService",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setService(response.data);
    };
    getAllServices();
  }, []);

  return (
    <SeviceItems>
      {service.map((service) => (
        <ServiceCard {...service} key={service._id} />
      ))}
    </SeviceItems>
  );
};

export default ServiceItems;

export const SeviceItems = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  margin: 40px 10px;
  gap: 10px;

  @media screen and (max-width: 600px) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
`;
