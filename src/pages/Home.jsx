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
  })
    .textbooks.map((item) => (
      <div
        className={classes.card}
        key={Math.random()}
      ><Card
        url={`${process.env.REACT_APP_URL}${item.cover}`}
      />
      </div>
    ));

  const responseUniverse = data.getSelection.find((section) => {
    return (section.style === "MAIN_LEFT" && section.id === "1");
  });
  return (
    <div className={classes.homePage}>
      <div className={classes.homeContainer}>
        <div className={classes.firstHorizontal}>
          <div className={classes.ceil}>Новинки</div>
          <div className={classes.bookListWrapper}>
            <div className={classes.booksList}>
              <div className={classes.booksListCard}>{ response }</div>
            </div>
          </div>
        </div>
        <UniverseBlock data={responseUniverse} />
      </div>
    </div>
  );
};

export default Home;

function Card({ url }) {
  return (
    <div>
      <img src={url} alt="img" />
    </div>
  );
}

function UniverseBlock({ data }) {
  const { textbooks } = data;

  const bigImage = [];
  const smallImage = [];

  textbooks.filter((book) => {
    if (book.id === "6") {
      bigImage.push(book);
    } else {
      smallImage.push(book);
    }
    return true;
  });

  const leftBook = <Card url={`${process.env.REACT_APP_URL}${bigImage[0].cover}`} />;
  const rightCeilBooks = smallImage.map((book) => {
    return (
      <React.Fragment key={book.id}>
        <Card
          url={`${process.env.REACT_APP_URL}${book.cover}`}
        />
      </React.Fragment>
    );
  });

  return (
    <div className={classes.universeBlock}>
      <div className={classes.universeFloorBlock}>Для ВУЗов</div>
      <div className={classes.universeCeilBlock}>
        <div className={classes.universeLeftBlock}>
          <a href="/">{ leftBook }</a>
        </div>
        <div className={classes.universeRightBlock}>
          <div className={classes.universeRightCeil}>
            { rightCeilBooks }
          </div>
          <div className={classes.universeRightFloorSlider}>
            right Floor Slider
          </div>
        </div>
      </div>
    </div>
  );
}
