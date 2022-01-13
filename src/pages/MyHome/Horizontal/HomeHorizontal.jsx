import React from "react";
import classes from "./Horizontal.module.css";
import CardPath from "./CardPath";

const HomeHorizontal = ({ data }) => {
  const { id, title, textbooks } = data;

  return (
    <div className={classes.mainBlock}>
      <div>
        { title }
      </div>
      <div>
        { textbooks.map((book) => {
          return (
            <React.Fragment key={book.id}><CardPath book={book} /></React.Fragment>
          );
        }) }
      </div>
    </div>
  );
};

export default HomeHorizontal;
