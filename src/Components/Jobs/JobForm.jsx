import React, { Fragment, useRef, useState } from "react";
import { Prompt } from "react-router-dom";

import { Button, Box, TextField, Grid, Typography } from "@material-ui/core";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import "date-fns";
import DateFnsUtils from "@date-io/date-fns";
import BusinessIcon from "@material-ui/icons/Business";
import CodeIcon from "@material-ui/icons/Code";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import { makeStyles } from "@material-ui/core/styles";

import Card from "../UI/Card";
import LoadingSpinner from "../UI/LoadingSpinner";

const isEmpty = (value) => value.trim() === "";

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
}));

const JobForm = (props) => {
  const classes = useStyles();
  const [isEntering, setIsEntering] = useState(false);
  const [formInputsValidity, setFormInputsValidity] = useState({
    company: true,
    role: true,
    techStack: true,
    appliedDate: true,
  });
  const [selectedDate, setSelectedDate] = useState(
    new Date("2020-08-18T21:11:54")
  );

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const companyRef = useRef();
  const roleRef = useRef();
  const techStackRef = useRef();
  const appliedDateRef = useRef();

  function submitFormHandler(event) {
    event.preventDefault();

    const inputCompany = companyRef.current.value;
    const inputRole = roleRef.current.value;
    const inputTechStack = techStackRef.current.value;
    const inputAppliedDate = appliedDateRef.current.value;

    const companyIsValid = !isEmpty(inputCompany);
    const roleIsValid = !isEmpty(inputRole);
    const techStackIsValid = !isEmpty(inputTechStack);
    const appliedDateIsValid = !isEmpty(inputAppliedDate);

    setFormInputsValidity({
      company: companyIsValid,
      role: roleIsValid,
      techStack: techStackIsValid,
      appliedDate: appliedDateIsValid,
    });

    const formIsValid =
      companyIsValid && roleIsValid && techStackIsValid && appliedDateIsValid;

    if (formIsValid) {
      props.onAddJob({
        company: inputCompany,
        role: inputRole,
        techStack: inputTechStack,
        appliedDate: inputAppliedDate,
      });
    } else {
      return;
    }
  }

  const finishEnteringHandler = () => {
    setIsEntering(false);
  };

  const formFocusedHandler = () => {
    setIsEntering(true);
  };

  return (
    <Fragment>
      <Prompt
        when={isEntering}
        message={
          "Are you sure you want to leave? All your entered data will be lost!"
        }
      />
      <Card>
        <form
          onFocus={formFocusedHandler}
          className={classes.form}
          onSubmit={submitFormHandler}>
          {props.isLoading && (
            <div className={classes.loading}>
              <LoadingSpinner />
            </div>
          )}
          <div className={classes.margin}>
            <Grid container spacing={1} alignItems="flex-end">
              <Grid item>
                <BusinessIcon />
              </Grid>
              <Grid item>
                <TextField
                  id="input-with-icon-grid"
                  label="Company"
                  inputRef={companyRef}
                />
                {!formInputsValidity.company && (
                  <Typography color="secondary">
                    Please enter a company
                  </Typography>
                )}
              </Grid>
            </Grid>
          </div>
          <div className={classes.margin}>
            <Grid container spacing={1} alignItems="flex-end">
              <Grid item>
                <PermIdentityIcon />
              </Grid>
              <Grid item>
                <TextField
                  id="input-with-icon-grid"
                  label="Role"
                  inputRef={roleRef}
                />
                {!formInputsValidity.role && (
                  <Typography color="secondary">Please enter a role</Typography>
                )}
              </Grid>
            </Grid>
          </div>
          <div className={classes.margin}>
            <Grid container spacing={1} alignItems="flex-end">
              <Grid item>
                <CodeIcon />
              </Grid>
              <Grid item>
                <TextField
                  id="input-with-icon-grid"
                  label="Tech Stack"
                  inputRef={techStackRef}
                />
                {!formInputsValidity.techStack && (
                  <Typography color="secondary">
                    Please enter the tech stack
                  </Typography>
                )}
              </Grid>
            </Grid>
          </div>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <Grid container justifyContent="space-around">
              <KeyboardDatePicker
                margin="normal"
                id="date-picker-dialog"
                label="Date picker dialog"
                format="MM/dd/yyyy"
                value={selectedDate}
                inputRef={appliedDateRef}
                onChange={handleDateChange}
                KeyboardButtonProps={{
                  "aria-label": "change date",
                }}
              />
            </Grid>
          </MuiPickersUtilsProvider>
          <Box textAlign="center">
            <Button
              color="primary"
              type="submit"
              variant="contained"
              onClick={finishEnteringHandler}
              className="btn">
              Add Job
            </Button>
          </Box>
        </form>
      </Card>
    </Fragment>
  );
};

export default JobForm;
