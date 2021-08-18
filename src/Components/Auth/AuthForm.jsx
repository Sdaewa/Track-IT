// import React, { useState, useRef, useContext } from "react";
// import { useHistory } from "react-router-dom";
// import {
//   Avatar,
//   Button,
//   CssBaseline,
//   TextField,
//   Grid,
//   Box,
//   Typography,
//   Container,
// } from "@material-ui/core";
// import { makeStyles } from "@material-ui/core/styles";
// import LockOutlinedIcon from "@material-ui/icons/LockOutlined";

// import AuthContext from "../../store/auth-context";
// // import classes from "./AuthForm.module.css";
// import { URL_SIGN_UP } from "../../Config/config";
// import { URL_SIGN_IN } from "../../Config/config";

// const useStyles = makeStyles((theme) => ({
//   paper: {
//     marginTop: theme.spacing(8),
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "center",
//   },
//   avatar: {
//     margin: theme.spacing(1),
//     backgroundColor: theme.palette.secondary.main,
//   },
//   form: {
//     width: "100%", // Fix IE 11 issue.
//     marginTop: theme.spacing(1),
//   },
//   submit: {
//     margin: theme.spacing(3, 0, 2),
//   },
// }));

// const AuthForm = () => {
//   const classes = useStyles();
//   const history = useHistory();
//   const emailInputRef = useRef();
//   const passwordInputRef = useRef();

//   const authCtx = useContext(AuthContext);

//   const [isLogin, setIsLogin] = useState(true);
//   const [isLoading, setIsLoading] = useState(false);

//   const switchAuthModeHandler = () => {
//     setIsLogin((prevState) => !prevState);
//   };

//   const submitHandler = (event) => {
//     event.preventDefault();

//     const enteredEmail = emailInputRef.current.value;
//     const enteredPassword = passwordInputRef.current.value;

//     setIsLoading(true);
//     let URL;
//     if (isLogin) {
//       URL = URL_SIGN_IN;
//     } else {
//       URL = URL_SIGN_UP;
//     }
//     fetch(URL, {
//       method: "POST",
//       body: JSON.stringify({
//         email: enteredEmail,
//         password: enteredPassword,
//         returnSecureToken: true,
//       }),
//       headers: {
//         "Content-Type": "application/json",
//       },
//     })
//       .then((res) => {
//         setIsLoading(false);
//         if (res.ok) {
//           return res.json();
//         } else {
//           return res.json().then((data) => {
//             let errorMessage = "Authentication failed!";
//             // if (data && data.error && data.error.message) {
//             //   errorMessage = data.error.message;
//             // }

//             throw new Error(errorMessage);
//           });
//         }
//       })
//       .then((data) => {
//         const expirationTime = new Date(
//           new Date().getTime() + +data.expiresIn * 1000
//         );
//         authCtx.login(data.idToken, expirationTime.toISOString());
//         history.replace("/");
//       })
//       .catch((err) => {
//         alert(err.message);
//       });
//   };

//   return (
//     <section className={classes.auth}>
//       <h1>{isLogin ? "Login" : "Sign Up"}</h1>
//       <form onSubmit={submitHandler}>
//         {/* <Box className={classes.control}>
//           <label htmlFor="email">Email</label>
//           <input type="email" id="email" required ref={emailInputRef} />
//         </Box>
//         <Box className={classes.control}>
//           <label htmlFor="password">Password</label>
//           <input
//             type="password"
//             id="password"
//             required
//             ref={passwordInputRef}
//           />
//         </Box> */}

//         <TextField
//           variant="outlined"
//           margin="normal"
//           required
//           fullWidth
//           id="email"
//           type="email"
//           label="Email Address"
//           htmlFor="email"
//           name="email"
//           autoFocus
//           inputRef={emailInputRef}
//           noValidate
//         />
//         <TextField
//           variant="outlined"
//           margin="normal"
//           required
//           fullWidth
//           name="password"
//           label="Password"
//           type="password"
//           id="password"
//           htmlFor="password"
//           inputRef={passwordInputRef}
//           noValidate
//         />
//         {/* <Box className={classes.actions}>
//           {!isLoading && (
//             <Button type="submit">
//               {isLogin ? "Login" : "Create Account"}
//             </Button>
//           )}
//           {isLoading && <p>Sending request...</p>}
//           <Button
//             type="submit"
//             className={classes.toggle}
//             onClick={switchAuthModeHandler}>
//             {isLogin ? "Create new account" : "Login with existing account"}
//           </Button>
//         </Box> */}
//         {!isLoading && (
//           <Button
//             type="submit"
//             fullWidth
//             variant="contained"
//             color="primary"
//             className={classes.submit}>
//             {isLogin ? "Login" : "Create Account"}
//           </Button>
//         )}
//         {isLoading && <p>Sending request...</p>}
//         <Grid container>
//           <Grid item>
//             <Button onClick={switchAuthModeHandler}>
//               {isLogin ? (
//                 <Typography>Create new account</Typography>
//               ) : (
//                 <Typography>Login with existing account</Typography>
//               )}
//             </Button>
//           </Grid>
//         </Grid>
//       </form>
//     </section>
//   );

