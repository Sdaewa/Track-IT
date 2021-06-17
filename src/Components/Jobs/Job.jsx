import React from "react";
import { Link } from "react-router-dom";

import classes from "./Job.module.css";

const Job = (props) => {
  return (
    <Link className={classes.job} to={`/applications/${props.id}`}>
      <h1>{props.company}</h1>
    </Link>
  );
};

export default Job;
