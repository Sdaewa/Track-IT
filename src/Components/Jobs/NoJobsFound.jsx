import React from "react";
import { Link } from "react-router-dom";

import classes from "./NoJobsFound.module.css";

const NoJobsFound = () => {
  return (
    <div className={classes.nojobs}>
      <p>No jobs found</p>
      <Link className="btn" to="/new-job">
        Add a Job
      </Link>
    </div>
  );
};

export default NoJobsFound;
