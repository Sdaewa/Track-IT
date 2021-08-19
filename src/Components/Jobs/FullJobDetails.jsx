import React from "react";
import { Link } from "react-router-dom";
import {
  Grid,
  Box,
  Divider,
  Typography,
  Button,
  CssBaseline,
} from "@material-ui/core";

const FullJobDetails = (props) => {
  return (
    <>
      <CssBaseline />
      <Grid
        container
        style={{
          display: "block",
        }}>
        <Grid item>
          <div>
            <Typography align="center" variant="h3">
              Details
            </Typography>
            <Divider variant="fullWidth" style={{ margin: "30px 0" }} />
          </div>
          <div>
            <Typography gutterBottom variant="h5" align="center">
              {props.company}
            </Typography>
          </div>
          <div>
            <Typography gutterBottom variant="h6" align="center">
              {props.role}
            </Typography>
          </div>
          <div>
            <Typography gutterBottom variant="h6" align="center">
              {props.techStack}
            </Typography>
          </div>
          <div>
            <Typography gutterBottom variant="h6" align="center">
              {props.appliedDate}
            </Typography>
          </div>
          <Box textAlign="center" padding="10px">
            <Button variant="contained" color="primary" size="small">
              <Link
                style={{ textDecoration: "none", color: "white" }}
                to={`/jobs`}>
                Back
              </Link>
            </Button>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default FullJobDetails;
