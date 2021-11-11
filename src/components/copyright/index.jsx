import Typography from "@mui/material/Typography";
import React from "react";
import { Link } from "react-router-dom";
import * as style from "./style.module.css";

const Copyright = () => (
  <div className={style.copyright}>
    <Typography component="p">
      &copy;2021, partashop.ru <Link to="/rules">Правила и Условия</Link>
    </Typography>
  </div>
);

export default Copyright;
