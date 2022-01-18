import React, { useState } from "react";
import bell from "./HeaderIcons/bell.svg";
import topBarUser from "./HeaderIcons/topbar_user.svg";
import classes from "./style.module.css";
import books from "./HeaderIcons/books.svg";
import RegisterPage from "../RegisterPage/RegisterPage";
/* eslint-disable no-unused-vars */
const s = {
  borderRadius: "50%",
  padding: "0",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
};

const RightHeaderIcons = () => {
  const [openRegisterWindow, setOpenRegisterWindow] = useState(false);

  const handleOpenRegisterW = () => {
    setOpenRegisterWindow((prevState) => !prevState);
  };

  return (
    <>
      <div className={classes.iconRight}>
        <img src={bell} alt="bell" />
      </div>
      <div className={classes.iconRight}>
        <img src={books} alt="book" />
      </div>
      <div>
        {/* eslint-disable-next-line react/button-has-type */ }
        <button
          style={s}
          onClick={() => handleOpenRegisterW()}
        >
          <div style={s} className={classes.topBarUser}>
            <img src={topBarUser} alt="search" />
          </div>
        </button>
        <RegisterPage open={openRegisterWindow} closeWindow={handleOpenRegisterW} />
      </div>
    </>
  );
};

export default RightHeaderIcons;