//   //   return (
//   //     <Container component="main" maxWidth="xs">
//   //       <CssBaseline />
//   //       <div className={classes.paper}>
//   //         <Avatar className={classes.avatar}>
//   //           <LockOutlinedIcon />
//   //         </Avatar>
//   //         <Typography component="h1" variant="h5">
//   //           {isLogin ? "Login" : "Sign Up"}
//   //         </Typography>
//   //         <form className={classes.form} onSubmit={submitHandler}>
//   //           <TextField
//   //             variant="outlined"
//   //             margin="normal"
//   //             required
//   //             fullWidth
//   //             id="email"
//   //             type="email"
//   //             label="Email Address"
//   //             htmlFor="email"
//   //             name="email"
//   //             autoFocus
//   // inputRef={emailInputRef}
//   //           />
//   //           <TextField
//   //             variant="outlined"
//   //             margin="normal"
//   //             required
//   //             fullWidth
//   //             name="password"
//   //             label="Password"
//   //             type="password"
//   //             id="password"
//   //             htmlFor="password"
//   // inputRef={passwordInputRef}
//   //           />

//   //           {!isLoading && (
//   //             <Button
//   //               type="submit"
//   //               fullWidth
//   //               variant="contained"
//   //               color="primary"
//   //               className={classes.submit}>
//   //               {isLogin ? "Login" : "Create Account"}
//   //             </Button>
//   //           )}
//   //           {isLoading && <p>Sending request...</p>}
//   //           <Grid container>
//   //             <Grid item>
//   //               <Button onClick={switchAuthModeHandler}>
//   //                 {isLogin ? (
//   //                   <Typography>Create new account</Typography>
//   //                 ) : (
//   //                   <Typography>Login with existing account</Typography>
//   //                 )}
//   //               </Button>
//   //             </Grid>
//   //           </Grid>
//   //         </form>
//   //       </div>
//   //     </Container>
//   //   );
// };

// export default AuthForm;

import React, { useState, useRef, useContext } from "react";
import { useHistory } from "react-router-dom";
import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  Grid,
  Typography,
  Container,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import AuthContext from "../../store/auth-context";
import { URL_SIGN_UP } from "../../Config/config";
import { URL_SIGN_IN } from "../../Config/config";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const AuthForm = () => {
  const classes = useStyles();

  const history = useHistory();
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const authCtx = useContext(AuthContext);

  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    setIsLoading(true);
    let URL;
    if (isLogin) {
      URL = URL_SIGN_IN;
    } else {
      URL = URL_SIGN_UP;
    }
    fetch(URL, {
      method: "POST",
      body: JSON.stringify({
        email: enteredEmail,
        password: enteredPassword,
        returnSecureToken: true,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        setIsLoading(false);
        if (res.ok) {
          return res.json();
        } else {
          return res.json().then((data) => {
            console.log(res);
            let errorMessage = "Authentication failed!";
            throw new Error(errorMessage);
          });
        }
      })
      .then((data) => {
        const expirationTime = new Date(
          new Date().getTime() + +data.expiresIn * 1000
        );
        authCtx.login(data.idToken, expirationTime.toISOString());
        history.replace("/");
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          {isLogin ? "Login" : "Sign Up"}
        </Typography>
        <form className={classes.form} onSubmit={submitHandler}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            type="email"
            label="Email Address"
            htmlFor="email"
            name="email"
            autoFocus
            inputRef={emailInputRef}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            htmlFor="password"
            inputRef={passwordInputRef}
          />

          {!isLoading && (
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}>
              {isLogin ? "Login" : "Create Account"}
            </Button>
          )}
          {isLoading && <p>Sending request...</p>}
          <Grid container>
            <Grid item>
              <Button onClick={switchAuthModeHandler}>
                {isLogin ? (
                  <Typography>Create new account</Typography>
                ) : (
                  <Typography>Login with existing account</Typography>
                )}
              </Button>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
};

export default AuthForm;
