import React from "react";
import { Button } from "@material-ui/core";
import { Delete } from "@material-ui/icons";
import { Grid } from "@material-ui/core";
import { Card } from "@material-ui/core";
import { CardActions } from "@material-ui/core";
import { CardContent } from "@material-ui/core";

import classes from "./Job.module.css";

const Job = (props) => {
  const deleteHandler = (event) => {
    event.preventDefault();
    props.onDelete(props.id);
  };

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
        <CardActions>
          <Button
            variant="contained"
            className="btn"
            color="primary"
            href={`/jobs/${props.id}`}>
            Details
          </Button>
          <Button
            startIcon={<Delete />}
            variant="contained"
            className="btn"
            color="secondary"
            onClick={deleteHandler}>
            Delete
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default Job;
