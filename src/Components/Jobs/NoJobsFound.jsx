import React from "react";
import { Link } from "react-router-dom";
import { Typography, Grid, Button, CssBaseline } from "@material-ui/core";

import Card from "../../Components/UI/Card";

const NoJobsFound = () => {
  return (
    <Card>
      <CssBaseline />
      <Grid container>
        <Grid item>
          <Typography variant="h3" align="center" gutterBottom>
            Nothing added yet!
          </Typography>
          <Typography align="center" gutterBottom>
            <Button variant="contained" color="primary">
              <Link
                style={{ textDecoration: "none", color: "white" }}
                className="btn"
                to="/new-job">
                Start
              </Link>
            </Button>
          </Typography>
        </Grid>
      </Grid>
    </Card>
  );
};

export default NoJobsFound;
