import React from "react";
import { Link } from "react-router-dom";

import classes from "./Job.module.css";

const Job = (props) => {
  return (
    <li className={classes.job}>
      <div>
        <h1>{props.company}</h1>
      </div>
      <Link className="btn" to={`/jobs/${props.id}`}>
        More Details
      </Link>
    </li>
  );
};

export default Job;
