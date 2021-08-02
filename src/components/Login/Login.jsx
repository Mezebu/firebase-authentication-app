import React, { useRef, useState } from "react";
// prettier-ignore
import {Card, CardContent, Typography, TextField, Button, Checkbox,  FormControlLabel} from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";
import { Link, useHistory } from "react-router-dom";

import useStyles from "./styles";
import { useAuth } from "../../contexts/AuthContext";

const Login = () => {
  const classes = useStyles();
  const history = useHistory();
  const { login, signInWithGoogle } = useAuth();

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const emailRef = useRef();
  const passwordRef = useRef();

  const handleSignIn = async (e) => {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);

      await login(emailRef.current.value, passwordRef.current.value);
      history.push("/dashboard");
    } catch (error) {
      setError(error.message);
    }

    setLoading(false);
  };

  const handleSignInWIthGoogle = async (e) => {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);

      await signInWithGoogle();
      history.push("/dashboard");
    } catch (error) {
      setError(error.message);
    }
    setLoading(false);
  };

  return (
    <div className={classes.root}>
      <Card
        className={classes.card}
        variant="elevation"
        style={{
          background: " rgba( 255, 255, 255, 0.10 )",
          boxShadow: " 0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
          backdropFilter: "blur( 2.0px )",
          WebkitBackdropFilter: " blur( 2.0px )",
          border: "1px solid rgba( 255, 255, 255, 0.18 )",
        }}
      >
        <CardContent className={classes.left}>
          <div className={classes.leftContents}>
            <Typography variant="h4" style={{ fontWeight: 600 }} gutterBottom>
              Sign In
            </Typography>
            <Typography color="textSecondary" variant="body1" gutterBottom>
              Welcome, we missed you!
            </Typography>
            <div>
              {error && (
                <Alert severity="warning" className={classes.alert}>
                  {error}
                </Alert>
              )}
            </div>

            <form className={classes.formInputs}>
              {/* prettier-ignore */}
              <TextField label="Your email" type="email" inputRef={emailRef} required/>
              {/* prettier-ignore */}
              <TextField label="Password" type="password" inputRef={passwordRef} required/>

              <div className={classes.subLinks}>
                <FormControlLabel
                  control={<Checkbox color="primary" />}
                  label="Stay signed in"
                />

                <Link to="password">Forgot Password?</Link>
              </div>
              <div className={classes.spacing} />

              <div className={classes.btn}>
                {/* prettier-ignore */}
                <Button onClick={handleSignIn}  disabled={loading} variant="contained" size="large" type="submit" >
              Sign In
               </Button>
              </div>

              <div className={classes.spacing} />
              <div className={classes.btnGoogle}>
                {/* prettier-ignore */}
                <Button  onClick={handleSignInWIthGoogle} disabled={loading} type='submit' variant="contained" size="large">
                  <Typography color="primary">Sign In with google</Typography>
                </Button>
              </div>
            </form>
          </div>
        </CardContent>
        <CardContent className={classes.right}>
          Need an account? <Link to="/signup">Sign Up</Link>
        </CardContent>
      </Card>
    </div>
  );
};

export default Login;
