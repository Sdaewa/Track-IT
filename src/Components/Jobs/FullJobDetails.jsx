import React from "react";
import { Fragment } from "react";
import { Link } from "react-router-dom";

import classes from "./FullJobDetails.module.css";

const FullJobDetails = (props) => {
  return (
    <Fragment>
      <figure className={classes.job}>
        <p>{props.company}</p>
        <p>{props.role}</p>
        <p>{props.techStack}</p>
        <p>{props.appliedDate}</p>
        <Link className="btn" to={`/jobs`}>
          Back
        </Link>
      </figure>
    </Fragment>
  );
};

export default FullJobDetails;
