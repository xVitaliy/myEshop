import React from "react";
import { useQuery } from "@apollo/client";
import HomeHorizontal from "./Horizontal/HomeHorizontal";
import classes from "./MyHome.module.css";
import { getSelectionGQL } from "../../graphql/queries.gql";
import Section from "./Horizontal/Section";
/* eslint-disable no-unused-vars */

const MyHome = () => {
  const { loading, data } = useQuery(getSelectionGQL, {
    fetchPolicy: "network-only",
    variables: {
      page: "HOME_PAGE",
    },
  });
  if (loading) return <div>Loading...</div>;

  const horizontalData = data.getSelection.filter((obj) => {
    return obj.style === "HORIZONTAL";
  });
  const firstHorizontal = horizontalData[0];
  // const secondHorizontal = horizontalData[1];

  const mainLeft = data.getSelection.filter((obj) => {
    return obj.style === "MAIN_LEFT";
  });

  const mainRight = data.getSelection.filter((obj) => {
    return obj.style === "MAIN_RIGHT";
  });

  return (
    <div className={classes.homeWrapper}>
      <HomeHorizontal data={firstHorizontal} />
      <Section data={mainLeft[0]} position={false} />
      <Section data={mainRight[0]} position />
      <HomeHorizontal data={firstHorizontal} />
      <Section data={mainLeft[0]} position={false} />
    </div>
  );
};

export default MyHome;
