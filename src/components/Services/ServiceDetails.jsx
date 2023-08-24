
import axios from "axios";

import React, { useEffect, useState } from "react";
import { Navigate, useLocation, } from "react-router-dom";
import circleloader from "../../assets/circle-loader.json";
import Background from "../../assets/service_background.jpg";
import { pathSpliter } from "../../common/path.split";
import { colors } from "../../styles/colors";
import BannerBackground from "../Banner/BannerBackground";
import Empty from "../NotFound/Empty";

const ServiceDetails = () => {
  const { pathname } = useLocation();
  const user = localStorage.getItem("user");
  const { token } = JSON.parse(user);
  const [isLoading, setIsLoading] = useState(true);
  const [selectImage, setSelectImage] = useState(0);
  const [service, setService] = useState({});

  useEffect(() => {
    getSingleService(pathSpliter(pathname));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getSingleService = async (_id) => {
    try {
      const response = await axios.get(
        `http://localhost:8080/api/v1/saloon/getService/${_id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      

      if (response?.status !==200) {
        throw new Error("Something went wrong");
        
      }
    
      setIsLoading(false);
      setService(response?.data);
    } catch (error) {
      console.log(error.message);
      setIsLoading(false);
    }
  };

  
  const { serviceImages } = service;
  return (
    <React.Fragment>
      <BannerBackground Background={Background}></BannerBackground>
      <div style={{ padding: 10 }}>
        {isLoading ? (
          <Empty animationData={circleloader} />
        ) : (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: "10px",
              height: "100%",
            }}
          >
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "2fr 5fr",
                gap: "10px",
                width: "100%",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "column",
                  width: "100%",
                  height: "100%",
                  maxHeight: "450px",
                  minHeight: "350px",
                  overflowY: "scroll",
                }}
              >
                <React.Fragment>
                  {serviceImages?.map((item, index) => (
                    <img
                      key={index}
                      src={item?.src}
                      alt=""
                      onClick={() => setSelectImage(index)}
                      style={{
                        minHeight: 120,
                        width: "100%",
                        objectFit: "cover",
                        marginBottom: "5px",
                        borderRadius: "5px",
                        opacity: `${selectImage === index ? 1 : 0.4}`,
                      }}
                    />
                  ))}
                </React.Fragment>
              </div>

              <div style={{ width: "100%", height: "100%" }}>
                <img
                  src={serviceImages[selectImage]?.src}
                  alt=""
                  style={{
                    width: "100%",
                    height: "100%",
                    maxHeight: "450px",
                    minHeight: "350px",
                    objectFit: "cover",
                    borderRadius: "10px",
                  }}
                />
              </div>
            </div>
            <div>
              <div
                style={{
                  fontSize: 20,
                  color: colors.colorBlack,
                  margin: "0 10px",
                }}
              >
                {service?.serviceTitle}
              </div>
              <div
                style={{
                  fontSize: 18,
                  fontWeight: "bold",
                  color: colors.colorShadeBlue,
                  margin: "10px",
                }}
              >
                ${service.price}
              </div>
              <div style={{ display: "block", margin: "10px" }}>
                <span
                  style={{
                    background: colors.colorShadeBlue,
                    // display: "block",
                    padding: "5px 10px",
                    color: colors.colorWhite,
                    fontSize: 12,
                    borderRadius: 15,
                    fontWeight: "bold",
                    marginRight: "10px",
                  }}
                >
                  {service?.serviceType}
                </span>
                <span
                  style={{
                    background: colors.colorShadeBlue,
                    // display: "block",
                    padding: "5px 10px",
                    color: colors.colorWhite,
                    fontSize: 12,
                    borderRadius: 15,
                    fontWeight: "bold",
                  }}
                >
                  {service.gender}
                </span>
              </div>

              <div>
                {service.description !== "undefined" && (
                  <span
                    style={{
                      // margin: "10px",
                      padding: "5px 10px",
                      fontSize: 12,
                      // width: "100%",
                      wordWrap: "break-word",
                      overflowWrap: "break-word",
                    }}
                  >
                    {service?.description}
                  </span>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </React.Fragment>
  );
};

export default ServiceDetails;
