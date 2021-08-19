import React from "react";
import { useRef, useEffect, useState } from "react";
import { Divider, Button, TextField, Grid } from "@material-ui/core";

import useHttp from "../../hooks/use-http";
import { addComment } from "../../lib/api";
import LoadingSpinner from "../UI/LoadingSpinner";

const NewCommentForm = (props) => {
  const commentTextRef = useRef();
  const [inputValue, setInputValue] = useState("");
  const { sendRequest, status, error } = useHttp(addComment);
  const { onAddedComment } = props;

  useEffect(() => {
    if (status === "completed" && !error) {
      onAddedComment();
    }
  }, [status, error, onAddedComment]);

  const submitFormHandler = (event) => {
    event.preventDefault();
    setInputValue("");
    let enteredText = commentTextRef.current.value;

    // optional: Could validate here

    sendRequest({ commentData: { text: enteredText }, jobId: props.jobId });
  };

  return (
    <Grid style={{ textAlign: "center", display: "block" }} container>
      <form onSubmit={submitFormHandler}>
        {status === "pending" && (
          <div>
            <LoadingSpinner />
          </div>
        )}
        <Grid item onSubmit={submitFormHandler}>
          <Divider variant="fullWidth" style={{ margin: "30px 0" }} />
          <TextField
            style={{
              width: "30vw",
            }}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            size="medium"
            id="outlined-multiline-static"
            multiline
            rows={8}
            type="reset"
            variant="outlined"
            inputRef={commentTextRef}
          />
          <Grid item style={{ textAlign: "center", paddingTop: "25px" }}>
            <Button
              type="submit"
              size="small"
              variant="contained"
              color="primary"
              className="btn">
              Add Comment
            </Button>
          </Grid>
        </Grid>
      </form>
    </Grid>
  );
};

export default NewCommentForm;
