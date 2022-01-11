import React from "react";
import {
  AppBar, Link
} from "@mui/material";
import classes from "./style.module.css";
import Logo from "./Logo";
import InputHeader from "./InputHeader";

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
        <div className={classes.rightBlock} />
      </div>
    </AppBar>
  );
};
export default Header;

// <FormControl variant="outlined" sx={formControl}>
//   <Input
//       sx={searchInput}
//       placeholder="Название, предмет, авто"
//       endAdornment={(
//           <IconButton>
//             <img src={SearchIcon} alt="SearchIcon" />
//           </IconButton>
//       )}
//   />
// </FormControl>

// display: flex;
// flex-direction: row;
// justify-content: space-between;
// align-items: center;
// padding: 4px 16px;
//
// position: static;
// width: 811px;
// height: 32px;
// left: 599px;
// top: 4px;

/* White */

// background: #FFFFFF;
// /* Sidemenu */
//
// border: 1px solid #4D6E7D;
// box-sizing: border-box;
// border-radius: 8px;
