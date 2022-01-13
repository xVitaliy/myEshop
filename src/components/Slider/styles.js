import { makeStyles } from "@mui/styles";

// eslint-disable-next-line import/prefer-default-export
export const useStyle = makeStyles(() => ({
  dots: {
    bottom: -36,
    "& li.slick-active button::before": {
      color: "#0B486B",
      fontSize: 16,
      opacity: 1,
    },
    "& li": {
      margin: "0 8px",
      "& button::before": {
        opacity: 1,
        color: "#D6DDE0",
        fontSize: 16,
      },
    },
  },
}));
