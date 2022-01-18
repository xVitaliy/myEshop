import React from "react";
import { useQuery } from "@apollo/client";
/* eslint-disable no-unused-vars */
const AllBooks = () => {
  const { data } = useQuery();
  return (
    <div>
      AllBook
    </div>
  );
};

export default AllBooks;
