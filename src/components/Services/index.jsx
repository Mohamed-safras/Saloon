import {
  Alert,
  Autocomplete,
  Button,
  Chip,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  TextareaAutosize,
} from "@mui/material";

import Lottie from "lottie-react";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import circleloader from "../../assets/circle-loader.json";
import useInputHandler from "../../hooks/InputHandler";
import { useStaff } from "../../hooks/Staff/staff";
import { formInputs } from "../../hooks/service/service.inputs";
import useAddNewService from "../../hooks/service/useAddService";
import { colors } from "../../styles/colors";
import ImageUplod from "../ImageUpload/ImageUplod";
import {
  AddServiceContainer,
  FormFields,
  FormInputWrapper,
  ServiceImages,
  UploadedImages,
} from "./service.styles";

const AddComp = ({ setIsOpen, actionName, Icon }) => {
  const { getAllStaff } = useStaff();
  useEffect(() => {
    getAllStaff();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const currentStaff = useSelector((state) => state?.staff?.current_staff);

  const [staff, setStaff] = useState([]);

  const [imageURLS, setImageURLs] = useState([]);
  const { handleInput, formInput, handleFileChange, images, setImages } =
    useInputHandler(formInputs);

  const { loading, addNewService, errors } = useAddNewService(
    { ...formInput, specialists: [...staff.map((item) => item._id)] },
    images,
    setIsOpen
  );

  useEffect(() => {
    if (images.length < 1) return;
    const newImageUrls = [];
    images.forEach((image) => newImageUrls.push(URL.createObjectURL(image)));
    setImageURLs(newImageUrls);
  }, [images]);

  return (
    <React.Fragment>
      <AddServiceContainer onSubmit={addNewService}>
        <ServiceImages>
          <ImageUplod
            handleFileChange={handleFileChange}
            imageURLS={imageURLS}
            setImages={setImages}
          />

          <UploadedImages>
            {imageURLS.length > 3 ? (
              <React.Fragment>
                {imageURLS.slice(0, 3).map((item, index) => (
                  <img key={index} src={item} alt="" />
                ))}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "20px",
                    opacity: 0.9,

                    borderRadius: "5px",
                    background: `${colors.colorBlack}`,
                    color: `${colors.colorWhite}`,
                  }}
                >
                  +{imageURLS.length - 3}
                </div>
              </React.Fragment>
            ) : (
              imageURLS.map((item, index) => (
                <img key={index} src={item} alt="" />
              ))
            )}
          </UploadedImages>
        </ServiceImages>
        <FormFields>
          <TextField
            fullWidth
            name="serviceTitle"
            size="medium"
            label="Service Name"
            id="outlined-basic"
            variant="outlined"
            value={formInput.serviceTitle}
            onChange={handleInput}
          />
          <FormInputWrapper>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">
                Service Type
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                size="medium"
                id="demo-simple-select"
                value={formInput.serviceType}
                name="serviceType"
                label="Service Type"
                onChange={handleInput}
              >
                <MenuItem value={"Hair Salon"}>Hair Salon</MenuItem>
                <MenuItem value={"Spa Salon"}>Spa Salon</MenuItem>
                <MenuItem value={"Nail Salon"}>Nail Salon</MenuItem>
                <MenuItem value={"Tanning Salon"}>Tanning Salon</MenuItem>
              </Select>
            </FormControl>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Gender</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                size="medium"
                id="demo-simple-select"
                value={formInput.gender}
                name="gender"
                label="Gender"
                onChange={handleInput}
              >
                <MenuItem value={"male"}>Male</MenuItem>
                <MenuItem value={"female"}>Female</MenuItem>
                <MenuItem value={"male kids"}>Male Kids</MenuItem>
                <MenuItem value={"female kids"}>Female Kids</MenuItem>
              </Select>
            </FormControl>
          </FormInputWrapper>
          <TextField
            fullWidth
            // margin="dense"
            type="number"
            size="medium"
            name="price"
            label="Price"
            id="outlined-basic"
            variant="outlined"
            value={formInput.price}
            onChange={handleInput}
          />
          <Autocomplete
            multiple
            id="fixed-tags-demo"
            value={staff}
            onChange={(event, newValue) => {
              setStaff([...newValue.filter((option) => option?._id)]);
            }}
            options={currentStaff}
            getOptionLabel={(option) => `${option?.email} - ${option.name}`}
            renderTags={(tagValue, getTagProps) =>
              tagValue.map((option, index) => (
                <Chip label={option?.email} {...getTagProps({ index })} />
              ))
            }
            sx={{ marginTop: "10px" }}
            renderInput={(params) => (
              <TextField {...params} label="Select Staff or Staffs" />
            )}
          />

          <TextareaAutosize
            aria-label="empty textarea"
            value={formInput.description}
            name="description"
            onChange={handleInput}
            style={{
              width: "100%",
              height: "150px",
              resize: "none",
              outline: "none",
              border: "1px solid black",
              borderRadius: "5px",
              padding: "10px",
              margin: "10px 0",
            }}
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            style={{
              background: "#101727",
              // margin: "10px 0",
              borderRadius: "25px",
              height: "40px",
              padding: "10px",
              fontSize: "14px",
              fontWeight: "bold",
              textTransform: "capitalize",
            }}
          >
            {!loading ? (
              <React.Fragment>
                <Icon />
                <span style={{ marginLeft: "5px" }}>{actionName}</span>
              </React.Fragment>
            ) : (
              <Lottie
                size={30}
                style={{ height: "100%" }}
                animationData={circleloader}
              />
            )}
          </Button>
        </FormFields>
      </AddServiceContainer>
      <ErrorContiner>
        {errors.length > 0 &&
          errors.map((item, id) => (
            <Alert key={id + 1} severity="error" sx={{ margin: "5px 0" }}>
              {item.message}
            </Alert>
          ))}
      </ErrorContiner>
    </React.Fragment>
  );
};

export default AddComp;
export const ErrorContiner = styled.div`
  position: fixed;
  bottom: 0px;
  left: 0px;
`;
