import React from "react";

import Comment from "./Comment";
import classes from "./CommentsList.module.css";

const CommentsList = (props) => {
  return (
    <ul className={classes.comments}>
      {props.comments.map((comment) => (
        <Comment key={comment.id} text={comment.text} />
      ))}
    </ul>
  );
};

export default CommentsList;
