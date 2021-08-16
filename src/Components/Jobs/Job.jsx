import React from "react";
import { Button } from "@material-ui/core";
import { Delete } from "@material-ui/icons";
import { Box } from "@material-ui/core";
import { Grid } from "@material-ui/core";

import Card from "@material-ui/core/Card";

import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";

import classes from "./Job.module.css";

const Job = (props) => {
  const deleteHandler = (event) => {
    event.preventDefault();
    props.onDelete(props.id);
  };

  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      style={{ minHeight: "auto", padding: "8px" }}>
      <Card className={classes.root} variant="outlined">
        <CardContent>
          <li className={classes.job}>
            <Box>
              <h1>{props.company}</h1>
              <p>{props.appliedDate}</p>
            </Box>
          </li>
        </CardContent>
        <CardActions>
          <Button
            variant="contained"
            className="btn"
            href={`/jobs/${props.id}`}>
            Details
          </Button>
          <Button
            startIcon={<Delete />}
            variant="contained"
            className="btn"
            onClick={deleteHandler}>
            Delete
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default Job;
