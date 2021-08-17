import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: "grey",
    padding: theme.spacing(8, 0, 6),
  },
  iconButton: {
    margin: "16px",
    padding: "16px",
  },
}));

export default useStyles;
