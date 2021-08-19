import React, { useRef, useContext } from "react";
import { useHistory } from "react-router-dom";
import { Box, Button, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import AuthContext from "../../store/auth-context";

import { URL_UPDATE } from "../../Config/config";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const CredentialsForm = () => {
  const history = useHistory();
  const classes = useStyles();

  const newPasswordInputRef = useRef();
  const newEmailInputRef = useRef();
  const authCtx = useContext(AuthContext);

  const submitHandler = (event) => {
    event.preventDefault();

    const newEmail = newEmailInputRef.current.value;
    const newPassword = newPasswordInputRef.current.value;

    fetch(URL_UPDATE, {
      method: "POST",
      body: JSON.stringify({
        idToken: authCtx.token,
        email: newEmail,
        password: newPassword,
        returnSecureToken: true,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      history.replace("/");
    });
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.control}>
        <TextField
          variant="outlined"
          margin="normal"
          style={{ backgroundColor: "white" }}
          required
          fullWidth
          id="email"
          type="email"
          label="New Email Address"
          htmlFor="email"
          name="email"
          minLength="7"
          inputRef={newEmailInputRef}
        />
        <TextField
          variant="outlined"
          margin="normal"
          style={{ backgroundColor: "white" }}
          required
          fullWidth
          name="password"
          label="New Password"
          type="password"
          id="password"
          htmlFor="password"
          minLength="7"
          inputRef={newPasswordInputRef}
        />
        {/* <label htmlFor="new-email">New Email</label>
        <input
          type="password"
          id="new-password"
          ref={newEmailInputRef}
        />
      </div>
      <div className={classes.control}>
        <label htmlFor="new-password">New Password</label>
        <input
          type="password"
          id="new-password"
          ref={newPasswordInputRef}
        /> */}
      </div>
      <Box textAlign="center" padding="10px">
        <Button color="primary" type="submit" variant="contained">
          Change Password
        </Button>
      </Box>
    </form>
  );
};

export default CredentialsForm;
