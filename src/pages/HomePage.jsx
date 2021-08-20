import React from "react";
import { Typography, Grid } from "@material-ui/core";

import { ReactComponent as HomeImg } from "../img/homeImg.svg";
import Card from "../Components/UI/Card";

const HomePage = () => {
  return (
    <Card>
      <Grid container>
        <Grid item>
          <Typography variant="h2" align="center">
            Welcome to Track IT
          </Typography>
          <br />
          <HomeImg style={{ transform: "scale(0.8)", maxWidth: "100%" }} />
          <Typography variant="h4" align="center" gutterBottom>
            Keep track of your job applications in one place
          </Typography>
        </Grid>
      </Grid>
    </Card>
  );
};

export default HomePage;
