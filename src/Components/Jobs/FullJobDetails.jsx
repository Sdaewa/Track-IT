import React from "react";

import classes from "./FullJobDetails.module.css";

const FullJobDetails = (props) => {
  return (
    <figure className={classes.job}>
      <p>{props.company}</p>
      <p>{props.role}</p>
      <p>{props.techStack}</p>
      <p>{props.appliedDate}</p>
    </figure>
  );
};

export default FullJobDetails;
