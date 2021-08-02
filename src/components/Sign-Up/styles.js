import { makeStyles } from "@material-ui/core/styles";
import { blue } from "@material-ui/core/colors";

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
    margin: 45,
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
  alert: {
    width: "45ch",
  },
  left: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "50%",
    height: "100%",
  },
  leftContents: {
    minWidth: 376,
    minHeight: 500,
  },
  right: {
    width: "50%",
    background: "linear-gradient(to right, #36d1dc, #5b86e5)",
  },
  btn: {
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
}));
