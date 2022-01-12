import React from "react";
import {
  AppBar, Link
} from "@mui/material";
import classes from "./style.module.css";
import Logo from "./Logo";
import InputHeader from "./InputHeader";
import RightHeaderIcons from "./RightHeaderIcons";

const appBar = {
  position: "static",
  top: 0,
  left: 0,
  right: 0,
  backgroundColor: " #0B486B",
  boxShadow: "none",
  zIndex: 100,
  height: 56,
  display: "flex",
  alignItems: "center",
  flexDirection: "row"
};

const Header = () => {
  return (
    <AppBar position="static" sx={appBar}>
      <div className={classes.headerWrapper}>
        <div>
          <Link to="/">
            <Logo />
          </Link>
        </div>
        <div className={classes.menuWrapper}>
          <Link to="/">Новинки</Link>
          <Link to="/"> Все книги</Link>
          <Link to="/">Новости</Link>
        </div>
        <InputHeader />
        <div className={classes.rightBlock}>
          <RightHeaderIcons />
        </div>
      </div>
    </AppBar>
  );
};
export default Header;
