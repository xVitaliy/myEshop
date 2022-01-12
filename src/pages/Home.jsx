import React from "react";
import { useQuery } from "@apollo/client";
import getSelectionGQL from "../graphql/queries.gql";
import classes from "./Home.module.css";

const Home = () => {
  const { loading, data } = useQuery(getSelectionGQL, {
    fetchPolicy: "network-only",
    variables: {
      page: "HOME_PAGE",
    },
  });
  if (loading) return <div>Loading...</div>;

  const response = data.getSelection.find((section) => {
    return section.style === "HORIZONTAL";
  }).textbooks.map((item) => (
    <Card
      key={Math.random()}
      url={`${process.env.REACT_APP_URL}${item.cover}`}
    >
      text
    </Card>
  ));
  return (
    <div className={classes.homePage}>
      <div className={classes.firstHorizontal}>
        <div className={classes.ceil}>
          Новинки
        </div>
        <div className={classes.bookListWrapper}>
          <div className={classes.booksList}>
            <div className={classes.booksListCard}>
              { response }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

function Card({ url }) {
  return (
    <div className={classes.card}>
      <img src={url} alt="img" />
    </div>
  );
}
