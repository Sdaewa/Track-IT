import React from "react";
import { Link } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  CssBaseline,
  MenuItem,
} from "@material-ui/core";

import MenuList from "./MenuListComposition";
import MobileMenu from "./MobileMenu";
import useStyles from "./stylesNavbar";

const Navbar = () => {
  const classes = useStyles();

  return (
    <div className={classes.grow}>
      <CssBaseline />
      <AppBar position="static">
        <Toolbar>
          <Link to="/" style={{ color: "black", textDecoration: "none" }}>
            <MenuItem>
              <Typography className={classes.title} variant="h6" noWrap>
                Track IT
              </Typography>
            </MenuItem>
          </Link>
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
