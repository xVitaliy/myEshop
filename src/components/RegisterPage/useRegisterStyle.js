import { makeStyles } from "@mui/styles";

const useRegisterStyle = makeStyles(() => ({
  input: {
    "& .css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input": {
      width: "352px",
      height: "32px",
      boxSizing: "border-box",
    },
    "& .css-1h2guqh-MuiFormControl-root": {
      marginBottom: "16px",
      marginTop: 0,
    },
    "& .css-14s5rfu-MuiFormLabel-root-MuiInputLabel-root.Mui-error": {
      top: "-30%",
    }
  },
  btn: {
    padding: "8px 54px",
    backgroundColor: "#0B486B",
    borderRadius: "8px"
  },
  closeBtn: {
    "& .css-1e6y48t-MuiButtonBase-root-MuiButton-root": {
      minWidth: 0
    }
  }
}));

export default useRegisterStyle;
