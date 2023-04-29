import styled from "styled-components";
import { colors } from "../../styles/colors";

export const ServiceModelConatainer = styled.div`
  position: fixed;
  background: ${colors.colorWhite};
  top: 50%;
  left: 50%;
  max-width: 900px;
  margin: auto;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;
  max-height: 500px;
  width: 100%;
  /* z-index: 100; */
  height: 100%;
  padding: 10px;
  border-radius: 10px;
  transform: translate(-50%, -50%);
`;
