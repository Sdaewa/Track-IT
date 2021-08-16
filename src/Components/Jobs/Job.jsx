import React from "react";
import { Button } from "@material-ui/core";
import { Delete } from "@material-ui/icons";

import classes from "./Job.module.css";

const Job = (props) => {
  const deleteHandler = (event) => {
    event.preventDefault();
    props.onDelete(props.id);
  };

  return (
    <li className={classes.job}>
      <div>
        <h1>{props.company}</h1>
      </div>
      <Button variant="contained" className="btn" href={`/jobs/${props.id}`}>
        More Details
      </Button>
      <Button
        startIcon={<Delete />}
        variant="contained"
        className="btn"
        onClick={deleteHandler}>
        Delete
      </Button>
    </li>
  );
};

export default Job;
