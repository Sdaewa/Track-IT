import React, { useState, useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { AppBar, Toolbar, Typography, MenuItem, Menu } from "@material-ui/core";

// import AuthContext from "../../store/auth-context";
import MenuList from "./MenuListComposition";
import MobileMenu from "./MobileMenu";
import useStyles from "./stylesNavbar";

const Navbar = () => {
  // const authCtx = useContext(AuthContext);
  // const history = useHistory();
  // const isLoggedIn = authCtx.isLoggedIn;
  const classes = useStyles();
  // const [open, setOpen] = React.useState(false);
  // const anchorRef = React.useRef(null);
  // const [setAnchorEl] = useState(null);
  // const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);

  // const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  // const handleProfileMenuOpen = (event) => {
  //   setAnchorEl(event.currentTarget);
  // };
  // const logoutHandler = () => {
  //   authCtx.logout();
  //   history.push("/");
  // };

  // const handleClose = (event) => {
  //   if (anchorRef.current && anchorRef.current.contains(event.target)) {
  //     return;
  //   }

  //   setOpen(false);
  // };

  // const handleMobileMenuClose = () => {
  //   setMobileMoreAnchorEl(null);
  // };

  // const handleMobileMenuOpen = (event) => {
  //   setMobileMoreAnchorEl(event.currentTarget);
  // };

  // const mobileMenuId = "primary-search-account-menu-mobile";
  // const renderMobileMenu = (
  //   <>
  //     <div>
  //       {!isLoggedIn && (
  //         <div>
  //           <Link to="/auth" style={{ color: "white", textDecoration: "none" }}>
  //             <MenuItem onClick={handleClose}>Login</MenuItem>
  //           </Link>
  //         </div>
  //       )}
  //     </div>
  //     <Menu
  //       anchorEl={mobileMoreAnchorEl}
  //       anchorOrigin={{ vertical: "top", horizontal: "right" }}
  //       id={mobileMenuId}
  //       keepMounted
  //       transformOrigin={{ vertical: "top", horizontal: "right" }}
  //       open={isMobileMenuOpen}
  //       onClose={handleMobileMenuClose}>
  //       {isLoggedIn && (
  //         <Link
  //           to="/new-job"
  //           style={{ color: "black", textDecoration: "none" }}>
  //           <MenuItem onClick={handleClose}>Add job</MenuItem>
  //         </Link>
  //       )}
  //       {isLoggedIn && (
  //         <Link to="/jobs" style={{ color: "black", textDecoration: "none" }}>
  //           <MenuItem onClick={handleClose}>Jobs</MenuItem>
  //         </Link>
  //       )}
  //       {isLoggedIn && (
  //         <Link
  //           to="/profile"
  //           style={{ color: "black", textDecoration: "none" }}>
  //           <MenuItem onClick={handleClose}>Profile</MenuItem>
  //         </Link>
  //       )}
  //       {isLoggedIn && (
  //         <Link style={{ color: "black", textDecoration: "none" }}>
  //           <MenuItem onClick={handleClose && logoutHandler}>Logout</MenuItem>
  //         </Link>
  //       )}
  //     </Menu>
  //   </>
  // );

  return (
    <div className={classes.grow}>
      <AppBar position="static">
        <Toolbar>
          <Typography className={classes.title} variant="h6" noWrap>
            Track IT
          </Typography>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <MenuList />
          </div>
          <div className={classes.sectionMobile}>
            <MobileMenu />
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
