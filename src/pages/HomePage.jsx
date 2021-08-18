import React from "react";
import { Typography, Grid } from "@material-ui/core";

import { ReactComponent as HomeImg } from "../img/homeImg.svg";

const HomePage = () => {
  return (
    <Grid container>
      <Grid item>
        <Typography variant="h2" align="center">
          Welcome to Track IT
        </Typography>
        <br />
        <HomeImg />
        <Typography variant="h4" align="center">
          Keep track of all the job applications in one place
        </Typography>
      </Grid>
    </Grid>
  );
};

export default HomePage;
