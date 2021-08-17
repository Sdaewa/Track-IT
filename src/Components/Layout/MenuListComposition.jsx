import React, { useContext, useEffect, useRef, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import {
  Button,
  ClickAwayListener,
  Grow,
  Paper,
  Popper,
  MenuItem,
  MenuList,
} from "@material-ui/core";

import AuthContext from "../../store/auth-context";

const MenuListComposition = () => {
  const authCtx = useContext(AuthContext);
  const history = useHistory();
  const isLoggedIn = authCtx.isLoggedIn;
  const [open, setOpen] = useState(false);
  const anchorRef = useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  const handleListKeyDown = (event) => {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    }
  };

  const logoutHandler = () => {
    authCtx.logout();
    history.push("/");
  };

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = useRef(open);
  useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <>
      {!isLoggedIn && (
        <div>
          <Link to="/auth" style={{ color: "white", textDecoration: "none" }}>
            <MenuItem onClick={handleClose}>Login</MenuItem>
          </Link>
        </div>
      )}
      <div>
        <Button
          ref={anchorRef}
          aria-controls={open ? "menu-list-grow" : undefined}
          aria-haspopup="true"
          onClick={handleToggle}>
          MENU
        </Button>
        <Popper
          open={open}
          anchorEl={anchorRef.current}
          role={undefined}
          transition
          disablePortal>
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{
                transformOrigin:
                  placement === "bottom" ? "center top" : "center bottom",
              }}>
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList
                    autoFocusItem={open}
                    id="menu-list-grow"
                    onKeyDown={handleListKeyDown}>
                    {isLoggedIn && (
                      <Link
                        to="/new-job"
                        style={{ color: "black", textDecoration: "none" }}>
                        <MenuItem onClick={handleClose}>Add job</MenuItem>
                      </Link>
                    )}
                    {isLoggedIn && (
                      <Link
                        to="/jobs"
                        style={{ color: "black", textDecoration: "none" }}>
                        <MenuItem onClick={handleClose}>Jobs</MenuItem>
                      </Link>
                    )}
                    {isLoggedIn && (
                      <Link
                        to="/profile"
                        style={{ color: "black", textDecoration: "none" }}>
                        <MenuItem onClick={handleClose}>Profile</MenuItem>
                      </Link>
                    )}
                    {isLoggedIn && (
                      <Link style={{ color: "black", textDecoration: "none" }}>
                        <MenuItem onClick={handleClose && logoutHandler}>
                          Logout
                        </MenuItem>
                      </Link>
                    )}
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </div>
    </>
  );
};

export default MenuListComposition;
