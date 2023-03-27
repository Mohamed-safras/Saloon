import CloseIcon from "@mui/icons-material/Close";
import {
  Button,
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import React from "react";
import useInputHandler from "../../hooks/InputHandler";
import {
  Form,
  InputWrapper,
  ModelHeader,
  ModelWrapper,
  TextArea,
} from "./Model.styles";

const InitialState = {
  name: "",
  email: "",
  location: "",
  phone: "",
  working_type: "",
  experience: 0,
  service_special: [],
};

const Model = ({ toggleModel }) => {
  const { handleInput, formInput } = useInputHandler(InitialState);

  return (
    <ModelWrapper>
      <ModelHeader>
        <h3>Add Stylist</h3>

        <IconButton onClick={toggleModel}>
          <CloseIcon />
        </IconButton>
      </ModelHeader>
      <Form>
        <TextField
          size="small"
          id="outlined-basic"
          label="Name"
          variant="outlined"
          margin="dense"
          required
          fullWidth
          name="name"
          value={formInput.name}
          onChange={handleInput}
        />
        <InputWrapper>
          <TextField
            fullWidth
            size="small"
            id="outlined-basic"
            label="Email"
            variant="outlined"
            required
            margin="dense"
            name="email"
            value={formInput.email}
            onChange={handleInput}
          />
          <TextField
            fullWidth
            size="small"
            required
            id="outlined-basic"
            label="Phone"
            variant="outlined"
            margin="dense"
            name="phone"
            value={formInput.phone}
            onChange={handleInput}
          />
        </InputWrapper>
        <InputWrapper>
          <TextField
            fullWidth
            size="small"
            id="outlined-basic"
            label="Loaction"
            variant="outlined"
            required
            margin="dense"
            name="location"
            value={formInput.location}
            onChange={handleInput}
          />
          <FormControl fullWidth size="small" margin="dense">
            <InputLabel id="demo-select-small">Working Type</InputLabel>
            <Select
              labelId="demo-select-small"
              id="demo-select-small"
              value={formInput.working_type}
              label="Working Type"
              onChange={handleInput}
              name="working_type"
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={"Full Time"}>Full Time</MenuItem>
              <MenuItem value={"Part Time"}>Part Time</MenuItem>
            </Select>
          </FormControl>
        </InputWrapper>
        <InputWrapper>
          <TextField
            size="small"
            type="number"
            id="outlined-basic"
            label="Experience"
            variant="outlined"
            margin="dense"
            fullWidth
            name="experience"
            value={formInput.experience}
            onChange={handleInput}
          />
          <TextField
            size="small"
            id="outlined-basic"
            label="Experience"
            variant="outlined"
            margin="dense"
            fullWidth
            name="service_special"
            value={formInput.service_special}
            // onChange={handleInput}
          />
        </InputWrapper>

        <TextArea
          aria-label="empty textarea"
          placeholder="Tell something about your stylist"
        />
        <Button fullWidth variant="contained">
          Add Stylist
        </Button>
      </Form>
    </ModelWrapper>
  );
};

export default Model;
