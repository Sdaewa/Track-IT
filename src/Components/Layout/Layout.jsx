import React from "react";
import { Fragment } from "react";
import { Container } from "@material-ui/core";

import classes from "./Layout.module.css";
import MainNavigation from "./MainNavigation";

const Layout = (props) => {
  return (
    <Fragment>
      <Container bgcolor="grey" maxWidth="lg">
        <MainNavigation />
        <main className={classes.main}>{props.children}</main>
      </Container>
    </Fragment>
  );
};

export default Layout;
