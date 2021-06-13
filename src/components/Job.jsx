import React from "react";

import classes from "./Job.module.css";

const Job = (props) => {
  return (
    <li className={classes.movie}>
      <h1>{props.company}</h1>
      <h2>{props.role}</h2>
      <h2>{props.techStack}</h2>
      <p>{props.location}</p>
      <p>{props.appliedDate}</p>
    </li>
  );
};

export default Job;
