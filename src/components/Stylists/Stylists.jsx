import axios from "axios";
import React, { useEffect, useState } from "react";
import { colors } from "../../styles/colors";
import Card from "../Cards/card";
import { StylistsCards, StylistsContainer, ViewAll } from "./Stylists.styles";

const Stylists = () => {
  const [loading, setLoading] = useState(false);
  const [stylist, setStylist] = useState([]);
  const [error, setError] = useState({});
  useEffect(() => {
    const user = localStorage.getItem("user");
    const { token } = JSON.parse(user);

    const getAllSpecilists = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          "http://localhost:8080/api/v1/saloon/getAllStylists",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        if (response?.status !== 200) {
          throw new Error("some thing went wrong");
        } else {
          setStylist(response?.data?.slice(0, 3));
        }
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
        setError(error?.response?.data);
      }
    };

    getAllSpecilists();
  }, []);

  return (
    <React.Fragment>
      <StylistsContainer>
        {error && <h1>{error.message}</h1>}
        <h3>Stylists</h3>

        <StylistsCards>
          {/*{loading && [...Array(3)].map((_, id) => <SkeletonCard key={id} />)}*/}
          {stylist.map(({ name, working_time, _id }) => (
            <Card
              key={_id}
              backGround={colors.colorGray}
              img={
                "https://images.unsplash.com/photo-1670272499188-79fe22656f64?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              }
            >
              <p style={{ fontSize: "12px", fontWeight: "700" }}>{name}</p>
              <span style={{ fontSize: "11px", fontWeight: "500" }}>
                Hair Styling
              </span>
              {working_time && (
                <span style={{ fontSize: "11px", fontWeight: "500" }}>
                  {working_time}
                </span>
              )}
            </Card>
          ))}
        </StylistsCards>
        {!loading && <ViewAll to="/stylists">View All</ViewAll>}
      </StylistsContainer>
    </React.Fragment>
  );
};

export default Stylists;
