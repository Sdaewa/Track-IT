import React from "react";
import { Grid, Typography } from "@material-ui/core";

import Comment from "./Comment";

const CommentsList = (props) => {
  return (
    <Grid container wrap="nowrap" spacing={2}>
      <Grid justifyContent="right" item xs zeroMinWidth>
        <Typography style={{ textAlign: "left" }}>
          {props.comments.map((comment) => (
            <Comment key={comment.id} text={comment.text} />
          ))}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default CommentsList;
