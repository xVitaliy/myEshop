import React from "react";
import { useQuery } from "@apollo/client";
import classes from "./AllBook.module.css";
import { getListTextBooksGQL } from "../../graphql/queries.gql";

const Aside = () => {
  const { loading, data } = useQuery(getListTextBooksGQL);

  if (loading) return <div>Loading...</div>;

  const list = data.selectingsList.subjects.map(({ id, name }) => (
    <div key={id} className={classes.asideList}>
      <li>{name}</li>
    </div>
  ));
  return (
    <div className={classes.asideBlock}>
      <div className={classes.asideWrapper}>
        <div className={classes.asideText}>Предметы</div>
        <hr className={classes.asideHr} />
        <div>
          <ol className={classes.asideOl}>{list}</ol>
        </div>
      </div>
    </div>
  );
};

export default Aside;
