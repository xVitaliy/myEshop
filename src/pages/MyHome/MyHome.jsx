import React from "react";
import { useQuery } from "@apollo/client";
import HomeHorizontal from "./Horizontal/HomeHorizontal";
import classes from "./MyHome.module.css";
import getSelectionGQL from "../../graphql/queries.gql";

const MyHome = () => {
  const { loading, data } = useQuery(getSelectionGQL, {
    fetchPolicy: "network-only",
    variables: {
      page: "HOME_PAGE",
    }
  });
  if (loading) return <div>Loading...</div>;

  const result = data.getSelection.filter((obj) => {
    return obj.style === "HORIZONTAL";
  });
  const firstHorizontal = result[0];
  // const secondHorizontal = result[1];

  return (
    <div className={classes.homeWrapper}>

      <HomeHorizontal data={firstHorizontal} />

    </div>
  );
};

export default MyHome;
