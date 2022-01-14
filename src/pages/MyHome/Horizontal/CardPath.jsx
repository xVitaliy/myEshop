import React from "react";
import { Button } from "@mui/material";
// eslint-disable-next-line no-unused-vars
import { Route } from "react-router-dom";
import classes from "./Horizontal.module.css";
import { ReactComponent as LogoBtn } from "../../../assets/icons/bx_bxs-book-bookmark.svg";

const CardPath = ({ book }) => {
  const {
    // eslint-disable-next-line no-unused-vars
    id, authors, cover, issueYear, price, subject, title
  } = book;
  return (
    <div className={classes.cardWrapper}>
      <a href="/">
        <img src={`${process.env.REACT_APP_URL}${cover}`} alt="img" />
      </a>
      <div className={classes.cardInner}>
        <div className={classes.bookName}>{ subject.name }</div>
        <div className={classes.nameAndYear}>
          <div className={classes.authors}>{ authors }</div>
          <div className={classes.year}>{ issueYear }</div>
        </div>
        <div className={classes.details}>
          <Button
            startIcon={<LogoBtn fill="#ffffff" width={12} height={13.33} />}
            variant="contained"
          >Подробнее
          </Button>

        </div>
      </div>
    </div>
  );
};

export default CardPath;
