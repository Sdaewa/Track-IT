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
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardGrid: {
    padding: "20px 0",
  },
  cardMedia: {
    paddingTop: "56.25%",
  },
  cardContent: {
    flexGrow: 1,
  },
}));

export default useStyles;
