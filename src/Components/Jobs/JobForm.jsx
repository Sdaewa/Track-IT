import React, { Fragment, useRef, useState } from "react";
import { Prompt } from "react-router-dom";

import { Button, TextField, Grid } from "@material-ui/core";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import "date-fns";
import DateFnsUtils from "@date-io/date-fns";
import AccountCircle from "@material-ui/icons/AccountCircle";
import { makeStyles } from "@material-ui/core/styles";

import Card from "../UI/Card";
import LoadingSpinner from "../UI/LoadingSpinner";
import myClasses from "./JobForm.module.css";

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
    new Date("2014-08-18T21:11:54")
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
  const companyControlClasses = `${myClasses.control} ${
    formInputsValidity.company ? "" : myClasses.invalid
  }`;
  const roleControlClasses = `${myClasses.control} ${
    formInputsValidity.role ? "" : myClasses.invalid
  }`;
  const techStackControlClasses = `${myClasses.control} ${
    formInputsValidity.techStack ? "" : myClasses.invalid
  }`;
  const appliedDateControlClasses = `${myClasses.control} ${
    formInputsValidity.appliedDate ? "" : myClasses.invalid
  }`;

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
          <div className={classes.margin && companyControlClasses}>
            <Grid container spacing={1} alignItems="flex-end">
              <Grid item>
                <AccountCircle />
              </Grid>
              <Grid item>
                <TextField
                  id="input-with-icon-grid"
                  label="Company"
                  inputRef={companyRef}
                />
                {!formInputsValidity.company && <p>Please enter a company</p>}
              </Grid>
            </Grid>
          </div>
          <div className={classes.margin && roleControlClasses}>
            <Grid container spacing={1} alignItems="flex-end">
              <Grid item>
                <AccountCircle />
              </Grid>
              <Grid item>
                <TextField
                  id="input-with-icon-grid"
                  label="Role"
                  inputRef={roleRef}
                />
                {!formInputsValidity.role && <p>Please enter a role</p>}
              </Grid>
            </Grid>
          </div>
          <div className={classes.margin && techStackControlClasses}>
            <Grid container spacing={1} alignItems="flex-end">
              <Grid item>
                <AccountCircle />
              </Grid>
              <Grid item>
                <TextField
                  id="input-with-icon-grid"
                  label="Tech Stack"
                  inputRef={techStackRef}
                />
                {!formInputsValidity.techStack && (
                  <p>Please enter the tech stack</p>
                )}
              </Grid>
            </Grid>
          </div>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <Grid container justifyContent="space-around">
              <KeyboardDatePicker
                className={appliedDateControlClasses}
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

          {/* <div className={companyControlClasses}>
            <label htmlFor="company">Company</label>
            <input type="text" id="company" ref={companyRef} />
            {!formInputsValidity.company && <p>Please enter a company</p>}
          </div>
          <div className={roleControlClasses}>
            <label htmlFor="role">Role</label>
            <input type="text" id="role" ref={roleRef} />
            {!formInputsValidity.role && <p>Please enter a role</p>}
          </div>
          <div className={techStackCodeControlClasses}>
            <label htmlFor="techStack">Tech Stack</label>
            <input type="text" id="techStack" ref={techStackRef} />
            {!formInputsValidity.techStack && (
              <p>Please enter the tech stack</p>
            )}
          </div>
          <div className={appliedDateControlClasses}>
            <label htmlFor="appliedDate">Date</label>
            <input type="date" id="appliedDate" ref={appliedDateRef}></input>
            {!formInputsValidity.appliedDate && <p>Please enter a date</p>}
          </div> */}
          <div className={classes.actions}>
            <Button
              type="submit"
              variant="contained"
              onClick={finishEnteringHandler}
              className="btn">
              Add Job
            </Button>
          </div>
        </form>
      </Card>
    </Fragment>
  );
};

export default JobForm;

// export default function MaterialUIPickers() {
//   // The first commit of Material-UI
// const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));

// const handleDateChange = (date) => {
//   setSelectedDate(date);
// };

//   return (
//     <MuiPickersUtilsProvider utils={DateFnsUtils}>
//       <Grid container justifyContent="space-around">
//         <KeyboardDatePicker
//           disableToolbar
//           variant="inline"
//           format="MM/dd/yyyy"
//           margin="normal"
//           id="date-picker-inline"
//           label="Date picker inline"
//           value={selectedDate}
//           onChange={handleDateChange}
//           KeyboardButtonProps={{
//             'aria-label': 'change date',
//           }}
//         />
// <KeyboardDatePicker
//   margin="normal"
//   id="date-picker-dialog"
//   label="Date picker dialog"
//   format="MM/dd/yyyy"
//   value={selectedDate}
//   onChange={handleDateChange}
//   KeyboardButtonProps={{
//     'aria-label': 'change date',
//   }}
// />
//         <KeyboardTimePicker
//           margin="normal"
//           id="time-picker"
//           label="Time picker"
//           value={selectedDate}
//           onChange={handleDateChange}
//           KeyboardButtonProps={{
//             'aria-label': 'change time',
//           }}
//         />
//       </Grid>
//     </MuiPickersUtilsProvider>
//   );
// }
