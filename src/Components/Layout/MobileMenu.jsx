import React, { useState, useContext, useRef } from "react";
import { Link, useHistory } from "react-router-dom";
import { IconButton, MenuItem, Menu } from "@material-ui/core";
import MoreIcon from "@material-ui/icons/MoreVert";

import AuthContext from "../../store/auth-context";

const MobileMenu = () => {
  const authCtx = useContext(AuthContext);
  const history = useHistory();
  const isLoggedIn = authCtx.isLoggedIn;

  const [open, setOpen] = useState(true);
  const anchorRef = useRef(null);

  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);

  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const logoutHandler = () => {
    authCtx.logout();
    history.push("/");
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <>
      <div>
        {!isLoggedIn && (
          <div>
            <Link to="/auth" style={{ color: "white", textDecoration: "none" }}>
              <MenuItem onClick={handleClose}>Login</MenuItem>
            </Link>
          </div>
        )}
      </div>
      {isLoggedIn && (
        <Menu
          anchorEl={mobileMoreAnchorEl}
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
          id={mobileMenuId}
          keepMounted
          transformOrigin={{ vertical: "top", horizontal: "right" }}
          open={isMobileMenuOpen}
          onClose={handleMobileMenuClose}>
          {isLoggedIn && (
            <Link
              to="/new-job"
              style={{ color: "black", textDecoration: "none" }}>
              <MenuItem onClick={handleClose}>Add job</MenuItem>
            </Link>
          )}
          {isLoggedIn && (
            <Link to="/jobs" style={{ color: "black", textDecoration: "none" }}>
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
              <MenuItem onClick={handleClose && logoutHandler}>Logout</MenuItem>
            </Link>
          )}
        </Menu>
      )}
    </>
  );

  return (
    <>
      <IconButton
        aria-controls={mobileMenuId}
        aria-haspopup="true"
        onClick={handleMobileMenuOpen}
        color="inherit">
        <MoreIcon />
      </IconButton>
      {renderMobileMenu}
    </>
  );
};

export default MobileMenu;
