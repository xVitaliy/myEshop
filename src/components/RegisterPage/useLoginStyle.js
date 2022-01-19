import { makeStyles } from "@mui/styles";

export const useLoginStyle = makeStyles(() => ({
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

export const useRegisterStyle = makeStyles(() => ({
  input: {
    "& .css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input": {
      width: "352px",
      height: "32px",
      padding: "0 10px",
      boxSizing: "border-box",
    },
    "& .css-14s5rfu-MuiFormLabel-root-MuiInputLabel-root.Mui-error": {
      top: "-30%",
    }
  },
  name: {
    display: "flex",
    justifyContent: "space-between",
    "& .css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input": {
      width: "166px",
      height: "32px",
      paddingLeft: "10px",
      boxSizing: "border-box",
    }
  },
  form: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  hr: {
    width: "352px",
    border: "1px solid rgba(0, 0, 0, 0.1)",
    marginTop: "20px",
  },
  btnContainer: {
    textAlign: "center",
    "& .css-sghohy-MuiButtonBase-root-MuiButton-root": {
      background: "#0B486B",
      borderRadius: "8px",
      padding: "8px 16px"
    }
  },
  buttonRegister: {
    marginTop: "16px",
  },
  closeBtn: {
    "& .css-1e6y48t-MuiButtonBase-root-MuiButton-root": {
      minWidth: 0,
      padding: 0,
    }
  }
}));
