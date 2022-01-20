import React from "react";
import classes from "./section.module.css";
import CardPath from "./CardPath";
import SimpleSlider from "../../../components/Slider/SimpleSlider";
/* eslint-disable no-unused-vars */

const Section = ({ data, position }) => {
  const { title, slider, textbooks } = data;

  const left = [];
  const right = [];

  textbooks.forEach((book) => {
    if (book.id === "6") {
      left.push(book);
    } else {
      right.push(book);
    }
  });

  return (
    <div className={classes.sectionWrapper}>
      <div className={classes.title}>{ title }</div>
      <div
        style={{ flexDirection: position ? "row-reverse" : "row" }}
        className={classes.main}
      >
        <div className={classes.mainLeft}>
          { " " }
          { left.map((book) => {
            return <CardPath key={book.id} book={book} />;
          }) }
        </div>
        <div className={classes.mainRight}>
          <div className={classes.mainRightCeil}>
            { right.map((book) => {
              return (
                <div key={book.id} className={classes.mainRightCeilCard}>
                  <CardPath book={book} />
                </div>
              );
            }) }
          </div>
          <div className={classes.rightSlider}>
            <SimpleSlider props={slider} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section;
