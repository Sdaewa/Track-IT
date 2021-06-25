import React from "react";
import Card from "../UI/Card";
import classes from "./StartingPageContent.module.css";

const StartingPageContent = () => {
  return (
    <Card>
      <section className={classes.starting}>
        <h1>Welcome to Track IT</h1>
      </section>
    </Card>
  );
};

export default StartingPageContent;
