import React from "react";
import { IconButton, InputBase, Paper } from "@mui/material";
import SearchIcon from "./HeaderIcons/Search-Icon.svg";

const paper = {
  p: "2px 4px",
  display: "flex",
  alignItems: "center",
  width: 811,
  height: 32,
  borderRadius: "8px"
};

const InputHeader = () => {
  return (
    <Paper
      component="form"
      sx={paper}
    >

      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Название, предмет, авто"
      />
      <IconButton type="submit" sx={{ p: "10px" }} aria-label="search">
        <img src={SearchIcon} alt="SearchIcon" />
      </IconButton>

    </Paper>
  );
};

export default InputHeader;
