import React from "react";

const CardPath = ({ book }) => {
  const {
    id, authors, cover, issueYear, price, subject, title
  } = book;

  return (
    <img src={`${process.env.REACT_APP_URL}${cover}`} alt="img" />
  );
};

export default CardPath;
