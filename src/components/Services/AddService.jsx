import DeleteIcon from "@mui/icons-material/Delete";
import SaveIcon from "@mui/icons-material/Save";
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  TextareaAutosize,
} from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";

import Sample from "../../assets/haircutting.jpg";
import useInputHandler from "../../hooks/InputHandler";
import {
  AddImages,
  AddServiceContainer,
  FormFields,
  FormInputWrapper,
  ServiceImages,
  UploadImages,
} from "./service.styles";

const AddService = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: true,
  };

  const { handleInput, formInput } = useInputHandler({
    serviceTitle: "",
    serviceType: "",
    gender: "male",
    price: "",
    style: "",
    specialists: [],
  });

  const [images, setImages] = useState([]);
  const [imageURLS, setImageURLs] = useState([]);
  const handleFileChange = (event) => {
    console.log([...event.target.files]);
    setImages([...event.target.files]);
  };

  useEffect(() => {
    if (images.length < 1) return;
    const newImageUrls = [];
    images.forEach((image) => newImageUrls.push(URL.createObjectURL(image)));
    setImageURLs(newImageUrls);
    console.log(images);
  }, [images]);

  const handelFormSubmit = async (event) => {
    event.preventDefault();

    const user = localStorage.getItem("user");
    const { token } = JSON.parse(user);
    console.log(user);
    try {
      const formData = new FormData();

      for (const image in images) {
        formData.append("files", images[image]);
      }

      // formData.append("files", images);
      formData.append("serviceTitle", formInput.serviceTitle);
      formData.append("serviceType", formInput.serviceType);
      formData.append("gender", formInput.gender);
      formData.append("price", formInput.price);
      // formData.append("title", title);
      const response = await axios.post(
        "http://localhost:8080/api/v1/saloon/addService",
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AddServiceContainer onSubmit={handelFormSubmit}>
      <ServiceImages>
        <input
          accept="image/*"
          type="file"
          name="fileUpload"
          multiple
          onChange={handleFileChange}
        />

        <AddImages>
          <UploadImages>
            {imageURLS && imageURLS.map((item) => <img src={item} alt="" />)}
          </UploadImages>
        </AddImages>
      </ServiceImages>
      <FormFields>
        <TextField
          fullWidth
          name="serviceTitle"
          margin="dense"
          size="small"
          label="Service Name"
          id="outlined-basic"
          variant="outlined"
          value={formInput.serviceTitle}
          onChange={handleInput}
        />
        <FormInputWrapper>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Service Type</InputLabel>
            <Select
              labelId="demo-simple-select-label"
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

          <TextField
            fullWidth
            margin="dense"
            type="number"
            size="small"
            name="price"
            label="Price"
            id="outlined-basic"
            variant="outlined"
            value={formInput.price}
            onChange={handleInput}
          />
        </FormInputWrapper>
        <TextField
          fullWidth
          margin="dense"
          size="small"
          label="Short Description"
          id="outlined-basic"
          variant="outlined"
        />

        <TextareaAutosize
          aria-label="empty textarea"
          placeholder="Empty"
          style={{
            width: "100%",
            height: "150px",
            resize: "none",
            outline: "none",
            border: "1px solid black",
            borderRadius: "5px",
            padding: "10px",
          }}
        />

        <Button
          type="submit"
          fullWidth
          variant="contained"
          style={{ background: "#101727", margin: "10px 0" }}
        >
          <SaveIcon /> <span style={{ margin: "0 5px" }}>Add new service</span>
        </Button>
      </FormFields>
    </AddServiceContainer>
  );
};

export default AddService;
