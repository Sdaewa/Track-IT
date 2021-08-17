import React from "react";

import { AppBar, Toolbar, Typography } from "@material-ui/core";

import MenuList from "./MenuListComposition";
import MobileMenu from "./MobileMenu";
import useStyles from "./stylesNavbar";

const Navbar = () => {
  const classes = useStyles();

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
