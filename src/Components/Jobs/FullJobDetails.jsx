import React from "react";
import { Link } from "react-router-dom";
import { Grid, Divider, Typography } from "@material-ui/core";

const FullJobDetails = (props) => {
  return (
    <Grid
      style={{
        display: "block",
      }}>
      <div>
        <Typography align="center" variant="h4">
          Details
        </Typography>
        <Divider variant="fullWidth" style={{ margin: "30px 0" }} />
      </div>
      <div>
        <Typography>{props.company}</Typography>
      </div>
      <div>
        <Typography>{props.role}</Typography>
      </div>
      <div>
        <Typography>{props.techStack}</Typography>
      </div>
      <div>
        <Typography>{props.appliedDate}</Typography>
      </div>
      <Link className="btn" to={`/jobs`}>
        Back
      </Link>
    </Grid>
  );
};

export default FullJobDetails;
