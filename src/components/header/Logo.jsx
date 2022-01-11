import React from "react";
import logo from "./HeaderIcons/Лого-Пи-Пи 1.svg";
import parta from "./HeaderIcons/Parta eShop.svg";
import classes from "./style.module.css";

const Logo = () => {
  return (
    <div className={classes.logoWrapper}>
      <img src={logo} alt="logo" />
      <img src={parta} alt="parta" />
    </div>
  );
};

export default Logo;

// width={width}
// height={height}
// viewBox="0 0 184 30"
// fill="none"
