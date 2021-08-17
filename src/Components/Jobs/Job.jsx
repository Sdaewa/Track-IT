import React from "react";

import classes from "./Job.module.css";

const Job = (props) => {
  return (
    <li className={classes.job}>
      <div>
        <h1>{props.company}</h1>
      </div>
    </li>
  );
};

export default Job;
