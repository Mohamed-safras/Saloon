import styled from "styled-components";

export const Image = styled.div`
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
