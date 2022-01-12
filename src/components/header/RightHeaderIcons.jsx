import React from "react";
import bell from "./HeaderIcons/bell.svg";
import topBarUser from "./HeaderIcons/topbar_user.svg";
import classes from "./style.module.css";
import books from "./HeaderIcons/books.svg";

const RightHeaderIcons = () => {
  return (
    <>
      <div className={classes.iconRight}>
        <img src={bell} alt="bell" />
      </div>
      <div className={classes.iconRight}>
        <img src={books} alt="book" />
      </div>
      <div>
        <div className={classes.topBarUser}>
          <img src={topBarUser} alt="search" />
        </div>
      </div>
    </>
  );
};

export default RightHeaderIcons;
