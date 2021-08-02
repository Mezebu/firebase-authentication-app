import { makeStyles } from "@material-ui/core/styles";
import { blue, grey } from "@material-ui/core/colors";

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
  headerSpacing: {
    margin: 55,
  },
  spacing: {
    margin: 10,
  },
  alert: {
    margin: theme.spacing(1),
    width: "43.5ch",
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
    height: "100%",
  },
  right: {
    width: "50%",
    height: "100%",
  },
  leftContents: {
    minWidth: 376,
    minHeight: 500,
  },
  submitBtn: {
    "& > *": {
      width: "41ch",
      height: "6ch",
      color: theme.palette.getContrastText(blue[400]),
      backgroundColor: blue[300],
      textTransform: "none",
      "&:hover": {
        backgroundColor: blue[700],
      },
    },
  },
  signInbtn: {
    "& > *": {
      width: "41ch",
      height: "6ch",
      textTransform: "none",
      color: theme.palette.getContrastText(grey[200]),
      backgroundColor: grey[400],
      "&:hover": {
        backgroundColor: grey[500],
      },
    },
  },
}));
