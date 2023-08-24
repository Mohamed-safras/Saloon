import styled from "styled-components";
import { colors } from "../../styles/colors";

export const AddServiceContainer = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px;

  @media screen and (max-width: 750px) {
    grid-template-columns: 1fr;
  }
`;

export const ServiceImages = styled.div`
  /* padding: 10px 0; */
`;

export const FormFields = styled.div``;

export const ImagePreview = styled.div``;

export const AddImages = styled.div`
  margin-top: 10px;
`;

export const UploadImages = styled.div`
  border: 2px dashed red;
  padding: 10px;
  width: 100%;
  user-select: none;
`;

export const UploadedImages = styled.div`
  display: grid;
  gap: 5px;

  margin-top: 10px;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  img {
    background-color: ${colors.colorBlack};
    width: 100%;
    height: 120px;
    border-radius: 5px;
    aspect-ratio: 16 / 9;
    object-fit: cover;
  }
`;

export const FormInputWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  align-items: center;
  margin: 10px 0;
`;
