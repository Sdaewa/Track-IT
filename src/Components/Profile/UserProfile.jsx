import React from "react";

import Card from "../UI/Card";
import ProfileForm from "./ProfileForm";
import classes from "./UserProfile.module.css";

const UserProfile = () => {
  return (
    <Card>
      <section className={classes.profile}>
        <h1>Profile</h1>
        <ProfileForm />
      </section>
    </Card>
  );
};

export default UserProfile;
