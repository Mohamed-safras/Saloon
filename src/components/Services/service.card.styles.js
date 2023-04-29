import styled from "styled-components";

export const ServiceCardContainer = styled.div`
  width: 100%;
  position: relative;
  /* height: 100%; */
  background: #101727;
  color: #fff;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;

  .slick-dots {
    position: absolute;
    bottom: 10px;
  }

  .slick-dots li {
    margin: 0;
  }
  .slick-dots li button:before {
    color: #fff;
  }

  .slick-dots li button:hover:before {
    color: #fff;
  }

  .slick-dots li.slick-active button:before {
    color: #fff;
  }
`;

export const ServiceCardBottom = styled.div`
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
`;
