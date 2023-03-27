import { TextareaAutosize } from "@mui/material";
import styled from "styled-components";
import { colors } from "../../styles/colors";
export const ModelWrapper = styled.div`
  position: fixed;
  background: ${colors.colorWhite};
  top: 50%;
  left: 50%;
  max-width: 600px;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;
  /* max-height: 600px; */
  width: 100%;
  z-index: 1000;
  /* height: 100%; */
  padding: 10px;
  border-radius: 10px;
  transform: translate(-50%, -50%);
`;

export const Form = styled.form`
  width: 100%;
  height: 100%;
`;

export const ModelHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
`;

export const TextArea = styled(TextareaAutosize)`
  max-width: 100%;
  width: 100%;
  max-height: 150px;
  min-height: 100px;
  padding: 10px;
  outline: none;
  border: 2px solid ${colors.colorGray};
  border-radius: 10px;
  resize: none;
`;

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  gap: 10px;
  height: 100%;
`;
