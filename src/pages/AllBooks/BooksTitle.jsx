import React from "react";
import classes from "./AllBook.module.css";
import CardPath from "../MyHome/Horizontal/CardPath";

const BooksTitle = ({ data }) => {
  const res = data.getTextbooks.textbooks.map((book) => (
    <React.Fragment key={book.id}><CardPath
      book={book}
    />
    </React.Fragment>
  ));
  return (
    <div className={classes.allBooksWrapper}>
      { res }
    </div>
  );
};

export default BooksTitle;
