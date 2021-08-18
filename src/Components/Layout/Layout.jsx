import React from "react";
import { CssBaseline, Container } from "@material-ui/core";

import Navbar from "./Navbar";
// import Footer from "./Footer";

const Layout = (props) => {
  return (
    <>
      <CssBaseline />
      <div className="header">
        <Navbar />
      </div>
      <main>
        <Container>{props.children}</Container>
      </main>
      <footer>{/* <Footer /> */}</footer>
    </>
  );
};

export default Layout;
