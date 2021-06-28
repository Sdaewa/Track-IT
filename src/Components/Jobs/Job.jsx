import React, { useEffect } from "react";
import { Link, useHistory } from "react-router-dom";

import classes from "./Job.module.css";

const Job = (props) => {
  const history = useHistory();

  const deleteHandler = (event) => {
    event.preventDefault();
    props.onDelete(props.id);
  };

  return (
    <li className={classes.job}>
      <div>
        <h1>{props.company}</h1>
      </div>
      <Link className="btn" to={`/jobs/${props.id}`}>
        More Details
      </Link>
      <button className="btn" onClick={deleteHandler}>
        Delete
      </button>
    </li>
  );
};

export default Job;
