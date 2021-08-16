import React, { useRef, useContext } from "react";
import { useHistory } from "react-router-dom";
import { Button } from "@material-ui/core";

import AuthContext from "../../store/auth-context";
import classes from "./ProfileForm.module.css";
import { URL_UPDATE } from "../../Config/config";

const ProfileForm = () => {
  const history = useHistory();

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
        <label htmlFor="new-email">New Email</label>
        <input
          type="password"
          id="new-password"
          minLength="7"
          ref={newEmailInputRef}
        />
      </div>
      <div className={classes.control}>
        <label htmlFor="new-password">New Password</label>
        <input
          type="password"
          id="new-password"
          minLength="7"
          ref={newPasswordInputRef}
        />
      </div>
      <div className={classes.action}>
        <Button type="submit" variant="contained">
          Change Password
        </Button>
      </div>
    </form>
  );
};

export default ProfileForm;
