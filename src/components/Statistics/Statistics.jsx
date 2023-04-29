import React from "react";
import Appointment from "../../assets/appointments.png";
import Client from "../../assets/customer-service.png";
import Service from "../../assets/service.png";
import { colors } from "../../styles/colors";
import Card from "../Cards/card";
import Financial from "../Financial/Financial";

import Graph from "../GraphStatistics/Graph";
import Stylists from "../Stylists/Stylists";
import { NumericalStatistics, StatisticsContainer } from "./Statistics.styles";
const Statistics = () => {
  return (
    <StatisticsContainer>
      <NumericalStatistics>
        <Card backGround={colors.colorWhite} img={Client}>
          <span style={{ fontSize: "14px", fontWeight: "600" }}>Clinets</span>
          <span style={{ fontSize: "12px", fontWeight: "500" }}>1000</span>
        </Card>
        <Card backGround={colors.colorWhite} img={Appointment}>
          <span style={{ fontSize: "14px", fontWeight: "600" }}>
            Appoinments
          </span>
          <span style={{ fontSize: "12px", fontWeight: "500" }}>900</span>
        </Card>
        <Card backGround={colors.colorWhite} img={Service}>
          <span style={{ fontSize: "14px", fontWeight: "600" }}>Services</span>
          <span style={{ fontSize: "12px", fontWeight: "500" }}>56</span>
        </Card>
      </NumericalStatistics>
      <Graph />
      <Stylists />
      <Financial />
    </StatisticsContainer>
  );
};

export default Statistics;
