import { makeStyles } from "@material-ui/core/styles";
import { amber, deepPurple } from "@material-ui/core/colors";

export default makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
  },
  card: {
    display: "flex",
    minWidth: 1000,
    minHeight: 600,
  },
  alert: {
    margin: theme.spacing(1),
    width: "43.5ch",
  },
  spacing: {
    margin: 10,
  },
  formInputs: {
    display: "flex",
    flexDirection: "column",
    "& > *": {
      margin: theme.spacing(1),
      width: "32ch",
    },
  },
  left: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "50%",
  },
  right: {
    width: "50%",
    background: "linear-gradient(to right, #b79891, #94716b)",
  },
  leftContents: {
    minWidth: 376,
    minHeight: 500,
  },
  subLinks: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  btn: {
    "& > *": {
      width: "41ch",
      height: "6ch",
      color: theme.palette.getContrastText(amber[400]),
      backgroundColor: amber[300],
      textTransform: "none",
      "&:hover": {
        backgroundColor: amber[700],
      },
    },
  },
  btnGoogle: {
    "& > *": {
      width: "41ch",
      height: "6ch",
      textTransform: "none",
      color: theme.palette.getContrastText(deepPurple[100]),
      backgroundColor: deepPurple[50],
      "&:hover": {
        backgroundColor: deepPurple[100],
      },
    },
  },
}));
