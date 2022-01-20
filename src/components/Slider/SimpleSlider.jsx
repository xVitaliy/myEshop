import React from "react";
import Slider from "react-slick";
import classes from "./slider.module.css";
import { useStyle } from "./styles";

const SimpleSlider = ({ props }) => {
  const urls = props.map((prop) => prop.url);
  const imagesSlide = urls.map((url) => {
    return (
      <div key={Math.random()} className={classes.block}>
        <img src={url} alt="img" />
      </div>
    );
  });
  const style = useStyle();
  const settings = {
    arrows: false,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    dotsClass: `slick-dots ${style.dots}`,
  };
  return (
    <div className={classes.main}>
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <Slider {...settings}>{imagesSlide}</Slider>
    </div>
  );
};

export default SimpleSlider;
