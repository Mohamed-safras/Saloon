import React, { useRef } from "react";
import Slider from "react-slick";
import styled from "styled-components";
import FemaleSaloon from "../../assets/female-saloon.avif";
import HairCutting from "../../assets/haircutting.jpg";
import MakeUp from "../../assets/makeup.jpg";

import Hair from "../../assets/styling-hair.jpg";

import Banner from "./Banner";
const bannerdata = [
  {
    id: 1,
    src: Hair,
    quote: "Beauty comes from inside, inside the beauty salon",
  },
  {
    id: 2,
    src: FemaleSaloon,
    quote: "The time to relax is when you don't have time for it.",
  },
  {
    id: 3,
    src: HairCutting,
    quote: "Make time for yourself.",
  },
  {
    id: 4,
    src: MakeUp,
    quote: "A referral is the best gift a salon can receive from a customer.",
  },
];

const Banners = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
  };

  const slideRef = useRef(null);

  return (
    <Slide>
      <Slider ref={slideRef} {...settings}>
        {bannerdata.map((item) => (
          <Banner quote={item.quote} imageUrl={item.src} key={item.id} />
        ))}
      </Slider>
    </Slide>
  );
};

export default Banners;

const Slide = styled.div`
  width: 100%;

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
