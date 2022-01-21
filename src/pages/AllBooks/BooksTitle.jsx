// import React from "react";
// import { useQuery } from "@apollo/client";
// import { getAllTextBooks } from "../../graphql/queries.gql";
// import CardPath from "../MyHome/Horizontal/CardPath";
// import classes from "./AllBook.module.css";
//
// const BooksTitle = () => {
//   const { loading, data } = useQuery(getAllTextBooks, {
//     variables: {
//       options: {}
//     }
//   });
//
//   if (loading) return <div>Loading...</div>;
//
//   const res = data.getTextbooks.textbooks.map((book) => (
//     <React.Fragment key={book.id}><CardPath
//       book={book}
//     />
//     </React.Fragment>
//   ));
//   return (
//     <div className={classes.allBooksWrapper}>
//       { res }
//     </div>
//   );
// };
//
// export default BooksTitle;
