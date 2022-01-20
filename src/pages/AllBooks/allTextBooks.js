import { makeStyles } from "@mui/styles";

const useStyle = makeStyles(() => ({
  btnContainer: {
    "& .css-sghohy-MuiButtonBase-root-MuiButton-root": {
      backgroundColor: "#0B486B",
      marginLeft: "24px",
    },
  },
  inputHeader: {
    marginBottom: "24px",
    "& .css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input": {
      padding: "5px 10px",
    },
  },
  inputFooter: {
    display: "flex",
    justifyContent: "space-between",
    "& .css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input.css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input.css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input":
      {
        padding: "5px 10px",
        width: "531px",
      },
  },
}));

export default useStyle;
