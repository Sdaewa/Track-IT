import React, { useState, useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { IconButton, MenuItem, Menu } from "@material-ui/core";
import MoreIcon from "@material-ui/icons/MoreVert";

import AuthContext from "../../store/auth-context";

const MobileMenu = () => {
  const authCtx = useContext(AuthContext);
  const history = useHistory();
  const isLoggedIn = authCtx.isLoggedIn;

  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);

  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const logoutHandler = () => {
    authCtx.logout();
    history.push("/");
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
              <MenuItem>Login</MenuItem>
            </Link>
          </div>
        )}
      </div>

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
            <MenuItem>Add job</MenuItem>
          </Link>
        )}
        {isLoggedIn && (
          <Link to="/jobs" style={{ color: "black", textDecoration: "none" }}>
            <MenuItem>Jobs</MenuItem>
          </Link>
        )}
        {isLoggedIn && (
          <Link
            to="/profile"
            style={{ color: "black", textDecoration: "none" }}>
            <MenuItem>Credentials</MenuItem>
          </Link>
        )}
        {isLoggedIn && (
          <Link to="/" style={{ color: "black", textDecoration: "none" }}>
            <MenuItem onClick={logoutHandler}>Logout</MenuItem>
          </Link>
        )}
      </Menu>
    </>
  );

  return (
    <>
      {isLoggedIn && (
        <IconButton
          aria-controls={mobileMenuId}
          aria-haspopup="true"
          onClick={handleMobileMenuOpen}
          color="inherit">
          <MoreIcon />
        </IconButton>
      )}
      {renderMobileMenu}
    </>
  );
};

export default MobileMenu;
