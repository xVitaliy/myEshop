import { ApolloClient, ApolloLink, InMemoryCache } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { onError } from "@apollo/client/link/error";
import { createUploadLink } from "apollo-upload-client";
import axios from "axios";
import { toast } from "react-toastify";

// eslint-disable-next-line no-undef
const { buildAxiosFetch } = require("@lifeomic/axios-fetch");

const httpLink = createUploadLink({
  // eslint-disable-next-line no-undef
  uri: `${process.env.REACT_APP_GRAPHQL_URL || ""}`,
  fetch: buildAxiosFetch(axios, (config, input, init) => ({
    ...config,
    onUploadProgress: init.onUploadProgress,
    onError: (e) => console.log("ERROR IN FETCH...", e),
  })),
});
const errorLink = onError(({ networkError, graphQLErrors }) => {
  toast.error(
    `🦄${networkError || ""}${
      (graphQLErrors && graphQLErrors[0] && graphQLErrors[0].message) || ""
    }`,
    {
      position: "bottom-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "dark",
    }
  );
  console.log("graphQLErrors", graphQLErrors);
  console.log("networkError", networkError);
});
const authLink = setContext(async (_, { headers }) => {
  const token = localStorage.getItem("token") || sessionStorage.getItem("token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: ApolloLink.from([errorLink, authLink, httpLink]),
  cache: new InMemoryCache({
    addTypename: false,
  }),
});

export default client;
