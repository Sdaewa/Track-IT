import React from "react";
import { Link } from "react-router-dom";

const NoJobsFound = () => {
  return (
    <div>
      <p>No jobs found</p>
      <Link className="btn" to="/new-job">
        Add a Job
      </Link>
    </div>
  );
};

export default NoJobsFound;
