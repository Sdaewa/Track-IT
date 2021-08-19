import React from "react";
import { ReactComponent as NotFoundImg } from "../img/notFound.svg";
import { Typography, Grid } from "@material-ui/core";

import Card from "../Components/UI/Card";

const NotFound = () => {
  return (
    <Card>
      <Grid container>
        <Grid item>
          <NotFoundImg style={{ transform: "scale(0.8)" }} />
          <Typography variant="h4" align="center" gutterBottom>
            Could not find that
          </Typography>
        </Grid>
      </Grid>
    </Card>
  );
};

export default NotFound;
