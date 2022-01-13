import { makeStyles } from "@mui/styles";

const useStyle = makeStyles(() => ({
  listContainer: {
    "&.MuiList-root": {
      display: "flex",
      alignItems: "center",
      height: 24,
      padding: 0,
      width: 701,
    },
    "& .MuiListItem-root": {
      width: "unset",
      padding: 0,
      marginRight: 40,
    },
    "& .MuiListItemButton-root:hover": {
      backgroundColor: "transparent",
    },
    "& .MuiListItem-root:last-child": {
      marginRight: 0,
    },
    "& .MuiListItemButton-root": {
      padding: 0,
    },
    "& a": {
      color: "#ffffff",
      textDecoration: "none",
    },
    "& a:hover": {
      textDecoration: "underline",
    },
  },
}));

export default useStyle;
