import React from "react";
import { Link } from "react-router-dom";

import classes from "./Job.module.css";

const Job = (props) => {
  return (
    <li className={classes.job}>
      <figure>
        <p>{props.company}</p>
      </figure>
      <Link className="btn" to={`/jobs/${props.id}`}>
        Details
      </Link>
    </li>
  );
};

export default Job;
