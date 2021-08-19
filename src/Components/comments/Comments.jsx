import React from "react";
import { useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";
import { Grid, Typography } from "@material-ui/core";

import NewCommentForm from "./NewCommentForm";
import useHttp from "../../hooks/use-http";
import { getAllComments } from "../../lib/api";
import LoadingSpinner from "../UI/LoadingSpinner";
import CommentsList from "./CommentsList";

const Comments = () => {
  const params = useParams();
  const { jobId } = params;
  const { sendRequest, status, data: loadedComments } = useHttp(getAllComments);

  useEffect(() => {
    sendRequest(jobId);
  }, [jobId, sendRequest]);

  const addedCommentHandler = useCallback(() => {
    sendRequest(jobId);
  }, [sendRequest, jobId]);

  let comments;

  if (status === "pending") {
    comments = (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }

  if (status === "completed" && loadedComments && loadedComments.length > 0) {
    comments = <CommentsList comments={loadedComments} />;
  }

  if (
    status === "completed" &&
    (!loadedComments || loadedComments.length === 0)
  ) {
    comments = <p className="centered">No comments</p>;
  }

  return (
    <Grid container alignItems="center">
      <Grid item>
        <Typography variant="h5">Comments</Typography>
        <Grid item>{comments}</Grid>
        <NewCommentForm jobId={jobId} onAddedComment={addedCommentHandler} />
      </Grid>
    </Grid>
  );
};

export default Comments;
