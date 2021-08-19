import { Typography } from "@material-ui/core";
import React from "react";

const Comment = (props) => {
  return (
    <li style={{ listStyle: "none" }}>
      <Typography variant="subtitle1" paragraph style={{ padding: "10px" }}>
        {props.text}
      </Typography>
    </li>
  );
};

export default Comment;
