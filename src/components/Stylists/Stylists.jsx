import React from "react";
import { colors } from "../../styles/colors";
import Card from "../cards/card";
import { StylistsCards, StylistsContainer, ViewAll } from "./Stylists.styles";

const Stylists = () => {
  return (
    <StylistsContainer>
      <h3>Stylists</h3>
      <StylistsCards>
        <Card
          backGround={colors.colorGray}
          img={
            "https://images.unsplash.com/photo-1670272499188-79fe22656f64?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          }
        >
          <p style={{ fontSize: "12px", fontWeight: "700" }}>Alberto Raya</p>
          <span style={{ fontSize: "11px", fontWeight: "500" }}>
            Hair Styling
          </span>
          <span style={{ fontSize: "11px", fontWeight: "500" }}>Full Time</span>
        </Card>
        <Card
          backGround={colors.colorGray}
          img={
            "https://images.unsplash.com/photo-1500048993953-d23a436266cf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80"
          }
        >
          <p style={{ fontSize: "12px", fontWeight: "600" }}>Kong Yijun</p>
          <span style={{ fontSize: "11px", fontWeight: "500" }}>Haircut</span>
          <span style={{ fontSize: "11px", fontWeight: "500" }}>Part Time</span>
        </Card>

        <Card
          backGround={colors.colorGray}
          img={
            "https://images.unsplash.com/photo-1593104547489-5cfb3839a3b5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1153&q=80"
          }
        >
          <p style={{ fontSize: "12px", fontWeight: "600" }}>Praskovya</p>
          <span style={{ fontSize: "11px", fontWeight: "500" }}>Haircut</span>
          <span style={{ fontSize: "11px", fontWeight: "500" }}>Full Time</span>
        </Card>
      </StylistsCards>
      <ViewAll to="/stylists">View All</ViewAll>
    </StylistsContainer>
  );
};

export default Stylists;
