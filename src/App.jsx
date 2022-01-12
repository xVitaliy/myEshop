import React from "react";
import { BrowserRouter } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import { ApolloProvider } from "@apollo/client";
import Router from "./components/router";
import Layout from "./layout";
import client from "./graphql/client";

const App = () => {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <CssBaseline />
        <Layout>
          <Router />
        </Layout>
      </BrowserRouter>
    </ApolloProvider>
  );
};

export default App;
