import React from "react";
import { BrowserRouter } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import Router from "./components/router";
import Layout from "./layout";

const App = () => {
  return (
    <BrowserRouter>
      <CssBaseline />
      <Layout>
        <Router />
      </Layout>
    </BrowserRouter>
  );
};

export default App;
