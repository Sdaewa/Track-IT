import React from "react";
import { Typography, Container, Link } from "@material-ui/core";
import GitHubIcon from "@material-ui/icons/GitHub";
import { makeStyles } from "@material-ui/core/styles";

function Github() {
  return (
    <Typography align="center" variant="body2" color="textSecondary">
      <Link color="inherit" href="https://github.com/sdaewa" target="_blank">
        <GitHubIcon />
      </Link>
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  footer: {
    padding: theme.spacing(3, 2),
    marginTop: "auto",
    backgroundColor: "#DEEDF0",
  },
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <>
      <footer className={classes.footer}>
        <Container maxWidth="sm">
          <Typography align="center" variant="body1">
            Luis Ramirez
          </Typography>
          <Github />
        </Container>
      </footer>
    </>
  );
};
export default Footer;
