import React from "react";
// import { Button } from "@material-ui/core";
// import { Delete } from "@material-ui/icons";
import { Grid } from "@material-ui/core";
import { Card } from "@material-ui/core";
import { CardActions } from "@material-ui/core";
import { CardContent } from "@material-ui/core";
// import CssBaseline from "@material-ui/core/CssBaseline";
// import { makeStyles } from "@material-ui/core/styles";
// import Container from "@material-ui/core/Container";
// import Link from "@material-ui/core/Link";

import classes from "./Job.module.css";

const Job = (props) => {
  return (
    <Grid item>
      <Card variant="outlined">
        <CardContent className="centered">
          <li className={classes.job}>
            <div>
              <h1>{props.company}</h1>
              <p>{props.appliedDate}</p>
            </div>
          </li>
        </CardContent>
        <CardActions></CardActions>
      </Card>
    </Grid>
  );
};

export default Job;
