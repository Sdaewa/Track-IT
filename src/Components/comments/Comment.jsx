import React from "react";

import classes from "./Comment.module.css";

const Comment = (props) => {
  return (
    <li className={classes.comment}>
      <p>{props.text}</p>
    </li>
  );
};

export default Comment;
