import React from "react";
import { Link } from "react-router-dom";
import { Grid } from "@material-ui/core";

import classes from "./FullJobDetails.module.css";

const FullJobDetails = (props) => {
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center">
      <figure className={classes.job}>
        <h1>{props.company}</h1>
        <h1>{props.role}</h1>
        <p>{props.techStack}</p>
        <p>{props.appliedDate}</p>
        <Link className="btn" to={`/jobs`}>
          Back
        </Link>
      </figure>
    </Grid>
  );
};

export default FullJobDetails;
