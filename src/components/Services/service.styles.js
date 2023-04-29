import styled from "styled-components";

export const AddServiceContainer = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px;

  @media screen and (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

export const ServiceImages = styled.div`
  padding: 10px 0;
`;

export const FormFields = styled.div``;

export const ImagePreview = styled.div``;

export const AddImages = styled.div`
  margin-top: 10px;
`;

export const UploadImages = styled.div`
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  img {
    width: 100%;
    height: 60px;
    object-fit: cover;
    /* margin-left: 10px; */
    /* border-radius: 5px; */
  }
`;

export const FormInputWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
`;
