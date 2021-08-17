import React from "react";
import {
  Typography,
  Card,
  CardContent,
  CardActions,
  CardMedia,
  Grid,
  Button,
} from "@material-ui/core";

import useStyles from "./stylesJob";

const Job = (props) => {
  const classes = useStyles();

  const deleteHandler = (event) => {
    event.preventDefault();
    props.onDelete(props.id);
  };

  return (
    <>
      <Grid item xs={12} sm={6} md={4}>
        <Card className={classes.card}>
          <CardMedia
            className={classes.cardMedia}
            image="https://images.unsplash.com/photo-1516259762381-22954d7d3ad2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1966&q=80"
            title="Image title"
          />
          <CardContent className={classes.cardContent}>
            <Typography variant="h5" gutterBottom>
              {props.company}
            </Typography>
            <Typography>{props.day}</Typography>
          </CardContent>
          <CardActions>
            <Button
              variant="contained"
              color="primary"
              href={`/jobs/${props.id}`}>
              Details
            </Button>
            <Button
              variant="contained"
              color="secondary"
              onClick={deleteHandler}>
              Delete
            </Button>
          </CardActions>
        </Card>
      </Grid>
    </>
  );
};

export default Job;
