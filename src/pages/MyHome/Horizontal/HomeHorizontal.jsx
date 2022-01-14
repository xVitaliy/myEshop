import React from "react";
import classes from "./Horizontal.module.css";
import CardPath from "./CardPath";

const HomeHorizontal = ({ data }) => {
  // eslint-disable-next-line no-unused-vars
  const { id, title, textbooks } = data;

  return (
    <div className={classes.mainBlock}>
      <div className={classes.title}>
        { title }
      </div>
      <div className={classes.cardBlock}>
        <div className={classes.absoluteBlock}>
          <div className={classes.bookList}>
            { textbooks.map((book) => {
              return (
                <React.Fragment key={book.id}>
                  <CardPath book={book} />
                </React.Fragment>
              );
            }) }
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeHorizontal;
