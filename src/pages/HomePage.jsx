import React from "react";
import { Typography, Grid } from "@material-ui/core";

import { ReactComponent as HomeImg } from "../img/homeImg.svg";

const HomePage = () => {
  return (
    <Grid container xs={12} sm={6} md={4}>
      <Grid item>
        <Typography variant="h2" align="center">
          Welcome to Track IT
        </Typography>
        <br />
        <HomeImg style={{ transform: "scale(0.8)" }} />
        <Typography variant="h4" align="center">
          Keep track of your job applications in one place
        </Typography>
      </Grid>
    </Grid>
  );
};

export default HomePage;
