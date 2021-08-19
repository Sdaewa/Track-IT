import React from "react";
import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  Grid,
  Typography,
  Box,
  Container,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import Card from "../UI/Card";
import ProfileForm from "./ProfileForm";

const useStyles = makeStyles((theme) => ({
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
}));

const UserProfile = () => {
  const classes = useStyles();

  return (
    <Card>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Grid style={{ textAlign: "center" }}>
          <Avatar
            style={{ display: "inline-flex", marginBottom: "10px" }}
            className={classes.avatar}>
            <AccountCircleIcon />
          </Avatar>
          <Typography variant="h4">Profile</Typography>
          <ProfileForm />
        </Grid>
      </Container>
    </Card>
  );
};

export default UserProfile;
