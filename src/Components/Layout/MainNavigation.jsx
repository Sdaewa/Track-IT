import React, { useContext } from "react";
import { NavLink, useHistory } from "react-router-dom";

import AuthContext from "../store/auth-context";
import classes from "./MainNavigation.module.css";

const MainNavigation = () => {
  const authCtx = useContext(AuthContext);
  const history = useHistory();

  const isLoggedIn = authCtx.isLoggedIn;

  const logoutHandler = () => {
    authCtx.logout();
    history.push("/");
  };

  return (
    <header className={classes.header}>
      <div className={classes.logo}>Track IT</div>
      <nav className={classes.nav}>
        <ul>
          {!isLoggedIn && (
            <li>
              <NavLink activeClassName={classes.active} to="/auth">Login</NavLink>
            </li>
          )}
          {!isLoggedIn && (
            <li>
              <NavLink activeClassName={classes.active} to="/profile">Profile</NavLink>
            </li>
          )}
          {!isLoggedIn && (
            <li>
              <NavLink activeClassName={classes.active} to="/new-job">Add Job</NavLink>
            </li>
          )}
          {!isLoggedIn && (
            <li>
              <NavLink activeClassName={classes.active} to="/Jobs">Your Jobs</NavLink>
            </li>
          )}
           {!isLoggedIn && (
            <li>
              <button onClick={logoutHandler}>Logout</button>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};


export default MainNavigation;
